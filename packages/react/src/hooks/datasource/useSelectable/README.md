# useSelectable Hook

A powerful and flexible React hook for managing selection state in data tables
with support for single/multi-selection, grouped data, pagination, and
filtering.

## Features

- ✅ Single and multi-selection modes
- ✅ Grouped data support
- ✅ "Select All" functionality
- ✅ Pagination support
- ✅ Search and filtering integration
- ✅ Optimized performance with memoization
- ✅ TypeScript fully typed

## Basic Usage

### Simple Multi-Selection

```tsx
import { useSelectable } from "@factorial/react"

function MyTable() {
  const { data } = useData({
    source: {
      selectable: (record) => record.id,
      getData: async () => fetchTableData(),
    },
  })

  const {
    selectedItems,
    handleSelectItemChange,
    handleSelectAll,
    isAllSelected,
    selectedState,
  } = useSelectable({
    data,
    source: {
      selectable: (record) => record.id,
    },
    selectionMode: "multi",
  })

  return (
    <div>
      <button onClick={() => handleSelectAll(!isAllSelected)}>
        {isAllSelected ? "Deselect All" : "Select All"}
      </button>

      {data.records.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={selectedState.items?.get(item.id)?.checked || false}
            onChange={(e) => handleSelectItemChange(item.id, e.target.checked)}
          />
          {item.name}
        </div>
      ))}

      <p>Selected: {selectedItems.size} items</p>
    </div>
  )
}
```

### Single Selection

```tsx
const { selectedItems, handleSelectItemChange } = useSelectable({
  data,
  source: { selectable: (record) => record.id },
  selectionMode: "single", // Only one item can be selected
})
```

### With Pagination

```tsx
const { data, paginationInfo } = useData({
  source: {
    selectable: (record) => record.id,
    getData: async (params) => fetchPaginatedData(params),
  },
  pagination: { pageSize: 10 },
})

const { selectedItems, selectionMeta, handleSelectItemChange } = useSelectable({
  data,
  paginationInfo,
  source: { selectable: (record) => record.id },
  selectionMode: "multi",
})

console.log(
  `Selected ${selectionMeta.selectedItemsCount} of ${selectionMeta.totalKnownItemsCount}`
)
```

### With Grouped Data

```tsx
const { data } = useData({
  source: {
    selectable: (record) => record.id,
    getData: async () => fetchGroupedData()
  },
  grouping: {
    groupBy: (record) => record.category
  }
})

const {
  selectedItems,
  selectedGroups,
  groupAllSelectedStatus,
  handleSelectItemChange,
  handleSelectGroupChange
} = useSelectable({
  data,
  source: { selectable: (record) => record.id },
  selectionMode: 'multi'
})

// Select an entire group
<button onClick={() => handleSelectGroupChange('category1', true)}>
  Select Category 1
</button>

// Check group selection status
{Object.entries(groupAllSelectedStatus).map(([groupKey, status]) => (
  <div key={groupKey}>
    Group: {groupKey} - Selected: {status.selectedCount}/{status.selectedCount + status.unselectedCount}
    {status.indeterminate && ' (partial)'}
  </div>
))}
```

### With Search/Filtering

```tsx
const [searchQuery, setSearchQuery] = useState('')
const isSearchActive = searchQuery.length > 0

const {
  selectedItems,
  handleSelectItemChange,
  handleSelectAll
} = useSelectable({
  data,
  source: {
    selectable: (record) => record.id,
    currentFilters: { search: searchQuery }
  },
  selectionMode: 'multi',
  isSearchActive, // Prevents auto-detection of "all selected" during search
})

// When search changes, selections are automatically cleared
<input
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  placeholder="Search..."
/>
```

### Controlled Selection

