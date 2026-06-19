## WidgetSimpleListItem

A basic list item for use within a `WidgetSimpleList`.

**Props:**
- `title`: string (Required) - The text to display.
- `onClick`: () => void - Optional click handler.

```tsx
import { WidgetSimpleListItem } from '@components/widgets';

const Item = () => (
  <WidgetSimpleListItem 
    title="This is a simple list item" 
    onClick={() => alert('Clicked!')} 
  />
);
```