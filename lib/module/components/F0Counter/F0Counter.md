# F0Counter

Numeric counter pill with size and type variants. Migrates the legacy `Counter` component to F0 primitives (`F0Text`).

## Usage

```tsx
import { F0Counter } from "@factorialco/f0-react-native"

<F0Counter value={42} />
<F0Counter value={150} maxValue={99} type="notification" />
<F0Counter value={3} size="sm" type="selected" />
<F0Counter value={7} type="primary" />
```

## Props

| Prop        | Type                                                     | Default     | Description                                             |
| ----------- | -------------------------------------------------------- | ----------- | ------------------------------------------------------- |
| `value`     | `number`                                                 | required    | Numeric value to display                                |
| `maxValue`  | `number`                                                 | `-`         | When `value` exceeds this, displays `+maxValue` instead |
| `size`      | `"md" \| "sm"`                                           | `"md"`      | Pill dimensions                                         |
| `type`      | `"default" \| "primary" \| "selected" \| "notification"` | `"default"` | Visual style variant                                    |
| `className` | `string`                                                 | `-`         | Layout/positioning classes for outer wrapper            |

## Variants

### Size

- **md** — `min-w-5 p-0.5` (20px min, content-driven height)
- **sm** — `min-w-4 px-0.5` (16px min, content-driven height)

### Type

- **default** — secondary background with border, default text color
- **primary** — transparent background, inverse border, inverse text (for dark surfaces)
- **selected** — selected-bold background, inverse text
- **notification** — accent-bold background (red), inverse text

### Typography

Text uses `body-xs-medium` (12px / 16px Inter Medium) per Figma spec, with `tabular-nums` for aligned digits.

## Figma

Source: `F0-React-Native-Uniwind` → Counter component (node 255:5598).

## Web parity

Based on `packages/react/src/ui/Counter`. Shared props: `value`, `maxValue`, `size`, `type`.

Differences:

- **Types**: Web has `default | selected | bold`. RN follows Figma and adds `primary` (inverse for dark surfaces) and renames `bold` to `notification`.
- **Text size**: Web uses 14px (`text-sm`). RN uses 12px (`body-xs-medium`) per Figma.
- **Primitives**: RN uses `F0Text`; web uses a raw `<div>`.
- Web wraps with `experimentalComponent` / `withDataTestId` — not applicable to RN.

## File structure

```
src/components/F0Counter/
├── F0Counter.tsx
├── F0Counter.types.ts
├── F0Counter.styles.ts
├── F0Counter.md
├── index.ts
└── __tests__/
    └── F0Counter.spec.tsx
```
