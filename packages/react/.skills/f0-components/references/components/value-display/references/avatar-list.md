## Avatar List

The Avatar List renders a horizontal sequence of avatars (representing people, teams, or companies). It is designed to handle multiple entities efficiently, including automatic overflow management.

**Props:**
- `items`: `Array<Person | Team | Company>` (Required) - Array of entity objects to render as avatars.
- `max`: `number` (Optional) - The maximum number of avatars to show before displaying a "+X" counter.
- `size`: `'xs' | 'sm' | 'md'` (Default: 'sm') - The size of the avatars in the list.

```tsx
const members = [
  { name: 'Alice', src: '/path/to/img1.png' },
  { name: 'Bob', src: '/path/to/img2.png' },
  { name: 'Charlie', src: '/path/to/img3.png' }
];

<ValueDisplay 
  type="avatarList" 
  value={{ items: members, max: 2 }} 
/>
```

**Gotchas:**
- When `max` is reached, the remaining count is calculated automatically.
- For individual entity details, see the `Person`, `Team`, or `Company` skills.