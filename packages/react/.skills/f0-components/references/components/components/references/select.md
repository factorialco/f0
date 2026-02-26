## Select

The base component for selection menus. It supports single/multiple selection, virtualization for large lists, and fixed header/footer content within the dropdown.

**Props:**
- `items`: `Option[]` - Array of options for virtualized rendering.
- `value`: `string | string[]` - The selected value(s).
- `onChange`: `(value: any) => void` - Selection callback.
- `multiple`: `boolean` - Enables multiple selection.
- `virtualized`: `boolean` - Enables high-performance rendering for long lists.
- `topContent`: `ReactNode` - Fixed content at the top of the list (e.g., a search bar).
- `bottomContent`: `ReactNode` - Fixed content at the bottom (e.g., an "Add New" button).

```tsx
import { Select } from './select';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

export const CustomSelect = () => (
  <Select 
    items={options}
    multiple
    topContent={<div className="p-2 border-b">Select multiple items</div>}
    onChange={(val) => console.log(val)}
  />
);
```

**Gotchas:**
- When using `virtualized`, you must provide the `items` prop rather than passing children to ensure the virtualization engine can calculate positions.
- For a standard form select, see the `InputField` skill for wrapping instructions.