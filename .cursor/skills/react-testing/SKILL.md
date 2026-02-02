---
name: react-testing
description: Test React package components with Vitest in isolation. Use when writing or updating unit tests for packages/react, running pnpm vitest, or when asked for component tests, coverage, or __tests__ files.
---

# React Package Component Testing

Use this skill when writing or updating unit tests for components, hooks, and utilities in `packages/react`.

## Testing Standards (from project)

- Write **Vitest** unit tests for utilities, hooks, and components.
- Create **Storybook stories** for visual testing (separate from unit tests).
- Include **accessibility tests** using axe-playwright where applicable.
- Test component variants and edge cases.

## Framework & Commands

- **Framework**: Vitest
- **Run tests**: `pnpm vitest` (from repo root or `packages/react`)
- **Run with coverage**: `pnpm vitest run --coverage` (aim for ≥80% on the file under test)

## File Organization

- **Location**: Put tests in a `__tests__/` folder next to the code under test.
- **Naming**:
  - `ComponentA.tsx` → `__tests__/ComponentA.test.tsx`
  - `utils.ts` → `__tests__/utils.test.ts`
  - Name test files with `XXX.test.tsx` or `XXX.test.ts`; never use `XXX.specs.ts`.
  - Hooks: `useX.ts` → `__tests__/useX.test.tsx`
- **Structure**: Mirror the source directory structure inside `__tests__/` (e.g. subfolders for nested modules).

## Render & Hooks

- **Do not** use `render` from `@testing-library/react`.
- **Do** use `zeroRender` from `@/testing/test-utils` for components (it wraps context providers).
- **Do** use `zeroRenderHook` from `@/testing/test-utils` for hooks.
- **Do not** import `@testing-library/jest-dom` or `@testing-library/jest-dom/vitest`. Use standard Vitest/JavaScript assertions (e.g. `toBeDefined()`, `toHaveBeenCalledTimes()`, `toEqual()`).
- Import Vitest APIs explicitly: `describe`, `it`, `expect`, `vi` from `"vitest"`.

## Test Structure

Group tests with `describe`:

1. **Outer describe**: Component/function/hook name.
2. **Inner describe**: By behavior (e.g. `rendering`, `user interactions`, `edge cases`).

```tsx
describe('ComponentA', () => {
  describe('rendering', () => { ... });
  describe('user interactions', () => { ... });
  describe('edge cases', () => { ... });
});
```

## Testing Philosophy

- **Unit tests in isolation**: Test one component/function/hook at a time.
- **Mock dependencies**:
  - Subcomponents (test them in their own `__tests__/` files)
  - Browser APIs (`window`, `localStorage`, `fetch`, etc.)
  - External libraries and I/O

Mock subcomponents with `vi.mock()`:

```tsx
vi.mock("../SubComponent", () => ({
  default: vi.fn(() => <div>Mocked SubComponent</div>),
}))
```

## Example Test File

```tsx
import { describe, it, expect, vi } from "vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"
import ComponentA from "../ComponentA"

vi.mock("../SubComponent", () => ({
  default: vi.fn(() => <div>Mocked SubComponent</div>),
}))

describe("ComponentA", () => {
  describe("rendering", () => {
    it("should render with default props", () => {
      render(<ComponentA />)
      expect(screen.getByRole("button")).toBeDefined()
    })
  })

  describe("user interactions", () => {
    it("should call onClick when button is clicked", async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(<ComponentA onClick={onClick} />)
      await user.click(screen.getByRole("button"))
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe("edge cases", () => {
    it("should handle null/undefined props gracefully", () => {
      render(<ComponentA optionalProp={undefined} />)
      // assert no throw and sensible output
    })
  })
})
```

## Hooks Example

```tsx
import { describe, it, expect, vi } from "vitest"
import { zeroRenderHook } from "@/testing/test-utils"
import { useMyHook } from "../useMyHook"

describe("useMyHook", () => {
  describe("initial state", () => {
    it("should return initial value", () => {
      const { result } = zeroRenderHook(() => useMyHook())
      expect(result.current.value).toBe(initialValue)
    })
  })
})
```

## Coverage & Quality

- **Target**: ≥80% coverage for the file under test (lines, branches, functions as relevant).
- **Cover**: Main paths, branches, error/edge handling, and meaningful prop/parameter combinations.
- **Edge cases** to consider:
  - `null` / `undefined`
  - Empty arrays/objects
  - Boundary values (min/max)
  - Invalid inputs and error states
  - Loading states
  - Conditional rendering branches

## Test Quality

- One assertion focus per test where practical; one main behavior per `it`.
- Use clear, descriptive names (e.g. “should do X when Y”).
- Prefer queries that reflect how users interact: `getByRole`, `getByLabelText`, then `getByTestId` if needed.

## Deliverables Checklist

- [ ] Test file(s) in `__tests__/` with correct naming (`.test.tsx` or `.test.ts`)
- [ ] Dependencies mocked (subcomponents, browser APIs, external libs)
- [ ] `zeroRender` / `zeroRenderHook` from `@/testing/test-utils` (no `render` from RTL, no jest-dom)
- [ ] Vitest only: explicit imports from `"vitest"`, no `@testing-library/jest-dom`
- [ ] Coverage ≥80% for the tested file(s)
- [ ] `pnpm vitest` passes (and `pnpm vitest run --coverage` if verifying coverage)
