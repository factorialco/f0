import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import {
  BarChartSkeleton,
  ComboChartSkeleton,
  FunnelChartSkeleton,
  GaugeChartSkeleton,
  HeatmapChartSkeleton,
  LineChartSkeleton,
  PieChartSkeleton,
  RadarChartSkeleton,
  ScatterChartSkeleton,
} from "../skeletons"
import { ChartDecorator } from "./decorators"

const meta = {
  title: "F0DataChart/Skeletons",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta

export default meta

export const Bar: StoryObj = {
  render: () => <BarChartSkeleton />,
}

export const BarHorizontal: StoryObj = {
  render: () => <BarChartSkeleton orientation="horizontal" />,
}

export const BarStacked: StoryObj = {
  render: () => <BarChartSkeleton stacked />,
}

export const BarHorizontalStacked: StoryObj = {
  render: () => <BarChartSkeleton orientation="horizontal" stacked />,
}

export const Line: StoryObj = {
  render: () => <LineChartSkeleton />,
}

export const LineLinear: StoryObj = {
  render: () => <LineChartSkeleton lineType="linear" />,
}

export const LineStep: StoryObj = {
  render: () => <LineChartSkeleton lineType="step" />,
}

export const LineNoArea: StoryObj = {
  render: () => <LineChartSkeleton showArea={false} />,
}

export const LineWithDots: StoryObj = {
  render: () => <LineChartSkeleton showDots />,
}

export const Combo: StoryObj = {
  render: () => <ComboChartSkeleton />,
}

export const ComboStacked: StoryObj = {
  render: () => <ComboChartSkeleton stacked />,
}

/** Light and dark visual regression coverage for both combo loading shapes. */
export const Snapshot: StoryObj = {
  parameters: withSnapshot({}),
  decorators: [(Story) => <Story />],
  render: () => (
    <div className="grid w-fit grid-cols-[max-content_max-content] gap-6 bg-f1-background-tertiary p-6">
      {[
        { label: "Light", themeClassName: "" },
        { label: "Dark", themeClassName: "dark" },
      ].map(({ label, themeClassName }) => (
        <section
          key={label}
          className={`${themeClassName} flex flex-col gap-6 rounded-xl bg-f1-background p-4 text-f1-foreground`}
          aria-label={`${label} theme`}
        >
          <h2 className="text-sm font-semibold">{label} theme</h2>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary">
              Default combo
            </span>
            <div className="h-[360px] w-[600px]">
              <ComboChartSkeleton />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary">
              Stacked combo
            </span>
            <div className="h-[360px] w-[600px]">
              <ComboChartSkeleton stacked />
            </div>
          </div>
        </section>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const plots = canvas.getAllByTestId("combo-skeleton-bars")

    await expect(plots).toHaveLength(4)
    for (const plot of plots) {
      const bars = within(plot).getAllByTestId("skeleton")
      for (const bar of bars) {
        await expect(bar.getBoundingClientRect().height).toBeGreaterThan(0)
      }
    }
  },
}

export const Funnel: StoryObj = {
  render: () => <FunnelChartSkeleton />,
}

export const FunnelAscending: StoryObj = {
  render: () => <FunnelChartSkeleton sort="ascending" />,
}

export const FunnelVertical: StoryObj = {
  render: () => <FunnelChartSkeleton orient="vertical" />,
}

export const Pie: StoryObj = {
  render: () => <PieChartSkeleton />,
}

export const PieDonut: StoryObj = {
  render: () => <PieChartSkeleton innerRadius={50} />,
}

export const Radar: StoryObj = {
  render: () => <RadarChartSkeleton />,
}

export const Gauge: StoryObj = {
  render: () => <GaugeChartSkeleton />,
}

export const Heatmap: StoryObj = {
  render: () => <HeatmapChartSkeleton />,
}

export const Scatter: StoryObj = {
  render: () => <ScatterChartSkeleton />,
}

export const ScatterNoLegend: StoryObj = {
  render: () => <ScatterChartSkeleton showLegend={false} />,
}
