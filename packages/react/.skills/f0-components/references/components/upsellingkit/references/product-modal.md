## ProductModal

The `ProductModal` is a comprehensive overlay used to provide deep-dive information about a product. It supports feature lists, success/error states, and primary/secondary actions.

**Props:**
- `isOpen`: `boolean` (Required) - Controls the visibility of the modal.
- `onClose`: `() => void` (Required) - Function called when the modal is dismissed.
- `title`: `string` (Required) - The modal header.
- `description`: `string` (Required) - Detailed product description.
- `primaryAction`: `{ label: string; onClick: () => void; loading?: boolean }` (Optional) - The main CTA.
- `secondaryAction`: `{ label: string; onClick: () => void }` (Optional) - A secondary action, like "Learn More".
- `features`: `{ title: string; items: { text: string; isCompleted?: boolean }[] }` (Optional) - A list of features or checklist items.
- `errorState`: `{ title: string; description: string }` (Optional) - Content to show if an action fails.

```tsx
import { ProductModal } from '@sds/upselling-kit';

export const Example = () => (
  <ProductModal
    isOpen={true}
    onClose={() => setOpen(false)}
    title="Advanced Analytics"
    description="Track usage with real-time insights for better decisions."
    features={{
      title: "What's included",
      items: [
        { text: "Custom dashboards", isCompleted: true },
        { text: "Export to CSV", isCompleted: true }
      ]
    }}
    primaryAction={{
      label: "Upgrade Now",
      onClick: () => handleUpgrade()
    }}
  />
);
```

**Gotchas:**
- When `errorState` is provided, it typically replaces the standard content. Use this to handle API failures during the upsell request.