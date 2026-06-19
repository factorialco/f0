## AvatarFile

`AvatarFile` displays an icon representing a specific file type. Use this in file lists or attachment previews.

**Props:**
- `file`: (Required) An object of type `FileDef` containing `{ name: string, type: string }`. You can pass a standard browser `File` object here.
- `badge`: (Optional) A `ReactNode` to display as a badge.
- `size`: ('sm' | 'md' | 'lg') The size of the icon.

```tsx
import { AvatarFile } from '@components/avatars';

const PDFPreview = () => (
  <AvatarFile 
    file={{ name: 'invoice.pdf', type: 'application/pdf' }} 
    size="md" 
  />
);
```