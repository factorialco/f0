# Copilot Instructions — F0 Design System

This is F0, Factorial's design system monorepo. It provides modular, reusable UI components for web and mobile.

## Monorepo Structure

- `packages/core/` — Shared types, utilities, base Tailwind config
- `packages/react/` — React component library (primary package)
- `packages/react-native/` — Mobile component library
- `packages/playground/` — Development testing ground
- `packages/examples/` — Usage examples

## Key Conventions

- **TypeScript strict** — `any` is never acceptable
- **Named exports only** — no default exports for components
- **Never** `import * as React` — import only what you use
- **Named test files** — `.test.tsx` / `.test.ts`, never `.spec.ts`
- **Use `zeroRender`** from `@/testing/test-utils.tsx` instead of `render` from `@testing-library/react`
- **Do not import** `@testing-library/jest-dom`
- **Import Vitest explicitly** — `import { describe, it, expect } from "vitest"`
- **Tailwind CSS** for styling, mobile-first, with shadcn/ui primitives
- **CVA** (class-variance-authority) for component variants
- **Framer Motion** for complex animations
- **React Hook Form** + **Zod** for forms
- All code and comments in **English**
- Use **pnpm** as package manager

## Component Naming

- New components must start with `F0` prefix (e.g., `F0Button`)
- Components in `src/ui/` must not be re-exported

## Component Folder Structure

```
[ComponentName]/
  __tests__/            — Tests
  __stories__/          — Storybook files
  index.tsx             — Entry point (exports only)
  [ComponentName].tsx   — Implementation
  types.ts              — Public types
  internal-types.ts     — Private types (not exported)
  hooks/                — Custom hooks
  components/           — Internal subcomponents
```

## Props Conventions

- Use const arrays for union types:
  ```ts
  export const colors = ["a", "b", "c"] as const;
  export type Color = (typeof colors)[number];
  ```
- Avoid `className` on public components

## Available Commands (packages/react)

- `pnpm build` — Build library
- `pnpm vitest` — Run tests (watch mode)
- `pnpm vitest:ci` — Run tests (CI)
- `pnpm test-storybook` — Run Storybook tests
- `pnpm lint` / `pnpm lint-fix` — Lint
- `pnpm tsc` — Type-check

## References

See `AGENTS.md` at the repo root and `packages/react/AGENTS.md` for full guidelines.
