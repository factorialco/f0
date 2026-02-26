## useData

The `useData` hook handles data fetching, state management, and pagination within the Collections ecosystem. It consumes a data source created by `useDataSource` and provides the actual data along with loading states and pagination controls.

**Props (Parameters):**
- `source`: `DataSource` (Required) - The data source object created by `useDataSource`.
- `options`: `UseDataOptions<Filters>` (Optional) - Configuration for fetching behavior.
  - `enabled`: `boolean` - Whether to fetch data automatically.
  - `refreshInterval`: `number` - Polling interval in milliseconds.
  - `keepPreviousData`: `boolean` - Maintain old data while fetching new pages.

**Return Value:**
- `data`: `Data<R>` - Object containing `items` (flat list), `groups` (nested structure), and `total`.
- `loading`: `boolean` - Current fetching state.
- `error`: `DataError | null` - Error details if the fetch fails.
- `pagination`: `PaginationInfo` - Controls for `nextPage`, `prevPage`, and `goToPage`.

**Usage Example:**

```tsx
import { useDataSource, useData } from './hooks';

const UserList = () => {
  const source = useDataSource({ adapter: userAdapter });
  const { data, loading, error, pagination } = useData(source, {
    keepPreviousData: true
  });

  if (loading && !data.items.length) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ul>
        {data.items.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <button onClick={pagination.prevPage} disabled={!pagination.hasPrev}>Prev</button>
      <button onClick={pagination.nextPage} disabled={!pagination.hasNext}>Next</button>
    </div>
  );
};
```

**Best Practices:**
- Always handle the `loading` state to prevent layout shifts.
- Use `keepPreviousData: true` for smoother pagination transitions.
- For `useDataSource` configuration, see the skill in `./use-data-source/SKILL.md`.