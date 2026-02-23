---
name: f0-code-review
description: Code review checklist for the F0 React component library. Use when reviewing PRs, auditing component code quality, or checking compliance with F0 conventions before merging. Covers component structure, TypeScript strictness, testing standards, styling, accessibility, and Storybook requirements.
---

# F0 Code Review

Review F0 React components against the conventions in `packages/react/AGENTS.md`. This skill adds review-specific guidance on top of those standards.

## Review Workflow

1. Read `packages/react/AGENTS.md` for full component conventions
2. Check each item below — flag violations with severity
3. Classify issues as **blocking** (must fix) or **suggestion** (nice to have)

## Blocking Issues

Flag these as blocking — they must be fixed before merge:

- `any` or `as any` usage anywhere
- `import * as React` instead of named imports
- Default exports on components
- Missing test file for new/changed components
- Test files named `.spec.ts` instead of `.test.tsx`
- Using `render` instead of `zeroRender` from `@/testing/test-utils.tsx`
- New component not exported in `exports.ts`
- Internal components or `internal-types.ts` exported publicly
- Missing `Snapshot` story with `withSnapshot({})` for Chromatic
- `dangerouslySetInnerHTML` without explicit justification
- Circular imports
- New component placed in `experimental/` instead of `components/` (use `experimentalComponent` from `@/lib/experimental.ts`)
- New component name missing `F0` prefix

## Suggestions (Non-blocking)

Flag these as suggestions:

- Comments describing "what" instead of "why"
- Missing `React.memo`/`useMemo`/`useCallback` where beneficial
- Missing cleanup in `useEffect`
- `className` exposed on public component API
- Union type props not using const array pattern
- Missing accessibility tests
- Coverage appears below 80%

## Storybook Review

Verify stories follow these F0-specific patterns:

- Meta uses `satisfies Meta<typeof Component>` (not `as Meta`)
- Tags include `["autodocs", "stable"]` or `["autodocs", "experimental"]`
- ArgTypes for union props reference the component's const array directly
- Union types without const arrays use `table.type.summary`
- Snapshot story renders all meaningful variants in a flex layout

```tsx
// Required Snapshot pattern
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {/* All meaningful variants */}
    </div>
  ),
}
```

## Props Review Checklist

- Names are functional and clear (`only-icon` not `hide-icon` + `hide-label`)
- Union types use exported const arrays:
  ```ts
  export const colors = ["a", "b", "c"] as const
  export type Color = (typeof colors)[number]
  ```
- Public interfaces are exported, internal types stay in `internal-types.ts`
