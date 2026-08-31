import { useMemo } from "react"

import { useDataCollectionSettings } from "@/patterns/OneDataCollection/Settings/SettingsProvider"
import { SortAndHideSettings } from "@/patterns/OneDataCollection/Settings/SortAndHideSettings"

import { getNextLockedColumnIds, useColumns } from "../hooks/useColums"
import { TableColumnDefinition } from "../types"

export type TableVisualizationSettingsKey = "table" | "editableTable"

type TableSettingsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- we dont care about the types here, just the columns names and props
  columns: Readonly<TableColumnDefinition<any, any, any>[]>
  frozenColumns: number
  allowSorting: boolean
  allowHiding: boolean
  /** Settings key for column order/hidden state. Use "editableTable" for EditableTable visualization. */
  visualizationKey?: TableVisualizationSettingsKey
  /** Shows an "Add column" entry at the top of the popover when provided. */
  onAddColumn?: () => void
  /**
   * Enables a hover trash affordance per non-frozen column (unless the column
   * sets `noRemoving`). Called with the column id to drop it from the table.
   */
  onRemoveColumn?: (columnId: string) => void
  /** The currently user-managed frozen columns. */
  lockedColumnIds?: readonly string[]
  /** Enables independently locking or unlocking columns. */
  onLockedColumnIdsChange?: (columnIds: string[]) => void
}

export const TableSettings = ({
  columns: originalColumns,
  frozenColumns,
  allowSorting,
  allowHiding,
  visualizationKey = "table",
  onAddColumn,
  onRemoveColumn,
  lockedColumnIds,
  onLockedColumnIdsChange,
}: TableSettingsProps) => {
  const { settings } = useDataCollectionSettings()

  const visualizationSettings = settings.visualization[visualizationKey]

  const usesExplicitColumnLocking =
    lockedColumnIds !== undefined || !!onLockedColumnIdsChange
  const { columnsWithStatus, savedOrder, managedLockedColumnIds } = useColumns(
    originalColumns,
    frozenColumns,
    visualizationSettings,
    allowSorting,
    allowHiding,
    lockedColumnIds,
    usesExplicitColumnLocking
  )

  const items = useMemo(() => {
    const visibleUnlockedIds = new Set(
      columnsWithStatus
        .filter((column) => column.visible && !column.locked)
        .map((column) => column.column.id)
    )

    return (
      columnsWithStatus
        // If allowHiding is false, we show only the columns that are visible
        .filter((column) => allowHiding || column.visible)
        .map((column) => ({
          id: column.column.id,
          label: column.column.label,
          sortable: column.sortable,
          canHide: column.canHide,
          visible: column.visible,
          locked: column.locked,
          lockable:
            !!onLockedColumnIdsChange &&
            !column.frozen &&
            (column.locked ||
              [...visibleUnlockedIds].some(
                (columnId) => columnId !== column.column.id
              )),
          showLockState: usesExplicitColumnLocking && column.locked,
          removable:
            !!onRemoveColumn && !column.locked && !column.column.noRemoving,
        }))
    )
  }, [
    columnsWithStatus,
    allowHiding,
    onLockedColumnIdsChange,
    onRemoveColumn,
    usesExplicitColumnLocking,
  ])

  return (
    <SortAndHideSettings
      items={items}
      visualizationKey={visualizationKey}
      allowSorting={allowSorting}
      allowHiding={allowHiding}
      onAddColumn={onAddColumn}
      onRemoveColumn={onRemoveColumn}
      onLockedColumnChange={
        onLockedColumnIdsChange
          ? (columnId, locked) => {
              onLockedColumnIdsChange(
                getNextLockedColumnIds(managedLockedColumnIds, columnId, locked)
              )
            }
          : undefined
      }
      orderBaseline={usesExplicitColumnLocking ? savedOrder : undefined}
      keepOneUnlockedVisible={usesExplicitColumnLocking}
    />
  )
}
