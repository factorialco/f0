# GridStack

GridStack is a layout utility designed for creating interactive, dashboard-style interfaces. It enables a grid-based system where sub-components (widgets) can be dragged, dropped, and resized dynamically. Use this component when building customizable user workspaces, analytics dashboards, or any interface requiring persistent, user-defined layouts.

## Usage

### Basic Implementation
GridStack manages a collection of widgets. It is essential to provide a state-managed array of widgets and a handler for layout changes to ensure the UI stays in sync with the underlying data.

```tsx
import React, { useState } from 'react';
import { GridStack, GridStackReactWidget } from './GridStack';

const Dashboard = () => {
  const [layout, setLayout] = useState<GridStackReactWidget[]>([
    { id: 'widget-1', x: 0, y: 0, w: 4, h: 2, content: <div>Widget 1</div> },
    { id: 'widget-2', x: 4, y: 0, w: 4, h: 4, content: <div>Widget 2</div> },
  ]);

  const handleLayoutChange = (newLayout: GridStackReactWidget[]) => {
    console.log('New layout positions:', newLayout);
    setLayout(newLayout);
  };

  return (
    <div style={{ width: '100%' }}>
      <GridStack 
        widgets={layout} 
        onLayoutChange={handleLayoutChange}
        column={12}
        cellHeight="100px"
      />
    </div>
  );
};
```

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `widgets` | `GridStackReactWidget[]` | Yes | - | An array of widget objects defining the initial positions, sizes, and content. |
| `onLayoutChange` | `(widgets: GridStackReactWidget[]) => void` | Yes | - | Callback function triggered whenever a widget is moved or resized. Use this to persist layout state. |
| `column` | `number` | No | `12` | The number of columns in the grid system. |
| `cellHeight` | `string \| number` | No | `'auto'` | The height of a single grid row. Can be a pixel value or 'auto'. |
| `margin` | `number` | No | `10` | The gap between widgets in pixels. |
| `float` | `boolean` | No | `false` | If true, widgets will not automatically "gravity" to the top of the grid. |
| `disableDrag` | `boolean` | No | `false` | Prevents users from moving widgets. |
| `disableResize` | `boolean` | No | `false` | Prevents users from resizing widgets. |

## Best Practices

- **Unique IDs**: Ensure every widget in the `widgets` array has a unique `id`. GridStack uses these IDs to track elements during DOM manipulation.
- **Persistence**: Always use the `onLayoutChange` callback to save the new coordinates (`x`, `y`) and dimensions (`w`, `h`) to a backend or local storage to preserve the user's configuration.
- **Container Width**: GridStack relies on the width of its parent container to calculate column spans. Ensure the parent has a defined width.
- **Performance**: Avoid putting heavy logic inside the `onLayoutChange` callback. If you need to perform expensive operations (like API calls), debounce the handler.

## Accessibility

- GridStack interactions are primarily mouse-driven (drag-and-drop). 
- When implementing widgets, ensure they contain focusable elements that are reachable via keyboard.
- Provide an alternative "Move Up/Down" or "Settings" menu within individual widgets for users who cannot use drag-and-drop interfaces.