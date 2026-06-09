import { forwardRef } from "react"

import { getColor } from "@/kits/Charts/utils/colors"

import type { F0ProgressBarDistributionProps } from "../types"

export const ProgressBarDistribution = forwardRef<
  HTMLDivElement,
  F0ProgressBarDistributionProps
>(function ProgressBarDistribution(
  { items }: F0ProgressBarDistributionProps,
  ref
) {
  const total = items.reduce((sum, item) => sum + item.value, 0)

  const ariaLabel = items
    .map((item) => {
      const pct = total > 0 ? Math.round((item.value / total) * 100) : 0
      return `${item.label}: ${pct}%`
    })
    .join(", ")

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={total}
      className="flex h-2 w-full gap-0.5 overflow-hidden"
    >
      {items.map((item, index) => {
        const percentage = total > 0 ? (item.value / total) * 100 : 0

        return (
          <div
            key={index}
            className="rounded transition-all duration-300 ease-in-out"
            style={{
              width: `${percentage}%`,
              backgroundColor: getColor(
                item.color ?? `categorical-${index + 1}`
              ),
            }}
          />
        )
      })}
    </div>
  )
})

ProgressBarDistribution.displayName = "F0ProgressBar.Distribution"
