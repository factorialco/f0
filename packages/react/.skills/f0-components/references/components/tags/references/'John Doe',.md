## Tag (Router)

The `F0Tag` component is a top-level router that dynamically renders specific tag types based on a provided configuration object. Use this when the tag type is determined by data at runtime or when building generic lists that contain mixed tag types.

**Props:**
- `tag`: `TagVariant` (Required) - A discriminated union object where the `type` property determines which sub-component is rendered.
- `className`: `string` (Optional) - Additional CSS classes for the container.

**TagVariant Types:**
- `type: 'person'` -> Renders `TagPerson`
- `type: 'team'` -> Renders `TagTeam`
- `type: 'company'` -> Renders `TagCompany`
- `type: 'status'` -> Renders `TagStatus`
- `type: 'alert'` -> Renders `TagAlert`
- `type: 'balance'` -> Renders `TagBalance`
- `type: 'dot'` -> Renders `TagDot`
- `type: 'raw'` -> Renders `TagRaw`

```tsx
import { F0Tag } from '@ui/tags';

// Rendering a person tag via the router
const UserTag = () => (
  <F0Tag 
    tag={{ 
      type: 'person', 
      name: 'John Doe', 
      imageUrl: '/avatars/john.png' 
    }} 
  />
);

// Rendering a status tag via the router
const StatusTag = () => (
  <F0Tag 
    tag={{ 
      type: 'status', 
      label: 'In Progress', 
      severity: 'info' 
    }} 
  />
);
```

**Gotchas:**
- Ensure the `tag` object matches the specific interface required for that `type`.
- For specific implementations, see the individual skills: `./tag-person/SKILL.md`, `./tag-status/SKILL.md`, etc.