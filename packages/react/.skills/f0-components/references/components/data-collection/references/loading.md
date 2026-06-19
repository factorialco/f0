## Loading

The Loading sub-component provides visual feedback during data retrieval using skeleton screens for initial loads and spinners for updates.

**Props:**
- `loading`: (Internal/Automatic) Managed by the `useDataCollection` hook based on the source's fetch state.

**Behavior:**
- **Initial Load**: Displays skeleton indicators that match the expected dimensions of the items.
- **Reloading/Filtering**: The current content fades out slightly, and a spinner appears to indicate an background update.

**Edge Cases & Gotchas:**
- **Custom Skeletons**: Ensure your visualization components (Table cells, Cards) support skeleton states to prevent layout shift when data arrives.