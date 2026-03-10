import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0ChatChart } from "../F0ChatChart"

const meta = {
  component: F0ChatChart,
  title: "AI/F0ChatChart",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0ChatChart>

export default meta
type Story = StoryObj<typeof F0ChatChart>

// ---------------------------------------------------------------------------
// Bar charts
// ---------------------------------------------------------------------------

/**
 * Simple bar chart showing headcount per department.
 */
export const Bar: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "bar",
    title: "Headcount by department",
    description: "Engineering leads with 42 employees",
    categories: [
      "Engineering",
      "Sales",
      "Marketing",
      "Design",
      "HR",
      "Finance",
    ],
    series: [{ name: "Employees", data: [42, 38, 25, 18, 12, 9] }],
  },
}

/**
 * Stacked bar chart comparing two series.
 */
export const BarStacked: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "bar",
    title: "Compensation breakdown",
    description: "Base salary vs bonus by department",
    categories: ["Engineering", "Sales", "Marketing", "Design", "HR"],
    series: [
      { name: "Base salary", data: [85000, 72000, 65000, 78000, 60000] },
      { name: "Bonus", data: [15000, 28000, 10000, 12000, 8000] },
    ],
    stacked: true,
  },
}

/**
 * Bar chart with many categories and long labels that get truncated.
 */
export const BarManyCategories: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "bar",
    title: "Employees by location",
    categories: [
      "Barcelona HQ",
      "Madrid Office",
      "London Branch",
      "Berlin Office",
      "Paris Location",
      "Amsterdam Hub",
      "Lisbon Center",
      "Milan Workspace",
      "Dublin Campus",
      "Stockholm Lab",
    ],
    series: [
      { name: "Headcount", data: [120, 85, 60, 45, 40, 35, 30, 25, 20, 15] },
    ],
  },
}

// ---------------------------------------------------------------------------
// Line charts
// ---------------------------------------------------------------------------

/**
 * Simple line chart showing a trend over time.
 */
export const Line: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "line",
    title: "Monthly hires",
    description: "New hires over the last 12 months",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    series: [
      {
        name: "Hires",
        data: [8, 12, 10, 15, 20, 18, 22, 14, 16, 25, 19, 28],
      },
    ],
  },
}

/**
 * Line chart with smooth interpolation and area fill.
 */
export const LineSmoothArea: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "line",
    title: "Average salary trend",
    description: "Average gross salary over the last 6 quarters",
    categories: [
      "Q1 2025",
      "Q2 2025",
      "Q3 2025",
      "Q4 2025",
      "Q1 2026",
      "Q2 2026",
    ],
    series: [
      {
        name: "Avg salary",
        data: [45000, 46200, 47800, 48500, 50100, 51300],
      },
    ],
    lineType: "smooth",
    showArea: true,
  },
}

/**
 * Line chart with multiple series, dots, and step interpolation.
 */
export const LineMultiSeries: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "line",
    title: "Turnover vs hires",
    description: "Monthly comparison over the last 6 months",
    categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [
      { name: "Hires", data: [12, 8, 15, 10, 18, 22] },
      { name: "Departures", data: [5, 7, 4, 8, 6, 3] },
    ],
    lineType: "step",
    showDots: true,
    showArea: false,
  },
}

// ---------------------------------------------------------------------------
// Edge cases
// ---------------------------------------------------------------------------

/**
 * Chart without description — only title is shown in the card header.
 */
export const NoDescription: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "bar",
    title: "Absences this month",
    categories: ["Sick leave", "Vacation", "Personal", "Other"],
    series: [{ name: "Days", data: [24, 45, 12, 8] }],
  },
}

/**
 * Single data point — minimal chart.
 */
export const SingleCategory: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "bar",
    title: "Total headcount",
    description: "Company-wide employee count",
    categories: ["All employees"],
    series: [{ name: "Count", data: [247] }],
  },
}

/**
 * Narrow container (< 400px) — chart uses aspect-square.
 */
export const NarrowContainer: Story = {
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "bar",
    title: "Team sizes",
    description: "Small viewport / sidebar context",
    categories: ["Frontend", "Backend", "Mobile", "QA"],
    series: [{ name: "Members", data: [8, 12, 5, 4] }],
  },
}

/**
 * Wide container (> 400px) — chart uses aspect-[4/3].
 */
export const WideContainer: Story = {
  decorators: [
    (Story) => (
      <div className="w-[712px]">
        <Story />
      </div>
    ),
  ],
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "line",
    title: "Revenue per quarter",
    description: "Wide layout rendering",
    categories: ["Q1", "Q2", "Q3", "Q4"],
    series: [{ name: "Revenue (k€)", data: [320, 410, 390, 480] }],
    showArea: true,
    lineType: "smooth",
  },
}
