## NotesTextEditor

The `NotesTextEditor` is a specialized rich text input optimized for structured note-taking. It supports advanced formatting features like checklists, tables, and blockquotes out of the box.

Use this component for internal CRM notes, project documentation, or any context where users need to organize information using more than just basic bold/italic formatting.

**Props:**
- `value`: `string` (Required) - The HTML or JSON content string.
- `onChange`: `(value: string) => void` (Required) - Callback triggered on content change.
- `placeholder`: `string` (Optional) - Text displayed when the editor is empty.
- `isLoading`: `boolean` (Optional) - When true, displays a skeleton state.
- `features`: `string[]` (Optional) - List of enabled features (e.g., 'table', 'checklist', 'math').

**Usage Example:**
```tsx
import { NotesTextEditor } from './rich-text/NotesTextEditor';

export const NoteContainer = () => {
  const [content, setContent] = useState('');

  return (
    <NotesTextEditor 
      value={content}
      onChange={setContent}
      placeholder="Start typing your meeting notes..."
      isLoading={false}
    />
  );
};
```

**Key Highlights:**
- **Checklists:** Ideal for action items and task tracking within notes.
- **Tables:** Supports structured data entry within the flow of text.
- **Inline Formatting:** Supports standard bold, italic, strikethrough, and inline code.

**Edge Cases & Gotchas:**
- **Data Persistence:** Ensure the `onChange` handler is debounced if saving to a server to prevent excessive API calls during rapid typing.
- **Skeleton State:** The skeleton state is intended for initial loading; do not use it for "read-only" modes. For read-only display, use `RichTextDisplay`.

For rendering the output of this editor, see the skill in ./rich-text-display/SKILL.md.