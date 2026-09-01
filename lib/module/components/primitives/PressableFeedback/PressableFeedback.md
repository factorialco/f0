# PressableFeedback

Internal pressable primitive with animated press feedback for the F0 Design System.

## Overview

PressableFeedback wraps React Native's `Pressable` with Reanimated animations (scale + highlight overlay). It provides consistent press feedback across interactive F0 components.

This is an internal primitive used by higher-level components.

## Architecture

- **Pattern:** Props API (Atomic)
- **Category:** Internal Primitive
- **Location:** `src/components/primitives/PressableFeedback/`

## Usage

<!-- prettier-ignore -->
```tsx
import { PressableFeedback } from "@factorialco/f0-react-native"

<PressableFeedback onPress={handlePress}>
  <View>{/* content */}</View>
</PressableFeedback>

<PressableFeedback variant="scale" onPress={handlePress}>
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

### Default Animation Values

- **Scale:** `0.98` with `150ms` ease-out
- **Highlight:** `rgba(0,0,0,1)` at `0 -> 0.15` opacity with `150ms` ease-out
