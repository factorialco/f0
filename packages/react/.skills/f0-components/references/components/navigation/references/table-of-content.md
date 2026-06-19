## TableOfContent

A hierarchical navigation component that supports up to 4 levels of nesting. It is ideal for long-form documentation, course outlines, or complex page structures.

**Props:**
- `items`: `TOCItem[]` (Required) - Hierarchical array of items. Each item can have `id`, `label`, `children`, and `icon`.
- `collapsible`: `boolean` - Allows users to expand/collapse nested sections.
- `sortable`: `boolean` - Enables drag-and-drop reordering of items.
- `showSearch`: `boolean` - Adds a search box at the top to filter the list.
- `hideChildrenCounter`: `boolean` - Hides the numeric badge showing the count of nested items.

**Usage Example:**
```tsx
import { TableOfContent } from '@f1/navigation';

const docStructure = [
  { 
    label: 'Introduction', 
    children: [
      { label: 'Getting Started' },
      { label: 'Installation' }
    ] 
  },
  { label: 'API Reference' }
];

const DocNav = () => (
  <TableOfContent items={docStructure} collapsible showSearch />
);
```

**Edge Cases & Gotchas:**
- When `sortable` is enabled, ensure you provide an `onReorder` callback to persist the new state.
- Deeply nested items (beyond 4 levels) may suffer from indentation issues on narrow containers.