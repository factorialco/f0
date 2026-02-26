## F0AiChatTextArea

A specialized textarea designed for AI chat inputs. It supports auto-growing height, submission on Enter, and multiple placeholder cycling to guide user prompts.

**Props:**
- `value`: `string` (Required) - The current input value.
- `onChange`: `(val: string) => void` (Required) - Callback for value changes.
- `onSubmit`: `() => void` (Required) - Callback for submission (Enter or button click).
- `placeholders`: `string[]` (Optional) - An array of strings to cycle through as placeholders.
- `isSubmitting`: `boolean` (Optional) - Disables the input and shows a loading state.
- `submitLabel`: `string` (Optional) - Custom text for the submit button.

```tsx
import { F0AiChatTextArea } from '@sds/ai';

const InputSection = () => {
  const [text, setText] = useState('');
  
  return (
    <F0AiChatTextArea
      value={text}
      onChange={setText}
      onSubmit={() => console.log('Submitted:', text)}
      placeholders={[
        "Ask about time...",
        "Ask about people...",
        "Ask about company info..."
      ]}
    />
  );
};
```

**Edge Cases & Gotchas:**
- Use `Shift + Enter` for new lines; a plain `Enter` triggers `onSubmit`.
- If `isSubmitting` is true, the component prevents further input to avoid duplicate requests.