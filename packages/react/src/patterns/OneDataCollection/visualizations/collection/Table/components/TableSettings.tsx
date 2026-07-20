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
}

export const TableSettings = ({
  columns: originalColumns,
  frozenColumns,
  allowSorting,
  allowHiding,
  visualizationKey = "table",
  onAddColumn,
  onRemoveColumn,
}: TableSettingsProps) => {
  const { settings } = useDataCollectionSettings()

  const visualizationSettings = settings.visualization[visualizationKey]

  const { columnsWithStatus } = useColumns(
    originalColumns,
    frozenColumns,
    visualizationSettings,
    allowSorting,
    allowHiding
  )

  const items = useMemo(() => {
    // The leading `frozenColumns || 1` columns are non-editable (always-visible,
    // not reorderable). They can never be removed — mirror that for the trash.
    const lockedCount = frozenColumns || 1
    const lockedIds = new Set(
      columnsWithStatus.slice(0, lockedCount).map((column) => column.column.id)
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
          removable:
            !!onRemoveColumn &&
            !lockedIds.has(column.column.id) &&
            !column.column.noRemoving,
        }))
    )
  }, [columnsWithStatus, allowHiding, frozenColumns, onRemoveColumn])

  return (
    <SortAndHideSettings
      items={items}
      visualizationKey={visualizationKey}
      allowSorting={allowSorting}
      allowHiding={allowHiding}
      onAddColumn={onAddColumn}
      onRemoveColumn={onRemoveColumn}
    />
  )
}
