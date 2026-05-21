---
name: f0-component-patterns
description: Detailed reference for F0 React component architecture, context/state, styling, testing, i18n, and animation patterns with code examples. Load when building or modifying components in the F0 design system.
---

# F0 Component Patterns

Detailed patterns and code examples for building components in the F0 React library. This skill supplements `packages/react/AGENTS.md` with in-depth reference material.

## When to Use

Load this skill when you need to:

- Build a new F0 component from scratch
- Modify an existing component's architecture
- Implement context/state management patterns
- Add styling with CVA, Tailwind, or Framer Motion
- Add i18n support to a component

## Quick Reference

| Pattern                                                                                                       | Reference File                         |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Component architecture (privateProps, forwardRef, withSkeleton, withDataTestId, index exports, `@/ui/` layer) | `references/component-architecture.md` |
| Context initialization, controlled/uncontrolled, async onClick, event naming                                  | `references/context-and-state.md`      |
| CVA, cn(), focusRing(), container queries, Framer Motion, design tokens                                       | `references/styling-and-animation.md`  |
| Unit tests (zeroRender, vi.hoisted(), fake timers, deferred promises)                                         | Load the `f0-unit-testing` skill       |
| useI18n, defaultTranslations, TranslationsType, plurals, interpolation                                        | `references/i18n-patterns.md`          |

## Key Rules

1. **Always check `packages/react/AGENTS.md` first** — it has the concise rules. This skill provides the detailed "how".
2. **Never import Radix directly** — use `@/ui/` wrappers.
3. **Never use `any`** — find the proper type.
4. **New components must start with `F0`** prefix.
5. **Tests use `zeroRender`** aliased as `render`, never `@testing-library/react`'s `render`.
6. **All public exported components must expose a `dataTestId` prop** — either via the `withDataTestId` HOC (most components) or via the inline `DataTestIdWrapper` + `WithDataTestIdProps` pattern (generic components, discriminated union components, portal components). The key check: does the exported component accept `dataTestId` in its props? See `references/component-architecture.md` for patterns, composition order, and the decision table.
