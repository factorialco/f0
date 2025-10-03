import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  LineChartConfig,
} from "@/ui/chart"
import { nanoid } from "nanoid"
import { ForwardedRef } from "react"
import {
  Area,
  AreaChart as AreaChartPrimitive,
  CartesianGrid,
  Text,
  TextProps,
  XAxis,
  XAxisProps,
  YAxis,
} from "recharts"
import { usePrivacyMode } from "../../../lib/privacyMode"
import { getColorScheme } from "../utils/colors"
import {
  cartesianGridProps,
  chartTooltipProps,
  measureTextWidth,
} from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { prepareData } from "../utils/muncher"
import { LineChartPropsBase } from "../utils/types"

type allowedLineTypes = "natural" | "linear" | "step" | "monotoneX"

export type AreaChartProps<K extends LineChartConfig = LineChartConfig> =
  LineChartPropsBase<K> & {
    lineType?: allowedLineTypes
    marginTop?: number
    canBeBlurred?: boolean
    blurArea?: "l" | "r" | "lr"
  }

// Rechart props give any
type TickProps = TextProps & {
  tickFormatter: XAxisProps["tickFormatter"]
  index: number
  visibleTicksCount: number
  payload: {
    value: string | number
    index: number
    offset: number
  }
}

const ChartAreaBoundedTick = ({
  index,
  visibleTicksCount,
  payload,
  tickFormatter,
  ...props
}: TickProps) => {
  const isFirst = index === 0
  const isLast = index === visibleTicksCount - 1
  return (
    <Text {...props} textAnchor={isFirst ? "start" : isLast ? "end" : "middle"}>
      {tickFormatter?.(payload.value, payload.index) ?? payload.value}
    </Text>
  )
}

export const BaseAreaChart = <K extends LineChartConfig>(
  {
    data,
    dataConfig,
    xAxis,
    yAxis,
    canBeBlurred,
    blurArea,
    lineType = "monotoneX",
    aspect,
    marginTop = 0,
    colorScheme,
  }: AreaChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { enabled: privacyModeEnabled } = usePrivacyMode()

  const areas = Object.keys(dataConfig) as (keyof LineChartConfig)[]
  const scheme =
    colorScheme ?? (areas.length === 1 ? "one-color" : "categorical")
  const chartId = nanoid(12)

  const preparedData = prepareData(data)
  const maxLabelWidth = Math.max(
    ...preparedData.flatMap((el) =>
      areas.map((key) =>
        measureTextWidth(
          yAxis?.tickFormatter
            ? yAxis.tickFormatter(`${el[key]}`)
            : `${el[key]}`
        )
      )
    )
  )
  const yAxisWidth = yAxis?.width ?? maxLabelWidth + 20
  const isYAxisVisible = !yAxis?.hide
  const isXAxisVisible = !xAxis?.hide

  const showTooltip = !canBeBlurred || !privacyModeEnabled

  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect}>
      <AreaChartPrimitive
        accessibilityLayer
        data={preparedData}
        className="overflow-visible [&_.recharts-surface]:overflow-visible"
        margin={{
          top: marginTop,
        }}
      >
        <defs>
          <linearGradient
            id={`${chartId}-fadeGradient`}
            gradientUnits="userSpaceOnUse"
            x1={`${isYAxisVisible ? yAxisWidth : 0}`}
            y1="0"
            x2="100%"
            y2="0"
          >
            {(blurArea === "l" || blurArea === "lr") && (
              <>
                <stop offset="0%" stopColor="black" stopOpacity="0"></stop>
                <stop offset="1%" stopColor="white" stopOpacity="0.1"></stop>
                <stop offset="7%" stopColor="white" stopOpacity="1"></stop>
              </>
            )}
            {(blurArea === "r" || blurArea === "lr") && (
              <>
                <stop offset="93%" stopColor="white" stopOpacity="1"></stop>
                <stop offset="99%" stopColor="white" stopOpacity="0.1"></stop>
                <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
              </>
            )}
            {!blurArea && (
              <>
                <stop offset="0%" stopColor="white" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
              </>
            )}
          </linearGradient>
          <mask
            id={`${chartId}-transparent-edges`}
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill={`url(#${chartId}-fadeGradient)`}
            ></rect>
          </mask>
          {areas.map((area, index) => (
            <linearGradient
              key={index}
              id={`fill${String(area)}-${chartId}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor={
                  dataConfig[area].color || getColorScheme(scheme, index)
                }
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={
                  dataConfig[area].color || getColorScheme(scheme, index)
                }
                stopOpacity={0.1}
              />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid
          {...cartesianGridProps()}
          mask={`url(#${chartId}-transparent-edges)`}
        />
        {isXAxisVisible && (
          <XAxis
            dataKey="x"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={xAxis?.tickFormatter}
            ticks={xAxis?.ticks}
            domain={xAxis?.domain}
            interval={0}
            tick={ChartAreaBoundedTick}
          />
        )}
        {isYAxisVisible && (
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickCount={yAxis?.tickCount}
            tickFormatter={
              canBeBlurred && privacyModeEnabled
                ? () => "**"
                : yAxis?.tickFormatter
            }
            ticks={yAxis?.ticks}
            domain={yAxis?.domain}
            width={yAxisWidth}
          />
        )}
        {showTooltip && (
          <ChartTooltip
            {...chartTooltipProps()}
            content={
              <ChartTooltipContent
                indicator="dot"
                yAxisFormatter={yAxis?.tickFormatter}
              />
            }
          />
        )}
        {areas.map((area, index) => (
          <Area
            isAnimationActive={false}
            key={area}
            dataKey={area}
            type={lineType}
            mask={`url(#${chartId}-transparent-edges)`}
            fill={`url(#fill${area}-${chartId})`}
            fillOpacity={dataConfig[area].dashed ? 0 : 0.4}
            stroke={dataConfig[area].color || getColorScheme(scheme, index)}
            strokeWidth={1.5}
            strokeDasharray={dataConfig[area].dashed ? "4 4" : undefined}
          />
        ))}
        {Object.keys(dataConfig).length > 1 && (
          <ChartLegend
            className="flex justify-start"
            content={<ChartLegendContent />}
          />
        )}
      </AreaChartPrimitive>
    </ChartContainer>
  )
}

export const AreaChart = fixedForwardRef(BaseAreaChart)
