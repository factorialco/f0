## PrivateBox

The `PrivateBox` is a specialized container used to wrap sensitive information that is only visible to the profile owner or authorized administrators. It provides a visual cue (often a lock icon or specific background) to indicate that the content is not public.

**Props:**
- `children`: `ReactNode` (Required) - The sensitive content to be displayed inside the box.
- `label`: `string` (Optional) - Text displayed next to the privacy icon (e.g., "Private to you").
- `testID`: `string` (Optional) - Identifier for automated testing.

**Usage Example:**
```tsx
import { PrivateBox } from '@sds/profile';
import { Text } from '@sds/core';

const ContactInfo = () => (
  <PrivateBox label="Only you can see this">
    <Text>Email: user@example.com</Text>
    <Text>Phone: +1 (555) 000-0000</Text>
  </PrivateBox>
);
```

**Gotchas:**
- This component only provides a visual UI wrapper. It does not handle the underlying logic for data fetching permissions or server-side security.
- Ensure that the `PrivateBox` is not used for non-sensitive information to avoid confusing the user about their privacy settings.