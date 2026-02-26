## Text

The Text component is the standard single-line input for general data entry. It supports multiple HTML types (text, password, file) and provides comprehensive feedback states including errors, warnings, and informational hints.

**Props:**
- `type`: `'text' | 'password' | 'file'` (Optional) - The HTML input type. Default: 'text'.
- `value`: `string` (Required) - The current input value.
- `onChange`: `(value: string) => void` (Required) - Callback for value changes.
- `label`: `string` (Optional) - Descriptive label for the input.
- `hideLabel`: `boolean` (Optional) - Hides the label visually.
- `labelIcon`: `ReactNode` (Optional) - Icon placed next to the label.
- `icon`: `ReactNode` (Optional) - Decorative icon inside the input.
- `error`: `string | boolean` (Optional) - Red error state/message.
- `warning`: `string | boolean` (Optional) - Amber warning state/message.
- `info`: `string | boolean` (Optional) - Blue info state/message.
- `hint`: `string` (Optional) - Helper text displayed below the input.
- `maxLength`: `number` (Optional) - Character limit.
- `clearable`: `boolean` (Optional) - Shows a clear button.
- `size`: `'sm' | 'md'` (Optional) - Controls the vertical padding and font size. Default: 'md'.
- `disabled`: `boolean` (Optional) - Prevents interaction.

```tsx
import { Text } from '@components/input';

export const LoginForm = () => {
  return (
    <>
      <Text
        type="text"
        label="Username"
        placeholder="Enter username"
        size="md"
        clearable
      />
      <Text
        type="password"
        label="Password"
        error="Password is too short"
        hint="Must be at least 8 characters"
      />
    </>
  );
};
```

**Edge Cases & Gotchas:**
- **File Type:** When `type="file"`, the `value` and `onChange` behavior may differ from standard text strings; ensure you handle `FileList` objects if the component passes them through.
- **Validation Priority:** If multiple states (error, warning, info) are provided, `error` typically takes visual precedence.
- For multi-line text, see the skill in ./textarea/SKILL.md.