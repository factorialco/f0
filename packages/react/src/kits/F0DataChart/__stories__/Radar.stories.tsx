import type { Meta, StoryObj } from "@storybook/react-vite"

import type { F0DataChartProps } from "../types"

import { F0DataChart } from "../index"
import { ChartDecorator, ResponsiveSnapshot } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Radar",
  tags: ["autodocs"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

export const Default: Story = {
  args: {
    type: "radar",
    indicators: [
      { name: "Performance", max: 100 },
      { name: "Engagement", max: 100 },
      { name: "Retention", max: 100 },
      { name: "Growth", max: 100 },
      { name: "Satisfaction", max: 100 },
    ],
    series: [
      {
        name: "Team Metrics",
        data: [85, 72, 90, 65, 78],
      },
    ],
  },
}

export const MultipleSeries: Story = {
  args: {
    type: "radar",
    indicators: [
      { name: "Performance", max: 100 },
      { name: "Engagement", max: 100 },
      { name: "Retention", max: 100 },
      { name: "Growth", max: 100 },
      { name: "Satisfaction", max: 100 },
    ],
    series: [
      {
        name: "Engineering",
        data: [85, 72, 90, 65, 78],
      },
      {
        name: "Product",
        data: [70, 88, 75, 80, 82],
      },
    ],
  },
}

export const NoArea: Story = {
  args: {
    type: "radar",
    showArea: false,
    indicators: [
      { name: "Speed", max: 100 },
      { name: "Quality", max: 100 },
      { name: "Communication", max: 100 },
      { name: "Teamwork", max: 100 },
      { name: "Initiative", max: 100 },
      { name: "Reliability", max: 100 },
    ],
    series: [
      {
        name: "Q1 Review",
        data: [75, 88, 65, 90, 72, 85],
      },
    ],
  },
}

export const WithLabels: Story = {
  args: {
    type: "radar",
    showLabels: true,
    indicators: [
      { name: "Performance", max: 100 },
      { name: "Engagement", max: 100 },
      { name: "Retention", max: 100 },
      { name: "Growth", max: 100 },
      { name: "Satisfaction", max: 100 },
    ],
    series: [
      {
        name: "Scores",
        data: [85, 72, 90, 65, 78],
      },
    ],
  },
}

export const CustomColors: Story = {
  args: {
    type: "radar",
    indicators: [
      { name: "Revenue", max: 100 },
      { name: "Profit", max: 100 },
      { name: "Growth", max: 100 },
      { name: "Market Share", max: 100 },
    ],
    series: [
      {
        name: "2024",
        data: [80, 65, 90, 55],
        color: "viridian",
      },
      {
        name: "2025",
        data: [70, 78, 85, 72],
        color: "barbie",
      },
    ],
  },
}

// ---------------------------------------------------------------------------
// Responsive snapshot
// ---------------------------------------------------------------------------

const responsiveRadarProps = (
  column: "low" | "normal" | "large"
): F0DataChartProps => {
  const indicators = [
    { name: "Performance", max: 100 },
    { name: "Engagement", max: 100 },
    { name: "Retention", max: 100 },
    { name: "Growth", max: 100 },
    { name: "Satisfaction", max: 100 },
  ]
  const series =
    column === "low"
      ? [{ name: "Team A", data: [85, 72, 90, 65, 78] }]
      : column === "normal"
        ? [
            { name: "Team A", data: [85, 72, 90, 65, 78] },
            { name: "Team B", data: [70, 88, 75, 80, 82] },
          ]
        : [
            { name: "Team A", data: [85, 72, 90, 65, 78] },
            { name: "Team B", data: [70, 88, 75, 80, 82] },
            { name: "Team C", data: [60, 75, 80, 70, 88] },
            { name: "Team D", data: [78, 65, 70, 90, 72] },
          ]
  return { type: "radar", indicators, series }
}

export const ResponsiveSnapshotMatrix: Story = {
  decorators: [(Story) => <Story />],
  render: () => <ResponsiveSnapshot getProps={responsiveRadarProps} />,
}

/** No data — empty state takes over. See `F0DataChart/Empty states`. */
export const Empty: Story = {
  args: {
    type: "radar",
    indicators: [],
    series: [],
  },
}
