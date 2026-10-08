#!/usr/bin/env bash
# Scaffold a Next.js app from the latest create-next-app, Ultracite (Biome) and,
# optionally, shadcn/ui, then copy the next-starter overlay on top and verify it.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")" && pwd)"
OVERLAY_DIR="$(cd "$SCRIPT_DIR/../overlay" && pwd)"

usage() {
  cat <<'EOF'
Usage: next-starter <directory> [options]

Options:
  --ui <shadcn|tailwind>  UI setup (default: shadcn)
  --preset <name>         shadcn preset (default: shadcn's default preset)
  --testing               Add Jest, Testing Library and Playwright
  --name <name>           App name (default: derived from the directory name)
  --description <text>    One-sentence site description
  --no-commit             Leave the next-starter changes uncommitted
  -h, --help              Show this help
EOF
}

die() {
  printf 'next-starter: %s\n' "$*" >&2
  exit 1
}

warn() {
  printf 'next-starter: warning: %s\n' "$*" >&2
}

step() {
  printf '\n\033[1m==> %s\033[0m\n' "$*"
}

# Copy one overlay directory into the project. Dotfiles are stored as _name so
# plugin installs and npm packing can't drop them; directories merge.
copy_overlay() {
  local src="$1" entry name
  for entry in "$src"/*; do
    [[ -e $entry ]] || continue
    name="$(basename "$entry")"
    if [[ $name == _* ]]; then
      name=".${name#_}"
    fi
    if [[ -d $entry ]]; then
      mkdir -p "$name"
      cp -R "$entry/." "$name/"
    else
      cp "$entry" "$name"
    fi
  done
}

# Newer pnpm releases refuse to add a dependency whose build script hasn't been
# approved in pnpm-workspace.yaml's allowBuilds map. Deny the given packages there
# (only when that map exists, so older pnpm versions are left alone).
deny_builds() {
  node -e '
    const fs = require("node:fs");
    const file = "pnpm-workspace.yaml";
    if (!fs.existsSync(file)) process.exit(0);
    let text = fs.readFileSync(file, "utf8");
    if (!/^allowBuilds:/m.test(text)) process.exit(0);
    for (const name of process.argv.slice(1)) {
      if (!text.includes(name)) {
        text = text.replace(/^allowBuilds:\n/m, `allowBuilds:\n  "${name}": false\n`);
      }
    }
    fs.writeFileSync(file, text);
  ' "$@"
}

dir=""
ui="shadcn"
preset=""
testing=false
name=""
description=""
commit=true

while (($#)); do
  case "$1" in
    --ui)
      ui="${2:?--ui needs a value}"
      shift 2
      ;;
    --preset)
      preset="${2:?--preset needs a value}"
      shift 2
      ;;
    --testing)
      testing=true
      shift
      ;;
    --name)
      name="${2:?--name needs a value}"
      shift 2
      ;;
    --description)
      description="${2:?--description needs a value}"
      shift 2
      ;;
    --no-commit)
      commit=false
      shift
      ;;
    -h | --help)
      usage
      exit 0
      ;;
    -*)
      usage >&2
      die "unknown option: $1"
      ;;
    *)
      [[ -z $dir ]] || die "unexpected argument: $1"
      dir="$1"
      shift
      ;;
  esac
done

if [[ -z $dir ]]; then
  usage >&2
  exit 1
fi
if [[ $ui != shadcn && $ui != tailwind ]]; then
  die "--ui must be shadcn or tailwind"
fi
if [[ -n $preset && $ui != shadcn ]]; then
  die "--preset only applies to --ui shadcn"
fi
for cmd in node pnpm git; do
  command -v "$cmd" >/dev/null || die "$cmd is required"
done
node -e 'const [major, minor] = process.versions.node.split(".").map(Number); process.exit(major > 20 || (major === 20 && minor >= 9) ? 0 : 1)' ||
  die "Node.js 20.9 or newer is required (found $(node --version))"

frameworks=(react next)
if $testing; then
  frameworks+=(jest)
fi

step "create-next-app@latest"
pnpm dlx create-next-app@latest "$dir" \
  --ts --tailwind --biome --app --react-compiler --cache-components \
  --no-src-dir --use-pnpm --import-alias "@/*" \
  --agents-md --no-agent-feedback --yes
cd "$dir"

step "ultracite init"
# --skip-install: ultracite installs through corepack when package.json pins
# packageManager, and older corepack releases can't run pnpm 12. Install directly.
pnpm dlx ultracite@latest init \
  --pm pnpm --linter biome --frameworks "${frameworks[@]}" \
  --editors vscode zed cursor --agents claude --hooks claude cursor \
  --integrations husky lint-staged --install-skill --skip-install --quiet
# ultracite just edited package.json; CI defaults pnpm to --frozen-lockfile.
pnpm install --no-frozen-lockfile
# With --skip-install ultracite records husky/lint-staged as "latest"; pin real versions.
pnpm add -D husky@latest lint-staged@latest

if [[ $ui == shadcn ]]; then
  step "shadcn init"
  if [[ -n $preset ]]; then
    pnpm dlx shadcn@latest init --template next --preset "$preset" --no-monorepo --yes
  else
    pnpm dlx shadcn@latest init --defaults --yes
  fi
  pnpm dlx skills@latest add shadcn/ui --skill shadcn --agent claude-code --yes ||
    warn "could not install the shadcn agent skill; continuing without it"
fi

step "next-starter overlay"
copy_overlay "$OVERLAY_DIR/common"
if [[ $ui == tailwind ]]; then
  copy_overlay "$OVERLAY_DIR/tailwind"
fi
if $testing; then
  copy_overlay "$OVERLAY_DIR/testing"
fi

deps=(zod)
if [[ $ui == tailwind ]]; then
  deps+=(clsx tailwind-merge)
fi
pnpm add "${deps[@]}"
if $testing; then
  # Jest's file watcher ships prebuilt binaries, so its build script isn't needed.
  deny_builds @parcel/watcher
  pnpm add -D jest jest-environment-jsdom @types/jest ts-node \
    @testing-library/react @testing-library/dom @testing-library/jest-dom \
    @playwright/test
fi

patch_args=(--ui "$ui" --name "$name" --description "$description")
if $testing; then
  patch_args+=(--testing)
fi
node "$SCRIPT_DIR/patch-project.mjs" "${patch_args[@]}"

step "verify"
# Bring the generated Biome config up to the installed Biome version.
pnpm exec biome migrate --write || warn "biome migrate failed; continuing"
pnpm exec next typegen
# fix exits non-zero when something is left that it can't fix; check reports it.
pnpm exec ultracite fix || true
pnpm exec ultracite check
pnpm exec tsc --noEmit

if $commit; then
  # Only commit in the repo create-next-app initialised, never in an enclosing one.
  if [[ "$(git rev-parse --show-toplevel 2>/dev/null)" == "$(pwd -P)" ]]; then
    { git add -A && git commit -q --no-verify -m "Apply next-starter setup"; } ||
      warn "commit failed (is git user.name/user.email set?); changes are left uncommitted"
  else
    warn "$(pwd -P) is not the root of its own git repo; leaving changes uncommitted"
  fi
fi

step "done"
printf 'Created %s (ui: %s, testing: %s)\n' "$(pwd -P)" "$ui" "$testing"
