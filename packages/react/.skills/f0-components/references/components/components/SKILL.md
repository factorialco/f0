---
name: core-ui-components
description: A collection of foundational UI components including responsive lists, inputs, cards, and dialogs. Use this skill to implement standardized UI patterns and ensure consistent layout behavior across the application.
---
## Overview
This component library provides a set of modular, accessible UI elements. It includes specialized layout components like `OverflowList` for responsive headers/toolbars and `DatePickerPopup` for complex date range selections.

## Component API

### OverflowList & VerticalOverflowList
Manages a list of items that dynamically move to an overflow menu based on available container space.
- **items** (required): `T[]` - The array of data items to display.
- **renderListItem** (required): `(item: T, index: number, isVisible?: boolean) => ReactNode` - Renders items visible in the main list.
- **renderDropdownItem** (required): `(item: T, index: number) => ReactNode` - Renders items when they are moved into the overflow menu.
- **minSize** (required): `number` - The minimum size of the container before triggering overflow.
- **gap** (optional): `number` - Space between items in pixels (default: 8).
- **max** (optional): `number` - Maximum number of items to display before forcing overflow.
- **overflowIndicatorWithPopover** (optional): `boolean` - Whether to wrap the overflow indicator in a popover (default: true).

### InputField
A wrapper for native `<input>` or `<textarea>` elements providing labels, error states, and character counters.
- **children** (required): `ReactElement` - A native input or textarea element.
- **label** (optional): `string` - The floating or static label text.
- **error** (optional): `string | boolean` - Error message or boolean state.
- **helpText** (optional): `string` - Supporting text displayed below the input.
- **counter** (optional): `boolean` - Whether to show a character counter.

### ButtonCopy
A utility button that copies text to the clipboard with built-in tooltip feedback.
- **valueToCopy** (required): `string` - The string to be copied.
- **copyTooltipLabel** (optional): `string` - Tooltip text shown before clicking.
- **copiedTooltipLabel** (optional): `string` - Tooltip text shown after successful copy.
- **onCopy** (optional): `() => void` - Callback fired after copying.

### DatePickerPopup
Internal component for selecting date ranges with specific granularities.
- **value** (optional): `{ value: { from: Date, to: Date }, granularity: string }` - The current date range and granularity.
- **granularities** (optional): `string[]` - Available options (day, week, month, quarter, halfyear, year).
- **presets** (optional): `array` - Predefined date ranges for quick selection.

## Usage Examples

### Implementing a Responsive Toolbar
Use `OverflowList` to handle navigation items that might exceed the screen width.

```tsx
import { OverflowList } from './components/overflow-list';

const MyToolbar = ({ navItems }) => (
  <OverflowList
    items={navItems}
    minSize={200}
    renderListItem={(item) => <button key={item.id}>{item.label}</button>}
    renderDropdownItem={(item) => <div key={item.id}>{item.label}</div>}
    gap={12}
  />
);
```

### Composing an Input Field
Always pass a native input element as a child to `InputField`.

```tsx
import { InputField } from './components/input-field';

const UserForm = () => (
  <InputField label="Username" helpText="Enter your unique handle">
    <input type="text" onChange={(e) => console.log(e.target.value)} />
  </InputField>
);
```

## Best Practices
- **Overflow Management**: Use `itemsWidth` prop in `OverflowList` if item dimensions are known statically to prevent runtime layout shifts.
- **Dialog Accessibility**: Always provide a `DialogTitle` and `DialogDescription` within `DialogContent` for screen reader support.
- **Input Composition**: Do not wrap `InputField` around custom components unless they forward refs and accept standard HTML input props.
- **Date Selection**: Use `DatePickerPopup` when users need to select specific business periods (quarters, half-years) rather than just arbitrary dates.

## Related Skills
- For Action components, see the skill in ./references/action.md
- For ButtonCopy utilities, see the skill in ./references/button-copy.md
- For Card layouts, see the skill in ./references/card.md
- For ChevronToggle indicators, see the skill in ./references/chevron-toggle.md
- For DatePickerPopup logic, see the skill in ./references/date-picker-popup.md
- For Dialog/Modal patterns, see the skill in ./references/dialog.md
- For InputField composition, see the skill in ./references/input-field.md
- For OverflowList behavior, see the skill in ./references/overflow-list.md
- For Select and Dropdown components, see the skill in ./references/select.md
- For VerticalOverflowList, see the skill in ./references/vertical-overflow-list.md

## Sub-components

- **Action**: See ./references/action.md
- **ButtonCopy**: See ./references/buttoncopy.md
- **Card**: See ./references/card.md
- **ChevronToggle**: See ./references/chevrontoggle.md
- **DatePickerPopup**: See ./references/datepickerpopup.md
- **Dialog**: See ./references/dialog.md
- **InputField**: See ./references/inputfield.md
- **OverflowList**: See ./references/overflowlist.md
- **Select**: See ./references/select.md
- **VerticalOverflowList**: See ./references/verticaloverflowlist.md