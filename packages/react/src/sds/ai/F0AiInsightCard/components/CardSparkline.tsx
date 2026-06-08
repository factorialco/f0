import { useId } from "react"
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts"

import { cn } from "@/lib/utils"

import type { SparklineDataPoint } from "../types"

type CardSparklineProps = {
  data: SparklineDataPoint[]
  label: string
  invertStatus?: boolean
}

type SparklineDotProps = {
  cx?: number
  cy?: number
  index?: number
}

type TrendDirection = "positive" | "negative" | "neutral"

const trendColors: Record<
  TrendDirection,
  { stroke: string; fill: string; border: string }
> = {
  positive: {
    stroke: "hsl(var(--positive-50))",
    fill: "hsl(var(--positive-50))",
    border: "border-f1-border-positive-bold",
  },
  negative: {
    stroke: "hsl(var(--critical-50))",
    fill: "hsl(var(--critical-50))",
    border: "border-f1-border-critical-bold",
  },
  neutral: {
    stroke: "hsl(var(--neutral-50))",
    fill: "hsl(var(--neutral-50))",
    border: "border-f1-border",
  },
}

function deriveTrendDirection(
  data: SparklineDataPoint[],
  invertStatus?: boolean
): TrendDirection {
  const firstValue = data[0]?.value ?? 0
  const lastValue = data[data.length - 1]?.value ?? 0
  const direction = Math.sign(lastValue - firstValue)
  const effectiveDirection = invertStatus ? direction * -1 : direction

  if (effectiveDirection > 0) return "positive"
  if (effectiveDirection < 0) return "negative"
  return "neutral"
}

const LastPointDot = ({
  cx,
  cy,
  index,
  dataLength,
  color,
}: SparklineDotProps & { dataLength: number; color: string }) => {
  if (index !== dataLength - 1) return null
  if (cx == null || cy == null) return null

  return <circle cx={cx} cy={cy} r={2} fill={color} stroke="none" />
}

const SparklineLabel = ({
  label,
  direction,
}: {
  label: string
  direction: TrendDirection
}) => {
  const colors = trendColors[direction]

  return (
    <span
      className={cn(
        "absolute right-0 inline-flex items-center rounded-full border border-solid bg-f1-background px-1.5 py-px text-xs font-medium shadow",
        direction === "negative"
          ? "bottom-0 translate-y-full"
          : "top-0 -translate-y-full",
        colors.border,
        {
          positive: "text-f1-foreground-positive",
          negative: "text-f1-foreground-critical",
          neutral: "text-f1-foreground-secondary",
        }[direction]
      )}
      data-testid="sparkline-balance"
    >
      {label}
    </span>
  )
}

export const CardSparkline = ({
  data,
  label,
  invertStatus,
}: CardSparklineProps) => {
  const uniqueId = useId().replace(/:/g, "")
  const gradientId = `sparkline-gradient-${uniqueId}`
  const direction = deriveTrendDirection(data, invertStatus)
  const colors = trendColors[direction]

  return (
    <div className="flex flex-1 flex-col">
      <div
        className="relative w-full flex-1"
        role="img"
        aria-label={`Sparkline chart showing ${direction} trend`}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 4, right: 4, bottom: 0, left: 0 }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.fill} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.fill} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <YAxis hide domain={["dataMin - 1", "dataMax + 1"]} />
            <Area
              type="linear"
              dataKey="value"
              stroke={colors.stroke}
              strokeWidth={1.5}
              fill={`url(#${gradientId})`}
              fillOpacity={1}
              isAnimationActive={false}
              dot={(props: SparklineDotProps) => (
                <LastPointDot
                  {...props}
                  key={props.index}
                  dataLength={data.length}
                  color={colors.stroke}
                />
              )}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>

        <SparklineLabel label={label} direction={direction} />
      </div>
    </div>
  )
}
