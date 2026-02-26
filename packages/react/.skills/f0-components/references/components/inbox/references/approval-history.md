## ApprovalHistory

ApprovalHistory provides a visual timeline of the approval process for a specific request. Use this component to show users the current status of a workflow, who has interacted with it, and any comments left by approvers. It is essential for transparency in HR, Finance, or Administrative workflows.

**Props:**
- `entries`: `ApprovalEntry[]` (Required) - An array of objects representing the history steps.
  - `entries[].approverName`: `string` - Name of the person acting on the request.
  - `entries[].role`: `string` - Job title or department of the approver.
  - `entries[].status`: `'approved' | 'rejected' | 'waiting' | 'pending'` - The action taken.
  - `entries[].timestamp`: `string` - When the action occurred.
  - `entries[].comment`: `string` (Optional) - Feedback provided by the approver.
- `title`: `string` (Optional) - Header text for the section. Default: "Approval history".

```tsx
import { ApprovalHistory } from '@sds/inbox';

const HistoryView = () => {
  const history = [
    {
      approverName: "René Galindo",
      role: "Human Resources",
      status: "approved",
      timestamp: "May 6th, 2025",
      comment: "All documents are in order."
    },
    {
      approverName: "Sarah Chen",
      role: "Department Manager",
      status: "waiting",
      timestamp: "Pending"
    }
  ];

  return <ApprovalHistory entries={history} title="Request Progress" />;
};
```

**Edge Cases & Gotchas:**
- **Single vs. Multiple:** The component adjusts its layout automatically based on the number of entries. A single entry may appear as a status badge, while multiple entries form a vertical timeline.
- **Rejected State:** If an entry has a `rejected` status, the component typically highlights this in red to draw immediate attention to the workflow stoppage.
- **Waiting State:** Use the `waiting` status for future steps in the workflow that have not yet been reached.