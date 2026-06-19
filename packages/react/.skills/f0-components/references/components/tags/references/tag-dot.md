## TagDot

A simple tag featuring a colored dot and a label. Use this for categorizing items, labeling types, or grouping content.

**Props:**
- `label`: `string` (Required) - The category name.
- `color`: `string` (Optional) - A CSS color value or theme color key for the dot.

```tsx
import { TagDot } from '@ui/tags';

export const CategoryTags = () => (
  <>
    <TagDot label="Engineering" color="blue" />
    <TagDot label="Marketing" color="purple" />
  </>
);
```

**Gotchas:**
- **Do not use for statuses.** For lifecycle states (e.g., "Pending", "Active"), use `TagStatus` instead. See `./tag-status/SKILL.md`.