```tsx
const [externalSelectedState, setExternalSelectedState] = useState<
  SelectedItemsState<MyRecord>
>({
  allSelected: false,
  items: new Map(),
  groups: new Map(),
})

const { selectedItems, handleSelectItemChange } = useSelectable({
  data,
  source: { selectable: (record) => record.id },
  selectedState: externalSelectedState, // Controlled from outside
  onSelectItems: (status, clearFn) => {
    console.log("Selection changed:", status)
    // Update external state or perform side effects
    setExternalSelectedState({
      allSelected: status.allSelected,
      items: new Map(
        status.itemsStatus.map(({ item, checked }) => [
          item.id,
          { id: item.id, checked, item },
        ])
      ),
      groups: new Map(),
    })
  },
})
```

## API Reference

### Parameters

```typescript
interface UseSelectableProps<R, Filters, Sortings, Grouping> {
  /** Data from useData hook */
  data: Data<R>

  /** Pagination information (optional) */
  paginationInfo?: PaginationInfo | null

  /** Data source configuration */
  source: DataSourceDefinition<R, Filters, Sortings, Grouping>

  /** Selection mode: 'single' or 'multi' (default: 'multi') */
  selectionMode?: "single" | "multi"

  /** External controlled selection state (optional) */
  selectedState?: SelectedItemsState<R>

  /** Callback when selection changes */
  onSelectItems?: (status: SelectionStatus, clearFn: () => void) => void

  /** Disable "Select All" functionality (default: false) */
  disableSelectAll?: boolean

  /** Indicates if search is active (default: false) */
  isSearchActive?: boolean
}
```

### Return Value

```typescript
interface UseSelectableReturn<R, Filters> {
  /** Whether all items are selected */
  isAllSelected: boolean

  /** Whether some (but not all) items are selected */
  isPartiallySelected: boolean

  /** Map of selected items */
  selectedItems: Map<SelectionId, R>

  /** Map of selected groups */
  selectedGroups: Map<SelectionId, GroupRecord<R>>

  /** Status of "select all" checkbox */
  allSelectedStatus: AllSelectionStatus

  /** Selection status per group */
  groupAllSelectedStatus: Record<SelectionId, AllSelectionStatus>

  /** Complete selection status */
  selectionStatus: SelectionStatus<R, Filters>

  /** Current selection state */
  selectedState: SelectedItemsState<R>

  /** Metadata about selection */
  selectionMeta: SelectionMeta<R>

  /** Clear all selections */
  clearSelection: () => void

  /** Handle item selection/deselection */
  handleSelectItemChange: (
    itemOrId: R | SelectionId | readonly SelectionId[],
    checked: boolean
  ) => void

  /** Handle "select all" action */
  handleSelectAll: (checked: boolean) => void

  /** Handle group selection/deselection */
  handleSelectGroupChange: (
    groupOrId: GroupRecord<R> | SelectionId | readonly SelectionId[],
    checked: boolean
  ) => void
}
```

## Types

### AllSelectionStatus

```typescript
type AllSelectionStatus = {
  checked: boolean
  indeterminate: boolean
  selectedCount: number
  unselectedCount: number
}
```

### SelectionStatus

```typescript
type SelectionStatus<R, Filters> = {
  allChecked: boolean | "indeterminate"
  itemsStatus: ReadonlyArray<{ item: R; checked: boolean }>
  selectedIds: ReadonlyArray<SelectionId>
  checkedItems: ReadonlyArray<R>
  uncheckedItems: ReadonlyArray<R>
  groupsStatus: Record<string, boolean>
  filters: FiltersState<Filters>
  selectedCount: number
  totalKnownItemsCount: number
}
```

### SelectedItemsState

```typescript
type SelectedItemsState<R> = {
  allSelected: boolean | "indeterminate"
  items?: Map<SelectionId, SelectedItemState<R>>
  groups?: Map<string, SelectedItemState<R>>
}
```

## Advanced Examples

### Bulk Actions with Selected Items

