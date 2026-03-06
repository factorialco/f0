# F0Text

Primitive text component for React Native with semantic typography variants and optimized performance.

## Features

- Semantic typography variants (heading and body styles)
- F0 semantic color system integration
- Inter font family support
- Type-safe TypeScript API
- Uniwind (Tailwind) styling
- Performance optimized with React.memo and useMemo
- Full accessibility support

## Installation

```tsx
import { F0Text } from "@factorialco/f0-react-native"
```

## Usage

<!-- prettier-ignore -->
```tsx
<>
  <F0Text variant="heading-lg">Welcome</F0Text>
  <F0Text variant="body-sm-default" color="secondary">
    Secondary text
  </F0Text>
  <F0Text variant="body-md-medium" align="center">
    Centered text
  </F0Text>
  <F0Text variant="body-sm-default" numberOfLines={2}>
    Truncated text...
  </F0Text>
</>
```

## API Reference

### Props

| Prop            | Type                | Default             | Description                                             |
| --------------- | ------------------- | ------------------- | ------------------------------------------------------- |
| `variant`       | `TypographyVariant` | `'body-sm-default'` | Typography variant with weight included                 |
| `color`         | `TextColor`         | `'default'`         | Text color from F0 semantic color system                |
| `align`         | `TextAlign`         | `'left'`            | Text alignment (left, center, right, justify)           |
| `decoration`    | `TextDecoration`    | `'none'`            | Text decoration (none, underline, line-through)         |
| `transform`     | `TextTransform`     | `'none'`            | Text transform (none, uppercase, lowercase, capitalize) |
| `numberOfLines` | `number`            | `undefined`         | Max lines before truncation with ellipsis               |

All React Native `TextProps` are also supported (onPress, testID, etc.).

**Note**: `className` and `style` props are **not available**. Use semantic props for typography. For spacing/layout, wrap F0Text in a View. Both props are filtered at runtime to prevent override via spread.

### Typography Variants

All variants use **Inter** font family with the weight included in the variant name.

#### Heading Variants

| Variant      | Size | Line Height | Weight         | Letter Spacing |
| ------------ | ---- | ----------- | -------------- | -------------- |
| `heading-xl` | 36px | 40px        | Semibold (600) | -0.2px         |
| `heading-lg` | 24px | 32px        | Semibold (600) | -0.2px         |
| `heading-md` | 20px | 28px        | Semibold (600) | -0.2px         |
| `heading-sm` | 16px | 24px        | Semibold (600) | -              |

#### Body Variants

| Variant            | Size | Line Height | Weight         | Letter Spacing |
| ------------------ | ---- | ----------- | -------------- | -------------- |
| `body-md-default`  | 16px | 24px        | Regular (400)  | -              |
| `body-md-medium`   | 16px | 24px        | Medium (500)   | -              |
| `body-md-semibold` | 16px | 24px        | Semibold (600) | -              |
| `body-sm-default`  | 14px | 20px        | Regular (400)  | -              |
| `body-sm-medium`   | 14px | 20px        | Medium (500)   | -              |
| `body-sm-semibold` | 14px | 20px        | Semibold (600) | -              |
| `body-xs-medium`   | 12px | 16px        | Medium (500)   | -              |

### Color Variants

| Color               | Usage                              |
| ------------------- | ---------------------------------- |
| `default`           | Primary text                       |
| `secondary`         | Secondary information              |
| `tertiary`          | Tertiary/subtle text               |
| `inverse`           | Text on dark backgrounds           |
| `inverse-secondary` | Secondary text on dark backgrounds |
| `disabled`          | Disabled state text                |
| `accent`            | Highlighted/accent text            |
| `critical`          | Error messages                     |
| `info`              | Informational text                 |
| `warning`           | Warning messages                   |
| `positive`          | Success messages                   |
| `selected`          | Selected state text                |

## Examples

### Typography Variants

