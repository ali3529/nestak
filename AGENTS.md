# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js 16 App Router project written in TypeScript. UI entry points live in `src/app`, with `layout.tsx` and `page.tsx` controlling the root shell and landing experience, while feature slices (for example `src/app/landing`) host route-specific components and styles. Reusable view logic belongs in `src/components`—favor colocating assets such as icons under `public/Icons` and shared images under `public/img` to keep import paths short. Global Tailwind and design tokens are configured in `src/app/globals.css`, and configuration files (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`) sit at the repo root for easy discovery.

## Build, Test, and Development Commands
Use pnpm for all workflows. `pnpm dev` launches the local server with Fast Refresh. `pnpm build` runs the production compiler and should stay green before opening a PR. `pnpm start` serves the prebuilt output, which is useful for verifying deployment artifacts. `pnpm lint` runs ESLint with the Next.js Core Web Vitals rule set; append `--fix` when safe to auto-resolve formatting issues.

## Coding Style & Naming Conventions
Follow TypeScript strictness levels defined in `tsconfig.json`, keep React components typed via `React.FC` or explicit prop interfaces, and prefer arrow functions for leaf components. Use 2-space indentation and double quotes, matching the existing codebase. Server components are the default; add `"use client";` atop files that rely on browser APIs or hooks. Tailwind class lists should stay alphabetized by utility group (layout → spacing → typography → effects) to reduce diffs. Name files in `camelCase.ts` for utilities and `PascalCase.tsx` for components.

## Testing Guidelines
Automated tests are not yet scaffolded; add them as you touch modules. Use Next.js’ Jest preset (`next/jest`) plus React Testing Library, place specs under `src/__tests__` or beside the component as `ComponentName.test.tsx`, and prefer descriptive `it("renders FAQ accordion")` naming. Target at least smoke coverage for every new component and include accessibility expectations (ARIA roles, keyboard focus). Run `pnpm test` (add the script when tests are introduced) locally and in CI before merging.

## Commit & Pull Request Guidelines
Recent history uses short, imperative subjects (`refactor content section`, `fix components`). Continue that style, limit to 72 characters, and group work logically. Each PR should include: a concise summary of the change, testing/QA notes (commands run, screenshots for UI work, and viewport sizes covered), and references to Linear/Jira issues when applicable. Highlight any schema or env var changes in the PR description so reviewers and deployers can react before shipping.

## Security & Configuration Tips
Never commit secrets; store runtime configuration in `.env.local` and document required keys in the PR body. When adding external scripts or analytics, route them through `next.config.ts` for CSP alignment. Large static assets should be optimized (`next/image`, SVG sprites) before landing to keep bundle sizes predictable.
