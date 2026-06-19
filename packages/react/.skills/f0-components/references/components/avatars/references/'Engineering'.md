## Avatar

The `Avatar` component is a polymorphic wrapper designed to display person, team, or company avatars dynamically. Use this when the type of entity being displayed is variable or determined at runtime by data.

**Props:**
- `avatar`: (Required) An object containing the configuration. Must include a `type` property ('person' | 'team' | 'company') and the corresponding data for that type.
- `size`: ('xs' | 'sm' | 'md' | 'lg' | 'xl') The size of the avatar. Defaults to 'md'.
- `badge`: (ReactNode) An optional badge to display on the bottom-right of the avatar.

```tsx
import { Avatar } from '@components/avatars';

// Example: Rendering a Person Avatar via the polymorphic component
const UserAvatar = () => (
  <Avatar 
    avatar={{
      type: 'person',
      firstName: 'Jane',
      lastName: 'Doe',
      src: 'https://example.com/photo.jpg'
    }} 
    size="lg"
  />
);

// Example: Rendering a Team Avatar
const GroupAvatar = () => (
  <Avatar 
    avatar={{
      type: 'team',
      name: 'Engineering'
    }} 
  />
);
```

**Notes:**
- The component automatically handles the logic for which sub-component to render.
- For specific implementations, see the skills for `avatar-person`, `avatar-team`, or `avatar-company`.