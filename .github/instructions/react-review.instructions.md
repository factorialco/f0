---
applyTo: "packages/react/**"
---

When performing a code review on files in `packages/react/`, apply these checks:

## Component Structure

- New components must go in `components/`, not `experimental/` — use `experimentalComponent` from `@/lib/experimental.ts`
- Component names must start with `F0` (e.g., `F0Button`). Flag old `F1`/`One` prefixes and recommend renaming.
- Each component folder must follow: `index.tsx` (exports only), `[Name].tsx` (implementation), `types.ts` (public types), `internal-types.ts` (private), `hooks/`, `components/`, `__tests__/`, `__stories__/`
- Elements in `components/`, `internal-types.ts`, and `internal` files must NOT be exported
- Components in `src/ui/` must NOT be re-exported

## Imports and Exports

- NEVER `import * as React from "react"` — import only what you use
- Use named exports only — no default exports
- Ensure components in `components/` or `experimental/` are exported in `exports.ts`
- Flag cycle imports

## Props

- Props must have clear, functional names (e.g., `only-icon` not `hide-icon` + `hide-label`)
- No `className` on public components (can be a private prop)
- For union types, require const arrays:
  ```ts
  export const colors = ["a", "b", "c"] as const;
  export type Color = (typeof colors)[number];
  ```
  Ensure the const array is exported alongside the type.

## TypeScript

- NEVER use `any` or `as any` — find the proper type
- Prefer interfaces over types for public APIs
- Export component prop interfaces
- Flag unused imports or variables
- Flag type assertions unless clearly necessary

## Testing

- Test files must use `.test.tsx` or `.test.ts` — NEVER `.spec.ts`
- Must import Vitest methods explicitly: `import { describe, it, expect } from "vitest"`
- Must NOT import `@testing-library/jest-dom`
- Must use `zeroRender` from `@/testing/test-utils.tsx` instead of `render`
- Coverage target: at least 80%
- Flag tests that mock too much internal implementation

## Styling

- Use Tailwind CSS — no inline styles or hardcoded values
- Follow mobile-first responsive design
- Use design tokens, not hardcoded colors/spacing

## Code Quality

- Comments must answer "Why?", not describe "What"
- Check for proper cleanup in `useEffect` hooks (memory leaks)
- Flag missing dependency arrays in hooks
- Flag missing key props in lists
- Flag `dangerouslySetInnerHTML` usage

## Storybook

- Every component must have at least one story file
- Must include a `Snapshot` story with `parameters: withSnapshot({})` for Chromatic visual regression
- Story docs must cover all component properties
