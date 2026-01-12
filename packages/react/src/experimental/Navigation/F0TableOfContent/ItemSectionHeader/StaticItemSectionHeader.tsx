import { ReactNode } from "react"

import { Item } from "../Item"
import { TOCItem } from "../types"

interface StaticItemSectionHeaderProps {
  item: TOCItem
  children?: ReactNode
  isActive?: boolean
  sortable: boolean
  hideChildrenCounter?: boolean
  isDragOver?: boolean
  dragOverPosition?: "before" | "after" | "inside" | null
  canDropInside?: boolean
  onDragOver?: (itemId: string, position: "before" | "after" | "inside") => void
  onDragLeave?: () => void
  onDrop?: (itemId: string, position: "before" | "after" | "inside") => void
  currentParentId?: string | null
  draggedItemId?: string | null
}

export function StaticItemSectionHeader({
  item,
  children,
  isActive,
  sortable,
  hideChildrenCounter,
  canDropInside = false,
  onDragOver,
  onDragLeave,
  onDrop,
  currentParentId,
  draggedItemId,
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
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        canDropInside={canDropInside}
        currentParentId={currentParentId}
        draggedItemId={draggedItemId}
      />
      {children && (
        <div className="ml-[18px] min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-4">
          {children}
        </div>
      )}
    </>
  )
}
