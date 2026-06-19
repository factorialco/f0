## F0MarkdownRenderers

A set of customized components for rendering Markdown content within AI responses. It ensures that headings, lists, tables, and code blocks match the SDS design system.

**Props:**
- `content`: `string` (Required) - The raw markdown string to render.
- `className`: `string` (Optional) - Custom styles for the container.

```tsx
import { F0MarkdownRenderers } from '@sds/ai';

const AiResponse = ({ text }) => (
  <div className="message-bubble">
    <F0MarkdownRenderers content={text} />
  </div>
);

// Example content:
// # Heading
// - Item 1
// - Item 2
// | Table | Header |
// |-------|--------|
// | Cell  | Data   |
```

**Edge Cases & Gotchas:**
- Large tables may require horizontal scrolling; ensure the parent container handles overflow.
- Code blocks support syntax highlighting automatically.