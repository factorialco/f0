import { ReactNode } from "react"

import { TOCItem } from "../types"
import { CollapsibleItemSectionHeader } from "./CollapsibleItemSectionHeader"
import { StaticItemSectionHeader } from "./StaticItemSectionHeader"

interface TOCItemSectionHeaderProps {
  item: TOCItem
  children?: ReactNode
  isActive?: boolean
  collapsible?: boolean
  isExpanded?: boolean
  onToggleExpanded?: (id: string) => void
  sortable: boolean
  hideChildrenCounter?: boolean
  canDropInside?: boolean
  onDragOver?: (itemId: string, position: "before" | "after" | "inside") => void
  onDragLeave?: () => void
  onDrop?: (itemId: string, position: "before" | "after" | "inside") => void
  currentParentId?: string | null
  draggedItemId?: string | null
}

export function ItemSectionHeader({
  item,
  children,
  isActive,
  collapsible,
  isExpanded,
  onToggleExpanded,
  sortable,
  hideChildrenCounter,
  canDropInside = false,
  onDragOver,
  onDragLeave,
  onDrop,
  currentParentId,
  draggedItemId,
}: TOCItemSectionHeaderProps) {
  if (collapsible) {
    return (
      <CollapsibleItemSectionHeader
        item={item}
        isActive={isActive}
        isExpanded={isExpanded}
        onToggleExpanded={onToggleExpanded}
        sortable={sortable}
        hideChildrenCounter={hideChildrenCounter}
        canDropInside={canDropInside}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        currentParentId={currentParentId}
        draggedItemId={draggedItemId}
      >
        {children}
      </CollapsibleItemSectionHeader>
    )
  }

  return (
    <StaticItemSectionHeader
      item={item}
      isActive={isActive}
      sortable={sortable}
      hideChildrenCounter={hideChildrenCounter}
      canDropInside={canDropInside}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      currentParentId={currentParentId}
      draggedItemId={draggedItemId}
    >
      {children}
    </StaticItemSectionHeader>
  )
}
