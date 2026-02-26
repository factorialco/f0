---
name: scroll-area
description: A custom-styled scrollable container component. Use when you need consistent cross-browser scrollbars, horizontal/vertical overflow management, or callbacks for reaching the top or bottom of a list (e.g., infinite scrolling).
---

## Overview
The `ScrollArea` component provides a wrapper for content that exceeds its container dimensions. It supports custom scrollbar visibility and provides lifecycle hooks for scroll position events, making it ideal for chat windows, sidebars, and data lists.

## Props
- **onScrollBottom** (optional): `() => void` - Callback function triggered when the user scrolls to the bottom of the area.
- **onScrollTop** (optional): `() => void` - Callback function triggered when the user scrolls to the top of the area.
- **scrollMargin** (optional): `number` - The threshold margin (in pixels) used to trigger top/bottom scroll callbacks. Default: `0`.
- **showBar** (optional): `boolean` - Determines whether the custom scrollbar is visible. Default: `true`.
- **viewportRef** (optional): `ReactRefObject` - A React ref object attached to the internal scrollable viewport element.

## Usage Examples

### Basic Vertical Scroll
Use for standard overflowing content with a fixed height.
```tsx
import { ScrollArea } from './ScrollArea';

export const BasicExample = () => (
  <ScrollArea style={{ height: '300px' }}>
    <div style={{ padding: '20px' }}>
      {/* Large amount of content */}
    </div>
  </ScrollArea>
);
```

### Infinite Loading Pattern
Use `onScrollBottom` to trigger data fetching when the user reaches the end of the list.
```tsx
import { ScrollArea } from './ScrollArea';

export const InfiniteScroll = ({ loadMore, items }) => (
  <ScrollArea 
    style={{ height: '500px' }} 
    onScrollBottom={loadMore}
    scrollMargin={50}
  >
    {items.map(item => <div key={item.id}>{item.label}</div>)}
  </ScrollArea>
);
```

### Horizontal and Bidirectional Scrolling
The component automatically handles horizontal overflow if the child content is wider than the container.
```tsx
import { ScrollArea } from './ScrollArea';

export const BidirectionalScroll = () => (
  <ScrollArea style={{ height: '300px', width: '300px' }}>
    <div style={{ width: '600px', height: '600px' }}>
      Wide and Tall Content
    </div>
  </ScrollArea>
);
```

## Variants
- **Default**: Standard vertical scrollbar behavior.
- **Horizontal**: Specifically configured for X-axis overflow.
- **Both**: Enables both vertical and horizontal scrollbars simultaneously.
- **Comparison**: Used to test the custom scrollbar against native browser implementations.

## Best Practices
- **Fixed Dimensions**: Ensure the `ScrollArea` or its parent has a defined `height` (for vertical) or `width` (for horizontal) to enable scrolling.
- **Scroll Margin**: Use `scrollMargin` to trigger `onScrollBottom` slightly before the user reaches the absolute end to create a smoother "infinite scroll" experience.
- **Ref Access**: Use `viewportRef` if you need to manually manipulate scroll position (e.g., `scrollTo`) or measure the scrollable area.