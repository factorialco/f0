---
name: chip-list
description: Renders a collection of chips for categorization, filtering, or selection. Use when displaying multiple tags, active filters, or metadata labels in a grouped layout.
---

# ChipList

The `ChipList` component manages a collection of individual chips, providing layout control and overflow management. It is the standard container for grouping related tags or filter items.

## Props
- **chips** (optional): `ChipProps[]` - An array of chip objects to be rendered within the list.
- **layout** (optional): `string` - Defines the arrangement of chips. Common values include 'default' and 'fill'.
- **max** (optional): `number` - The maximum number of chips to display before truncating the list.

## Usage Examples

### Default
Basic horizontal list of informational chips.
```tsx
import { ChipList } from './ChipList';

const MyComponent = () => (
  <ChipList
    chips={[
      { label: 'React', id: '1' },
      { label: 'TypeScript', id: '2' },
      { label: 'Storybook', id: '3' }
    ]}
  />
);
```

### With Close
Chips that include a removal action, typically used for active filters.
```tsx
import { ChipList } from './ChipList';

const FilterBar = () => (
  <ChipList
    chips={[
      { label: 'Category: Electronics', onDelete: () => handleRemove('cat') },
      { label: 'Status: In Stock', onDelete: () => handleRemove('stock') }
    ]}
  />
);
```

### With Fill Layout
Forces chips to expand and fill the container width.
```tsx
<ChipList
  layout="fill"
  chips={[
    { label: 'Option A' },
    { label: 'Option B' }
  ]}
/>
```

## Variants and Behavior
- **Layout**: The `fill` layout is useful for mobile views or button-group style selections where uniform width is desired.
- **Truncation**: Use the `max` prop to prevent long lists of chips from breaking the UI layout.

## Related Skills
- For the individual Chip component properties and states, see the skill in ./references/chip.md
- For data filtering patterns using chips, see the skill in ./references/filter-patterns.md