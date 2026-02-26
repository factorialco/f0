---
name: sds-profile
description: Use to display a user's profile overview, including task lists, progress category bars, and status indicators. Ideal for dashboards, personal management views, and tracking user-specific progress.
---

# Profile

The `Profile` component is a high-level organizational pattern used to aggregate user-specific data, specifically focusing on task management and progress visualization. It integrates task lists with category-based progress bars to provide a comprehensive view of a user's current workload and status.

## Props

- **data** (required): `CategoryBarProps["data"]` - Data configuration for the progress or category bar visualization.
- **status** (required): `union` - The current operational status of the profile or associated entity.
- **subtitle** (required): `string` - Secondary text displayed below the main title.
- **task** (required): `Task` - A single task object used for individual task context.
- **tasks** (required): `TasksList` - An array or collection of tasks to be rendered in the list section.
- **title** (required): `string` - The primary heading for the profile component.
- **emptyMessage** (optional): `string` - Text displayed when the task list is empty. Default: "No tasks assigned".
- **helpText** (optional): `string` - Contextual help or tooltip information for the user.
- **hideIcon** (optional): `boolean` - If true, hides the main section icon. Default: false.
- **hideIcons** (optional): `boolean` - If true, hides icons within the task items. Default: false.
- **hideTooltip** (optional): `boolean` - If true, prevents tooltips from appearing on interactive elements. Default: false.
- **legend** (optional): `boolean` - Whether to display a legend for the category bar data. Default: false.
- **maxTasksToShow** (optional): `number` - Limits the number of tasks visible before truncation or scrolling. Default: 5.
- **onClick** (optional): `(task: Task) => void` - General click handler for the profile section.
- **onClickTask** (optional): `(task: Task) => void` - Specific callback triggered when a task item is selected.

## Usage

```tsx
import { Profile } from '@sds/profile';

const UserProfile = () => {
  const handleTaskClick = (task: Task) => {
    console.log('Selected task:', task.id);
  };

  return (
    <Profile
      title="John Doe"
      subtitle="Senior Developer"
      status="active"
      tasks={currentTasks}
      data={progressData}
      maxTasksToShow={3}
      onClickTask={handleTaskClick}
      helpText="View your assigned tasks and completion progress."
    />
  );
};
```



## Sub-components

- **CategoryBarSection**: See ./references/categorybarsection.md
- **PrivateBox**: See ./references/privatebox.md
- **TaskItem**: See ./references/taskitem.md
- **TasksList**: See ./references/taskslist.md

## Related Skills

- For **CategoryBarSection**, see ./references/categorybarsection.md
- For **PrivateBox**, see ./references/privatebox.md
- For **TaskItem**, see ./references/taskitem.md
- For **TasksList**, see ./references/taskslist.md