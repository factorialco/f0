---
name: calendar
description: Provide date and range selection across various time scales (day, week, month, quarter, year). Use for scheduling, reporting periods, or date-based filtering.
---

# Calendar

The Calendar component provides a flexible interface for selecting single dates or date ranges across different temporal granularities. It supports multiple views ranging from daily to yearly selections.

## Props

- **mode** (optional): `string` - The selection mode, typically 'single' or 'range'.
- **view** (optional): `string` - The temporal view level (e.g., 'day', 'week', 'month', 'quarter', 'half-year', 'year').
- **weekStartsOn** (optional): `0 | 1 | 2 | 3 | 4 | 5 | 6` - The first day of the week. 0 = Sunday, 1 = Monday, 2 = Tuesday, ..., 6 = Saturday. Default is 1.

## Usage Examples

### Basic Single Day Selection
```tsx
import { Calendar } from './Calendar';

export const SingleDayExample = () => (
  <Calendar 
    view="day" 
    mode="single" 
    weekStartsOn={1} 
  />
);
```

### Month Range Selection
```tsx
import { Calendar } from './Calendar';

export const MonthRangeExample = () => (
  <Calendar 
    view="month" 
    mode="range" 
  />
);
```

### Compact Week Selection
```tsx
import { Calendar } from './Calendar';

export const CompactWeekExample = () => (
  <Calendar 
    view="week" 
    mode="single"
    // Assuming a 'compact' prop or specific class/variant exists based on stories
    className="compact" 
  />
);
```

## Variants and Views

The component adapts its UI based on the `view` prop to allow for different levels of temporal precision:

- **Day**: Standard calendar grid for selecting specific dates.
- **Week**: Highlights and selects a full 7-day period.
- **Month**: Grid of months for selecting a specific month or a range of months.
- **Quarter**: Selects three-month blocks (Q1, Q2, Q3, Q4).
- **Half Year**: Selects six-month blocks (H1, H2).
- **Year**: Grid of years for high-level temporal selection.

### Selection Modes
- **Single**: The user selects one specific unit (one day, one month, etc.).
- **Range**: The user selects a start unit and an end unit to define a period.

## Best Practices

- **Constraints**: Use `min` and `max` date properties (if supported by the implementation) to prevent users from selecting invalid dates, such as future dates for historical reports.
- **Contextual View**: Choose the `view` that matches the data granularity. For example, use `quarter` for financial reporting and `day` for appointment scheduling.
- **First Day of Week**: Ensure `weekStartsOn` is set correctly for the target user's locale (e.g., 0 for US-based users, 1 for most European users).

## Related Skills

- For text input integration and range inputs, see the skill in ./references/input.md
- For popover and dropdown behavior when used as a picker, see the skill in ./references/popover.md
- For date formatting utilities, see the skill in ./references/date-utils.md