## Icon

The `Icon` component is a primitive wrapper used throughout the sidebar to ensure consistent sizing, alignment, and coloring of SVG or font-based icons.

**Props:**
- `name`: `string | IconType` - The identifier for the icon to be rendered.
- `size`: `'sm' | 'md' | 'lg' | number` - Predefined or custom pixel size (default: `'md'`).
- `color`: `string` - CSS color value or theme-specific color key.
- `className`: `string` (optional) - Additional CSS classes for custom styling.

```tsx
import { Icon } from './Sidebar/Icon';

const StatusIcon = () => (
  <Icon 
    name="check-circle" 
    size="sm" 
    color="var(--green-500)" 
  />
);
```

**Edge Cases & Gotchas:**
- Ensure the `name` prop matches the keys in your icon library mapping.
- If using custom SVGs as children, the `name` prop may be ignored depending on the implementation.