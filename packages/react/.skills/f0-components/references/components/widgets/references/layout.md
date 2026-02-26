## Layout

Container components that manage the arrangement and responsiveness of multiple widgets.

**Sub-components:**
- **Dashboard**: A grid-based container for displaying large amounts of widgets with variable heights.
- **WidgetStrip**: A horizontal container that enables scrolling when widgets exceed the screen width.

**Props (Dashboard):**
- `children`: ReactNode - The widgets to be displayed.
- `isLoading`: boolean - Shows a `Dashboard.Skeleton` when true.
- `size`: 'small' | 'medium' | 'large' - Controls the density of the grid.

**Props (WidgetStrip):**
- `children`: ReactNode - The widgets to be displayed horizontally.
- `isLoading`: boolean - Shows a `WidgetStrip.Skeleton` when true.

```tsx
import { Dashboard, WidgetStrip, Widget } from '@components/widgets';

const Overview = () => (
  <Dashboard>
    <WidgetStrip>
      <Widget title="Metric 1" />
      <Widget title="Metric 2" />
      <Widget title="Metric 3" />
    </WidgetStrip>
    <Widget title="Main Chart" />
  </Dashboard>
);
```