## TaskItem

`TaskItem` represents a single actionable item within a profile. It displays the task's title, its current status, and urgency indicators like "Past Due" flags. Use this as a sub-component within a `TasksList`.

**Props:**
- `title`: `string` (Required) - The name of the task.
- `status`: `'todo' | 'in-progress' | 'done'` (Required) - The current state of the task.
- `isPastDue`: `boolean` (Optional) - If true, displays a high-priority warning or "Past Due" label.
- `onPress`: `() => void` (Optional) - Callback function when the item is clicked. If provided, the item becomes interactive.
- `dueDate`: `string` (Optional) - A formatted string representing when the task is or was due.

**Usage Example:**
```tsx
import { TaskItem } from '@sds/profile';

const MyTask = () => (
  <TaskItem
    title="Update Profile Picture"
    status="todo"
    isPastDue={true}
    onPress={() => console.log('Task clicked')}
  />
);
```

**Variants:**
- **In Progress / Past Due**: Shows an active state with a red urgency indicator.
- **Done**: Typically shows a strike-through or a checkmark, with urgency indicators removed.
- **Pressable**: Adds hover/active states to indicate the item can be opened for details.