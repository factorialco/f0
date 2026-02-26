---
name: select
description: A versatile dropdown component for single or multiple selection. Supports virtualization for large datasets, search, pagination, and custom triggers. Use when users need to choose from a predefined list of items.
---

## Overview
The `Select` component provides a robust interface for picking items from a list. It is optimized for performance using virtualization, making it suitable for lists with thousands of items. It supports both single and multiple selection, as well as a static "list" mode.

## Props
- **actions** (optional): `Action[]` - List of action buttons (label, onClick, icon, variant) displayed at the bottom of the dropdown.
- **asList** (optional): `boolean` - When true, renders as a static list without the input trigger.
- **children** (optional): `React.ReactNode` - Custom trigger content that replaces the default input field.
- **className** (optional): `string` - Additional CSS classes for the container.
- **clearable** (optional): `boolean` - Whether the selected value can be cleared via an icon.
- **defaultItem** (optional): `any` - Initial item selected when the component mounts.
- **disabled** (optional): `boolean` - Disables the select and prevents interaction.
- **error** (optional): `string` - Error message to display below the select (shortcut for status 'error').
- **hideLabel** (optional): `boolean` - Visually hides the label while keeping it accessible to screen readers.
- **hint** (optional): `string` - Helper text displayed below the select.
- **icon** (optional): `IconType` - Icon to display inside the select input trigger.
- **label** (optional): `string` - Label for the select component.
- **labelIcon** (optional): `IconType` - Icon to display next to the label.
- **loading** (optional): `boolean` - Displays a loading state and disables the component.
- **onChange** (optional): `(value: any, item?: any) => void` - Callback triggered when the selection changes.
- **onOpenChange** (optional): `(open: boolean) => void` - Callback triggered when the dropdown opens or closes.
- **onSearchChange** (optional): `(value: string) => void` - Callback triggered when the search input value changes.
- **open** (optional): `boolean` - Controlled open state of the dropdown.
- **options** (optional): `SelectItemObject[] | 'separator'[]` - Array of options to display.
- **placeholder** (optional): `string` - Placeholder text for the input trigger.
- **searchBoxPlaceholder** (optional): `string` - Placeholder for the internal search input.
- **searchEmptyMessage** (optional): `string` - Message shown when no search results are found.
- **showSearchBox** (optional): `boolean` - Enables a search input within the dropdown to filter items.
- **size** (optional): `'sm' | 'md'` - The vertical size of the select trigger (default: 'sm').
- **status** (optional): `{ type: 'error' | 'warning' | 'info' | 'default', message?: string }` - Validation status.
- **value** (optional): `any` - Controlled value of the select.

## Usage Examples

### Basic Single Select
```tsx
import { Select } from './components/Select';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

export const MyComponent = () => (
  <Select 
    label="Choose an option"
    options={options}
    onChange={(val) => console.log(val)}
  />
);
```

### Searchable Multiple Select
```tsx
<Select 
  label="Select Team Members"
  multiple
  showSearchBox
  searchBoxPlaceholder="Search names..."
  options={users}
  onChange={(values) => console.log(values)}
/>
```

### Custom Trigger
```tsx
<Select options={options}>
  <button className="custom-btn">
    Click to Open
  </button>
</Select>
```

## Variants

### Static List (`asList`)
Use `asList={true}` to render the dropdown content directly on the page without a trigger button. This is useful for sidebars or persistent selection panels.

### Status States
- **Error**: Use the `error` prop or `status={{ type: 'error', message: 'Required' }}` to indicate validation failure.
- **Warning/Info**: Use the `status` prop to provide contextual feedback without blocking submission.

### Sizes
- **sm**: Standard compact size (default).
- **md**: Larger touch-friendly size for prominent forms.

## Best Practices
- **Large Lists**: Always use the `options` prop for large datasets; the component handles virtualization automatically.
- **Search**: Enable `showSearchBox` whenever the list exceeds 10 items to improve user experience.
- **Clearable**: Use `clearable` for optional fields to allow users to reset their selection easily.
- **Actions**: Use the `actions` prop to add "Add New" or "Manage" buttons at the bottom of the list.

## Related Skills
- For icon usage within the select, see the skill in ./references/icon.md
- For button variants used in actions, see the skill in ./references/button.md
- For form layout and field grouping, see the skill in ./references/form-field.md