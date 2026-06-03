/**
 * Bulk Editor — inline spreadsheet for Pending Controlling.
 *
 * Renders the selected expenses as an editable table styled to match
 * the OneDataCollection list it replaces (same tr/th/td chrome, same
 * checkbox alignment, same selection banner). All controlling columns
 * are editable; the row-identity columns (Merchant, Date, Amount) are
 * read-only context.
 *
 * Spec E (Shopify-style spreadsheet): cells render as visible form
 * fields at rest so they obviously read as editable. Click → focus →
 * edit. Save mutates the underlying `expenses` fixture in place via
 * `useBulkEditState.commit()` and returns control to the parent
 * (which clears `inlineBulkEditIds` and re-renders the list). Cancel
 * discards pending edits — with a confirm prompt if anything is
 * dirty.
 *
 * Header / chrome:
 *   - No big title card. Save / Cancel live in a slim right-aligned
 *     toolbar above the table, matching where the DC's collection
 *     actions sit.
 *   - Column headers are plain (no dropdowns). Bulk apply works
 *     exclusively through the pinned "Set all" row at the top of
 *     tbody (Shopify-style broadcaster).
 *   - When rows are checkbox-selected, a gray DC-style banner row
 *     replaces the Set-all row's count label ("N selected · clear")
 *     and the Set-all row writes to the selection only.
 *
 * Why native form controls (not F0Select):
 *   - F0Select inside a table row triggers a re-render loop against
 *     the AI form registry (see SubmitterEditForm.tsx header comment
 *     in this prototype).
 *   - Native `<select>` / `<input>` keep keyboard nav + accessibility
 *     and match the inline-editor pattern.
 */
import {
  controllingTags,
  costCenters,
  projects,
  subcategoriesByCategory,
  vatRates,
  type ExpenseCategory,
} from "@/fixtures"
import { F0Button, F0Checkbox } from "@factorialco/f0-react"
import { useCallback, useMemo, useState } from "react"

import type { SpendingRow } from "../../shared/rows"
import {
  COLUMN_LABEL,
  EDITABLE_COLUMNS,
  isApplicable,
  type EditableColumnId,
} from "./applicability"
import { useBulkEditState, type CellValue } from "./useBulkEditState"

type Props = {
  rows: SpendingRow[]
  onClose: () => void
}

const ALL_CATEGORIES: ExpenseCategory[] = [
  "Meals",
  "Taxis",
  "Travel",
  "Shopping",
  "Hotel",
  "Office",
  "Software",
  "Mileage",
  "Per diem",
]

