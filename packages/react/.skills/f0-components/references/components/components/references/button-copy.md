## ButtonCopy

ButtonCopy is a specialized button designed to copy text to the user's clipboard. It includes built-in success states and animations to provide immediate visual feedback after a successful copy operation.

**Props:**
- `value`: `string` (Required) - The text string to be copied to the clipboard.
- `label`: `string` - The initial text displayed on the button.
- `successLabel`: `string` - The text displayed briefly after a successful copy.
- `variant`: `'primary' | 'secondary' | 'ghost'` - Visual style variant.
- `size`: `'sm' | 'md' | 'lg'` - Size of the button.
- `onCopy`: `() => void` - Callback function triggered after the text is copied.

```tsx
import { ButtonCopy } from './button-copy';

export const CopyLinkExample = () => (
  <ButtonCopy 
    value="https://app.example.com/share/123"
    label="Copy Share Link"
    successLabel="Link Copied!"
    variant="secondary"
  />
);
```

**Gotchas:**
- The component handles the clipboard API internally; do not wrap it in additional copy logic unless custom behavior is needed.
- Ensure the `value` prop is a valid string; empty strings will still trigger the "success" state but copy nothing.