/**
 * Bulk Editor state.
 *
 * Holds the per-cell pending edits plus the active range selection.
 * Designed to be cheap and predictable: no derived stores, no
 * normalisation, no async. Everything is plain React state and the
 * `commit` step mutates the underlying `expenses` array in place
 * (acceptable in a prototype — there's no API behind it).
 *
 * Model
 *   - `pendingEdits[rowId][colId]` holds the in-flight value the user
 *     typed/picked. `null` is a sentinel for "user explicitly cleared
 *     it"; `undefined` means "no change vs. the seeded controlling
 *     value". This lets a Save round-trip distinguish between
 *     "untouched, keep original" and "user wiped the field".
 *   - `selection` is a Set of `"rowId::colId"` keys for the cells the
 *     user has range-selected (Shift+click / drag). The single
 *     "active" cell that receives keystrokes is `activeKey`.
 *   - Non-applicable cells (DT-002) are silently skipped on apply —
 *     they never enter `pendingEdits` and the user gets no error.
 *
 * Selection model
 *   - Click a cell: makes it the sole active cell, clears prior range.
 *   - Shift+click: extends the range from `anchorKey` to the clicked
 *     cell, rectangular in (row,col) grid order.
 *   - Drag (mousedown -> move -> up): same rectangular extension, but
 *     the anchor is the mousedown cell.
 *   - Type / pick a value in the active cell: applies to every
 *     applicable cell in the range AND to the active cell (so
 *     type-once-apply-range works even when the active cell is at the
 *     edge of the range).
 */
import {
  expenses as fixtureExpenses,
  type ControllingFields,
  type ExpenseCategory,
} from "@/fixtures"
import { useCallback, useMemo, useState } from "react"

import type { SpendingRow } from "../../shared/rows"
import {
  EDITABLE_COLUMNS,
  isApplicable,
  isValueApplicable,
  type EditableColumnId,
} from "./applicability"

/** Value type per column. `null` = explicit clear, undefined = untouched. */
export type CellValue = string | string[] | null | undefined

export type RowEditState = {
  row: SpendingRow
  /** Snapshot of controlling fields when the editor opened. */
  original: ControllingFields
  /** Pending overrides (per column). */
  edits: Partial<Record<EditableColumnId, CellValue>>
  /** Per-column validation message, if any. */
  errors: Partial<Record<EditableColumnId, string>>
}

export type CellKey = `${string}::${EditableColumnId}`

export function cellKey(rowId: string, colId: EditableColumnId): CellKey {
  return `${rowId}::${colId}` as CellKey
}

function readCellOriginal(
  row: RowEditState,
  colId: EditableColumnId
): CellValue {
  const v = row.original[colId]
  return v === undefined ? undefined : (v as CellValue)
}

/** Resolved value = edit if present (including `null` clear), else original. */
export function readCell(
  row: RowEditState,
  colId: EditableColumnId
): CellValue {
  if (colId in row.edits) return row.edits[colId]
  return readCellOriginal(row, colId)
}

function validate(
  _colId: EditableColumnId,
  value: CellValue
): string | undefined {
  // Free-text and select-from-list fields can't be invalid on input —
  // the only validation we need is for vatRate (must be one of the
  // catalog ids) and we'll guard that at the cell level since the
  // user can only pick from a select. Description has no length cap.
  // Tags is multi-select from a fixed list.
  if (value === undefined || value === null || value === "") return undefined
  return undefined
}

