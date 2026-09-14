import type * as echarts from "echarts"
import type { F0DataChartReferenceLine } from "../types"
import { resolveChartColorToken } from "./colors"
import type { ChartTheme } from "./theme"

/**
 * ECharts draws a markLine from a series, so the lines ride on an invisible
 * series of their own rather than on the first data series: attaching them to
 * real data would hide them whenever the legend deselects it, and would put
 * them inside that series' tooltip.
 */
export function referenceLineSeries(
  referenceLines: F0DataChartReferenceLine[] | undefined,
  theme: ChartTheme,
  /**
   * Which axis carries the values. Vertical bars and lines measure up the Y
   * axis; horizontal bars measure along the X axis, and a line pinned to the
   * wrong one is drawn off the plot entirely.
   */
  valueAxis: "x" | "y" = "y"
): echarts.SeriesOption[] {
  if (!referenceLines || referenceLines.length === 0) {
    return []
  }

  return [
    {
      type: "line",
      name: "__reference_lines__",
      data: [],
      // Out of the legend and out of the tooltip: a constant is not a series
      // the reader can toggle or hover a value from.
      silent: true,
      tooltip: { show: false },
      legendHoverLink: false,
      animation: false,
      markLine: {
        silent: true,
        symbol: "none",
        emphasis: { disabled: true },
        animation: false,
        data: referenceLines.map((line) => ({
          ...(valueAxis === "x"
            ? { xAxis: line.value }
            : { yAxis: line.value }),
          lineStyle: {
            color: line.color
              ? resolveChartColorToken(line.color)
              : theme.colors.border,
            type: line.solid ? "solid" : "dashed",
            width: 1.5,
          },
          label: line.label
            ? {
                show: true,
                // A vertical line (horizontal bars) labels itself inside the
                // plot at the top: below the axis it lands on the legend.
                position: valueAxis === "x" ? "insideEndTop" : "end",
                // ECharts turns a label to follow its line; a vertical rule
                // would leave the text on its side.
                rotate: 0,
                formatter: line.label,
                color: theme.colors.foregroundTertiary,
                fontSize: 12,
              }
            : { show: false },
        })),
      },
    },
  ]
}
