import type { ReactNode } from "react"

import { motion } from "motion/react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { CrossedCircle } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"

import type { F0SelectItemObject } from "../types"

type ItemsPreviewHoverCardProps = {
  items: F0SelectItemObject<string>[]
  onDeselect?: (value: string) => void
  children: ReactNode
  triggerClassName?: string
}

const ItemContent = ({
  item,
  onDeselect,
}: {
  item: F0SelectItemObject<string>
  onDeselect?: (value: string) => void
}) => (
  <div className="dark flex w-full min-w-0 items-center justify-between gap-1.5 rounded-md border border-solid border-f1-border-secondary px-1 py-0.5">
    <div className="flex min-w-0 flex-1 items-center gap-1.5">
      {item.avatar && <F0Avatar avatar={item.avatar} size="xs" />}
      {item.icon && (
        <F0Icon icon={item.icon} size="sm" className="shrink-0 text-f1-icon" />
      )}
      <OneEllipsis className="text-sm">{item.label}</OneEllipsis>
    </div>
    {onDeselect && (
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full p-0",
          focusRing()
        )}
        aria-label="Clear"
        type="button"
        tabIndex={0}
        data-testid="clear-button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onDeselect(item.value)
        }}
      >
        <F0Icon icon={CrossedCircle} color="default" size="md" />
      </motion.button>
    )}
  </div>
)

/**
 * Component for previewing selected items
 */
export const ItemsPreviewHoverCard = ({
  items,
  onDeselect,
  children,
  triggerClassName,
}: ItemsPreviewHoverCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className={triggerClassName}>
        <button onClick={(e) => e.stopPropagation()} className="flex">
          {children}
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <ScrollArea className="[*[data-state=visible]_div]:bg-f1-background flex max-h-[280px] max-w-[300px] flex-col">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex min-w-0 items-center px-1 py-0.5 [&:first-child]:pt-1 [&:last-child]:pb-1"
            >
              <ItemContent item={item} onDeselect={onDeselect} />
            </div>
          ))}
          <ScrollBar
            orientation="vertical"
            className="[&_div]:bg-f1-background"
          />
        </ScrollArea>
      </HoverCardContent>
    </HoverCard>
  )
}

ItemsPreviewHoverCard.displayName = "ItemsPreviewHoverCard"
