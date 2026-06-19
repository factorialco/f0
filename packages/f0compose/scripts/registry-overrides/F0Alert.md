## Description

Inline alert/banner for status messages. Variants: info, warning, critical, positive. Required: `title` and `description` (both strings — no children).

## Example

```tsx
<F0Alert
  variant="warning"
  title="Period locked"
  description="This payroll period is closed and cannot be edited."
/>
```
