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
  BarChart as BarChartPrimitive,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts"

import { autoColor } from "../utils/colors"
import {
  cartesianGridProps,
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

export type BarChartProps<K extends ChartConfig = ChartConfig> =
  ChartPropsBase<K> & {
    type?: "simple" | "stacked" | "stacked-by-sign"
    label?: boolean
    legend?: boolean
    showValueUnderLabel?: boolean
    onClick?: (data: ChartDataPoint<K>) => void
  }

const _BarChart = <K extends ChartConfig>(
  {
    dataConfig,
    data,
    xAxis,
    yAxis = { hide: true },
    label = false,
    type = "simple",
    aspect,
    legend,
    showValueUnderLabel = false,
    onClick,
  }: BarChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const bars = Object.keys(dataConfig) as (keyof ChartConfig)[]
  const preparedData = prepareData(data)
  const maxLabelWidth = Math.max(
    ...preparedData.flatMap((el) =>
      bars.map((key) =>
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
      <BarChartPrimitive
        accessibilityLayer
        data={preparedData}
        margin={{
          left: yAxis && !yAxis.hide ? 0 : 12,
          right: 12,
          top: label ? 24 : 0,
          bottom: showValueUnderLabel ? 24 : 12,
        }}
        stackOffset={type === "stacked-by-sign" ? "sign" : undefined}
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
        <ChartTooltip
          cursor
          content={<ChartTooltipContent yAxisFormatter={yAxis.tickFormatter} />}
        />
        <CartesianGrid {...cartesianGridProps()} />
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
                          {value}
                        </text>
                      )}
                    </g>
                  )
                }
              : undefined
          }
        />

        {bars.map((key, index) => (
          <Bar
            key={`bar-${key}`}
            isAnimationActive={false}
            dataKey={key}
            stackId={
              type === "stacked" || type === "stacked-by-sign"
                ? "stack"
                : undefined
            }
            fill={dataConfig[key].color || autoColor(index)}
            radius={type === "stacked-by-sign" ? [4, 4, 0, 0] : 4}
            maxBarSize={32}
          >
            {label && (
              <LabelList
                key={`label-${key}`}
                position="top"
                offset={10}
                className="fill-f1-foreground"
                fontSize={12}
              />
            )}
          </Bar>
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
      </BarChartPrimitive>
    </ChartContainer>
  )
}

export const BarChart = fixedForwardRef(_BarChart)
