## WidgetInboxListItem

An individual item within a `WidgetInboxList`, featuring a title and a subtitle.

**Props:**
- `title`: string (Required) - The main task or notification text.
- `subtitle`: string - Supporting details or metadata.
- `module`: string - Optional category or module name.
- `onClick`: () => void - Click handler.

```tsx
import { WidgetInboxListItem } from '@components/widgets';

const Task = () => (
  <WidgetInboxListItem 
    title="Submit Expenses" 
    subtitle="Due by Friday" 
    module="Finance"
    onClick={() => navigate('/expenses')}
  />
);
```