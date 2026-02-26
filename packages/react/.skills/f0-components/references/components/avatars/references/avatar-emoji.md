## AvatarEmoji

`AvatarEmoji` displays a single emoji character. Use this for lightweight status indicators, reactions, or category markers.

**Props:**
- `emoji`: (Required) The emoji string to display.
- `size`: ('xs' | 'sm' | 'md' | 'lg') The size of the avatar.

```tsx
import { AvatarEmoji } from '@components/avatars';

const Status = () => (
  <AvatarEmoji emoji="🚀" size="md" />
);
```

**Gotchas:**
- If an invalid or multi-character string is passed to `emoji`, the component may render unexpectedly. Stick to single standard emojis.