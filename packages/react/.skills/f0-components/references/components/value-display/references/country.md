## Country

The Country component renders a country flag avatar followed by the country name. It handles internationalization automatically based on the provided country code.

**Props:**
- `code`: `string` (Required) - ISO 3166-1 alpha-2 country code (e.g., 'US', 'ES', 'FR').
- `label`: `string` (Optional) - Custom label to override the automatic translation of the country name.

```tsx
// Renders Spanish flag and "Spain" (or translated equivalent)
<ValueDisplay 
  type="country" 
  value={{ code: 'ES' }} 
/>

// Renders US flag with custom label
<ValueDisplay 
  type="country" 
  value={{ code: 'US', label: 'United States of America' }} 
/>
```

**Gotchas:**
- Ensure the `code` is a valid 2-letter ISO code; otherwise, the flag may not render correctly.