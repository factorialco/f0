# PressableFeedback

Internal pressable primitive with animated press feedback for the F0 Design System.

## Overview

PressableFeedback wraps React Native's `Pressable` with Reanimated animations (scale + highlight overlay). It provides consistent press feedback across all interactive F0 components.

**This is an internal primitive** — it's used by `F0Button`, `OneChip`, `BaseTag`, and other interactive components. Consumers typically don't use it directly.

## Architecture

- **Pattern:** Props API (Atomic)
- **Category:** Internal Primitive
- **Location:** `src/components/primitives/PressableFeedback/`

## Usage

```tsx
import { PressableFeedback } from "../primitives/PressableFeedback"

// Default: scale + highlight combined
<PressableFeedback onPress={handlePress}>
  <View>{/* content */}</View>
</PressableFeedback>

// Scale only
<PressableFeedback variant="scale" onPress={handlePress}>
  <View>{/* content */}</View>
</PressableFeedback>

// Custom animation config
<PressableFeedback
  variant="both"
  scaleAnimation={{ value: 0.95, timingConfig: { duration: 200 } }}
  highlightAnimation={{ opacity: [0, 0.2] }}
>
  <View>{/* content */}</View>
</PressableFeedback>
```

## Props

| Prop                 | Type                       | Default           | Description                                   |
| -------------------- | -------------------------- | ----------------- | --------------------------------------------- |
| `variant`            | `PressableFeedbackVariant` | `"both"`          | Feedback style: highlight, scale, both, none  |
| `scaleAnimation`     | `ScaleAnimationConfig`     | `{ value: 0.98 }` | Scale animation configuration                 |
| `highlightAnimation` | `HighlightAnimationConfig` | See below         | Highlight overlay configuration               |
| `disableAnimation`   | `boolean`                  | `false`           | Disables all animations                       |
| `disabled`           | `boolean`                  | —                 | Disables the pressable                        |
| `className`          | `string`                   | —                 | Additional Tailwind classes                   |
| `style`              | `PressableProps["style"]`  | —                 | Style (needed for Reanimated animated styles) |
| `children`           | `React.ReactNode`          | —                 | Content to render                             |

All `PressableProps` (except `style` and `children` which are re-declared) are also forwarded.

### Feedback Variants

| Variant       | Scale | Highlight Overlay | Use Case                    |
| ------------- | ----- | ----------------- | --------------------------- |
| `"both"`      | Yes   | Yes               | Default — buttons, chips    |
| `"scale"`     | Yes   | No                | Cards, subtle interactions  |
| `"highlight"` | No    | Yes               | List items, rows            |
| `"none"`      | No    | No                | When only onPress is needed |

### Default Animation Values

- **Scale:** 0.98 with 150ms ease-out
- **Highlight:** rgba(0,0,0,1) at 0→0.15 opacity with 150ms ease-out

## File Structure

```
src/components/primitives/PressableFeedback/
├── PressableFeedback.tsx           # Component implementation
├── PressableFeedback.types.ts      # TypeScript types
├── PressableFeedback.md            # This file
├── __tests__/
│   └── index.spec.tsx              # Tests
└── index.ts                        # Barrel exports
```

## Used By

- `F0Button` — primary button component
- `OneChip` — chip/tag selector (legacy)
- `OnePreset` — preset selector (legacy)
- `BaseTag` — base tag component (legacy)
