## DropdownSingleQuestion

`DropdownSingleQuestion` is a selection component used when a user must choose exactly one option from a list, typically used when the number of options is large (5+).

**Props:**
- `label`: `string` (Required) - The question text.
- `options`: `{ label: string, value: any }[]` (Required) - The list of selectable items.
- `value`: `any` (Optional) - The currently selected value.
- `onChange`: `(value: any) => void` (Required) - Callback when an option is chosen.
- `placeholder`: `string` (Optional) - Text displayed when no option is selected.
- `disabled`: `boolean` (Optional) - Prevents user interaction.

```tsx
import { DropdownSingleQuestion } from '@sds/co-creation-form';

<DropdownSingleQuestion 
  label="Select your department"
  options={[
    { label: 'Engineering', value: 'eng' },
    { label: 'Design', value: 'des' },
    { label: 'Marketing', value: 'mkt' }
  ]}
  onChange={(val) => setDept(val)}
/>
```

**Gotchas:**
- If you have fewer than 5 options, consider using `SelectQuestion` with a radio-style layout for better visibility.