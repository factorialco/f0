import { CoCreationBlockManifest } from "@/co-creation/types"
import { F0ECharts } from "@/components/Charts/F0ECharts"
import z from "zod"

export const ChartProps = z.object({
  title: z.string().describe("The chart title"),
  chartOptions: z.object({}).describe("ECharts-compatible options"),
})

export const Chart = (props: z.infer<typeof ChartProps>) => {
  return (
    <>
      <h3>{props.title}</h3>
      <F0ECharts options={props.chartOptions} />
    </>
  )
}

export const ChartCCBManifest: CoCreationBlockManifest = {
  id: "chart",
  description: "A block that displays a chart",
  component: Chart,
  propsSchema: ChartProps,
}
