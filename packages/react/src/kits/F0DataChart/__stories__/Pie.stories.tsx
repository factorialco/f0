import type { Meta, StoryObj } from "@storybook/react-vite"

import type { F0DataChartProps } from "../types"

import { F0DataChart } from "../index"
import { ChartDecorator, ResponsiveSnapshot } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Pie",
  tags: ["autodocs"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

export const Default: Story = {
  args: {
    type: "pie",
    series: {
      name: "Headcount by Department",
      data: [
        { value: 120, name: "Engineering" },
        { value: 45, name: "Product" },
        { value: 60, name: "Sales" },
        { value: 30, name: "HR" },
        { value: 25, name: "Marketing" },
      ],
    },
  },
}

export const Donut: Story = {
  args: {
    type: "pie",
    innerRadius: 50,
    series: {
      name: "Contract Types",
      data: [
        { value: 180, name: "Indefinido" },
        { value: 45, name: "Temporal" },
        { value: 20, name: "Prácticas" },
        { value: 15, name: "Freelance" },
      ],
    },
  },
}

export const CustomColors: Story = {
  args: {
    type: "pie",
    series: {
      name: "Gender Distribution",
      data: [
        { value: 145, name: "Women", color: "barbie" },
        { value: 130, name: "Men", color: "malibu" },
        { value: 5, name: "Non-binary", color: "purple" },
      ],
    },
  },
}

export const WithPercentage: Story = {
  args: {
    type: "pie",
    showPercentage: true,
    series: {
      name: "Time Off Reasons",
      data: [
        { value: 200, name: "Vacation" },
        { value: 80, name: "Sick Leave" },
        { value: 30, name: "Personal" },
        { value: 15, name: "Parental" },
        { value: 10, name: "Other" },
      ],
    },
  },
}

export const NoLegend: Story = {
  args: {
    type: "pie",
    showLegend: false,
    series: {
      name: "Seniority",
      data: [
        { value: 60, name: "Junior" },
        { value: 100, name: "Mid" },
        { value: 80, name: "Senior" },
        { value: 30, name: "Lead" },
      ],
    },
  },
}

// ---------------------------------------------------------------------------
// Responsive snapshot — same matrix as Bar/Line so the entire kit documents
// breakpoint behaviour the same way.
// ---------------------------------------------------------------------------

const responsivePieProps = (
  column: "low" | "normal" | "large"
): F0DataChartProps => {
  const data =
    column === "low"
      ? [
          { value: 60, name: "Engineering" },
          { value: 40, name: "Design" },
        ]
      : column === "normal"
        ? [
            { value: 120, name: "Engineering" },
            { value: 45, name: "Product" },
            { value: 60, name: "Sales" },
            { value: 30, name: "HR" },
            { value: 25, name: "Marketing" },
          ]
        : [
            { value: 120, name: "Engineering" },
            { value: 45, name: "Product" },
            { value: 60, name: "Sales" },
            { value: 30, name: "HR" },
            { value: 25, name: "Marketing" },
            { value: 18, name: "Operations" },
            { value: 14, name: "Finance" },
            { value: 12, name: "Legal" },
          ]
  return {
    type: "pie",
    series: { name: "Headcount", data },
  }
}

export const ResponsiveSnapshotMatrix: Story = {
  decorators: [(Story) => <Story />],
  render: () => <ResponsiveSnapshot getProps={responsivePieProps} />,
}

/** No data — empty state takes over. See `F0DataChart/Empty states`. */
export const Empty: Story = {
  args: {
    type: "pie",
    series: { name: "", data: [] },
  },
}
