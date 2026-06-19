---
name: table
description: A flexible component for displaying structured data in rows and columns. Use when users need to compare values, scan large datasets, or perform actions on multiple items. Supports fixed headers, sticky columns, and loading states.
---

## Overview
The Table component provides a structured layout for data-heavy interfaces. It is highly composable, relying on children to define its internal structure (headers, rows, and cells).

## Props
- **children** (required): `React.ReactNode` - The internal elements of the table, typically Table.Header, Table.Body, and Table.Row.
- **fixedHeader** (optional): `boolean` - When true, the header remains pinned to the top of the container during vertical scrolling.
- **loading** (optional): `boolean` - Triggers the loading state, often replacing content with a skeleton or overlay. Default: `false`.

## Usage Examples

### Basic Table
```tsx
import { Table } from './Table';

const MyTable = () => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Project Alpha</td>
        <td>Active</td>
      </tr>
    </tbody>
  </Table>
);
```

### Loading State
Use the `loading` prop to provide visual feedback during data fetching.
```tsx
<Table loading={true}>
  {/* Content will be obscured or replaced by loading indicators */}
</Table>
```

## Variants and Features
- **Sortable**: Implement sorting logic by handling clicks on header cells.
- **Sticky Column**: Useful for wide tables where the primary identifier (e.g., Name) must remain visible while scrolling horizontally.
- **Skeleton**: Use for initial page loads to reduce perceived latency.
- **Summatory/Footer**: Use for financial data or logs where a total or summary row is required at the bottom.
- **Actions**: Tables can contain interactive elements like links, buttons, or dropdown menus within cells.

## Best Practices
- **Use for**: Structured data that requires comparison or bulk actions.
- **Avoid for**: Simple lists or purely decorative layouts; use a List component instead.
- **Accessibility**: Ensure all interactive elements within cells (like sort buttons) have appropriate aria-labels.
- **Performance**: For very large datasets, consider virtualization or pagination.

## Related Skills
- For pagination controls used with tables, see the skill in ./references/pagination.md
- For checkbox components used in selectable rows, see the skill in ./references/checkbox.md
- For skeleton loading patterns, see the skill in ./references/skeleton.md