export function BulkEditor({ rows, onClose }: Props) {
  const state = useBulkEditState(rows)

  /**
   * Row-level selection (checkbox column). When non-empty, the
   * Set-all row writes to these rows only. Mirrors the f0-native
   * multi-select mental model (OneDataCollection-style), discoverable
   * via leftmost checkbox column + select-all in the header.
   */
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(
    () => new Set()
  )
  const allRowIds = useMemo(() => rows.map((r) => r.id), [rows])
  const allSelected =
    selectedRowIds.size > 0 && selectedRowIds.size === allRowIds.length
  const someSelected =
    selectedRowIds.size > 0 && selectedRowIds.size < allRowIds.length
  const toggleRow = useCallback((rowId: string, checked: boolean) => {
    setSelectedRowIds((prev) => {
      const next = new Set(prev)
      if (checked) next.add(rowId)
      else next.delete(rowId)
      return next
    })
  }, [])
  const toggleAll = useCallback(
    (checked: boolean) => {
      setSelectedRowIds(checked ? new Set(allRowIds) : new Set())
    },
    [allRowIds]
  )

  const onCancel = useCallback(() => {
    if (state.isDirty) {
      const ok = window.confirm(
        `You have ${state.dirtyCellCount} unsaved change${state.dirtyCellCount === 1 ? "" : "s"}. Discard?`
      )
      if (!ok) return
    }
    state.discard()
    onClose()
  }, [state, onClose])

  const onSave = useCallback(() => {
    state.commit()
    onClose()
  }, [state, onClose])

  return (
    <div className="flex flex-col">
      {/*
        DC-style toolbar: right-aligned actions, no title. Cancel
        is secondary, Save is the primary, disabled until something
        is dirty.
      */}
      <div className="flex items-center justify-end gap-2 py-3">
        <F0Button label="Cancel" variant="outline" onClick={onCancel} />
        <F0Button
          label={state.isDirty ? `Save (${state.dirtyCellCount})` : "Save"}
          variant="default"
          disabled={!state.isDirty}
          onClick={onSave}
        />
      </div>

      <div className="relative w-full">
        <table className="w-full caption-bottom border-spacing-0 border-0 border-none text-base">
          <thead className="relative min-h-10 [&_tr]:hover:bg-transparent before:absolute before:inset-x-0 before:top-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']">
            <tr>
              <Th checkbox>
                <F0Checkbox
                  title="Select all rows"
                  hideLabel
                  checked={allSelected}
                  indeterminate={someSelected}
                  onCheckedChange={(v) => toggleAll(Boolean(v))}
                />
              </Th>
              <Th>Merchant</Th>
              <Th>Date</Th>
              <Th>Amount</Th>
              {EDITABLE_COLUMNS.map((c) => (
                <Th key={c}>{COLUMN_LABEL[c]}</Th>
              ))}
            </tr>
          </thead>
          <tbody>
            <SetAllRow
              rowCount={rows.length}
              selectedCount={selectedRowIds.size}
              onClearSelection={() => setSelectedRowIds(new Set())}
              onApply={(colId, value) => {
                if (selectedRowIds.size > 0) {
                  state.applyToRows(colId, value, selectedRowIds)
                } else {
                  state.applyToAll(colId, value)
                }
              }}
            />
            {state.rows.map((re) => {
              const row = re.row
              const category = state.categoryOf(row.id)
              const rowSelected = selectedRowIds.has(row.id)
              return (
                <tr
                  key={row.id}
                  className={
                    "group relative transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] hover:bg-f1-background-hover " +
                    (rowSelected
                      ? "bg-f1-background-selected hover:bg-f1-background-selected"
                      : "")
                  }
                >
                  <Td checkbox>
                    <F0Checkbox
                      title={`Select ${row.name}`}
                      hideLabel
                      checked={rowSelected}
                      onCheckedChange={(v) => toggleRow(row.id, Boolean(v))}
                    />
                  </Td>
                  <Td>{row.name}</Td>
                  <Td>{row.date}</Td>
                  <Td>{row.amount.toFixed(2)} €</Td>
                  {EDITABLE_COLUMNS.map((colId) => {
                    const value: CellValue =
                      colId in re.edits
                        ? re.edits[colId]
                        : (re.original[colId] as CellValue)
                    const dirty = colId in re.edits
                    return (
                      <EditableCell
                        key={colId}
                        colId={colId}
                        value={value}
                        dirty={dirty}
                        rowCategory={category}
                        onFocus={() => state.setActive(row.id, colId)}
                        onChange={(v) => {
                          state.setActive(row.id, colId)
                          state.applyToActive(colId, v)
                        }}
                        isApplicable={isApplicable(colId, category)}
                      />
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/**
 * Table head cell — replicates OneTable's `<TableHead>` class string
 * (see packages/react/src/ui/table.tsx). The `[&:has([role=checkbox])]`
 * selector tightens horizontal padding for the checkbox column so its
 * alignment matches the rest of the DC tables. `checkbox` prop is a
 * convenience flag for the role-less wrapper case but the `:has`
 * selector handles the styling on its own.
 */
function Th({
  children,
  checkbox,
}: {
  children: React.ReactNode
  checkbox?: boolean
}) {
  return (
    <th
      className={
        "relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6 " +
        "after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover " +
        "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent " +
        (checkbox ? "w-10" : "")
      }
    >
      {children}
    </th>
  )
}

function Td({
  children,
  checkbox,
}: {
  children: React.ReactNode
  checkbox?: boolean
}) {
  return (
    <td
      className={
        "relative min-h-[48px] whitespace-nowrap px-3 py-2 align-middle text-f1-foreground first:pl-6 last:pr-6 " +
        "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 " +
        (checkbox ? "w-10" : "")
      }
    >
      {children}
    </td>
  )
}

// -- Cells -----------------------------------------------------------

type CellProps = {
  colId: EditableColumnId
  value: CellValue
  dirty: boolean
  rowCategory: ExpenseCategory | undefined
  onChange: (v: CellValue) => void
  onFocus: () => void
  isApplicable: boolean
}

function EditableCell({
  colId,
  value,
  dirty,
  rowCategory,
  onChange,
  onFocus,
  isApplicable,
}: CellProps) {
  if (!isApplicable) {
    return (
      <td className="relative min-h-[48px] whitespace-nowrap bg-f1-background-secondary px-3 py-2 align-middle italic text-f1-foreground-tertiary last:pr-6">
        N/A
      </td>
    )
  }
  return (
    <td
      className={
        "relative min-h-[48px] whitespace-nowrap px-2 py-1.5 align-middle last:pr-6 " +
        (dirty ? "bg-f1-background-accent" : "")
      }
    >
      {renderInput(colId, value, rowCategory, onChange, onFocus)}
    </td>
  )
}

/**
 * Pinned "Set all" row rendered at the top of tbody. Each editable
 * column gets an input widget that on every change broadcasts to all
 * applicable rows (skipping N/A via `applyToAll` / `applyToRows`).
 * The local `draft` state exists only for the input's controlled
 * value — the source of truth is the per-row edits in
 * `useBulkEditState`. Mileage / per-diem rows are skipped
 * automatically for VAT rate (DT-002).
 *
 * Label cell mimics the DC's gray selection banner:
 *   - 0 selected → "Set all N rows ↓" (subtle prompt)
 *   - N selected → "N selected · Clear" (matches DC banner copy)
 */
function SetAllRow(props: {
  rowCount: number
  selectedCount: number
  onClearSelection: () => void
  onApply: (colId: EditableColumnId, value: CellValue) => void
}) {
  const { rowCount, selectedCount, onClearSelection, onApply } = props
  const [draft, setDraft] = useState<
    Partial<Record<EditableColumnId, CellValue>>
  >({})
  const hasSelection = selectedCount > 0
  return (
    <tr className="relative bg-f1-background-secondary after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']">
      <td
        colSpan={4}
        className="relative whitespace-nowrap px-3 py-2 align-middle text-sm text-f1-foreground-secondary first:pl-6"
      >
        {hasSelection ? (
          <span className="flex items-center gap-2">
            <span className="font-medium text-f1-foreground">
              {selectedCount} selected
            </span>
            <span className="text-f1-foreground-tertiary">·</span>
            <button
              type="button"
              onClick={onClearSelection}
              className="rounded px-1 py-0.5 text-f1-foreground-secondary underline-offset-2 hover:bg-f1-background-hover hover:underline"
            >
              Clear selection
            </button>
          </span>
        ) : (
          <span className="text-f1-foreground-tertiary">
            Set all {rowCount} rows ↓
          </span>
        )}
      </td>
      {EDITABLE_COLUMNS.map((colId) => {
        const value: CellValue =
          colId in draft
            ? (draft[colId] as CellValue)
            : colId === "tags"
              ? []
              : ""
        return (
          <td
            key={colId}
            className="relative min-h-[48px] whitespace-nowrap px-3 py-2 align-middle text-f1-foreground last:pr-6"
          >
            <BulkInput
              colId={colId}
              value={value}
              onChange={(v) => {
                setDraft((prev) => ({ ...prev, [colId]: v }))
                // Don't broadcast empty values — they'd wipe every
                // row's description / tags. Empty string from the
                // text input usually means "user is mid-edit" or
                // cleared the field by accident.
                const isEmpty =
                  (typeof v === "string" && v.trim() === "") ||
                  (Array.isArray(v) && v.length === 0)
                if (isEmpty) return
                onApply(colId, v)
              }}
            />
          </td>
        )
      })}
    </tr>
  )
}

/**
 * Input renderer for the Set-all row. Differs from the per-row cell
 * renderer in one way: subcategory has no row context, so it shows
 * the union of every category's subcategory list (de-duplicated). The
 * rest is shared with `renderInput`.
 */
function BulkInput(props: {
  colId: EditableColumnId
  value: CellValue
  onChange: (v: CellValue) => void
}) {
  const { colId, value, onChange } = props
  if (colId === "subcategory") {
    const all = new Set<string>()
    for (const cat of ALL_CATEGORIES) {
      for (const s of subcategoriesByCategory[cat] ?? []) all.add(s)
    }
    return (
      <SelectInput
        value={typeof value === "string" ? value : ""}
        options={Array.from(all).map((s) => ({ id: s, label: s }))}
        onFocus={() => {}}
        onChange={onChange}
      />
    )
  }
  return renderInput(colId, value, undefined, onChange, () => {})
}

function renderInput(
  colId: EditableColumnId,
  value: CellValue,
  rowCategory: ExpenseCategory | undefined,
  onChange: (v: CellValue) => void,
  onFocus: () => void
) {
  switch (colId) {
    case "category":
      return (
        <SelectInput
          value={typeof value === "string" ? value : ""}
          options={ALL_CATEGORIES.map((c) => ({ id: c, label: c }))}
          onFocus={onFocus}
          onChange={onChange}
        />
      )
    case "subcategory": {
      // Subcategory options depend on the row's category (fixture
      // value, not the in-flight category edit — keeping the
      // dependency one-way to avoid cascade weirdness in the table).
      const subs = rowCategory ? subcategoriesByCategory[rowCategory] : []
      return (
        <SelectInput
          value={typeof value === "string" ? value : ""}
          options={subs.map((s) => ({ id: s, label: s }))}
          onFocus={onFocus}
          onChange={onChange}
        />
      )
    }
    case "costCenter":
      return (
        <SelectInput
          value={typeof value === "string" ? value : ""}
          options={costCenters.map((c) => ({
            id: c.id,
            label: `${c.name} (${c.code})`,
          }))}
          onFocus={onFocus}
          onChange={onChange}
        />
      )
    case "project":
      return (
        <SelectInput
          value={typeof value === "string" ? value : ""}
          options={projects.map((p) => ({
            id: p.id,
            label: `${p.name} (${p.code})`,
          }))}
          onFocus={onFocus}
          onChange={onChange}
        />
      )
    case "vatRate":
      return (
        <SelectInput
          value={typeof value === "string" ? value : ""}
          options={vatRates.map((v) => ({ id: v.id, label: v.label }))}
          onFocus={onFocus}
          onChange={onChange}
        />
      )
    case "tags":
      return (
        <TagsInput
          value={Array.isArray(value) ? (value as string[]) : []}
          onFocus={onFocus}
          onChange={onChange}
        />
      )
    case "description":
      return (
        <TextInput
          value={typeof value === "string" ? value : ""}
          onFocus={onFocus}
          onChange={onChange}
          placeholder="Add note"
        />
      )
  }
}

// -- Native form-control wrappers -----------------------------------

const fieldClass =
  "w-full min-w-[140px] rounded-md border border-transparent bg-transparent px-2 py-1 text-base text-f1-foreground outline-none transition-colors hover:border-f1-border-secondary hover:bg-f1-background focus:border-f1-border-selected-bold focus:bg-f1-background"

function SelectInput(props: {
  value: string
  options: ReadonlyArray<{ id: string; label: string }>
  onChange: (v: CellValue) => void
  onFocus: () => void
}) {
  return (
    <select
      value={props.value}
      onFocus={props.onFocus}
      onChange={(e) => props.onChange(e.target.value || null)}
      className={fieldClass + " cursor-pointer"}
    >
      <option value="">-</option>
      {props.options.map((o) => (
        <option key={o.id} value={o.id}>
          {o.label}
        </option>
      ))}
    </select>
  )
}

function TextInput(props: {
  value: string
  onChange: (v: CellValue) => void
  onFocus: () => void
  placeholder?: string
}) {
  return (
    <input
      type="text"
      value={props.value}
      onFocus={props.onFocus}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      className={fieldClass + " min-w-[180px] cursor-text"}
    />
  )
}

/**
 * Tags = multi-select. Native `<select multiple>` is ugly in most
 * browsers, so we use a small "chip stack + Add" combo: clickable
 * chips for removal, plus an inline select for adding one tag at a
 * time. Crude but visible and obviously editable, which is the
 * priority for this cut.
 */
function TagsInput(props: {
  value: string[]
  onChange: (v: CellValue) => void
  onFocus: () => void
}) {
  const selected = props.value
  const available = controllingTags.filter((t) => !selected.includes(t.id))
  return (
    <div
      className="flex min-w-[200px] flex-wrap items-center gap-1.5"
      onFocus={props.onFocus}
    >
      {selected.map((tagId) => {
        const tag = controllingTags.find((t) => t.id === tagId)
        if (!tag) return null
        return (
          <button
            key={tagId}
            type="button"
            onClick={() =>
              props.onChange(selected.filter((id) => id !== tagId))
            }
            title="Click to remove"
            className="rounded-full border border-f1-border bg-f1-background-secondary px-2 py-0.5 text-xs text-f1-foreground hover:border-f1-border-hover"
          >
            {tag.label} ✕
          </button>
        )
      })}
      <select
        value=""
        onFocus={props.onFocus}
        onChange={(e) => {
          const id = e.target.value
          if (!id) return
          props.onChange([...selected, id])
        }}
        className="w-auto min-w-[120px] cursor-pointer rounded-md border border-f1-border bg-f1-background px-2 py-1 text-xs text-f1-foreground-secondary outline-none hover:border-f1-border-hover"
      >
        <option value="">+ Add tag</option>
        {available.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
    </div>
  )
}
