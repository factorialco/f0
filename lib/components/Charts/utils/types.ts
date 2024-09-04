import type {
  ChartContainer,
  LineChartConfig,
  ChartConfig as OriginalChartConfig,
} from "@/ui/chart"
import { ComponentProps } from "react"

export type ChartItem<K extends ChartConfig> = {
  label: string
  values: {
    [key in keyof K]: number
  }
}

export type AxisConfig = {
  hide?: boolean
  tickFormatter?: (value: string) => string
  tickCount?: number
  ticks?: number[]
  domain?: number[]
}

export type ChartConfig = Record<
  string,
  OriginalChartConfig[keyof OriginalChartConfig]
>

export type ChartPropsBase<
  K extends OriginalChartConfig = OriginalChartConfig,
> = {
  dataConfig: K
  data: ChartItem<K>[]
  xAxis?: AxisConfig
  yAxis?: AxisConfig
  aspect?: ComponentProps<typeof ChartContainer>["aspect"]
}

export type LineChartPropsBase<K extends LineChartConfig = LineChartConfig> = {
  dataConfig: K
  data: ChartItem<K>[]
  xAxis?: AxisConfig
  yAxis?: AxisConfig
  aspect?: ComponentProps<typeof ChartContainer>["aspect"]
}
