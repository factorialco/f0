## Long Text

The Long Text component handles multi-line text content with automatic truncation and tooltip support. By default, it truncates after 3 lines.

**Props:**
- `value`: `string` (Required) - The text content.
- `lines`: `number` (Default: 3) - Number of lines to show before truncating.
- `full`: `boolean` (Default: false) - If true, disables truncation and shows the entire text.
- `placeholder`: `string` (Optional) - Text to show if the value is empty.

```tsx
<ValueDisplay 
  type="longText" 
  value={{ 
    value: 'This is a very long description that will likely exceed three lines of text in a standard container...',
    lines: 2
  }} 
/>
```

**Gotchas:**
- Truncation requires the container to have a defined width.
- The tooltip showing the full text appears automatically on hover when the text is truncated.