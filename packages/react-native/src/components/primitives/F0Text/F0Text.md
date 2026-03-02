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
<F0Text variant="heading-lg">Welcome</F0Text>
<F0Text variant="body-sm-default" color="secondary">Secondary text</F0Text>
<F0Text variant="body-md-medium" align="center">Centered text</F0Text>
<F0Text variant="body-sm-default" numberOfLines={2}>Truncated text...</F0Text>
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

**Note**: `className` and `style` props are **not available**. Use semantic props for typography. For spacing/layout, wrap F0Text in a View. The `style` prop is filtered at runtime to prevent override via spread.

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
```

### Colors

```tsx
<F0Text variant="body-sm-default" color="default">Primary text</F0Text>
<F0Text variant="body-sm-default" color="secondary">Secondary information</F0Text>
<F0Text variant="body-sm-default" color="critical">Error message</F0Text>
<F0Text variant="body-sm-default" color="positive">Success message</F0Text>
<F0Text variant="body-sm-default" color="accent">Highlighted text</F0Text>
```

### Text Decorations & Transforms

```tsx
<F0Text variant="body-sm-default" decoration="underline">Underlined text</F0Text>
<F0Text variant="body-sm-default" decoration="line-through">Strikethrough text</F0Text>
<F0Text variant="body-sm-default" transform="uppercase">uppercase text</F0Text>
<F0Text variant="body-sm-default" transform="capitalize">capitalize words</F0Text>
```

### Truncation

```tsx
<F0Text variant="body-sm-default" numberOfLines={1}>
  This long text will be truncated after one line with an ellipsis...
</F0Text>

<F0Text variant="body-md-default" numberOfLines={3}>
  This text can span up to three lines before being truncated
  with an ellipsis at the end. Perfect for card descriptions
  or preview text.
</F0Text>
```

### Spacing & Layout

F0Text doesn't accept `className` to prevent typography override. Use a View wrapper for spacing:

```tsx
{
  /* Spacing with View wrapper */
}
;<View className="mt-4 mb-2">
  <F0Text variant="body-sm-default">Text with margin</F0Text>
</View>

{
  /* Layout with View wrapper */
}
;<View className="flex-1">
  <F0Text variant="body-sm-default">Flexible text</F0Text>
</View>

{
  /* Icon + Text pattern */
}
;<View className="flex-row items-center gap-2">
  <F0Icon icon={Check} size="sm" />
  <F0Text variant="body-sm-default">Success message</F0Text>
</View>
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

  </F0Text>
</View>
```

## Architecture

```
Text/
├── F0Text.tsx          # Main component
├── F0Text.md           # Documentation
├── Text.types.ts       # TypeScript types
├── Text.styles.ts      # Tailwind variants config
└── __tests__/
    ├── index.spec.tsx
    └── __snapshots__/
```

### Design Tokens

Typography tokens are defined in `src/styles/theme.css`:

```css
@theme inline static {
  --p-text-heading-lg-font-size: 1.5rem; /* 24px */
  --p-text-heading-lg-font-line-height: 2rem; /* 32px */
  --p-text-heading-lg-font-letter-spacing: -0.2px;
  --p-text-heading-lg-font-weight: 600;
  --p-text-heading-lg-font-family: Inter;
  /* ... more tokens */
}
```

Font weight classes in `global.css`:

```css
@theme {
  --font-normal: "Inter-Regular";
  --font-medium: "Inter-Medium";
  --font-semibold: "Inter-SemiBold";
  --font-bold: "Inter-Bold";
}
```

### Font Family

F0Text uses **Inter** font family through Tailwind/Uniwind font weight classes:

| Tailwind Class  | React Native Font Family | Font Weight |
| --------------- | ------------------------ | ----------- |
| `font-normal`   | Inter-Regular            | 400         |
| `font-medium`   | Inter-Medium             | 500         |
| `font-semibold` | Inter-SemiBold           | 600         |
| `font-bold`     | Inter-Bold               | 700         |

These mappings are defined in `global.css`:

```css
@theme {
  --font-normal: "Inter-Regular";
  --font-medium: "Inter-Medium";
  --font-semibold: "Inter-SemiBold";
  --font-bold: "Inter-Bold";
}
```

**Note**: In React Native, unlike web, you specify the complete font family name that includes the weight (e.g., `Inter-SemiBold` instead of `Inter` with `font-weight: 600`).

## Accessibility

- Semantic HTML roles on web
- Proper ellipsis with `numberOfLines`
- F0 color system ensures proper contrast
- Forwards all React Native Text accessibility props

## Performance

F0Text is optimized based on [this article about React Native Text rendering](https://javascript.plainenglish.io/optimizing-text-component-rendering-in-react-native-b9d3565659d9).

### Optimizations

- **React.memo**: Prevents re-renders when props unchanged
- **useMemo**: Memoizes className computation

### Benchmark (15,000 text items)

- Standard Text: **4.33s**
- F0Text (memo + useMemo): **~2.6-3s** (~25% faster) ✅
- NativeText direct: **~2.5s** (~40% faster, loses features)

### Best Practices

```tsx
// ✅ Good: Use appropriate variant
<F0Text variant="body-md-semibold">Bold text</F0Text>

// ❌ Bad: Don't try to override with className (not supported)
// <F0Text className="font-bold">Text</F0Text>

// ✅ Good: Memoized handler
const handlePress = useCallback(() => {}, []);
<F0Text onPress={handlePress}>Click</F0Text>

// ❌ Bad: Inline function
<F0Text onPress={() => {}}>Click</F0Text>
```

## Testing

```bash
pnpm test src/components/primitives/Text/__tests__/index.spec.tsx
```

Tests include:

- Snapshot tests for all variants and colors
- Behavior tests for props, ref forwarding

## Migration from Aurora

| Aurora                     | F0Text                      |
| -------------------------- | --------------------------- |
| `heading={true} level={1}` | `variant="heading-lg"`      |
| `heading={true} level={2}` | `variant="heading-md"`      |
| `heading={true} level={3}` | `variant="heading-sm"`      |
| Default                    | `variant="body-sm-default"` |
| `color={COLOR.PRIMARY}`    | `color="default"`           |
| `color={COLOR.SECONDARY}`  | `color="secondary"`         |
| `align={ALIGN.CENTER}`     | `align="center"`            |
| `lineThrough={true}`       | `decoration="line-through"` |
| `underlined={true}`        | `decoration="underline"`    |
