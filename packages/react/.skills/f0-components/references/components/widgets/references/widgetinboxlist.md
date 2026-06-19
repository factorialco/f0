## WidgetInboxList

A container for `WidgetInboxListItem` components, optimized for displaying tasks, notifications, or messages.

**Props:**
- `children`: ReactNode - A collection of `WidgetInboxListItem` components.

```tsx
import { Widget, WidgetInboxList, WidgetInboxListItem } from '@components/widgets';

const MyInbox = () => (
  <Widget title="Tasks">
    <WidgetInboxList>
      <WidgetInboxListItem title="Review PR" subtitle="Repository: core-ui" />
      <WidgetInboxListItem title="Meeting" subtitle="Starts in 10 mins" />
    </WidgetInboxList>
  </Widget>
);
```