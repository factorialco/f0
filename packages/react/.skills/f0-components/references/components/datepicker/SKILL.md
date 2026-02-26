---
name: datepicker
description: A versatile date and range picker supporting multiple granularities (day, week, month, etc.). Use when users need to select specific dates or time ranges for filtering or data entry. Avoid for simple text-based date input where a native browser picker suffices.
---

## Overview
The `DatePicker` component allows users to select a range of time based on a specific granularity. When a user selects an item (e.g., a specific day), the component automatically calculates the range from the start of that period (00:00:00) to the end (23:59:59).

### Value Structure
The component uses a specific object structure for its `value` and `defaultValue` props:
```typescript
type DatePickerValue = {
  value: {
    from: Date;
    to: Date;
  };
  granularity: 'day' | 'week' | 'month' | 'quarter' | 'halfyear' | 'year' | 'range';
};
```

## Props
- **clearable** (optional): `boolean` - Whether to show a clear button to reset the selection.
- **disabled** (optional): `boolean` - Whether the input field is disabled.
- **error** (optional): `string | string[] | boolean` - Error message(s) to display.
- **granularities** (optional): `string[]` - The granularities available for selection (default: `['day']`).
- **hideLabel** (optional): `boolean` - Whether to hide the label visually while keeping it accessible.
- **hint** (optional): `string` - Hint text displayed below the input field.
- **label** (optional): `string` - Label text for the input field (required for accessibility).
- **labelIcon** (optional): `ReactElement` - Icon to display next to the label.
- **onChange** (optional): `(value: DatePickerValue) => void` - Function called when the selected date or granularity changes.
- **onOpenChange** (optional): `(open: boolean) => void` - Function called when the date picker popover is opened or closed.
- **open** (optional): `boolean` - Controlled state for whether the date picker is open (default: `false`).
- **placeholder** (optional): `string` - Placeholder text for the input field.
- **presets** (optional): `Array<{ label: string, value: DatePickerValue }>` - Predefined ranges for quick selection.
- **readonly** (optional): `boolean` - Whether the input field is in a readonly state.
- **required** (optional): `boolean` - Whether the input field is required for form submission.
- **size** (optional): `'sm' | 'md'` - Size variant of the input field.
- **status** (optional): `{ type: 'error' | 'warning' | 'info', message: string }` - Status object for validation feedback.
- **value** (optional): `string | Date | DatePickerValue` - The current value. Dates or strings are automatically converted to a 'day' granularity object.

## Usage Examples

### Basic Date Selection
```tsx
import { DatePicker } from '@your-library/datepicker';

const MyComponent = () => (
  <DatePicker
    label="Select Date"
    granularities={['day']}
    onChange={(val) => console.log('Selected:', val)}
  />
);
```

### Month and Year Selection
```tsx
<DatePicker
  label="Reporting Period"
  granularities={['month', 'year']}
  defaultValue={{
    value: { from: new Date(2023, 0, 1), to: new Date(2023, 0, 31) },
    granularity: 'month'
  }}
/>
```

### With Presets and Range
```tsx
const presets = [
  {
    label: 'Last 7 Days',
    value: {
      value: { from: subDays(new Date(), 7), to: new Date() },
      granularity: 'range'
    }
  }
];

<DatePicker
  label="Date Range"
  granularities={['day', 'range']}
  presets={presets}
  clearable
/>
```

## Best Practices
- **Accessibility**: Always provide a `label`. If the design requires no visible label, use `hideLabel` to ensure screen readers can still identify the field.
- **Granularity Selection**: Only enable granularities that make sense for the data being filtered (e.g., don't enable 'quarter' if the data is only updated monthly).
- **Validation**: Use the `status` prop to provide contextual feedback (info, warning, or error) rather than just the `error` boolean for better user guidance.

## Related Skills
- For icon components used in `labelIcon`, see the skill in ./references/icons.md
- For form layout patterns, see the skill in ./references/form-layout.md