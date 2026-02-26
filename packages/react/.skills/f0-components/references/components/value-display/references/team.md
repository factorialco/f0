## Team

The Team component renders a team avatar (usually a group icon or team logo) and the team name.

**Props:**
- `name`: `string` (Required) - The name of the team.
- `src`: `string` (Optional) - URL for the team's avatar.
- `badge`: `{ label: string, variant?: string }` (Optional) - Metadata badge.

```tsx
<ValueDisplay 
  type="team" 
  value={{ 
    name: 'Engineering', 
    badge: { label: 'Core', variant: 'primary' }
  }} 
/>
```

**Gotchas:**
- Shares the same badge logic as the `Person` and `Company` components.