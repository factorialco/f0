import { Skeleton } from "@/ui/skeleton"

/**
 * Shared axis skeleton — mimics a chart with category labels along the
 * bottom, value labels along the left, and an optional legend row at the
 * very bottom. Children render in the plot area.
 *
 * Wrapped in px-4 py-3 to match the padding of the real chart content area
 * inside ChartItem.
 */
function AxisSkeleton({
  children,
  showLegend = true,
}: {
  children: React.ReactNode
  showLegend?: boolean
}) {
  return (
    <div className="flex h-full animate-pulse flex-col px-4 py-3">
      {/* Chart area: value labels (left) + plot area (right) */}
      <div className="flex min-h-0 flex-1 gap-2">
        {/* Value axis labels */}
        <div className="flex flex-col justify-between py-1">
          <Skeleton className="h-2.5 w-6 rounded-sm" />
          <Skeleton className="h-2.5 w-5 rounded-sm" />
          <Skeleton className="h-2.5 w-7 rounded-sm" />
          <Skeleton className="h-2.5 w-5 rounded-sm" />
        </div>

        {/* Plot area — content only, no grid lines */}
        <div className="relative min-h-0 flex-1">
          <div className="relative h-full w-full">{children}</div>
        </div>
      </div>

      {/* Category axis labels */}
      <div className="ml-9 flex justify-between pt-1">
        <Skeleton className="h-2.5 w-6 rounded-sm" />
        <Skeleton className="h-2.5 w-8 rounded-sm" />
        <Skeleton className="h-2.5 w-5 rounded-sm" />
        <Skeleton className="h-2.5 w-7 rounded-sm" />
        <Skeleton className="h-2.5 w-6 rounded-sm" />
        <Skeleton className="h-2.5 w-5 rounded-sm" />
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="flex items-center justify-center gap-4 pt-3">
          <div className="flex items-center gap-1.5">
            <Skeleton className="size-2.5 rounded-full" />
            <Skeleton className="h-2.5 w-10 rounded-sm" />
          </div>
          <div className="flex items-center gap-1.5">
            <Skeleton className="size-2.5 rounded-full" />
            <Skeleton className="h-2.5 w-12 rounded-sm" />
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Skeleton for bar chart content area.
 * Renders varying-height vertical bars with axes and legend.
 */
export function BarChartSkeleton() {
  return (
    <AxisSkeleton>
      <div className="flex h-full items-end gap-2">
        <Skeleton className="h-3/4 flex-1 rounded" />
        <Skeleton className="h-1/2 flex-1 rounded" />
        <Skeleton className="h-full flex-1 rounded" />
        <Skeleton className="h-1/3 flex-1 rounded" />
        <Skeleton className="h-2/3 flex-1 rounded" />
        <Skeleton className="h-3/4 flex-1 rounded" />
      </div>
    </AxisSkeleton>
  )
}

/**
 * Skeleton for line chart content area.
 * Renders a wavy SVG path with a very subtle fill, axes, and legend.
 */
export function LineChartSkeleton() {
  return (
    <AxisSkeleton>
      <svg
        viewBox="0 0 200 80"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="line-sk-grad" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="currentColor"
              stopOpacity="0.10"
              className="text-f1-foreground-secondary"
            />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 60 Q25 45 50 50 T100 35 T150 42 T200 20 V80 H0 Z"
          fill="url(#line-sk-grad)"
        />
        <path
          d="M0 60 Q25 45 50 50 T100 35 T150 42 T200 20"
          fill="none"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          stroke="currentColor"
          strokeOpacity="0.15"
          className="text-f1-foreground-secondary"
        />
      </svg>
    </AxisSkeleton>
  )
}

/**
 * Skeleton for a horizontal funnel chart.
 *
 * ECharts `orient: "horizontal"` renders the funnel left-to-right: the
 * widest stage is a tall vertical bar on the left, narrowing towards the
 * right. `funnelAlign: "center"` centres each stage vertically. Outside
 * labels sit below each stage.
 *
 * Uses an SVG so percentage heights resolve without needing explicit px
 * values from the parent. Each rect is centred vertically via y offset.
 *
 * Wrapped in px-4 py-3 to match the real chart content area padding.
 */
export function FunnelChartSkeleton() {
  const stages = [
    { heightPct: 100, label: "w-8" },
    { heightPct: 80, label: "w-6" },
    { heightPct: 58, label: "w-7" },
    { heightPct: 38, label: "w-5" },
    { heightPct: 22, label: "w-6" },
  ]

  const gap = 3
  const stageWidth = (100 - gap * (stages.length - 1)) / stages.length

  return (
    <div className="flex h-full animate-pulse flex-col px-4 py-3">
      {/* SVG funnel area */}
      <div className="min-h-0 flex-1">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          {stages.map((stage, i) => {
            const x = i * (stageWidth + gap)
            const h = stage.heightPct
            const y = (100 - h) / 2
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width={stageWidth}
                height={h}
                rx="2"
                className="fill-f1-background-secondary"
              />
            )
          })}
        </svg>
      </div>

      {/* Label placeholders below each stage */}
      <div className="flex gap-1.5 pt-1.5">
        {stages.map((stage, i) => (
          <div key={i} className="flex flex-1 justify-center">
            <Skeleton
              className={`h-2.5 flex-shrink-0 rounded-sm ${stage.label}`}
            />
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 pt-1.5">
        <div className="flex items-center gap-1.5">
          <Skeleton className="size-2.5 rounded-full" />
          <Skeleton className="h-2.5 w-14 rounded-sm" />
        </div>
      </div>
    </div>
  )
}
