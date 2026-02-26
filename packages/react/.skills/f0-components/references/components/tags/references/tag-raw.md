## TagRaw

The most basic tag implementation. It can display a label, an icon, or both. Use this for custom tags that don't fit into specific entity or status categories.

**Props:**
- `label`: `string` (Optional) - The text to display.
- `icon`: `ReactNode` (Optional) - An icon to display.
- `onClick`: `() => void` (Optional) - Makes the tag interactive.

```tsx
import { TagRaw } from '@ui/tags';
import { FiHash } from 'react-icons/fi';

export const CustomTags = () => (
  <>
    <TagRaw label="Simple Tag" />
    <TagRaw icon={<FiHash />} label="HashTag" />
    <TagRaw icon={<FiHash />} /> {/* Icon only */}
  </>
);
```