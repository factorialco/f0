## Internal

The `SortAndHideList` is an internal utility component used within table settings. it provides a UI for users to manage column visibility and their display order.

**Props:**
- `items`: `SortAndHideItem[]` - Array of objects representing columns.
- `items[].id`: `string` - Unique identifier for the column.
- `items[].label`: `string` - Display name of the column.
- `items[].isVisible`: `boolean` - Current visibility state.
- `items[].isFixed`: `boolean` - If true, the column cannot be hidden (required).

```tsx
// Internal usage within Table Settings
<SortAndHideList
  items={[
    { id: 'name', label: 'Name', isVisible: true, isFixed: true },
    { id: 'email', label: 'Email', isVisible: true, isFixed: false },
    { id: 'phone', label: 'Phone Number', isVisible: false, isFixed: false }
  ]}
  onOrderChange={handleOrderChange}
  onVisibilityChange={handleVisibilityChange}
/>
```

**Edge Cases:**
- **Long Labels**: The component handles long column names by wrapping or truncating based on container width.
- **Empty List**: Displays a neutral state if no optional columns are available to configure.