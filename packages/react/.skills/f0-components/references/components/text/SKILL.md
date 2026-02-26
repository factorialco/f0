---
name: text
description: A versatile typography component for rendering text with support for design system variants, markdown parsing, and ellipsis truncation. Use this for all UI text to ensure consistent styling, accessibility, and to handle formatted content safely.
---

## Overview
The `Text` component is the primary building block for typography. It abstracts CSS styling into predefined variants and provides built-in support for rendering Markdown content. It also handles common text behaviors like overflow truncation (ellipsis).

## Props
- **as** (optional): `string` - The HTML tag to render the text as (e.g., 'p', 'span', 'h1', 'div').
- **content** (optional): `string` - The text or markdown content to be displayed.
- **ellipsis** (optional): `boolean` (default: `false`) - When true, truncates text with an ellipsis if it exceeds the width of its container.
- **markdown** (optional): `boolean` (default: `true`) - When true, parses the content string as Markdown (supporting bold, italic, etc.).
- **variant** (optional): `string` (default: `'body'`) - The typography style variant to apply, such as 'body', 'heading', or 'caption'.

## Usage Examples

### Basic Text
```tsx
import { Text } from './Text';

const Example = () => (
  <Text variant="body" content="This is a standard paragraph text." />
);
```

### Markdown Rendering
By default, the component parses Markdown. This is useful for dynamic content or simple formatting without extra tags.
```tsx
<Text 
  content="This is **bold** and this is *italic*." 
  markdown={true} 
/>
```

### Text Truncation
Use the `ellipsis` prop for long strings in constrained layouts. Ensure the parent container has a defined width.
```tsx
<div style={{ width: '200px' }}>
  <Text 
    ellipsis 
    content="This is a very long text that will be truncated with ellipsis when it exceeds the container width." 
  />
</div>
```

### Custom HTML Tag
Change the underlying HTML element for semantic correctness or SEO.
```tsx
<Text as="h2" variant="heading" content="Section Title" />
```

## Variants
The component supports multiple visual styles via the `variant` prop. Common variants include:
- `body`: Standard paragraph text (default).
- `description`: Secondary or helper text.
- `heading`: Large, bold text for titles.
- `caption`: Small text for labels or metadata.

## Best Practices
- **Accessibility**: Always use the `as` prop to ensure the rendered HTML is semantically correct (e.g., use `as="p"` for paragraphs, `as="h1-h6"` for headings).
- **Markdown**: Keep `markdown={true}` for user-generated content or strings requiring simple formatting. Set to `false` if the content contains characters that might be accidentally parsed as markdown syntax.
- **Ellipsis**: Only use `ellipsis` when the layout cannot expand vertically. Ensure the full text is accessible via a tooltip or expansion if the information is critical.

## Related Skills
For layout containers to wrap text, see the skill in ./references/box.md.
For handling data-driven text collections, see the skill in ./references/use-data-collection.md.