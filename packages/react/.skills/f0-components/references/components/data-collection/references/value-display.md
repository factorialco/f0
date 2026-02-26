## Value Display

Value Display provides a semantic way to render cell data based on its type (e.g., currency, date, status, user).

**Props:**
- `type`: `string` - The data type (e.g., 'text', 'date', 'currency', 'badge', 'user').
- `value`: `any` - The raw data to be formatted.
- `options`: `object` - Type-specific formatting options (e.g., currency code).

```tsx
const columns = [
  {
    id: 'amount',
    header: 'Price',
    render: (value) => (
      <ValueDisplay type="currency" value={value} options={{ currency: 'USD' }} />
    )
  },
  {
    id: 'user',
    header: 'Assigned To',
    render: (user) => (
      <ValueDisplay type="user" value={user} />
    )
  }
];
```

**Edge Cases:**
- The `render` function in Data Collection is the primary place where `ValueDisplay` is utilized to ensure a homogeneous UI across different tables.