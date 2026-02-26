---
name: widget
description: A versatile container for dashboard modules. Use when building layouts requiring titled sections with optional actions, AI triggers, selection states, or drag-and-drop functionality.

---

## Overview
The `Widget` component is a foundational UI element for dashboards and grid-based layouts. It provides a consistent header structure with a title and supports various interactive features like dropdown actions, AI-specific triggers, and drag-and-drop states.

## Props
- **children** (required): `ReactNode` - The main content to be rendered inside the widget body.
- **title** (required): `string` - The heading text displayed in the widget header.
- **actions** (optional): `DropdownItem[]` - An array of items to populate a dropdown menu in the header.
- **AIButton** (optional): `() => void` - Callback function triggered when the specialized AI action button is clicked.
- **draggable** (optional): `boolean` - Enables the drag-and-drop capability for the widget. Default: `false`.
- **isDragging** (optional): `boolean` - Controls the visual state indicating the widget is currently being moved. Default: `false`.
- **onDragEnd** (optional): `() => void` - Event handler fired when a drag operation completes.
- **onDragStart** (optional): `() => void` - Event handler fired when a drag operation begins.
- **selected** (optional): `boolean` - Applies a highlighted visual state to indicate the widget is active or chosen. Default: `false`.

## Usage Examples

### Basic Widget
Use for simple content containment with a title.
```tsx
import { Widget } from './Widget';

const MyWidget = () => (
  <Widget title="System Overview">
    <p>All systems operational.</p>
  </Widget>
);
```

### Interactive Widget with AI and Actions
Use for complex modules requiring user interaction and AI integration.
```tsx
import { Widget } from './Widget';

const AnalyticsWidget = () => {
  const handleAI = () => console.log("Generating insights...");
  
  const menuActions = [
    { label: 'Export PDF', onClick: () => {} },
    { label: 'Share', onClick: () => {} }
  ];

  return (
    <Widget 
      title="Revenue Analytics" 
      AIButton={handleAI}
      actions={menuActions}
    >
      <ChartComponent />
    </Widget>
  );
};
```

## Variants
- **Default**: A standard, non-interactive container with a title.
- **Interactive**: Configured with drag-and-drop handlers for layout customization.
- **With AI Button**: Includes a dedicated entry point for AI-driven workflows.
- **With Actions**: Features a dropdown menu for secondary commands.
- **Selected**: Provides visual feedback for active or multi-select states.
- **Skeleton**: A placeholder state used during data fetching or initial load.

## Related Skills
- For `DropdownItem` configuration and menu patterns, see the skill in ./references/dropdown.md.
- For layout grid implementations using draggable widgets, see the skill in ./references/dashboard-grid.md.

## Best Practices
- **Titles**: Keep titles concise. If a title is long, the component will handle overflow, but readability may suffer.
- **AI Integration**: Use the `AIButton` prop specifically for generative or analytical AI features to maintain consistent iconography.
- **Selection**: Use the `selected` state to indicate focus in a multi-widget environment, such as when a user is configuring specific widget settings.