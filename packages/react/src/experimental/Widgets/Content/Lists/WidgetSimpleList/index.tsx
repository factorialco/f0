import { VerticalOverflowList } from "@/ui/VerticalOverflowList"
import {
  WidgetSimpleListItem,
  WidgetSimpleListItemProps,
} from "../../ListItems/WidgetSimpleListItem"

type Props<Id extends string | number = string | number> = {
  items: Omit<WidgetSimpleListItemProps<Id>, "onClick">[]
  minSize?: number
  gap?: number
  onClickItem?: (id: Id) => void
  showAllItems?: boolean
}

export type WidgetSimpleListProps = Props

export function WidgetSimpleList({ items, gap, minSize = 184, onClickItem, showAllItems }: Props) {
  if (showAllItems) {
    return (
      <div className="flex flex-col" style={{ minHeight: `${minSize}px` }}>
        {items.map((item) => (
          <WidgetSimpleListItem key={item.id} {...item} onClick={onClickItem} />
        ))}
      </div>
    )
  }

  return (
    <VerticalOverflowList
      items={items}
      gap={gap}
      renderListItem={(item: (typeof items)[number]) => (
        <WidgetSimpleListItem {...item} onClick={onClickItem} />
      )}
      minSize={minSize}
    />
  )
}
