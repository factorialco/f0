## AvatarPulse

`AvatarPulse` adds an animated "pulse" effect to an avatar. Use this to indicate "live" status, active recording, or to draw immediate attention to an entity.

**Props:**
- `src`: (Optional) URL for the avatar image.
- `isSelected`: (Optional) Boolean. If true, the pulse animation is active.
- `color`: (Optional) The color of the pulse ring.
- `size`: ('sm' | 'md' | 'lg') The size of the avatar.

```tsx
import { AvatarPulse } from '@components/avatars';

const LiveUser = () => (
  <AvatarPulse 
    src="/users/active.jpg" 
    isSelected={true} 
    size="md" 
  />
);
```