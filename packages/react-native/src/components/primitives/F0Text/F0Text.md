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

```tsx
<>
  {/* Headings */}
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
F0Text/
├── F0Text.tsx          # Main component
├── F0Text.md           # Documentation
├── F0Text.types.ts     # TypeScript types
├── F0Text.styles.ts    # Tailwind variants config
├── index.ts            # Public exports
└── __tests__/
    ├── index.spec.tsx
    └── __snapshots__/
```

### Font Family

F0Text uses **Inter** font family through Tailwind/Uniwind font weight classes:

| Tailwind Class  | React Native Font Family | Font Weight |
| --------------- | ------------------------ | ----------- |
| `font-normal`   | Inter-Regular            | 400         |
| `font-medium`   | Inter-Medium             | 500         |
| `font-semibold` | Inter-SemiBold           | 600         |
| `font-bold`     | Inter-Bold               | 700         |

## Accessibility

- Fully supports React Native `Text` accessibility props
- Supports `accessibilityRole`, `accessibilityLabel`, `accessibilityHint`, `accessibilityState`, and `accessible`
- Proper ellipsis and truncation with `numberOfLines`
- F0 color system helps ensure sufficient contrast; verify with platform accessibility tools

## Performance

- **React.memo**: Prevents re-renders when props unchanged
- **useMemo**: Memoizes className computation

### Best Practices

```tsx
// ✅ Good: Use appropriate variant
<F0Text variant="body-md-semibold">Bold text</F0Text>

// ❌ Bad: Don't try to override with className (not supported)
// <F0Text className="font-bold">Text</F0Text>
```

```tsx
// ✅ Good: Memoized handler
const handlePress = useCallback(() => {}, [])
;<F0Text onPress={handlePress}>Click</F0Text>

// ❌ Bad: Inline function
;<F0Text onPress={() => {}}>Click</F0Text>
```
