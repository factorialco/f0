## Description

Compact chip/tag — exported as `Chip`. Variants are limited to "default" | "selected" only. For semantic status badges (positive, warning, critical), prefer a Tailwind span with `bg-f1-background-{positive,warning,critical}` + `text-f1-foreground-{positive,warning,critical}` classes.

## Example

```tsx
import { Chip } from "@factorialco/f0-react"

<Chip label="Pending" variant="default" />
<Chip label="Selected" variant="selected" onClick={() => {}} />

// For semantic status (paid/pending/etc):
<span className="rounded-full bg-f1-background-positive px-2 py-0.5 text-xs text-f1-foreground-positive">
  Paid
</span>
```
