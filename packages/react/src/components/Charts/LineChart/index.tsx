import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  LineChartConfig,
} from "@/ui/chart"
import { ForwardedRef } from "react"
import {
  CartesianGrid,
  Line,
  LineChart as LineChartPrimitive,
  XAxis,
  YAxis,
} from "recharts"
import { getCategoricalColor, getColor } from "../utils/colors"
import {
  cartesianGridProps,
  chartTooltipProps,
  measureTextWidth,
  xAxisProps,
  yAxisProps,
} from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { prepareData } from "../utils/muncher"
import { LineChartPropsBase } from "../utils/types"

export type LineChartProps<K extends LineChartConfig = LineChartConfig> =
  LineChartPropsBase<K> & {
    lineType?: "natural" | "linear"
  }

export const _LineChart = <K extends LineChartConfig>(
  {
    data,
    dataConfig,
    xAxis,
    yAxis = { hide: true },
    lineType = "natural",
    aspect,
    hideTooltip = false,
    hideGrid = false,
  }: LineChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const lines = Object.keys(dataConfig) as (keyof LineChartConfig)[]
  const preparedData = prepareData(data)
  const maxLabelWidth = Math.max(
    ...preparedData.flatMap((el) =>
      lines.map((key) =>
        measureTextWidth(
          yAxis?.tickFormatter
            ? yAxis.tickFormatter(`${el[key]}`)
            : `${el[key]}`
        )
      )
    )
  )

  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect}>
      <LineChartPrimitive
        accessibilityLayer
        data={preparedData}
        margin={{ left: yAxis && !yAxis.hide ? 0 : 12, right: 12 }}
      >
        {!hideGrid && <CartesianGrid {...cartesianGridProps()} />}
        {!xAxis?.hide && <XAxis {...xAxisProps(xAxis)} />}
        {!yAxis?.hide && (
          <YAxis
            {...yAxisProps(yAxis)}
            width={yAxis.width ?? maxLabelWidth + 20}
          />
        )}
        {!hideTooltip && (
          <ChartTooltip
            {...chartTooltipProps()}
            content={
              <ChartTooltipContent yAxisFormatter={yAxis?.tickFormatter} />
            }
          />
        )}
        {lines.map((line, index) => (
          <Line
            key={line}
            dataKey={line}
            isAnimationActive={false}
            type={lineType}
            stroke={
              dataConfig[line].color
                ? getColor(dataConfig[line].color)
                : getCategoricalColor(index)
            }
            strokeWidth={1.5}
            strokeDasharray={dataConfig[line].dashed ? "4 4" : undefined}
            dot={false}
          />
        ))}
      </LineChartPrimitive>
    </ChartContainer>
  )
}

export const LineChart = fixedForwardRef(_LineChart)
