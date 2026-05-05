## Description

Empty state with optional emoji, title, description and action buttons. Use when a list/page has no content.

## Example

```tsx
<OneEmptyState
  emoji="📭"
  title="No requests yet"
  description="When teammates request time off, they'll appear here."
  actions={[{ label: "Request time off", onClick: () => {} }]}
/>
```
