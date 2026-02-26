## Total Items Summary

Displays the total count of items in the collection, usually located in the top right area.

**Props:**
- `totalItemSummary`: `boolean | ((total: number) => string)` - If true, shows default text. If a function, allows custom formatting.

```tsx
// Default: "124 items"
const source1 = useDataCollectionSource({
  totalItemSummary: true
});

// Custom: "Showing 124 total records"
const source2 = useDataCollectionSource({
  totalItemSummary: (total) => `Showing ${total} total records`
});
```

**Edge Cases:**
- If filters are present, the summary is displayed above the filters in the same row as navigation filters.
- If no filters exist, it takes the primary filter position.