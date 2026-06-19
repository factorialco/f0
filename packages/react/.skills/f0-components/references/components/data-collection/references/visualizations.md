## Visualizations

Visualizations define how the data items are rendered. The Data Collection supports multiple modes that can be toggled by the user.

**Available Modes:**
- `table`: (Default) Standard row/column format.
- `card`: Grid of cards, ideal for visual content.
- `list`: Simplified vertical list.
- `kanban`: Column-based board for workflow tracking.

**Props:**
- `viewMode`: (Optional) The active visualization mode.
- `availableViewModes`: (Optional) Array of modes the user can switch between.

```tsx
<OneDataCollection
  source={source}
  viewMode="card"
  availableViewModes={['table', 'card', 'list']}
/>
```

**Edge Cases & Gotchas:**
- **Abstraction**: The Data Collection abstracts the data logic (filtering/sorting) from the view. Ensure your `itemRender` or cell definitions are compatible with the chosen visualization modes.