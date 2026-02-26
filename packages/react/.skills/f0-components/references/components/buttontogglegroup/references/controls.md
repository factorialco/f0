## Controls

The Controls for the `ButtonToggleGroup` component define the configuration and state management for a set of toggleable buttons. This component is built on top of Radix UI's ToggleGroup and is ideal for scenarios where users need to make selections from a related set of options, such as filtering views, selecting sizes, or toggling application states.

Use this component when you need a more visual, button-based alternative to Radio Groups (single selection) or Checkboxes (multiple selection).

**Props:**

- **items**: `F0ButtonToggleGroupItem[]` (Required)  
  An array of objects defining the buttons. Each item includes:
  - `label`: The text displayed on the button.
  - `value`: The unique identifier for the item.
  - `icon`: (Optional) An icon element to display alongside the label.
  - `disabled`: (Optional) Boolean to disable only this specific item.
- **multiple**: `boolean` (Default: `false`)  
  When `true`, allows the user to select more than one item. This changes the expected type of `value` and the argument of `onChange` to `string[]`.
- **required**: `boolean` (Default: `false`)  
  When `true`, at least one item must remain selected. In single-selection mode, clicking the active item will not deselect it. In multiple-selection mode, the last remaining item cannot be deselected.
- **disabled**: `boolean` (Default: `false`)  
  When `true`, the entire group is disabled and no items can be interacted with.
- **value**: `string | string[]`  
  The controlled value of the selected item(s). Use a `string` for single selection and a `string[]` for multiple selection.
- **onChange**: `(value: string | string[]) => void`  
  Callback fired when the selection state changes.
- **size**: `'sm' | 'md'` (Default: `'md'`)  
  Determines the padding and font size of the buttons.
- **variant**: `'compact' | 'expanded'` (Default: `'compact'`)  
  - `compact`: Buttons are joined together in a single row/block.
  - `expanded`: Buttons have individual borders or spacing.

**Usage Examples:**

### Single Selection (Required)
This pattern is common for view switchers where one option must always be active.

```tsx
import { ButtonToggleGroup } from './ButtonToggleGroup';

const ViewSwitcher = () => {
  const [view, setView] = useState('grid');

  const items = [
    { label: 'Grid', value: 'grid', icon: <GridIcon /> },
    { label: 'List', value: 'list', icon: <ListIcon /> },
  ];

  return (
    <ButtonToggleGroup
      items={items}
      value={view}
      onChange={(val) => setView(val as string)}
      required
    />
  );
};
```

### Multiple Selection
Used for filtering or selecting multiple attributes.

```tsx
import { ButtonToggleGroup } from './ButtonToggleGroup';

const DaysSelector = () => {
  const [selectedDays, setSelectedDays] = useState(['mon']);

  const days = [
    { label: 'Mon', value: 'mon' },
    { label: 'Tue', value: 'tue' },
    { label: 'Wed', value: 'wed' },
    { label: 'Thu', value: 'thu' },
    { label: 'Fri', value: 'fri' },
  ];

  return (
    <ButtonToggleGroup
      items={days}
      multiple
      value={selectedDays}
      onChange={(val) => setSelectedDays(val as string[])}
      size="sm"
    />
  );
};
```

**Edge Cases & Gotchas:**

- **Type Safety**: Ensure that if `multiple` is toggled, the `value` state is updated from a `string` to a `string[]` (or vice versa) to avoid runtime errors or unexpected UI behavior.
- **Required vs. Multiple**: If `required` and `multiple` are both true, the component logic prevents the array from becoming empty.
- **Layout Wrapping**: By default, the buttons will wrap to the next line if the container width is insufficient. If you require a single-line scrollable behavior, you must wrap the component in a container with `overflow-x: auto` and `white-space: nowrap`.
- **Icon Only**: While `label` is usually required for accessibility, if you intend to create an icon-only toggle, ensure you provide an `aria-label` to the items or the group.