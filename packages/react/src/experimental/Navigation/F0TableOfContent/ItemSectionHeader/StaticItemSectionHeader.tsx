import { ReactNode } from "react"

import { Item } from "../Item"
import { TOCItem } from "../types"

interface StaticItemSectionHeaderProps {
  item: TOCItem
  children?: ReactNode
  isActive?: boolean
  sortable: boolean
  hideChildrenCounter?: boolean
}

export function StaticItemSectionHeader({
  item,
  children,
  isActive,
  sortable,
  hideChildrenCounter,
}: StaticItemSectionHeaderProps) {
  return (
    <>
      <Item
        item={item}
        counter={hideChildrenCounter ? undefined : (item.children?.length ?? 0)}
        isActive={isActive}
        collapsible={false}
        isExpanded={undefined}
        onToggleExpanded={undefined}
        sortable={sortable}
      />
      {children && (
        <div className="ml-[18px] min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-4">
          {children}
        </div>
      )}
    </>
  )
}
