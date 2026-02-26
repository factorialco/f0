---
name: ellipsis
description: Truncates text with an ellipsis after a specific number of lines and provides a tooltip on overflow. Use for long strings in constrained layouts like cards, tables, or headers to maintain UI consistency.
---

# Ellipsis

The `Ellipsis` component manages text overflow by truncating content and providing an automatic tooltip when the text is clipped. It supports both single-line and multi-line truncation and can optionally parse markdown.

## Props

- **children** (required): `string` - The text content to display. Only strings are supported.
- **className** (optional): `string` - CSS class for the wrapper element.
- **disabled** (optional): `boolean` - If true, disables truncation and tooltip logic. Default: `false`.
- **lines** (optional): `number` - Maximum number of lines to show before truncating. Default: `1`.
- **markdown** (optional): `boolean` - Enables markdown parsing for the content. Default: `false`.
- **noTooltip** (optional): `boolean` - If true, prevents the tooltip from appearing on overflow. Default: `false`.
- **tag** (optional): `string` - The HTML tag to use for the wrapper element. Default: `"span"`.

## Usage Examples

### Single Line Truncation
Default behavior truncates text to a single line when it exceeds the container width.

```tsx
import { Ellipsis } from '@components/ellipsis';

const MyComponent = () => (
  <div style={{ width: '200px' }}>
    <Ellipsis>
      This is a very long text string that will be truncated with an ellipsis.
    </Ellipsis>
  </div>
);
```

### Multi-line Truncation
Use the `lines` prop to allow text to wrap before truncating.

```tsx
<Ellipsis lines={3}>
  This text will wrap up to three lines. If the content is still longer than 
  the available space after three lines, it will be truncated with an 
  ellipsis and a tooltip will be available on hover.
</Ellipsis>
```

### Markdown Support
Enable markdown parsing for the string content before truncation.

```tsx
<Ellipsis markdown>
  This is **bold** text and this is _italic_ text being truncated.
</Ellipsis>
```

## Best Practices

- **Performance**: This component attaches a `ResizeObserver` to the element to detect overflow. Avoid rendering more than 1,000 instances on a single page (e.g., in very large tables) to prevent performance degradation.
- **Content Restriction**: Only pass strings as children. Passing React elements or complex nodes is not supported and will break the truncation logic.
- **Container Width**: Ensure the parent container has a defined width or `max-width`. If the container is allowed to grow infinitely, the ellipsis will never trigger.
- **Disabling Tooltips**: Use `noTooltip` if the context already provides enough information or if tooltips would obstruct other critical UI elements.

## Related Skills

- For the underlying tooltip behavior, see the skill in ./references/tooltip.md
- For markdown rendering patterns, see the skill in ./references/markdown.md