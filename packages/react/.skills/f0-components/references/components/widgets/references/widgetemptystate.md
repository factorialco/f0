## WidgetEmptyState

A simplified empty state component designed specifically to be placed inside the body of a standard `Widget`.

**Props:**
- `title`: string (Required) - The main message.
- `description`: string - Supporting text providing more context.

```tsx
import { Widget, WidgetEmptyState } from '@components/widgets';

const InboxWidget = ({ items }) => (
  <Widget title="Inbox">
    {items.length === 0 ? (
      <WidgetEmptyState 
        title="No new messages" 
        description="You're all caught up for today!" 
      />
    ) : (
      <List items={items} />
    )}
  </Widget>
);
```