# AGENTS.md — packages/react

This is the F0 React component library (`@factorialco/f0-react`). See the root [AGENTS.md](../../AGENTS.md) for monorepo-level guidelines.

## Skills

This package includes on-demand skills in `.skills/`:

- **f0-code-review** — Code review checklist (component structure, TypeScript, testing, styling, a11y). Load when reviewing PRs or code.
- **f0-component-patterns** — Detailed reference for component architecture, context, styling, testing, i18n, and animation patterns with code examples. Load when building or modifying components.

For **Storybook story files** (`.stories.tsx`), use the in-repo `f0-storybook-stories` skill (`.skills/f0-storybook-stories/`).
For **MDX documentation** (the Docs tab), use the global `factorial-f0-component-documentation` skill — these are separate files with separate conventions.

## Folder Organization

Describes the `react` package organization

- /assets -> static global assets
- /docs -> global package documentation
- /src
  - ai/ -> don't use, keep it for compatibility
  - components/ -> all the f0 public components
  - experimental/ -> legacy experimental components. DON'T add anything new, all the public components must be in components/. Add the experimental Experimental Wrapper for the experimental ones. Suggest to apply the .skills/f0-experimental-component-migration
  - flags/ -> contries flags
  - hooks/ -> public exported hooks
  - icons/ -> generated icon components (icon CAN NOT be added here manually, check docs/AddNewICon.mdx)
  - layout/ -> Page layout components
  - lib/ -> library related tools
  - mocks/ -> mock data
  - sds/ -> Satellite design systems. Are components, hooks, etc of non core elements
  - testing/ -> testing tools
  - ui/ -> primitive components used in the components. Mainly wraps Radix components

### Index Exports

Three patterns exist for `index.tsx` — use the appropriate one:

- **Simple re-export**: `export * from "./F0ComponentName"` — for stable, non-experimental components
- **Experimental wrapper**: `experimentalComponent("F0Name", Component)` — for components still being stabilized
- **Component() metadata**: `Component({ name, type }, Cmp)` — for components needing XRay tooling integration (types: `"layout"`, `"info"`, `"action"`, `"form"`)

### forwardRef Convention

All components accepting refs must use `forwardRef` with explicit generic types and set `displayName`:

```tsx
export const F0Example = forwardRef<HTMLDivElement, F0ExampleProps>(
  function F0Example(props, ref) { ... }
)
F0Example.displayName = "F0Example"
```

For generic components (e.g., F0Select), re-cast the export to preserve generic type parameters.

### Private Props (Public/Internal Split)

Components with private properties use a two-layer pattern:

1. Define `privateProps` const array listing private prop names
2. Internal component receives all props (including private ones marked `@private` in JSDoc)
3. Public component strips private props via reduce before forwarding

```tsx
const privateProps = ["className", "compact", "pressed"] as const;
export type F0ExampleProps = Omit<InternalProps, (typeof privateProps)[number]>;
```

### withSkeleton HOC

Attach `.Skeleton` sub-component to components using `withSkeleton()`:

```tsx
export const F0Card = withSkeleton(F0CardBase, F0CardSkeleton);
// Usage: <F0Card.Skeleton compact />
```

### UI Abstraction Layer

Components must compose via `@/ui/` wrappers, never import Radix or third-party primitives directly. The `@/ui/` layer wraps Radix UI, shadcn/ui, and other primitives. Examples: `@/ui/Action`, `@/ui/Select`, `@/ui/Dialog/dialog`, `@/ui/Text`.

### Naming

- New component names must start with `F0` (e.g., `F0Button`)
- Old components starting with `F1`, `One`, or without prefix should be renamed when touched
- This does not apply to subcomponents or private components

### Imports and Exports

- **Never** import entire React via `import * as React from "react"` — import only what you use
- Use **named exports** for all components — no default exports
- Implement `'use client'` directive only when necessary
- Ensure components in `components/` or `experimental/` are exported in `exports.ts`
- Components in `src/ui/` must **not** be re-exported

## Component Props

- Props must have clear, functional names (e.g., `only-icon` not `hide-icon` + `hide-label`)
- Avoid `className` on public components (can be a private prop)
- For union types, use const arrays and export both array and type:

```ts
export const colors = ["a", "b", "c"] as const;
export type Color = (typeof colors)[number];
```

- Use `DataAttributes` intersection type from `@/global.types` for `data-*` prop support
- Set default prop values inline during destructuring (not `defaultProps`)
- Use discriminated unions for mutually exclusive prop combinations
- Use `Omit` + intersection to derive public props from internal types

## Context and State Patterns

### Context Initialization

Use the appropriate pattern based on whether the context is required or optional:

- **Required context** (most common): `createContext<T | null>(null)` + hook that throws if null
- **Optional with defaults**: `createContext<T>(defaultValue)` — no guard needed in hook
- **Optional with fallback**: `createContext<T | null>(null)` + hook returns fallback value via `??`
- **Dual hooks**: provide both `useX()` (throws) and `useXOptional()` (returns null) when both use cases exist

### Controlled vs. Uncontrolled Components

Support both modes with `localValue` state synced from the prop via `useEffect`:

```tsx
const [localValue, setLocalValue] = useState(value);
useEffect(() => {
  setLocalValue(value);
}, [value]);
```

Check `isControlled = value !== undefined` to determine behavior.

### Event Naming

- **Props (public API)**: always `on` prefix — `onClick`, `onChange`, `onClose`, `onOpenChange`
- **Internal handlers**: always `handle` prefix — `handleClick`, `handleClose`
- **Callback invocation**: always use optional chaining — `props.onClick?.(event)`

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
- Alias `zeroRender` as `render`: `import { zeroRender as render } from "@/testing/test-utils"`

