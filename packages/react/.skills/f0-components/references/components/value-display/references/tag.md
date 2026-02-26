## Tag

The Tag component renders a standard label tag, optionally with an icon. Use this for general categorization or metadata.

**Props:**
- `label`: `string` (Required) - The tag text.
- `icon`: `string` (Optional) - Icon name to display before the label.
- `variant`: `string` (Optional) - Visual style variant.

```tsx
<ValueDisplay 
  type="tag" 
  value={{ 
    label: 'Marketing', 
    icon: 'bullhorn' 
  }} 
/>
```

**Gotchas:**
- For multiple tags, use the `Tag List` component to handle layout and overflow.