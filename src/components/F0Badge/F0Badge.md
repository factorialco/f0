# F0Badge

Semantic icon badge component for React Native in F0.

## Overview

F0Badge renders an icon inside a circular badge with semantic color variants and size variants.

## Usage

<!-- prettier-ignore -->
```tsx
import { F0Badge } from "@factorialco/f0-react-native"
import { Add } from "@factorialco/f0-react-native/icons/app"

<F0Badge icon={Add} />
<F0Badge icon={Add} variant="highlight" />
<F0Badge icon={Add} size="lg" variant="positive" />
```

## Props

| Prop      | Type             | Default     | Description                 |
| --------- | ---------------- | ----------- | --------------------------- |
| `icon`    | `IconType`       | required    | Icon component to render    |
| `variant` | `F0BadgeVariant` | `"neutral"` | Semantic visual variant     |
| `size`    | `F0BadgeSize`    | `"md"`      | Badge and icon size mapping |

## Variants

- `neutral`
- `highlight`
- `positive`
- `critical`
- `warning`

## Sizes

- `xs`
- `sm`
- `md`
- `lg`

## Accessibility

F0Badge is decorative by default. Accessibility semantics come from the surrounding parent component unless explicitly handled by consumers.

## Testing

Main tests:

- `src/components/F0Badge/__tests__/F0Badge.spec.tsx`

Coverage includes snapshots for variants and sizes, and icon-size mapping checks.

## File Structure

```
src/components/F0Badge/
├── F0Badge.tsx
├── F0Badge.types.ts
├── F0Badge.styles.ts
├── F0Badge.md
├── index.ts
└── __tests__/
    └── F0Badge.spec.tsx
```
