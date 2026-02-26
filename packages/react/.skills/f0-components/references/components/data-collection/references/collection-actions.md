## Collection Actions

Collection Actions are global operations that apply to the entire data set or the collection container. They are typically displayed in the top header area of the Data Collection component.

**Props:**
- `primary`: `Action[]` - High-visibility buttons for the most common tasks (e.g., "Create New").
- `expanded`: `Action[]` - Actions usually hidden behind a "three dots" or "More" menu.
- `grouped`: `GroupedAction[]` - Allows categorizing expanded actions into sections with headers.
- `label`: `string` - The text displayed on the action button.
- `icon`: `IconName` - Optional icon to display alongside or instead of the label.

```tsx
const actions = {
  primary: [
    { label: 'Add User', onClick: () => handleAdd(), icon: 'plus' }
  ],
  expanded: [
    { label: 'Export to CSV', onClick: () => handleExport() },
    { label: 'Import Data', onClick: () => handleImport() }
  ]
};

<DataCollection actions={actions} ... />
```

**Edge Cases:**
- If `hiddenLabel` is set to true on an expanded action, only the icon will be visible if the container is narrow.
- Multiple primary actions will be displayed side-by-side until space runs out, at which point they may collapse.