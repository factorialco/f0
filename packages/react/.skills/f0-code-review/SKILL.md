# Skill: f0-code-review

Code review checklist for the F0 React component library. Load this skill when reviewing PRs, code changes, or performing code quality audits.

## When to Use

- Reviewing pull requests
- Auditing component code quality
- Checking compliance with F0 conventions before merging

## Component Structure Checklist

### Folder Organization

Each component (in `components/` and `experimental/`) must follow:

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

- Elements in `components/`, `internal-types.ts`, and `internal` files must NOT be exported
- One component per file, unless subcomponents are very simple

### Naming

- New component names must start with `F0` (e.g., `F0Button`)
- Recommend renaming old components starting with `F1`, `One`, or without prefix when touched
- Does not apply to subcomponents or private components

### Imports and Exports

- **NEVER** `import * as React from "react"` — import only what you use
- Use **named exports** for all components — no default exports
- Implement `'use client'` only when necessary
- Ensure components in `components/` or `experimental/` are exported in `exports.ts`
- Components in `src/ui/` must **not** be re-exported

### Private Components

Some components (e.g., `F0Button`) have private properties — these use an internal implementation file (e.g., `internal.tsx`)

### New Components Location

- New components go in `components/`, NOT `experimental/` — use `experimentalComponent` from `@/lib/experimental.ts` instead

## Props Review

- Props must have clear, functional names (e.g., `only-icon` not `hide-icon` + `hide-label`)
- Avoid `className` on public components (can be a private prop)
- For union types, verify const arrays are used:
  ```ts
  export const colors = ["a", "b", "c"] as const
  export type Color = (typeof colors)[number]
  ```
  Ensure the const array is exported alongside the type.

## TypeScript Review

- **strict** TypeScript configuration must be respected
- **NEVER** use `any` or `as any` — find the proper type
- Prefer **interfaces** over types for public APIs
- Use discriminated unions for complex state
- Export component prop interfaces
- Implement proper generic constraints
- Avoid type assertions unless absolutely necessary
- No cycle imports
- No unused imports or variables

## Testing Review

### File Naming

- Test files must use `.test.tsx` or `.test.ts` — **never** `.spec.ts` or `.specs.ts`
- Import Vitest methods explicitly: `import { describe, it, expect } from "vitest"`
- Do **not** import `@testing-library/jest-dom`

### Test Utilities

- Must use `zeroRender` from `@/testing/test-utils.tsx` instead of `render` from `@testing-library/react`

### Coverage

- Coverage target: at least 80%
- Tests should be real unit tests — avoid excessive mocking
- Test behavior, not internals
- Missing test coverage for new components is a blocking issue
- Missing accessibility tests should be flagged

## Styling Review

### Tailwind CSS

- Use Tailwind CSS with custom configuration — no inline styles
- Follow mobile-first responsive design
- Use shadcn/ui components as base primitives (avoid modifications unless necessary)
- No hardcoded values — use design tokens

### Design Tokens

- Follow shadcn/ui token conventions
- Maintain consistent spacing and color scales

### Animations

- CSS animations/transitions for simple interactions
- Framer Motion for complex animations and gestures
- `tailwindcss-animate` for common patterns

## Code Quality Review

### Comments

- Reject comments that describe "what" — comments must answer "Why?"
- Comments should be rare

### Performance

- Check for proper cleanup in `useEffect` hooks (memory leaks)
- Verify `React.memo`, `useMemo`, and `useCallback` are used appropriately
- Flag unnecessary re-renders
- Check for missing dependency arrays in hooks

### Error Handling

- Error boundaries where needed
- Edge cases handled gracefully
- Meaningful error messages

### Accessibility

- All interactive elements must be keyboard accessible
- Proper ARIA attributes
- Proper focus management

### Security

- Validate user inputs in components
- Sanitize data before rendering
- Flag any use of `dangerouslySetInnerHTML`

## React-Specific Issues

- Memory leaks in components (missing cleanup in `useEffect`)
- Missing dependency arrays in hooks
- Improper state updates (mutating state directly)
- Missing key props in lists
- Inefficient re-renders

## Architecture Patterns

- Functional components only
- Atomic design principles
- Modular and reusable components
- Separation of concerns (presentation vs. logic)
- Custom hooks for shared logic

## Storybook Review

- Every component must have at least one story file
- Story docs must cover all properties
- For properties with limited options, use the const array from the component — avoid repeating values in the story
- For union types, use `table` in `argTypes`:
  ```ts
  table: {
    type: {
      summary: "[The TYPE, e.g Color = 'a' | 'b' | 'c']",
    },
  }
  ```
- Must include a `Snapshot` story with `parameters: withSnapshot({})` for Chromatic visual regression:
  ```tsx
  export const Snapshot: Story = {
    parameters: withSnapshot({}),
    render: () => (
      <div className="flex w-fit flex-col gap-2">
        <div className="flex flex-row gap-2">
          <F0AvatarDate date={exampleDate} />
        </div>
      </div>
    ),
  }
  ```
