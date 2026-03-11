import { Skeleton } from "@/ui/skeleton"

// ---------------------------------------------------------------------------
// AxisSkeleton — shared axis frame for bar and line chart skeletons
// ---------------------------------------------------------------------------

/**
 * Shared axis skeleton — mimics a chart with category labels along one axis,
 * value labels along the other, and an optional legend row at the bottom.
 * Children render in the plot area.
 *
 * When `horizontal` is true the axes swap: category labels on the left (wider)
 * and value labels on the bottom — matching a horizontal bar chart layout.
 *
 * Wrapped in px-4 py-3 to match the padding of the real chart content area
 * inside ChartItem.
 */
function AxisSkeleton({
  children,
  showLegend = true,
  horizontal = false,
}: {
  children: React.ReactNode
  showLegend?: boolean
  horizontal?: boolean
}) {
  if (horizontal) {
    return (
      <div className="flex h-full animate-pulse flex-col px-4 py-3">
        {/* Chart area: category labels (left) + plot area (right) */}
        <div className="flex min-h-0 flex-1 gap-2">
          {/* Category axis labels (left side for horizontal charts) */}
          <div className="flex flex-col justify-between py-1">
            <Skeleton className="h-2.5 w-12 rounded-sm" />
            <Skeleton className="h-2.5 w-10 rounded-sm" />
            <Skeleton className="h-2.5 w-14 rounded-sm" />
            <Skeleton className="h-2.5 w-11 rounded-sm" />
          </div>

          {/* Plot area */}
          <div className="relative min-h-0 flex-1">
            <div className="relative h-full w-full">{children}</div>
          </div>
        </div>

        {/* Value axis labels (bottom for horizontal charts) */}
        <div className="ml-16 flex justify-between pt-1">
          <Skeleton className="h-2.5 w-5 rounded-sm" />
          <Skeleton className="h-2.5 w-6 rounded-sm" />
          <Skeleton className="h-2.5 w-5 rounded-sm" />
          <Skeleton className="h-2.5 w-7 rounded-sm" />
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

// ---------------------------------------------------------------------------
// BarChartSkeleton
// ---------------------------------------------------------------------------

interface BarChartSkeletonProps {
  /** Bar orientation. @default "vertical" */
  orientation?: "vertical" | "horizontal"
  /** Show stacked bar segments. @default false */
  stacked?: boolean
  /** Show legend below chart. @default true */
  showLegend?: boolean
}

/**
 * Skeleton for bar chart content area.
 *
 * - `orientation: "vertical"` (default): vertical bars with varying heights.
 * - `orientation: "horizontal"`: horizontal bars extending left-to-right.
 * - `stacked: true`: each bar has 2–3 stacked segments.
 */
export function BarChartSkeleton({
  orientation = "vertical",
  stacked = false,
  showLegend = true,
}: BarChartSkeletonProps = {}) {
  const isHorizontal = orientation === "horizontal"

  if (isHorizontal) {
    return (
      <AxisSkeleton showLegend={showLegend} horizontal>
        <div className="flex h-full flex-col gap-2">
          {stacked ? (
            <>
              <div className="flex flex-1 gap-0.5">
                <Skeleton className="h-full w-1/2 rounded" />
                <Skeleton className="h-full w-1/4 rounded" />
                <Skeleton className="h-full w-[15%] rounded" />
              </div>
              <div className="flex flex-1 gap-0.5">
                <Skeleton className="h-full w-1/3 rounded" />
                <Skeleton className="h-full w-1/5 rounded" />
                <Skeleton className="h-full w-[12%] rounded" />
              </div>
              <div className="flex flex-1 gap-0.5">
                <Skeleton className="h-full w-3/5 rounded" />
                <Skeleton className="h-full w-1/6 rounded" />
                <Skeleton className="h-full w-[10%] rounded" />
              </div>
              <div className="flex flex-1 gap-0.5">
                <Skeleton className="h-full w-2/5 rounded" />
                <Skeleton className="h-full w-1/4 rounded" />
                <Skeleton className="h-full w-[8%] rounded" />
              </div>
            </>
          ) : (
            <>
              <Skeleton className="w-3/4 flex-1 rounded" />
              <Skeleton className="w-1/2 flex-1 rounded" />
              <Skeleton className="w-full flex-1 rounded" />
              <Skeleton className="w-1/3 flex-1 rounded" />
            </>
          )}
        </div>
      </AxisSkeleton>
    )
  }

  // Vertical bars (default)
  if (stacked) {
    return (
      <AxisSkeleton showLegend={showLegend}>
        <div className="flex h-full items-end gap-2">
          <div className="flex flex-1 flex-col gap-0.5">
            <Skeleton className="h-[15%] w-full rounded" />
            <Skeleton className="h-1/4 w-full rounded" />
            <Skeleton className="h-1/3 w-full rounded" />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <Skeleton className="h-[10%] w-full rounded" />
            <Skeleton className="h-1/5 w-full rounded" />
            <Skeleton className="h-1/4 w-full rounded" />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <Skeleton className="h-[12%] w-full rounded" />
            <Skeleton className="h-1/4 w-full rounded" />
            <Skeleton className="h-2/5 w-full rounded" />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <Skeleton className="h-[8%] w-full rounded" />
            <Skeleton className="h-1/5 w-full rounded" />
            <Skeleton className="h-1/6 w-full rounded" />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <Skeleton className="h-[10%] w-full rounded" />
            <Skeleton className="h-1/6 w-full rounded" />
            <Skeleton className="h-1/4 w-full rounded" />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <Skeleton className="h-[12%] w-full rounded" />
            <Skeleton className="h-1/5 w-full rounded" />
            <Skeleton className="h-1/3 w-full rounded" />
          </div>
        </div>
      </AxisSkeleton>
    )
  }

  // Simple vertical bars
  return (
    <AxisSkeleton showLegend={showLegend}>
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

// ---------------------------------------------------------------------------
// LineChartSkeleton
// ---------------------------------------------------------------------------

interface LineChartSkeletonProps {
  /** Line interpolation type. @default "linear" */
  lineType?: "linear" | "smooth" | "step"
  /** Show gradient area fill below line. @default true */
  showArea?: boolean
  /** Show data point dots on the line. @default false */
  showDots?: boolean
  /** Show legend below chart. @default true */
  showLegend?: boolean
}

/** SVG path data for each line type */
const LINE_PATHS = {
  smooth: "M0 60 Q25 45 50 50 T100 35 T150 42 T200 20",
  linear: "M0 60 L40 45 L80 50 L120 35 L160 42 L200 20",
  step: "M0 60 H40 V45 H80 V52 H120 V32 H160 V40 H200 V20",
} as const

/** Data point x/y coordinates for dots (shared across all line types) */
const DOT_POINTS = [
  [0, 60],
  [40, 45],
  [80, 50],
  [120, 35],
  [160, 42],
  [200, 20],
] as const

/**
 * Skeleton for line chart content area.
 *
 * - `lineType`: controls the SVG path shape (smooth curves, straight lines, or steps).
 * - `showArea: true` (default): gradient fill below the line.
 * - `showArea: false`: line only, no fill.
 * - `showDots: true`: SVG circles at each data point.
 */
export function LineChartSkeleton({
  lineType = "linear",
  showArea = true,
  showDots = false,
  showLegend = true,
}: LineChartSkeletonProps = {}) {
  const pathD = LINE_PATHS[lineType]
  const fillD = `${pathD} V80 H0 Z`
  // Unique gradient ID per lineType to avoid SVG ID collisions
  const gradientId = `line-sk-grad-${lineType}`

  return (
    <AxisSkeleton showLegend={showLegend}>
      <div className="relative h-full w-full">
        <svg
          viewBox="0 0 200 80"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          {showArea && (
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="currentColor"
                  stopOpacity="0.10"
                  className="text-f1-foreground-secondary"
                />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
          )}
          {showArea && <path d={fillD} fill={`url(#${gradientId})`} />}
          <path
            d={pathD}
            fill="none"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            stroke="currentColor"
            strokeOpacity="0.15"
            className="text-f1-foreground-secondary"
          />
        </svg>
        {showDots &&
          DOT_POINTS.map(([x, y]) => (
            <Skeleton
              key={`${x}-${y}`}
              className="absolute size-2 rounded-full"
              style={{
                left: `${(x / 200) * 100}%`,
                top: `${(y / 80) * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
      </div>
    </AxisSkeleton>
  )
}

// ---------------------------------------------------------------------------
// FunnelChartSkeleton
// ---------------------------------------------------------------------------

interface FunnelChartSkeletonProps {
  /** Funnel orientation. @default "horizontal" */
  orient?: "horizontal" | "vertical"
  /** Sort direction. @default "descending" */
  sort?: "descending" | "ascending" | "none"
  /** Show legend below chart. @default true */
  showLegend?: boolean
}

/** Default stage sizes (descending — largest first) */
const FUNNEL_STAGES_DESC = [
  { sizePct: 100, label: "w-8" },
  { sizePct: 80, label: "w-6" },
  { sizePct: 58, label: "w-7" },
  { sizePct: 38, label: "w-5" },
  { sizePct: 22, label: "w-6" },
]

/**
 * Skeleton for funnel chart content area.
 *
 * - `orient: "horizontal"` (default): left-to-right trapezoids with
 *   decreasing heights, centered vertically.
 * - `orient: "vertical"`: top-to-bottom trapezoids with decreasing widths,
 *   centered horizontally.
 * - `sort: "ascending"`: reverses stage order (smallest first).
 */
export function FunnelChartSkeleton({
  orient = "horizontal",
  sort = "descending",
  showLegend = true,
}: FunnelChartSkeletonProps = {}) {
  const stages =
    sort === "ascending"
      ? [...FUNNEL_STAGES_DESC].reverse()
      : FUNNEL_STAGES_DESC

  if (orient === "vertical") {
    const gap = 3
    const stageHeight = (100 - gap * (stages.length - 1)) / stages.length

    return (
      <div className="flex h-full animate-pulse flex-col px-4 py-3">
        <div className="min-h-0 flex-1">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            {stages.map((stage, i) => {
              const y = i * (stageHeight + gap)
              const w = stage.sizePct
              const x = (100 - w) / 2
              return (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={w}
                  height={stageHeight}
                  rx="2"
                  className="fill-f1-background-secondary"
                />
              )
            })}
          </svg>
        </div>

        {/* Label placeholders */}
        <div className="flex justify-center gap-4 pt-1.5">
          {stages.map((stage, i) => (
            <Skeleton
              key={i}
              className={`h-2.5 flex-shrink-0 rounded-sm ${stage.label}`}
            />
          ))}
        </div>

        {/* Legend */}
        {showLegend && (
          <div className="flex items-center justify-center gap-4 pt-1.5">
            <div className="flex items-center gap-1.5">
              <Skeleton className="size-2.5 rounded-full" />
              <Skeleton className="h-2.5 w-14 rounded-sm" />
            </div>
          </div>
        )}
      </div>
    )
  }

  // Horizontal funnel (default): left-to-right with decreasing heights
  const gap = 3
  const stageWidth = (100 - gap * (stages.length - 1)) / stages.length

  return (
    <div className="flex h-full animate-pulse flex-col px-4 py-3">
      <div className="min-h-0 flex-1">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          {stages.map((stage, i) => {
            const x = i * (stageWidth + gap)
            const h = stage.sizePct
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
      {showLegend && (
        <div className="flex items-center justify-center gap-4 pt-1.5">
          <div className="flex items-center gap-1.5">
            <Skeleton className="size-2.5 rounded-full" />
            <Skeleton className="h-2.5 w-14 rounded-sm" />
          </div>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// PieChartSkeleton
// ---------------------------------------------------------------------------

interface PieChartSkeletonProps {
  /** Show legend below chart. @default true */
  showLegend?: boolean
  /** Inner radius percentage. 0 = pie, >0 = donut. @default 0 */
  innerRadius?: number
}

/**
 * Skeleton for pie/donut chart content area.
 *
 * - `innerRadius: 0` (default): solid pie circle.
 * - `innerRadius > 0`: donut with a hollow center.
 */
export function PieChartSkeleton({
  showLegend = true,
  innerRadius = 0,
}: PieChartSkeletonProps = {}) {
  const outerR = 40
  const innerR = innerRadius > 0 ? outerR * (innerRadius / 100) : 0

  return (
    <div className="flex h-full animate-pulse flex-col items-center px-4 py-3">
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="h-full max-h-[200px] w-full max-w-[200px]"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={outerR}
            className="fill-f1-background-secondary"
          />
          {/* Segment dividers */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2={50 - outerR}
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-f1-background"
          />
          <line
            x1="50"
            y1="50"
            x2={50 + outerR * 0.87}
            y2={50 + outerR * 0.5}
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-f1-background"
          />
          <line
            x1="50"
            y1="50"
            x2={50 - outerR * 0.71}
            y2={50 + outerR * 0.71}
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-f1-background"
          />
          <line
            x1="50"
            y1="50"
            x2={50 - outerR * 0.34}
            y2={50 - outerR * 0.94}
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-f1-background"
          />
          {/* Inner circle for donut */}
          {innerR > 0 && (
            <circle cx="50" cy="50" r={innerR} className="fill-f1-background" />
          )}
        </svg>
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
          <div className="flex items-center gap-1.5">
            <Skeleton className="size-2.5 rounded-full" />
            <Skeleton className="h-2.5 w-8 rounded-sm" />
          </div>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// RadarChartSkeleton
// ---------------------------------------------------------------------------

interface RadarChartSkeletonProps {
  /** Show legend below chart. @default true */
  showLegend?: boolean
}

/**
 * Skeleton for radar chart content area.
 *
 * Renders a hexagonal shape with concentric rings and radial lines.
 */
export function RadarChartSkeleton({
  showLegend = true,
}: RadarChartSkeletonProps = {}) {
  const cx = 50
  const cy = 45
  const sides = 6
  const outerR = 35
  const rings = [1, 0.75, 0.5, 0.25]
  const dataR = 0.6

  // Generate polygon points for a given radius
  const polygonPoints = (r: number) =>
    Array.from({ length: sides }, (_, i) => {
      const angle = (Math.PI * 2 * i) / sides - Math.PI / 2
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
    }).join(" ")

  // Radial lines from center to vertices
  const radialLines = Array.from({ length: sides }, (_, i) => {
    const angle = (Math.PI * 2 * i) / sides - Math.PI / 2
    return {
      x: cx + outerR * Math.cos(angle),
      y: cy + outerR * Math.sin(angle),
    }
  })

  return (
    <div className="flex h-full animate-pulse flex-col items-center px-4 py-3">
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="h-full max-h-[220px] w-full max-w-[220px]"
        >
          {/* Concentric rings */}
          {rings.map((scale) => (
            <polygon
              key={scale}
              points={polygonPoints(outerR * scale)}
              fill="none"
              strokeWidth="0.5"
              stroke="currentColor"
              strokeOpacity="0.15"
              className="text-f1-foreground-secondary"
            />
          ))}
          {/* Radial lines */}
          {radialLines.map((pt, i) => (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={pt.x}
              y2={pt.y}
              strokeWidth="0.5"
              stroke="currentColor"
              strokeOpacity="0.15"
              className="text-f1-foreground-secondary"
            />
          ))}
          {/* Data polygon placeholder */}
          <polygon
            points={polygonPoints(outerR * dataR)}
            className="fill-f1-background-secondary"
            strokeWidth="1"
            stroke="currentColor"
            strokeOpacity="0.2"
          />
        </svg>
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

// ---------------------------------------------------------------------------
// GaugeChartSkeleton
// ---------------------------------------------------------------------------

/**
 * Skeleton for gauge chart content area.
 *
 * Renders a 270° arc with rounded caps and a large value placeholder,
 * matching the real gauge component style (width 18, roundCap, centered value).
 */
export function GaugeChartSkeleton() {
  const cx = 50
  const cy = 50
  const r = 35
  const strokeWidth = 8

  // ECharts gauge default: 225° start, -45° end (270° sweep)
  // SVG angles: 0° = right, clockwise
  const startAngle = (225 * Math.PI) / 180
  const endAngle = (-45 * Math.PI) / 180

  // Full background arc (270°)
  const bgStartX = cx + r * Math.cos(startAngle)
  const bgStartY = cy - r * Math.sin(startAngle)
  const bgEndX = cx + r * Math.cos(endAngle)
  const bgEndY = cy - r * Math.sin(endAngle)

  // Progress arc (~50% of the 270° sweep = 135°)
  const progressAngle = startAngle - (startAngle - endAngle) * 0.5
  const progEndX = cx + r * Math.cos(progressAngle)
  const progEndY = cy - r * Math.sin(progressAngle)

  return (
    <div className="relative flex h-full animate-pulse items-center justify-center px-4 py-3">
      <svg
        viewBox="0 0 100 100"
        className="h-full max-h-[200px] w-full max-w-[200px]"
      >
        {/* Background arc (270°) */}
        <path
          d={`M ${bgStartX} ${bgStartY} A ${r} ${r} 0 1 1 ${bgEndX} ${bgEndY}`}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          stroke="currentColor"
          strokeOpacity="0.1"
          className="text-f1-foreground-secondary"
        />
        {/* Progress arc (~50%) */}
        <path
          d={`M ${bgStartX} ${bgStartY} A ${r} ${r} 0 0 1 ${progEndX} ${progEndY}`}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="stroke-f1-background-secondary"
        />
      </svg>
      {/* Value placeholder — centered inside the arc */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Skeleton className="h-6 w-14 rounded-sm" />
        <Skeleton className="mt-2 h-3 w-16 rounded-sm" />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// HeatmapChartSkeleton
// ---------------------------------------------------------------------------

/**
 * Skeleton for heatmap chart content area.
 *
 * Renders a 5×4 grid of rectangles with varied opacities to simulate
 * heatmap data, plus placeholder axis labels.
 */
export function HeatmapChartSkeleton() {
  const cols = 5
  const rows = 4
  const gap = 3
  const labelMarginX = 12
  const gridWidth = 100 - labelMarginX
  const gridHeight = 92
  const cellW = (gridWidth - gap * (cols - 1)) / cols
  const cellH = (gridHeight - gap * (rows - 1)) / rows

  // Pre-defined opacities to simulate varying data values
  const opacities = [
    [0.9, 0.4, 0.6, 0.2, 0.7],
    [0.3, 0.8, 0.5, 0.7, 0.4],
    [0.6, 0.2, 0.9, 0.3, 0.8],
    [0.4, 0.7, 0.3, 0.6, 0.5],
  ]

  return (
    <div className="flex h-full animate-pulse flex-col px-4 py-3">
      <div className="min-h-0 flex-1">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          {/* Y-axis label placeholders */}
          {Array.from({ length: rows }, (_, r) => (
            <rect
              key={`y-${r}`}
              x={0}
              y={r * (cellH + gap) + cellH / 2 - 1.5}
              width={9}
              height={3}
              rx={1}
              className="fill-f1-background-secondary"
            />
          ))}
          {/* Heatmap cells */}
          {Array.from({ length: rows }, (_, r) =>
            Array.from({ length: cols }, (_, c) => (
              <rect
                key={`${r}-${c}`}
                x={labelMarginX + c * (cellW + gap)}
                y={r * (cellH + gap)}
                width={cellW}
                height={cellH}
                rx={2}
                className="fill-f1-background-secondary"
                opacity={opacities[r]?.[c] ?? 0.5}
              />
            ))
          )}
          {/* X-axis label placeholders */}
          {Array.from({ length: cols }, (_, c) => (
            <rect
              key={`x-${c}`}
              x={labelMarginX + c * (cellW + gap) + cellW / 2 - 4}
              y={gridHeight + 3}
              width={8}
              height={3}
              rx={1}
              className="fill-f1-background-secondary"
            />
          ))}
        </svg>
      </div>

      {/* Visual map placeholder */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <Skeleton className="h-2.5 w-5 rounded-sm" />
        <Skeleton className="h-2.5 w-20 rounded-sm" />
        <Skeleton className="h-2.5 w-5 rounded-sm" />
      </div>
    </div>
  )
}
