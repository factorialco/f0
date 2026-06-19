## AvatarModule

`AvatarModule` is a small, specialized avatar used to represent specific software modules or features (e.g., CRM, Billing, Projects). It is often used as a badge on other avatars.

**Props:**
- `module`: (Required) The identifier for the module (e.g., 'crm', 'inventory', 'hr').
- `size`: ('xs' | 'sm' | 'md') The size of the module icon.

```tsx
import { AvatarModule } from '@components/avatars';

const ProjectIcon = () => (
  <AvatarModule module="projects" size="sm" />
);
```