export type UseBulkEditStateResult = {
  rows: RowEditState[]
  /** Resolve a row's category; mileage / per-diem rows need DT-002. */
  categoryOf: (rowId: string) => ExpenseCategory | undefined
  /** Active cell receives keystrokes / typed input. */
  activeKey: CellKey | null
  setActive: (rowId: string, colId: EditableColumnId) => void
  /** Range selection. */
  selection: Set<CellKey>
  isSelected: (rowId: string, colId: EditableColumnId) => boolean
  /** Begin a rectangular range from the current anchor (or set anchor). */
  selectRange: (toRowId: string, toColId: EditableColumnId) => void
  /** Drag-select handlers. */
  beginDrag: (rowId: string, colId: EditableColumnId) => void
  extendDrag: (rowId: string, colId: EditableColumnId) => void
  endDrag: () => void
  clearSelection: () => void
  /** Apply a value to the active cell + every applicable cell in selection. */
  applyToActive: (colId: EditableColumnId, value: CellValue) => void
  /**
   * Apply a value to a specific column across EVERY row (skipping
   * non-applicable rows per DT-002). Used by the column-header
   * "Apply to all" popover and by the pinned "Set all" row.
   */
  applyToAll: (colId: EditableColumnId, value: CellValue) => void
  /**
   * Apply a value to a specific column across only the given row
   * ids (still skipping non-applicable rows per DT-002). Used when
   * the user has checked specific rows in the leftmost checkbox
   * column — the "Apply to N selected" mode of the column-header
   * popover + Set-all row.
   */
  applyToRows: (
    colId: EditableColumnId,
    value: CellValue,
    rowIds: Set<string>
  ) => void
  /** Number of cells changed across all rows (used for footer + Save). */
  dirtyCellCount: number
  /** Whether the editor is dirty (anything to lose on Cancel). */
  isDirty: boolean
  /** Mutate the fixture and clear edits. */
  commit: () => void
  /** Discard all pending edits. */
  discard: () => void
}

