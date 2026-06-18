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
}

export const TableSettings = ({
  columns: originalColumns,
  frozenColumns,
  allowSorting,
  allowHiding,
  visualizationKey = "table",
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

  const items = useMemo(
    () =>
      columnsWithStatus
        // If allowHiding is false, we show only the columns that are visible
        .filter((column) => allowHiding || column.visible)
        .map((column) => ({
          id: column.column.id,
          label: column.column.label,
          sortable: column.sortable,
          canHide: column.canHide,
          visible: column.visible,
        })),
    [columnsWithStatus, allowHiding]
  )

  return (
    <SortAndHideSettings
      items={items}
      visualizationKey={visualizationKey}
      allowSorting={allowSorting}
      allowHiding={allowHiding}
    />
  )
}
