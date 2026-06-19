## Item Actions

Item Actions are operations specific to a single record in the collection. They appear as row actions in tables, menu items in cards, or buttons in list items.

**Props:**
- `type`: `'primary' | 'secondary' | 'other'` - Determines the visual prominence and placement.
- `label`: `string` - Text for the action.
- `onClick`: `(item: T) => void` - Function executed when the action is triggered.
- `icon`: `IconName` - Icon associated with the action.

```tsx
const itemActions = [
  {
    label: 'Edit',
    type: 'primary',
    icon: 'pencil',
    onClick: (item) => openEditModal(item)
  },
  {
    label: 'Delete',
    type: 'other',
    icon: 'trash',
    onClick: (item) => confirmDelete(item)
  }
];

const source = useDataCollectionSource({
  items: data,
  itemActions
});
```

**Edge Cases:**
- In **Card Visualization**, `primary` and `secondary` actions appear in the footer, while `other` actions appear in a dropdown menu.
- In **Table Visualization**, actions are typically grouped in the last column.