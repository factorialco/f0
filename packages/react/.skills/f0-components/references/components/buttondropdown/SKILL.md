---
name: button-dropdown
description: A button that triggers a dropdown menu of actions or options. Use to group related secondary actions or provide multiple choices when space is limited.
---

# ButtonDropdown

A versatile button component that reveals a list of actionable items or groups when clicked. It combines the visual weight of a button with the selection capabilities of a menu.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items`* | `ButtonDropdownItem[] \| ButtonDropdownGroup \| ButtonDropdownGroup[]` | - | The data structure for menu items or groups. |
| `onClick`* | `(value: string, item: ButtonDropdownItem) => void` | - | Callback triggered when an item is selected. |
| `variant` | `"default" | "primary" | "secondary" | "ghost"` | `"default"` | The visual style of the trigger button. |
| `size` | `"sm" | "md" | "lg"` | `"md"` | The physical size of the button. |
| `value` | `string` | - | The currently selected value (if applicable). |
| `disabled` | `boolean` | `false` | Prevents user interaction. |
| `loading` | `boolean` | `false` | Shows a loading spinner on the button. |
| `tooltip` | `string` | - | Text to display on hover over the trigger button. |

## Usage Examples

### Basic Implementation
```tsx
import { ButtonDropdown } from './ButtonDropdown';

const items = [
  { label: 'Edit', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { label: 'Delete', value: 'delete' },
];

export const ActionMenu = () => (
  <ButtonDropdown
    variant="default"
    items={items}
    onClick={(value) => console.log(`Selected: ${value}`)}
  />
);
```

### Grouped Items with Descriptions
```tsx
const groupedItems = [
  {
    label: 'File Actions',
    items: [
      { label: 'Download', value: 'download', description: 'Save to local disk' },
      { label: 'Share', value: 'share', description: 'Generate public link' },
    ]
  },
  {
    label: 'Danger Zone',
    items: [
      { label: 'Archive', value: 'archive' }
    ]
  }
];

<ButtonDropdown 
  items={groupedItems} 
  onClick={(val) => handleAction(val)} 
/>
```

## Variants and States

- **Loading State**: When `loading` is true, the button becomes disabled and displays a spinner. Use this during async operations triggered by the dropdown.
- **Disabled State**: Use `disabled` when the actions are contextually unavailable to the user.
- **Tooltips**: Use the `tooltip` prop to provide extra context for the trigger button, especially if using an icon-only variant.

## Best Practices

- **Action Grouping**: Use groups (`ButtonDropdownGroup`) to separate destructive actions (like Delete) from standard actions.
- **Labeling**: Ensure item labels are concise and action-oriented (e.g., "Export CSV" instead of "Click here to export").
- **When to use**: Use this when you have 3 or more related actions. If you only have one primary action, use a standard `Button`.
- **When not to use**: Do not use for primary site navigation; use a dedicated Navigation component instead. For simple selection in a form, consider a `Select` component.

## Related Skills
- For standard button interactions without menus, see the skill in `./button/SKILL.md`.
- For form-based selection components, see the skill in `./select/SKILL.md`.