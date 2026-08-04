import { useEffect, useRef } from "react"

import type { F0DataChartBarProps } from "../../types"

import { resolveChartSize } from "../../utils/responsive"
import { useAxisLabelTooltip } from "../../utils/useAxisLabelTooltip"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import {
  expandedHorizontalChartHeight,
  horizontalCategoryWindow,
  useBarChartOptions,
} from "./useBarChartOptions"

export const BarChart = (props: F0DataChartBarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width, height } = useContainerSize(ref)
  const size = resolveChartSize(width)
  const options = useBarChartOptions(ref, props, size)
  const chartRef = useEChartsInstance(ref, options)
  const theme = useChartTheme(ref)
  useAxisLabelTooltip(chartRef, ref, theme)
  useLegendInteraction(chartRef)

  // Expanded horizontal charts draw every category at a fixed row height rather
  // than compressing them into the container, so the canvas can end up taller
  // than the space it was given. It grows in place — the surrounding widget
  // takes its height from this and the page scrolls — so nothing here clips or
  // scrolls on its own. `min-height` rather than `height`: a chart with fewer
  // categories than fit keeps filling its container via `h-full`, so its bars
  // come out thicker instead of leaving the widget half empty.
  const expandedHeight = expandedHorizontalChartHeight(props)

  // Recomputed from the same inputs the options hook uses, so what gets reported
  // can never disagree with the window the chart actually rendered.
  const categoryWindow = horizontalCategoryWindow({
    isVertical: props.orientation !== "horizontal",
    showAllCategories: props.showAllCategories ?? false,
    stacked: props.stacked ?? false,
    categoryCount: props.categories?.length ?? 0,
    seriesCount: props.series?.length ?? 0,
    containerHeight: height,
  })
  const hiddenCategories =
    categoryWindow === undefined
      ? 0
      : Math.max(0, (props.categories?.length ?? 0) - categoryWindow)

  const { onHiddenCategoriesChange } = props
  useEffect(() => {
    onHiddenCategoriesChange?.(hiddenCategories)
  }, [hiddenCategories, onHiddenCategoriesChange])

  // See LineChart.tsx for the rationale on the scoped axis-label cursor reset.
  return (
    <div
      ref={ref}
      className="h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default"
      {...(expandedHeight !== undefined
        ? { style: { minHeight: expandedHeight } }
        : {})}
    />
  )
}
