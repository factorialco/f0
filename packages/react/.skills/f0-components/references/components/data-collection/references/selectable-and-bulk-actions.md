## Selectable and bulk actions

This sub-component enables item selection and allows users to perform actions on multiple items simultaneously.

**Props:**
- `allPagesSelection`: (Optional) Boolean. If `true`, selection persists across pages (Gmail-style).
- `defaultSelectedItems`: (Optional) Initial selection state.
- `bulkActions`: (Optional in source) Function `(selection) => BulkActions` that returns available actions for the current selection.

```tsx
const source = useDataCollectionSource({
  allPagesSelection: true,
  bulkActions: (selection) => ({
    actions: [
      { id: 'delete', label: 'Delete', icon: 'delete', danger: true },
      { id: 'archive', label: 'Archive', icon: 'archive' }
    ]
  })
});
```

**Edge Cases & Gotchas:**
- **Selection Logic**: When `allPagesSelection` is true, the UI will offer a "Select all N items" link if the user selects all items on the current page.
- **Unique IDs**: The `selectable` function (or `idProvider`) must return a unique value for every item to ensure selection state doesn't collide.