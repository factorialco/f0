## useGroups

The `useGroups` hook manages the expand/collapse state for grouped data collections. It provides a simple API to track which groups are open and helper functions for animations.

**Props (Parameters):**
- `groups`: `GroupRecord<R>[]` (Required) - The array of groups returned by `useData`.
- `defaultOpenGroups`: `boolean | string[]` (Optional) - If `true`, all groups start open. If an array, only specific group keys start open.

**Return Value:**
- `openGroups`: `string[]` - Array of currently expanded group keys.
- `toggleGroup`: `(key: string) => void` - Toggles a specific group.
- `expandAll`: `() => void` - Opens all groups.
- `collapseAll`: `() => void` - Closes all groups.
- `getAnimationVariants`: `() => object` - Returns variants for Framer Motion.

**Usage Example:**

```tsx
const { data } = useData(source);
const { openGroups, toggleGroup } = useGroups(data.groups, ['dept-engineering']);

return (
  <div>
    {data.groups.map(group => (
      <div key={group.key}>
        <h3 onClick={() => toggleGroup(group.key)}>
          {group.label} {openGroups.includes(group.key) ? '▼' : '▶'}
        </h3>
        {openGroups.includes(group.key) && (
          <ul>
            {group.items.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>
        )}
      </div>
    ))}
  </div>
);
```

**Best Practices:**
- Use `expandAll` and `collapseAll` for bulk operations in the UI header.
- For the data structure required by this hook, see the `useData` skill in `./use-data/SKILL.md`.