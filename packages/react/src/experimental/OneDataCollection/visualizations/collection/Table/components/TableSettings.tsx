import { ScrollArea } from "@/ui/scrollarea"
import { useMemo } from "react"
import { useColumns } from "../hooks/useColums"
import { TableColumnDefinition } from "../types"
import { SortAndHideList } from "./SortAndHideList"
import { SortAndHideListItem } from "./SortAndHideList/types"

type TableSettingsProps = {
  columns: TableColumnDefinition<never, never, never>[]
  frozenColumns: number
}

export const TableSettings = ({
  columns: originalColumns,
  frozenColumns,
}: TableSettingsProps) => {
  const { columnsWithStatus, setColsOrder, setColsHidden } = useColumns(
    originalColumns,
    frozenColumns
  )

  const items = useMemo(
    () =>
      columnsWithStatus.map((column) => ({
        id: column.column.id,
        label: column.column.label,
        sortable: column.sortable,
        canHide: column.canHide,
        visible: column.visible,
      })),
    [columnsWithStatus]
  )

  const onChangeSettings = (newOrder: SortAndHideListItem[]) => {
    setColsOrder(newOrder.map((item) => item.id))
    setColsHidden(
      newOrder.filter((item) => !item.visible).map((item) => item.id)
    )
  }

  return (
    <div className="relative -mr-2 flex h-[200px] flex-col">
      <ScrollArea className="h-[200px]">
        <SortAndHideList items={items} onChange={onChangeSettings} />
      </ScrollArea>
    </div>
  )
}
