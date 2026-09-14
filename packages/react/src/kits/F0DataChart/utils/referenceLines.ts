import type * as echarts from "echarts"
import type { F0DataChartReferenceLine } from "../types"
import { resolveChartColorToken } from "./colors"
import { renderValueTooltip } from "./options"
import type { ChartTheme } from "./theme"

/**
 * The invisible series the marks ride on.
 *
 * ECharts draws a markLine from a series, so the lines ride on one of their own
 * rather than on the first data series: attaching them to real data would hide
 * them whenever the legend deselects it.
 *
 * Exported because the chart's own
 * tooltip formatter has to recognise a hover on it: ECharts routes a markLine
 * tooltip formatter has to recognise a hover on it: ECharts routes a markLine
 * hover to the GLOBAL tooltip, not to the series' own, so a series-level
 * formatter here never runs and the reader is shown this raw name instead.
 */
export const REFERENCE_LINE_SERIES = "__reference_lines__"

export function referenceLineSeries(
  referenceLines: F0DataChartReferenceLine[] | undefined,
  theme: ChartTheme,
  /**
   * Which axis carries the values. Vertical bars and lines measure up the Y
   * axis; horizontal bars measure along the X axis, and a line pinned to the
   * wrong one is drawn off the plot entirely.
   */
  valueAxis: "x" | "y" = "y",
  /**
   * Whether the mark should receive pointer events so the chart's tooltip can
   * answer for it. True only on an item-triggered chart, where the pointer
   * reaches the mark; an axis-triggered chart claims the whole plot area and
   * must use `referenceLineRows` instead.
   */
  hoverable = false
): echarts.SeriesOption[] {
  if (!referenceLines || referenceLines.length === 0) {
    return []
  }

  return [
    {
      type: "line",
      name: REFERENCE_LINE_SERIES,
      data: [],
      // Out of the legend: a constant is not a series the reader can toggle.
      // Silent only when nothing can be said about it — a silent mark receives
      // no pointer events at all, which is what kept the line from ever
      // answering a hover.
      silent: !hoverable,
      legendHoverLink: false,
      animation: false,
      markLine: {
        // The mark is the thing being hovered, so its own silence is what
        // decides whether the series tooltip above is ever reachable.
        silent: !hoverable,
        symbol: "none",
        // A hoverable line keeps its emphasis state: thickening under the
        // pointer is what says the rule can be asked about at all. Disabled
        // only where nothing would answer.
        emphasis: { disabled: !hoverable },
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
 * The card shown when the pointer is on a reference line: what the line is,
 * what it reads, and the peer group it describes.
 */
export function referenceLineTooltip(
  referenceLines: F0DataChartReferenceLine[] | undefined,
  dataIndex: number | undefined,
  valueFormatter: (value: number) => string,
  theme: ChartTheme
): string {
  const line = referenceLines?.[typeof dataIndex === "number" ? dataIndex : 0]
  if (!line) {
    return ""
  }

  return renderValueTooltip(
    {
      title: line.label,
      value: valueFormatter(line.value),
      rows: line.description ? [{ value: "", label: line.description }] : [],
    },
    theme
  )
}

/**
 * The reference lines as tooltip rows, for a chart whose tooltip is triggered
 * on the AXIS — lines, whose own marks are too thin to hover reliably.
 *
 * An axis trigger claims the whole plot area, so the pointer never reaches the
 * mark and it cannot answer for itself. A bar chart triggers on the item
 * instead and does not need this: pass `valueFormatter` to `referenceLineSeries`
 * there and the line carries its own card.
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
