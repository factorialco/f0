import { VerticalOverflowList } from "@/ui/VerticalOverflowList"
import { ComponentProps } from "react"
import { WidgetInboxListItem, WidgetInboxListItemProps } from "../../ListItems/WidgetInboxListItem"

type Props<Id extends string | number = string | number> = {
  items: Omit<WidgetInboxListItemProps<Id>, "onClick">[]
  minSize?: number
  onClickItem?: (id: Id) => void
  showAllItems?: boolean
} & Pick<ComponentProps<typeof VerticalOverflowList>, "onVisibleItemsChange">

export type WidgetInboxListProps = Props

export function WidgetInboxList({
  items,
  minSize = 184,
  onClickItem,
  showAllItems,
  onVisibleItemsChange,
}: Props) {
  if (showAllItems) {
    return (
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <WidgetInboxListItem key={item.id} {...item} onClick={onClickItem} />
        ))}
      </div>
    )
  }

  return (
    <VerticalOverflowList
      items={items}
      minSize={minSize}
      renderListItem={(item) => (
        <WidgetInboxListItem key={item.id} {...item} onClick={onClickItem} />
      )}
      onVisibleItemsChange={onVisibleItemsChange}
      gap={8}
    />
  )
}
