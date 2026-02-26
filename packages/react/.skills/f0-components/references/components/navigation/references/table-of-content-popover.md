## TableOfContentPopover

Inspired by Notion's navigation, this component displays as minimized bars that expand into a full Table of Contents on hover or click. It is perfect for saving horizontal space while keeping navigation accessible.

**Props:**
- `items`: `TOCItem[]` (Required) - The same data structure used by `TableOfContent`.
- `title`: `string` - Optional header text for the expanded popover.
- `size`: `'sm' | 'md' | 'lg'` - Controls the maximum height of the popover (sm: 240px, lg: 600px).
- `align`: `'left' | 'right'` - Determines which side the bars appear on and where the popover anchors.
- `dark`: `boolean` - Uses a light-colored bar variant for visibility on dark backgrounds.

**Usage Example:**
```tsx
import { TableOfContentPopover } from '@f1/navigation';

const FloatingNav = () => (
  <TableOfContentPopover 
    items={myItems} 
    title="Course Modules" 
    size="lg" 
    collapsible 
  />
);
```

**Edge Cases & Gotchas:**
- The popover uses `TableOfContent` internally. For the full list of item properties, see the skill in ./table-of-content/SKILL.md.