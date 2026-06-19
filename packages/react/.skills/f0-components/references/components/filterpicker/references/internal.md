## Internal

The Internal sub-components expose the constituent parts of the `FilterPicker` (Filters, Presets, and Chips). Use these when the default layout is insufficient and you need to build a custom UI arrangement while maintaining the underlying filter logic.

**Props:**
- `children`: `ReactNode` - The custom layout containing internal parts.
- `source`: `DataSource` - The data source providing filter definitions and state.

**Usage Examples:**

```tsx
import { FilterPickerInternal, Filters, Presets, Chips } from '@components/FilterPicker/internal';

const CustomLayout = () => (
  <FilterPickerInternal source={myDataSource}>
    <div className="custom-grid">
      <aside>
        <Presets />
      </aside>
      <main>
        <div className="toolbar">
          <Filters />
        </div>
        <Chips />
      </main>
    </div>
  </FilterPickerInternal>
);
```

**Edge Cases & Gotchas:**
- **State Synchronization**: When using internal components, ensure they are all wrapped within the same `FilterPickerInternal` provider to share state.
- **Layout Constraints**: Unlike the default `FilterPicker`, the internal components do not provide automatic responsive behavior; you must handle the CSS for the custom layout.

**Note:** For standard implementations, prefer the default `FilterPicker`. See the skill in ./filter-picker/SKILL.md.