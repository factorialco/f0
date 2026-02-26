## AvatarIcon

`AvatarIcon` wraps a standard icon in an avatar container. Use this for generic actions, categories, or when no specific entity image is available.

**Props:**
- `icon`: (Required) The icon component or element to render.
- `size`: ('xs' | 'sm' | 'md' | 'lg') The size of the avatar.
- `variant`: ('circle' | 'square') The shape of the container.

```tsx
import { AvatarIcon } from '@components/avatars';
import { SettingsIcon } from '@icons';

const SettingsAvatar = () => (
  <AvatarIcon icon={<SettingsIcon />} size="md" />
);
```