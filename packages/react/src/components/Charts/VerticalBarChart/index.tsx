import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/ui/chart"
import { cloneDeep } from "lodash"
import { ForwardedRef } from "react"
import {
  Bar,
  BarChart as BarChartPrimitive,
  CartesianGrid,
  LabelList,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
} from "recharts"
import type { Props as LabelProps } from "recharts/types/component/Label"
import type { CartesianViewBox } from "recharts/types/util/types"
import { prepareData } from "../utils/bar"
import { ColorScheme, getColorScheme } from "../utils/colors"
import {
  cartesianGridProps,
  chartTooltipProps,
  measureTextWidth,
  xAxisProps as xAxisConfigureProps,
  yAxisProps as yAxisConfigureProps,
} from "../utils/elements"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig, ChartPropsBase } from "../utils/types"

const getMaxValueByKey = (
  data: ({ x: unknown } & Record<string, number>)[]
): string => {
  const clonedData = cloneDeep(data)

  let label: string = ""
  let max: number = 0

  clonedData.forEach((datapoint) => {
    delete datapoint.x

    Object.entries(datapoint as Record<string, number>).forEach(
      ([newLabel, value]) => {
        if (max < value) {
          max = value
          label = newLabel
        }
      }
    )
  })

  return label
}

type ValueFormatter = (value: string | number | undefined) => string | number

export type VerticalBarChartProps<K extends ChartConfig = ChartConfig> =
  ChartPropsBase<K> & {
    label?: boolean
    showRatio?: boolean
    valueFormatter?: ValueFormatter
    colorScheme?: ColorScheme
  }

const _VBarChart = <K extends ChartConfig>(
  {
    dataConfig,
    data,
    xAxis = { hide: true },
    yAxis,
    label = false,
    aspect,
    hideTooltip = false,
    hideGrid = false,
    showRatio = false,
    valueFormatter,
    colorScheme,
  }: VerticalBarChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const bars = Object.keys(dataConfig) as (keyof ChartConfig)[]
  const scheme =
    colorScheme ?? (bars.length === 1 ? "one-color" : "categorical")
  const preparedData = prepareData<K>(data)
  const maxLabelWidth = Math.max(
    ...preparedData.map((el) => measureTextWidth(`${el.x}`))
  )
  const totalCategories = bars.reduce(
    (acc, key) => {
      acc[key] = data.reduce(
        (sum, item) => sum + (item.values[key] as number),
        0
      )
      return acc
    },
    {} as Record<string, number>
  )

  const xAxisProps: XAxisProps = {
    ...xAxisConfigureProps(xAxis),
    type: "number",
    dataKey: getMaxValueByKey(preparedData),
  }

  const yAxisProps: YAxisProps = {
    ...yAxisConfigureProps(yAxis),
    type: "category",
    dataKey: "x",
  }

  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect}>
      <BarChartPrimitive
        layout="vertical"
        accessibilityLayer
        data={preparedData}
        margin={{
          left: yAxis && !yAxis.hide ? 8 : 12,
          right: label || showRatio ? 100 : 0,
        }}
      >
        {!hideTooltip && (
          <ChartTooltip
            {...chartTooltipProps(true)}
            content={
              <ChartTooltipContent yAxisFormatter={yAxis?.tickFormatter} />
            }
          />
        )}
        {!hideGrid && (
          <CartesianGrid
            {...cartesianGridProps()}
            vertical={true}
            horizontal={false}
          />
        )}
        <XAxis {...xAxisProps} hide={xAxis?.hide} />
        <YAxis
          {...yAxisProps}
          hide={yAxis?.hide}
          width={yAxis?.width ?? maxLabelWidth + 20}
        />

        {bars.map((key, index) => {
          return (
            <>
              <Bar
                isAnimationActive={false}
                layout="vertical"
                key={`bar-${key}`}
                dataKey={key}
                fill={dataConfig[key].color || getColorScheme(scheme, index)}
                radius={4}
                maxBarSize={24}
              >
                {(label || showRatio) && (
                  <LabelList
                    key={`label-{${key}}`}
                    position="right"
                    offset={10}
                    className="fill-f1-foreground"
                    fontSize={12}
                    formatter={valueFormatter}
                    content={
                      showRatio ? (
                        <CustomLabel
                          valueFormatter={valueFormatter}
                          total={totalCategories[key]}
                          showLabel={label}
                        />
                      ) : undefined
                    }
                  />
                )}
              </Bar>
            </>
          )
        })}
      </BarChartPrimitive>
    </ChartContainer>
  )
}

export const VerticalBarChart = fixedForwardRef(_VBarChart)

type CustomLabelProps = LabelProps & {
  valueFormatter?: ValueFormatter
  total: number
  showLabel: boolean
}

const CustomLabel = ({
  viewBox,
  offset = 0,
  value,
  valueFormatter,
  total,
  showLabel,
}: CustomLabelProps) => {
  const { x = 0, y = 0, width = 0, height = 0 } = viewBox as CartesianViewBox
  const gx = x + width + offset
  const gy = y + height / 2
  const firstText = valueFormatter ? valueFormatter(value) : value
  const firstTextWidth = measureTextWidth(`${firstText}`)

  const percentage = total > 0 ? Math.round((Number(value) / total) * 100) : 0

  return (
    <g transform={`translate(${gx},${gy + 4})`}>
      {showLabel && (
        <text
          x={0}
          textAnchor="start"
          className="fill-f1-foreground-secondary text-sm font-medium"
        >
          {firstText}
        </text>
      )}
      {
        <text
          x={showLabel ? firstTextWidth + 8 : 0}
          textAnchor="start"
          className="fill-f1-foreground text-sm font-medium"
        >
          {percentage}%
        </text>
      }
    </g>
  )
}
