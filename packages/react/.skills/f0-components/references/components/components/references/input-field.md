## InputField

InputField is a wrapper component that enhances native `<input>` or `<textarea>` elements. It manages labels, hints, error states, and character counters while maintaining a consistent design.

**Props:**
- `label`: `string` - The text label for the input.
- `error`: `string | boolean` - Error message or error state indicator.
- `hint`: `string` - Helper text displayed below the input.
- `charCounter`: `boolean | { limit: number }` - Displays a character count.
- `prepend`: `ReactNode` - Icon or element inside the input at the start.
- `append`: `ReactNode` - Icon or element inside the input at the end.
- `disabled`: `boolean` - Disables the wrapped input.
- `readOnly`: `boolean` - Sets the wrapped input to read-only.

```tsx
import { InputField } from './input-field';

export const UsernameInput = () => (
  <InputField 
    label="Username" 
    hint="Must be unique"
    charCounter={{ limit: 20 }}
    error={false}
  >
    <input type="text" placeholder="Enter username..." />
  </InputField>
);
```

**Gotchas:**
- The component uses `React.cloneElement` to pass props to its child. Ensure the child is a single valid HTML input/textarea or a component that forwards refs and accepts standard input props.
- Do not pass `value` or `onChange` to `InputField`; pass them directly to the child `<input>`.