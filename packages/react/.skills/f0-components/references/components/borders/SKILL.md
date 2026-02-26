---
name: borders
description: Standardized border styles and radius scale for UI elements. Use to ensure consistent 1px solid borders and uniform corner rounding across all components and containers.
---

## Overview
All borders in the design system follow a strict 1px solid specification. The primary variable in border styling is the border-radius, which must be selected from the predefined scale to maintain visual harmony.

## Border Specifications
- **Width**: Always 1px.
- **Style**: Always solid.
- **Color**: Refer to the color system for appropriate border tokens (e.g., subtle, default, strong).

## Border Radius Scale
Apply the following scale for corner rounding:
- **none**: `0px` - Used for sharp-edged containers or tiled elements.
- **sm**: `2px` - Used for small elements like checkboxes or tags.
- **md**: `4px` - The default radius for buttons, inputs, and small cards.
- **lg**: `8px` - Used for larger containers, modals, and featured cards.
- **full**: `9999px` - Used for pills, badges, and circular avatars.

## Usage Examples

### CSS / Styled Components
```css
.container {
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
}
```

### Tailwind CSS
```html
<div class="border border-solid border-gray-300 rounded-md">
  Content
</div>
```

## Best Practices
- **Consistency**: Do not use arbitrary pixel values for border-radius; always map to the scale above.
- **Nesting**: When nesting rounded containers, ensure the inner border-radius is slightly smaller than the outer radius to maintain optical alignment.
- **Simplicity**: Avoid using multiple border widths; stick to the 1px standard unless a specific high-contrast "focus" state is required.

## Related Skills
- For color tokens used in borders, see the skill in ./references/colors.md
- For layout and container spacing, see the skill in ./references/spacing.md
- For button implementations using these borders, see the skill in ./references/button.md