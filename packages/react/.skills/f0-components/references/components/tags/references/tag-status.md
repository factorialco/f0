## TagStatus

A tag specifically designed to represent the lifecycle or state of an object. It uses semantic colors to convey meaning.

**Props:**
- `label`: `string` (Required) - The status text (e.g., "Active", "Archived").
- `severity`: `'neutral' | 'info' | 'positive' | 'warning' | 'critical'` (Required) - Determines the color.
- `accessibilityLabel`: `string` (Optional) - Screen reader text. Use this if the visual label is ambiguous or if you need to provide extra context (e.g., for tooltips).

```tsx
import { TagStatus } from '@ui/tags';

export const StatusList = () => (
  <>
    <TagStatus severity="positive" label="Completed" />
    <TagStatus severity="neutral" label="Draft" />
    <TagStatus severity="critical" label="Overdue" />
  </>
);
```

**Gotchas:**
- **Accessibility:** If the status is clarified by a tooltip for sighted users, ensure that same information is passed to `accessibilityLabel` for screen readers.
- For system alerts or notifications, use `TagAlert` instead. See `./tag-alert/SKILL.md`.