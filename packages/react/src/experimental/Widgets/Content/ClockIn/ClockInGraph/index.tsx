import { Cell, Pie, PieChart } from "recharts"

import { getLabels, normalizeData } from "./helpers"

export type ClockInStatus = "clocked-in" | "break" | "clocked-out"

export interface ClockInGraphProps {
  trackedMinutes?: number
  data?: {
    from: Date
    to: Date
    variant: ClockInStatus
  }[]
  remainingMinutes?: number
}

export const CLOCK_IN_COLORS = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))",
}

export function ClockInGraph({
  data = [],
  trackedMinutes = 0,
  remainingMinutes,
}: ClockInGraphProps) {
  const normalizedData = normalizeData({
    data,
    trackedMinutes,
    remainingMinutes,
  })

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
