/**
 * Percentage cell type for displaying percentage values in data collections.
 * Supports both direct values and objects with placeholder states, it also supports a label.
 */
import { cn } from "@/lib/utils"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { isShowingPlaceholder, resolveValue } from "../../utils"
import { WithPlaceholder } from "../types"

const VIEWBOX_SIZE = 100
const STROKE_WIDTH = 12
const PATH_GAP = 12

export interface PercentageValue extends WithPlaceholder {
  percentage: number | undefined
  label?: string
}

export type PercentageCellValue = number | undefined | PercentageValue

export const PercentageCell = (
  args: PercentageCellValue,
  meta: ValueDisplayRendererContext
) => {
  const value = resolveValue<number>(args, "percentage")
  const isPlaceholder = isShowingPlaceholder(args, "percentage")

  if (value === undefined) {
    return null
  }

  if (isPlaceholder) {
    return (
      <span
        className={cn(
          "text-f1-foreground",
          isPlaceholder && "text-f1-foreground-secondary",
          meta.visualization === "table" && tableDisplayClassNames.text
        )}
        data-cell-type="percentage"
      >
        {value}
      </span>
    )
  }

  const center = VIEWBOX_SIZE / 2
  const radius = center - STROKE_WIDTH / 2
  const innerRadius = radius - PATH_GAP
  const circumference = 2 * Math.PI * innerRadius
  const progressOffset =
    ((100 - Math.min(Number(value), 100)) / 100) * circumference
  const hasLabel = typeof args === "object" && "label" in args

  return (
    <div className="flex items-center gap-2" data-cell-type="percentage">
      <svg
        viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
        className="h-7 w-7 -rotate-90 transform"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          className="fill-f1-background-positive"
        />
        <circle
          cx={center}
          cy={center}
          r={innerRadius}
          className="stroke-f1-background-positive-bold"
          fill="none"
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
      </svg>
      <span className="text-f1-foreground">
        {hasLabel ? args.label : `${value}%`}
      </span>
    </div>
  )
}
