import type { Meta, StoryObj } from "@storybook/react-vite"

import type { F0DataChartProps } from "../types"

import { F0DataChart } from "../index"
import { ResponsiveSnapshot } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Category bar",
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

const headcountByDepartment = [
  { name: "Engineering", value: 120 },
  { name: "Sales", value: 80 },
  { name: "Marketing", value: 45 },
  { name: "Design", value: 25 },
  { name: "HR", value: 10 },
]

export const Default: Story = {
  args: {
    type: "categoryBar",
    data: headcountByDepartment,
  },
}

export const WithoutLegend: Story = {
  args: {
    type: "categoryBar",
    data: headcountByDepartment,
    showLegend: false,
  },
}

export const CustomColors: Story = {
  args: {
    type: "categoryBar",
    data: [
      { name: "Approved", value: 62, color: "viridian" },
      { name: "Pending", value: 28, color: "yellow" },
      { name: "Rejected", value: 10, color: "red" },
    ],
  },
}

export const WithFormatter: Story = {
  args: {
    type: "categoryBar",
    data: [
      { name: "Salaries", value: 1200000 },
      { name: "Tooling", value: 300000 },
      { name: "Offices", value: 500000 },
    ],
    valueFormatter: (v) => `${(v / 1000).toFixed(0)}k €`,
  },
}

export const WithoutTooltip: Story = {
  args: {
    type: "categoryBar",
    data: headcountByDepartment,
    showTooltip: false,
  },
}

/**
 * Segments with `value: 0` are skipped entirely — no empty slivers.
 */
export const ZeroValueSegments: Story = {
  args: {
    type: "categoryBar",
    data: [
      { name: "Active", value: 90 },
      { name: "Invited", value: 0 },
      { name: "Suspended", value: 10 },
    ],
  },
}

// ---------------------------------------------------------------------------
// Responsive snapshot
// ---------------------------------------------------------------------------

const responsiveCategoryBarProps = (
  column: "low" | "normal" | "large"
): F0DataChartProps => ({
  type: "categoryBar",
  data:
    column === "low"
      ? headcountByDepartment.slice(0, 2)
      : column === "normal"
        ? headcountByDepartment.slice(0, 4)
        : headcountByDepartment,
})

export const ResponsiveSnapshotMatrix: Story = {
  decorators: [(Story) => <Story />],
  render: () => <ResponsiveSnapshot getProps={responsiveCategoryBarProps} />,
}

/**
 * No data — an empty `data` array triggers the empty state. Unlike other
 * variants, an all-zero dataset is ALSO empty here: zero-width segments
 * render nothing at all.
 * See `F0DataChart/Empty states`.
 */
export const Empty: Story = {
  args: { type: "categoryBar", data: [] },
}
