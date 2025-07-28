# AGENTS.md

Essential guidance for coding agents working in this Next.js 15 + TypeScript repository.

## General Rules

- ensure you are always using the correct package manager for the project before running commands. Check package.json if not sure.
- Do NOT run build, dev, or deploy commands unless I specifically tell you to do so.


## Build/Test Commands
- `pnpm dev` - Development server
- `pnpm lint` - ESLint
- `pnpm typecheck` - TypeScript checking
- `pnpm format` - Prettier formatting
- `pnpm test` - All tests (Jest + Playwright)
- `pnpm test:unit` - Jest unit tests only
- `pnpm test:unit -- -t "<test name>"` - Run specific Jest test
- `pnpm test:e2e` - Playwright e2e tests only

## Code Style
- **Imports**: Use `@/` absolute imports, auto-organized by prettier-plugin-organize-imports
- **Format**: Double quotes, no semicolons, 2-space tabs, trailing commas (ES5)
- **Types**: Strict TypeScript, explicit return types, use global types from `/types/index.ts`
- **Naming**: camelCase (vars/functions), PascalCase (components/types), kebab-case (files/dirs)
- **CSS**: Tailwind CSS 4 with `clsx`/`tailwind-merge` for className composition. use `cn` utility function when necessary.

## Next.js Conventions
- App Router with `page.tsx` files, default export named "Page" using `PageProps<T>` type
- Server components by default, `'use client'` only when needed for interactivity
- Server action functions must end with "Action" suffix
- In Next.js 15+: `params` and `searchParams` are Promises that must be awaited
- Use `nuqs` for URL search param state management