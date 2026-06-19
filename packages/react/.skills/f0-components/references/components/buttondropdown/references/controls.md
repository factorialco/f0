## Controls

The Controls configuration for the `ButtonDropdown` component defines the interactive behavior, data source, and visual state of the action menu. It is used to manage how the dropdown items are rendered, how selections are handled via callbacks, and how the component reflects global states like loading or disabled.

Use these controls to transform a standard button into a multi-action interface where a primary context is maintained while offering secondary choices.

**Props:**

| Prop | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `items` | `ButtonDropdownItem<T>[]` | Yes | An array of objects representing the options in the dropdown. Each item must contain a `value` of type `T`. |
| `onClick` | `(value: T, item: ButtonDropdownItem<T>) => void` | Yes | The callback function triggered when a user selects an item. It receives the `value` and the full `item` object. |
| `value` | `T` | No | The current value of the button, used to determine the active or selected state within the dropdown. |
| `disabled` | `boolean` | No | When `true`, the button and the dropdown menu are inaccessible to the user. Default: `false`. |
| `loading` | `boolean` | No | When `true`, the component displays a loading spinner and prevents interaction. Default: `false`. |
| `placeholder` | `string` | No | The text displayed on the button when no value is selected or as a default label. Default: `"Choose option..."`. |

**Usage Example:**

```tsx
import { ButtonDropdown, ButtonDropdownItem } from './ButtonDropdown';

// Define the type for the item values
type ActionType = 'save' | 'publish' | 'archive';

const actionItems: ButtonDropdownItem<ActionType>[] = [
  { value: 'save', label: 'Save as Draft' },
  { value: 'publish', label: 'Publish to Production' },
  { value: 'archive', label: 'Archive Project' },
];

export const ActionMenu = () => {
  const handleAction = (value: ActionType, item: ButtonDropdownItem<ActionType>) => {
    console.log(`Executing action: ${item.label} (ID: ${value})`);
  };

  return (
    <ButtonDropdown<ActionType>
      items={actionItems}
      onClick={handleAction}
      placeholder="Select Project Action"
      loading={false}
      disabled={false}
    />
  );
};
```

**Edge Cases & Gotchas:**

- **Generic Type Consistency:** Since `ButtonDropdown` is a generic component (`<T>`), ensure that the type of `value` in your `items` array strictly matches the type expected by the `onClick` handler and the `value` prop.
- **Loading vs. Disabled:** Setting `loading={true}` will automatically prevent the `onClick` callback from firing, even if the user attempts to click the button before the spinner appears.
- **Empty Items:** If the `items` array is empty, the dropdown will still trigger but will display no options. Always ensure `items` is populated or handle the empty state by setting `disabled={true}`.
- **Reference:** For the main component implementation details, see the skill in `./button-dropdown/SKILL.md`.