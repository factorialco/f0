import { useMemo } from "react"

import { useDataCollectionSettings } from "@/patterns/OneDataCollection/Settings/SettingsProvider"
import { SortAndHideSettings } from "@/patterns/OneDataCollection/Settings/SortAndHideSettings"

import { useColumns } from "../hooks/useColums"
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
  /** The currently user-managed required column. */
  lockedColumnId?: string | null
  /** Enables transferring or clearing the required-column lock. */
  onLockedColumnChange?: (columnId: string | null) => void
}

export const TableSettings = ({
  columns: originalColumns,
  frozenColumns,
  allowSorting,
  allowHiding,
  visualizationKey = "table",
  onAddColumn,
  onRemoveColumn,
  lockedColumnId,
  onLockedColumnChange,
}: TableSettingsProps) => {
  const { settings } = useDataCollectionSettings()

  const visualizationSettings = settings.visualization[visualizationKey]

  const usesExplicitColumnLocking =
    lockedColumnId !== undefined || !!onLockedColumnChange
  const { columnsWithStatus } = useColumns(
    originalColumns,
    frozenColumns,
    visualizationSettings,
    allowSorting,
    allowHiding,
    lockedColumnId,
    usesExplicitColumnLocking
  )

  const items = useMemo(() => {
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
          lockable: !!onLockedColumnChange && !column.frozen,
          removable:
            !!onRemoveColumn && !column.locked && !column.column.noRemoving,
        }))
    )
  }, [columnsWithStatus, allowHiding, onLockedColumnChange, onRemoveColumn])

  return (
    <SortAndHideSettings
      items={items}
      visualizationKey={visualizationKey}
      allowSorting={allowSorting}
      allowHiding={allowHiding}
      onAddColumn={onAddColumn}
      onRemoveColumn={onRemoveColumn}
      onLockedColumnChange={onLockedColumnChange}
    />
  )
}
