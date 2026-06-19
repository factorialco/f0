---
name: kanban
description: Use to visualize and manage items across different stages or categories in a column-based layout. Ideal for project management, task tracking, or status-based workflows requiring drag-and-drop or lane-based organization.
---
# Kanban

The Kanban component provides a flexible board layout consisting of multiple lanes (columns). It supports drag-and-drop reordering, asynchronous loading (infinite scroll), and custom card rendering.

## Props

- **getKey** (required): `(record: any) => string | number` - Extract a stable key for a given record.
- **items** (required): `any[]` - The items to display in the lane.
- **lanes** (required): `KanbanLaneConfig[]` - Configuration for the lanes. Each lane carries its concrete items for visual iteration.
- **renderCard** (required): `(record: any) => React.ReactNode` - Function to render a card for a given record.
- **allowReorder** (optional): `boolean` - Whether to allow reordering of items within or between lanes.
- **className** (optional): `string` - Optional CSS classes for the root container.
- **dnd** (optional): `any` - Optional DnD configuration to enable droppable lanes.
- **dropPlaceholderIndex** (optional): `number` - Index at which to show a drop placeholder/skeleton during drag operations.
- **emptyState** (optional): `React.ReactNode` - Content to show when there are no items in a lane.
- **fetchMore** (optional): `() => void` - Function to fetch more items when the lane is scrolled to the bottom.
- **footerActionIcon** (optional): `IconType` - Icon for the lane footer action button.
- **footerActionLabel** (optional): `string` - Label for the lane footer action button.
- **getLaneResourceIndexById** (optional): `(id: string) => number` - Helper to find the resource index of a lane by its ID.
- **hasMore** (optional): `boolean` - Whether the lane has more items to load via infinite scroll.
- **id** (optional): `string` - Unique identifier for the Kanban board.
- **loading** (optional): `boolean` - Whether the entire Kanban board is in a loading state.
- **loadingMore** (optional): `boolean` - Whether a specific lane is currently loading more items.
- **onCreate** (optional): `(laneId: string) => void` - Callback triggered when requesting a new record in a specific lane.
- **onFooterAction** (optional): `() => void` - Action triggered from the lane footer button, usually to create new items.
- **onMove** (optional): `(param: KanbanOnMoveParam) => Promise<any>` - Callback triggered when an item is moved. Should return a promise that resolves when the move is processed.
- **onPrimaryAction** (optional): `() => void` - Primary action triggered from the lane header (top-right).
- **primaryActionIcon** (optional): `IconType` - Icon for the primary action in the header.
- **primaryActionLabel** (optional): `string` - Label for the primary action in the header.
- **title** (optional): `string` - The title of the Kanban board or lane.
- **total** (optional): `number` - The total number of items in the lane (displayed in the header). Defaults to `items.length`.
- **variant** (optional): `string` - The visual variant of the lane.

## Usage Example

```tsx
import { Kanban } from './kanban';

const MyBoard = () => {
  const lanes = [
    { id: 'todo', title: 'To Do', items: [{ id: 1, text: 'Task 1' }] },
    { id: 'done', title: 'Done', items: [{ id: 2, text: 'Task 2' }] }
  ];

  return (
    <Kanban
      lanes={lanes}
      getKey={(item) => item.id}
      renderCard={(item) => (
        <div className="p-4 border rounded shadow-sm">
          {item.text}
        </div>
      )}
      onMove={async ({ item, sourceLaneId, targetLaneId, targetIndex }) => {
        console.log(`Moving ${item.id} to ${targetLaneId} at index ${targetIndex}`);
        // Perform API update here
      }}
    />
  );
};
```

## Variants

### Project Statuses
Use this variant when the Kanban board represents a formal workflow (e.g., "Backlog", "In Progress", "Review", "Completed"). This typically involves specific `onMove` logic to update record statuses in a backend.

## Best Practices

- **Stable Keys**: Always provide a unique, stable key via `getKey` to ensure smooth drag-and-drop animations and efficient re-rendering.
- **Optimistic Updates**: When using `onMove`, consider updating the local state optimistically before the promise resolves to ensure a responsive UI.
- **Loading States**: Use `loadingMore` and `hasMore` to implement a seamless infinite scroll experience for lanes with large datasets.
- **Empty States**: Provide an `emptyState` component to guide users when a lane has no content, especially for "To Do" or "Inbox" columns.

## Related Skills

- For individual lane configurations and behavior, see the skill in ./references/kanban-lane.md.
- For drag-and-drop implementation details, see the skill in ./references/dnd-provider.md.

## Sub-components

- **Kanban**: See ./references/kanban.md
- **KanbanLane**: See ./references/kanbanlane.md