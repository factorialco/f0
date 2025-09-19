import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { TableColumnDefinition } from "../types"
import { SortAndHideList } from "./SortAndHideList"

type TableSettingsProps = {
  columns: TableColumnDefinition<never, never, never>[]
}

export const TableSettings = ({ columns }: TableSettingsProps) => {
  const items = columns.map((column) => ({
    id: column.id,
    label: column.label,
    sortable: column.sortable,
    canHide: column.canHide,
    hidden: column.hidden,
  }))
  return (
    <ScrollArea className="max-h-[200px]">
      <SortAndHideList items={items} />
      <ScrollBar orientation="vertical" className="[&_div]:bg-f1-background" />
    </ScrollArea>
  )
}
