## F0Form

`F0Form` is a high-level, schema-driven form component built on top of Zod. It automates layout, validation, and state management. Use this for complex data entry, multi-section layouts, or forms requiring conditional logic and server-side validation.

**Props:**
- `schema`: `ZodObject` (Required) - The Zod schema defining field types and validation rules. Labels and placeholders can be embedded in the schema metadata.
- `onSubmit`: `(values: T) => void | Promise<void>` (Required) - Callback function triggered on valid form submission.
- `fields`: `FieldConfig[]` - Configuration for fields including `row`, `section`, `renderIf`, and `disabled` logic.
- `styling`: `{ showSectionSidebar?: boolean; wrapInBox?: boolean }` - Configuration for form layout and appearance.
- `errorTriggerMode`: `'onBlur' | 'onChange' | 'onSubmit'` - Defines when validation errors appear. Defaults to `onBlur`.
- `discardable`: `boolean` - When used with an action bar, determines if a "Discard" button is shown.
- `formRef`: `RefObject` - Ref to control the form programmatically via the `useF0Form` hook.

**Field Configuration Features:**
- **Rows & Sections**: Group fields horizontally using `row` or into logical blocks using `section`.
- **Conditional Rendering**: Use `renderIf` (object or function) to show/hide fields based on other form values.
- **Dynamic Disabled**: Use `disabled` as a function to enable/disable fields dynamically.
- **Data Sources**: Select fields can use `dataSource` for async option fetching and filtering.

**Usage Example:**
```tsx
import { F0Form } from '@/components/experimental/F0Form';
import { z } from 'zod';

const schema = z.object({
  username: z.string().describe('Username // Enter a unique username'),
  role: z.enum(['admin', 'user']),
  permissions: z.string().optional(),
});

const MyForm = () => {
  return (
    <F0Form
      schema={schema}
      onSubmit={(data) => console.log(data)}
      fields={[
        { name: 'username', section: 'Basic Info' },
        { name: 'role', section: 'Basic Info', row: 'r1' },
        { 
          name: 'permissions', 
          section: 'Basic Info', 
          row: 'r1',
          renderIf: (values) => values.role === 'admin' 
        },
      ]}
      styling={{ showSectionSidebar: true }}
    />
  );
};
```

**Edge Cases & Gotchas:**
- **Reset on Disable**: Use `resetOnDisable: true` in field config to clear a field's value automatically when its disabled condition is met.
- **External Submission**: If the submit button is outside the form (e.g., in a Dialog footer), use the `useF0Form` hook to obtain a ref and call `formRef.current.submit()`.