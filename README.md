# Template-Next

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![GitHub package.json version](https://img.shields.io/github/package-json/v/lumen-limitless/template-next)
![GitHub last commit](https://img.shields.io/github/last-commit/lumen-limitless/template-next)

## Description

This is a Next.js template repository that includes various scripts and dependencies for building a modern web application. It's designed to kickstart your project development with Next.js, React, and Tailwind CSS.

## Features

- **Next.js 16**: The latest React framework with App Router, Server Components, and React Compiler support.

- **React 19**: The newest version of React with improved performance and features.

- **Tailwind CSS 4**: Next-generation utility-first CSS framework with improved performance.

- **TypeScript**: Strict TypeScript configuration for enhanced type safety.

- **Biome + Ultracite**: Lightning-fast Rust-based linting and formatting via Ultracite's zero-config Biome preset.

- **Husky + lint-staged**: Git hooks that automatically lint and format staged files on commit.

- **Jest & Playwright**: Testing libraries for unit and end-to-end testing.

- **shadcn/ui**: Beautiful, accessible component library with New York style, CSS variables, and Lucide icons.

- **MCP Servers**: Pre-configured Model Context Protocol servers for AI-assisted development.

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and pnpm installed.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/lumen-limitless/template-next.git
   cd template-next
   ```

2. Install project dependencies:

   ```bash
   pnpm install
   ```

### Available Scripts

In the project directory, you can run the following scripts:

- **Development Server**:

  ```bash
  pnpm dev
  ```

  Starts the development server.

- **Build**:

  ```bash
  pnpm build
  ```

  Builds the production-ready application.

- **Linting**:

  ```bash
  pnpm lint
  ```

  Runs Biome linting checks via Ultracite.

- **Lint & Fix**:

  ```bash
  pnpm lint:fix
  ```

  Automatically fixes linting and formatting issues.

- **Format**:

  ```bash
  pnpm format
  ```

  Formats code with Biome.

- **Unit Tests**:

  ```bash
  pnpm test:unit
  ```

  Runs unit tests.

- **End-to-End Tests**:

  ```bash
  pnpm test:e2e
  ```

  Runs end-to-end tests using Playwright.

- **Bundle Analyzer**:

  ```bash
  pnpm analyze
  ```

  Analyzes your bundle size.

## Code Quality

This project uses **Ultracite**, a zero-config Biome preset for fast, consistent code quality:

- **Biome**: Rust-based linter and formatter (extremely fast)
- **Ultracite**: Pre-configured Biome rules for Next.js/React projects
- **Husky**: Git hooks manager
- **lint-staged**: Runs linters on staged files only

On every commit, Husky triggers lint-staged which automatically formats and lints your staged files using Ultracite.

## shadcn/ui

This template comes pre-configured with [shadcn/ui](https://ui.shadcn.com/), a collection of beautifully designed, accessible components.

**Configuration:**

- Style: New York
- Base color: Neutral
- CSS Variables: Enabled
- Icon library: Lucide

**Adding components:**

```bash
pnpm dlx shadcn@latest add button
```

Components are installed to `components/ui/` and can be customized to fit your needs.

## MCP Servers

This template includes pre-configured [Model Context Protocol](https://modelcontextprotocol.io/) servers in `.mcp.json` for AI-assisted development:

- **next-devtools**: Next.js development tools integration
- **chrome-devtools**: Chrome DevTools integration for debugging
- **shadcn**: Direct integration with shadcn/ui for component management

These servers enable AI coding assistants to interact with your development environment more effectively.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by modern web development practices.
