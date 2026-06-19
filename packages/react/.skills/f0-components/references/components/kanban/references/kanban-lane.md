## KanbanLane

The KanbanLane is a sub-component of the Kanban board that represents a single vertical column. It is responsible for rendering a group of items associated with a specific status and displaying metadata in the lane header, such as the total item count.

**Props:**
- `id`: `string` (Required) - Unique identifier for the lane.
- `title`: `string` (Required) - The display name shown in the lane header.
- `items`: `any[]` (Required) - The array of data objects to be rendered as cards within this lane.
- `totalCount`: `number` (Optional) - The total number of items in the lane for display in the header. If not provided, it defaults to `items.length`.
- `placeholderIndex`: `number` (Optional) - The index at which to show a drop placeholder or skeleton during drag operations. If `undefined`, no placeholder is shown.

**Usage Example:**
```tsx
import { KanbanLane } from './KanbanLane';

const TodoLane = () => {
  const items = [
    { id: 'task-1', title: 'Fix CSS' },
    { id: 'task-2', title: 'Update Types' }
  ];

  return (
    <KanbanLane
      id="todo-lane"
      title="To Do"
      items={items}
      totalCount={15} // Shows "15" in header even if only 2 items are currently loaded
      placeholderIndex={1} // Shows a drop target at the second position
    />
  );
};
```

**Best Practices:**
- Use `totalCount` when implementing pagination or "load more" patterns where the number of items rendered is less than the total items in that status.
- For the parent board implementation, see the skill in ./kanban/SKILL.md.

**Edge Cases & Gotchas:**
- **Placeholder Logic**: The `placeholderIndex` is strictly for visual feedback during drag-and-drop. It does not modify the underlying `items` array.
- **Header Defaults**: If `totalCount` is omitted, the header will automatically reflect the current length of the `items` prop. Ensure this is intended if you are using filtered views.