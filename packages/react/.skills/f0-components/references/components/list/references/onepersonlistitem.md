## OnePersonListItem

`OnePersonListItem` is a specialized list item component designed to represent an individual user or contact. It integrates avatars, status indicators, tags, and contextual actions into a single row.

**When to use:**
- In user directories, member lists, or assignee pickers.
- When you need to show a person's status or role (via tags) alongside their name.
- When providing quick actions (like "Delete" or "Edit") per person.

**Props:**
- `name`: `string` (Required) - The display name of the person.
- `description`: `string` (Optional) - Subtext displayed below the name (e.g., job title).
- `avatarUrl`: `string` (Optional) - URL for the person's profile image.
- `tags`: `Array<{label: string, color?: string}>` (Optional) - Labels to display next to the name.
- `actions`: `Array<Action>` (Optional) - Interactive buttons or icons for the item.
- `minimal`: `boolean` (Default: `false`) - Reduces padding and font size for dense UI.
- `isLoading`: `boolean` (Default: `false`) - Displays a skeleton state for the item.

**Usage Example:**
```tsx
import { OnePersonListItem } from '@components/list';

export const MemberList = () => (
  <div>
    <OnePersonListItem 
      name="Jane Smith"
      description="Product Designer"
      avatarUrl="/avatars/jane.png"
      tags={[{ label: 'Admin', color: 'blue' }]}
      actions={[{ icon: 'edit', onClick: () => {} }]}
    />
    <OnePersonListItem 
      name="Loading User"
      isLoading={true}
    />
  </div>
);
```

**Notes:**
- Use the `minimal` prop when the list is rendered inside a small popover or dropdown.
- For the underlying Avatar logic, see the skill in ./avatar/SKILL.md.