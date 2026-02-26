## TagList

A layout component that manages a collection of tags. It handles spacing and provides overflow logic (e.g., "+X more") when the number of tags exceeds a limit.

**Props:**
- `tags`: `TagVariant[]` (Required) - An array of tag configurations (see `TagRouter`).
- `max`: `number` (Optional) - The maximum number of tags to display before truncating.
- `size`: `'sm' | 'md'` (Optional) - Size applied to all tags in the list.

```tsx
import { TagList } from '@ui/tags';

const myTags = [
  { type: 'dot', label: 'React', color: 'cyan' },
  { type: 'dot', label: 'TypeScript', color: 'blue' },
  { type: 'dot', label: 'Node.js', color: 'green' },
  { type: 'dot', label: 'GraphQL', color: 'pink' },
];

export const TechStack = () => (
  <TagList 
    tags={myTags} 
    max={2} 
  />
);
```

**Gotchas:**
- All tags in the list should ideally be of the same size for visual consistency.