import { AnimatePresence, motion } from "motion/react"

import type { F0SelectItemObject } from "../types"

import { ItemsPreviewHoverCard } from "./ItemsPreviewHoverCard"

type ItemsCounterProps = {
  count: number
  items?: F0SelectItemObject<string>[]
  prefix?: string
  onDeselect?: (value: string) => void
}

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
      <ItemsPreviewHoverCard
        items={items}
        onDeselect={onDeselect}
        triggerClassName="[&_div]:border-none [&_div]:pr-0"
      >
        {counter}
      </ItemsPreviewHoverCard>
    </motion.div>
  )
}

ItemsCounter.displayName = "ItemsCounter"
