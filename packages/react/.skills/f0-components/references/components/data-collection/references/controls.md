## Controls

Controls handle the interaction logic for item selection and bulk operations within the collection.

**Props:**
- `onSelectItems`: (Optional) Callback triggered when items are selected/deselected. Receives `allItemsCheck` (boolean | 'indeterminate'), `itemsStatus` (map of IDs), and current `filters`.
- `onBulkAction`: (Optional) Callback triggered when a bulk action is executed. Receives the action name and the selection state.

```tsx
<OneDataCollection
  source={source}
  onSelectItems={({ allItemsCheck, itemsStatus }) => {
    console.log('Selected items map:', itemsStatus);
  }}
  onBulkAction={(actionName, selectionData) => {
    if (actionName === 'delete-all') {
      performBulkDelete(selectionData);
    }
  }}
/>
```

**Edge Cases & Gotchas:**
- **Async Data**: In async collections, `itemsStatus` only contains information about "known" items (those currently loaded). Use `allItemsCheck` to determine if the user intended to select the entire dataset across all pages.