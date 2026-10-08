#!/usr/bin/env node
// Patches create.sh applies after copying the overlay: edits that have to merge
// into files the CLIs generate instead of replacing them. Runs in the project root.
import {
  appendFileSync,
  existsSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { basename } from "node:path";
import { parseArgs } from "node:util";

const { values: options } = parseArgs({
  options: {
    description: { default: "", type: "string" },
    name: { default: "", type: "string" },
    testing: { default: false, type: "boolean" },
    ui: { default: "shadcn", type: "string" },
  },
});

const shadcn = options.ui === "shadcn";

const read = (file) => readFileSync(file, "utf8");
const readJson = (file) => JSON.parse(read(file));
const writeJson = (file, data) =>
  writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
const warn = (message) => console.warn(`next-starter: warning: ${message}`);

const titleCase = (slug) =>
  slug
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

// Values land inside double-quoted TypeScript string literals.
const tsString = (value) => JSON.stringify(value).slice(1, -1);

const appName = options.name || titleCase(basename(process.cwd()));
const appDescription = options.description || `${appName}, built with Next.js.`;

// App name and description placeholders.
let metadata = read("lib/metadata.ts");
metadata = metadata
  .replaceAll("{{APP_NAME}}", tsString(appName))
  .replaceAll("{{APP_DESCRIPTION}}", tsString(appDescription));
writeFileSync("lib/metadata.ts", metadata);

// package.json scripts and engines.
const pkg = readJson("package.json");
pkg.scripts = {
  ...pkg.scripts,
  lint: "ultracite check",
  typecheck: "next typegen && tsc --noEmit",
  typegen: "next typegen",
  ...(options.testing && {
    test: "vitest run && playwright test",
    "test:e2e": "playwright test",
    "test:unit": "vitest run",
    "test:watch": "vitest",
  }),
};
pkg.engines = { ...pkg.engines, node: ">=20.9.0" };
writeJson("package.json", pkg);

// Biome: skip public/ (stock SVGs fail a11y rules) and allow shadcn's lib/utils.ts
// re-export of `cn`.
const biomeFile = ["biome.json", "biome.jsonc"].find((file) =>
  existsSync(file)
);
if (biomeFile) {
  try {
    const biome = readJson(biomeFile);
    biome.files ??= {};
    const includes = biome.files.includes ?? [];
    if (!includes.includes("!public")) {
      biome.files.includes = [...includes, "!public"];
    }
    if (shadcn) {
      biome.overrides = [
        ...(biome.overrides ?? []),
        {
          includes: ["lib/utils.ts"],
          linter: { rules: { performance: { noBarrelFile: "off" } } },
        },
      ];
    }
    writeJson(biomeFile, biome);
  } catch (error) {
    warn(`could not patch ${biomeFile}: ${error.message}`);
  }
} else {
  warn("no biome.json found; skipped Biome patches");
}

// .gitignore: create-next-app ignores .env*, which would also hide .env.example.
const gitignoreLines = ["!.env.example"];
if (options.testing) {
  gitignoreLines.push(
    "/test-results/",
    "/playwright-report/",
    "/blob-report/",
    "/playwright/.cache/"
  );
}
appendFileSync(
  ".gitignore",
  `\n# next-starter\n${gitignoreLines.join("\n")}\n`
);

// MCP servers for coding agents.
const mcp = existsSync(".mcp.json") ? readJson(".mcp.json") : {};
mcp.mcpServers = {
  ...mcp.mcpServers,
  "next-devtools": { args: ["-y", "next-devtools-mcp@latest"], command: "npx" },
  ...(shadcn && {
    shadcn: { args: ["-y", "shadcn@latest", "mcp"], command: "npx" },
  }),
};
writeJson(".mcp.json", mcp);

// next.config.ts: typed routes and image settings on top of create-next-app's config.
const nextConfigFile = "next.config.ts";
const anchor = "const nextConfig: NextConfig = {";
const nextConfig = read(nextConfigFile);
if (nextConfig.includes("typedRoutes")) {
  // Already configured; nothing to add.
} else if (nextConfig.includes(anchor)) {
  writeFileSync(
    nextConfigFile,
    nextConfig.replace(
      anchor,
      [
        "const IMAGE_QUALITY_DEFAULT = 75;",
        "const IMAGE_QUALITY_HIGH = 100;",
        "",
        anchor,
        "  images: {",
        '    formats: ["image/webp", "image/avif"],',
        "    qualities: [IMAGE_QUALITY_DEFAULT, IMAGE_QUALITY_HIGH],",
        "  },",
        "  typedRoutes: true,",
      ].join("\n")
    )
  );
} else {
  warn(
    `${nextConfigFile} changed shape; add typedRoutes and images settings by hand`
  );
}

// CLAUDE.md sections that depend on the chosen options.
const sections = [];
if (shadcn) {
  sections.push(
    [
      "## UI",
      "",
      "- shadcn/ui components live in `components/ui`; add them with `pnpm dlx shadcn@latest add <name>` or the shadcn MCP server.",
      "- Icons: `lucide-react`.",
    ].join("\n")
  );
}
if (options.testing) {
  sections.push(
    [
      "## Testing",
      "",
      "- `pnpm test:unit` - Vitest + Testing Library, run once (`**/*.test.ts(x)`); `pnpm test:watch` for watch mode",
      "- `pnpm test:e2e` - Playwright (`tests/e2e`) against a production build; run `pnpm exec playwright install` once first",
      "- `pnpm test` - both",
    ].join("\n")
  );
}
if (sections.length > 0) {
  appendFileSync("CLAUDE.md", `\n${sections.join("\n\n")}\n`);
}
