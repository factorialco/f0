import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { ReactNode } from "react"

import type { RecordType } from "@/hooks/datasource"

import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import {
  OneTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/experimental/OneTable"
import { Add, Delete, Handle, Pencil } from "@/icons/app"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { EditableCellRenderer } from "@/patterns/OneDataCollection/visualizations/collection/EditableTable/components/EditableCellRenderer"
import { EditableRowProvider } from "@/patterns/OneDataCollection/visualizations/collection/EditableTable/context/EditableRowContext"

import type {
  EditableColumn,
  OneEditableTableColumn,
  OneEditableTableProps,
} from "./types"

/** Width (px) of the leading drag-handle column. */
const HANDLE_COL_WIDTH = 36
/** Width (px) of the trailing actions column with a single button. */
const SINGLE_ACTION_COL_WIDTH = 64
/** Width (px) of the trailing actions column with edit + remove buttons. */
const DOUBLE_ACTION_COL_WIDTH = 104

const ROW_CLASSES = cn(
  "group transition-colors hover:bg-f1-background-hover",
  "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']"
)

// The shared table primitive forces an edge gutter (`first:pl-6 last:pr-6`)
// for full-width collection tables. `cn` (tailwind-merge) dedupes it to 0 here
// so cells sit flush and their inner content controls the padding — this also
// gives the action column its full width so the icon buttons fit inside px-2.
const CELL_CLASSES = "h-[48px] p-0 align-middle first:pl-0 last:pr-0"
// Cells sit flush (pl-0) but their inputs have 12px of internal padding, so
// headers use pl-3/pr-3 to line their text up with the cell content.
const HEAD_CLASSES = "first:pl-3 last:pr-3"
/**
 * Keeps a small leading gutter on the drag-handle cell/header so the grip
 * isn't flush against the edge (overrides the reset above).
 */
const HANDLE_CELL_CLASSES = "first:pl-3"

/**
 * Fills in the `render` fallback so columns satisfy the full editable-table
 * column contract expected by EditableCellRenderer.
 */
function withRenderFallback<R extends RecordType>(
  column: OneEditableTableColumn<R>
): EditableColumn<R> {
  return {
    render: (item: R) => {
      const value = item[column.id as keyof R]
      return value === null || value === undefined ? "" : String(value)
    },
    ...column,
  } as EditableColumn<R>
}

type RowCellsProps<R extends RecordType> = {
  item: R
  index: number
  columns: ReadonlyArray<EditableColumn<R>>
  onRemoveRow?: (item: R, index: number) => void
  onEditRow?: (item: R, index: number) => void
  canEditRow?: (item: R, index: number) => boolean
  removeLabel: string
  editLabel: string
  /** Present only when the row is sortable */
  dragHandle?: ReactNode
}

/** The cells of a single row: optional handle, editable cells, optional actions. */
function RowCells<R extends RecordType>({
  item,
  index,
  columns,
  onRemoveRow,
  onEditRow,
  canEditRow,
  removeLabel,
  editLabel,
  dragHandle,
}: RowCellsProps<R>) {
  const hasActionsColumn = !!onRemoveRow || !!onEditRow
  const showEdit = !!onEditRow && (canEditRow?.(item, index) ?? true)
  return (
    <>
      {dragHandle !== undefined && (
        <TableCell
          width={HANDLE_COL_WIDTH}
          className={cn(CELL_CLASSES, HANDLE_CELL_CLASSES)}
        >
          <div className="pointer-events-auto flex h-full items-center justify-center">
            {dragHandle}
          </div>
        </TableCell>
      )}
      {columns.map((column, cellIndex) => (
        <TableCell
          key={column.id ?? `cell-${cellIndex}`}
          firstCell={cellIndex === 0}
          width={column.width}
          minWidth={column.minWidth}
          className={CELL_CLASSES}
        >
          <EditableCellRenderer
            item={item}
            column={column}
            cellIndex={cellIndex}
            isLastColumn={!hasActionsColumn && cellIndex === columns.length - 1}
          >
            {null}
          </EditableCellRenderer>
        </TableCell>
      ))}
      {hasActionsColumn && (
        <TableCell
          width={
            onEditRow && onRemoveRow
              ? DOUBLE_ACTION_COL_WIDTH
              : SINGLE_ACTION_COL_WIDTH
          }
          className={CELL_CLASSES}
        >
          <div className="pointer-events-auto flex h-full items-center justify-end gap-2 px-2">
            {showEdit && (
              <F0Button
                type="button"
                variant="outline"
                size="md"
                hideLabel
                icon={Pencil}
                label={editLabel}
                onClick={() => onEditRow(item, index)}
              />
            )}
            {onRemoveRow && (
              // The critical variant inverts its icon on `group-hover`, which
              // the surrounding `.group` table row also triggers — turning the
              // icon white on mere row hover. Pin it to the critical color and
              // only invert on the button's own hover/active (when it fills
              // red). F0Button strips `className`, so scope it via a wrapper.
              <span className="inline-flex [&_svg]:!text-f1-icon-critical-bold hover:[&_svg]:!text-f1-icon-inverse active:[&_svg]:!text-f1-icon-inverse">
                <F0Button
                  type="button"
                  variant="critical"
                  size="md"
                  hideLabel
                  icon={Delete}
                  label={removeLabel}
                  onClick={() => onRemoveRow(item, index)}
                />
              </span>
            )}
          </div>
        </TableCell>
      )}
    </>
  )
}

type SortableRowProps<R extends RecordType> = Omit<
  RowCellsProps<R>,
  "dragHandle"
> & {
  rowId: string
  reorderLabel: string
}

/** A draggable row. Must be rendered inside DndContext + SortableContext. */
function SortableRow<R extends RecordType>({
  rowId,
  reorderLabel,
  ...cellProps
}: SortableRowProps<R>) {
  const {
    setNodeRef,
    setActivatorNodeRef,
    listeners,
    attributes,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: rowId })

  return (
    <TableRow
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        transition,
        ...(isDragging ? { position: "relative", zIndex: 20 } : undefined),
      }}
      className={cn(
        ROW_CLASSES,
        isDragging && "bg-f1-background shadow-md [&::after]:bg-transparent"
      )}
    >
      <RowCells
        {...cellProps}
        dragHandle={
          <button
            type="button"
            ref={setActivatorNodeRef}
            aria-label={reorderLabel}
            className={cn(
              "flex h-6 w-6 scale-75 cursor-grab touch-none items-center justify-center rounded-md text-f1-foreground opacity-40 transition-opacity",
              "hover:opacity-60 focus-visible:opacity-60",
              isDragging && "cursor-grabbing opacity-60",
              focusRing("rounded-md")
            )}
            {...attributes}
            {...listeners}
          >
            <F0Icon icon={Handle} size="sm" />
          </button>
        }
      />
    </TableRow>
  )
}

