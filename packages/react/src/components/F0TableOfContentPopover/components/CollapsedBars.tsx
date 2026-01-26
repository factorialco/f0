import { cva } from "cva"
import { useMemo } from "react"

import { cn } from "@/lib/utils"

import { TOCItem } from "../../../experimental/Navigation/F0TableOfContent"
import { TableOfContentPopoverVariant } from "../internal-types"

const MAX_BARS = 16

interface CollapsedBarsProps {
  items: TOCItem[]
  activeItem?: string
  className?: string
  /** Alignment of the bars */
  align?: "left" | "right"
  /** Visual variant: "dark" for light backgrounds (default), "light" for dark backgrounds */
  variant?: TableOfContentPopoverVariant
}

interface FlattenedItem {
  id: string
  depth: number
}

const barVariants = cva({
  base: "h-0.5 rounded-full bg-f1-foreground cursor-pointer",
  variants: {
    depth: {
      0: "w-4",
      1: "w-3",
      2: "w-2",
      3: "w-1.5",
    },
    variant: {
      light: "",
      dark: "dark",
    },
    active: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "light",
      active: false,
      className: "bg-f1-foreground-tertiary opacity-60",
    },
    {
      variant: "dark",
      active: false,
      className: "opacity-50",
    },
  ],
  defaultVariants: {
    depth: 3,
    variant: "light",
    active: true,
  },
})

function flattenAllItems(items: TOCItem[], depth = 0): FlattenedItem[] {
  return items.flatMap((item) => [
    { id: item.id, depth: Math.min(depth, 3) },
    ...(item.children ? flattenAllItems(item.children, depth + 1) : []),
  ])
}

function getVisibleItems(
  allItems: FlattenedItem[],
  activeItem?: string
): FlattenedItem[] {
  const total = allItems.length
  if (total <= MAX_BARS) return allItems

  const step = total / (MAX_BARS - 1)
  const selectedIndices = new Set(
    Array.from({ length: MAX_BARS - 1 }, (_, i) =>
      Math.min(Math.floor(i * step), total - 1)
    )
  )
  selectedIndices.add(total - 1)

  if (activeItem) {
    const activeIndex = allItems.findIndex((item) => item.id === activeItem)
    if (activeIndex !== -1 && !selectedIndices.has(activeIndex)) {
      const closest = [...selectedIndices].reduce((a, b) =>
        Math.abs(b - activeIndex) < Math.abs(a - activeIndex) ? b : a
      )
      selectedIndices.delete(closest)
      selectedIndices.add(activeIndex)
    }
  }

  return [...selectedIndices].sort((a, b) => a - b).map((i) => allItems[i])
}

/**
 * CollapsedBars renders a minimized visual representation
 * of the menu items as horizontal bars with varying widths
 * based on hierarchy depth.
 */
export function CollapsedBars({
  items,
  activeItem,
  className,
  align = "left",
  variant = "dark",
}: CollapsedBarsProps) {
  const flatItems = useMemo(
    () => getVisibleItems(flattenAllItems(items), activeItem),
    [items, activeItem]
  )

  return (
    <div
      className={cn(
        "flex flex-col justify-center gap-2 py-3",
        align === "right" ? "items-end" : "items-start",
        className
      )}
    >
      {flatItems.map((item) => (
        <div
          key={item.id}
          className={barVariants({
            depth: item.depth as 0 | 1 | 2 | 3,
            variant,
            active: item.id === activeItem,
          })}
        />
      ))}
    </div>
  )
}
