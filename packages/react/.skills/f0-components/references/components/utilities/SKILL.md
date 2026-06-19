---
name: grid-stack-layout
description: A utility component for creating interactive, draggable, and resizable grid layouts. Use when building dashboards, portals, or customizable interfaces where users need to arrange and resize content blocks.
---

## Overview
The `GridStack` component is a React wrapper for creating dynamic grid layouts. It allows users to drag, drop, and resize widgets within a defined grid system, making it ideal for administrative dashboards and personalizable workspaces.

## Props
- **options** (required): `GridStackReactOptions` - Configuration object for the GridStack instance, controlling behavior like cell height, margins, and static vs. dynamic grids.
- **widgets** (required): `GridStackReactNode[]` - An array of widget definitions containing positioning data (x, y), dimensions (w, h), and the React content to render.
- **className** (optional): `string` - Standard CSS class string applied to the outer grid container.
- **onChange** (optional): `(widgets: GridStackReactWidget[]) => void` - Callback function triggered whenever a widget is moved or resized, providing the updated layout state.

## Usage Example
```tsx
import React from 'react';
import { GridStack } from './GridStack';

const DashboardLayout = () => {
  const gridOptions = {
    cellHeight: 150,
    margin: 10,
    draggable: { handle: '.drag-handle' }
  };

  const initialWidgets = [
    { id: '1', x: 0, y: 0, w: 4, h: 2, content: <div className="drag-handle">Header Widget</div> },
    { id: '2', x: 4, y: 0, w: 2, h: 4, content: <div>Sidebar Widget</div> }
  ];

  const handleLayoutChange = (updatedWidgets) => {
    // Persist layout changes to a database or state
    console.log('New layout:', updatedWidgets);
  };

  return (
    <GridStack
      options={gridOptions}
      widgets={initialWidgets}
      onChange={handleLayoutChange}
      className="my-custom-dashboard"
    />
  );
};
```

## Best Practices
- **Persistence**: Always use the `onChange` callback to save the layout state. GridStack is often used in contexts where users expect their layout customizations to persist across sessions.
- **Unique IDs**: Ensure every widget in the `widgets` array has a unique identifier to prevent rendering issues during layout updates.
- **Responsive Design**: Use the `options` prop to define column counts for different breakpoints if the layout needs to adapt to mobile screens.
- **Drag Handles**: For complex widgets, use a specific "drag handle" class in the options to prevent accidental drags when users interact with buttons or inputs inside the widget.



## Sub-components

- **GridStack**: See ./references/gridstack.md

## Related Skills

- For **GridStack**, see ./references/gridstack.md