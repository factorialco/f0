## WidgetSimpleList

A basic list container for `WidgetSimpleListItem` components, used for simple text-based data.

**Props:**
- `children`: ReactNode - A collection of `WidgetSimpleListItem` components.

```tsx
import { Widget, WidgetSimpleList, WidgetSimpleListItem } from '@components/widgets';

const SimpleInfo = () => (
  <Widget title="Quick Links">
    <WidgetSimpleList>
      <WidgetSimpleListItem title="Policy Handbook" />
      <WidgetSimpleListItem title="Contact Support" />
    </WidgetSimpleList>
  </Widget>
);
```