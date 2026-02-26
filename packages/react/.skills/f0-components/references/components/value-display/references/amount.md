## Amount

The Amount component renders monetary values with consistent currency formatting. It automatically right-aligns when used within table visualizations to follow financial UI best practices.

**Props:**
- `value`: `number | null` (Required) - The numeric amount to display.
- `currency`: `string` (Optional) - The currency symbol or code (e.g., '$', 'EUR').
- `currencyPosition`: `'prefix' | 'suffix'` (Default: 'prefix') - Where to place the currency symbol.
- `decimalPlaces`: `number` (Default: 2) - Number of digits after the decimal point.
- `placeholder`: `string` (Optional) - Text to show if the value is null or undefined.

```tsx
<ValueDisplay 
  type="amount" 
  value={{ 
    value: 1250.5, 
    currency: '€', 
    currencyPosition: 'suffix',
    decimalPlaces: 2 
  }} 
/>
```

**Gotchas:**
- For non-monetary numbers, use the `Number` component to avoid unnecessary currency formatting logic.
- If `value` is null, the component will render the `placeholder` or a default empty state.