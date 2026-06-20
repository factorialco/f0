import {
  type ChartColorToken,
  paletteColor,
  resolveChartColorToken,
} from "@/kits/F0DataChart/utils/colors"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { cn } from "@/lib/utils"

export interface CategoryBarDataPoint {
  name: string
  value: number
  /**
   * Color of the segment, constrained to the 15 chromatic F0 base-color
   * tokens (e.g. `"viridian"`, `"yellow"`, `"barbie"`). When omitted, a color
   * is auto-assigned by index from the shared chart palette.
   */
  color?: ChartColorToken
}

export interface CategoryBarChartCellValue {
  dataPoints: CategoryBarDataPoint[]
  hideTooltip?: boolean
}

const CELL_MIN_HEIGHT_PX = 40

function formatPercentage(value: number, total: number): string {
  const pct = (value / total) * 100
  return pct % 1 === 0 ? pct.toFixed(0) : pct.toFixed(1)
}

function EmptyCell({ meta }: { meta: ValueDisplayRendererContext }) {
  return (
    <div
      className={cn(
        "text-f1-foreground-secondary",
        meta.visualization === "table" && tableDisplayClassNames.text
      )}
      data-cell-type="categoryBarChart"
    >
      –
    </div>
  )
}

export const CategoryBarChartCell = (
  args: CategoryBarChartCellValue,
  meta: ValueDisplayRendererContext
) => {
  const dataPoints = args?.dataPoints

  if (!dataPoints || !Array.isArray(dataPoints) || dataPoints.length === 0) {
    return <EmptyCell meta={meta} />
  }

  const total = dataPoints.reduce((sum, point) => sum + point.value, 0)

  if (total === 0) {
    return <EmptyCell meta={meta} />
  }

  return (
    <div
      className={cn(
        "flex w-full items-center",
        meta.visualization === "table" && "py-1"
      )}
      style={{ minHeight: CELL_MIN_HEIGHT_PX, minWidth: 80 }}
      data-cell-type="categoryBarChart"
      role="img"
      aria-label="Category bar chart"
    >
      <TooltipProvider>
        <div className="flex h-2 w-full gap-1 overflow-hidden">
          {dataPoints.map((point, index) => {
            const percentage = (point.value / total) * 100
            const color = point.color
              ? resolveChartColorToken(point.color)
              : paletteColor(index)

            if (percentage === 0) return null

            return (
              <Tooltip key={`${point.name}-${index}`}>
                <TooltipTrigger
                  className="h-full cursor-default overflow-hidden rounded-2xs"
                  style={{ width: `${percentage}%` }}
                  asChild
                >
                  <div
                    className="h-full w-full"
                    style={{ backgroundColor: color }}
                    role="img"
                    aria-label={`${point.name}: ${point.value} (${formatPercentage(point.value, total)}%)`}
                    tabIndex={0}
                  />
                </TooltipTrigger>
                {!args.hideTooltip && (
                  <TooltipContent className="flex items-center gap-1 text-sm">
                    <div
                      className="h-2.5 w-2.5 shrink-0 translate-y-px rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary">
                      {point.name}
                    </span>
                    <span className="font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground">
                      {point.value} ({formatPercentage(point.value, total)}%)
                    </span>
                  </TooltipContent>
                )}
              </Tooltip>
            )
          })}
        </div>
      </TooltipProvider>
    </div>
  )
}
