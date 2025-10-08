import { Progress } from "@/ui/progress"
import { ForwardedRef } from "react"
import { getColor } from "../utils/colors"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig, ChartPropsBase } from "../utils/types"

export type ProgressBarProps<K extends ChartConfig = ChartConfig> =
  ChartPropsBase<K> & {
    value: number
    max?: number
    label?: string
    color?: string
  }

const _ProgressBar = <K extends ChartConfig>(
  { value, max = 100, label, color }: ProgressBarProps<K>,
  _ref: ForwardedRef<HTMLDivElement>
) => {
  const barColor = color ? getColor(color) : getColor("default")
  const percentage = (value / max) * 100

  return (
    <div className="flex items-center space-x-2" aria-live="polite">
      <div className="flex-grow">
        <Progress
          color={barColor}
          value={percentage}
          className="w-full"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-label={`${percentage.toFixed(1)}%`}
        />
      </div>
      {label && (
        <div className="flex-shrink-0 text-sm font-medium">{label}</div>
      )}
    </div>
  )
}

export const ProgressBar = fixedForwardRef(_ProgressBar)
