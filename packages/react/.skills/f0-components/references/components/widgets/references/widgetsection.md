## WidgetSection

A layout utility used to divide the content of a Widget into distinct horizontal sections with optional titles.

**Props:**
- `title`: string - The section heading.
- `children`: ReactNode (Required) - The content of the section.

```tsx
import { Widget, WidgetSection } from '@components/widgets';

const MultiSectionWidget = () => (
  <Widget title="Work Summary">
    <WidgetSection title="Worked Hours">
      <p>40 hours</p>
    </WidgetSection>
    <WidgetSection title="Planned Hours">
      <p>38 hours</p>
    </WidgetSection>
  </Widget>
);
```