## Callbacks

Callbacks allow the parent component to react to internal state changes within the Data Collection, such as filtering, sorting, or pagination updates.

**Props:**
- `onStateChange`: (Required) Function called whenever the internal state (filters, search, pagination, sorting) changes. Receives the new state object.

```tsx
<OneDataCollection
  source={source}
  onStateChange={(newState) => {
    console.log('Current Data Collection State:', newState);
    // Useful for analytics or external state synchronization
  }}
/>
```

**Edge Cases & Gotchas:**
- **Infinite Loops**: Ensure that updating external state based on `onStateChange` does not trigger a re-render that resets the Data Collection state, causing a loop.