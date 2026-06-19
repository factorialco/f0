---
name: counter
description: Displays numeric counts or tallies with optional maximum thresholds. Use for notification badges, item quantities, or status indicators. Do not use for non-numeric data or large labels.
---

# Counter

The `Counter` component is a specialized UI element designed to display numeric values concisely. It is typically used as a badge or an inline indicator to show the number of items, notifications, or pending tasks.

## Props

- **value** (optional): `number` - The numeric value to be displayed within the counter.
- **maxValue** (optional): `object` - Configuration object defining the upper limit and overflow behavior (e.g., displaying "99+" when the value exceeds the limit).
- **size** (optional): `string` - Determines the visual scale of the component (e.g., 'sm', 'md', 'lg').
- **type** (optional): `string` - Defines the semantic style or color variant (e.g., 'primary', 'success', 'danger').

## Usage Examples

### Default Counter
Basic usage for displaying a simple count.

```tsx
import { Counter } from './Counter';

export const BasicExample = () => {
  return <Counter value={12} size="md" type="primary" />;
};
```

### Max Value Handling
Use the `maxValue` prop to handle large numbers that might otherwise break the UI layout.

```tsx
import { Counter } from './Counter';

export const OverflowExample = () => {
  return (
    <Counter 
      value={150} 
      maxValue={{ limit: 99, suffix: '+' }} 
      type="danger" 
    />
  );
};
```

## Variants

### Sizes
The component supports multiple sizes to fit different contexts, such as compact headers or large dashboard cards. Common values include `small`, `medium`, and `large`.

### Types
Types are used to convey semantic meaning:
- **Primary/Info**: General counts or neutral status.
- **Success**: Completed items or positive tallies.
- **Danger/Error**: Alerts, missed notifications, or critical counts.

## Best Practices

- **Truncation**: Always provide a `maxValue` when the counter is placed in a constrained space (like a navigation tab) to prevent layout shifts.
- **Visibility**: Ensure the `type` (color) provides sufficient contrast against its background.
- **Context**: Place the counter in close proximity to the object it is counting to maintain a clear visual relationship.

## Related Skills

- For badge positioning and layout patterns, see the skill in ./references/badge.md
- For button integrations with counters, see the skill in ./references/button.md
- For typography standards used in UI labels, see the skill in ./references/typography.md