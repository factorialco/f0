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
      // Out of the legend: a constant is not a series the reader can toggle.
      silent: true,
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

/**
 * The reference lines as tooltip rows, for the axis-triggered tooltip that
 * every cartesian chart uses.
 *
 * A markLine cannot answer a hover of its own there: the axis trigger claims
 * the whole plot area, so the pointer never reaches the mark. Reading the
 * figure off the tooltip is also kinder than asking anyone to hit a 1.5px rule.
 */
export function referenceLineRows(
  referenceLines: F0DataChartReferenceLine[] | undefined,
  valueFormatter: (value: number) => string
): { value: string; label: string }[] {
  if (!referenceLines || referenceLines.length === 0) {
    return []
  }

  return referenceLines.flatMap((line) => {
    const label = line.label ?? ""
    const row = { value: valueFormatter(line.value), label }
    return line.description
      ? [row, { value: "", label: line.description }]
      : [row]
  })
}
