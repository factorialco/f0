## Tabs

The Tabs component organizes content into separate views that can be toggled. It supports multiple visual variants to fit different UI contexts.

**Props:**
- `items`: `TabItem[]` (Required) - Array of tabs with `id`, `label`, and optional `icon`.
- `variant`: `'primary' | 'secondary' | 'piled' | 'embedded'` - The visual style of the tabs.
- `activeId`: `string` - The ID of the currently selected tab.
- `onChange`: `(id: string) => void` - Callback triggered when a tab is clicked.
- `isLoading`: `boolean` - Shows a skeleton state for the tab bar.

**Usage Example:**
```tsx
import { Tabs } from '@f1/navigation';

const ProfileTabs = () => {
  const [active, setActive] = useState('info');
  
  const items = [
    { id: 'info', label: 'Personal Info' },
    { id: 'security', label: 'Security' },
    { id: 'billing', label: 'Billing' }
  ];

  return (
    <Tabs 
      items={items} 
      activeId={active} 
      onChange={setActive} 
      variant="primary" 
    />
  );
};
```

**Edge Cases & Gotchas:**
- The `piled` variant is best used for sub-navigation within a page section.
- The `embedded` variant removes borders and background, making it suitable for use inside cards or tight spaces.