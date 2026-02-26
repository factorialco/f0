## TagPerson

Displays an individual person, including their name and an optional avatar image. Use this for assignees, authors, or user references.

**Props:**
- `name`: `string` (Required) - The person's display name.
- `imageUrl`: `string` (Optional) - URL for the user's avatar.
- `isDeactivated`: `boolean` (Optional) - If true, applies a visual style indicating the user is no longer active.

```tsx
import { TagPerson } from '@ui/tags';

export const UserReference = () => (
  <TagPerson 
    name="Sarah Connor" 
    imageUrl="/avatars/sarah.jpg" 
  />
);

export const InactiveUser = () => (
  <TagPerson 
    name="Terminator T-800" 
    isDeactivated 
  />
);
```