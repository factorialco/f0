import { experimentalComponent } from "@/lib/experimental"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/chart"
import { ComponentProps, ForwardedRef } from "react"
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RadarChartPrimitive,
} from "recharts"
import { getCategoricalColor, getColor } from "../../../components/Charts/utils/colors"
import { fixedForwardRef } from "../../../components/Charts/utils/forwardRef"
import { ChartConfig, ChartItem } from "../../../components/Charts/utils/types"

export type RadarChartProps<K extends ChartConfig> = {
  dataConfig: K
  data: ChartItem<K>[]
  scaleMin?: number
  scaleMax?: number
  aspect?: ComponentProps<typeof ChartContainer>["aspect"]
}

export const _RadarChart = <K extends ChartConfig>(
  { data, dataConfig, scaleMin, scaleMax, aspect }: RadarChartProps<K>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const items = Object.keys(dataConfig)
  const preparedData = data.map((item) => ({
    subject: item.label,
    ...item.values,
  }))

  return (
    <ChartContainer config={dataConfig} ref={ref} aspect={aspect} data-chromatic="ignore">
      <RadarChartPrimitive accessibilityLayer data={preparedData}>
        <ChartTooltip
          cursor
          animationDuration={100}
          offset={20}
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
            fill={
              dataConfig[key].color ? getColor(dataConfig[key].color) : getCategoricalColor(index)
            }
            stroke={
              dataConfig[key].color ? getColor(dataConfig[key].color) : getCategoricalColor(index)
            }
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

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const RadarChart = fixedForwardRef(
  experimentalComponent<typeof _RadarChart>("RadarChart", _RadarChart)
)
