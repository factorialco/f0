import { ForwardedRef } from "react"
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  Scatter,
  XAxis,
  YAxis,
} from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/chart"

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

const createScatter = (categoryKey: string) => {
  const ScatterShape = (props: unknown) => {
    const { cx, cy, fill, payload } = props as {
      cx: number
      cy: number
      fill: string
      payload?: Record<string, unknown>
    }

    const getScatterValue = () => {
      if (!payload) return "-"

      if (payload[categoryKey] !== undefined) {
        return payload[categoryKey]
      }

      for (const [key, value] of Object.entries(payload)) {
        if (typeof value === "number" && key !== "x") {
          return value
        }
      }
      return "-"
    }

    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill={fill}
        stroke="white"
        strokeWidth={2}
        ref={(el) => {
          if (el?.parentElement) {
            el.parentElement.setAttribute(
              "aria-label",
              `Data point: ${getScatterValue()}`
            )
          }
        }}
      />
    )
  }

  ScatterShape.displayName = `Scatter-${categoryKey}`
  return ScatterShape
}

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

type ChartTypeConfig<K extends ChartConfig> = {
  categories: keyof K | (keyof K)[]
  axisLabel?: string
  hideAxis?: boolean
  axisPosition?: "left" | "right"
}

type LineChartTypeConfig<K extends ChartConfig> = ChartTypeConfig<K> & {
  dot?: boolean
  lineType?: "natural" | "linear"
}

export type ComboChartProps<K extends ChartConfig = ChartConfig> =
  ChartPropsBase<K> & {
    label?: boolean
    legend?: boolean
    showValueUnderLabel?: boolean
    bar?: ChartTypeConfig<K>
    line?: LineChartTypeConfig<K>
    scatter?: ChartTypeConfig<K>
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
    scatter,
    onClick,
    testId,
  }: ComboChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const preparedData = prepareData(data)

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
  const scatterCategories = scatter?.categories
    ? Array.isArray(scatter.categories)
      ? scatter.categories
      : [scatter.categories]
    : []

  const allChartKeys = [
    ...barCategories,
    ...lineCategories,
    ...scatterCategories,
  ]
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

  const leftAxisCharts = [bar, line, scatter].filter(
    (chart) => chart?.axisPosition === "left"
  )
  const rightAxisCharts = [bar, line, scatter].filter(
    (chart) => chart?.axisPosition === "right"
  )

  return (
    <ChartContainer
      config={dataConfig}
      ref={ref}
      aspect={aspect}
      data-testid={testId}
    >
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

        {leftAxisCharts.length > 0 && (
          <YAxis
            {...yAxisProps(yAxis)}
            tick
            width={
              yAxis.width ??
              maxLabelWidth +
                20 +
                (rightAxisCharts.length > 0 && leftAxisCharts[0]?.axisLabel
                  ? 20
                  : 0)
            }
            hide={yAxis.hide || leftAxisCharts.some((chart) => chart?.hideAxis)}
            label={
              leftAxisCharts[0]?.axisLabel
                ? {
                    value: leftAxisCharts[0].axisLabel,
                    angle: -90,
                    position: "insideLeft",
                  }
                : undefined
            }
          />
        )}

        {rightAxisCharts.length > 0 && (
          <YAxis
            {...yAxisProps(yAxis)}
            yAxisId="right"
            orientation="right"
            tick
            width={
              yAxis.width ??
              maxLabelWidth +
                20 +
                (leftAxisCharts.length > 0 && rightAxisCharts[0]?.axisLabel
                  ? 20
                  : 0)
            }
            hide={
              yAxis.hide || rightAxisCharts.some((chart) => chart?.hideAxis)
            }
            label={
              rightAxisCharts[0]?.axisLabel
                ? {
                    value: rightAxisCharts[0].axisLabel,
                    angle: 90,
                    position: "insideRight",
                  }
                : undefined
            }
          />
        )}
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

        {lineCategories.map((category, index) => (
          <Line
            key={`line-${String(category)}`}
            type={line?.lineType ?? "natural"}
            dataKey={String(category)}
            stroke={
              dataConfig[category].color
                ? getColor(dataConfig[category].color)
                : getCategoricalColor(barCategories.length + index)
            }
            strokeWidth={2}
            dot={line?.dot ?? false}
            isAnimationActive={false}
            yAxisId={line?.axisPosition === "right" ? "right" : undefined}
          />
        ))}

        {scatterCategories.map((category, index) => (
          <Scatter
            key={`scatter-${String(category)}`}
            dataKey={String(category)}
            fill={
              dataConfig[category].color
                ? getColor(dataConfig[category].color)
                : getCategoricalColor(
                    barCategories.length + lineCategories.length + index
                  )
            }
            r={4}
            isAnimationActive={false}
            yAxisId={scatter?.axisPosition === "right" ? "right" : undefined}
            shape={createScatter(String(category))}
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
