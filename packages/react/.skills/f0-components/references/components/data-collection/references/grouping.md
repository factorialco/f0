## Grouping

Grouping organizes data into expandable sections based on a specific field, allowing for better data hierarchy.

**Props:**
- `grouping.groupBy`: (Required) Object where keys are field names (or paths like `manager.name`) and values define grouping behavior.
- `grouping.mandatory`: (Optional) Boolean. If true, data must always be grouped.
- `grouping.collapsible`: (Optional) Boolean. Allows users to collapse/expand groups.
- `grouping.defaultOpenGroups`: (Optional) Boolean or Array of group IDs to be open by default.

```tsx
const grouping = {
  groupBy: {
    category: { label: 'Category' }
  },
  collapsible: true,
  defaultOpenGroups: true
};

const { dataCollectionProps } = useDataCollection({
  source,
  grouping
});
```

**Edge Cases & Gotchas:**
- **Sorting Requirement**: For paginated data, the backend **must** sort by the grouping field as the primary or secondary sort to ensure all items in a group appear together across pages.
- **Frontend Logic**: Grouping is applied on the frontend after the data is fetched.