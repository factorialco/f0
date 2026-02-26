## Presets

Presets are predefined filter configurations that allow users to quickly apply frequently used criteria. They simplify navigation by reducing the need for manual filter adjustments for common views.

**Props:**
- `label`: `string` (Required) - The text displayed on the preset button.
- `filter`: `FiltersState<Filters>` (Required) - The specific filter values associated with this preset.
- `itemsCount`: `(value: FiltersState<Filters>) => number` - A function that returns the number of items matching this preset. It receives the current filter state as an argument.
- `mode`: `'replace' | 'additive'` (Default: `'replace'`) - Determines how the preset interacts with existing filters.
  - `replace`: Clears all current filters and applies the preset.
  - `additive`: Merges the preset values with current selections, preserving unrelated filters.

**Usage Examples:**

```tsx
const presets = [
  {
    label: 'Engineering Team',
    filter: { department: ['eng'] },
    mode: 'replace'
  },
  {
    label: 'Remote Only',
    filter: { location: ['remote'] },
    mode: 'additive',
    itemsCount: (currentFilters) => fetchCount(currentFilters)
  }
];

// Usage within a data source
const source = {
  filters: myFilters,
  presets: presets,
};
```

**Behavior & Logic:**
- **Deselection**: When a preset is deselected, only the keys defined in that preset's `filter` object are removed.
- **Additive Mode**: Best used for "Quick Toggles" (like Status or Location) where the user might want to keep their existing search queries or date ranges intact.
- **Performance**: The `itemsCount` function is called on render. Ensure it is a pure function or uses memoization/caching to prevent performance degradation.

**Best Practices:**
- Prioritize presets for the most frequently consulted information to avoid UI clutter.
- Use `additive` mode when presets represent independent dimensions (e.g., a "High Priority" preset that shouldn't clear the "Assigned To Me" filter).

**Note:** Presets require defined filters to function. For filter definitions, see the skill in ./filters/SKILL.md.