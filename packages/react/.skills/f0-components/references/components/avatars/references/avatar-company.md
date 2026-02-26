## AvatarCompany

`AvatarCompany` is used to represent organizations or corporate entities. It typically uses a square or slightly rounded shape compared to the circular person avatar.

**Props:**
- `name`: (Required) The name of the company. Used for alt text and generating initials if no image is provided.
- `src`: (Optional) URL for the company logo image.
- `badge`: (Optional) A `ReactNode` (usually an `AvatarModule`) to display as a badge.
- `size`: ('xs' | 'sm' | 'md' | 'lg') The size of the avatar.

```tsx
import { AvatarCompany, AvatarModule } from '@components/avatars';

const CompanyWithLogo = () => (
  <AvatarCompany 
    name="Acme Corp" 
    src="/logos/acme.png" 
  />
);

const CompanyWithBadge = () => (
  <AvatarCompany 
    name="Global Tech" 
    badge={<AvatarModule module="crm" />}
  />
);
```