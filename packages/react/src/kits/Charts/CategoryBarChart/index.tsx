import { ForwardedRef, useState } from "react"

import { cn, focusRing } from "@/lib/utils"
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/ui/tooltip"

import { getCategoricalColor, getColor } from "../utils/colors"
import { fixedForwardRef } from "../utils/forwardRef"
import {
  buildCategoryBarSegments,
  CATEGORY_BAR_TOOLTIP_DELAY_MS,
  CategoryBarTooltipContent,
  formatCategoryBarPercentage,
  toCategoryBarTooltipItems,
} from "./CategoryBarTooltipContent"

export interface CategoryBarProps {
  data: {
    name: string
    value: number
    color?: string
  }[]
  legend: boolean
  hideTooltip?: boolean
}

const _CategoryBarChart = (
  { data, legend = true, hideTooltip = false }: CategoryBarProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const total = data.reduce((sum, category) => sum + category.value, 0)
  const [activeKey, setActiveKey] = useState<string | undefined>(undefined)

  const segments = buildCategoryBarSegments(data, total, (category, index) =>
    category.color ? getColor(category.color) : getCategoricalColor(index)
  )

  const tooltipItems = toCategoryBarTooltipItems(segments, total)

  return (
    <TooltipProvider delayDuration={CATEGORY_BAR_TOOLTIP_DELAY_MS}>
      <div className="w-full" ref={ref}>
        <Tooltip>
          {/* `role="group"`, not `img`: an img subtree is presentational, which
              would prune the per-segment labels. */}
          <TooltipTrigger asChild>
            <div
              className={cn(
                "pointer-events-auto flex h-2 w-full cursor-default gap-1 overflow-hidden",
                focusRing()
              )}
              onMouseLeave={() => setActiveKey(undefined)}
              onMouseOver={(event) => {
                if (event.target === event.currentTarget) {
                  setActiveKey(undefined)
                }
              }}
              role="group"
              aria-label="Category bar chart"
              tabIndex={segments.length > 0 ? 0 : undefined}
            >
              {segments.map((segment) => (
                <div
                  key={segment.key}
                  className="pointer-events-auto h-full overflow-hidden rounded-2xs"
                  style={{
                    width: `${segment.percentage}%`,
                    backgroundColor: segment.color,
                  }}
                  role="img"
                  aria-label={`${segment.name}: ${segment.value} (${formatCategoryBarPercentage(segment.value, total)}%)`}
                  onMouseEnter={() => setActiveKey(segment.key)}
                />
              ))}
            </div>
          </TooltipTrigger>
          {!hideTooltip && tooltipItems.length > 0 && (
            <CategoryBarTooltipContent
              items={tooltipItems}
              activeKey={activeKey}
            />
          )}
        </Tooltip>
      </div>
      {legend && (
        <div
          className="mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5"
          role="list"
        >
          {data.map((category, index) => {
            const color = category.color
              ? getColor(category.color)
              : getCategoricalColor(index)

            return (
              <div
                key={category.name}
                className="flex items-center gap-1.5"
                role="listitem"
              >
                <div
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-f1-foreground">{category.name}</span>
              </div>
            )
          })}
        </div>
      )}
    </TooltipProvider>
  )
}

export const CategoryBarChart = fixedForwardRef(_CategoryBarChart)
