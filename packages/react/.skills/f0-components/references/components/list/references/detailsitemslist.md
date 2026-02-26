## DetailsItemsList

`DetailsItemsList` is a layout container for multiple `DetailsItem` components. It provides structured formatting and supports specialized views like "Table View" for tabular data representation.

**When to use:**
- To group multiple `DetailsItem` components together with consistent spacing.
- When you need to toggle between a standard list view and a structured table-like view.
- When displaying lists of people, avatars, or teams alongside metadata.

**Props:**
- `items`: `Array<DetailsItemProps>` (Required) - An array of objects defining the items to render.
- `isTableView`: `boolean` (Default: `false`) - Switches the layout to a structured table format.
- `columns`: `number` (Optional) - Defines column count in table view.
- `className`: `string` (Optional) - Custom styling classes.

**Usage Example:**
```tsx
import { DetailsItemsList } from '@components/list';

const projectData = [
  { label: 'Owner', value: 'Design Team' },
  { label: 'Deadline', value: '2023-12-31' },
  { label: 'Budget', value: '$50,000' }
];

export const ProjectSummary = () => (
  <DetailsItemsList 
    items={projectData} 
    isTableView={true} 
  />
);
```

**Variants:**
- **Table View**: Best for comparing multiple attributes across a horizontal axis.
- **Avatar/Team List**: Use when the `value` prop of items contains Avatar components. For Avatar components, see the skill in ./avatar/SKILL.md.