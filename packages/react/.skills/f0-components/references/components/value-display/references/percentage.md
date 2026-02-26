## Percentage

The Percentage component renders a numeric percentage value accompanied by a circular chart visualization.

**Props:**
- `value`: `number` (Required) - The percentage value (0 to 100).
- `label`: `string` (Optional) - Custom label to display alongside the chart.
- `placeholder`: `string` (Optional) - Text for null values.

```tsx
<ValueDisplay 
  type="percentage" 
  value={{ 
    value: 75, 
    label: 'Completion Rate' 
  }} 
/>
```

**Gotchas:**
- The component expects a value between 0 and 100. Values outside this range may result in unexpected chart behavior.