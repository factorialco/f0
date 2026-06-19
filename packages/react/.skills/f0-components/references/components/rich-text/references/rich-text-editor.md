## RichTextEditor

The `RichTextEditor` is a comprehensive WYSIWYG editor for creating complex text content. It provides a full toolbar for formatting and supports various states including blank and skeleton loaders.

Use this as the primary input for long-form content, such as email bodies, article drafting, or detailed descriptions.

**Props:**
- `value`: `string` (Required) - The current content of the editor.
- `onChange`: `(value: string) => void` (Required) - Callback for content updates.
- `variant`: `'default' | 'blank' | 'skeleton'` (Optional) - The visual state of the editor.
- `placeholder`: `string` (Optional) - Hint text for empty state.
- `minHeight`: `string | number` (Optional) - Minimum height of the editing area.

**Usage Example:**
```tsx
import { RichTextEditor } from './rich-text/RichTextEditor';

export const EditorPage = () => {
  const [val, setVal] = useState('<p>Initial content</p>');

  return (
    <RichTextEditor 
      value={val}
      onChange={setVal}
      variant="default"
      placeholder="Write something amazing..."
    />
  );
};
```

**Variants:**
- **Default:** Full editor with toolbar and borders.
- **Blank:** Minimalist version with fewer visual distractions, often used for inline editing.
- **Skeleton:** A non-interactive placeholder used during initial data fetching.

**Edge Cases & Gotchas:**
- **Initial Value:** If setting the value from an async source, ensure the editor handles the transition from empty/skeleton to populated state without losing focus.
- **Paste Behavior:** The editor typically filters styles on paste to maintain consistency with the application's design system.

For displaying the content created here, see the skill in ./rich-text-display/SKILL.md.