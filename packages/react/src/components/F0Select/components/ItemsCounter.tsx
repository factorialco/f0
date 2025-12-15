import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { AnimatePresence, motion } from "motion/react"
import type { F0SelectItemObject } from "../types"

type ItemsCounterProps = {
  count: number
  items?: F0SelectItemObject<string>[]
  prefix?: string
}

const ItemContent = ({ item }: { item: F0SelectItemObject<string> }) => (
  <div className="flex min-w-0 items-center gap-1.5">
    {item.avatar && <F0Avatar avatar={item.avatar} size="xs" />}
    {item.icon && <F0Icon icon={item.icon} size="sm" className="shrink-0 text-f1-icon" />}
    <span className="truncate text-sm">{item.label}</span>
  </div>
)

/**
 * Counter component with optional hover card showing remaining items
 */
export const ItemsCounter = ({ count, items, prefix = "+" }: ItemsCounterProps) => {
  const counter = (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={count}
        initial={{ opacity: 0, y: -8, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.9 }}
        transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
      >
        <F0TagRaw text={`${prefix}${count}`} />
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
        <HoverCardContent side="top">
          <ScrollArea className="[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col">
            {items.map((item, index) => (
              <div
                key={item.value ?? index}
                className="flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2"
              >
                {item.description ? (
                  <Tooltip label={item.description}>
                    <ItemContent item={item} />
                  </Tooltip>
                ) : (
                  <ItemContent item={item} />
                )}
              </div>
            ))}
            <ScrollBar orientation="vertical" className="[&_div]:bg-f1-background" />
          </ScrollArea>
        </HoverCardContent>
      </HoverCard>
    </motion.div>
  )
}

ItemsCounter.displayName = "ItemsCounter"
