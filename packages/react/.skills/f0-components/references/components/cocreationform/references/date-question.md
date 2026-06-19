## DateQuestion

`DateQuestion` provides a standardized interface for date selection. Use this when users need to provide specific calendar dates, such as deadlines or project start dates.

**Props:**
- `label`: `string` (Required) - The question text.
- `value`: `string | Date` (Optional) - The current date value.
- `onChange`: `(date: Date) => void` (Required) - Callback when a date is selected.
- `minDate`: `Date` (Optional) - The earliest selectable date.
- `maxDate`: `Date` (Optional) - The latest selectable date.
- `placeholder`: `string` (Optional) - Hint text shown when no date is selected.

```tsx
import { DateQuestion } from '@sds/co-creation-form';

<DateQuestion 
  label="When should this task be completed?"
  value={new Date()}
  onChange={(date) => handleDateChange(date)}
  minDate={new Date()}
/>
```

**Gotchas:**
- Ensure the date format (ISO vs. Locale) matches what your backend expects.
- For range selection, see the skill in ./date-range-picker/SKILL.md.