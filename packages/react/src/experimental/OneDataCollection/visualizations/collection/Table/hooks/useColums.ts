import { RecordType, SortingsDefinition } from "@/hooks/datasource"
import { useEffect, useMemo, useState } from "react"
import { SummariesDefinition } from "../../../../summary"
import {
  ColId,
  TableColumnDefinition,
  TableVisualizationSettings,
} from "../types"

const getColumnId = <
  Col extends Pick<TableColumnDefinition<never, never, never>, "id" | "label">,
>(
  column: Col
) => {
  return column.id ?? column.label ?? "column"
}
/**
 * Get the order of the columns from the definition and sort them by the order putting the ones with no order at the end
 * @param columns - The columns to get the order from
 * @returns
 */
export const getColsOrderFromDefinition = <
  Col extends Pick<TableColumnDefinition<never, never, never>, "id" | "label"> &
    Partial<Pick<TableColumnDefinition<never, never, never>, "order">>,
>(
  columns: Readonly<Col[]>
): ColId[] => {
  return [...columns]
    .sort((a, b) => (a.order ?? columns.length) - (b.order ?? columns.length))
    .map((column) => getColumnId(column))
}

export const getColsHiddenFromDefinition = <
  Col extends Pick<TableColumnDefinition<never, never, never>, "id" | "label"> &
    Partial<
      Pick<TableColumnDefinition<never, never, never>, "hidden" | "noHiding">
    >,
>(
  columns: Readonly<Col[]>
): ColId[] => {
  return columns
    .filter((column) => column.hidden && !column.noHiding)
    .map((column) => getColumnId(column))
}

type UseColumnsReturn<
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = {
  columns: readonly TableColumnDefinition<R, Sortings, Summaries>[]
  colsHidden: ColId[]
  setColsHidden: (colsHidden: ColId[]) => void
  colsOrder: ColId[]
  setColsOrder: (colsOrder: ColId[]) => void
  columnsWithStatus: {
    column: TableColumnDefinition<R, Sortings, Summaries> & { id: ColId }
    canHide: boolean
    visible: boolean
    sortable: boolean
    order: number
  }[]
}

/**
 * Hook to manage the columns state of the table (hide, order, etc)
 * @param originalColumns
 * @param frozenColumns
 * @returns
 */
export const useColumns = <
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
>(
  originalColumns: Readonly<TableColumnDefinition<R, Sortings, Summaries>[]>,
  frozenColumns: number,
  settings?: TableVisualizationSettings,
  allowSorting?: boolean,
  allowHiding?: boolean
): UseColumnsReturn<R, Sortings, Summaries> => {
  // Merge user preferences with developer defaults for NEW columns
  // New columns (not in saved order) should respect their hidden: true default
  const getMergedHidden = () => {
    if (!allowHiding || settings?.hidden === undefined) {
      return getColsHiddenFromDefinition(originalColumns)
    }
    // If we don't have saved order, we can't determine which columns are "new"
    // In this case, just use user's hidden preferences as-is
    if (!settings.order || settings.order.length === 0) {
      return settings.hidden
    }
    // New columns = columns NOT in saved order (these were added after user saved prefs)
    const savedOrderIds = new Set(settings.order)
    const newHiddenColumns = originalColumns
      .filter(
        (col) =>
          col.hidden && !col.noHiding && !savedOrderIds.has(getColumnId(col))
      )
      .map(getColumnId)

    return [...settings.hidden, ...newHiddenColumns]
  }

  const [colsHidden, setColsHidden] = useState<ColId[]>(getMergedHidden())
  const [colsOrder, setColsOrder] = useState<ColId[]>(
    (allowSorting && settings?.order !== undefined
      ? settings.order
      : undefined) ?? getColsOrderFromDefinition(originalColumns)
  )

  useEffect(() => {
    if (allowHiding && settings?.hidden !== undefined) {
      setColsHidden(getMergedHidden())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run this effect when the settings change
  }, [JSON.stringify(settings?.hidden), allowHiding])

  useEffect(() => {
    if (allowSorting && settings?.order !== undefined) {
      setColsOrder(settings.order)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run this effect when the settings change
  }, [JSON.stringify(settings?.order), allowSorting])

  const columnsWithStatus = useMemo(() => {
    const cols = [...originalColumns]
    const nonEditableColumns = frozenColumns || 1

    return [
      // Frozen columns can not be hidden even if the id is in status
      // The frist column is always visible and not sortable even if frozenColumns is 0
      ...cols.slice(0, nonEditableColumns).map((column, index) => ({
        column: {
          ...column,
          id: getColumnId(column),
        },
        canHide: false,
        visible: true,
        sortable: false,
        order: index,
      })),
      // The rest of the columns are sorted and hidden using the status in colsOrder and colsHidden
      ...cols
        .slice(nonEditableColumns)
        .sort((a, b) => {
          const aIndex = colsOrder.indexOf(getColumnId(a))
          const bIndex = colsOrder.indexOf(getColumnId(b))
          // Columns not in saved order (indexOf === -1) should appear at the end
          const aPos = aIndex === -1 ? colsOrder.length : aIndex
          const bPos = bIndex === -1 ? colsOrder.length : bIndex
          return aPos - bPos
        })
        .map((column, index) => ({
          column: {
            ...column,
            id: getColumnId(column),
          },
          canHide: allowHiding ? !(column.noHiding ?? false) : false,
          visible: !colsHidden.includes(getColumnId(column)),
          sortable: !!allowSorting,
          order: index + frozenColumns,
        })),
    ]
  }, [
    frozenColumns,
    colsOrder,
    colsHidden,
    originalColumns,
    allowSorting,
    allowHiding,
  ])

  const columns = useMemo(() => {
    return columnsWithStatus
      .filter((column) => column.visible)
      .map((column) => column.column)
  }, [columnsWithStatus])

  return {
    columns,
    columnsWithStatus,
    colsHidden,
    setColsHidden,
    colsOrder,
    setColsOrder,
  }
}
