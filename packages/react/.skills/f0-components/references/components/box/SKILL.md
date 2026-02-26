---
name: box
description: Foundational layout component for spacing, alignment, and styling. Use to build containers, flex/grid layouts, and apply consistent design tokens for borders, padding, and margins.
---

# Box

The `Box` component is the primary layout primitive. It provides a declarative way to apply design tokens for spacing, sizing, positioning, and visual styles without writing custom CSS.

## Props

### Layout & Dimensions
- `display`: `enum` (e.g., `block`, `flex`, `grid`, `inline-block`, `none`)
- `width` / `height`: `enum` (Sizing tokens)
- `minWidth` / `maxWidth` / `minHeight` / `maxHeight`: `enum`
- `overflow` / `overflowX` / `overflowY`: `enum` (`auto`, `hidden`, `scroll`, `visible`)

### Flexbox & Grid
- `flexDirection`: `enum` (`row`, `column`, etc.)
- `alignItems`: `enum` (`stretch`, `center`, `flex-start`, etc.)
- `justifyContent`: `enum` (`center`, `space-between`, etc.)
- `flexWrap`: `enum`
- `grow` / `shrink`: `boolean`
- `columns` / `rows`: `enum` (Grid template configuration)
- `gap`: `enum` (Spacing between items)
- `colSpan` / `rowSpan` / `colStart`: `enum`

### Spacing
- `margin` / `marginX` / `marginY` / `marginTop` / etc.: `enum` (Spacing tokens)
- `padding` / `paddingX` / `paddingY` / `paddingTop` / etc.: `enum` (Spacing tokens)

### Styling
- `background`: `enum` (Color tokens)
- `border` / `borderTop` / etc.: `enum` (Width tokens)
- `borderColor`: `enum` (Color tokens)
- `borderStyle`: `enum` (`solid`, `dashed`, `dotted`)
- `borderRadius`: `enum` (Radius tokens)
- `divider`: `enum` (Adds borders between children)
- `dividerColor`: `enum`

### Responsive Overrides
The `sm`, `md`, `lg`, and `xl` props accept a `ResponsiveStyleProps` object to override any of the above styles at specific breakpoints:
- `sm`: ≥ 640px
- `md`: ≥ 768px
- `lg`: ≥ 1024px
- `xl`: ≥ 1280px

## Usage Examples

### Basic Container
Use for simple padded sections with background colors.
```tsx
<Box padding="lg" background="secondary" borderRadius="md">
  Content goes here
</Box>
```

### Flex Layout
Use for aligning items in a row or column.
```tsx
<Box display="flex" alignItems="center" justifyContent="space-between" gap="md">
  <Box>Left Item</Box>
  <Box>Right Item</Box>
</Box>
```

### Responsive Grid
Use responsive props to change layout behavior across screen sizes.
```tsx
<Box 
  display="grid" 
  columns="1" 
  gap="md"
  md={{ columns: "3" }}
>
  <Box>Column 1</Box>
  <Box>Column 2</Box>
  <Box>Column 3</Box>
</Box>
```

### List with Dividers
Use the `divider` prop to automatically add spacing and lines between child elements.
```tsx
<Box display="flex" flexDirection="column" divider="thin" dividerColor="muted">
  <Box paddingY="sm">Item 1</Box>
  <Box paddingY="sm">Item 2</Box>
  <Box paddingY="sm">Item 3</Box>
</Box>
```

## Best Practices

- **Prefer Box over `div`**: Use `Box` to ensure layout and spacing remain consistent with the design system tokens.
- **Responsive First**: Start with mobile styles as the base props, then use `md` or `lg` for desktop overrides.
- **Avoid Nesting Overload**: While `Box` is versatile, if a layout becomes too complex, consider if a more specialized component (like a Grid or Stack) exists.
- **Token Usage**: Always use the provided enum tokens for colors, spacing, and sizes rather than hardcoded strings or numbers.

## Related Skills
- For specialized layout patterns, see the skill in `./layout-patterns/SKILL.md`
- For typography components used inside Box, see the skill in `./text/SKILL.md`