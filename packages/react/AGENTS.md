# AGENTS.md — packages/react

This is the F0 React component library (`@factorialco/f0-react`). See the root [AGENTS.md](../../AGENTS.md) for monorepo-level guidelines.

## Post-Implementation Quality Gate

After completing **any code modification task** (new component, feature, bug fix, refactoring),
load the `f0-quality-gate` skill and execute its full workflow before presenting results to the user.

**Skip only when:**

- The user explicitly asks to skip checks
- The change is documentation-only (`.md`, `.mdx`, comments)
- The change is auto-generated files (icons, type snapshots)

## Skills

Load the relevant skill before starting work:

- **f0-quality-gate** — Post-implementation quality gate. Runs automatically after any code change — typecheck, lint, tests, plus parallel subagent reviews for code quality, a11y, and Storybook.
- **f0-code-review** — Code review checklist. Load when reviewing PRs or auditing code.
- **f0-component-patterns** — Architecture, context, styling, i18n patterns with code examples. Load when building or modifying components.
- **f0-unit-testing** — Vitest unit test patterns. Load when writing or fixing unit tests.
- **f0-storybook-stories** — `.stories.tsx` file patterns. Load when adding or updating stories.
- **f0-storybook-testing** — play function and axe-playwright a11y test patterns. Load when writing interaction or a11y tests.
- **f0-experimental-component-migration** — Promoting components from `experimental/` to stable. Load when migrating.
- **f0-pr** — Create PRs with correct title format, PR template body, and gh CLI workflow. Load when opening a pull request.

For **MDX documentation** (the Docs tab), use the global `factorial-f0-component-documentation` skill — separate conventions from story files.

## Folder Organization

```
src/
  components/    — all public F0 components
  experimental/  — legacy only, do NOT add new components here
  hooks/         — public exported hooks
  icons/         — generated icons (do not edit manually)
  layout/        — page layout components
  lib/           — internal utilities and providers
  sds/           — satellite design systems (non-core components)
  ui/            — primitive wrappers (Radix, shadcn/ui); not re-exported publicly
```

Each component follows this structure:

```
F0Example/
  __tests__/       — test files (.test.tsx)
  __stories__/     — Storybook files
  index.tsx        — exports only, no logic
  F0Example.tsx    — implementation
  types.ts         — public types
  internal-types.ts — private types (not exported)
  hooks/           — component-specific hooks
  components/      — internal subcomponents (not exported)
```

## Component Architecture

### Naming

- Public components must start with `F0` (e.g., `F0Button`)
- Old `F1`, `One`, or unprefixed names: rename when touched
- Rule does not apply to subcomponents or private internals

### Index Exports

Three patterns for `index.tsx`:

- **Simple re-export** — `export * from "./F0ComponentName"` — stable components
- **Experimental wrapper** — `experimentalComponent("F0Name", Cmp)` from `@/lib/experimental` — components being stabilized
- **Component() metadata** — `Component({ name, type }, Cmp)` — XRay tooling integration (`type`: `"layout"` | `"info"` | `"action"` | `"form"`)

### forwardRef

All ref-accepting components: use `forwardRef<El, Props>` with explicit generics, set `displayName`. For generic components (e.g., F0Select), re-cast export to preserve type parameters. See `f0-component-patterns` skill for examples.

### Private Props (Public/Internal Split)

Components with internal-only props use a two-layer pattern: define `privateProps` const array, derive public type with `Omit`, strip private props via reduce in the public wrapper. See `f0-component-patterns` skill for full example.

### withSkeleton HOC

Attach `.Skeleton` via `withSkeleton(F0CardBase, F0CardSkeleton)` — enables `<F0Card.Skeleton />` usage.

### UI Abstraction Layer

Never import Radix or third-party primitives directly. Always use `@/ui/` wrappers (e.g., `@/ui/Action`, `@/ui/Select`, `@/ui/Dialog/dialog`).

### Imports and Exports

