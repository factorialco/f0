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

  const sortAndHideColumns = (
    columns: Readonly<TableColumnDefinition<R, Sortings, Summaries>[]>,
    colsOrder: ColId[],
    colsHidden: ColId[]
  ) => {
    return [...columns]
      .sort((a, b) => colsOrder.indexOf(a.id) - colsOrder.indexOf(b.id))
      .filter((column) => !colsHidden.includes(column.id))
  }

  // Get the original columns sorted and hidden to know which are the frozen columns
  const originalColsPrepared = useMemo(() => {
    return sortAndHideColumns(
      originalColumns,
      getColsOrderFromDefinition(originalColumns),
      getColsHiddenFromDefinition(originalColumns)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sortAndHideColumns is an stable function
  }, [originalColumns])

  const columns = useMemo(() => {
    return [
      // Frozen columns can not be hidden even if the id is in status
      ...originalColsPrepared.slice(0, frozenColumns),
      // The rest of the columns are sorted and hidden using the status in colsOrder and colsHidden
      ...originalColsPrepared
        .slice(frozenColumns)
        // Sort columns by defined order
        .sort((a, b) => colsOrder.indexOf(a.id) - colsOrder.indexOf(b.id))
        // Hide the columns
        .filter((column) => !colsHidden.includes(column.id)),
    ]
  }, [colsHidden, frozenColumns, colsOrder, originalColsPrepared])

  return {
    columns,
    colsHidden,
    setColsHidden,
    colsOrder,
    setColsOrder,
  }
}
