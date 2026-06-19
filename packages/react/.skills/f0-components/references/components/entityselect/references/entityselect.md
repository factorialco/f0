## EntitySelect

`EntitySelect` is a versatile form component for selecting entities (users, teams, or items) from a searchable, filterable list. It supports hierarchical data, single/multiple selection modes, and "always open" layouts.

Use this for any generic entity selection that requires visual identification (avatars) and complex filtering.

**Props:**
- `options`: `EntityOption[]` (Required) - The list of items to display.
- `value`: `string | string[]` - The currently selected ID or IDs.
- `onSelect`: `(value: string | string[]) => void` - Callback for selection changes.
- `mode`: `'single' | 'multiple'` (Default: `'multiple'`) - Selection behavior.
- `variant`: `'dropdown' | 'always-open'` - Whether the list is toggled or permanently visible.
- `groups`: `GroupConfig[]` - Configuration for hierarchical/parent-child data structures.
- `searchPlaceholder`: `string` - Custom text for the search input.

```tsx
import { EntitySelect } from '@components/entity-select';

const TeamPicker = () => (
  <EntitySelect
    mode="single"
    searchPlaceholder="Search teams..."
    options={[
      { id: 't1', label: 'Engineering', avatar: '/icons/eng.svg' },
      { id: 't2', label: 'Design', avatar: '/icons/des.svg' }
    ]}
    onSelect={(id) => console.log(id)}
  />
);
```

**Best Practices:**
- Use `always-open` mode for sidebars or dedicated configuration screens.
- Provide clear `searchPlaceholder` text to guide the user.
- For the individual items within the list, see the skill in ./list-item/SKILL.md.