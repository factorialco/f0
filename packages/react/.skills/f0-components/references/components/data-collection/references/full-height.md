## Full height

Full Height mode optimizes the layout so the Data Collection fills the available vertical space, keeping headers and pagination fixed while the content scrolls.

**Props:**
- `fullHeight`: (Optional) Boolean. When `true`, the component uses `height: 100%`.

```tsx
<div style={{ height: '500px' }}>
  <OneDataCollection
    source={source}
    fullHeight={true}
  />
</div>
```

**Edge Cases & Gotchas:**
- **Parent Container**: `fullHeight` relies on CSS `height: 100%`. The parent container **must** have a defined height (fixed px, vh, or flex-grow) for this to work correctly.