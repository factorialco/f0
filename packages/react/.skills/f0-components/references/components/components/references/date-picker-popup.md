## DatePickerPopup

An internal component used to render the date selection interface. It supports complex range selection across multiple granularities (day, week, month, quarter, half-year, year).

**Props:**
- `value`: `{ value: { from: Date, to: Date }, granularity: string }` - The current selection.
- `defaultValue`: Same shape as `value`.
- `granularities`: `string[]` - List of allowed granularities (e.g., `['day', 'month', 'year']`).
- `presets`: `Array<{ label: string, range: { from: Date, to: Date } }>` - Quick-select ranges.
- `minDate`: `Date` - The earliest selectable date.
- `maxDate`: `Date` - The latest selectable date.
- `hideGoToCurrent`: `boolean` - Hides the "Today" or "Current" jump button.

```tsx
import { DatePickerPopup } from './date-picker-popup';

export const DateSelection = () => (
  <DatePickerPopup 
    granularities={['day', 'week', 'month']}
    value={{
      value: { from: new Date(2023, 0, 1), to: new Date(2023, 0, 31) },
      granularity: 'month'
    }}
    onChange={(val) => console.log('New Range:', val)}
  />
);
```

**Gotchas:**
- This is a "popup" content component; it does not include the trigger/input field. For a full implementation, see the DateNavigator skill.
- Selecting a granularity like 'month' automatically sets the `from` to the start of the month and `to` to the end of the month.