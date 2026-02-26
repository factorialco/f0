## AvatarPerson

`AvatarPerson` is the standard component for representing individual users. It supports profile images, initials, and status badges.

**Props:**
- `firstName`: (Required) User's first name.
- `lastName`: (Required) User's last name.
- `src`: (Optional) URL for the profile image.
- `isDeactivated`: (Optional) Boolean. If true, applies a grayscale filter or visual indicator that the user is inactive.
- `badge`: (Optional) A `ReactNode` to display as a status badge.
- `badgeTooltip`: (Optional) String text to show when hovering over the badge.
- `size`: ('xs' | 'sm' | 'md' | 'lg' | 'xl') The size of the avatar.

```tsx
import { AvatarPerson } from '@components/avatars';

const ActiveUser = () => (
  <AvatarPerson 
    firstName="John" 
    lastName="Smith" 
    src="/users/jsmith.jpg" 
    size="md"
  />
);

const InactiveUser = () => (
  <AvatarPerson 
    firstName="Jane" 
    lastName="Doe" 
    isDeactivated={true}
  />
);
```