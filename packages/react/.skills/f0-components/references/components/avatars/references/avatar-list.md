## AvatarList

`AvatarList` displays a horizontal stack of avatars of the same type. It handles overflow automatically by showing a "+N" count.

**Props:**
- `items`: (Required) An array of avatar data objects.
- `max`: (Optional) The maximum number of avatars to display before truncating.
- `size`: ('xs' | 'sm' | 'md') The size of all avatars in the list.
- `type`: ('person' | 'team' | 'company') The type of avatars in the list.

```tsx
import { AvatarList } from '@components/avatars';

const TeamMembers = () => (
  <AvatarList 
    type="person"
    max={3}
    items={[
      { firstName: 'Alice', lastName: 'A' },
      { firstName: 'Bob', lastName: 'B' },
      { firstName: 'Charlie', lastName: 'C' },
      { firstName: 'David', lastName: 'D' },
    ]}
  />
);
```

**Notes:**
- When `items.length > max`, the component renders the remaining count as a final avatar circle.