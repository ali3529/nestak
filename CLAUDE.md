# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Nestak** is a Persian-language (RTL) Next.js 16 web application for pet owners, providing services like pet shop features, veterinary consultations, adoption management, and care reminders. The project uses the App Router architecture with TypeScript, React 19, Tailwind CSS 4, Material-UI, and Emotion for styling.

## Development Commands

- **Development server**: `pnpm dev` (starts at http://localhost:3000)
- **Production build**: `pnpm build` (must pass before PR submission)
- **Production server**: `pnpm start` (serves built output)
- **Linting**: `pnpm lint` (uses Next.js Core Web Vitals rules)

**Package manager**: Use `pnpm` exclusively for all operations.

## Architecture and Structure

### Routing and Pages
- **App Router** (Next.js 16): Routes live in `src/app/`
- **Root layout** (`src/app/layout.tsx`): Configures RTL direction (`dir="rtl"`), Persian locale (`lang="fa"`), loads YekanBakh custom font via `localFont`, and wraps all pages
- **Landing page** (`src/app/landing/page.tsx`): Main user-facing page with sections (Hero, WhyChoose, AppDownload, Contact, FAQ, Rules, Footer). Marked as client component (`"use client"`)
- **Fallback page** (`src/app/page.tsx`): Alternative layout/demo page

### Component Organization
- **Route-specific components**: `src/app/landing/components/` (e.g., `HeaderBar.tsx`, `Hero.tsx`, `FooterSection.tsx`)
- **Shared components**: `src/components/` (e.g., `Button.tsx`, `FaqItem.tsx`)
- **Constants**: `src/app/constant/StaticItemsConst.ts` contains data arrays for navigation items, feature cards, and download links

### Assets
- **Icons**: `public/Icons/Colors/` and `public/Icons/solid/` for color and monochrome SVGs
- **Images**: `public/img/` for photos and illustrations
- **Fonts**: `public/Fonts/` contains `YekanBakh-VF.ttf` variable font

### Styling Strategy
- **Tailwind CSS 4**: Primary styling system
- **Custom theme**: Extended in `src/app/globals.css` with `@theme inline` block defining Persian design system colors:
  - `primary-*` palette (reds: #F42326 to #660F10)
  - `white-*` palette (grays: #F5F4F2 to #303030)
  - Background colors: `BG1` (#FFFCF9), `BG2` (#F4F5F7)
  - Utility colors: `blue`, `green`, `yellow`, `warning-red`
- **Material-UI + Emotion**: Available for complex components (`@mui/material`, `@emotion/react`, `@emotion/styled`)
- **Class ordering**: Alphabetize Tailwind utilities by group (layout → spacing → typography → effects)

### TypeScript Configuration
- **Strict mode enabled** (`"strict": true`)
- **Path alias**: `@/*` maps to `./src/*`
- **Target**: ES2017
- **JSX runtime**: `react-jsx` (no import React needed)

### Right-to-Left (RTL) Support
- Global `dir="rtl"` set in root layout
- Persian locale (`lang="fa"`)
- YekanBakh font optimized for Persian typography
- All navigation, text, and layouts must respect RTL flow

## Coding Conventions

### Component Patterns
- **Default export** for page and layout components
- **Server components by default**; add `"use client"` directive only when using hooks, browser APIs, or event handlers
- **Type safety**: Define prop interfaces explicitly or use `React.FC<Props>`
- **File naming**: `PascalCase.tsx` for components, `camelCase.ts` for utilities

### Client vs Server Components
- `src/app/landing/page.tsx` is a client component (needs interactivity)
- Most components in `src/app/landing/components/` should be server components unless they require state, effects, or event handlers
- Default to server components for performance; only opt into client when necessary

### Import Paths
- Use `@/` alias for all `src/` imports: `import Button from "@/components/Button"`
- Use relative paths for local siblings: `import Hero from "./components/Hero"`
- Next.js `Image` and `Link` components are preferred over `<img>` and `<a>`

### Styling Guidelines
- **Indentation**: 2 spaces (not tabs)
- **Quotes**: Double quotes for JSX attributes, strings
- **Tailwind utilities**: Keep classes readable; extract to component variants if list exceeds ~10 utilities
- Never hardcode Persian text colors without checking the custom palette in `globals.css`

## Key Domain Concepts

This application serves Iranian pet owners ("صاحبان حیوانات خانگی") and provides:
1. **Pet shop and services** (پت‌شاپ)
2. **Online vet consultations** (مشاوره دامپزشک)
3. **Smart reminders** (یادآوری هوشمند) for vaccinations, medications, feeding
4. **Adoption/custody management** (واگذاری و سرپرستی)
5. **Educational articles** (مقالات آموزشی)
6. **30-day free trial** (۳۰ روز رایگان)

Content tone should be friendly, professional, and culturally appropriate for Persian-speaking users.

## Important Notes

- **No test suite yet**: When adding tests, use Next.js Jest preset and React Testing Library. Place tests in `src/__tests__/` or colocated as `*.test.tsx`
- **Branch strategy**: Current branch is `l4`; main branch for PRs is `landing-layout`
- **Commit style**: Short, imperative subjects (e.g., "refactor content section", "fix components")
- **Environment variables**: Store in `.env.local` (gitignored); document any new vars in PR descriptions
- **ESLint config**: Uses `eslint-config-next` with TypeScript rules; ignores `.next/`, `out/`, `build/`

## Reference Files

- **AGENTS.md**: Contains previous repository guidelines (included above)
- **README.md**: Standard Next.js bootstrapped project info
- **package.json**: Defines all scripts and dependencies
- **tsconfig.json**: TypeScript compiler options and path mappings
- **eslint.config.mjs**: Linting rules (Next.js + TypeScript)
- **next.config.ts**: Next.js configuration (currently minimal)
- **postcss.config.mjs**: PostCSS with Tailwind integration
