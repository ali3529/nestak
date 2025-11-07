# Repository Guidelines

## Project Structure & Module Organization
- App code lives in `src/app` (Next.js App Router). Example: `src/app/page.tsx`, `src/app/layout.tsx`.
- Static assets in `public/` (e.g., `public/img`, `public/Icons`).
- Global styles in `src/app/globals.css` (Tailwind v4 + PostCSS).
- Configuration: `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json`.
- No dedicated `tests/` folder yet.

## Build, Test, and Development Commands
- `pnpm dev` — start local dev server (Next 16).
- `pnpm build` — production build.
- `pnpm start` — run built app.
- `pnpm lint` — run ESLint over the repo.
Note: Use `pnpm` (lockfile present). `npm run <script>` also works if preferred.

## Coding Style & Naming Conventions
- Language: TypeScript. Prefer explicit types at boundaries (props, APIs).
- Indentation: 2 spaces; Prettier not configured—follow ESLint suggestions.
- React components: PascalCase (e.g., `Header.tsx`). Route segments: folder-based (e.g., `src/app/about/page.tsx`).
- CSS: Tailwind utility-first; keep class lists ordered logically by layout → spacing → color.
- Imports: absolute from `src` if configured; otherwise relative and grouped (react/libs → local).

## Testing Guidelines
- No test framework configured yet. For changes impacting UI/logic, provide manual test steps in PR.
- Suggested future stack: React Testing Library + Vitest (unit), Playwright (e2e).
- When adding tests: mirror path and name files `*.test.ts(x)` next to source.

## Commit & Pull Request Guidelines
- Current history lacks a convention; use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
- PRs: include a clear description, linked issue (if any), screenshots for UI, and manual test steps.
- Keep PRs small and focused; pass `pnpm lint` before requesting review.

## Security & Configuration Tips
- Use `.env.local` for secrets; never commit `.env*` with credentials.
- Validate external input on server routes; avoid trusting client data.
- Review bundle size for large assets in `public/`.

## Agent-Specific Instructions
- Obey this AGENTS.md for files under repo root. Keep changes minimal, focused, and consistent with Next.js App Router patterns.
