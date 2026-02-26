## AvatarDate

`AvatarDate` displays a specific date in a compact avatar format. Use this for calendar events, deadlines, or scheduled tasks.

**Props:**
- `date`: (Required) A `Date` object or an ISO string representing the date to display.
- `size`: ('sm' | 'md') The size of the date avatar.

```tsx
import { AvatarDate } from '@components/avatars';

const Deadline = () => (
  <AvatarDate date="2023-12-25" size="md" />
);
```