/**
 * A lightweight, fully controlled editable table built on the OneTable
 * primitives and the editable-table cell components (`text`, `number`,
 * `money`, `date`, `select`, ...), with optional drag-to-reorder rows,
 * per-row removal and an add-row action — no data collection required.
 *
 * The parent owns the `items` array: cell edits are reported via
 * `onCellChange`, reorders via `onReorderRows`, removals via `onRemoveRow`,
 * and additions via `addRow.onClick`.
 */
function OneEditableTableBase<R extends RecordType>({
  columns: columnsProp,
  items,
  getRowId,
  onCellChange,
  sortableRows,
  onReorderRows,
  onRemoveRow,
  onEditRow,
  canEditRow,
  addRow,
  bordered = true,
}: OneEditableTableProps<R>) {
  const { t } = useI18n()

  const columns = columnsProp.map(withRenderFallback)

  const resolveRowId = (item: R, index: number): string => {
    if (getRowId) return getRowId(item, index)
    if ("id" in item && item.id !== undefined && item.id !== null) {
      return String(item.id)
    }
    return `index-${index}`
  }
  const rowIds = items.map(resolveRowId)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const from = rowIds.indexOf(String(active.id))
    const to = rowIds.indexOf(String(over.id))
    if (from === -1 || to === -1) return
    onReorderRows?.({
      items: arrayMove(items, from, to),
      from,
      to,
      movedItem: items[from],
    })
  }

  const removeLabel = t("collections.editableTable.removeRow")
  const editLabel = t("collections.editableTable.editRow")
  const reorderLabel = t("collections.editableTable.reorderRow")
  const actionsLabel = t("collections.actions.actions")
  const hasActionsColumn = !!onRemoveRow || !!onEditRow

  const rows = items.map((item, index) => {
    const rowId = rowIds[index]
    const cellProps = {
      item,
      index,
      columns,
      onRemoveRow,
      onEditRow,
      canEditRow,
      removeLabel,
      editLabel,
    }
    return (
      <EditableRowProvider key={rowId} item={item} onCellChange={onCellChange}>
        {sortableRows ? (
          <SortableRow
            {...cellProps}
            rowId={rowId}
            reorderLabel={reorderLabel}
          />
        ) : (
          <TableRow className={ROW_CLASSES}>
            <RowCells {...cellProps} />
          </TableRow>
        )}
      </EditableRowProvider>
    )
  })

  const table = (
    <OneTable>
      <TableHeader>
        <TableRow>
          {sortableRows && (
            <TableHead
              width={HANDLE_COL_WIDTH}
              className={cn(
                HEAD_CLASSES,
                HANDLE_CELL_CLASSES,
                "hover:after:!bg-transparent"
              )}
            >
              <span className="sr-only">{reorderLabel}</span>
            </TableHead>
          )}
          {columns.map((column, index) => (
            <TableHead
              key={column.id ?? `head-${index}`}
              width={column.width}
              minWidth={column.minWidth}
              align={column.align}
              info={column.info}
              className={HEAD_CLASSES}
            >
              {column.label}
            </TableHead>
          ))}
          {hasActionsColumn && (
            <TableHead
              width={
                onEditRow && onRemoveRow
                  ? DOUBLE_ACTION_COL_WIDTH
                  : SINGLE_ACTION_COL_WIDTH
              }
              className={cn(HEAD_CLASSES, "hover:after:!bg-transparent")}
            >
              <span className="sr-only">{actionsLabel}</span>
            </TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortableRows ? (
          <SortableContext
            items={rowIds}
            strategy={verticalListSortingStrategy}
          >
            {rows}
          </SortableContext>
        ) : (
          rows
        )}
      </TableBody>
    </OneTable>
  )

  return (
    <div className="flex flex-col items-start gap-3">
      <div
        className={cn(
          "w-full",
          bordered &&
            "overflow-hidden rounded-lg border border-solid border-f1-border-secondary [&_thead::before]:!bg-transparent [&_thead_th>div:first-child]:!bg-transparent [&_tbody>tr:last-child::after]:!bg-transparent"
        )}
      >
        {sortableRows ? (
          // DndContext must sit OUTSIDE the <table>: it renders a
          // visually-hidden accessibility <div> that would be invalid HTML
          // inside <tbody>.
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            {table}
          </DndContext>
        ) : (
          table
        )}
      </div>
      {addRow && (
        <F0Button
          type="button"
          variant="outline"
          size="md"
          icon={Add}
          label={addRow.label ?? t("collections.editableTable.addRow")}
          onClick={addRow.onClick}
        />
      )}
    </div>
  )
}

/**
 * OneEditableTable is experimental — its API may change without a major bump.
 */
export const OneEditableTable = experimentalComponent(
  "OneEditableTable",
  OneEditableTableBase
)
