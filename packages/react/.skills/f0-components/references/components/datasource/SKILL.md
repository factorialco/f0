---
name: datasource-hooks
description: A suite of hooks (useDataSource, useData, useGroups, useSelectable) for managing complex data collections. Use when building tables, lists, or grids that require robust state management for fetching, filtering, pagination, grouping, and selection.
---
## Overview

The Datasource system is a modular ecosystem for handling data in collections. It separates configuration from execution, allowing the same data source to be shared across multiple visualizations (e.g., a table and a chart showing the same filtered data).

- **useDataSource**: Manages configuration and state (filters, search, sort).
- **useData**: Executes data fetching and manages pagination/loading states.
- **useGroups**: Manages expand/collapse states for grouped data.
- **useSelectable**: Manages complex selection logic for items and groups.

## useDataSource

The foundation hook that creates a reusable data source object.

### Configuration Options
- **search** (optional): `SearchConfig` - Configuration for text-based searching.
- **sorting** (optional): `SortingConfig` - Configuration for initial and available sort fields.
- **filters** (optional): `FilterConfig` - Configuration for data filtering.
- **navigation** (optional): `NavigationConfig` - Configuration for sidebar or category-based navigation.
- **selection** (optional): `SelectionConfig` - Configuration for bulk actions and selection behavior.
- **adapter** (required): `DataAdapter` - The logic for fetching data based on current state.

## useData

Consumes a `DataSource` to provide actual records and loading states.

### Parameters
- **source** (required): `DataSource` - The object returned by `useDataSource`.
- **options** (optional): `UseDataOptions` - Configuration for polling, initial loading, or data transformation.

### Return Value (`Data<R>`)
- **records**: `R[]` - Flattened list of records.
- **groups**: `GroupRecord<R>[]` - Data organized into groups if grouping is active.
- **loading**: `boolean` - Current fetching state.
- **error**: `DataError | null` - Error information if the fetch failed.
- **pagination**: `PaginationInfo` - Controls and state for paging/infinite scroll.

## useGroups

Manages the UI state of grouped data.

### Parameters
- **groups** (required): `GroupRecord<R>[]` - The groups array from `useData`.
- **defaultOpenGroups** (optional): `boolean | string[]` - Whether groups are open by default or a list of specific keys.

## useSelectable

Handles individual and cascading group selection.

### Parameters
- **data** (required): `Data<R>` - The data object from `useData`.
- **paginationInfo** (required): `PaginationInfo` - Pagination state to handle cross-page selection.
- **source** (required): `DataSource` - The source object for configuration context.
- **onSelectItems** (optional): `(items: R[]) => void` - Callback when selection changes.

## Usage Example

```tsx
import { useDataSource, useData, useGroups, useSelectable } from './datasource';

const MyCollection = () => {
  // 1. Configure the source
  const source = useDataSource({
    adapter: async (params) => fetchItems(params),
    search: { enabled: true },
  });

  // 2. Fetch the data
  const { records, groups, pagination, loading } = useData(source);

  // 3. Add grouping state (optional)
  const { openGroups, toggleGroup } = useGroups(groups);

  // 4. Add selection state (optional)
  const { selectedItems, toggleSelection } = useSelectable({
    data: { records, groups },
    paginationInfo: pagination,
    source
  });

  if (loading) return <Spinner />;

  return (
    <div>
      {records.map(item => (
        <div key={item.id} onClick={() => toggleSelection(item.id)}>
          {item.name} {selectedItems.has(item.id) ? '(Selected)' : ''}
        </div>
      ))}
    </div>
  );
};
```

## Best Practices

- **Memoize Adapters**: Always wrap your data adapter logic in `useMemo` or define it outside the component to prevent unnecessary re-renders and re-fetches.
- **Separate Concerns**: Use `useDataSource` at a high level if you need to share filters between a sidebar and a main content area.
- **Handle Loading States**: Always check the `loading` property from `useData` to prevent rendering stale or empty states during transitions.
- **Type Safety**: Pass your record type `R` and filter type `F` as generics to the hooks: `useDataSource<R, F>(...)`.

## Related Skills

- For data visualization components that consume these hooks, see the skill in ./references/collection-view.md
- For specific table implementations, see the skill in ./references/table.md
- For filter UI components, see the skill in ./references/filter-bar.md

## Sub-components

- **Examples**: See ./references/examples.md
- **useData**: See ./references/usedata.md
- **useDataSource**: See ./references/usedatasource.md
- **useGroups**: See ./references/usegroups.md
- **useSelectable**: See ./references/useselectable.md