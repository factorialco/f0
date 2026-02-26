## useDataSource

The `useDataSource` hook is the foundation of the datasource system. It manages the state for filters, search, sorting, and grouping. It is intentionally decoupled from rendering to allow sharing the same state across multiple components (e.g., a table and a chart).

**Props (Configuration Options):**
- `adapter`: `DataAdapter` (Required) - The function or object responsible for the actual API calls.
- `initialFilters`: `Filters` (Optional) - Initial state for custom filters.
- `search`: `SearchConfig` (Optional) - Configuration for text search (debounce, fields).
- `sorting`: `SortConfig` (Optional) - Default sort field and direction.
- `pagination`: `PaginationConfig` (Optional) - Page size and mode (offset vs cursor).
- `grouping`: `GroupingConfig` (Optional) - Fields available for grouping.

**Return Value:**
- `DataSource` object containing:
  - `filters`: Current filter state.
  - `setFilter`: Function to update specific filters.
  - `setSearch`: Function to update search query.
  - `setSort`: Function to update sorting.
  - `updateGrouping`: Function to change the active group field.

**Usage Example:**

```tsx
const source = useDataSource({
  adapter: myApiAdapter,
  search: {
    placeholder: "Search users...",
    debounceMs: 300
  },
  sorting: {
    defaultField: 'createdAt',
    defaultDirection: 'desc'
  },
  pagination: {
    pageSize: 20
  }
});

// This source can now be passed to useData or useSelectable
```

**Gotchas:**
- Memoize the `adapter` or define it outside the component to prevent unnecessary re-initialization of the data source.
- For rendering the data managed by this hook, see the `useData` skill in `./use-data/SKILL.md`.