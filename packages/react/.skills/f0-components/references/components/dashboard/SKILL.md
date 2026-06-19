---
name: dashboard
description: A responsive grid layout for displaying and editing widgets. Use for analytical dashboards or customizable home screens requiring dependency-aware updates and drag-and-drop layout management.
---

# Dashboard

The `Dashboard` component provides a flexible grid system for organizing and managing widgets. It acts as a high-level layout wrapper that handles widget positioning, responsiveness, and data dependency synchronization. It is primarily used to create interactive interfaces where users can view or arrange multiple data visualizations and tools.

## Props

- **widgets** (required): `Optional<Widget, "x" | "y">[]` - An array of widget objects to be rendered in the grid.
- **deps** (optional): `Record<string, any>` - Current values for dependencies. When this changes, widgets with matching dependency keys in their configuration will have their content updated automatically.
- **editMode** (optional): `boolean` - When true, enables the grid's interactive features allowing widgets to be moved or resized.
- **main** (optional): `boolean` - If true, the dashboard will attempt to take the full height of the page.
- **onChange** (optional): `(widgets: Widget[]) => void` - Callback function called whenever the layout changes (e.g., after a drag or resize operation).
- **WidgetWrapper** (optional): `(children: React.ReactNode, meta: Widget["meta"], editMode: boolean) => React.ReactElement` - A custom component used to wrap individual widgets, providing control over the widget frame and metadata display.

## Usage Example

```tsx
import { Dashboard } from './Dashboard';
import { useState } from 'react';

const AnalyticsDashboard = () => {
  const [layout, setLayout] = useState(initialWidgets);
  const [dataContext, setDataContext] = useState({ userId: '123', theme: 'dark' });

  return (
    <Dashboard
      widgets={layout}
      deps={dataContext}
      editMode={false}
      main={true}
      onChange={(newLayout) => setLayout(newLayout)}
    />
  );
};
```

## Key Features

### Dependency Injection
The `deps` prop allows the Dashboard to synchronize data across multiple widgets. Widgets reference dependencies by key names. When the `deps` object is updated at the Dashboard level, only the widgets that list those specific keys in their own configuration will trigger a content update.

### Layout Persistence
Use the `onChange` callback to capture the updated positions (`x`, `y`) and dimensions (`w`, `h`) of widgets. This data should typically be saved to a backend or local storage to persist the user's customized layout.

### Main Content Layout
Setting the `main` prop to `true` is recommended when the Dashboard is the primary feature of a page, ensuring it utilizes the available vertical viewport space effectively.

## Best Practices
- **Unique Keys**: Ensure every widget has a unique identifier to prevent rendering issues during layout changes.
- **Edit Mode Toggle**: Provide a clear UI toggle for `editMode` so users don't accidentally move widgets while interacting with widget content.
- **Performance**: Keep the `deps` object flat where possible to ensure efficient change detection.

## Related Skills
- For the underlying grid system, see the skill in ./references/group-grid.md
- For Widget configuration and metadata structures, see the skill in ./references/widget.md