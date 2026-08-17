import { ForwardedRef, Fragment, useId } from "react"
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  Rectangle,
  RectangleProps,
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

type StackedBarShapeProps = RectangleProps & {
  payload?: Record<string, unknown>
}

type BarGradientSign = "positive" | "negative"

const projectedGradientId = (
  chartUid: string,
  category: string,
  sign: BarGradientSign
) => `combo-projected-${chartUid}-${category}-${sign}`

/**
 * Rounds only the outer corners of a stacked bar: the top of the outermost
 * positive segment and the bottom of the outermost negative one. Middle
 * segments stay square so the stack reads as one continuous bar.
 *
 * Projected segments fade toward the zero line, so a stack can show two
 * visible tips: the outermost segment overall and the outermost solid
 * (non-projected) one sitting under the projected ones. Both get rounded.
 */
const createStackedBarShape = (
  category: string,
  categories: string[],
  projectedCategories: Set<string>,
  chartUid: string
) => {
  const StackedBarShape = (props: unknown) => {
    const { payload, ...rest } = props as StackedBarShapeProps
    const valueOf = (key: string) => {
      const value = payload?.[key]
      return typeof value === "number" ? value : 0
    }

    const value = valueOf(category)
    const sameSign = (key: string) =>
      value < 0 ? valueOf(key) < 0 : valueOf(key) > 0
    const outermost = [...categories].reverse().find(sameSign)
    const outermostSolid = [...categories]
      .reverse()
      .find((key) => sameSign(key) && !projectedCategories.has(key))
    const isProjected = projectedCategories.has(category)
    const isTip =
      value !== 0 &&
      (outermost === category || (!isProjected && outermostSolid === category))

    // Segments below zero come in with a negative height and Rectangle mirrors
    // the path for them, so the first two radius slots land on the bar tip on
    // both sides of the axis.
    const radius: [number, number, number, number] = isTip
      ? [4, 4, 0, 0]
      : [0, 0, 0, 0]

    const fill = isProjected
      ? `url(#${projectedGradientId(
          chartUid,
          category,
          value < 0 ? "negative" : "positive"
        )})`
      : rest.fill

    return <Rectangle {...rest} fill={fill} radius={radius} />
  }

  StackedBarShape.displayName = `StackedBar-${category}`
  return StackedBarShape
}

/**
 * Shape for projected bars outside a stack: keeps the default geometry and
 * only swaps the solid fill for the fading gradient matching the bar's sign.
 */
const createProjectedBarShape = (category: string, chartUid: string) => {
  const ProjectedBarShape = (props: unknown) => {
    const { payload, ...rest } = props as StackedBarShapeProps
    const value = payload?.[category]
    const sign: BarGradientSign =
      typeof value === "number" && value < 0 ? "negative" : "positive"

    return (
      <Rectangle
        {...rest}
        fill={`url(#${projectedGradientId(chartUid, category, sign)})`}
      />
    )
  }

  ProjectedBarShape.displayName = `ProjectedBar-${category}`
  return ProjectedBarShape
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

type BarChartTypeConfig<K extends ChartConfig> = ChartTypeConfig<K> & {
  /**
   * How multiple bar categories are laid out: side by side ("simple", the
   * default), stacked into a single bar ("stacked"), or stacked with negative
   * values hanging below the zero line ("stacked-by-sign"). Mirrors BarChart's
   * `type` prop.
   */
  type?: "simple" | "stacked" | "stacked-by-sign"
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
    bar?: BarChartTypeConfig<K>
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
  }: ComboChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const preparedData = prepareData(data)
  const chartUid = useId().replace(/:/g, "")

  const barCategories = bar?.categories
    ? Array.isArray(bar.categories)
      ? bar.categories
      : [bar.categories]
    : []
  const isStackedBar =
    bar?.type === "stacked" || bar?.type === "stacked-by-sign"
  const projectedBarCategories = new Set(
    barCategories.filter((key) => dataConfig[key].projected).map(String)
  )
  const barColor = (category: keyof K, index: number) =>
    dataConfig[category].color
      ? getColor(dataConfig[category].color)
      : getCategoricalColor(index)
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
        stackOffset={bar?.type === "stacked-by-sign" ? "sign" : undefined}
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

        {projectedBarCategories.size > 0 && (
          <defs>
            {barCategories
              .filter((category) =>
                projectedBarCategories.has(String(category))
              )
              .map((category) => {
                const color = barColor(
                  category,
                  barCategories.indexOf(category)
                )

                // One gradient per sign: the strong stop sits on the bar tip
                // and fades toward the zero line, so it flips for segments
                // hanging below the axis.
                return (
                  <Fragment key={`projected-gradient-${String(category)}`}>
                    {(["positive", "negative"] as const).map((sign) => (
                      <linearGradient
                        key={sign}
                        id={projectedGradientId(
                          chartUid,
                          String(category),
                          sign
                        )}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor={color}
                          stopOpacity={sign === "positive" ? 0.4 : 0.05}
                        />
                        <stop
                          offset="100%"
                          stopColor={color}
                          stopOpacity={sign === "positive" ? 0.05 : 0.4}
                        />
                      </linearGradient>
                    ))}
                  </Fragment>
                )
              })}
          </defs>
        )}

        {barCategories.map((category, index) => (
          <Bar
            key={`bar-${String(category)}`}
            isAnimationActive={false}
            dataKey={String(category)}
            stackId={isStackedBar ? "stack" : undefined}
            fill={barColor(category, index)}
            radius={4}
            shape={
              isStackedBar
                ? createStackedBarShape(
                    String(category),
                    barCategories.map(String),
                    projectedBarCategories,
                    chartUid
                  )
                : projectedBarCategories.has(String(category))
                  ? createProjectedBarShape(String(category), chartUid)
                  : undefined
            }
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

        {lineCategories.map((category, index) => {
          const stroke = dataConfig[category].color
            ? getColor(dataConfig[category].color)
            : getCategoricalColor(barCategories.length + index)

          return (
            <Line
              key={`line-${String(category)}`}
              type={line?.lineType ?? "natural"}
              dataKey={String(category)}
              stroke={stroke}
              strokeWidth={2}
              strokeDasharray={dataConfig[category].dashed ? "4 4" : undefined}
              // Solid dots in the series color; the default hollow white ones
              // read as gaps over a dashed stroke.
              dot={line?.dot ? { fill: stroke, stroke, r: 3 } : false}
              isAnimationActive={false}
              yAxisId={line?.axisPosition === "right" ? "right" : undefined}
            />
          )
        })}

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
