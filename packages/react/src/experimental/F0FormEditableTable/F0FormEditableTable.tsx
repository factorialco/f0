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

import type { ColumnWidth } from "@/experimental/OneTable/utils/sizes"
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"
import { EditableCellRenderer } from "@/patterns/OneDataCollection/visualizations/collection/EditableTable/components/EditableCellRenderer"
import { EditableRowProvider } from "@/patterns/OneDataCollection/visualizations/collection/EditableTable/context/EditableRowContext"

import type {
  EditableColumn,
  F0FormEditableTableColumn,
  F0FormEditableTableProps,
  F0FormEditableTableRowAction,
} from "./types"

/** Width (px) of the leading drag-handle column. */
const HANDLE_COL_WIDTH = 36

const ROW_CLASSES = cn(
  "group transition-colors hover:bg-f1-background-hover",
  "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']"
)

// The shared table primitive forces an edge gutter (`first:pl-6 last:pr-6`)
// for full-width collection tables. `cn` (tailwind-merge) dedupes it to 0 here
// so cells sit flush and their inner content controls the padding — this also
// gives the action column its full width so the icon buttons fit inside px-2.
// `overflow-hidden` clips cell content (e.g. long placeholders) so it never
// bleeds into the neighbouring cell when a column gets squeezed.
// The input placeholder slot carries a size-based vertical padding
// (`inputElementVariants`) that misaligns it inside our fixed 48px cells;
// neutralize it and center the placeholder instead. A final -1px nudges the
// placeholder onto the input's text baseline, and -3px lifts the input's
// leading icon (positioned a touch low by the field) onto the cell center.
const CELL_CLASSES = cn(
  "h-[48px] overflow-hidden p-0 align-middle first:pl-0 last:pr-0",
  "[&_[data-slot='placeholder']]:!flex [&_[data-slot='placeholder']]:!items-center [&_[data-slot='placeholder']]:!py-0 [&_[data-slot='placeholder']]:!-mt-px",
  "[&_[data-testid=input-field-wrapper]_.absolute.h-5]:!-mt-[3px]"
)
// Cells sit flush (pl-0) but their inputs have 12px of internal padding, so
// headers use pl-3/pr-3 to line their text up with the cell content. The
// primitive also insets the first/last header's hover highlight
// (`first:after:left-3` / `last:after:right-3`) for the old 24px edge gutter;
// reset those to 0 so every header's hover spans the full column like the rest.
const HEAD_CLASSES = cn(
  "first:pl-3 last:pr-3",
  "first:after:!left-1 last:after:!right-1"
)
/**
 * Shrink-wraps the actions column to its buttons (as small as possible). A `w-full`
 * table with `table-layout: auto` otherwise hands spare width to the auto-sized
 * actions column, so a tiny 1px preferred width + `nowrap` makes the browser
 * size it to content instead; `overflow-visible` stops CELL_CLASSES' clip from
 * hiding the buttons.
 */
const ACTIONS_SHRINK_CLASSES = "w-px overflow-visible whitespace-nowrap"

/**
 * Minimum width for a column with no explicit width: a quarter of the table's
 * visible width, so auto columns can't collapse to a couple of characters (the
 * table scrolls instead). `cqw` resolves against the container-query context on
 * the table root.
 */
const DATA_CELL_MIN_WIDTH = "min-w-[25cqw]"

/**
 * Focus/hover highlight applied directly to the editable `td` (not the inner
 * cell) so it lands on the real cell boundary and lifts above the neighbouring
 * cells instead of being clipped by them.
 *
 * The lift uses `z-[9]` — above plain cells but below the sticky handle/actions
 * columns (`z-10`), so a hovered cell's content can't bleed over them when the
 * table is scrolled sideways.
 *
 * Focus keeps a selected inset ring; hover just recolors the cell border via
 * an inset outline (no inner shadow). The inner cell's own hover shadow is
 * suppressed so the two don't stack.
 */
const EDITABLE_CELL_RING = cn(
  // Suppress the inner cell's hover shadow only when NOT focused, so a focused
  // cell keeps its ring even while hovered.
  "[&:not(:focus-within):hover_*]:!shadow-none",
  "focus-within:relative focus-within:z-[9] focus-within:shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]",
  "[&:not(:focus-within):hover]:relative [&:not(:focus-within):hover]:z-[9]",
  "[&:not(:focus-within):hover]:outline [&:not(:focus-within):hover]:outline-1 [&:not(:focus-within):hover]:-outline-offset-1 [&:not(:focus-within):hover]:outline-[hsl(var(--neutral-30))]"
)

