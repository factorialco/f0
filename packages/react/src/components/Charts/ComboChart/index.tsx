import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/chart"
import { ForwardedRef } from "react"
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
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
import { ChartPropsBase } from "../utils/types"

type ChartDataPoint<K extends ChartConfig> = {
  label: string
  values: {
    [key in keyof K]: number
  }
}

type ActivePayload<K> = Array<{
  name: keyof K
  value: number
}>

export type ComboChartProps<K extends ChartConfig = ChartConfig> =
  ChartPropsBase<K> & {
    label?: boolean
    legend?: boolean
    showValueUnderLabel?: boolean
    bar?: {
      categories: keyof K | (keyof K)[]
    }
    line?: {
      categories: keyof K | (keyof K)[]
      dot?: boolean
    }
    onClick?: (data: ChartDataPoint<K>) => void
  }

const _ComboChart = <K extends ChartConfig>(
  {
    dataConfig,
    data,
    xAxis,
    yAxis = { hide: true },
    label = false,
    hideTooltip = false,
    hideGrid = false,
    aspect,
    legend,
    showValueUnderLabel = false,
    bar,
    line,
    onClick,
  }: ComboChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const preparedData = prepareData(data)

  // Extract categories from bar/line objects
  const barCategories = bar?.categories
    ? Array.isArray(bar.categories)
      ? bar.categories
      : [bar.categories]
    : []
  const lineCategories = line?.categories
    ? Array.isArray(line.categories)
      ? line.categories
      : [line.categories]
    : []

  // Calculate max label width for all chart data
  const allChartKeys = [...barCategories, ...lineCategories]
  const maxLabelWidth = Math.max(
    ...preparedData.flatMap((el) =>
      allChartKeys.map((key) =>
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
      <ComposedChart
        accessibilityLayer
        data={preparedData}
        margin={{
          left: yAxis && !yAxis.hide ? 0 : 12,
          right: 12,
          top: label ? 24 : 0,
          bottom: showValueUnderLabel ? 24 : 12,
        }}
        stackOffset={undefined}
        onClick={(data) => {
          if (!onClick || !data.activeLabel || !data.activePayload) {
            return
          }

          const chartData = {
            label: data.activeLabel,
            values: {},
          } as ChartDataPoint<K>

          for (const payload of data.activePayload as ActivePayload<K>) {
            chartData.values[payload.name] = payload.value
          }

          onClick(chartData)
        }}
      >
        {!hideTooltip && (
          <ChartTooltip
            {...chartTooltipProps()}
            content={
              <ChartTooltipContent yAxisFormatter={yAxis.tickFormatter} />
            }
          />
        )}
        {!hideGrid && <CartesianGrid {...cartesianGridProps()} />}
        <YAxis
          {...yAxisProps(yAxis)}
          tick
          width={yAxis.width ?? maxLabelWidth + 20}
          hide={yAxis.hide}
        />
        <XAxis
          {...xAxisProps(xAxis)}
          hide={xAxis?.hide}
          tick={
            showValueUnderLabel
              ? (props) => {
                  const { x, y, payload } = props
                  const values =
                    data.find((d) => d.label === payload.value)?.values || ""

                  const value =
                    Object.keys(values).length === 1
                      ? Object.values(values)?.[0]
                      : undefined

                  const normalizedValue =
                    value !== undefined && yAxis.tickFormatter
                      ? yAxis.tickFormatter(`${value}`)
                      : value.toLocaleString()

                  return (
                    <g transform={`translate(${x},${y})`}>
                      <text
                        x={0}
                        y={0}
                        dy={12}
                        textAnchor="middle"
                        className="text-sm font-medium !text-f1-foreground-secondary"
                      >
                        {payload.value}
                      </text>
                      {!!value && (
                        <text
                          x={0}
                          y={0}
                          dy={28}
                          textAnchor="middle"
                          className="!fill-f1-foreground text-sm font-medium"
                        >
                          {normalizedValue}
                        </text>
                      )}
                    </g>
                  )
                }
              : undefined
          }
        />

        {/* Render Bars */}
        {barCategories.map((category, index) => (
          <Bar
            key={`bar-${String(category)}`}
            isAnimationActive={false}
            dataKey={String(category)}
            fill={
              dataConfig[category].color
                ? getColor(dataConfig[category].color)
                : getCategoricalColor(index)
            }
            radius={4}
            maxBarSize={32}
          >
            {label && (
              <LabelList
                key={`label-${String(category)}`}
                position="top"
                offset={10}
                className="fill-f1-foreground"
                fontSize={12}
              />
            )}
          </Bar>
        ))}

        {/* Render Lines */}
        {lineCategories.map((category, index) => (
          <Line
            key={`line-${String(category)}`}
            type="monotone"
            dataKey={String(category)}
            stroke={
              dataConfig[category].color
                ? getColor(dataConfig[category].color)
                : getCategoricalColor(barCategories.length + index)
            }
            strokeWidth={2}
            dot={line?.dot ?? false}
            isAnimationActive={false}
          />
        ))}
        {legend && (
          <ChartLegend
            content={<ChartLegendContent nameKey="label" />}
            align={"center"}
            verticalAlign={"bottom"}
            layout="vertical"
            className={"flex-row items-start gap-4 pr-3 pt-2"}
          />
        )}
      </ComposedChart>
    </ChartContainer>
  )
}

export const ComboChart = fixedForwardRef(_ComboChart)
