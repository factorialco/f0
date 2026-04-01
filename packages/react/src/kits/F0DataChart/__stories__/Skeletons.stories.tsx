import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  BarChartSkeleton,
  FunnelChartSkeleton,
  GaugeChartSkeleton,
  HeatmapChartSkeleton,
  LineChartSkeleton,
  PieChartSkeleton,
  RadarChartSkeleton,
} from "../skeletons"
import { ChartDecorator } from "./decorators"

const meta = {
  title: "Kits/F0DataChart/Skeletons",
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
