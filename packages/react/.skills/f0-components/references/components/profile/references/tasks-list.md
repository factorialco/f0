## TasksList

`TasksList` is a container component designed to manage and display a collection of `TaskItem` components. It handles the layout, section headers, counters, and empty states when no tasks are available.

**Props:**
- `tasks`: `Array<TaskItemProps>` (Required) - An array of objects containing data for each `TaskItem`.
- `label`: `string` (Optional) - A title for the list (e.g., "Active Tasks").
- `showCounters`: `boolean` (Optional) - Displays the total count of tasks next to the label.
- `emptyMessage`: `string` (Optional) - Text to display when the `tasks` array is empty.
- `maxVisible`: `number` (Optional) - Limits the number of tasks shown before truncating or adding a "See All" link.

**Usage Example:**
```tsx
import { TasksList } from '@sds/profile';

const MyTasks = () => (
  <TasksList
    label="My Assignments"
    showCounters={true}
    emptyMessage="No tasks assigned yet."
    tasks={[
      { title: 'Submit Report', status: 'in-progress', isPastDue: false },
      { title: 'Annual Review', status: 'todo', isPastDue: true },
    ]}
  />
);
```

**Best Practices:**
- Use `showCounters` to give users a quick sense of their workload without scrolling.
- Always provide an `emptyMessage` to avoid a blank UI state which can be mistaken for a loading error.
- For individual task configuration, see the `TaskItem` skill in ./task-item/SKILL.md.