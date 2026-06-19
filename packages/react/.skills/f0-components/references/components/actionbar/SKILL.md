---
name: action-bar
description: A floating bar for bulk actions on selected items. Use when users select multiple records in a table or list to provide contextual actions like delete, edit, or export.
---

# ActionBar

The `ActionBar` component provides a contextual interface for performing actions on a set of selected items. It typically appears at the bottom of the viewport when one or more items are selected in a collection (like a Table or List).

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | - | **Required.** Controls the visibility of the bar. |
| `primaryActions` | `ActionType[] \| ActionBarGroup \| ActionBarGroup[]` | - | Main actions displayed prominently. |
| `secondaryActions` | `ActionType[]` | `[]` | Actions usually tucked into an overflow menu or displayed with less emphasis. |
| `selectedNumber` | `number` | `undefined` | Number of items currently selected. If omitted, the count and unselect button are hidden. |
| `onUnselect` | `() => void` | - | Callback triggered when the user clicks the "unselect" or "clear" button. |
| `warningMessage` | `string` | - | Optional message to display (e.g., "Some items cannot be modified"). |
| `allPagesSelection` | `boolean` | `false` | Enables the "Select all items across all pages" banner logic. |
| `isAllCurrentPageSelected` | `boolean` | `false` | Whether all items on the *visible* page are selected. |
| `isAllItemsSelected` | `boolean` | `false` | Whether the user has confirmed selecting the entire dataset across all pages. |
| `totalItems` | `number` | - | Total count of items in the dataset for the "Select all" banner. |
| `onSelectAllItems` | `() => void` | - | Callback triggered when the user clicks "Select all [total] items". |

## Usage Examples

### Basic Bulk Actions
```tsx
import { ActionBar } from './components/ActionBar';

const MyComponent = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const primaryActions = [
    { label: 'Delete', onClick: () => handleBulkDelete(selectedIds), icon: 'trash' },
    { label: 'Export', onClick: () => handleExport(selectedIds), icon: 'download' }
  ];

  return (
    <ActionBar
      isOpen={selectedIds.length > 0}
      selectedNumber={selectedIds.length}
      onUnselect={() => setSelectedIds([])}
      primaryActions={primaryActions}
    />
  );
};
```

### With Multi-Page Selection
Use this pattern when dealing with paginated data where the user might want to perform an action on the entire dataset, not just the visible rows.

```tsx
<ActionBar
  isOpen={true}
  selectedNumber={25} // Items on current page
  totalItems={500}    // Total items in DB
  allPagesSelection={true}
  isAllCurrentPageSelected={true}
  isAllItemsSelected={false}
  onSelectAllItems={() => handleSelectEntireDataset()}
  onUnselect={() => handleClearSelection()}
  primaryActions={[{ label: 'Archive All', onClick: archiveAll }]}
/>
```

## Variants

### Action Groups
Primary actions can be grouped to create visual separation or dropdown menus.
```tsx
const primaryActions = {
  label: 'Manage',
  actions: [
    { label: 'Activate', onClick: onActivate },
    { label: 'Deactivate', onClick: onDeactivate }
  ]
};
```

### Warning State
Use `warningMessage` to provide context about limitations of the current selection.
```tsx
<ActionBar
  isOpen={true}
  warningMessage="3 items are locked and cannot be deleted."
  primaryActions={[{ label: 'Delete Available', onClick: handleDelete }]}
/>
```

## Best Practices

- **Triggering**: Only set `isOpen` to true when there is an active selection.
- **Placement**: The component is typically fixed to the bottom of the screen to remain accessible regardless of scroll position.
- **Unselect**: Always provide an `onUnselect` callback to allow users to clear their selection easily.
- **Labels**: Use clear, imperative verbs for action labels (e.g., "Delete", "Edit", "Publish").

## Related Skills
- For table implementations that trigger this component, see the skill in `./table/SKILL.md`.
- For individual button configurations within actions, see the skill in `./button/SKILL.md`.