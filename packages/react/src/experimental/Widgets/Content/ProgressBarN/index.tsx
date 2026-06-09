import { forwardRef } from "react"

import { getColor } from "@/kits/Charts/utils/colors"

export interface ProgressBarSegment {
  value: number
  color?: string
}

interface ProgressBarNProps {
  segments: ProgressBarSegment[]
  max?: number
}

export const ProgressBarN = forwardRef<HTMLDivElement, ProgressBarNProps>(
  function ProgressBarN({ segments, max }: ProgressBarNProps, ref) {
    const total = max ?? segments.reduce((sum, s) => sum + s.value, 0)

    return (
      <div ref={ref} className="flex h-2 w-full gap-0.5 overflow-hidden">
        {segments.map((segment, index) => {
          const percentage = total > 0 ? (segment.value / total) * 100 : 0

          return (
            <div
              key={index}
              className="rounded transition-all duration-300 ease-in-out"
              style={{
                width: `${percentage}%`,
                backgroundColor:
                  segment.color ?? getColor(`categorical-${index + 1}`),
              }}
            />
          )
        })}
      </div>
    )
  }
)

ProgressBarN.displayName = "ProgressBarN"
