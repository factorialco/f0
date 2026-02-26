## Person

The Person component renders a user's avatar and name. It includes specific support for "deactivated" states and badges.

**Props:**
- `name`: `string` (Required) - The person's full name.
- `src`: `string` (Optional) - URL for the profile picture.
- `deactivated`: `boolean` (Default: false) - If true, applies visual styles to indicate the user is no longer active.
- `badge`: `{ label: string, variant?: string }` (Optional) - Metadata badge.
- `badgeTooltip`: `string` (Optional) - Tooltip for the badge.

```tsx
<ValueDisplay 
  type="person" 
  value={{ 
    name: 'John Doe', 
    src: '/avatars/john.png',
    deactivated: false,
    badge: { label: 'Admin', variant: 'regular' }
  }} 
/>
```

**Gotchas:**
- Deactivated users typically have grayscale avatars or strikethrough text depending on the theme.