/**
 * Error highlight for a cell with an external validation error: a critical
 * ring on the `td` boundary. Used INSTEAD of {@link EDITABLE_CELL_RING} so the
 * hover shadow-suppression doesn't wipe the inner cell's error styling. Lifts
 * with the same `z-[9]` (below the sticky columns) as {@link EDITABLE_CELL_RING}.
 */
const EDITABLE_CELL_ERROR_RING =
  "relative z-[9] shadow-[inset_0_0_0_1px_hsl(var(--critical-50))]"

/**
 * Fills in the `render` fallback so columns satisfy the full editable-table
 * column contract expected by EditableCellRenderer.
 */
function withRenderFallback<R extends RecordType>(
  column: F0FormEditableTableColumn<R>
): EditableColumn<R> {
  return {
    render: (item: R) => {
      const value = item[column.id as keyof R]
      return value === null || value === undefined ? "" : String(value)
    },
    ...column,
  } as EditableColumn<R>
}

/**
 * Renders a single trailing row-action button. Critical actions are wrapped so
 * their icon keeps the critical color on row hover (the surrounding row
 * `.group` would otherwise invert it) and only flips when the button itself is
 * hovered/active — same treatment as the built-in remove button.
 */
function RowActionButton<R extends RecordType>({
  action,
  item,
  index,
}: {
  action: F0FormEditableTableRowAction<R>
  item: R
  index: number
}) {
  const button = (
    <F0Button
      type="button"
      variant={action.critical ? "critical" : "outline"}
      size="md"
      icon={action.icon}
      label={action.label}
      hideLabel={!action.showLabel}
      disabled={action.disabled}
      onClick={() => action.onClick(item, index)}
    />
  )
  if (!action.critical) return button
  return (
    <span className="inline-flex [&_svg]:!text-f1-icon-critical-bold [&:hover_svg]:!text-f1-icon-inverse [&:active_svg]:!text-f1-icon-inverse">
      {button}
    </span>
  )
}

