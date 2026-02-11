/**
 * Progress Bar cell type for displaying progress values in data collections.
 * Supports both direct values and objects with placeholder states and custom labels.
 */
import { getColor } from "@/components/Charts/utils/colors"
import { Progress } from "@/ui/progress"

import { ValueDisplayRendererContext } from "../../renderers"
import { isShowingPlaceholder, resolveValue } from "../../utils"
import { WithPlaceholder } from "../types"

export interface ProgressBarValue extends WithPlaceholder {
  value: number | undefined
  max?: number
  label: string
  hideLabel?: boolean
  color?: string
}

export type ProgressBarCellValue = number | undefined | ProgressBarValue

export const ProgressBarCell = (
  args: ProgressBarCellValue,
  _meta: ValueDisplayRendererContext
) => {
  const resolvedValue = resolveValue<number>(args, "value")
  const isPlaceholder = isShowingPlaceholder(args, "value")

  if (resolvedValue === undefined) {
    return null
  }

  if (isPlaceholder) {
    return (
      <span
        className="text-f1-foreground-secondary"
        data-cell-type="progressBar"
      >
        {resolvedValue}
      </span>
    )
  }

  // After placeholder check, we know it's a number
  const value = resolvedValue as number
  const max =
    typeof args === "object" && "max" in args ? (args.max ?? 100) : 100
  const label =
    typeof args === "object" && "label" in args ? args.label : undefined
  const hideLabel =
    typeof args === "object" && "hideLabel" in args ? args.hideLabel : undefined
  const color =
    typeof args === "object" && "color" in args ? args.color : undefined

  const barColor = color ? getColor(color) : getColor("categorical-1")
  const percentage = (value / max) * 100

  return (
    <div
      className="flex w-full items-center gap-2"
      data-cell-type="progressBar"
    >
      <div className="min-w-16 flex-grow">
        <Progress
          color={barColor}
          value={percentage}
          max={100}
          getValueLabel={(val) => `${(val ?? 0).toFixed(1)}% ${label}`}
          aria-label={label}
          className="w-full"
        />
      </div>
      {!hideLabel && (
        <div className="flex-shrink-0 text-sm font-medium text-f1-foreground">
          {label}
        </div>
      )}
    </div>
  )
}
