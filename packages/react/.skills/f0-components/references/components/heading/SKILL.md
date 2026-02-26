---
name: heading
description: Use for rendering semantic titles and section headers with support for various levels, sizes, and text truncation. Use when you need consistent typography for page or section titles.
---

# Heading

The `Heading` component is used to render titles and headers throughout the application. it provides a consistent typographic style while allowing for semantic flexibility through the `as` prop.

## Props

- **as** (optional): `string` - The HTML tag to render the heading as (e.g., 'h1', 'h2', 'h3', 'div').
- **content** (optional): `string` - The text content to be displayed within the heading.
- **ellipsis** (optional): `boolean` - If true, truncates the text with an ellipsis when it exceeds the container width. Default: `false`.
- **variant** (optional): `string` - The visual style variant of the heading (e.g., 'heading', 'heading-large'). Default: `heading`.

## Usage Examples

### Basic Heading
```tsx
import { Heading } from './Heading';

const MyComponent = () => (
  <Heading 
    as="h2" 
    content="Section Title" 
  />
);
```

### Large Heading with Ellipsis
```tsx
<Heading 
  as="h1" 
  variant="heading-large" 
  ellipsis={true} 
  content="This is a very long heading that will be truncated if it exceeds the width of its container" 
/>
```

### Custom Semantic Tag
```tsx
<Heading 
  as="span" 
  variant="heading" 
  content="Visual Heading, Semantic Span" 
/>
```

## Variants

### Heading Large
Use the `heading-large` variant for primary page titles or high-emphasis headers.

### Heading Ellipsis
When `ellipsis` is enabled, the component applies styles to prevent text wrapping and adds a visual indicator (...) for overflow content. This is particularly useful in constrained layouts like sidebars or cards.

### Alignment
While the component does not have a dedicated alignment prop, alignment is typically handled via the parent container or by applying utility classes to the rendered HTML element.

## Best Practices

- **Accessibility**: Always use the `as` prop to ensure the heading level matches the document structure (e.g., don't use an `h1` for a sub-section).
- **Hierarchy**: Maintain a logical heading hierarchy (h1 > h2 > h3) to assist screen reader users and improve SEO.
- **Content**: Use the `content` prop for simple text. For complex children, verify if the component supports nested elements or if it is restricted to string input.

## Related Skills

- For general text and paragraph styling, see the skill in ./references/text.md
- For layout containers that house headings, see the skill in ./references/box.md