import { RecordType, SortingsDefinition } from "@/hooks/datasource"
import { useMemo, useState } from "react"
import { SummariesDefinition } from "../../../../summary"
import { ColId, TableColumnDefinition } from "../types"

/**
 * Get the order of the columns from the definition and sort them by the order putting the ones with no order at the end
 * @param columns - The columns to get the order from
 * @returns
 */
export const getColsOrderFromDefinition = <
  Col extends Pick<TableColumnDefinition<never, never, never>, "id"> &
    Partial<Pick<TableColumnDefinition<never, never, never>, "order">>,
>(
  columns: Readonly<Col[]>
): ColId[] => {
  return [...columns]
    .sort((a, b) => (a.order ?? columns.length) - (b.order ?? columns.length))
    .map((column) => column.id)
}

export const getColsHiddenFromDefinition = <
  Col extends Pick<TableColumnDefinition<never, never, never>, "id"> &
    Partial<
      Pick<TableColumnDefinition<never, never, never>, "hidden" | "noHiding">
    >,
>(
  columns: Readonly<Col[]>
): ColId[] => {
  return columns
    .filter((column) => column.hidden && !column.noHiding)
    .map((column) => column.id)
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
  frozenColumns: number
): {
  columns: readonly TableColumnDefinition<R, Sortings, Summaries>[]
  colsHidden: ColId[]
  setColsHidden: (colsHidden: ColId[]) => void
  colsOrder: ColId[]
  setColsOrder: (colsOrder: ColId[]) => void
} => {
  const [colsHidden, setColsHidden] = useState<ColId[]>(
    getColsHiddenFromDefinition(originalColumns)
  )
  const [colsOrder, setColsOrder] = useState<ColId[]>(
    getColsOrderFromDefinition(originalColumns)
  )

  const columnsWithStatus = useMemo(() => {
    return [
      // Frozen columns can not be hidden even if the id is in status
      ...[...originalColumns].slice(0, frozenColumns),
      // The rest of the columns are sorted and hidden using the status in colsOrder and colsHidden
      ...[...originalColumns]
        .slice(frozenColumns)
        .sort((a, b) => colsOrder.indexOf(a.id) - colsOrder.indexOf(b.id)),
    ].map((column, index) => ({
      column,
      hidden: !column.noHiding || colsHidden.includes(column.id),
      order: index,
    }))
  }, [frozenColumns, colsOrder, colsHidden, originalColumns])

  const columns = useMemo(() => {
    return columnsWithStatus.map((column) => column.column)
  }, [columnsWithStatus])

  return {
    columns,
    colsHidden,
    setColsHidden,
    colsOrder,
    setColsOrder,
  }
}
