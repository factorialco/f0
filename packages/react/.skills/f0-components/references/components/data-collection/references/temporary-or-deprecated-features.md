## Temporary or Deprecated features

These features are maintained for backward compatibility but should be avoided in new implementations.

**Props:**
- `TmpFullWidth`: `boolean` - Removes the default horizontal padding from the data collection container.

```tsx
// Avoid using if possible
<DataCollection TmpFullWidth={true} ... />
```

**Edge Cases:**
- Using `TmpFullWidth` might cause visual misalignment with other standard-width components on the same page.