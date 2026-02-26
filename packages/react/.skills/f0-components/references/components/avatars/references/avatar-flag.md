## AvatarFlag

`AvatarFlag` displays a country flag. Use this for localization settings, user nationality, or regional data.

**Props:**
- `countryCode`: (Required) The ISO 3166-1 alpha-2 country code (e.g., 'US', 'FR', 'JP').
- `badge`: (Optional) A `ReactNode` (usually an `AvatarModule`) to display as a badge.
- `size`: ('xs' | 'sm' | 'md') The size of the flag avatar.

```tsx
import { AvatarFlag } from '@components/avatars';

const UserRegion = () => (
  <AvatarFlag countryCode="US" size="sm" />
);
```