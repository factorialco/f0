---
name: f0-code-review
description: Code review checklist for the F0 React component library. Use when reviewing PRs, auditing component code quality, or checking compliance with F0 conventions before merging. Covers component structure, TypeScript strictness, testing standards, styling, accessibility, and Storybook requirements.
---

# F0 Code Review

Review F0 React components against the conventions in `packages/react/AGENTS.md`. This skill adds review-specific guidance on top of those standards.

## Review Workflow

1. Read `packages/react/AGENTS.md` for full component conventions
2. For components with interactive or animated elements, also load the `a11y` skill (`.agents/skills/a11y/`) for detailed WCAG patterns
3. Check each item below — flag violations with severity
4. Classify issues as **blocking** (must fix) or **suggestion** (nice to have)

## Blocking Issues

Flag these as blocking — they must be fixed before merge:

### TypeScript

- `any` or `as any` usage anywhere
- `import * as React` instead of named imports
- Default exports on components
- Circular imports

### Component Structure

- Missing `displayName` on `forwardRef` components
- Direct Radix/third-party primitive import (must use `@/ui/` wrappers)
- New component name missing `F0` prefix
- New component placed in `experimental/` instead of `components/` (use `experimentalComponent` from `@/lib/experimental.ts`)
- Internal components or `internal-types.ts` exported publicly
- New component not exported in `exports.ts`

### Testing

- Missing test file for new/changed components
- Test files named `.spec.ts` instead of `.test.tsx`
- Using `render` from `@testing-library/react` instead of `zeroRender` from `@/testing/test-utils.tsx`
- Using `jest.fn()` instead of `vi.fn()`
- Snapshot testing (use explicit assertions only)

### Storybook

- Missing `Snapshot` story with `withSnapshot({})` for Chromatic

### Security

- `dangerouslySetInnerHTML` without explicit justification

## Suggestions (Non-blocking)

Flag these as suggestions:

### Code Quality

- Comments describing "what" instead of "why"
- Missing `React.memo`/`useMemo`/`useCallback` where beneficial
- Missing cleanup in `useEffect`
- `className` exposed on public component API (should be a private prop)
- Union type props not using const array pattern

### Testing

- Using `fireEvent` where `userEvent` would be more appropriate
- Coverage appears below 80%
- Missing helper functions for repeated multi-step interactions

### Accessibility

- Missing `useReducedMotion()` check in animated components
- Missing `aria-live="polite"` on loading/skeleton states
- Missing `sr-only` label on icon-only buttons
- Focusable element missing `focusRing()`
- Interactive div missing keyboard handler (`onKeyDown` for Enter/Space) or `tabIndex={0}` + `role`

### i18n

- Hardcoded user-facing strings (should use `useI18n()`)
- Missing fallback for translation keys

### Styling

- CSS modules or CSS-in-JS usage (should use Tailwind)
- CVA imported from `"class-variance-authority"` instead of `"cva"`
- Inline `style` for values expressible as Tailwind classes

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
- Default prop values set inline during destructuring (not `defaultProps`)
- `DataAttributes` from `@/global.types` used for `data-*` prop support where needed
