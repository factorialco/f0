import { motion } from "motion/react"
import { ReactNode } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { Collapsible, CollapsibleContent } from "@/ui/collapsible"

import { Item } from "../Item"
import { TOCItem } from "../types"

interface CollapsibleItemSectionHeaderProps {
  item: TOCItem
  children?: ReactNode
  isActive?: boolean
  isExpanded?: boolean
  onToggleExpanded?: (id: string) => void
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

export function CollapsibleItemSectionHeader({
  item,
  children,
  isActive,
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
}: CollapsibleItemSectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Collapsible
      open={isExpanded}
      onOpenChange={(open: boolean) => {
        if (open !== isExpanded) {
          onToggleExpanded?.(item.id)
        }
      }}
    >
      <Item
        item={item}
        counter={hideChildrenCounter ? undefined : (item.children?.length ?? 0)}
        isActive={isActive}
        collapsible={true}
        isExpanded={isExpanded}
        onToggleExpanded={onToggleExpanded}
        sortable={sortable}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        canDropInside={canDropInside}
        currentParentId={currentParentId}
        draggedItemId={draggedItemId}
      />
      <CollapsibleContent forceMount className="flex flex-col gap-1">
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            visibility: isExpanded ? "visible" : "hidden",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.15,
            ease: [0.165, 0.84, 0.44, 1],
          }}
        >
          <div className="ml-3 min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-5">
            {children}
          </div>
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  )
}
