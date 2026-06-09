import { forwardRef, useMemo } from "react"

import { getColor } from "@/kits/Charts/utils/colors"

import type { F0ProgressBarStepsProps } from "../types"

const INACTIVE_COLOR = "var(--f1-foreground-disabled)"

export const ProgressBarSteps = forwardRef<
  HTMLDivElement,
  F0ProgressBarStepsProps
>(function ProgressBarSteps(
  { total, completed, color = "categorical-1" }: F0ProgressBarStepsProps,
  ref
) {
  const clamped = Math.max(0, Math.min(completed, total))

  const segments = useMemo(
    () =>
      Array.from({ length: total }, (_, i) => ({
        active: i < clamped,
      })),
    [total, clamped]
  )

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={clamped}
      aria-valuetext={`${clamped} of ${total} steps completed`}
      className="flex h-2 w-full gap-0.5 overflow-hidden"
    >
      {segments.map((segment, index) => (
        <div
          key={index}
          className="flex-1 rounded transition-all duration-300 ease-in-out"
          style={{
            backgroundColor: segment.active ? getColor(color) : INACTIVE_COLOR,
          }}
        />
      ))}
    </div>
  )
})

ProgressBarSteps.displayName = "F0ProgressBar.Steps"
