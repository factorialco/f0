## Status

The Status component renders a status tag with specific color variants to indicate the state of an item (e.g., "In Progress", "Completed").

**Props:**
- `label`: `string` (Required) - The status text.
- `variant`: `'neutral' | 'primary' | 'success' | 'warning' | 'error'` (Default: 'neutral') - The visual style/color of the status tag.

```tsx
<ValueDisplay 
  type="status" 
  value={{ 
    label: 'Approved', 
    variant: 'success' 
  }} 
/>
```

**Gotchas:**
- Use `variant` semantically: 'success' for positive outcomes, 'error' for failures, etc.