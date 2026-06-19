---
name: spacing
description: Standardized spacing system based on 4px units (0-96 scale). Use to maintain visual consistency, alignment, and scalability across margins, padding, and component dimensions.
---

## Overview
The spacing system is built on a 4px base unit. Values are defined on a numerical scale from 0 to 96, where each unit represents 4px (e.g., `4` = 16px, `12` = 48px).

## Spacing Scales
The system utilizes two distinct scales to ensure the UI adapts correctly to user font settings and browser scaling.

### Relative Scale (rem/em)
Used for block-level dimensions to ensure containers scale with text. Use this scale for:
- **width** / **height**
- **minWidth** / **maxWidth**
- **minHeight** / **maxHeight**
- **size**
- **flexBasis**
- **textIndent**

### Pixel Scale (px)
Used for internal spacing and positioning where fixed increments are preferred for alignment. Use this scale for:
- **padding**
- **margin**
- **gap** / **space**
- **translate**
- **scrollMargin**
- **scrollPadding**

## Implementation Guidelines

### Calculation Formula
`Space Value * 4px = Resulting Dimension`

### Common Values Reference
- **1**: 4px
- **2**: 8px
- **4**: 16px
- **8**: 32px
- **12**: 48px
- **16**: 64px
- **24**: 96px

## Usage Examples

### Applying Layout Dimensions (Relative)
```tsx
// Uses relative units (rem) for container sizing
<Box width={40} height={20}>
  Content
</Box>
```

### Applying Spacing (Pixels)
```tsx
// Uses pixel units for padding and gaps
<Stack gap={4} padding={6}>
  <Item />
  <Item />
</Stack>
```

## Best Practices
- **Stick to the scale**: Avoid hardcoded pixel values outside the 4px grid.
- **Consistency**: Use the same spacing values for similar elements to create a predictable rhythm.
- **Scaling**: Always use the Relative Scale for properties that define the "footprint" of a component so it grows with the user's font size.
- **Alignment**: Use the Pixel Scale for margins and padding to ensure precise alignment with other UI elements.

## Related Skills
- For layout structures using these spacing values, see the skill in ./references/layout.md
- For typography scaling and vertical rhythm, see the skill in ./references/typography.md