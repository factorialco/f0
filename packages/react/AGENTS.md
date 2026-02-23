# AGENTS.md — packages/react

This is the F0 React component library (`@factorialco/f0-react`). See the root [AGENTS.md](../../AGENTS.md) for monorepo-level guidelines.

## Skills

This package includes on-demand skills in `.skills/`:

- **f0-code-review** — Code review checklist (component structure, TypeScript, testing, styling, a11y). Load when reviewing PRs or code.

For component documentation (Storybook stories and MDX), use the global `factorial-f0-component-documentation` skill instead.

## Component Guidelines

### Imports and Exports

- **Never** import entire React via `import * as React from "react"` — import only what you use
- Use **named exports** for all components — no default exports
- Implement `'use client'` directive only when necessary
- Ensure components in `components/` or `experimental/` are exported in `exports.ts`
- Components in `src/ui/` must **not** be re-exported

### File Structure Order

Structure component files in this order:

1. Type definitions and interfaces
2. Component implementation
3. Helper functions
4. Exports

### Folder Organization

Each component should follow this structure:

```
[ComponentName]/
  __tests__/              — Component tests
  __stories__/            — Storybook files (split into multiple if needed)
  index.tsx               — Entry point (exports only, no logic)
  [ComponentName].tsx     — Component implementation
  types.ts                — Public types (re-exported by index.tsx)
  internal-types.ts       — Private types (not exported)
  hooks/                  — Hook files (useXXXX.ts)
  components/             — Internal subcomponents
```

- Elements in `components/`, `internal-types.ts`, and `internal` files must not be exported
- One component per file, unless subcomponents are very simple
- New components go in `components/`, not `experimental/` — use `experimentalComponent` from `@/lib/experimental.ts` instead

### Naming

- New component names must start with `F0` (e.g., `F0Button`)
- Old components starting with `F1`, `One`, or without prefix should be renamed when touched
- This does not apply to subcomponents or private components

### Private Components

Some components (e.g., `F0Button`) have private properties — these use an internal implementation file (e.g., `internal.tsx`)

## Component Props

- Props must have clear, functional names (e.g., `only-icon` not `hide-icon` + `hide-label`)
- Avoid `className` on public components (can be a private prop)
- For union types, use const arrays:

```ts
export const colors = ["a", "b", "c"] as const;
export type Color = (typeof colors)[number];
```

Ensure the const array is exported alongside the type.

## TypeScript Standards

- Use **strict** TypeScript configuration
- **Never** use `any` or `as any` — find the proper type
- Prefer **interfaces** over types for public APIs
- Use discriminated unions for complex state
- Export component prop interfaces
- Implement proper generic constraints
- Avoid type assertions unless absolutely necessary
- Avoid cycle imports

## Testing Standards

### File Naming

- Name test files `.test.tsx` or `.test.ts` — **never** `.spec.ts` or `.specs.ts`

### Imports

- Import Vitest methods explicitly: `import { describe, it, expect } from "vitest"`
- Do **not** import `@testing-library/jest-dom`

### Test Utilities

- Use `zeroRender` from `@/testing/test-utils.tsx` instead of `render` from `@testing-library/react` — it provides mocks for context providers

### Test Coverage

- Write Vitest unit tests for utilities, hooks, and components
- Create Storybook stories for visual testing
- Include accessibility tests using axe-playwright
- Test component variants and edge cases
- Avoid excessive mocking — test behavior, not internals
- Always run tests to confirm changes
- Coverage target: at least 80%

## Styling

### Tailwind CSS

- Use Tailwind CSS with custom configuration for primary styling
- Follow mobile-first responsive design
- Utilize container queries where appropriate
- Use shadcn/ui components as base primitives (avoid modifications unless necessary)

### Design Tokens

- Use Tailwind theme configuration
- Follow shadcn/ui token conventions
- Maintain consistent spacing and color scales

### Animation Strategy

- CSS animations/transitions for simple interactions
- Framer Motion for complex animations and gestures
- `tailwindcss-animate` for common animation patterns

## Code Quality

### Comments

- Avoid comments that describe "what" — comments must answer "Why?"
- Comments should be rare, highlighting only complex parts

### Performance

- Ensure proper cleanup in `useEffect` hooks (prevent memory leaks)
- Use `React.memo`, `useMemo`, and `useCallback` appropriately
- Avoid unnecessary re-renders
- Implement code splitting where beneficial
- Optimize bundle size with tree shaking

### Error Handling

- Implement error boundaries where needed
- Handle edge cases gracefully
- Provide meaningful error messages

### Accessibility

- All interactive elements must be keyboard accessible
- Use proper ARIA attributes
- Maintain proper focus management
- Test with screen readers

### Security

- Validate user inputs in components
- Sanitize data before rendering
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary

## Dependencies

### Core

- React 18+ (functional components), TypeScript 5+ (strict), Vite

### UI and Styling

- Radix UI, shadcn/ui, Tailwind CSS, Framer Motion, Embla Carousel, Lucide React, SVGR

### Forms and Validation

- React Hook Form, Zod, @hookform/resolvers

### Utilities

- CVA (class-variance-authority), clsx, tailwind-merge, date-fns, usehooks-ts

### Development Tools

- Storybook, Vitest, Chromatic (visual regression)

### i18n

- Built-in via `useI18n` hook, `defaultTranslations`, type-safe `TranslationsType`

## Available Commands

All commands use `pnpm` and run from the `packages/react` directory:

### Development

- `pnpm build` — Build the library and generate types

### Testing

- `pnpm vitest` — Run Vitest in watch mode
- `pnpm vitest:ci` — Run Vitest once (CI mode)
- `pnpm test-storybook` — Run all Storybook tests
- `pnpm test-storybook -- filename` — Run a single Storybook test

### Linting and Formatting

- `pnpm lint` — Run lint checks
- `pnpm lint-fix` — Auto-fix lint issues
- `pnpm prettier:format` — Format code
- `pnpm tsc` — Type-check TypeScript files
