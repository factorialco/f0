import { useDataCollectionSettings } from "@/experimental/OneDataCollection/Settings/SettingsProvider"
import { ScrollArea } from "@/ui/scrollarea"
import { useMemo } from "react"
import { useColumns } from "../hooks/useColums"
import { TableColumnDefinition } from "../types"
import { SortAndHideList } from "./SortAndHideList"
import { SortAndHideListItem } from "./SortAndHideList/types"

type TableSettingsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- we dont care about the types here, just the columns names and props
  columns: Readonly<TableColumnDefinition<any, any, any>[]>
  frozenColumns: number
  allowSorting: boolean
  allowHiding: boolean
}

export const TableSettings = ({
  columns: originalColumns,
  frozenColumns,
  allowSorting,
  allowHiding,
}: TableSettingsProps) => {
  const { settings, setSettings } = useDataCollectionSettings()

  const { columnsWithStatus } = useColumns(
    originalColumns,
    frozenColumns,
    settings.visualization.table,
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

  const onChangeSettings = (newOrder: SortAndHideListItem[]) => {
    setSettings((prev) => ({
      ...prev,
      visualization: {
        ...prev.visualization,
        table: {
          order: newOrder.map((item) => item.id),
          hidden: newOrder
            .filter((item) => !item.visible)
            .map((item) => item.id),
        },
      },
    }))
  }

  return (
    <div className="relative -mr-2 flex h-[200px] flex-col">
      <ScrollArea className="h-[200px]">
        <SortAndHideList
          items={items}
          onChange={onChangeSettings}
          allowSorting={allowSorting}
          allowHiding={allowHiding}
        />
      </ScrollArea>
    </div>
  )
}
