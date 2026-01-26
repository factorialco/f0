import { cva } from "cva"
import { TOCItem } from "../../../experimental/Navigation/F0TableOfContent"
import { TableOfContentPopoverVariant } from "../internal-types"
import { cn } from "@/lib/utils"

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
  hasChildren: boolean
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

/**
 * Flattens the menu items tree into a linear list
 * showing the hierarchy through bar widths (max 4 visual levels)
 */
function flattenItems(
  items: TOCItem[],
  depth = 0,
  maxItems = 12
): FlattenedItem[] {
  const result: FlattenedItem[] = []

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
export function CollapsedBars({
  items,
  activeItem,
  className,
  align = "left",
  variant = "dark",
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