<!-- prettier-ignore -->
```tsx
<>
  {/* Headings */}
  <F0Text variant="heading-xl">Extra Large Heading</F0Text>
  <F0Text variant="heading-lg">Large Heading</F0Text>
  <F0Text variant="heading-md">Medium Heading</F0Text>
  <F0Text variant="heading-sm">Small Heading</F0Text>

  {/* Body with different weights */}
  <F0Text variant="body-md-default">Regular body text</F0Text>
  <F0Text variant="body-md-medium">Medium body text</F0Text>
  <F0Text variant="body-md-semibold">Semibold body text</F0Text>

  {/* Smaller sizes */}
  <F0Text variant="body-sm-default">Small regular text</F0Text>
  <F0Text variant="body-xs-medium">Extra small medium text</F0Text>
</>
```

### Colors

<!-- prettier-ignore -->
```tsx
<>
  <F0Text variant="body-sm-default" color="default">
    Primary text
  </F0Text>
  <F0Text variant="body-sm-default" color="secondary">
    Secondary information
  </F0Text>
  <F0Text variant="body-sm-default" color="critical">
    Error message
  </F0Text>
  <F0Text variant="body-sm-default" color="positive">
    Success message
  </F0Text>
  <F0Text variant="body-sm-default" color="accent">
    Highlighted text
  </F0Text>
</>
```

### Text Decorations & Transforms

<!-- prettier-ignore -->
```tsx
<>
  <F0Text variant="body-sm-default" decoration="underline">
    Underlined text
  </F0Text>
  <F0Text variant="body-sm-default" decoration="line-through">
    Strikethrough text
  </F0Text>
  <F0Text variant="body-sm-default" transform="uppercase">
    uppercase text
  </F0Text>
  <F0Text variant="body-sm-default" transform="capitalize">
    capitalize words
  </F0Text>
</>
```

### Truncation

<!-- prettier-ignore -->
```tsx
<>
  <F0Text variant="body-sm-default" numberOfLines={1}>
    This long text will be truncated after one line with an ellipsis...
  </F0Text>

  <F0Text variant="body-md-default" numberOfLines={3}>
    This text can span up to three lines before being truncated with an ellipsis
    at the end. Perfect for card descriptions or preview text.
  </F0Text>
</>
```

### Spacing & Layout

F0Text doesn't accept `className` to prevent typography override. Use a View wrapper for spacing:

<!-- prettier-ignore -->
```tsx
<>
  {/* Spacing with View wrapper */}
  <View className="mt-4 mb-2">
    <F0Text variant="body-sm-default">Text with margin</F0Text>
  </View>

  {/* Layout with View wrapper */}
  <View className="flex-1">
    <F0Text variant="body-sm-default">Flexible text</F0Text>
  </View>

  {/* Icon + Text pattern */}
  <View className="flex-row items-center gap-2">
    <F0Icon icon={Check} size="sm" />
    <F0Text variant="body-sm-default">Success message</F0Text>
  </View>
</>
```

### Combined Props

<!-- prettier-ignore -->
```tsx
<F0Text
  variant="heading-md"
  color="accent"
  align="center"
  decoration="underline"
  transform="uppercase"
>
  Featured Title
</F0Text>
```

### Nested Text

<!-- prettier-ignore -->
```tsx
<F0Text variant="body-sm-default">
  This is regular text with{" "}
  <F0Text variant="body-sm-semibold" color="accent">
    bold accent nested text
  </F0Text>{" "}
  inside.
</F0Text>
```

### Real-world Card Example

<!-- prettier-ignore -->
```tsx
<View className="rounded-lg bg-f0-background-secondary p-4">
  <View className="mb-2">
    <F0Text variant="heading-sm">Card Title</F0Text>
  </View>
  <F0Text variant="body-sm-default" color="secondary" numberOfLines={2}>
    This is a description that will be truncated after two lines if it's too
    long to fit in the available space.
  </F0Text>
  <View className="mt-2">
    <F0Text variant="body-xs-medium" color="tertiary">
      Last updated 2 hours ago
    </F0Text>
  </View>
</View>
```

## Architecture

