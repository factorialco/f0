import { useRef } from "react"

import type { F0DataChartScatterProps } from "../../types"

import { resolveChartSize } from "../../utils/responsive"
import { useAxisLabelTooltip } from "../../utils/useAxisLabelTooltip"
import { useChartTheme } from "../../utils/useChartTheme"
import { useContainerSize } from "../../utils/useContainerSize"
import { useEChartsInstance } from "../../utils/useEChartsInstance"
import { useLegendInteraction } from "../../utils/useLegendInteraction"
import { useScatterChartOptions } from "./useScatterChartOptions"

export const ScatterChart = (props: F0DataChartScatterProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(ref)
  const size = resolveChartSize(width)
  const options = useScatterChartOptions(ref, props, size)
  const chartRef = useEChartsInstance(ref, options)
  const theme = useChartTheme(ref)
  useAxisLabelTooltip(chartRef, ref, theme)
  useLegendInteraction(chartRef)

  // The Y axis carries a `maxLabelWidth`, so it sets `triggerEvent: true` for
  // the truncation tooltip — which makes zrender put `cursor: pointer` on the
  // canvas. The arbitrary variant scopes a reset to the window where the
  // cursor is actually over an axis label, leaving the normal pointer cursor
  // over the points themselves. See LineChart for the full explanation.
  return (
    <div
      ref={ref}
      className="h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default"
    />
  )
}
