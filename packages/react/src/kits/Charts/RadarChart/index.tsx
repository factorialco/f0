import { without } from "lodash"
import { ComponentProps, ForwardedRef, useState } from "react"
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RadarChartPrimitive,
} from "recharts"

import { DataTestIdWrapper } from "@/lib/data-testid"
import { cn } from "@/lib/utils"

import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../ui/chart"
import { getCategoricalColor, getColor } from "../utils/colors"
import { fixedForwardRef } from "../utils/forwardRef"
import { ChartConfig, ChartItem } from "../utils/types"

export type RadarChartProps<K extends ChartConfig> = {
  dataConfig: K
  data: ChartItem<K>[]
  scaleMin?: number
  scaleMax?: number
  aspect?: ComponentProps<typeof ChartContainer>["aspect"]
  hiddenSeries?: Array<keyof K>
}

type InteractiveLegendProps<K extends ChartConfig> = {
  series: { key: string; color: string; label: React.ReactNode }[]
  hiddenKeys: Array<keyof K>
  onToggle: (key: string) => void
}

const InteractiveLegend = <K extends ChartConfig>({
  series,
  hiddenKeys,
  onToggle,
}: InteractiveLegendProps<K>) => {
  return (
    <div className="relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary">
      {series.map(({ key, color, label }) => {
        const isHidden = hiddenKeys.includes(key)

        return (
          <button
            key={key}
            className={cn(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground",
              isHidden ? "opacity-40" : "opacity-100"
            )}
            aria-label={typeof label === "string" ? label : undefined}
            onClick={() => onToggle(key)}
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-f1-foreground">{label}</span>
          </button>
        )
      })}
    </div>
  )
}

const _RadarChart = <K extends ChartConfig>(
  {
    data,
    dataConfig,
    scaleMin,
    scaleMax,
    aspect,
    hiddenSeries,
    dataTestId,
  }: RadarChartProps<K> & { dataTestId?: string },
  ref: ForwardedRef<HTMLDivElement>
) => {
  const items = Object.keys(dataConfig)
  const [hiddenKeys, setHiddenKeys] = useState<Array<keyof K>>(
    hiddenSeries ?? []
  )

  const series = items.map((key, index) => ({
    key,
    color: dataConfig[key].color
      ? getColor(dataConfig[key].color)
      : getCategoricalColor(index),
    label: dataConfig[key].label,
  }))

  const toggleSeries = (key: string) => {
    setHiddenKeys((prev) => {
      if (prev.length === series.length - 1 && !prev.includes(key)) return prev
      if (prev.includes(key)) return without(prev, key)

      return [...prev, key]
    })
  }

  const preparedData = data.map((item) => ({
    subject: item.label,
    ...item.values,
  }))

  return (
    <DataTestIdWrapper dataTestId={dataTestId}>
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

          {series
            .filter(({ key }) => !hiddenKeys.includes(key))
            .map(({ key, color, label }) => (
              <Radar
                key={key}
                dataKey={key}
                fill={color}
                stroke={color}
                strokeWidth={1.5}
                fillOpacity={0.3}
                label={label}
                isAnimationActive={false}
              />
            ))}

          {Object.keys(dataConfig).length > 1 && (
            <ChartLegend
              iconType="star"
              content={
                <InteractiveLegend
                  series={series}
                  hiddenKeys={hiddenKeys}
                  onToggle={toggleSeries}
                />
              }
            />
          )}
        </RadarChartPrimitive>
      </ChartContainer>
    </DataTestIdWrapper>
  )
}

export const RadarChart = fixedForwardRef(_RadarChart)
