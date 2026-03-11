import type { RecordType, SortingsDefinition } from "@/hooks/datasource"

import type { SummariesDefinition } from "../../../../summary"
import type { CellRendererProps } from "../../Table/types"
import type { EditableTableColumnDefinition } from "../types"

import { editableCellMap } from "../consts"
import { useEditableRow } from "../context/EditableRowContext"
import { NonEditableCell } from "./cells/status/NonEditableCell"

/**
 * Get the display value for an editable cell from the local item.
 */
function getCellValue<R extends RecordType>(
  item: R,
  column: EditableTableColumnDefinition<
    R,
    SortingsDefinition,
    SummariesDefinition
  >
): string {
  if (column.id !== undefined && column.id in item) {
    const v = item[column.id as keyof R]
    return v === null || v === undefined ? "" : String(v)
  }
  const rendered = column.render(item)
  if (typeof rendered === "string") return rendered
  if (typeof rendered === "number") return String(rendered)

  return ""
}

/**
 * Custom cell renderer for the editable table visualization.
 *
 * Maps column `editType` to the corresponding editable component.
 * For non-editable columns, renders using the standard renderProperty with "editableTable" mode.
 */
export function EditableCellRenderer<
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
>({
  column,
  children,
  isLastColumn,
}: CellRendererProps<R, Sortings, Summaries> & { isLastColumn?: boolean }) {
  const editableCtx = useEditableRow<R>()

  if (!editableCtx) {
    return <>{children}</>
  }

  const { localItem, cellErrors, cellLoading, handleCellChange } = editableCtx
  const editableColumn = column as EditableTableColumnDefinition<
    R,
    Sortings,
    Summaries
  >

  const cellEditType = editableColumn.editType?.(localItem)

  const hasId = editableColumn.id !== undefined

  const onChange = (value: string) => {
    if (editableColumn.id) {
      handleCellChange(editableColumn.id, value)
    }
  }

  if (hasId && cellEditType) {
    const CellComponent = editableCellMap[cellEditType]
    const value = getCellValue(localItem, editableColumn)

    if (CellComponent) {
      const error = editableColumn.id
        ? cellErrors[editableColumn.id]
        : undefined
      const loading = editableColumn.id
        ? (cellLoading[editableColumn.id] ?? false)
        : false

      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- stops cell navigation (href/onClick) from firing when interacting with the editor
        <div
          className="pointer-events-auto h-full"
          onClickCapture={(e) => e.stopPropagation()}
          onMouseDownCapture={(e) => e.stopPropagation()}
        >
          <CellComponent
            editableColumn={editableColumn}
            value={value}
            error={error}
            item={localItem}
            isLastColumn={isLastColumn}
            loading={loading}
            onChange={onChange}
          />
        </div>
      )
    }
  }

  return (
    <NonEditableCell
      editableColumn={editableColumn}
      item={localItem}
      value={getCellValue(localItem, editableColumn)}
      isLastColumn={isLastColumn}
      onChange={onChange}
    />
  )
}
