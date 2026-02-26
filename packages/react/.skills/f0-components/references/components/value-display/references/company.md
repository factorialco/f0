## Company

The Company component renders a company's avatar/logo alongside its name. It supports a badge system for displaying additional metadata or status indicators.

**Props:**
- `name`: `string` (Required) - The name of the company.
- `src`: `string` (Optional) - URL for the company logo.
- `badge`: `{ label: string, variant?: string }` (Optional) - A small badge to display over or next to the avatar.
- `badgeTooltip`: `string` (Optional) - Tooltip text for the badge.

```tsx
<ValueDisplay 
  type="company" 
  value={{ 
    name: 'Acme Corp', 
    src: '/logos/acme.png',
    badge: { label: 'Enterprise', variant: 'module' }
  }} 
/>
```

**Gotchas:**
- If `src` is missing, the component typically falls back to a placeholder icon or initials.
- For person-specific avatars, see the skill in ./person/SKILL.md.