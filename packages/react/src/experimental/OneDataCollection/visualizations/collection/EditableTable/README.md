# EditableTable Visualization

`EditableTableCollection` is a `OneDataCollection` visualization that enables inline cell editing directly in the table. It extends `TableCollection` with optimistic editing capabilities and per-cell error handling.

---

## Architecture

```
EditableTable/
├── EditableTable.tsx          # Main component wrapping TableCollection
├── types.ts                   # Column and options types
├── consts.ts                  # Cell type → component registry
├── index.tsx                  # Public exports
├── context/
│   └── EditableRowContext.tsx # Per-row state provider (optimistic updates)
└── components/
    ├── EditableCellRenderer.tsx  # Renderer deciding editable vs readonly cell
    └── cells/
        ├── index.ts           # Shared props and cell types
        ├── BaseCell.tsx       # Common visual wrapper
        └── TextCell.tsx       # Text cell implementation
```

---

## Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    EditableTableCollection                      │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                   TableCollection                         │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │              EditableRowProvider (per row)          │  │  │
│  │  │  - localItem (optimistic copy)                      │  │  │
│  │  │  - cellErrors                                       │  │  │
│  │  │  - cellLoading                                      │  │  │
│  │  │  - handleCellChange()                               │  │  │
│  │  │                                                     │  │  │
│  │  │  ┌───────────────────────────────────────────────┐  │  │  │
│  │  │  │          EditableCellRenderer (per cell)      │  │  │  │
│  │  │  │  - Reads editType + editable from column      │  │  │  │
│  │  │  │  - Renders TextCell / readonly fallback       │  │  │  │
│  │  │  └───────────────────────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

1. **User edits a cell** → `TextCell.onChange(value)`
2. **`handleCellChange(columnId, value)`** in context:
   - Updates `localItem` immediately (optimistic)
   - Clears the error for that column
   - Sets `cellLoading[columnId] = true`
   - Invokes `onCellChange(updatedItem)`
3. **`onCellChange` resolves**:
   - With `void` → success, no additional changes
   - With `{ columnId: "message" }` → sets errors on indicated cells
   - Rejects with `Error` → shows message on the edited cell
4. **Finally** → `cellLoading[columnId] = false`

---

## Basic Usage

```tsx
import { OneDataCollection } from "@/experimental/OneDataCollection"

const columns = [
  {
    id: "name",
    label: "Name",
    render: (item) => item.name,
    editType: () => "text", // Always shows text editor
  },
  {
    id: "email",
    label: "Email",
    render: (item) => item.email,
    editType: (item) => (!item.locked ? "text" : "display-only"),
  },
  {
    id: "status",
    label: "Status",
    render: (item) => item.status,
    // No editType → always readonly
    editType: (item) => "disabled",
  },
] as const

function MyEditableTable() {
  const handleCellChange = async (updatedItem) => {
    try {
      await api.updateRecord(updatedItem.id, updatedItem)
      // Success: return nothing
    } catch (error) {
      // Return errors by column
      return { name: "Name already exists" }
    }
  }

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        {
          type: "editableTable",
          columns,
          onCellChange: handleCellChange,
        },
      ]}
    />
  )
}
```

---

## Column Definition

```ts
type EditableTableColumnDefinition<R> = TableColumnDefinition<R> & {
  /**
   * Optional placeholder passed to editable inputs (for example date cells).
   */
  inputPlaceholder?: string

  /**
   * Determines the editor type for the cell.
   * Returns the type ("text", "date", "select", "multiselect") or undefined for readonly.
   */
  editType?: (item: R) => EditableTableCellEditType | undefined
}
```

### Available Cell Types

| Type            | Component    | Description              |
| --------------- | ------------ | ------------------------ |
| `"text"`        | `TextCell`   | Simple text input        |
| `"date"`        | `TextCell`\* | Date input (TODO)        |
| `"select"`      | `TextCell`\* | Single selector (TODO)   |
| `"multiselect"` | `TextCell`\* | Multiple selector (TODO) |

