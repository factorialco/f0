## ProgressBar

The ProgressBar component visualizes completion or progress toward a goal using a horizontal bar.

**Props:**
- `value`: `number` (Required) - Current progress value.
- `max`: `number` (Default: 100) - The value representing 100% completion.
- `color`: `string` (Optional) - Custom color for the progress fill.
- `label`: `string` (Optional) - Text to display (e.g., "75%").
- `placeholder`: `string` (Optional) - Text for null values.

```tsx
<ValueDisplay 
  type="progressBar" 
  value={{ 
    value: 45, 
    max: 100, 
    color: '#3b82f6',
    label: '45%' 
  }} 
/>
```

**Gotchas:**
- If `value` exceeds `max`, the bar will typically stay at 100% width unless specific "overflow" styling is applied.