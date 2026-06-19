## Tag List

The Tag List component renders multiple tags with automatic overflow handling. It ensures that a large number of tags don't break the UI layout.

**Props:**
- `tags`: `Array<{ label: string, icon?: string }>` (Required) - Array of tag objects.
- `max`: `number` (Optional) - Maximum number of tags to show before truncating with a "+X" indicator.

```tsx
const categories = [
  { label: 'SaaS' },
  { label: 'B2B' },
  { label: 'Finance' },
  { label: 'Tech' }
];

<ValueDisplay 
  type="tagList" 
  value={{ tags: categories, max: 2 }} 
/>
```

**Gotchas:**
- The "+X" indicator usually shows a tooltip with the remaining tags when hovered.