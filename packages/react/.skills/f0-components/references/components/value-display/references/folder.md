## Folder

The Folder component renders a folder icon and a name. Use this to represent directories or groupings of items.

**Props:**
- `name`: `string` (Required) - The name of the folder.
- `itemCount`: `number` (Optional) - Optional count of items inside the folder to display.

```tsx
<ValueDisplay 
  type="folder" 
  value={{ name: 'Project Assets' }} 
/>
```

**Gotchas:**
- This is a visual representation only; it does not handle navigation logic.