import { ComponentProps, ForwardedRef } from "react"
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RadarChartPrimitive,
} from "recharts"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../ui/chart"
import { ColorScheme, getColorScheme } from "../utils/colors"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig, ChartItem } from "../utils/types"

export type RadarChartProps<K extends ChartConfig> = {
  dataConfig: K
  data: ChartItem<K>[]
  scaleMin?: number
  scaleMax?: number
  aspect?: ComponentProps<typeof ChartContainer>["aspect"]
  colorScheme?: ColorScheme
}

export const _RadarChart = <K extends ChartConfig>(
  {
    data,
    dataConfig,
    scaleMin,
    scaleMax,
    aspect,
    colorScheme,
  }: RadarChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const items = Object.keys(dataConfig)
  const scheme =
    colorScheme ?? (items.length === 1 ? "one-color" : "categorical")
  const preparedData = data.map((item) => ({
    subject: item.label,
    ...item.values,
  }))

  return (
    <ChartContainer
      config={dataConfig}
      ref={ref}
      aspect={aspect}
      data-chromatic="ignore"
    >
      <RadarChartPrimitive accessibilityLayer data={preparedData}>
        <ChartTooltip
          cursor
          content={<ChartTooltipContent indicator="dot" />}
        />

        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis
          angle={90}
          type="number"
          domain={[scaleMin ?? "dataMin", scaleMax ?? "dataMax"]}
        />

        {items.map((key, index) => (
          <Radar
            key={key}
            dataKey={key}
            fill={dataConfig[key].color || getColorScheme(scheme, index)}
            stroke={dataConfig[key].color || getColorScheme(scheme, index)}
            strokeWidth={1.5}
            fillOpacity={0.3}
            label={dataConfig[key].label}
            isAnimationActive={false}
          />
        ))}

        {Object.keys(dataConfig).length > 1 && (
          <ChartLegend iconType="star" content={<ChartLegendContent />} />
        )}
      </RadarChartPrimitive>
    </ChartContainer>
  )
}

export const RadarChart = fixedForwardRef(_RadarChart)
