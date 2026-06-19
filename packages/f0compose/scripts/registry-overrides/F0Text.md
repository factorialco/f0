## Description

Body text. Pass text via `content` (NOT children). `variant`: "body" | "small" | "label" | "description" | "code" | "inverse". Markdown enabled by default.

## Example

```tsx
<F0Text content="Manage your team's payroll concepts." variant="body" />
<F0Text content="Helper text" variant="small" />
```

## Notes

F0Text uses the `content` prop, never children. Always: `<F0Text content="..." />`.
