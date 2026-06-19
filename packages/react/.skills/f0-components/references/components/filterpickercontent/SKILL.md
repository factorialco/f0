---
name: filter-picker-content
description: Standalone dual-pane filter interface for embedding in modals or sidebars. Use for complex filtering logic requiring a list of categories and specific value selections without a popover wrapper.
---

# FilterPickerContent

`FilterPickerContent` provides a dual-pane interface for selecting filters. The left pane displays the list of available filter categories, while the right pane displays the specific configuration options for the selected filter. It is designed to be embedded directly into other UI containers like modals or sidebars.

## Props

- **filters** (required): `FiltersSchema` - The schema defining available filters and their configurations.
- **onChange** (required): `(value: FiltersState) => void` - Callback fired when filters are changed or the apply button is clicked.
- **value** (required): `FiltersState` - The current state of applied filters.
- **applyButtonLabel** (optional): `string` - Custom text for the apply button.
- **className** (optional): `string` - Optional CSS class for the container.
- **height** (optional): `number` - Fixed height of the content panel.
- **showApplyButton** (optional): `boolean` - Whether to show the apply button. Defaults to `true`.
- **width** (optional): `number` - Fixed width of the content panel. Defaults to `600`.

## Usage Patterns

### Basic Implementation
Embed the component within a container. By default, it includes an "Apply" button that triggers the `onChange` callback.

```tsx
import { FilterPickerContent } from './FilterPickerContent';

const MyFilterContainer = () => {
  const [filterValue, setFilterValue] = useState({});

  return (
    <FilterPickerContent
      filters={myFilterSchema}
      value={filterValue}
      onChange={(newValue) => setFilterValue(newValue)}
    />
  );
};
```

### Real-time Updates (No Apply Button)
Set `showApplyButton` to `false` to trigger `onChange` immediately upon any selection change. This is useful for sidebars where results should update instantly.

```tsx
<FilterPickerContent
  filters={complexFilters}
  value={currentValue}
  onChange={handleImmediateChange}
  showApplyButton={false}
/>
```

## Variants and Configuration

- **Complex Filters**: Supports multiple filter types (e.g., multi-select, date ranges, text search) defined within the `filters` schema.
- **Custom Dimensions**: Use `width` and `height` props to fit the component into specific layout constraints (e.g., a large modal or a narrow sidebar).
- **Pre-selected Values**: When `value` contains existing data, the component automatically selects the first filter category that has an active value.

## Best Practices

- **Container Sizing**: Since this component is standalone, ensure the parent container has enough space to accommodate the dual-pane layout (default 600px width).
- **Schema Definition**: Ensure the `filters` schema is memoized or defined outside the component to prevent unnecessary re-renders.
- **Modal Usage**: When using inside a modal, consider disabling the internal "Apply" button and using the modal's primary action button instead to maintain consistency with the modal's lifecycle.

## Related Skills

- For the full popover-based filter implementation, see the skill in ./references/filter-picker.md
- For defining filter schemas and types, see the skill in ./references/filter-schema-definitions.md