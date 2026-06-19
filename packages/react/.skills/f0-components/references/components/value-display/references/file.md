## File

The File component renders a file-type icon (based on extension) and the filename. It is used to represent attachments or documents in data lists.

**Props:**
- `name`: `string` (Required) - The name of the file including extension.
- `src`: `string` (Optional) - URL to the file or a thumbnail.
- `type`: `string` (Optional) - Explicit MIME type or category (e.g., 'pdf', 'image').

```tsx
<ValueDisplay 
  type="file" 
  value={{ 
    name: 'invoice_2023.pdf',
    type: 'pdf'
  }} 
/>
```

**Gotchas:**
- The component usually determines the icon automatically from the file extension in the `name` prop if `type` is not provided.