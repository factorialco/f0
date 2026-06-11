---
name: f0-unit-testing
description: Write and fix Vitest unit tests for F0 React components, hooks, and utilities. Use when creating new test files, fixing failing tests, or improving test coverage. Covers zeroRender, mocking patterns, userEvent, fake timers, and helper functions.
---

# F0 Unit Testing

Write Vitest unit tests for F0 React components, hooks, and utilities.

## Quick Reference

| Need                                                                                                  | See                                |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Setup, imports, zeroRender, userEvent, vi.hoisted(), fake timers, helper functions, deferred promises | `references/unit-test-patterns.md` |

## Key Rules

- Test files: `.test.tsx` / `.test.ts` — never `.spec.ts`
- Use `zeroRender as render` from `@/testing/test-utils` — never `render` from `@testing-library/react`
- Use `zeroRenderHook` for hooks
- Import Vitest explicitly: `import { describe, it, expect, vi } from "vitest"`
- Do **not** import `@testing-library/jest-dom`
- Use `vi.fn()` — never `jest.fn()`
- No snapshot tests — explicit assertions only
- Query priority: `getByRole` > `getByText` > `getByLabelText` > `getByTestId`
- a11y testing is done via Storybook (axe-playwright), not in unit tests — see `f0-storybook-testing` skill

## Commands

```bash
pnpm vitest          # watch mode
pnpm vitest:ci       # run once (CI)
```

## Coverage Target

80% minimum. Test behavior, not implementation details.
