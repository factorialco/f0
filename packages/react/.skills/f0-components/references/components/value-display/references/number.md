## Number

The Number component renders numeric values with support for units and decimal precision. It right-aligns in table views.

**Props:**
- `value`: `number | null` (Required) - The number to display.
- `units`: `string` (Optional) - Unit label (e.g., 'kg', 'units', 'px').
- `decimalPlaces`: `number` (Optional) - Number of digits after the decimal.
- `placeholder`: `string` (Optional) - Text for null/undefined values.

```tsx
<ValueDisplay 
  type="number" 
  value={{ 
    value: 42.567, 
    units: 'kg', 
    decimalPlaces: 1 
  }} 
/>
```

**Gotchas:**
- For currency, use the `Amount` component instead.
- For percentages, use the `Percentage` component.