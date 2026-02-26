## AvatarAlert

`AvatarAlert` is a specialized avatar used to display system alerts, statuses, or notifications. It uses specific icons and semantic colors (red, yellow, green, blue) to convey meaning.

**Props:**
- `type`: (Required) 'success' | 'warning' | 'error' | 'info'. Determines the icon and background color.
- `size`: ('xs' | 'sm' | 'md' | 'lg') The size of the alert avatar.

```tsx
import { AvatarAlert } from '@components/avatars';

const ErrorState = () => (
  <AvatarAlert type="error" size="md" />
);

const SuccessState = () => (
  <AvatarAlert type="success" size="md" />
);
```

**Edge Cases:**
- Ensure the `type` matches the semantic meaning of the UI state to maintain accessibility standards.