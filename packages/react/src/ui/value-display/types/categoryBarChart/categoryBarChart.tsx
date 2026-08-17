import { getCategoricalColor, getColor } from "@/kits/Charts/utils/colors"
import { CSSProperties, useState } from "react"

import { Skeleton } from "@/ui/skeleton"
import {
  buildCategoryBarSegments,
  CATEGORY_BAR_TOOLTIP_DELAY_MS,
  CategoryBarTooltipContent,
  formatCategoryBarPercentage,
  toCategoryBarTooltipItems,
} from "@/kits/Charts/CategoryBarChart/CategoryBarTooltipContent"
import {
  type ChartColorToken,
  chartColorTokens,
  resolveChartColorToken,
} from "@/kits/F0DataChart/utils/colors"
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/ui/tooltip"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { cn, focusRing } from "@/lib/utils"

/**
 * Legacy `kits/Charts` color tokens, resolved as `hsl(var(--chart-*))`.
 * Kept for backward compatibility alongside the F0DataChart base-color palette.
 */
const LEGACY_CHART_COLORS = [
  "categorical-1",
  "categorical-2",
  "categorical-3",
  "categorical-4",
  "categorical-5",
  "categorical-6",
  "categorical-7",
  "categorical-8",
  "feedback-negative",
  "feedback-neutral",
  "feedback-positive",
] as const

type LegacyChartColor = (typeof LEGACY_CHART_COLORS)[number]

/**
 * A segment color. Accepts both color systems:
 * - a 15-palette base-color token (`"viridian"`, `"yellow"`, `"barbie"`, …),
 *   resolved through `kits/F0DataChart`; or
 * - a legacy `kits/Charts` token (`"categorical-1"…"categorical-8"`,
 *   `"feedback-positive"`, …), resolved as a CSS `--chart-*` variable.
 */
export type CategoryBarColor = ChartColorToken | LegacyChartColor

const BASE_COLOR_TOKENS = new Set<string>(chartColorTokens)

/** Resolve a segment color from either supported palette. */
function resolveSegmentColor(color: CategoryBarColor): string {
  return BASE_COLOR_TOKENS.has(color)
    ? resolveChartColorToken(color as ChartColorToken)
    : getColor(color)
}

export interface CategoryBarDataPoint {
  name: string
  value: number
  /**
   * Color of the segment. Supports both the 15 chromatic F0 base-color tokens
   * (e.g. `"viridian"`, `"yellow"`, `"barbie"`) and the legacy chart tokens
   * (`"categorical-1"…"categorical-8"`, `"feedback-*"`). When omitted, a color
   * is auto-assigned by index from the shared chart palette.
   */
  color?: CategoryBarColor
}

export interface CategoryBarChartCellValue {
  dataPoints: CategoryBarDataPoint[]
  hideTooltip?: boolean
  /**
   * Renders a skeleton (same height/width as the loaded bar) instead of the
   * chart while the row's data is still loading. Prevents flashing the empty
   * dash before the values arrive.
   */
  loading?: boolean
}

const CELL_MIN_HEIGHT_PX = 40

/**
 * Shared wrapper for every cell state (loaded, empty, loading). The table
 * `<td>` is `align-top` by design (so multi-line cells align by their first
 * line), which would leave the short 8px bar stuck to the top. To align the
 * bar with the row's text instead, the wrapper takes the height of one text
 * line (`h-5` = the `text-sm` line-height) and centers the bar within it — no
 * `h-full` (it doesn't resolve against the cell's `min-height`) and no extra
 * vertical space that would make the row taller than a normal one.
 */
function cellWrapperClassName(): string {
  return "flex h-5 w-full items-center"
}

/**
 * Inside a table the row height comes from the sibling cells, so we only set a
 * horizontal min-width. Outside a table (e.g. cards) we keep a min-height so
 * the bar keeps some presence on its own.
 */
function cellWrapperStyle(meta: ValueDisplayRendererContext): CSSProperties {
  return meta.visualization === "table"
    ? { minWidth: 80 }
    : { minHeight: CELL_MIN_HEIGHT_PX, minWidth: 80 }
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

/**
 * A real component, not inline in `CategoryBarChartCell`: renderers call that as
 * a plain function, so it can't hold hooks.
 */
function CategoryBar({
  dataPoints,
  total,
  hideTooltip,
  meta,
}: {
  dataPoints: CategoryBarDataPoint[]
  total: number
  hideTooltip?: boolean
  meta: ValueDisplayRendererContext
}) {
  const [activeKey, setActiveKey] = useState<string | undefined>(undefined)

  const segments = buildCategoryBarSegments(dataPoints, total, (point, index) =>
    point.color ? resolveSegmentColor(point.color) : getCategoricalColor(index)
  )

  const tooltipItems = toCategoryBarTooltipItems(segments, total)

  return (
    <TooltipProvider delayDuration={CATEGORY_BAR_TOOLTIP_DELAY_MS}>
      <Tooltip>
        {/* `role="group"`, not `img`: an img subtree is presentational, which
            would prune the per-segment labels. */}
        <TooltipTrigger asChild>
          <div
            className={cn(
              cellWrapperClassName(),
              "pointer-events-auto",
              focusRing(),
              // Enlarges the hit box; the negative margin cancels it so the
              // layout box is unchanged. `h-full` can't be used instead - it
              // doesn't resolve through a table row.
              meta.visualization === "table" && "-my-2.5 box-content py-2.5"
            )}
            style={cellWrapperStyle(meta)}
            data-cell-type="categoryBarChart"
            role="group"
            aria-label="Category bar chart"
            tabIndex={0}
          >
            {/* Leaving the bar, or crossing a gap between segments, clears the
                drill-down. */}
            <div
              className="flex h-2 w-full gap-1 overflow-hidden"
              onMouseLeave={() => setActiveKey(undefined)}
              onMouseOver={(event) => {
                if (event.target === event.currentTarget) {
                  setActiveKey(undefined)
                }
              }}
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
          </div>
        </TooltipTrigger>
        {!hideTooltip && tooltipItems.length > 0 && (
          <CategoryBarTooltipContent
            items={tooltipItems}
            activeKey={activeKey}
          />
        )}
      </Tooltip>
    </TooltipProvider>
  )
}

export const CategoryBarChartCell = (
  args: CategoryBarChartCellValue,
  meta: ValueDisplayRendererContext
) => {
  if (args?.loading) {
    return (
      <div
        className={cellWrapperClassName()}
        style={cellWrapperStyle(meta)}
        data-cell-type="categoryBarChart"
        aria-busy="true"
      >
        <Skeleton className="h-2 w-full rounded-2xs" />
      </div>
    )
  }

  const dataPoints = args?.dataPoints

  if (!dataPoints || !Array.isArray(dataPoints) || dataPoints.length === 0) {
    return <EmptyCell meta={meta} />
  }

  const total = dataPoints.reduce((sum, point) => sum + point.value, 0)

  if (total === 0) {
    return <EmptyCell meta={meta} />
  }

  return (
    <CategoryBar
      dataPoints={dataPoints}
      total={total}
      hideTooltip={args.hideTooltip}
      meta={meta}
    />
  )
}
