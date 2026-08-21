import { useEffect, useMemo, useState } from "react"

import { RecordType, SortingsDefinition } from "@/hooks/datasource"

import { SummariesDefinition } from "../../../../summary"
import {
  ColId,
  TableColumnDefinition,
  TableVisualizationSettings,
} from "../types"

/**
 * Resolves the stable id of a column: its explicit `id`, falling back to its
 * `label`. Used for ordering, hiding and header-group collapsing.
 */
export const getColumnId = <
  Col extends Pick<TableColumnDefinition<never, never, never>, "id" | "label">,
>(
  column: Col
) => {
  return column.id ?? column.label ?? "column"
}

export const getNextLockedColumnIds = (
  currentIds: readonly ColId[] | undefined,
  columnId: ColId,
  locked: boolean
) =>
  locked
    ? [...new Set([...(currentIds ?? []), columnId])]
    : (currentIds ?? []).filter((id) => id !== columnId)
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
  savedOrder: ColId[]
  columnsWithStatus: {
    column: TableColumnDefinition<R, Sortings, Summaries> & { id: ColId }
    canHide: boolean
    visible: boolean
    sortable: boolean
    frozen: boolean
    locked: boolean
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
  allowHiding?: boolean,
  lockedColumnIds?: readonly ColId[],
  usesExplicitColumnLocking?: boolean
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
    if (allowHiding) {
      setColsHidden(getMergedHidden())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run this effect when the settings change
  }, [JSON.stringify(settings?.hidden), allowHiding])

  useEffect(() => {
    if (allowSorting) {
      setColsOrder(
        settings?.order !== undefined
          ? settings.order
          : getColsOrderFromDefinition(originalColumns)
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run this effect when the settings change
  }, [JSON.stringify(settings?.order), allowSorting])

  const nonEditableColumns = usesExplicitColumnLocking
    ? frozenColumns
    : frozenColumns || 1
  const columnsInSavedOrder = useMemo(() => {
    const leadingColumns = originalColumns.slice(0, nonEditableColumns)
    const orderedColumns = [...originalColumns.slice(nonEditableColumns)].sort(
      (a, b) => {
        const aIndex = colsOrder.indexOf(getColumnId(a))
        const bIndex = colsOrder.indexOf(getColumnId(b))
        const aPos = aIndex === -1 ? colsOrder.length : aIndex
        const bPos = bIndex === -1 ? colsOrder.length : bIndex
        return aPos - bPos
      }
    )

    return [...leadingColumns, ...orderedColumns]
  }, [originalColumns, nonEditableColumns, colsOrder])
  const savedOrder = useMemo(
    () => columnsInSavedOrder.map(getColumnId),
    [columnsInSavedOrder]
  )

  const columnsWithStatus = useMemo(() => {
    const leadingColumns = columnsInSavedOrder.slice(0, nonEditableColumns)
    const orderedColumns = columnsInSavedOrder.slice(nonEditableColumns)
    const orderedColumnsById = new Map(
      orderedColumns.map((column) => [getColumnId(column), column])
    )
    const managedLockedColumns = [...new Set(lockedColumnIds ?? [])]
      .map((id) => orderedColumnsById.get(id))
      .filter(
        (column): column is TableColumnDefinition<R, Sortings, Summaries> =>
          !!column
      )
    const managedLockedIds = new Set(managedLockedColumns.map(getColumnId))
    const unlockedColumns = orderedColumns.filter(
      (column) => !managedLockedIds.has(getColumnId(column))
    )

    const withStatus = (
      column: TableColumnDefinition<R, Sortings, Summaries>,
      index: number,
      frozen: boolean
    ) => {
      const id = getColumnId(column)
      const locked =
        frozen ||
        (!!usesExplicitColumnLocking && !!lockedColumnIds?.includes(id))

      return {
        column: {
          ...column,
          id,
        },
        canHide: locked
          ? false
          : allowHiding
            ? !(column.noHiding ?? false)
            : false,
        visible: locked || !colsHidden.includes(id),
        sortable: !locked && !!allowSorting,
        frozen,
        locked,
        order: index,
      }
    }

    return [
      // Frozen columns can not be hidden even if the id is in status
      // The first column remains non-editable by default for backwards
      // compatibility. A lock value or callback opts into explicit semantics.
      ...leadingColumns.map((column, index) => withStatus(column, index, true)),
      // User-managed locks form a frozen group after permanent frozen columns.
      // Their array order records the order in which users locked them.
      ...managedLockedColumns.map((column, index) =>
        withStatus(column, index + leadingColumns.length, false)
      ),
      // Unlocked columns retain their saved order, so unlocking returns a
      // column to the position it had before it joined the frozen group.
      ...unlockedColumns.map((column, index) =>
        withStatus(
          column,
          index + leadingColumns.length + managedLockedColumns.length,
          false
        )
      ),
    ]
  }, [
    frozenColumns,
    colsHidden,
    columnsInSavedOrder,
    nonEditableColumns,
    allowSorting,
    allowHiding,
    lockedColumnIds,
    usesExplicitColumnLocking,
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
    savedOrder,
  }
}
