## UpsellRequestResponseDialog

This dialog is used to provide immediate feedback after a user submits an upsell request (e.g., "Request sent" or "Error occurred").

**Props:**
- `type`: `'success' | 'error'` (Required) - Determines the icon and overall styling.
- `title`: `string` (Required) - The feedback headline.
- `description`: `string` (Required) - Detailed feedback message.
- `buttonLabel`: `string` (Optional) - Text for the confirmation button.
- `buttonOnClick`: `() => void` (Optional) - Callback for the confirmation button.

```tsx
import { UpsellRequestResponseDialog } from '@sds/upselling-kit';

export const Example = () => (
  <UpsellRequestResponseDialog
    type="success"
    title="Request Sent"
    description="One of our experts will contact you as soon as possible with all the details."
    buttonLabel="Got it"
    buttonOnClick={() => closeModal()}
  />
);
```

**Gotchas:**
- This component is often triggered by the `onSuccess` or `onError` callbacks of a `ProductModal` or `ProductCard` action.