# F0Icon

Icon component for rendering SVG icons with consistent sizing from the F0 Design System.

## Overview

F0Icon is an atomic component that wraps SVG icon components with automatic UniWind interop and standardized sizing variants. It supports semantic color customization through className for flexibility while maintaining design system consistency.

## Architecture

- **Pattern:** Props API (Atomic Component)
- **Category:** Primitive Component
- **Location:** `src/components/primitives/Icon/`

## Usage

```tsx
import { F0Icon } from '@/components/primitives/Icon';
import { Archive, Home } from '@/icons/app';

// Basic usage with default size (md)
<F0Icon icon={Archive} />

// With size variant
<F0Icon icon={Home} size="lg" />

// With testID for testing
<F0Icon icon={Archive} size="sm" testID="archive-icon" />
```

## Props

### `icon` (required)

- **Type:** `IconType`
- **Description:** SVG icon component to render (from `icons/` directory)

```tsx
import { Archive } from "@/icons/app"
;<F0Icon icon={Archive} />
```

### `size`

- **Type:** `'xl' | 'lg' | 'md' | 'sm' | 'xs'`
- **Default:** `'md'`
- **Description:** Size variant for the icon

```tsx
<F0Icon icon={Archive} size="xl" />  // 32x32px
<F0Icon icon={Archive} size="lg" />  // 24x24px
<F0Icon icon={Archive} size="md" />  // 20x20px (default)
<F0Icon icon={Archive} size="sm" />  // 16x16px
<F0Icon icon={Archive} size="xs" />  // 12x12px
```

### `testID`

- **Type:** `string`
- **Description:** Test identifier for testing library

```tsx
<F0Icon icon={Archive} testID="my-icon" />
```

### `className`

- **Type:** `string`
- **Description:** Tailwind classes for color customization (semantic tokens recommended)

```tsx
// ✅ Semantic color tokens (recommended)
<F0Icon icon={Archive} className="text-f0-icon-critical" />
<F0Icon icon={Heart} className="text-f0-icon-promote" />

// ✅ Custom colors when needed
<F0Icon icon={Star} className="text-yellow-500" />
```

### Other Props

F0Icon accepts all SVG props from `react-native-svg` except:

- ❌ `style` - Use className instead for styling

## Size Variants

| Variant | Width/Height   | Stroke Width | Use Case                           |
| ------- | -------------- | ------------ | ---------------------------------- |
| `xl`    | 32px (w-8 h-8) | stroke-xl    | Large feature icons, hero sections |
| `lg`    | 24px (w-6 h-6) | stroke-lg    | Primary buttons, major actions     |
| `md`    | 20px (w-5 h-5) | stroke-md    | Default size, most UI elements     |
| `sm`    | 16px (w-4 h-4) | stroke-sm    | Secondary buttons, compact UI      |
| `xs`    | 12px (w-3 h-3) | stroke-xs    | Inline icons, dense layouts        |

## Implementation Details

### UniWind Interop

F0Icon automatically applies UniWind interop to icon components using `withUniwind()`. Icons are cached in a `WeakSet` to ensure the wrapper is only applied once per icon type.

```tsx
// Handled internally - no action needed
const IconComponent = useMemo(() => applyIconInterop(icon), [icon])
```

### Performance

- Wrapped in `React.memo` to prevent unnecessary re-renders
- `useMemo` for className generation
- Icon interop caching via `WeakSet`

### TypeScript

Style prop is blocked at compile-time to enforce className usage:

```tsx
// ✅ Allowed - semantic size variant
<F0Icon icon={Archive} size="lg" />

// ✅ Allowed - className for colors
<F0Icon icon={Archive} className="text-f0-icon-critical" />

// ❌ TypeScript error - style not allowed
<F0Icon icon={Archive} style={{ color: 'red' }} />
```

## Examples

### Basic Icon

```tsx
import { F0Icon } from "@/components/primitives/Icon"
import { Archive } from "@/icons/app"
;<F0Icon icon={Archive} />
```

### Icon with Color

```tsx
import { F0Icon } from "@/components/primitives/Icon"
import { Heart } from "@/icons/app"
;<F0Icon icon={Heart} size="lg" className="text-f0-icon-critical" />
```

### Icon in Button

```tsx
import { F0Icon } from "@/components/primitives/Icon"
import { Plus } from "@/icons/app"
;<Button>
  <F0Icon icon={Plus} size="sm" />
  <Text>Add Item</Text>
</Button>
```

### Multiple Sizes

```tsx
<View>
  <F0Icon icon={Archive} size="xs" />
  <F0Icon icon={Archive} size="sm" />
  <F0Icon icon={Archive} size="md" />
  <F0Icon icon={Archive} size="lg" />
  <F0Icon icon={Archive} size="xl" />
</View>
```

## File Structure

```
src/components/primitives/Icon/
├── F0Icon.tsx              # Main component implementation
├── F0Icon.types.ts         # TypeScript type definitions
├── F0Icon.styles.ts        # tailwind-variants configuration
├── F0Icon.md               # This documentation
├── __tests__/
│   └── F0Icon.spec.tsx     # F0Icon tests
└── index.ts                # Public exports

src/components/Icon/        # Backward compatibility layer
├── index.tsx               # Re-exports from primitives/Icon
├── __tests__/
│   └── Icon.spec.tsx       # Legacy tests
└── README.md               # Legacy documentation
```

## Migration from Legacy Icon

The legacy `Icon` component has been removed. Use `F0Icon` instead:

```tsx
// Old usage (no longer available)
import { Icon } from "@/components/Icon"
;<Icon icon={Archive} size="lg" />

// New usage (use F0Icon)
import { F0Icon } from "@/components/primitives/Icon"
;<F0Icon icon={Archive} size="lg" />
```

### Breaking Changes

- ❌ `variant` prop deprecated (use `className` for colors)
- ❌ `isPressed` prop deprecated (not used)

## Related Components

- **F0Text** - Text primitive with semantic variants
- **Button** - Uses F0Icon for icon slots
- **Badge** - Can include F0Icon

## References

- Design tokens: `/packages/react-native/src/styles/theme.css`
- Component architecture: `/packages/react-native/docs/f0-component-architecture.skill.md`
- Icon source: `/packages/react-native/src/icons/`
