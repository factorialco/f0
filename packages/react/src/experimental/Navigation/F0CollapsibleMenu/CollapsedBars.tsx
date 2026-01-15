import { cn } from "@/lib/utils"
import { TOCItem } from "../F0TableOfContent"

interface CollapsedBarsProps {
  items: TOCItem[]
  activeItem?: string
  className?: string
  /** Alignment of the bars */
  align?: "left" | "right"
}

/**
 * Flattens the menu items tree into a linear list
 * showing the hierarchy through bar widths (max 4 visual levels)
 */
function flattenItems(
  items: TOCItem[],
  depth: number = 0,
  maxItems: number = 12
): { id: string; depth: number; hasChildren: boolean }[] {
  const result: { id: string; depth: number; hasChildren: boolean }[] = []

  for (const item of items) {
    if (result.length >= maxItems) break

    result.push({
      id: item.id,
      depth: Math.min(depth, 3),
      hasChildren: Boolean(item.children?.length),
    })

    if (item.children) {
      const children = flattenItems(item.children, depth + 1, maxItems)
      result.push(...children.slice(0, maxItems - result.length))
    }
  }

  return result.slice(0, maxItems)
}

/**
 * CollapsedBars renders a minimized visual representation
 * of the menu items as horizontal bars with varying widths
 * based on hierarchy depth.
 */
const depthWidths = ["w-4", "w-3", "w-2", "w-1.5"] as const

export function CollapsedBars({
  items,
  activeItem,
  className,
  align = "left",
}: CollapsedBarsProps) {
  const flatItems = flattenItems(items)

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
          className={cn(
            "h-0.5 rounded-full",
            depthWidths[item.depth] ?? depthWidths[3],
            item.id === activeItem
              ? "bg-f1-foreground"
              : "bg-f1-foreground-tertiary opacity-60"
          )}
        />
      ))}
    </div>
  )
}
