import { cn } from "@/lib/utils"

const VIEWBOX_SIZE = 20
const STROKE_WIDTH = 2.5

export type UsageRingTone = "default" | "exhausted" | "unlimited"

type UsageRingProps = {
  percentage: number
  tone: UsageRingTone
}

/** Decorative: the owning button carries the accessible name. */
export const UsageRing = ({ percentage, tone }: UsageRingProps) => {
  const center = VIEWBOX_SIZE / 2
  const radius = center - STROKE_WIDTH / 2
  const circumference = 2 * Math.PI * radius
  const filled = tone === "unlimited" ? 100 : percentage
  const offset = ((100 - filled) / 100) * circumference

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
      className="h-5 w-5 -rotate-90"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        strokeWidth={STROKE_WIDTH}
        className="stroke-f1-border-secondary"
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        strokeWidth={STROKE_WIDTH}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className={cn(
          "transition-[stroke-dashoffset] duration-300 ease-out motion-reduce:transition-none",
          tone === "exhausted" && "stroke-f1-background-critical-bold",
          tone === "unlimited" && "stroke-f1-border",
          tone === "default" && "stroke-f1-background-info-bold"
        )}
      />
    </svg>
  )
}
