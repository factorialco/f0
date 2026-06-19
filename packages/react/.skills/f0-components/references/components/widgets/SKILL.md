---
name: widgets
description: A comprehensive suite of card-based components for building dashboards and data overviews. Use to display structured information, charts, lists, and status indicators in a consistent grid or strip layout.
---
## Overview
Widgets are modular components designed to display information in a structured card format. They provide a clear and concise overview of data and are typically used within layout containers like Dashboards or horizontal strips.

## Props
- **title** (required): `string` - The main heading of the widget.
- **description** (required): `string` - Supporting text or summary information.
- **isPending** (required): `boolean` - Indicates if the widget is in a loading state.
- **color** (required): `string` - The primary accent color for the widget.
- **id** (required): `string | number` - Unique identifier for the widget instance.
- **count** (required): `number` - Numerical value often used for badges or summaries.
- **avatars** (required): `AvatarProps[]` - Array of avatar data for list items.
- **events** (required): `CalendarEventProps[]` - Array of events for calendar-type widgets.
- **icon** (required): `React.ComponentType` - Icon component to be rendered.
- **items** (required): `IndicatorProps[]` - List of indicator items for the widget content.
- **list** (required): `TwoColumnsItemType[]` - Data for two-column list layouts.
- **widgetWidth** (optional): `"sm" | "md" | "lg"` - The width variant of the widget (default: "sm").
- **buttonLabel** (optional): `string` - Text for the primary action button.
- **buttonAction** (optional): `() => void` - Callback function for the action button.
- **chart** (optional): `object` - Configuration object for chart data and display.
- **gap** (optional): `number` - Spacing between internal elements (default: 8).
- **noBackground** (optional): `boolean` - If true, removes the default card background and shadow.
- **titleTooltip** (optional): `{ label?: string, description: string }` - Configuration for a tooltip on the title.
- **showAllItems** (optional): `boolean` - Whether to expand and show all items in a list.

## Usage Examples

### Basic Information Widget
```tsx
import { Widget } from '@components/widgets';
import { InfoIcon } from '@icons';

const MyWidget = () => (
  <Widget
    title="Performance Overview"
    subtitle="Q3 Metrics"
    icon={InfoIcon}
    color="#3B82F6"
    isPending={false}
  >
    <p>Content goes here...</p>
  </Widget>
);
```

### Widget with Action
```tsx
<Widget
  title="Wellness Programs"
  description="Boosting workplace health"
  buttonLabel="View All"
  buttonAction={() => handleNavigate()}
  color="green"
/>
```

## Layout Containers
Widgets should be placed within specific containers to manage spacing and responsiveness:

1.  **Dashboard**: A grid-based container for multiple widgets of variable heights.
2.  **WidgetStrip**: A horizontal list that enables scrolling when content overflows the screen.

For Dashboard layouts, see the skill in ./references/layout.md
For Horizontal strips, see the skill in ./references/layout.md

## Variants

### Charts
Specialized widgets for data visualization including Area, Bar, Line, Pie, and Radial Progress charts.
For Chart implementations, see the skill in ./references/charts.md

### Lists
- **WidgetInboxList**: Used for notification or message-style items.
- **WidgetSimpleList**: A clean, text-based list for simple data points.
- **WidgetAvatarsListItem**: List items that feature user avatars prominently.

### Empty States
Used when a widget has no data to display, providing context and potential actions to the user.
For EmptyState patterns, see the skill in ./references/empty-state.md

## Best Practices
- **Loading States**: Always use `Widget.Skeleton` when `isPending` is true to maintain layout stability.
- **Conciseness**: Keep descriptions short. If more detail is needed, use the `titleTooltip` prop.
- **Consistency**: Use the `color` prop to align the widget with the specific module or data type it represents (e.g., green for success/growth, red for alerts).
- **Actions**: Use `buttonLabel` and `buttonAction` for primary interactions rather than wrapping the whole widget in a link when possible.

## Accessibility
- Ensure `title` and `description` provide enough context for screen readers.
- When using `onClick` handlers on list items, ensure they are keyboard navigable.
- Tooltips must be accessible via hover and focus states.

## Sub-components

- **Charts**: See ./references/charts.md
- **Content**: See ./references/content.md
- **EmptyState**: See ./references/emptystate.md
- **Layout**: See ./references/layout.md
- **Widget**: See ./references/widget.md
- **WidgetAvatarsListItem**: See ./references/widgetavatarslistitem.md
- **WidgetEmptyState**: See ./references/widgetemptystate.md
- **WidgetHighlightButton**: See ./references/widgethighlightbutton.md
- **WidgetInboxList**: See ./references/widgetinboxlist.md
- **WidgetInboxListItem**: See ./references/widgetinboxlistitem.md
- **WidgetSection**: See ./references/widgetsection.md
- **WidgetSimpleList**: See ./references/widgetsimplelist.md
- **WidgetSimpleListItem**: See ./references/widgetsimplelistitem.md