---
name: data-collection
description: Standardized component for visualizing and manipulating data sets. Supports table, card, and list views with built-in filtering, sorting, pagination, and bulk actions. Use when displaying collections of items that require consistent UI patterns for data management.
---

# Data Collection

The Data Collection component provides a standardized interface for visualizing and manipulating data sets. It abstracts complex data patterns into an intuitive UI that supports multiple view modes (Table, Card, List) while maintaining consistent behavior for filtering, sorting, and actions.

## Core Features

- **View Modes**: Toggle between Table, Card, and List visualizations.
- **Action System**: Support for both global (toolbar) and item-level actions.
- **State Management**: Built-in handling for loading, empty states, sorting, and pagination.
- **Persistence**: Capability to store the state of filters and view preferences for returning users.
- **Bulk Operations**: Selectable items with support for multi-item actions.

## Usage Example

```tsx
import { DataCollection } from '@factorial/ds';

const MyDataView = () => {
  const columns = [
    { id: 'name', header: 'Name', accessor: 'name' },
    { id: 'status', header: 'Status', accessor: 'status' },
  ];

  const actions = [
    { label: 'Edit', onClick: (item) => handleEdit(item) },
    { label: 'Delete', onClick: (item) => handleDelete(item), variant: 'danger' }
  ];

  return (
    <DataCollection
      items={data}
      columns={columns}
      itemActions={actions}
      loading={isLoading}
      pagination={{
        totalItems: 100,
        itemsPerPage: 20,
        onPageChange: (page) => setPage(page)
      }}
      emptyState={{
        title: "No items found",
        description: "Try adjusting your filters."
      }}
    />
  );
};
```

## Component API

### Primary Props

| Prop | Type | Description |
| :--- | :--- | :--- |
| `items` | `Array<T>` | The data array to be rendered. |
| `columns` | `ColumnConfig[]` | Configuration for table headers and data mapping. |
| `viewMode` | `'table' \| 'card' \| 'list'` | The active visualization format. |
| `loading` | `boolean` | Displays a skeleton or spinner state when true. |
| `filters` | `FilterConfig[]` | Configuration for the filtering interface in the toolbar. |
| `itemActions` | `Action[]` | Actions available for individual data items. |
| `bulkActions` | `Action[]` | Actions available when one or more items are selected. |
| `onStateChange` | `(state: State) => void` | Callback for changes in pagination, sorting, or filtering. |

## View Modes

- **Table View**: Optimized for dense data and side-by-side comparison.
- **Card View**: Best for visual content or items with distinct identity.
- **List View**: Ideal for mobile-friendly or text-heavy sequential data.

## Best Practices

- **FullHeight Mode**: Use `fullHeight={true}` when the component is the primary focus of a page to enable internal scrolling while keeping the toolbar visible.
- **Empty States**: Always provide a clear `emptyState` configuration to guide users when no data matches their criteria.
- **Persistence**: Enable state persistence for complex dashboards to improve user experience across sessions.

## Related Skills

- For managing the logic, filtering, and state of this component, see the skill in `./use-data-collection/SKILL.md`.
- For specific table cell formatting, see the skill in `./table/SKILL.md`.
- For toolbar customization, see the skill in `./toolbar/SKILL.md`.