## Dot Tag

The Dot Tag renders a small colored circle followed by a text label. It is ideal for status indicators or category markers where a full tag background would be too visually heavy.

**Props:**
- `label`: `string` (Required) - The text to display.
- `color`: `string` (Required) - The color of the dot (hex, rgb, or theme variable).
- `tooltip`: `string` (Optional) - Optional tooltip for the entire component.

```tsx
<ValueDisplay 
  type="dotTag" 
  value={{ 
    label: 'Active', 
    color: '#22c55e' 
  }} 
/>
```

**Gotchas:**
- Ensure the color provides enough contrast against the background for accessibility.
- For more prominent status indicators, see the `Status` component.