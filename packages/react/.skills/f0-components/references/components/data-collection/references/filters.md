## Filters

Filters allow users to narrow down datasets using a dedicated panel, chips for active criteria, and saved presets.

**Props:**
- `filters`: (Required in source) Definition of filter categories (types, options, etc.).
- `presets`: (Optional in source) Predefined combinations of filter values.
- `search`: (Optional) Configuration for the global search bar.

```tsx
const source = useDataCollectionSource({
  filters: [
    { id: 'status', label: 'Status', type: 'select', options: [...] }
  ],
  presets: [
    { id: 'active-only', label: 'Active Only', values: { status: ['active'] } }
  ]
});
```

**Edge Cases & Gotchas:**
- **Data Fetching**: The `fetchData` function receives the current filter values as an argument. Ensure your backend is prepared to handle the filter schema defined in the `filters` prop.
- **Chips**: Chips are automatically generated; clicking the "X" on a chip will update the filter state and trigger a new fetch.