\*Currently all map to `TextCell`. New types are added in `consts.ts`.

---

## Adding a New Cell Type

1. **Add the type** in `components/cells/index.ts`:

   ```ts
   export type EditableTableCellEditType =
     | "text"
     | "date"
     | "select"
     | "myNewType" // ← add here
   ```

2. **Create the component** in `components/cells/MyNewTypeCell.tsx`:

   ```tsx
   import { EditableCellProps } from "."
   import { BaseCell } from "./BaseCell"

   export function MyNewTypeCell({
     label,
     value,
     align,
     error,
     loading,
     onChange,
   }: EditableCellProps) {
     return <BaseCell>{/* Your implementation */}</BaseCell>
   }
   ```

3. **Register in the map** in `consts.ts`:

   ```ts
   import { MyNewTypeCell } from "./components/cells/MyNewTypeCell"

   export const editableCellMap = {
     text: TextCell,
     date: TextCell,
     select: TextCell,
     multiselect: TextCell,
     myNewType: MyNewTypeCell, // ← add here
   }
   ```

---

## Error Handling

### Per-cell Errors (Validation)

```ts
const handleCellChange = async (updatedItem) => {
  const errors: Record<string, string> = {}

  if (!updatedItem.name) {
    errors.name = "Name is required"
  }
  if (!isValidEmail(updatedItem.email)) {
    errors.email = "Invalid email"
  }

  if (Object.keys(errors).length > 0) {
    return errors // Shown on corresponding cells
  }

  await api.save(updatedItem)
}
```

### Server Errors (Exception)

```ts
const handleCellChange = async (updatedItem) => {
  try {
    await api.save(updatedItem)
  } catch (error) {
    throw new Error("Failed to save") // Shown on the edited cell
  }
}
```

---

## Context API

### `useEditableRow<R>()`

Hook to access the editing state of the current row from any child component.

```ts
const {
  localItem, // R — optimistic copy of the item
  cellErrors, // Record<string, string> — errors by column
  cellLoading, // Record<string, boolean> — loading by column
  handleCellChange, // (columnId: string, value: unknown) => void
} = useEditableRow<MyRecordType>()
```

### `EditableRowProvider`

Provider that wraps each row. Normally not used directly; `EditableTableCollection` injects it automatically.

```tsx
<EditableRowProvider item={item} onCellChange={onCellChange}>
  {children}
</EditableRowProvider>
```

---

## Differences from TableCollection

| Feature                 | TableCollection | EditableTableCollection |
| ----------------------- | --------------- | ----------------------- |
| Editable cells          | ❌              | ✅                      |
| `editType` on columns   | ❌              | ✅                      |
| `editable` on columns   | ❌              | ✅ (required)           |
| `onCellChange` callback | ❌              | ✅ (required)           |
| Item actions            | ✅              | ❌ (disabled)           |
| Row wrapper             | Optional        | `EditableRowProvider`   |
| Cell renderer           | Optional        | `EditableCellRenderer`  |

---

## Performance Considerations

- **Optimistic updates**: Changes are reflected immediately in the UI before the server responds.
- **Stable ref for `onCellChange`**: The callback is stored in a ref to avoid unnecessary re-renders of the `RowWrapper`.
- **Per-cell loading**: Only the edited cell shows loading state, not the entire row.

---

## Exports

```ts
// Main component
export { EditableTableCollection } from "./EditableTable"

// Types
export type {
  EditableTableColumnDefinition,
  EditableTableVisualizationOptions,
  EditableTableVisualizationSettings,
  EditableTableCollectionProps,
} from "./types"

// Context (for advanced cases)
export {
  EditableRowProvider,
  useEditableRow,
} from "./context/EditableRowContext"
export type { EditableRowProviderProps } from "./context/EditableRowContext"

// Cell renderer (for extension)
export { EditableCellRenderer } from "./components/EditableCellRenderer"
```
