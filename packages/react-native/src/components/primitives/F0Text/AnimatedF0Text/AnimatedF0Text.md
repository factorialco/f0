# AnimatedF0Text

Animated text primitive for React Native with semantic typography variants and Reanimated animation support.

## Features

- All F0Text semantic typography variants and colors
- Reanimated `entering`/`exiting` layout animations
- Animated `style` prop for custom animations via `useAnimatedStyle`
- Layout transition animations
- Shares the same typography system as F0Text
- Performance optimized with React.memo and useMemo

## Installation

```tsx
import { AnimatedF0Text } from "@factorialco/f0-react-native"
```

Requires `react-native-reanimated` as a peer dependency.

## When to use AnimatedF0Text vs F0Text

| Use case                                          | Component        |
| ------------------------------------------------- | ---------------- |
| Static text, no animation                         | `F0Text`         |
| Text that fades in/out                            | `AnimatedF0Text` |
| Text with entering/exiting transitions            | `AnimatedF0Text` |
| Text driven by animated values (scroll, gestures) | `AnimatedF0Text` |

## Usage

### Entering/Exiting Animations

<!-- prettier-ignore -->
```tsx
import { AnimatedF0Text } from "@factorialco/f0-react-native"
import { FadeIn, FadeOut, SlideInLeft } from "react-native-reanimated"

<>
  <AnimatedF0Text
    variant="heading-xl"
    entering={FadeIn.duration(300)}
    exiting={FadeOut.duration(200)}
  >
    Welcome back
  </AnimatedF0Text>

  <AnimatedF0Text variant="heading-md" entering={SlideInLeft.springify()}>
    Slide in heading
  </AnimatedF0Text>
</>
```

### Custom Animated Styles

<!-- prettier-ignore -->
```tsx
import { AnimatedF0Text } from "@factorialco/f0-react-native"
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

const opacity = useSharedValue(0)

const animatedStyle = useAnimatedStyle(() => ({
  opacity: opacity.value,
  transform: [{ translateY: withTiming(opacity.value * -10) }],
}))

<>
  <AnimatedF0Text variant="body-md-default" style={animatedStyle}>
    Custom animated text
  </AnimatedF0Text>
</>
```

### Layout Transitions

<!-- prettier-ignore -->
```tsx
import { AnimatedF0Text } from "@factorialco/f0-react-native"
import { LinearTransition } from "react-native-reanimated"

<>
  <AnimatedF0Text
    variant="body-sm-default"
    layout={LinearTransition.springify()}
  >
    {dynamicContent}
  </AnimatedF0Text>
</>
```

## API Reference

### Props

AnimatedF0Text accepts all F0Text semantic props plus Reanimated animation props.

#### Typography Props (shared with F0Text)

| Prop            | Type                | Default             | Description                              |
| --------------- | ------------------- | ------------------- | ---------------------------------------- |
| `variant`       | `TypographyVariant` | `'body-sm-default'` | Typography variant                       |
| `color`         | `TextColor`         | `'default'`         | Text color from F0 semantic color system |
| `align`         | `TextAlign`         | `'left'`            | Text alignment                           |
| `decoration`    | `TextDecoration`    | `'none'`            | Text decoration                          |
| `transform`     | `TextTransform`     | `'none'`            | Text transform                           |
| `numberOfLines` | `number`            | `undefined`         | Max lines before truncation              |

#### Animation Props

| Prop       | Type                                              | Description                                                    |
| ---------- | ------------------------------------------------- | -------------------------------------------------------------- |
| `entering` | `EntryOrExitLayoutType`                           | Reanimated entering animation (e.g. `FadeIn`, `SlideInLeft`)   |
| `exiting`  | `EntryOrExitLayoutType`                           | Reanimated exiting animation (e.g. `FadeOut`, `SlideOutRight`) |
| `layout`   | `BaseAnimationBuilder \| LayoutAnimationFunction` | Layout transition animation                                    |
| `style`    | `AnimatedStyle`                                   | Animated style from `useAnimatedStyle`                         |

All React Native `TextProps` are also supported (onPress, testID, etc.).

### Typography Variants

See [F0Text documentation](../F0Text/F0Text.md) for the full list of typography variants and colors.

## Architecture

```
F0Text/                        # Parent folder for text primitives
├── F0Text/                    # Static text component
│   ├── F0Text.tsx
│   ├── F0Text.types.ts        # Shared types (TypographyVariant, TextColor, etc.)
│   ├── F0Text.styles.ts       # Shared styles (textVariants)
│   ├── F0Text.md
│   ├── index.ts
│   └── __tests__/
├── AnimatedF0Text/            # Animated text component
│   ├── AnimatedF0Text.tsx     # Animated text (Reanimated Animated.Text)
│   ├── AnimatedF0Text.types.ts
│   ├── AnimatedF0Text.md
│   ├── index.ts
│   └── __tests__/
└── index.ts                   # Barrel re-exporting both
```

- **Types** are imported from `../F0Text/F0Text.types.ts` (`TypographyVariant`, `TextColor`, etc.)
- **Styles** are imported from `../F0Text/F0Text.styles.ts` (`textVariants`)

This ensures both components always produce identical typography output.

## Accessibility

- Fully supports React Native `Text` accessibility props
- Animations respect the device's reduced motion setting when using Reanimated's built-in animations

## Performance

- **React.memo**: Prevents re-renders when props unchanged
- **useMemo**: Memoizes className computation
- Only imported when animation is needed (tree-shakeable)
