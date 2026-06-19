## Search

The Search component is a themed input optimized for filtering and querying. It features built-in debouncing and character thresholds to prevent excessive API calls or expensive re-renders during rapid typing.

**Props:**
- `value`: `string` (Required) - The current search query.
- `onChange`: `(value: string) => void` (Required) - Callback triggered after debounce/threshold logic.
- `debounce`: `number` (Optional) - Delay in milliseconds before triggering `onChange`. Default: 300ms.
- `threshold`: `number` (Optional) - Minimum number of characters required before `onChange` is triggered.
- `clearable`: `boolean` (Optional) - Displays a reset button when the input has content.
- `disabled`: `boolean` (Optional) - Disables the search field.
- `placeholder`: `string` (Optional) - Hint text displayed when empty.

```tsx
import { Search } from '@components/input';

export const UserSearch = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <Search
      placeholder="Search users..."
      debounce={500}
      threshold={3}
      clearable
      onChange={handleSearch}
    />
  );
};
```

**Edge Cases & Gotchas:**
- **Debounce vs. Immediate UI:** The internal input state is immediate, but the `onChange` prop is debounced. Use the `onChange` for network requests and side effects.
- **Threshold Logic:** If the user types 2 characters and the threshold is 3, `onChange` will not fire until the 3rd character is entered.