## TagTeam

Displays a team or group entity, consisting of the team name and an optional group image/icon.

**Props:**
- `name`: `string` (Required) - The name of the team.
- `imageUrl`: `string` (Optional) - URL for the team's avatar or group icon.

```tsx
import { TagTeam } from '@ui/tags';

export const TeamDisplay = () => (
  <TagTeam 
    name="Frontend Core" 
    imageUrl="/teams/frontend.png" 
  />
);
```