```
F0Text/                        # Parent folder for text primitives
├── F0Text/                    # Static text component
│   ├── F0Text.tsx             # Main component
│   ├── F0Text.md              # Documentation
│   ├── F0Text.types.ts        # TypeScript types
│   ├── F0Text.styles.ts       # Tailwind variants config
│   ├── index.ts               # Public exports
│   └── __tests__/
│       ├── F0Text.spec.tsx
│       └── __snapshots__/
├── AnimatedF0Text/            # Animated text component
│   ├── AnimatedF0Text.tsx
│   ├── AnimatedF0Text.md
│   ├── AnimatedF0Text.types.ts
│   ├── index.ts
│   └── __tests__/
│       ├── AnimatedF0Text.spec.tsx
│       └── __snapshots__/
└── index.ts                   # Barrel re-exporting both
```

### Font Family

F0Text uses the **Inter** font family through Tailwind/Uniwind `font-*` utility classes,
which map to `--font-*` CSS variables defined in the app's `@theme`:

| Tailwind Class  | CSS Variable      | Font Name      | Font Weight |
| --------------- | ----------------- | -------------- | ----------- |
| `font-normal`   | `--font-normal`   | Inter-Regular  | 400         |
| `font-medium`   | `--font-medium`   | Inter-Medium   | 500         |
| `font-semibold` | `--font-semibold` | Inter-SemiBold | 600         |
| `font-bold`     | `--font-bold`     | Inter-Bold     | 700         |

#### Host App Font Setup

The consuming app must embed the Inter `.ttf` files and wire them up for both
iOS and Android. See the [README "Add Inter Fonts"](../../../../../README.md#5️⃣-add-inter-fonts-host-app) section for the full
step-by-step guide. The short version:

1. **Name font files to match their PostScript name** (e.g. `Inter-Regular.ttf`
   for PostScript name `Inter-Regular`). iOS resolves fonts by PostScript name,
   Android by asset file name — matching them avoids platform-specific overrides.

2. **Register via `expo-font`** config plugin in `app.json`:

```json
[
  "expo-font",
  {
    "fonts": [
      "./assets/fonts/Inter/Inter-Regular.ttf",
      "./assets/fonts/Inter/Inter-Medium.ttf",
      "./assets/fonts/Inter/Inter-SemiBold.ttf",
      "./assets/fonts/Inter/Inter-Bold.ttf"
    ]
  }
]
```

3. **Define `@theme` variables** in `global.css`:

```css
@theme {
  --font-normal: "Inter-Regular";
  --font-medium: "Inter-Medium";
  --font-semibold: "Inter-SemiBold";
  --font-bold: "Inter-Bold";
}
```

The `@theme` values must match the file names (without `.ttf`). Uniwind maps
`font-normal`, `font-medium`, `font-semibold`, and `font-bold` utility classes
to these variables.

> **Rebuild required:** Font changes are picked up at native build time.
> Run `npx expo prebuild --clean` after adding or renaming font files.

## Accessibility

- Fully supports React Native `Text` accessibility props
- Supports `accessibilityRole`, `accessibilityLabel`, `accessibilityHint`, `accessibilityState`, and `accessible`
- Proper ellipsis and truncation with `numberOfLines`
- F0 color system helps ensure sufficient contrast; verify with platform accessibility tools

## Performance

- **React.memo**: Prevents re-renders when props unchanged
- **useMemo**: Memoizes className computation

### Best Practices

<!-- prettier-ignore -->
```tsx
// ✅ Good: Use appropriate variant
<F0Text variant="body-md-semibold">Bold text</F0Text>

// ❌ Bad: Don't try to override with className (not supported)
// <F0Text className="font-bold">Text</F0Text>
```

<!-- prettier-ignore -->
```tsx
// ✅ Good: Memoized handler
const handlePress = useCallback(() => {}, [])
<F0Text onPress={handlePress}>Click</F0Text>

// ❌ Bad: Inline function
<F0Text onPress={() => {}}>Click</F0Text>
```
