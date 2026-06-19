## F0HILActionConfirmation

The Human-In-The-Loop (HIL) component is used when an AI needs explicit user permission before performing a sensitive or destructive action.

**Props:**
- `message`: `string` (Required) - The confirmation question or warning.
- `description`: `string` (Optional) - Additional context explaining the consequences.
- `onConfirm`: `() => void` (Required) - Callback when the user approves.
- `onCancel`: `() => void` (Required) - Callback when the user denies.
- `confirmLabel`: `string` (Default: `'Confirm'`) - Text for the approval button.

```tsx
import { F0HILActionConfirmation } from '@sds/ai';

const DeleteAction = () => (
  <F0HILActionConfirmation
    message="Delete this project?"
    description="This action cannot be undone and will remove all associated tasks."
    onConfirm={() => deleteProject()}
    onCancel={() => closeDialog()}
    confirmLabel="Yes, delete"
  />
);
```

**Edge Cases & Gotchas:**
- Always provide a `description` for high-stakes actions like data deletion or financial transactions.