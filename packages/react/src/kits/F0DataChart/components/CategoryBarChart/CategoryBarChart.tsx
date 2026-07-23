import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import type { F0DataChartCategoryBarProps } from "../../types"

import { paletteColor, resolveChartColorToken } from "../../utils/colors"

/**
 * Formats a segment's share of the total as a percentage string,
 * dropping the decimal when it is exact (e.g. "25" vs "33.3").
 */
const formatPercentage = (value: number, total: number): string => {
  const percentage = (value / total) * 100
  return percentage % 1 === 0 ? percentage.toFixed(0) : percentage.toFixed(1)
}

/**
 * DOM-rendered proportional bar — unlike the canvas variants, segments are
 * plain divs so tooltips, focus and theming come from the design system.
 */
export const CategoryBarChart = ({
  data,
  showLegend = true,
  showTooltip = true,
  valueFormatter,
}: F0DataChartCategoryBarProps) => {
  const total = data.reduce((sum, segment) => sum + segment.value, 0)

  const resolveSegmentColor = (
    segment: F0DataChartCategoryBarProps["data"][number],
    index: number
  ) =>
    segment.color ? resolveChartColorToken(segment.color) : paletteColor(index)

  return (
    <TooltipProvider>
      <div className="w-full">
        <div className="flex h-2 gap-1 overflow-hidden">
          {data.map((segment, index) => {
            const percentage = total === 0 ? 0 : (segment.value / total) * 100
            const color = resolveSegmentColor(segment, index)

            if (percentage === 0) {
              return null
            }

            return (
              <Tooltip key={segment.name}>
                <TooltipTrigger
                  className="h-full cursor-default overflow-hidden rounded-2xs"
                  style={{ width: `${percentage}%` }}
                  title={segment.name}
                  asChild
                >
                  <div
                    className="h-full w-full"
                    style={{ backgroundColor: color }}
                    role="img"
                    title={segment.name}
                    tabIndex={0}
                  />
                </TooltipTrigger>
                {showTooltip && (
                  <TooltipContent className="flex items-center gap-1 text-sm">
                    <div
                      className="h-2.5 w-2.5 shrink-0 translate-y-px rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary">
                      {segment.name}
                    </span>
                    <span className="font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground">
                      {valueFormatter
                        ? valueFormatter(segment.value)
                        : segment.value}{" "}
                      ({formatPercentage(segment.value, total)}%)
                    </span>
                  </TooltipContent>
                )}
              </Tooltip>
            )
          })}
        </div>
        {showLegend && (
          <div
            className="mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5"
            role="list"
          >
            {data.map((segment, index) => (
              <div
                key={segment.name}
                className="flex items-center gap-1.5"
                role="listitem"
              >
                <div
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: resolveSegmentColor(segment, index),
                  }}
                />
                <span className="text-f1-foreground">{segment.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}
