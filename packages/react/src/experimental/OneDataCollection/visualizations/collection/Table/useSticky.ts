import { SortingsDefinition } from "@/experimental/OneDataCollection/sortings"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import { RecordType } from "@/experimental/OneDataCollection/types"
import { useCallback } from "react"
import { TableColumnDefinition } from "."

export const useSticky = <
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
>(
  frozenColumnsLeft: number,
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>,
  hasCheckColumn: boolean
) => {
  const checkColumnWidth = hasCheckColumn ? 52 : 0
  const getStickyPosition = useCallback(
    (cellIndex: number) => {
      return cellIndex < frozenColumnsLeft && columns.length > 1
        ? {
            left: columns
              .slice(0, Math.max(0, cellIndex))
              .reduce(
                (acc, column) => acc + (column.width ?? 0),
                checkColumnWidth
              ),
          }
        : undefined
    },
    [frozenColumnsLeft, columns, checkColumnWidth]
  )

  return {
    getStickyPosition,
    checkColumnWidth,
  }
}
