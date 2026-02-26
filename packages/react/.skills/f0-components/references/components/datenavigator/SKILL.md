---
name: date-navigator
description: Use for selecting and navigating date ranges across different granularities (day, week, month, etc.). Ideal for dashboards, reports, and time-based filtering where users need to move between consecutive time periods.
---

The `DateNavigator` component allows users to select a range of time (start to end datetime) based on specific granularities. It provides built-in navigation for moving to the next or previous period and a "Go to current" shortcut.

## Value Structure

The component uses a specific object shape for its `value` and `defaultValue` props:

```typescript
type DateRangeValue = {
  value: {
    from: Date;
    to: Date;
  };
  granularity: 'day' | 'week' | 'month' | 'quarter' | 'halfyear' | 'year' | 'range';
};
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `DateRangeValue` | `undefined` | The controlled value of the date picker. |
| `onSelect` | `(val: DateRangeValue) => void` | - | Callback triggered when a date or range is selected. |
| `granularities` | `string[]` | `['day']` | Available granularities: `'day'`, `'week'`, `'month'`, `'quarter'`, `'halfyear'`, `'year'`, `'range'`. |
| `presets` | `Preset[]` | `[]` | Predefined ranges (e.g., "Last 7 days", "Last month"). |
| `weekStartsOn` | `0-6` | `1` | First day of the week (0 = Sunday, 1 = Monday). |
| `hideNavigation` | `boolean` | `false` | Hides the previous/next arrow buttons. |
| `hideGoToCurrent`| `boolean` | `false` | Hides the "Today/This Month" shortcut button. |
| `minDate` | `Date` | - | Minimum selectable date. |
| `maxDate` | `Date` | - | Maximum selectable date. |
| `compareTo` | `any` | - | Options for comparison periods. |
| `onCompareToChange`| `function` | - | Callback for comparison selection. |

## Usage Examples

### Basic Day Navigator
```tsx
import { DateNavigator } from '@your-library/date-navigator';

const SimpleExample = () => (
  <DateNavigator
    granularities={['day']}
    onSelect={(val) => console.log('Selected:', val)}
  />
);
```

### Multiple Granularities with Presets
```tsx
const AdvancedExample = () => (
  <DateNavigator
    granularities={['day', 'week', 'month', 'year']}
    presets={[
      { label: 'Last 7 Days', value: 'last_7_days' },
      { label: 'Last Month', value: 'last_month' }
    ]}
    onSelect={(val) => handleDateChange(val)}
  />
);
```

### Comparison Mode
```tsx
<DateNavigator
  value={currentValue}
  compareTo={comparisonOptions}
  onCompareToChange={(compareVal) => handleCompare(compareVal)}
  onSelect={(val) => setCurrentValue(val)}
/>
```

## Best Practices

- **Granularity Selection**: Only enable granularities that make sense for your data. For example, use `'year'` only if you have multi-year historical data.
- **Range Selection**: When a user selects a specific item (e.g., a specific Month), the component automatically sets the `from` to the start of that period (00:00:00) and `to` to the end of that period (23:59:59).
- **Navigation**: Keep `hideNavigation` as `false` (default) when users are expected to browse data chronologically (e.g., checking daily logs or monthly reports).
- **Controlled vs Uncontrolled**: Use the `value` prop for controlled state management. Avoid using the deprecated `defaultValue`.

## Related Skills
- For standard single date selection without range or navigation logic, see the skill in `./date-picker/SKILL.md`.