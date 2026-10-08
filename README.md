# next-starter

[![Smoke test](https://github.com/lumen-limitless/template-next/actions/workflows/smoke.yml/badge.svg)](https://github.com/lumen-limitless/template-next/actions/workflows/smoke.yml)

Scaffold a new Next.js app from the **latest** create-next-app, Ultracite (Biome) and shadcn/ui or plain Tailwind, plus my own conventions. It runs as a Claude Code plugin or as a plain `npx` command.

This repo used to be a Next.js template to clone. Keeping its dependencies and config current was constant work, so it now generates each project from the official CLIs at `@latest` and only stores the files those CLIs can't produce.

## Use it from Claude Code

```text
/plugin marketplace add lumen-limitless/template-next
/plugin install next-starter@lumen-limitless
```

Then ask for it ("create a new Next.js app called acme-site with tests"), or call the skill directly:

```text
/next-starter:new-next-app acme-site --ui shadcn --testing
```

The skill runs the script, personalises the metadata and anything else you asked for, and checks lint and types.

## Use it without Claude

```bash
npx github:lumen-limitless/template-next my-app --ui tailwind --testing
```

Requires Node.js 20.9+, pnpm and git.

| Option | Default | |
| --- | --- | --- |
| `--ui shadcn\|tailwind` | `shadcn` | shadcn/ui, or plain Tailwind with a `cn` helper |
| `--preset <name>` | shadcn's default | shadcn preset (shadcn only) |
| `--testing` | off | Jest, Testing Library and Playwright |
| `--name <name>` | from the directory | App name used in metadata |
| `--description <text>` | generic | Site description used in metadata |
| `--no-commit` | off | Leave the next-starter changes uncommitted |

## What you get

| Source | Provides |
| --- | --- |
| `create-next-app@latest` | Next.js, React, TypeScript, Tailwind CSS 4, React Compiler, Cache Components, `AGENTS.md` pointing agents at the installed Next.js docs |
| `ultracite init` | Biome config, husky + lint-staged pre-commit, Claude Code and Cursor post-edit fix hooks, VS Code / Zed / Cursor settings, Ultracite skill and code standards |
| `shadcn init` (`--ui shadcn`) | `components.json`, theme, `cn`, shadcn skill and MCP server |
| `overlay/common` | SEO metadata (`lib/metadata.ts`), zod-validated env (`lib/env.ts`), sitemap, robots, manifest, OG image, error / 404 / loading pages, `/api/health`, root layout, `ServerAction` types, `CLAUDE.md` conventions, next-devtools MCP server, typed routes and image config, CI (lint + typecheck), Dependabot |
| `overlay/testing` (`--testing`) | Jest + Testing Library, Playwright, example tests, test workflow |

## How it works

[`create.sh`](plugins/next-starter/skills/new-next-app/scripts/create.sh):

1. `create-next-app@latest` with TypeScript, Tailwind, Biome, App Router, React Compiler and Cache Components.
2. `ultracite init` (config only), then `pnpm install`.
3. `shadcn init` for `--ui shadcn`.
4. Copies `overlay/common`, plus `overlay/tailwind` or `overlay/testing` as selected. Dotfiles are stored as `_name` (for example `_github/`) so plugin installs and npm packing keep them, and are renamed on copy.
5. [`patch-project.mjs`](plugins/next-starter/skills/new-next-app/scripts/patch-project.mjs) merges what can't be copied: `package.json` scripts, Biome excludes, `.gitignore`, `.mcp.json`, `next.config.ts`, `CLAUDE.md` sections and the app name.
6. `biome migrate`, `ultracite fix` and `check`, `next typegen`, `tsc`.
7. Commits the result as "Apply next-starter setup".

## Maintenance

There are no dependencies to bump here. The [smoke test](.github/workflows/smoke.yml) runs weekly and on pull requests. It scaffolds a shadcn + testing app and a plain Tailwind app, then lints, typechecks, builds and runs the unit and e2e tests, and validates the plugin manifests. If it goes red, one of the CLIs changed a flag or a default, and the script or overlay needs a fix.

After changing the plugin, bump `version` in `plugins/next-starter/.claude-plugin/plugin.json` (and `package.json`). Installed copies only update when the version changes.

## Developing

```bash
bash plugins/next-starter/skills/new-next-app/scripts/create.sh /tmp/try --ui tailwind --testing
claude plugin validate . --strict && claude plugin validate ./plugins/next-starter --strict
claude --plugin-dir ./plugins/next-starter   # try the skill without installing it
```