- Never `import * as React from "react"` — import only what you use
- Named exports only — no default exports
- `'use client'` directive only when necessary
- Components in `components/` must be exported in `exports.ts`
- `src/ui/` components must **not** be re-exported publicly

## Component Props

- Clear, functional names (e.g., `onlyIcon` not `hideIcon` + `hideLabel`)
- No `className` on public components (use as a private prop if needed)
- Union type props: use exported const arrays — `export const sizes = [...] as const; export type Size = (typeof sizes)[number]`
- `DataAttributes` from `@/global.types` for `data-*` prop support
- Default values set inline in destructuring (not `defaultProps`)
- Discriminated unions for mutually exclusive prop combinations

## Context and State

- **Required context**: `createContext<T | null>(null)` + hook throws if null
- **Optional with fallback**: hook returns default via `??`
- **Dual hooks**: `useX()` (throws) + `useXOptional()` (returns null) when both cases exist
- **Controlled/uncontrolled**: use the `useControllable` hook — do not manually sync state via `useEffect`
- **Event naming**: props use `on` prefix (`onClick`), internal handlers use `handle` prefix (`handleClick`), always invoke callbacks with optional chaining (`props.onClick?.(event)`)

See `f0-component-patterns` skill for code examples.

## TypeScript

- Strict mode — `any` and `as any` are never acceptable
- Prefer interfaces over types for public APIs
- Export component prop interfaces
- No circular imports

## Testing

- Test files: `.test.tsx` / `.test.ts` — never `.spec.ts`
- Unit tests: use `f0-unit-testing` skill
- Storybook interaction and a11y tests: use `f0-storybook-testing` skill
- No snapshot tests — explicit assertions only
- Coverage target: 80%

## Styling

- Tailwind CSS only — no CSS modules or CSS-in-JS
- `cn()` from `@/lib/utils` for all className composition
- CVA from `"cva"` (not `"class-variance-authority"`) for multi-variant components
- Design tokens use `f1-` prefix: `text-f1-foreground`, `bg-f1-background`, `border-f1-border`, etc.
- `focusRing()` from `@/lib/utils` on all focusable elements
- Inline `style` only for truly dynamic values (hex colors, percentages)

See `f0-component-patterns` skill for CVA, container query, and animation code examples.

## i18n

- `useI18n()` from `@/lib/providers/i18n` — returns direct property access and `t()` for dot-notation keys with `{{placeholder}}` interpolation
- Translation keys: camelCase, domain-namespaced (`actions.save`), `one`/`other` sub-keys for plurals
- Missing keys: log `console.warn` and return the key string

See `f0-component-patterns` skill for `TranslationsType`, `defaultTranslations`, and pluralization examples.

## Accessibility

- `focusRing()` on all focusable elements
- `useReducedMotion()` from `@/lib/a11y` for animated components — set Framer Motion `duration: 0` when true
- `sr-only` class for visually hidden text (icon-only buttons require `<span className="sr-only">{label}</span>`)
- `aria-busy="true"` + `aria-live="polite"` on loading/skeleton states
- Keyboard handling on custom interactive elements: `onKeyDown` for Enter/Space, `tabIndex={0}`, `role`
- Delegate complex widgets (dialogs, selects, toggles) to Radix via `@/ui/`
- Load the `a11y` skill for detailed WCAG patterns and decision trees

## Code Quality

- Comments answer "Why?", not "What?" — keep them rare
- `console.warn()` for recoverable issues (wrong prop combinations, unsupported values)
- `throw new Error()` for unrecoverable errors (context used outside provider, missing required props)
- `useTextFormatEnforcer()` from `@/lib/text` for validating text props
- Clean up `useEffect` hooks to prevent memory leaks

## Available Commands

Run from `packages/react/`:

```bash
pnpm build          # build library and generate types
pnpm vitest         # unit tests (watch)
pnpm vitest:ci      # unit tests (CI, run once)
pnpm test-storybook # Storybook interaction + a11y tests
pnpm lint           # lint check
pnpm lint-fix       # auto-fix lint issues
pnpm tsc            # type-check
```
