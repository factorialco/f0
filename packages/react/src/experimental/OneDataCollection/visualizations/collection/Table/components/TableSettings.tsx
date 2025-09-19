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
  const { columns, setColsOrder, setColsHidden } = useColumns(
    originalColumns,
    frozenColumns
  )

  const items = useMemo(
    () =>
      columns.map((column, index) => ({
        id: column.id,
        label: column.label,
        sortable: index > frozenColumns,
        canHide: !(column.noHiding ?? false),
        visible: !(column.hidden ?? false),
      })),
    [columns, frozenColumns]
  )

  const onChangeSettings = (newOrder: SortAndHideListItem[]) => {
    setColsOrder(newOrder.map((item) => item.id))
    setColsHidden(
      newOrder.filter((item) => !item.visible).map((item) => item.id)
    )
  }

  return (
    <div className="relative -mr-2 flex max-h-[200px] flex-col gap-2">
      <ScrollArea className="flex h-[200px]">
        <SortAndHideList items={items} onChange={onChangeSettings} />
      </ScrollArea>
    </div>
  )
}
