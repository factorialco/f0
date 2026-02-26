## Navigation filters

Navigation filters are mandatory, correlative filters (like a Date Navigator) used to move through data chunks (e.g., Day, Week, Month).

**Props:**
- `navigationFilters`: (Required in source) Array of navigation filter definitions.
- `type`: Currently supports `"date-navigator"`.
- `options`: Configuration for granularity (day, week, month, year).

```tsx
const source = useDataCollectionSource({
  navigationFilters: [
    {
      id: 'date-nav',
      type: 'date-navigator',
      initialValue: new Date(),
      options: {
        granularities: ['day', 'week', 'month']
      }
    }
  ]
});
```

**Edge Cases & Gotchas:**
- **Mandatory Nature**: Unlike regular filters, navigation filters are not nullable. They always provide a value to the `fetchData` function.
- **Granularity**: Changing granularity (e.g., from Day to Month) will automatically adjust the date range passed to the data fetcher.