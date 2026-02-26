## SelectQuestion

`SelectQuestion` is used for selecting one or more options from a visible list. It can render as radio buttons (single select) or checkboxes (multi-select).

**Props:**
- `label`: `string` (Required) - The question text.
- `options`: `{ label: string, value: any }[]` (Required) - The list of options.
- `multiple`: `boolean` (Optional) - If true, allows multiple selections (checkboxes).
- `value`: `any | any[]` (Optional) - The current selection(s).
- `onChange`: `(value: any) => void` (Required) - Callback for selection changes.

```tsx
import { SelectQuestion } from '@sds/co-creation-form';

<SelectQuestion 
  label="Which features do you use?"
  multiple
  options={[
    { label: 'Analytics', value: 'analytics' },
    { label: 'Reporting', value: 'reporting' },
    { label: 'Cloud Sync', value: 'sync' }
  ]}
  onChange={(vals) => setFeatures(vals)}
/>
```

**Gotchas:**
- If `multiple` is true, `value` must be an array.
- For very long lists, use `DropdownSingleQuestion` instead to save vertical space.