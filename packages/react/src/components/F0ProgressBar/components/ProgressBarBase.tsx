import { forwardRef } from "react"

import { getColor } from "@/kits/Charts/utils/colors"

import type { F0ProgressBarProps } from "../types"

export const ProgressBarBase = forwardRef<HTMLDivElement, F0ProgressBarProps>(
  function ProgressBarBase({ segments, max }: F0ProgressBarProps, ref) {
    const total = max ?? segments.reduce((sum, s) => sum + s.value, 0)

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={segments.reduce((sum, s) => sum + s.value, 0)}
        className="flex h-2 w-full gap-0.5 overflow-hidden"
      >
        {segments.map((segment, index) => {
          const percentage = total > 0 ? (segment.value / total) * 100 : 0

          return (
            <div
              key={index}
              className="rounded transition-all duration-300 ease-in-out"
              style={{
                width: `${percentage}%`,
                backgroundColor: getColor(
                  segment.color ?? `categorical-${index + 1}`
                ),
              }}
            />
          )
        })}
      </div>
    )
  }
)

ProgressBarBase.displayName = "F0ProgressBar"
