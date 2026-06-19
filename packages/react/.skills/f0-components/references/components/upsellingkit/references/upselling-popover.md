## UpsellingPopover

The `UpsellingPopover` provides contextual upselling information when a user interacts with a specific UI element (like a locked feature).

**Props:**
- `trigger`: `ReactNode` (Required) - The element that opens the popover (e.g., a locked icon).
- `title`: `string` (Required) - Popover heading.
- `description`: `string` (Required) - Explanation of why the feature is locked or the benefit of upgrading.
- `action`: `ReactNode` (Optional) - Usually an `UpsellingButton`.

```tsx
import { UpsellingPopover, UpsellingButton } from '@sds/upselling-kit';

export const Example = () => (
  <UpsellingPopover
    trigger={<button>Click me</button>}
    title="Unlock Reports"
    description="Get access to advanced reporting by upgrading your plan."
    action={<UpsellingButton label="View Plans" onClick={() => {}} />}
  />
);
```

**Gotchas:**
- Ensure the trigger is an interactive element (button, link) for accessibility.