## Summary

The Summary feature displays aggregated data (totals, averages, counts) at the bottom of a table visualization.

**Props:**
- `summary`: `SummaryConfig` - Configuration for the summary row.
- `summary.values`: `Record<string, number | string>` - The values to display in specific columns.
- `summary.isSticky`: `boolean` - If true, the summary row stays visible at the bottom of the viewport.

```tsx
const source = useDataCollectionSource({
  items: invoiceData,
  summary: {
    isSticky: true,
    values: {
      amount: 5400.50,
      tax: 1134.10,
      total: 6534.60
    }
  }
});
```

**Edge Cases:**
- **Frozen Columns**: If the table has frozen columns, the summary row will respect those frozen positions to maintain alignment.
- **Infinite Scroll**: The sticky summary row is highly recommended for infinite scroll to provide context on the total dataset.