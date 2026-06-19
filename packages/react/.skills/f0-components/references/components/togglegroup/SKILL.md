---
name: toggle-group
description: A container for a set of toggle buttons. Use to group related options where users can select one (radio-style) or multiple (checkbox-style) items. Do not use for simple binary on/off actions; use a single Toggle or Switch instead.
---

## Overview
The `ToggleGroup` component coordinates the state and layout for a collection of toggle items. It is commonly used for toolbars, alignment settings, or filtering interfaces where multiple related options exist.

## Props
- **children** (optional): `React.ReactNode` - The toggle items or elements to be rendered within the group.
- **type** (optional): `'single' | 'multiple'` - Determines if the user can select only one item or multiple items simultaneously.
- **disabled** (optional): `boolean` - When true, disables interaction for all toggle items within the group.
- **value** (optional): `string | string[]` - The controlled value of the active item(s).
- **defaultValue** (optional): `string | string[]` - The initial value of the active item(s) when uncontrolled.
- **onValueChange** (optional): `(value: string | string[]) => void` - Callback function triggered when the selection state changes.

## Usage Examples

### Default (Multiple Selection)
By default, the group allows multiple items to be selected at once.
```tsx
import { ToggleGroup, ToggleItem } from './ToggleGroup';

const TextFormatting = () => (
  <ToggleGroup type="multiple">
    <ToggleItem value="bold" aria-label="Toggle bold">
      Bold
    </ToggleItem>
    <ToggleItem value="italic" aria-label="Toggle italic">
      Italic
    </ToggleItem>
    <ToggleItem value="underline" aria-label="Toggle underline">
      Underline
    </ToggleItem>
  </ToggleGroup>
);
```

### Single Selection
Use `type="single"` for mutually exclusive options, such as text alignment.
```tsx
<ToggleGroup type="single" defaultValue="left">
  <ToggleItem value="left">Left</ToggleItem>
  <ToggleItem value="center">Center</ToggleItem>
  <ToggleItem value="right">Right</ToggleItem>
</ToggleGroup>
```

### Disabled State
Setting the `disabled` prop on the group prevents any interaction with the child items.
```tsx
<ToggleGroup disabled type="single">
  <ToggleItem value="option-1">Option 1</ToggleItem>
  <ToggleItem value="option-2">Option 2</ToggleItem>
</ToggleGroup>
```

### Prefilled (Controlled)
Provide a `value` to control the selection state programmatically.
```tsx
<ToggleGroup type="multiple" value={['option-1', 'option-3']}>
  <ToggleItem value="option-1">Option 1</ToggleItem>
  <ToggleItem value="option-2">Option 2</ToggleItem>
  <ToggleItem value="option-3">Option 3</ToggleItem>
</ToggleGroup>
```

## Best Practices
- **Accessibility**: Always provide an `aria-label` for the `ToggleGroup` if it is not labeled by a visible heading. Ensure individual items have descriptive labels.
- **Exclusivity**: Use `type="single"` when the options are mutually exclusive to mimic radio button behavior.
- **Grouping**: Only group items that are logically related to the same context or action.

## Related Skills
- For individual Toggle items, see the skill in ./references/toggle.md
- For binary on/off switches, see the skill in ./references/switch.md
- For standard radio button groups, see the skill in ./references/radio-group.md