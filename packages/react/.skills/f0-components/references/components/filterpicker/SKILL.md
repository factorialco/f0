---
name: filter-picker
description: Use to allow users to narrow down datasets via criteria (filters) and predefined combinations (presets). Ideal for data tables, dashboards, and searchable lists.
---

# FilterPicker

The `FilterPicker` component provides a comprehensive interface for users to filter datasets. It supports multiple filter types (Search, Date, Number, In) and allows for "Presets"—predefined filter combinations that simplify navigation.

## Props

- **onChange** (required): `(value: Value) => void` - Callback triggered when filter values change.
- **schema** (required): `FilterSchema` - Configuration defining available filters and their types.
- **value** (required): `Value` - Current state of the selected filters.
- **isCompactMode** (optional): `boolean` - Renders a condensed version of the picker for tight spaces.

## Filter Types

- **In Filter**: Used for selecting multiple values from a list (checkboxes). Supports async options, client-side search, and error states.
- **Search Filter**: Provides a free-text search input. Can include a "strict" toggle for exact matching.
- **Date Filter**: Allows users to select a specific date or a date range. Supports min/max date constraints.
- **Number Filter**: Provides numeric input for single values or ranges.

## Presets

Presets are predefined configurations that allow users to quickly access frequently used filtered views.

- **label**: The display name of the preset.
- **filter**: The `FiltersState` associated with the preset.
- **mode**: Controls application behavior. Use `'replace'` (default) to clear existing filters or `'additive'` to merge the preset with current selections.
- **itemsCount**: An optional function `(value: FiltersState) => number` to display result counts next to the preset.

## Usage Example

```tsx
import { FilterPicker } from '@components/filter-picker';

const schema = {
  search: { type: 'search', label: 'Search users...' },
  department: {
    type: 'in',
    label: 'Department',
    options: ['Engineering', 'Sales', 'Marketing']
  },
  joinedDate: { type: 'date', label: 'Joined Date' }
};

const presets = [
  {
    label: 'Engineering Team',
    filter: { department: ['Engineering'] },
    mode: 'replace'
  }
];

export const MyFilterBar = () => {
  const [value, setValue] = useState({});

  return (
    <FilterPicker
      schema={schema}
      value={value}
      onChange={setValue}
      presets={presets}
    />
  );
};
```



## Sub-components

- **Filters**: See ./references/filters.md
- **Internal**: See ./references/internal.md
- **Presets**: See ./references/presets.md

## Related Skills

- For **Filters**, see ./references/filters.md
- For **Internal**, see ./references/internal.md
- For **Presets**, see ./references/presets.md