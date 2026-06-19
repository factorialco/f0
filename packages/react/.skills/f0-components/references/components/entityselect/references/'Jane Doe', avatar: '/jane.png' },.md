## EmployeeSelector

The `EmployeeSelector` is a specialized implementation of the `EntitySelect` component tailored specifically for managing employee data. It provides a standardized way to search, filter, and select one or multiple employees, typically displaying their avatars and names for quick recognition.

Use this component when the user needs to assign tasks, manage permissions, or filter views based on specific staff members.

**Props:**
- `employees`: `Employee[]` (Required) - Array of employee objects containing at least `id`, `name`, and `avatar`.
- `selectedIds`: `string[]` - Array of IDs for currently selected employees.
- `onChange`: `(ids: string[]) => void` - Callback triggered when selection changes.
- `multiple`: `boolean` (Default: `true`) - Whether to allow multiple selections.
- `actions`: `ActionProps[]` - Custom buttons to display in the footer (e.g., "Invite New Employee").
- `showSelectAll`: `boolean` (Default: `true`) - Displays a "Select All" option in the footer.
- `showClear`: `boolean` (Default: `true`) - Displays a "Clear" option in the footer.

```tsx
import { EmployeeSelector } from '@components/entity-select';

const MyComponent = () => {
  const handleSelection = (ids: string[]) => {
    console.log('Selected employees:', ids);
  };

  return (
    <EmployeeSelector
      employees={[
        { id: '1', name: 'Jane Doe', avatar: '/jane.png' },
        { id: '2', name: 'John Smith', avatar: '/john.png' }
      ]}
      onChange={handleSelection}
      actions={[
        { label: 'Add Guest', onClick: () => alert('Add guest logic') }
      ]}
    />
  );
};
```

**Notes:**
- For the underlying selection logic, see the skill in ./entity-select/SKILL.md.
- Ensure employee avatars are accessible; the component handles alt text based on the employee name.