### Test Utilities

- Use `zeroRender` from `@/testing/test-utils.tsx` instead of `render` from `@testing-library/react` — it provides mocks for context providers (I18n, L10n, DataCollectionStorage, UserPlatform) and disables Framer Motion animations
- Use `zeroRenderHook` for testing hooks in isolation

### Writing Tests

- Use `vi.fn()` exclusively — never `jest.fn()`
- Use `vi.hoisted()` when mock values need to be available before `vi.mock()` factory runs
- Set up `userEvent` via `userEvent.setup()`, integrate with fake timers via `advanceTimers: vi.advanceTimersByTime`
- Prefer query priority: `getByRole` > `getByText` > `getByLabelText` > `getByTestId`
- No snapshot testing — use explicit assertions only
- a11y automated testing via Storybook (axe-playwright), not in unit tests
- Create helper functions for multi-step interactions (e.g., `openSelect()`, `openDropdown()`)
- For deferred promise testing, store the resolver externally: `let resolve; const p = new Promise(r => { resolve = r })`

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

- Use Tailwind CSS with custom configuration — no CSS modules or CSS-in-JS
- Inline `style` attributes only for truly dynamic values (hex colors, background images)
- Follow mobile-first responsive design
- Utilize container queries (`@container` + `@xs:`, `@md:` breakpoints) where appropriate
- Use shadcn/ui components as base primitives (avoid modifications unless necessary)

### cn() Utility

Use `cn()` from `@/lib/utils` for all className composition (wraps `clsx` + `twMerge`):

- Boolean conditions: `cn("base", isActive && "active-class")`
- Ternary: `cn(size === "sm" ? "p-2" : "p-4")`
- Combined with CVA: `cn(variants({ size }), "extra-class")`
- Combined with `focusRing()`: `cn("base-class", focusRing())`

### CVA (Class Variance Authority)

Import from `"cva"` (not `"class-variance-authority"`). Use for multi-variant components:

- Define with `cva({ base, variants, defaultVariants })` — use `compoundVariants` for variant interactions
- Extract prop types: `type Props = VariantProps<typeof myVariants>`
- Compose variant maps via spread: `variants: { ...sizeVariants, ...colorVariants }`

### Design Tokens

All design tokens use the `f1-` prefix in Tailwind classes:

- **Foreground**: `text-f1-foreground`, `text-f1-foreground-secondary`, `-info`, `-warning`, `-critical`, `-positive`, `-disabled`
- **Background**: `bg-f1-background`, `bg-f1-background-secondary`, `-tertiary`, `-info`, `-warning`, `-critical`, `-positive`, `-selected`
- **Border**: `border-f1-border`, `border-f1-border-secondary`, `-hover`, `-selected`, `-critical`
- **Icons**: `text-f1-icon`, `text-f1-icon-secondary`, `-bold`, `-critical`, `-info`
- **Focus ring**: `ring-f1-special-ring`

### focusRing() Utility

Use `focusRing()` from `@/lib/utils` for standardized focus indicators on all focusable elements. It applies `focus-visible:ring-1 focus-visible:ring-f1-special-ring`. Accepts optional extra classes: `focusRing("focus-visible:ring-inset")`.

### Animation Strategy

- CSS transitions (`transition-colors`, `transition-all`) for simple interactions
- Framer Motion for complex animations: `AnimatePresence` + `motion.div` for enter/exit, `motion.create(Component)` for wrapping existing components
- `tailwindcss-animate` for common animation patterns
- Always check `useReducedMotion()` from `@/lib/a11y` — set Framer Motion `duration: 0` when true
- Tests disable animations globally via `MotionGlobalConfig.skipAnimations = true`

## i18n

- Built-in via `useI18n` hook from `@/lib/providers/i18n`
- Hook returns both direct property access and a `t()` function for dot-notation keys with `{{placeholder}}` interpolation
- Variable naming: `const i18n = useI18n()` or `const { t, ...i18n } = useI18n()` when both access patterns are needed
- `defaultTranslations` is the full English translation object (`as const`) — used as fallback in tests
- `TranslationsType` provides type-safe translation overrides via `TranslationShape<>`
- Translation keys: camelCase, domain-namespaced (e.g., `actions.save`, `filters.clearAll`), use `one`/`other` sub-keys for plurals
- Fallback: missing keys log `console.warn` and return the key string

## Accessibility

- Use `focusRing()` from `@/lib/utils` on all focusable elements
- Use `useReducedMotion()` from `@/lib/a11y` for all animated components — set `duration: 0` when true
- Use `sr-only` class for visually hidden text (e.g., icon-only buttons must have `<span className="sr-only">{label}</span>`)
- Use `aria-busy="true"` + `aria-live="polite"` on loading/skeleton states
- For div-based interactive elements, handle `Enter` and `Space` keys in `onKeyDown` and set `tabIndex={0}` + `role`
- Delegate complex widget a11y (dialogs, selects, toggles) to Radix UI primitives via `@/ui/`
- All interactive elements must be keyboard accessible
- Maintain proper focus management
- Test with screen readers

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

- Use `console.warn()` for recoverable issues with fallback behavior (wrong prop combinations, unsupported values)
- Use `throw new Error()` for unrecoverable programming errors (missing required props, context used outside provider)
- Use `useTextFormatEnforcer()` from `@/lib/text` for validating text props
- No error boundaries exist currently — implement where needed

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

- CVA (`cva` package), clsx, tailwind-merge, date-fns, usehooks-ts

### Development Tools

- Storybook, Vitest, Chromatic (visual regression)

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
