## Text

The Text component is the simplest Value Display type, rendering plain text or numbers. It can be used as a shortcut for basic string display.

**Props:**
- `value`: `string | number | null` (Required) - The content to display.
- `placeholder`: `string` (Optional) - Text to show if the value is empty.

```tsx
// Standard usage
<ValueDisplay 
  type="text" 
  value={{ value: 'Simple text value' }} 
/>

// Shortcut usage (if supported by implementation)
<ValueDisplay type="text" value="Simple text value" />
```

**Gotchas:**
- For long content that needs truncation, use `Long Text` instead.
- For formatted numbers, use `Number`.