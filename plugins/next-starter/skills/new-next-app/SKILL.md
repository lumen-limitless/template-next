---
name: new-next-app
description: Scaffold a new Next.js app on the latest Next.js release with Ultracite (Biome) linting, git hooks, Claude/Cursor edit hooks, shadcn/ui or plain Tailwind, optional Jest + Playwright, and Lumen Limitless conventions (SEO metadata, typed env, error pages, health route). Use when asked to create, start, scaffold or bootstrap a new Next.js app, site or project.
argument-hint: <directory> [--ui shadcn|tailwind] [--testing] [--name "App Name"]
allowed-tools: Bash(bash ${CLAUDE_SKILL_DIR}/scripts/create.sh *)
---

# New Next.js app

`scripts/create.sh` does the deterministic part. It runs create-next-app, `ultracite init` and, for shadcn, `shadcn init` (all at `@latest`), copies this skill's `overlay/`, patches config, runs lint, format and typecheck, and commits. Your job is to choose the arguments, run it, and personalise what it can't know.

Arguments passed to this skill: $ARGUMENTS

## 1. Choose arguments

- **directory** (required): where to create the app, relative to the current directory. It must not exist yet, or be empty. If the user gave no directory or app name, ask for one; that is the only question worth asking up front.
- `--ui shadcn` (default) or `--ui tailwind`: use `tailwind` when the user wants plain Tailwind or no component library.
- `--preset <name>`: a shadcn preset, only if the user names one.
- `--testing`: Jest, Testing Library and Playwright, when the user wants tests.
- `--name "<App Name>"` and `--description "<one sentence>"`: take them from the conversation. Without `--name`, the name is the title-cased directory name.

## 2. Run the script

```bash
bash ${CLAUDE_SKILL_DIR}/scripts/create.sh <directory> [options]
```

Run it in the foreground; it takes one to two minutes. Each stage prints a `==> <stage>` header, so on failure the last header tells you which tool failed. See Troubleshooting.

## 3. Personalise

In the new project:

- `lib/metadata.ts`: `APP_AUTHOR` and `TWITTER_HANDLE` default to Lumen Limitless. Change them if the project belongs to someone else. Refine `APP_DESCRIPTION` and add `keywords` if the user described the site.
- `app/page.tsx` is a placeholder. Replace it only if the user asked for initial content.
- Do anything else the user asked for in the same request: pages, shadcn components (`pnpm dlx shadcn@latest add <name>`), environment variables (add them to `lib/env.ts` and `.env.example`).

Then run `pnpm fix && pnpm check && pnpm typecheck`, plus `pnpm test:unit` with `--testing`. Leave the personalisation uncommitted so the user can review it. Do not run `pnpm dev`, `pnpm build` or deploys unless the user asks.

## 4. Report

Tell the user the path, the options used, and the next commands: `cd <directory> && pnpm dev`. With `--testing`, they need `pnpm exec playwright install` before the first `pnpm test:e2e`.

## Troubleshooting

- `Cannot find module '.../corepack/.../pnpm.cjs'`: corepack can't run the pinned pnpm version. Suggest `npm i -g corepack@latest`, or putting a standalone pnpm first on `PATH`, then rerun into a new empty directory.
- `ERR_PNPM_IGNORED_BUILDS` for a package: a new dependency has an unapproved build script. In the project, add `"<package>": false` under `allowBuilds` in `pnpm-workspace.yaml` (`true` only if it really needs to compile), then rerun the failed `pnpm add`.
- create-next-app reports the directory isn't empty: choose another directory. Never delete existing files to make room.
- A stage failed partway: the directory holds a partial project. Tell the user what failed, and only remove the directory if they agree.
