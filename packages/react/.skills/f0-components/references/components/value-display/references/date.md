## Date

The Date component provides standardized formatting for date objects or date strings. It ensures dates are presented consistently across the application.

**Props:**
- `value`: `Date | string | number` (Required) - The date value to format.
- `format`: `string` (Optional) - The desired format string (e.g., 'DD/MM/YYYY').
- `placeholder`: `string` (Optional) - Text to show if the date is invalid or missing.

```tsx
<ValueDisplay 
  type="date" 
  value={{ 
    value: '2023-12-25T00:00:00Z',
    format: 'MMM D, YYYY' 
  }} 
/>
```

**Gotchas:**
- If passing a string, ensure it is in a standard ISO format to avoid cross-browser parsing issues.
- Use the `placeholder` prop to handle "N/A" or "Pending" states for empty dates.