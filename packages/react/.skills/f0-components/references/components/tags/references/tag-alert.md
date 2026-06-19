## TagAlert

A semantic tag used to display text alerts with an associated icon and color coding based on severity. Use this for inline notifications, validation results, or system messages that require immediate visual distinction.

**Props:**
- `severity`: `'info' | 'warning' | 'critical' | 'positive'` (Required) - Determines the color scheme and icon.
- `label`: `string` (Required) - The text content of the alert.
- `icon`: `ReactNode` (Optional) - Overrides the default severity icon.

```tsx
import { TagAlert } from '@ui/tags';

export const AlertExamples = () => (
  <>
    <TagAlert severity="positive" label="Payment Successful" />
    <TagAlert severity="warning" label="Subscription Expiring" />
    <TagAlert severity="critical" label="Connection Failed" />
  </>
);
```

**Best Practices:**
- Use `positive` for success states.
- Use `critical` for errors or high-risk actions.
- Use `warning` for non-blocking issues that require attention.