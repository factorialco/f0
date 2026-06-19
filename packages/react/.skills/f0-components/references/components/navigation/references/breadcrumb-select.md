## BreadcrumbSelect

BreadcrumbSelect is a specialized dropdown component designed to live within a breadcrumb trail. It allows users to switch between related entities (like different projects or accounts) without leaving the current page context.

**Props:**
- `options`: `Option[] | (() => Promise<Option[]>)` (Required) - The list of selectable items or an async function to fetch them.
- `value`: `Option` (Required) - The currently selected option.
- `onChange`: `(option: Option) => void` (Required) - Callback when a new option is selected.
- `showSearch`: `boolean` - Enables an internal search box to filter options.
- `externalSearch`: `boolean` - If true, the component expects the parent to handle filtering via the `options` prop.
- `isLoading`: `boolean` - Displays a loading spinner, useful for async data fetching.

**Usage Example:**
```tsx
import { BreadcrumbSelect } from '@f1/navigation';

const ProjectSwitcher = () => {
  const projects = [
    { id: '1', label: 'Project Alpha' },
    { id: '2', label: 'Project Beta' }
  ];

  return (
    <BreadcrumbSelect 
      options={projects} 
      value={projects[0]} 
      onChange={(val) => console.log(val)}
      showSearch
    />
  );
};
```

**Edge Cases & Gotchas:**
- Unlike a standard Select, BreadcrumbSelect cannot be empty; it must always have a value.
- When using `externalSearch`, ensure you debounce your data fetching to prevent excessive API calls.