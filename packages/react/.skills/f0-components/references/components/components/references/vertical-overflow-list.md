## VerticalOverflowList

Similar to OverflowList, but manages items in a vertical stack. It is useful for sidebars or menus where the height of the container is constrained.

**Props:**
- `items`: `T[]` (Required) - Data items.
- `renderListItem`: `(item: T, index: number, isVisible?: boolean) => ReactNode` - Renderer for items.
- `gap`: `number` - Spacing between items in pixels.
- `className`: `string` - Container styling.

```tsx
import { VerticalOverflowList } from './vertical-overflow-list';

export const SidebarMenu = ({ navItems }) => (
  <div style={{ height: '300px' }}>
    <VerticalOverflowList
      items={navItems}
      gap={8}
      renderListItem={(item) => <nav-link>{item.label}</nav-link>}
    />
  </div>
);
```

**Gotchas:**
- The `isVisible` parameter in `renderListItem` is used by the component to measure items in a hidden container before displaying them. Do not use it to conditionally hide elements yourself.
- Ensure the parent has a fixed height or `max-height` for the overflow logic to trigger.