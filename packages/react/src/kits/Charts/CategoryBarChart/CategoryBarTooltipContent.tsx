import { cn } from "@/lib/utils"
import { TooltipContent } from "@/ui/tooltip"

/** Half of Radix's 700ms default: the tooltip is the only way to read the labels. */
export const CATEGORY_BAR_TOOLTIP_DELAY_MS = 350

export function formatCategoryBarPercentage(
  value: number,
  total: number
): string {
  const percentage = total > 0 ? (value / total) * 100 : 0
  return percentage % 1 === 0 ? percentage.toFixed(0) : percentage.toFixed(1)
}

export interface CategoryBarSource {
  name: string
  value: number
}

export type CategoryBarSegment<T extends CategoryBarSource> = T & {
  key: string
  percentage: number
  color: string
}

/** `resolveColor` is a callback because the two bars use different color systems. */
export function buildCategoryBarSegments<T extends CategoryBarSource>(
  items: T[],
  total: number,
  resolveColor: (item: T, index: number) => string
): CategoryBarSegment<T>[] {
  return items
    .map((item, index) => ({
      ...item,
      key: `${item.name}-${index}`,
      percentage: total > 0 ? (item.value / total) * 100 : 0,
      color: resolveColor(item, index),
    }))
    .filter((segment) => segment.percentage > 0)
}

export function toCategoryBarTooltipItems<T extends CategoryBarSource>(
  segments: CategoryBarSegment<T>[],
  total: number
): CategoryBarTooltipItem[] {
  return segments.map((segment) => ({
    key: segment.key,
    name: segment.name,
    color: segment.color,
    valueLabel: `${segment.value} (${formatCategoryBarPercentage(segment.value, total)}%)`,
  }))
}

export interface CategoryBarTooltipItem {
  key: string
  name: string
  color: string
  /** Pre-formatted, e.g. `"12 (60%)"`. */
  valueLabel: string
}

interface CategoryBarTooltipContentProps {
  items: CategoryBarTooltipItem[]
  /** Segment under the pointer; the rest are dimmed. Keyed, not indexed, so a
   * data refresh mid-hover can't dim the wrong row. */
  activeKey?: string
}

/** Lists every segment, so one hover reveals the whole legend. */
export function CategoryBarTooltipContent({
  items,
  activeKey,
}: CategoryBarTooltipContentProps) {
  const hasActiveRow = items.some((item) => item.key === activeKey)

  return (
    <TooltipContent className="flex flex-col gap-0.5 text-sm">
      {items.map((item) => (
        <div
          key={item.key}
          className={cn(
            "flex items-center gap-1",
            hasActiveRow && item.key !== activeKey && "opacity-50"
          )}
        >
          <div
            className="h-2.5 w-2.5 shrink-0 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span className="pl-0.5 pr-2 text-f1-foreground-inverse-secondary">
            {item.name}
          </span>
          <span className="ml-auto font-mono font-medium tabular-nums text-f1-foreground-inverse">
            {item.valueLabel}
          </span>
        </div>
      ))}
    </TooltipContent>
  )
}
