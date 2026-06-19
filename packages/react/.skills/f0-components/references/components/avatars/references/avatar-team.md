## AvatarTeam

`AvatarTeam` is used to represent groups, departments, or teams. It typically uses a distinct shape (often a rounded hexagon or specific border) to differentiate from individual people.

**Props:**
- `name`: (Required) The name of the team.
- `src`: (Optional) URL for the team's group image.
- `badge`: (Optional) A `ReactNode` to display as a badge.
- `size`: ('xs' | 'sm' | 'md' | 'lg') The size of the avatar.

```tsx
import { AvatarTeam } from '@components/avatars';

const EngineeringTeam = () => (
  <AvatarTeam 
    name="Engineering" 
    src="/teams/eng.png" 
    size="lg" 
  />
);
```