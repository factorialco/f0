## Widget

The fundamental card container for dashboard information. It provides a consistent frame with support for headers, footers, and various metadata states.

**Props:**
- `title`: string (Required) - The main header text.
- `subtitle`: string - Secondary header text.
- `icon`: ReactNode - Icon displayed next to the title.
- `link`: { href: string, label: string } - Adds a call-to-action link in the header.
- `info`: string - Tooltip or info text accessible via an info icon.
- `action`: ReactNode - Custom action component (e.g., a button) in the header.
- `status`: 'success' | 'warning' | 'error' - Displays a status indicator.
- `isCritical`: boolean - Applies a critical alert styling to the widget.
- `isLoading`: boolean - Renders the `Widget.Skeleton` state.
- `fullHeight`: boolean - Forces the widget to take up the full height of its container.

```tsx
import { Widget } from '@components/widgets';

const WellnessWidget = () => (
  <Widget 
    title="Wellness programs" 
    subtitle="Boosting workplace health"
    link={{ href: '/wellness', label: 'View all' }}
    status="success"
  >
    <p>Content goes here...</p>
  </Widget>
);
```

**Best Practices:**
- Use `Widget.Skeleton` for loading states to prevent layout shift.
- For grouping content inside the body, see the WidgetSection skill in ./widgetsection/SKILL.md.