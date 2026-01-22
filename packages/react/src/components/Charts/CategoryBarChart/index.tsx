import { ForwardedRef } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import { getCategoricalColor, getColor } from "../utils/colors"
import { fixedForwardRef } from "../utils/forwardRef"

export interface CategoryBarProps {
  data: {
    name: string
    value: number
    color?: string
  }[]
  legend: boolean
  hideTooltip?: boolean
}

const _CategoryBarChart = (
  { data, legend = true, hideTooltip = false }: CategoryBarProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const total = data.reduce((sum, category) => sum + category.value, 0)

  return (
    <TooltipProvider>
      <div className="w-full" ref={ref}>
        <div className="flex h-2 gap-1 overflow-hidden">
          {data.map((category, index) => {
            const percentage = (category.value / total) * 100
            const color = category.color
              ? getColor(category.color)
              : getCategoricalColor(index)

            const formatPercentage = (value: number): string => {
              const percentage = (value / total) * 100
              return percentage % 1 === 0
                ? percentage.toFixed(0)
                : percentage.toFixed(1)
            }

            if (percentage === 0) {
              return null
            }

            return (
              <Tooltip key={category.name}>
                <TooltipTrigger
                  className="h-full cursor-default overflow-hidden rounded-2xs"
                  style={{ width: `${percentage}%` }}
                  title={category.name}
                  asChild
                >
                  <div
                    className="h-full w-full"
                    style={{ backgroundColor: color }}
                    role="img"
                    title={category.name}
                    tabIndex={0}
                  />
                </TooltipTrigger>
                {!hideTooltip && (
                  <TooltipContent className="flex items-center gap-1 text-sm">
                    <div
                      className="h-2.5 w-2.5 shrink-0 translate-y-px rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary">
                      {category.name}
                    </span>
                    <span className="font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground">
                      {category.value} ({formatPercentage(category.value)}%)
                    </span>
                  </TooltipContent>
                )}
              </Tooltip>
            )
          })}
        </div>
      </div>
      {legend && (
        <div
          className="mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5"
          role="list"
        >
          {data.map((category, index) => {
            const color = category.color
              ? getColor(category.color)
              : getCategoricalColor(index)

            return (
              <div
                key={category.name}
                className="flex items-center gap-1.5"
                role="listitem"
              >
                <div
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-f1-foreground">{category.name}</span>
              </div>
            )
          })}
        </div>
      )}
    </TooltipProvider>
  )
}

export const CategoryBarChart = fixedForwardRef(_CategoryBarChart)
