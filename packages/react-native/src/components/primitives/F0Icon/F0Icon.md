# F0Icon

Icon component for rendering SVG icons with consistent sizing and semantic colors from the F0 Design System.

## Overview

F0Icon is an atomic component that wraps SVG icon components with automatic UniWind interop, standardized sizing variants, and semantic icon colors. It follows the same pattern as F0Text: a `color` prop maps to design system tokens, with `className` available as an escape hatch.

## Architecture

- **Pattern:** Props API (Atomic Component)
- **Category:** Primitive Component
- **Location:** `src/components/primitives/F0Icon/`

## Usage

<!-- prettier-ignore -->
```tsx
import { F0Icon } from "@factorialco/f0-react-native"
import { Archive } from "@factorialco/f0-react-native/icons/app"
import { Home } from "@factorialco/f0-react-native/icons/modules"

<F0Icon icon={Archive} />

<F0Icon icon={Home} size="lg" />

<F0Icon icon={Archive} color="critical" />

<F0Icon icon={Archive} size="sm" color="positive" testID="archive-icon" />
```

## Props

### `icon` (required)

- **Type:** `IconType`
- **Description:** SVG icon component to render (from `icons/` directory)

<!-- prettier-ignore -->
```tsx
import { Archive } from "@factorialco/f0-react-native/icons/app"
<F0Icon icon={Archive} />
```

### `size`

- **Type:** `'xl' | 'lg' | 'md' | 'sm' | 'xs'`
- **Default:** `'md'`
- **Description:** Size variant for the icon

<!-- prettier-ignore -->
```tsx
<F0Icon icon={Archive} size="xl" />  // 32x32px
<F0Icon icon={Archive} size="lg" />  // 24x24px
<F0Icon icon={Archive} size="md" />  // 20x20px (default)
<F0Icon icon={Archive} size="sm" />  // 16x16px
<F0Icon icon={Archive} size="xs" />  // 12x12px
```

### `color`

- **Type:** `IconColor` (see below)
- **Default:** none (no color class applied; icon inherits from parent)
- **Description:** Semantic icon color from the F0 design system. Maps to `f0-icon-*` tokens.

<!-- prettier-ignore -->
```tsx
<F0Icon icon={Archive} color="default" />
<F0Icon icon={Archive} color="critical" />
<F0Icon icon={Archive} color="positive" />
<F0Icon icon={Archive} color="info" />
<F0Icon icon={Archive} color="warning" />
<F0Icon icon={Archive} color="accent" />
```

### `testID`

- **Type:** `string`
- **Description:** Test identifier for testing library

<!-- prettier-ignore -->
```tsx
<F0Icon icon={Archive} testID="my-icon" />
```

### `className`

- **Type:** `string`
- **Description:** Tailwind classes for custom styling. Use as an escape hatch when `color` doesn't cover the need (e.g. layout adjustments, one-off colors).

<!-- prettier-ignore -->
```tsx
<F0Icon icon={Archive} className="-ml-0.5" />
<F0Icon icon={Star} className="text-yellow-500" />
```

### Other Props

F0Icon accepts all SVG props from `react-native-svg` except `style` (use `color` or `className` instead).

## Size Variants

| Variant | Width/Height   | Stroke Width | Use Case                           |
| ------- | -------------- | ------------ | ---------------------------------- |
| `xl`    | 32px (w-8 h-8) | stroke-xl    | Large feature icons, hero sections |
| `lg`    | 24px (w-6 h-6) | stroke-lg    | Primary buttons, major actions     |
| `md`    | 20px (w-5 h-5) | stroke-md    | Default size, most UI elements     |
| `sm`    | 16px (w-4 h-4) | stroke-sm    | Secondary buttons, compact UI      |
| `xs`    | 12px (w-3 h-3) | stroke-xs    | Inline icons, dense layouts        |

## Color Variants

Derived from `f0-icon-*` tokens in `src/styles/theme.css`. Sync is enforced by `F0Icon.tokens.spec.ts`.

| Color                 | Token                              | Use Case                  |
| --------------------- | ---------------------------------- | ------------------------- |
| `default`             | `text-f0-icon`                     | Standard icon color       |
| `secondary`           | `text-f0-icon-secondary`           | Muted/secondary icons     |
| `inverse`             | `text-f0-icon-inverse`             | Icons on dark backgrounds |
| `bold`                | `text-f0-icon-bold`                | High emphasis icons       |
| `critical`            | `text-f0-icon-critical`            | Error/destructive         |
| `critical-bold`       | `text-f0-icon-critical-bold`       | Bold critical emphasis    |
| `accent`              | `text-f0-icon-accent`              | Brand accent              |
| `info`                | `text-f0-icon-info`                | Informational             |
| `warning`             | `text-f0-icon-warning`             | Warning states            |
| `positive`            | `text-f0-icon-positive`            | Success/positive          |
| `promote`             | `text-f0-icon-promote`             | Promotional highlights    |
| `selected`            | `text-f0-icon-selected`            | Selected state            |
| `selected-hover`      | `text-f0-icon-selected-hover`      | Selected hover state      |
| `mood-super-negative` | `text-f0-icon-mood-super-negative` | Mood: very negative       |
| `mood-negative`       | `text-f0-icon-mood-negative`       | Mood: negative            |
| `mood-neutral`        | `text-f0-icon-mood-neutral`        | Mood: neutral             |
| `mood-positive`       | `text-f0-icon-mood-positive`       | Mood: positive            |
| `mood-super-positive` | `text-f0-icon-mood-super-positive` | Mood: very positive       |

## Implementation Details

### UniWind Interop

F0Icon automatically applies UniWind interop to icon components using `withUniwind()`. Icons are cached in a `WeakSet` to ensure the wrapper is only applied once per icon type.

### Performance

- Wrapped in `React.memo` to prevent unnecessary re-renders
- `useMemo` for className generation
- Icon interop caching via `WeakSet`

### TypeScript

Style prop is blocked at compile-time to enforce `color`/`className` usage:

<!-- prettier-ignore -->
```tsx
<F0Icon icon={Archive} color="critical" />

// TypeScript error - style not allowed
<F0Icon icon={Archive} style={{ color: 'red' }} />
```

### Token Sync

`ICON_COLORS` in `F0Icon.types.ts` is kept in sync with `f0-icon-*` tokens from `theme.css` by a CI test (`F0Icon.tokens.spec.ts`). Adding or removing a token in theme.css without updating `ICON_COLORS` will fail the test.

## File Structure

```
src/components/primitives/F0Icon/
├── index.ts                       # Barrel exports
├── F0Icon.tsx                     # Component implementation
├── F0Icon.types.ts                # TypeScript type definitions (ICON_COLORS, IconColor)
├── F0Icon.styles.ts               # tailwind-variants configuration (size + color)
├── F0Icon.md                      # This documentation
└── __tests__/
    ├── F0Icon.spec.tsx            # Component tests
    └── F0Icon.tokens.spec.ts     # Token sync test (theme.css ↔ ICON_COLORS)
```

## Related Components

- **F0Text** - Text primitive with semantic `color` prop (foreground tokens)
- **Button** - Uses F0Icon for icon slots
- **Badge** - Can include F0Icon

## References

- Design tokens: `src/styles/theme.css`
- Icon source: `src/icons/`
