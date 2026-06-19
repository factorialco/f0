## ActivityItem

ActivityItem represents a single entry within an Activity feed. It is used to display specific details about an event, including a title, a descriptive body, and metadata such as category and timestamp.

**Props:**
- `title`: `string` (Required) - The primary headline of the activity.
- `description`: `ReactNode` (Required) - Detailed text or elements explaining the activity.
- `category`: `string` (Required) - The functional area (e.g., "Payroll", "Documents").
- `timestamp`: `string | Date` (Required) - When the activity occurred.
- `isSkeleton`: `boolean` (Optional) - If true, renders a placeholder skeleton for loading states. Default: `false`.
- `status`: `'success' | 'warning' | 'error' | 'info'` (Optional) - Visual indicator for the item's state.

```tsx
import { ActivityItem } from '@sds/inbox';

const MyItem = () => (
  <ActivityItem
    title="Time off Approved"
    description="René Galindo from Human Resources has reviewed and approved your time off request for 15 days."
    category="Time off"
    timestamp="May 6th, 2025 at 2:00 AM"
    status="success"
  />
);
```

**Edge Cases & Gotchas:**
- **Long Descriptions:** Descriptions are not automatically truncated. If you expect very long text, wrap the description in a container with overflow handling.
- **Timestamp Formatting:** The component expects a pre-formatted string or a Date object; it does not perform complex localization internally.