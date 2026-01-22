import { forwardRef } from "react"

import { getColor } from "../../../../components/Charts/utils/colors"

interface DualProgressBarProps {
  value: number
  max?: number
}

export const ProgressBarDuo = forwardRef<HTMLDivElement, DualProgressBarProps>(
  function ProgressBarDuo({ value, max = 100 }: DualProgressBarProps, ref) {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100))

    return (
      <div ref={ref} className="flex h-2 w-full gap-0.5 overflow-hidden">
        <div
          className="rounded transition-all duration-300 ease-in-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: getColor("categorical-1"),
          }}
        />
        <div
          className="rounded bg-f1-foreground-disabled transition-all duration-300 ease-in-out"
          style={{ width: `${100 - percentage}%` }}
        />
      </div>
    )
  }
)

ProgressBarDuo.displayName = "ProgressBarDuo"
