## OverflowList

A responsive horizontal list component that automatically moves items into a dropdown menu when they exceed the available container width.

**Props:**
- `items`: `T[]` (Required) - The array of data items to display.
- `renderListItem`: `(item: T) => ReactNode` - How to render items in the visible list.
- `renderDropdownItem`: `(item: T) => ReactNode` - How to render items inside the overflow dropdown.
- `renderOverflowIndicator`: `(overflowCount: number) => ReactNode` - Custom trigger for the overflow menu.
- `itemWidths`: `number[]` - Optional pre-calculated widths to optimize performance and prevent layout shift.

```tsx
import { OverflowList } from './overflow-list';

const tags = ['React', 'TypeScript', 'Tailwind', 'Storybook', 'Vite', 'Jest'];

export const TagList = () => (
  <OverflowList
    items={tags}
    renderListItem={(tag) => <span className="tag-pill">{tag}</span>}
    renderDropdownItem={(tag) => <button>{tag}</button>}
    renderOverflowIndicator={(count) => <span>+{count} more</span>}
  />
);
```

**Gotchas:**
- The component relies on ResizeObserver. Ensure the parent container has a defined width (not `width: auto` based on content).
- If items have dynamic widths (e.g., loading images), the calculation might trigger multiple times.