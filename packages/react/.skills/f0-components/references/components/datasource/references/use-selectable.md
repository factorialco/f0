## useSelectable

The `useSelectable` hook manages selection state for individual items and groups. It supports cascading selection (selecting a group selects all children) and handles selection state across multiple pages.

**Props (Parameters):**
- `data`: `Data<R>` (Required) - The data object from `useData`.
- `paginationInfo`: `PaginationInfo` (Required) - Pagination state from `useData`.
- `source`: `DataSource` (Required) - The source from `useDataSource`.
- `onSelectItems`: `(selection: SelectedItemsState) => void` (Optional) - Callback for selection changes.
- `defaultSelectedItems`: `SelectedItemsState` (Optional) - Initial selection state.

**Return Value:**
- `selectedItems`: `string[]` - Array of selected item IDs.
- `toggleItem`: `(id: string) => void` - Toggles individual item.
- `toggleGroup`: `(groupKey: string) => void` - Toggles all items in a group.
- `isSelected`: `(id: string) => boolean` - Check if item is selected.
- `getGroupStatus`: `(groupKey: string) => 'none' | 'partial' | 'all'` - Returns the selection state of a group.
- `clearSelection`: `() => void` - Deselects everything.

**Usage Example:**

```tsx
const { data, pagination } = useData(source);
const selection = useSelectable(data, pagination, source);

const handleBulkDelete = () => {
  api.delete(selection.selectedItems);
  selection.clearSelection();
};

return (
  <div>
    <button onClick={handleBulkDelete}>Delete ({selection.selectedItems.length})</button>
    {data.items.map(item => (
      <div key={item.id}>
        <input 
          type="checkbox" 
          checked={selection.isSelected(item.id)} 
          onChange={() => selection.toggleItem(item.id)} 
        />
        {item.name}
      </div>
    ))}
  </div>
);
```

**Edge Cases:**
- **Cross-page selection**: By default, selection is maintained when navigating pages. Ensure your `adapter` supports bulk actions on IDs that might not be visible on the current page.
- For integrating selection with grouping, see the `useGroups` skill in `./use-groups/SKILL.md`.