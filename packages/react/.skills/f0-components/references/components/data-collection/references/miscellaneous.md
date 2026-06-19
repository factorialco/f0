## Miscellaneous

The Miscellaneous section covers general configurations for the Data Collection component, including selection modes, pagination types, and progress indicators.

**Props:**
- `selectable`: `boolean | 'multiple' | 'single'` - Enables item selection.
- `selectionMode`: `'page' | 'cross-page'` - Determines if selection persists across pagination.
- `pagination`: `PaginationConfig` - Configuration for `'pages'` or `'infinite-scroll'`.
- `showProgressBar`: `boolean` - Displays a progress bar (useful for showing completion status in rows).

```tsx
<DataCollection
  selectable="multiple"
  selectionMode="cross-page"
  pagination={{
    type: 'infinite-scroll',
    pageSize: 20
  }}
  ...
/>
```

**Edge Cases:**
- **Cross-page selection**: Requires a stable unique ID for each item to track selection state accurately as new data loads.
- **Infinite Scroll**: When combined with a sticky summary row, the summary remains visible at the bottom while data loads behind it.