## Empty State

The Empty State component provides visual feedback when no data is available, distinguishing between initial empty sets, filtered results with no matches, and errors.

**Props:**
- `emptyStates`: (Optional) Object to override default configurations for `noData`, `noResults`, and `error` states.
- `emptyStates.noData`: Configuration for the initial empty state.
- `emptyStates.noResults`: Configuration for when filters return nothing.
- `emptyStates.error`: Configuration for fetch failures.

```tsx
<OneDataCollection
  source={source}
  emptyStates={{
    noResults: {
      title: "CUSTOM NO RESULTS TITLE",
      description: "This is a no results custom message",
      emoji: "🔍"
    },
    noData: {
      actions: [{ label: 'Add First Item', onClick: handleAdd }]
    }
  }}
/>
```

**Edge Cases & Gotchas:**
- **Partial Overrides**: You only need to provide the specific fields you want to change; the component merges your overrides with the default empty state values.