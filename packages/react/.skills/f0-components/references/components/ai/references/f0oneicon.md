## F0OneIcon

A unified icon component for the AI interface, supporting various sizes, animations, and background styles.

**Props:**
- `name`: `string` (Required) - The name of the icon from the SDS library.
- `size`: `'xs' | 'sm' | 'md' | 'lg' | 'xl'` (Default: `'md'`) - Icon dimensions.
- `spin`: `boolean` (Default: `false`) - Applies a continuous rotation animation.
- `hover`: `boolean` (Default: `false`) - Enables hover effects.
- `withBackground`: `boolean` (Default: `false`) - Wraps the icon in a styled circular background.

```tsx
import { F0OneIcon } from '@sds/ai';

const StatusIcons = () => (
  <>
    <F0OneIcon name="check" size="lg" withBackground />
    <F0OneIcon name="loader" spin />
    <F0OneIcon name="settings" hover />
  </>
);
```

**Edge Cases & Gotchas:**
- Use `spin` only for loading or processing states to avoid distracting the user.