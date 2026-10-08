# CLAUDE.md

This repo is a Claude Code plugin marketplace (`.claude-plugin/marketplace.json`) with one plugin, `plugins/next-starter`, which scaffolds Next.js apps. It is not itself a Next.js app and has no dependencies.

## Layout

- `plugins/next-starter/skills/new-next-app/SKILL.md` - the skill; keep it short and point at the script.
- `.../scripts/create.sh` - runs create-next-app, `ultracite init` and `shadcn init` at `@latest`, copies the overlay, patches, verifies and commits. Also the `npx` entry point (`bin` in `package.json`).
- `.../scripts/patch-project.mjs` - edits that merge into generated files rather than replacing them.
- `.../overlay/{common,tailwind,testing}/` - files copied into generated apps. Name dotfiles `_name` (`_github/`, `_env.example`); `create.sh` renames them.
- `.github/workflows/smoke.yml` - scaffolds both variants and lints, typechecks, builds and tests them.

## Rules

- Everything the skill needs must live under `plugins/next-starter/`; installed plugins are copied without the rest of the repo.
- Overlay files are app code for the generated project. Validate changes by scaffolding: `bash plugins/next-starter/skills/new-next-app/scripts/create.sh <tmp-dir> [--ui tailwind] [--testing]`. The script runs Ultracite and `tsc`.
- Do NOT run `next build`, dev or deploy commands unless I specifically ask; the smoke test covers builds.
- After changing the plugin, bump `version` in `plugins/next-starter/.claude-plugin/plugin.json` and `package.json`, and run `claude plugin validate . --strict && claude plugin validate ./plugins/next-starter --strict`.
