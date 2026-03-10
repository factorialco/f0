# AGENTS.md — packages/react-native

This is the F0 React Native component library (`@factorialco/f0-react-native`). See the root [AGENTS.md](../../AGENTS.md) for monorepo-level guidelines.

## Source of Truth Primitives

When adding or migrating components, use these as implementation references:

- `F0Icon`
- `F0Text` (including `AnimatedF0Text` patterns)
- `PressableFeedback` (internal primitive)
- `F0Button`

Prefer consistency with these components over introducing new patterns.

## Component Architecture Conventions

- Public component APIs should use named exports only (no default exports).
- Keep component folders predictable:
  - implementation (`*.tsx`)
  - types/constants (`*.types.ts`)
  - styles (`*.styles.ts`) when variants are non-trivial
  - tests (`__tests__`)
  - docs (`*.md`)
  - barrel (`index.ts`)
- Register public components in `src/components/exports.ts`.
- Every new component must include a playground showcase in `playground/components/` and be registered in `playground/app/(tabs)/components.tsx`.
- Keep TypeScript strict. Do not introduce `any`.

## Semantic Styling Contract

For semantic components (such as `F0Button`, `F0Text`, `F0Icon`):

- Prefer semantic props (`variant`, `size`, `color`, etc.) over ad-hoc visual overrides.
- If a component should not support `className`/`style` publicly:
  - block them in public types
  - strip them at runtime before forwarding props (for unsafe casts)
- Reuse shared utilities from `src/lib/utils`:
  - `cn` for class merge
  - `omitProps` for blocked prop filtering
- When forwarding primitive props:
  - spread forwarded props before component-controlled props
  - explicitly block controlled passthrough keys (for example `onPressIn`, `onPressOut`, `accessibilityLabel`, `accessibilityRole`, `accessibilityState`) in both types and runtime filtering
- Prefer standard utility class names (for example `items-start`, not `item-start`).

## Public API Naming

Avoid root export collisions:

- Use explicit exported type names for new primitives when needed (for example, `F0ButtonVariant`, `F0ButtonSize`).
- Keep constants and types aligned with what is exported in each component `index.ts`.

## Deprecation Best Practices

When a legacy component remains available but should no longer be used:

- Add explicit `@deprecated` JSDoc with migration guidance.
- Annotate all exported legacy API surface that users import:
  - component
  - props interface
  - exported types/constants
- Keep deprecation messaging concrete (target replacement + short migration hint).
- Ensure deprecation guidance references symbols that are actually exported from the replacement module barrel.

## Testing Expectations

For new primitives or substantial refactors:

- Add snapshot coverage for key variants/sizes/states.
- Add behavior tests for interaction/state transitions.
- Add accessibility assertions (`accessibilityRole`, `accessibilityLabel`, `accessibilityState`) when relevant.
- Add contract tests for guarded APIs (for example, blocked props).

## Docs Expectations (`*.md`)

Primitive docs should include:

- Overview
- Architecture notes
- Usage examples
- Props table
- Variants / sizes
- Runtime behavior notes
- Accessibility notes
- Testing notes
- File structure

## Formatting

### Markdown code blocks with JSX

Always add `<!-- prettier-ignore -->` on the line before any ` ```tsx ` fence that contains JSX. Without this, `oxfmt` inserts semicolons before JSX expressions due to ASI protection (`"semi": false`). Pure import/variable-only blocks don't need it.

## Validation Command

Use this command before finalizing meaningful component changes:

`pnpm lint && pnpm tsc && pnpm format:check && pnpm test -- --watchman=false`