export function useBulkEditState(
  initialRows: SpendingRow[]
): UseBulkEditStateResult {
  // Snapshot the rows + their controlling state ONCE per editor open.
  // Re-snapshotting on every render would clobber user edits when an
  // upstream parent (the prototype shell) re-renders.
  const [rows, setRows] = useState<RowEditState[]>(() =>
    initialRows.map((row) => ({
      row,
      original: { ...(row.controlling ?? {}) },
      edits: {},
      errors: {},
    }))
  )
  const [activeKey, setActiveKey] = useState<CellKey | null>(null)
  const [anchorKey, setAnchorKey] = useState<CellKey | null>(null)
  const [selection, setSelection] = useState<Set<CellKey>>(() => new Set())
  const [dragging, setDragging] = useState(false)

  const rowIndexById = useMemo(() => {
    const m = new Map<string, number>()
    rows.forEach((r, i) => m.set(r.row.id, i))
    return m
  }, [rows])

  const colIndexById = useMemo(() => {
    const m = new Map<EditableColumnId, number>()
    EDITABLE_COLUMNS.forEach((c, i) => m.set(c, i))
    return m
  }, [])

  const categoryOf = useCallback(
    (rowId: string): ExpenseCategory | undefined => {
      // Pending Controlling only ever shows real expense rows
      // (`approved` + `controlled` statuses), so a fixture lookup is
      // sufficient. Folders and chat drafts can never reach this
      // editor; if they ever do, `undefined` falls back to "VAT
      // applicable" which is the safe default for finance review.
      return fixtureExpenses.find((e) => e.id === rowId)?.category
    },
    []
  )

  const setActive = useCallback(
    (rowId: string, colId: EditableColumnId) => {
      const k = cellKey(rowId, colId)
      setActiveKey(k)
      setAnchorKey(k)
      setSelection(new Set([k]))
    },
    []
  )

  const isSelected = useCallback(
    (rowId: string, colId: EditableColumnId) =>
      selection.has(cellKey(rowId, colId)),
    [selection]
  )

  const computeRange = useCallback(
    (fromKey: CellKey, toRowId: string, toColId: EditableColumnId) => {
      const [fromRowId, fromColId] = fromKey.split("::") as [
        string,
        EditableColumnId,
      ]
      const r1 = rowIndexById.get(fromRowId)
      const r2 = rowIndexById.get(toRowId)
      const c1 = colIndexById.get(fromColId)
      const c2 = colIndexById.get(toColId)
      if (r1 === undefined || r2 === undefined || c1 === undefined || c2 === undefined) {
        return new Set<CellKey>()
      }
      const [rMin, rMax] = r1 <= r2 ? [r1, r2] : [r2, r1]
      const [cMin, cMax] = c1 <= c2 ? [c1, c2] : [c2, c1]
      const next = new Set<CellKey>()
      for (let r = rMin; r <= rMax; r++) {
        const row = rows[r]
        if (!row) continue
        for (let c = cMin; c <= cMax; c++) {
          const col = EDITABLE_COLUMNS[c]
          if (!col) continue
          next.add(cellKey(row.row.id, col))
        }
      }
      return next
    },
    [rowIndexById, colIndexById, rows]
  )

  const selectRange = useCallback(
    (toRowId: string, toColId: EditableColumnId) => {
      const anchor = anchorKey ?? cellKey(toRowId, toColId)
      setActiveKey(cellKey(toRowId, toColId))
      setAnchorKey(anchor)
      setSelection(computeRange(anchor, toRowId, toColId))
    },
    [anchorKey, computeRange]
  )

  const beginDrag = useCallback(
    (rowId: string, colId: EditableColumnId) => {
      const k = cellKey(rowId, colId)
      setActiveKey(k)
      setAnchorKey(k)
      setSelection(new Set([k]))
      setDragging(true)
    },
    []
  )

  const extendDrag = useCallback(
    (rowId: string, colId: EditableColumnId) => {
      if (!dragging || !anchorKey) return
      setActiveKey(cellKey(rowId, colId))
      setSelection(computeRange(anchorKey, rowId, colId))
    },
    [dragging, anchorKey, computeRange]
  )

  const endDrag = useCallback(() => setDragging(false), [])

  const clearSelection = useCallback(() => {
    setSelection(new Set())
    setActiveKey(null)
    setAnchorKey(null)
  }, [])

  const applyToActive = useCallback(
    (colId: EditableColumnId, value: CellValue) => {
      // The active cell anchors which column the apply targets. We
      // intentionally don't broadcast cross-column: if the user
      // selected a 3x4 rectangle and types in one cell, we apply to
      // EVERY cell in the rectangle (all 4 columns × 3 rows), per
      // spec ("type once, apply to range"). Non-applicable cells
      // (DT-002) are silently skipped.
      const targetKeys = selection.size > 0
        ? Array.from(selection)
        : activeKey
          ? [activeKey]
          : []

      if (targetKeys.length === 0) return

      // Group targets by rowId so we update each row state once.
      const byRow = new Map<string, EditableColumnId[]>()
      for (const k of targetKeys) {
        const [rowId, kColId] = k.split("::") as [string, EditableColumnId]
        // When the selection spans multiple columns the user typed a
        // value for `colId` — only apply it to the cells of THAT
        // column. Other columns in the rectangle get left alone (a
        // single value can't sensibly populate a different column).
        if (kColId !== colId) continue
        const arr = byRow.get(rowId) ?? []
        arr.push(kColId)
        byRow.set(rowId, arr)
      }

      // If the active key's column differs from `colId` (user typed in
      // a column that ISN'T in selection but they explicitly chose
      // this column via a header-level apply, etc.), include the
      // active cell too. Defensive — current UI calls applyToActive
      // with the column of the active cell.
      if (activeKey) {
        const [aRowId, aColId] = activeKey.split("::") as [
          string,
          EditableColumnId,
        ]
        if (aColId === colId && !byRow.has(aRowId)) {
          byRow.set(aRowId, [aColId])
        }
      }

      setRows((prev) =>
        prev.map((row) => {
          const cols = byRow.get(row.row.id)
          if (!cols) return row
          // DT-002: skip non-applicable cells silently.
          if (!isApplicable(colId, fixtureExpenses.find((e) => e.id === row.row.id)?.category)) {
            return row
          }
          const nextEdits = { ...row.edits, [colId]: value }
          const err = validate(colId, value)
          const nextErrors = { ...row.errors }
          if (err) nextErrors[colId] = err
          else delete nextErrors[colId]
          return { ...row, edits: nextEdits, errors: nextErrors }
        })
      )
    },
    [selection, activeKey]
  )

  const applyToAll = useCallback(
    (colId: EditableColumnId, value: CellValue) => {
      // Bypass selection entirely: write the value to every row that
      // can accept it. Skipping is value-aware (DT-002 silently
      // skips Mileage / Per diem for VAT rate; subcategory is only
      // written to rows whose category lists that subcategory).
      // Used by the pinned "Set all" row. Keeps existing per-row
      // edits in other columns intact.
      setRows((prev) =>
        prev.map((row) => {
          const cat = fixtureExpenses.find((e) => e.id === row.row.id)?.category
          if (!isValueApplicable(colId, cat, value)) return row
          return {
            ...row,
            edits: { ...row.edits, [colId]: value },
          }
        })
      )
    },
    []
  )

  const applyToRows = useCallback(
    (colId: EditableColumnId, value: CellValue, rowIds: Set<string>) => {
      // Same as applyToAll but filtered to the given row id set.
      // Used by the Set-all row when the user has selected specific
      // rows via the leftmost checkbox column.
      setRows((prev) =>
        prev.map((row) => {
          if (!rowIds.has(row.row.id)) return row
          const cat = fixtureExpenses.find((e) => e.id === row.row.id)?.category
          if (!isValueApplicable(colId, cat, value)) return row
          return {
            ...row,
            edits: { ...row.edits, [colId]: value },
          }
        })
      )
    },
    []
  )

  const dirtyCellCount = useMemo(() => {
    let n = 0
    for (const row of rows) {
      for (const colId of EDITABLE_COLUMNS) {
        if (colId in row.edits) {
          const next = row.edits[colId]
          const orig = readCellOriginal(row, colId)
          if (next !== orig) n++
        }
      }
    }
    return n
  }, [rows])

  const isDirty = dirtyCellCount > 0

  const commit = useCallback(() => {
    // Mutate the underlying expense in place. The fixture array is
    // shared module state, so the next render of `useManageRows`
    // (which reads from `expenses`) will pick up the new values.
    for (const row of rows) {
      const target = fixtureExpenses.find((e) => e.id === row.row.id)
      if (!target) continue
      const merged: ControllingFields = { ...(target.controlling ?? {}) }
      for (const colId of EDITABLE_COLUMNS) {
        if (!(colId in row.edits)) continue
        const v = row.edits[colId]
        if (v === null || v === undefined || v === "") {
          delete merged[colId]
        } else {
          // The TS narrowing of ControllingFields per-key is overkill
          // for a prototype — we know each colId maps to its own
          // matching field shape.
          ;(merged as Record<string, unknown>)[colId] = v
        }
      }
      target.controlling = merged
    }
    setRows((prev) =>
      prev.map((r) => ({ ...r, edits: {}, errors: {}, original: { ...(fixtureExpenses.find((e) => e.id === r.row.id)?.controlling ?? {}) } }))
    )
  }, [rows])

  const discard = useCallback(() => {
    setRows((prev) => prev.map((r) => ({ ...r, edits: {}, errors: {} })))
    clearSelection()
  }, [clearSelection])

  return {
    rows,
    categoryOf,
    activeKey,
    setActive,
    selection,
    isSelected,
    selectRange,
    beginDrag,
    extendDrag,
    endDrag,
    clearSelection,
    applyToActive,
    applyToAll,
    applyToRows,
    dirtyCellCount,
    isDirty,
    commit,
    discard,
  }
}
