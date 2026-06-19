---
name: typography
description: Standardized text styling and font scale. Use to maintain consistent font sizes, weights, and hierarchy across the application. Do not use hardcoded font sizes.
---

## Overview
The typography foundation provides a standardized scale of five predefined font sizes. The system is built on a base font size of 14px (assuming default browser settings). Use this component to ensure text readability and visual consistency.

## Props/API
- **variant** (optional): `'size-1' | 'size-2' | 'size-3' | 'size-4' | 'size-5'` - The predefined font size level to apply.
- **weight** (optional): `'regular' | 'medium' | 'bold'` - The font weight of the text.
- **component** (optional): `ElementType` - The HTML element to render (e.g., 'p', 'span', 'h1'). Defaults to 'p'.
- **color** (optional): `string` - The color token or CSS color value to apply to the text.
- **children** (required): `ReactNode` - The text content or elements to be styled.

## Usage Examples

### Basic Text
```tsx
import { Typography } from './Typography';

const Example = () => (
  <Typography variant="size-1">
    This is the base text at 14px.
  </Typography>
);
```

### Heading with Weight
```tsx
import { Typography } from './Typography';

const Heading = () => (
  <Typography variant="size-5" weight="bold" component="h1">
    Main Page Title
  </Typography>
);
```

## Variants
The system supports five size levels:
- **Size 1**: The base application size (14px).
- **Size 2-5**: Incremental sizes for creating visual hierarchy (headings, subheadings, etc.).

## Best Practices
- **Hierarchy**: Use larger variants (`size-4`, `size-5`) for headings and smaller variants (`size-1`) for body text.
- **Consistency**: Always use the `Typography` component instead of raw CSS `font-size` to ensure the app remains themed correctly.
- **Accessibility**: Ensure sufficient color contrast between text and background.

## Related Skills
- For color tokens used with text, see the skill in ./references/colors.md
- For layout and spacing between text blocks, see the skill in ./references/layout.md