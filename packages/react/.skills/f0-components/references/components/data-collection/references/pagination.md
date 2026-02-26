## Pagination

Pagination manages large datasets by splitting them into discrete pages or providing an infinite scroll experience.

**Props:**
- `pagination.type`: (Optional) `'pages'` (default) or `'infinite'`.
- `pagination.pageSize`: (Optional) Number of items per page (recommended: 20).
- `idProvider`: (Required for Infinite Scroll) Function to get a unique ID from a record to prevent duplicates.

```tsx
// Standard Pagination
const source = useDataCollectionSource({
  pagination: { type: 'pages', pageSize: 20 }
});

// Infinite Scroll
const source = useDataCollectionSource({
  pagination: { type: 'infinite' },
  idProvider: (item) => item.uuid
});
```

**Edge Cases & Gotchas:**
- **Infinite Scroll Container**: Requires the main visualization wrapper to be inside a container with a fixed height and `overflow: auto` to detect scroll events.
- **Disabled State**: The pagination bar remains visible even if all items fit on one page, but it will appear in a disabled state.