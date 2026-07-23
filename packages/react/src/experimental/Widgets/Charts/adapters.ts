import type * as echarts from "echarts"

import type { AxisConfig, ChartItem } from "@/kits/Charts/utils/types"
import type {
  F0DataChartBarSeries,
  F0DataChartLineSeries,
} from "@/kits/F0DataChart"
import { legacyChartColorToToken } from "@/lib/chart-colors"
import type { ChartConfig, LineChartConfig } from "@/ui/chart"

/**
 * Adapters from the deprecated Charts data model (`dataConfig` + row-shaped
 * `data`) to F0DataChart's `categories` + `series`. They let the chart
 * widgets keep their public API while rendering F0DataChart internally, so
 * consumers migrate off Recharts without touching their code.
 */

export const toChartColorToken = legacyChartColorToToken

/** Extract the category axis labels from row-shaped Charts data */
export const toCategories = <K extends ChartConfig>(
  data: ChartItem<K>[]
): string[] => data.map((item) => item.label)

/** Build one F0DataChart series per `dataConfig` entry */
export const toBarSeries = <K extends ChartConfig>(
  dataConfig: K,
  data: ChartItem<K>[]
): F0DataChartBarSeries[] =>
  Object.entries(dataConfig).map(([key, config]) => ({
    name: typeof config.label === "string" ? config.label : key,
    data: data.map((item) => item.values[key] ?? 0),
    color: toChartColorToken(config.color),
  }))

/** Build one F0DataChart line series per `dataConfig` entry */
export const toLineSeries = <K extends LineChartConfig>(
  dataConfig: K,
  data: ChartItem<K>[]
): F0DataChartLineSeries[] =>
  Object.entries(dataConfig).map(([key, config]) => ({
    name: typeof config.label === "string" ? config.label : key,
    data: data.map((item) => item.values[key] ?? 0),
    color: toChartColorToken(config.color),
    dashed: config.dashed,
  }))

/** Map the Charts line interpolation names onto F0DataChart's */
export const toLineType = (
  lineType?: "natural" | "linear" | "step" | "monotoneX"
): "linear" | "smooth" | "step" | undefined => {
  switch (lineType) {
    case "natural":
    case "monotoneX":
      return "smooth"
    case "linear":
      return "linear"
    case "step":
      return "step"
    default:
      return undefined
  }
}

/**
 * Wrap a Charts axis tick formatter (string-based) as an F0DataChart
 * value formatter (number-based).
 */
export const toValueFormatter = (
  tickFormatter?: (value: string) => string
): ((value: number) => string) | undefined =>
  tickFormatter ? (value: number) => tickFormatter(String(value)) : undefined

/**
 * Translate Charts `AxisConfig` hide/domain flags into raw ECharts axis
 * options. `valueAxis` says which ECharts axis carries values ("y" for
 * vertical charts and lines, "x" for horizontal bars).
 */
export const toAxisEchartsOptions = ({
  categoryAxis,
  valueAxis,
  valueAxisName,
}: {
  categoryAxis?: AxisConfig
  valueAxis?: AxisConfig
  valueAxisName: "x" | "y"
}): Partial<echarts.EChartsOption> => {
  const options: Partial<echarts.EChartsOption> = {}

  const valueAxisOptions: Record<string, unknown> = {}
  if (valueAxis?.hide) valueAxisOptions.show = false
  if (valueAxis?.domain) {
    valueAxisOptions.min = valueAxis.domain[0]
    valueAxisOptions.max = valueAxis.domain[1]
  }

  const categoryAxisOptions: Record<string, unknown> = {}
  if (categoryAxis?.hide) categoryAxisOptions.show = false

  if (Object.keys(valueAxisOptions).length > 0) {
    options[valueAxisName === "y" ? "yAxis" : "xAxis"] = valueAxisOptions
  }
  if (Object.keys(categoryAxisOptions).length > 0) {
    options[valueAxisName === "y" ? "xAxis" : "yAxis"] = categoryAxisOptions
  }

  return options
}
