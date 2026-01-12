import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { AnimatePresence, motion } from "motion/react"
import type { F0SelectItemObject } from "../types"
import { CrossedCircle } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"

type ItemsCounterProps = {
  count: number
  items?: F0SelectItemObject<string>[]
  prefix?: string
  onDeselect?: (value: string) => void
}

const ItemContent = ({ item, onDeselect }: { item: F0SelectItemObject<string>, onDeselect?: (value: string) => void }) => (
  <div className="flex min-w-0 items-center gap-1.5 justify-between w-full dark border border-solid border-f1-border-secondary rounded-md py-0.5 px-1">
    <div className="gap-1.5 flex items-center">
      {item.avatar && <F0Avatar avatar={item.avatar} size="xs" />}
      {item.icon && (
        <F0Icon icon={item.icon} size="sm" className="shrink-0 text-f1-icon" />
      )}
      <span className="truncate text-sm">{item.label}</span>
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
      <F0Icon
        icon={CrossedCircle}
        color="default"
        size="md"
      />
    </motion.button>

    )}
  </div>
)

/**
 * Counter component with optional hover card showing remaining items
 */
export const ItemsCounter = ({
  count,
  items,
  onDeselect,
}: ItemsCounterProps) => {
  const counter = (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={count}
        initial={{ opacity: 0, y: -8, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.9 }}
        transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
      >
        +{count}
      </motion.div>
    </AnimatePresence>
  )

  if (!items?.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", duration: 0.2 }}
      >
        {counter}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", duration: 0.2 }}
    >
      <HoverCard>
        <HoverCardTrigger asChild className="[&_div]:border-none [&_div]:pr-0">
          <button onClick={(e) => e.stopPropagation()}>{counter}</button>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <ScrollArea className="[*[data-state=visible]_div]:bg-f1-background flex max-h-[280px] flex-col">
            {items.map((item, index) => (
              <div
                key={index}
                className="group flex min-w-0 items-center py-0.5 px-1 [&:first-child]:pt-1 [&:last-child]:pb-1"
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
    </motion.div>
  )
}

ItemsCounter.displayName = "ItemsCounter"
