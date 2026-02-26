## SearchBar

The `SearchBar` is a specialized input field designed to fit within the sidebar constraints. It is used to filter navigation items or search for specific entities within the current context.

**Props:**
- `placeholder`: `string` - Hint text displayed when the input is empty (default: "Search...").
- `value`: `string` - The current search query.
- `onChange`: `(value: string) => void` - Callback triggered on every keystroke.
- `onClear`: `() => void` (optional) - Callback triggered when the clear (X) button is clicked.
- `isCollapsed`: `boolean` (optional) - If true, the search bar may render only as an icon.

```tsx
import { SearchBar } from './Sidebar/SearchBar';

const SidebarFilter = () => {
  const [query, setQuery] = useState('');

  return (
    <SearchBar 
      value={query} 
      onChange={setQuery} 
      placeholder="Find files..." 
    />
  );
};
```

**Edge Cases & Gotchas:**
- In a collapsed sidebar, clicking the search icon should ideally expand the sidebar or open a search modal.
- Debounce the `onChange` callback if it triggers heavy API requests.