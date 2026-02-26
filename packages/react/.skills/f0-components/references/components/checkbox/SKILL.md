---
name: checkbox
description: Use to allow users to select one or more options from a list. Trigger when building forms, settings pages, or bulk action interfaces where multiple selections are valid.
---

## Overview
The Checkbox component is a standard form element used for multiple-choice selections. It supports checked, unchecked, and indeterminate states, as well as a disabled state for read-only or unavailable options.

## Props
- **checked** (optional): `boolean | 'indeterminate'` - The current checked state of the checkbox.
- **data-test** (optional): `string` - Identifier used for automated testing purposes.
- **disabled** (optional): `boolean` - Prevents user interaction when set to true. Default: `false`.
- **id** (optional): `string` - The unique identifier for the element, essential for linking with labels.
- **indeterminate** (optional): `boolean` - Visual state indicating a partial or mixed selection of child elements. Default: `false`.
- **onCheckedChange** (optional): `(checked: boolean | 'indeterminate') => void` - Callback function triggered when the checkbox state changes.
- **title** (optional): `string` - Text used for the accessible name or tooltip of the checkbox.
- **value** (optional): `string` - The value attribute used during form submission.

## Usage Examples

### Basic Implementation
```tsx
import { Checkbox } from './checkbox';

export const BasicExample = () => (
  <div className="flex items-center gap-2">
    <Checkbox 
      id="terms" 
      onCheckedChange={(checked) => console.log(checked)} 
    />
    <label htmlFor="terms">Accept terms and conditions</label>
  </div>
);
```

### Indeterminate State
Use the `indeterminate` prop when the checkbox represents a group of child options where only some are selected.

```tsx
<Checkbox indeterminate={true} title="Select all" />
```

### Disabled State
```tsx
<Checkbox disabled checked title="Always active but locked" />
```

## Best Practices
- **Labeling**: Always pair a checkbox with a visible label. Use the `id` prop on the Checkbox and the `htmlFor` attribute on the label to ensure accessibility.
- **Grouping**: When presenting a list of related options, group them logically under a common fieldset or heading.
- **State Management**: Use `onCheckedChange` to sync the component state with your application's state management or form library.
- **Vs. Switch**: Use a Checkbox for selections within a form that require a "Submit" action. Use a Switch for settings that take effect immediately.

## Related Skills
- For Label components, see the skill in ./references/label.md
- For Form field layouts, see the skill in ./references/form-field.md
- For Switch components (binary toggles), see the skill in ./references/switch.md