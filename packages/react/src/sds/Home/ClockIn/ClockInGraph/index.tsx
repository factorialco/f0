import { Cell, Pie, PieChart } from "recharts"

import type { ClockInGraphProps } from "./model"

import { getLabels, normalizeData } from "./helpers"
import { HorizontalBar } from "./HorizontalBar"

export {
  CLOCK_IN_COLORS,
  type ClockInGraphProps,
  type ClockInGraphVariant,
  type ClockInStatus,
} from "./model"

/**
 * The geometry the day is drawn in. Same segments, same colours, same
 * `normalizeData` either way — only the shape differs.
 */
export function ClockInGraph({
  data = [],
  trackedMinutes = 0,
  remainingMinutes,
  variant = "ring",
}: ClockInGraphProps) {
  const normalizedData = normalizeData({
    data,
    trackedMinutes,
    remainingMinutes,
  })

  if (variant === "horizontal-bar") {
    return <HorizontalBar segments={normalizedData} />
  }

  const { primaryLabel, secondaryLabel, time } = getLabels({
    data,
    trackedMinutes,
    remainingMinutes,
  })

  return (
    <div className="relative h-40 w-40">
      <PieChart width={156} height={156}>
        {/* Main progress ring */}
        <Pie
          data={normalizedData}
          cx={74}
          cy={74}
          innerRadius={62}
          outerRadius={74}
          startAngle={225}
          endAngle={-45}
          paddingAngle={2}
          cornerRadius={4}
          dataKey="value"
          strokeWidth={0}
          isAnimationActive={false}
        >
          {normalizedData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              role="presentation"
              aria-label={`${entry.value} minutes`}
            />
          ))}
        </Pie>
      </PieChart>

      {/* Time display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-semibold tabular-nums text-f1-foreground">
          {time}
        </span>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary">
        <span className="text-sm font-medium opacity-60">{primaryLabel}</span>
        <span className="text-sm font-medium opacity-60">{secondaryLabel}</span>
      </div>
    </div>
  )
}