```tsx
function BulkActions() {
  const { selectedItems, clearSelection } = useSelectable({
    data,
    source: { selectable: (record) => record.id },
  })

  const handleBulkDelete = async () => {
    const ids = Array.from(selectedItems.keys())
    await deleteItems(ids)
    clearSelection()
  }

  const handleBulkExport = () => {
    const items = Array.from(selectedItems.values())
    exportToCSV(items)
  }

  return (
    <div>
      {selectedItems.size > 0 && (
        <div>
          <button onClick={handleBulkDelete}>
            Delete ({selectedItems.size})
          </button>
          <button onClick={handleBulkExport}>
            Export ({selectedItems.size})
          </button>
          <button onClick={clearSelection}>Clear Selection</button>
        </div>
      )}
    </div>
  )
}
```

### Persistent Selection Across Pages

```tsx
function PersistentSelection() {
  const [persistedSelection, setPersistedSelection] = useLocalStorage<
    SelectedItemsState<MyRecord>
  >("table-selection", {
    allSelected: false,
    items: new Map(),
    groups: new Map(),
  })

  const selectable = useSelectable({
    data,
    paginationInfo,
    source: { selectable: (record) => record.id },
    selectedState: persistedSelection,
    onSelectItems: (status) => {
      // Persist selection to localStorage
      setPersistedSelection({
        allSelected: status.allSelected,
        items: new Map(
          status.itemsStatus.map(({ item, checked }) => [
            item.id,
            { id: item.id, checked, item },
          ])
        ),
        groups: new Map(),
      })
    },
  })

  return <TableWithSelection {...selectable} />
}
```

### Conditional Selection

```tsx
function ConditionalSelection() {
  const { handleSelectItemChange, selectedItems } = useSelectable({
    data,
    source: { selectable: (record) => record.id },
  })

  const handleSelect = (item: MyRecord, checked: boolean) => {
    // Only allow selection if item meets certain criteria
    if (checked && !item.isSelectable) {
      toast.error("This item cannot be selected")
      return
    }

    // Check maximum selection limit
    if (checked && selectedItems.size >= 10) {
      toast.error("Maximum 10 items can be selected")
      return
    }

    handleSelectItemChange(item.id, checked)
  }

  return <div>{/* Your UI */}</div>
}
```

## Performance Tips

1. **Use `selectionMode: 'single'`** when you only need one selection at a time
2. **Enable `disableSelectAll`** if you don't need "Select All" functionality
3. **Use `isSearchActive`** flag when search is active to optimize selection
   logic
4. **Avoid unnecessary re-renders** by memoizing callback props passed to child
   components
5. **Use `selectedIds`** array instead of iterating over `selectedItems` Map
   when you only need IDs

## Common Pitfalls

❌ **Don't** create new functions in render:

```tsx
<Item onSelect={(id, checked) => handleSelectItemChange(id, checked)} />
```

✅ **Do** use the handler directly or memoize:

```tsx
<Item onSelect={handleSelectItemChange} />
```

❌ **Don't** mutate the selectedState directly:

```tsx
selectedState.items.set(id, { id, checked: true }) // ❌ Won't trigger updates
```

✅ **Do** use the provided handlers:

```tsx
handleSelectItemChange(id, true) // ✅ Correct
```

## Troubleshooting

### Selections are cleared when data changes

This is expected behavior when filters change. If you want to preserve
selections:

- Use controlled `selectedState` prop
- Store selections externally (e.g., localStorage, state management)

### "Select All" not working during search

Make sure to set `isSearchActive={true}` when search is active. This prevents
auto-detection of "all selected" state when you select all visible filtered
items.

### Performance issues with large datasets

- Use pagination to limit rendered items
- Consider using virtualization for very large lists
- Memoize child components that render individual items

## Related

- [`useData`](../useData/README.md) - Data fetching and management hook
- [`usePagination`](../usePagination/README.md) - Pagination hook
- [`useFilters`](../useFilters/README.md) - Filtering hook
