## TextArea

The TextArea component allows for multi-line text input. Use this for long-form content such as descriptions, comments, or messages where a single line is insufficient.

**Props:**
- `value`: `string` (Required) - The current text content.
- `onChange`: `(value: string) => void` (Required) - Callback for content changes.
- `label`: `string` (Optional) - Text label for the area.
- `hideLabel`: `boolean` (Optional) - Hides the label visually.
- `labelIcon`: `ReactNode` (Optional) - Icon next to the label.
- `icon`: `ReactNode` (Optional) - Icon inside the textarea container.
- `error`: `string | boolean` (Optional) - Error state/message.
- `warning`: `string | boolean` (Optional) - Warning state/message.
- `info`: `string | boolean` (Optional) - Info state/message.
- `hint`: `string` (Optional) - Helper text below the component.
- `maxLength`: `number` (Optional) - Maximum character count.
- `clearable`: `boolean` (Optional) - Shows a button to clear all text.
- `disabled`: `boolean` (Optional) - Disables the component.
- `rows`: `number` (Optional) - Initial height in rows of text.

```tsx
import { TextArea } from '@components/input';

export const FeedbackForm = () => {
  const [comment, setComment] = useState("");

  return (
    <TextArea
      label="Comments"
      value={comment}
      onChange={setComment}
      placeholder="Tell us what you think..."
      maxLength={500}
      rows={5}
      hint="Maximum 500 characters"
      clearable
    />
  );
};
```

**Edge Cases & Gotchas:**
- **Resizing:** Check if the component supports manual resizing by the user (CSS `resize` property); this may impact your layout.
- **Max Length:** Unlike single-line inputs, users often paste large blocks of text into TextAreas. Ensure the `maxLength` validation provides clear feedback if the text is truncated.
- For single-line inputs, see the skill in ./text/SKILL.md.