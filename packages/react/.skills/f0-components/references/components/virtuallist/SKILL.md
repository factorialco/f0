---
name: virtual-list
description: High-performance list component for rendering large datasets by only mounting visible items. Use for lists with 100+ items to maintain 60fps scrolling and reduce memory usage.
---

## Overview
The `VirtualList` component optimizes the rendering of long lists by only rendering the items currently within the viewport. This significantly reduces the number of DOM nodes and improves scroll performance in data-heavy applications.

## Props
- **height** (optional): `number` - The total height of the list container in pixels.
- **itemSize** (optional): `number` - The fixed height of each individual item in the list in pixels.

## Usage Examples

### Basic Implementation
```tsx
import { VirtualList } from './VirtualList';

const MyLargeList = ({ data }) => {
  return (
    <VirtualList height={600} itemSize={50}>
      {data.map((item) => (
        <div key={item.id} style={{ height: 50 }}>
          {item.name}
        </div>
      ))}
    </VirtualList>
  );
};
```

## Best Practices
- **Fixed Item Heights**: Ensure that the `itemSize` prop matches the actual CSS height of the items being rendered to prevent scroll jumping.
- **Container Constraints**: The `VirtualList` usually requires a defined height (via the `height` prop or a parent container) to calculate the visible window correctly.
- **Key Stability**: Always provide stable `key` props to list items to ensure React can efficiently reconcile the virtualized elements.

## Related Skills
- For individual list item styling and patterns, see the skill in ./references/list-item.md
- For handling data fetching within lists, see the skill in ./references/use-data-collection.md
- For scroll-to-top or infinite loading patterns, see the skill in ./references/scroll-container.md

## Accessibility
- Ensure that the virtualized container maintains proper ARIA roles (e.g., `role="list"`).
- Be aware that screen readers may only "see" the items currently rendered in the DOM; for critical information, consider providing a "Download All" or "View All" alternative if necessary.