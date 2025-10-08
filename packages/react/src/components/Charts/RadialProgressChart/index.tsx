import { getColor } from "../utils/colors"

export interface RadialProgressProps {
  value: number
  max?: number
  color?: string
  overview?: { number: number; label: string }
}

export function RadialProgressChart({
  value,
  max = 100,
  color,
  overview,
}: RadialProgressProps) {
  const strokeWidth = 12
  const size = 100
  const center = size / 2
  const radius = center - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const progressOffset = ((max - Math.min(value, max)) / max) * circumference
  const strokeColor = color ? getColor(color) : getColor("default")

  return (
    <div className="relative inline-flex aspect-auto h-full w-full items-center justify-center overflow-hidden">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full -rotate-90 transform"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="hsl(var(--neutral-20))"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
      </svg>
      {overview && (
        <div className="absolute inset-0 flex translate-y-0.5 flex-col items-center justify-center">
          <span className="text-sm text-f1-foreground-secondary">
            {overview.label}
          </span>
          <span className="text-4xl font-semibold leading-none text-f1-foreground">
            {overview.number}
          </span>
        </div>
      )}
    </div>
  )
}
