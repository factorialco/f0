## Description

Typographic heading. Pass text via `content` (NOT children). `variant`: "heading" | "heading-large". `as`: "h1"..."h4" for the rendered HTML element.

## Example

```tsx
<F0Heading content="Payroll periods" variant="heading-large" as="h1" />
```

## Notes

F0Heading and F0Text are content-prop based, not children-based. Always: `<F0Heading content="..." />` — never `<F0Heading>...</F0Heading>`.
