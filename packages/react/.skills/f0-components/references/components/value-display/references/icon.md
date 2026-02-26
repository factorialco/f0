## Icon

The Icon component renders a specific icon with an optional label. It supports hiding the label visually while keeping it accessible to screen readers.

**Props:**
- `name`: `string` (Required) - The name of the icon to render.
- `label`: `string` (Required) - The text label associated with the icon.
- `hideLabel`: `boolean` (Default: false) - If true, the label is visually hidden but remains in the DOM for accessibility.
- `tooltip`: `string` (Optional) - Text to show on hover.

```tsx
<ValueDisplay 
  type="icon" 
  value={{ 
    name: 'settings', 
    label: 'Configuration',
    hideLabel: true,
    tooltip: 'Click to configure'
  }} 
/>
```

**Gotchas:**
- Always provide a `label` even if `hideLabel` is true to ensure accessibility (aria-label).