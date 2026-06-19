---
name: input
description: Versatile input component for text, numbers, search, and long-form text. Use for user data entry, forms, and search interfaces with support for validation states, icons, and debouncing.
---
## Overview
The Input component is a foundational UI element that handles various types of user data entry. It includes specialized variants for text, numeric values, search queries, and multi-line text (TextArea).

## Props
- **clearable** (optional): `boolean` - Displays a reset button to clear the input value when it has content.
- **debounceTime** (optional): `number` - Delay in milliseconds before triggering `onChange` to prevent repeated calls during rapid typing.
- **disabled** (optional): `boolean` - Disables user interaction and applies disabled styling.
- **error** (optional): `string` - Error message displayed below the input; shorthand for setting status to 'error'.
- **hint** (optional): `string` - Informational text displayed below the input; overwritten by error status.
- **icon** (optional): `enum` - Icon to display inside the input (automatically becomes a lock icon for password types).
- **label** (optional): `string` - Text label for the input field.
- **locale** (optional): `string` - Locale string for formatting numeric values.
- **maxDecimals** (optional): `number` - Maximum number of decimal places allowed for numeric inputs.
- **placeholder** (optional): `string` - Placeholder text displayed when the input is empty.
- **size** (optional): `enum` - The vertical size of the input (e.g., 'sm', 'md').
- **status** (optional): `enum` - Defines the validation state ('error', 'warning', 'info', 'default') and associated message.
- **threshold** (optional): `number` - Minimum number of characters required before the `onChange` event is fired.
- **type** (optional): `string` - The HTML input type (e.g., 'text', 'password', 'file', 'number').
- **units** (optional): `string` - Unit label appended to the end of the input value (e.g., 'kg', '%').
- **value** (optional): `string | number` - The current value of the input.

## Usage Examples

### Basic Text Input
```tsx
import { Input } from '@your-library/input';

export const BasicExample = () => (
  <Input 
    type="text"
    label="Username"
    placeholder="Enter your username"
    hint="Must be at least 5 characters"
  />
);
```

### Numeric Input with Units
```tsx
<Input 
  type="number"
  label="Weight"
  units="kg"
  maxDecimals={2}
  placeholder="0.00"
/>
```

### Search with Debounce
```tsx
<Input 
  type="search"
  placeholder="Search products..."
  clearable
  debounceTime={300}
  threshold={3}
  onChange={(e) => handleSearch(e.target.value)}
/>
```

### TextArea for Long Content
```tsx
<Input 
  type="textarea"
  label="Description"
  placeholder="Tell us more..."
  maxLength={500}
/>
```

## Variants

### Text
The default variant. Supports standard HTML types like `password` (which automatically toggles a lock icon) and `file`.

### Number
Specialized for numeric data. Use `maxDecimals` to control precision and `units` to provide context for the value.

### Search
Styled specifically for search bars. Use `debounceTime` to optimize API calls and `threshold` to prevent searching for very short strings.

### TextArea
Used for multi-line text input. It inherits standard input features like labels, hints, and error states.

## Best Practices
- **Labeling**: Always provide a `label` for accessibility. If the design requires no visible label, use the "Hidden Label" pattern to ensure screen readers can still identify the field.
- **Validation**: Use the `error` prop to provide immediate feedback. The `error` state will override any `hint` text provided.
- **Debouncing**: Use `debounceTime` for search inputs or any field that triggers expensive operations (like API requests) on change.
- **Clearable**: Enable `clearable` for search fields or optional inputs to improve user experience.

## Related Skills
- For icon selection and usage, see the skill in ./references/icon.md
- For form layout and validation patterns, see the skill in ./references/form.md
- For specific numeric formatting logic, see the skill in ./references/utils-format.md

## Sub-components

- **Number**: See ./references/number.md
- **Search**: See ./references/search.md
- **Text**: See ./references/text.md
- **TextArea**: See ./references/textarea.md