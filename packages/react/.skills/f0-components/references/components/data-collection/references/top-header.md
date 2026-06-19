## Top Header

The Top Header is the layout area at the top of the collection that houses the title, item summaries, and global actions.

**Props:**
- `title`: (Optional) The name of the collection.
- `headerActions`: (Optional) Actions rendered in the top right.
- `showSummary`: (Optional) Boolean to show/hide the total items count.

```tsx
// Usually configured via the source or the main component
const source = useDataCollectionSource({
  collectionActions: [...] // These appear in the Top Header
});
```

**Edge Cases & Gotchas:**
- **Responsive Design**: On small screens, Top Header actions may collapse into a menu to preserve space.