type RowCellsProps<R extends RecordType> = {
  item: R
  index: number
  columns: ReadonlyArray<EditableColumn<R>>
  onRemoveRow?: (item: R, index: number) => void
  onEditRow?: (item: R, index: number) => void
  canEditRow?: (item: R, index: number) => boolean
  rowActions?: (item: R, index: number) => F0FormEditableTableRowAction<R>[]
  getCellError?: (
    item: R,
    columnId: string,
    index: number
  ) => string | undefined
  /** Whether this table has a trailing actions column (kept consistent across
   * rows so cells stay aligned even when a given row has no actions). */
  hasActionsColumn: boolean
  /** Width of the trailing actions column. */
  actionsColWidth: ColumnWidth
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
  rowActions,
  getCellError,
  hasActionsColumn,
  actionsColWidth,
  removeLabel,
  editLabel,
  dragHandle,
}: RowCellsProps<R>) {
  const showEdit = !!onEditRow && (canEditRow?.(item, index) ?? true)
  const customActions = rowActions?.(item, index) ?? []
  return (
    <>
      {dragHandle !== undefined && (
        <TableCell
          width={HANDLE_COL_WIDTH}
          sticky={{ left: 0 }}
          // No first:pl-0 override needed: CELL_CLASSES already zeroes the edge
          // gutter, so justify-center centers the grip in the full cell width
          // (symmetric left/right spacing, unlike a one-sided leading pad).
          className={CELL_CLASSES}
        >
          <div className="pointer-events-auto flex h-full items-center justify-center">
            {dragHandle}
          </div>
        </TableCell>
      )}
      {columns.map((column, cellIndex) => {
        const editType = column.editType?.(item)
        const isEditableCell =
          editType != null &&
          editType !== "display-only" &&
          editType !== "disabled"
        const cellError = column.id
          ? getCellError?.(item, column.id, index)
          : undefined
        return (
          <TableCell
            key={column.id ?? `cell-${cellIndex}`}
            firstCell={cellIndex === 0}
            width={column.width}
            minWidth={column.minWidth}
            className={cn(
              CELL_CLASSES,
              // Columns without an explicit width keep a minimum of a quarter of
              // the table's visible width so they can't collapse to a few
              // characters (the table scrolls instead). `cqw` resolves against
              // the container-query context on the root.
              column.width == null &&
                column.minWidth == null &&
                DATA_CELL_MIN_WIDTH,
              isEditableCell &&
                (cellError ? EDITABLE_CELL_ERROR_RING : EDITABLE_CELL_RING)
            )}
          >
            <EditableCellRenderer
              item={item}
              column={column}
              cellIndex={cellIndex}
              isLastColumn={
                !hasActionsColumn && cellIndex === columns.length - 1
              }
              externalError={cellError}
            >
              {null}
            </EditableCellRenderer>
          </TableCell>
        )
      })}
      {hasActionsColumn && (
        <TableCell
          width={actionsColWidth}
          sticky={{ right: 0 }}
          className={cn(CELL_CLASSES, ACTIONS_SHRINK_CLASSES)}
        >
          <div className="pointer-events-auto flex h-full items-center justify-center gap-2 px-2">
            {showEdit && (
              <F0Button
                type="button"
                variant="outline"
                size="md"
                icon={Pencil}
                label={editLabel}
                onClick={() => onEditRow(item, index)}
              />
            )}
            {customActions.map((action, actionIndex) => (
              <RowActionButton
                key={action.id ?? `${action.label}-${actionIndex}`}
                action={action}
                item={item}
                index={index}
              />
            ))}
            {onRemoveRow && (
              // The critical variant inverts its icon on `group-hover`, which
              // the surrounding `.group` table row also triggers — turning the
              // icon white on mere row hover. Pin it to the critical color and
              // only invert on the button's own hover/active (when it fills
              // red). F0Button strips `className`, so scope it via a wrapper.
              <span className="inline-flex [&_svg]:!text-f1-icon-critical-bold [&:hover_svg]:!text-f1-icon-inverse [&:active_svg]:!text-f1-icon-inverse">
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
function F0FormEditableTableBase<R extends RecordType>({
  columns: columnsProp,
  items,
  getRowId,
  onCellChange,
  sortableRows,
  onReorderRows,
  onRemoveRow,
  onEditRow,
  canEditRow,
  rowActions,
  getCellError,
  addRow,
  bordered = true,
}: F0FormEditableTableProps<R>) {
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

  // Whether any row contributes a custom action. Kept table-wide so every row
  // renders the actions column (empty cell included) and stays aligned.
  const hasAnyRowAction =
    !!rowActions && items.some((item, i) => rowActions(item, i).length > 0)
  const hasActionsColumn = !!onRemoveRow || !!onEditRow || hasAnyRowAction
  // The actions column always sizes to its content (as small as possible), so
  // its width isn't configurable.
  const actionsColWidth: ColumnWidth = "auto"

  const rows = items.map((item, index) => {
    const rowId = rowIds[index]
    const cellProps = {
      item,
      index,
      columns,
      onRemoveRow,
      onEditRow,
      canEditRow,
      rowActions,
      getCellError,
      hasActionsColumn,
      actionsColWidth,
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
              sticky={{ left: 0 }}
              className={cn(HEAD_CLASSES, "hover:after:!bg-transparent")}
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
              width={actionsColWidth}
              sticky={{ right: 0 }}
              className={cn(
                HEAD_CLASSES,
                ACTIONS_SHRINK_CLASSES,
                "hover:after:!bg-transparent"
              )}
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
    // The data attribute lets global styles scope exceptions to this table
    // (e.g. F0Form's error-navigate shake skips the many cell inputs here).
    <div
      // `container-type: inline-size` makes `cqw` on cells resolve against this
      // root's width (the field's visible width) — see DATA_CELL_MIN_WIDTH.
      className="flex flex-col items-start gap-3 [container-type:inline-size]"
      data-f0-editable-table=""
    >
      <div
        className={cn(
          "w-full",
          bordered &&
            // Drop the last row's bottom separator so it doesn't double the
            // container's border — both the row's `::after` and the sticky
            // cells' own separator `::after` (drawn by OneTable under their
            // background).
            "overflow-hidden rounded-lg border border-solid border-f1-border-secondary [&_thead::before]:!bg-transparent [&_thead_th>div:first-child]:!bg-transparent [&_tbody>tr:last-child::after]:!bg-transparent [&_tbody>tr:last-child_td::after]:!bg-transparent"
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
      {addRow &&
        (addRow.disabled && addRow.disabledTooltip ? (
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              {/* A disabled button emits no hover events, so the span wrapper
                  is the tooltip trigger and the button is pointer-transparent
                  (hover passes through to the span). */}
              <TooltipTrigger asChild>
                <span className="inline-flex cursor-not-allowed [&_button]:pointer-events-none">
                  <F0Button
                    type="button"
                    variant="outline"
                    size="md"
                    icon={Add}
                    label={
                      addRow.label ?? t("collections.editableTable.addRow")
                    }
                    onClick={addRow.onClick}
                    disabled
                  />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">
                {addRow.disabledTooltip}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <F0Button
            type="button"
            variant="outline"
            size="md"
            icon={Add}
            label={addRow.label ?? t("collections.editableTable.addRow")}
            onClick={addRow.onClick}
            disabled={addRow.disabled}
          />
        ))}
    </div>
  )
}

/**
 * F0FormEditableTable is experimental — its API may change without a major bump.
 */
export const F0FormEditableTable = experimentalComponent(
  "F0FormEditableTable",
  F0FormEditableTableBase
)
