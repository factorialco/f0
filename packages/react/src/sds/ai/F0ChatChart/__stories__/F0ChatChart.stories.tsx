import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

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
// Funnel charts
// ---------------------------------------------------------------------------

/**
 * Hiring pipeline funnel — shows candidate drop-off at each stage.
 */
export const Funnel: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "funnel",
    title: "Hiring pipeline",
    description: "Senior Frontend Engineer opening",
    stages: [
      { name: "Applied", value: 320 },
      { name: "Screened", value: 180 },
      { name: "Interviewed", value: 52 },
      { name: "Offered", value: 12 },
      { name: "Hired", value: 4 },
    ],
  },
}

/**
 * Funnel with conversion percentages displayed between stages.
 */
export const FunnelWithConversion: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "funnel",
    title: "Recruitment conversion",
    description: "Q1 2026 hiring funnel with conversion rates",
    stages: [
      { name: "Applied", value: 500 },
      { name: "Screened", value: 250 },
      { name: "Interviewed", value: 100 },
      { name: "Offered", value: 30 },
      { name: "Hired", value: 18 },
    ],
    showConversion: true,
  },
}

// ---------------------------------------------------------------------------
// Pie charts
// ---------------------------------------------------------------------------

/**
 * Contract type distribution as a simple pie chart.
 */
export const Pie: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "pie",
    title: "Contract types",
    description: "Distribution across the company",
    segments: [
      { name: "Full-time", value: 185 },
      { name: "Part-time", value: 32 },
      { name: "Contractor", value: 24 },
      { name: "Intern", value: 8 },
    ],
  },
}

/**
 * Department budget allocation as a donut chart.
 */
export const PieDonut: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "pie",
    title: "Budget allocation",
    description: "Department budget distribution for 2026",
    segments: [
      { name: "Engineering", value: 420000 },
      { name: "Sales", value: 310000 },
      { name: "Marketing", value: 180000 },
      { name: "Design", value: 95000 },
      { name: "HR", value: 75000 },
    ],
    donut: true,
  },
}

// ---------------------------------------------------------------------------
// Radar charts
// ---------------------------------------------------------------------------

/**
 * Single-series radar showing an employee's skill assessment.
 */
export const Radar: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "radar",
    title: "Skills assessment",
    description: "Senior Engineer performance review",
    indicators: [
      { name: "Technical", max: 10 },
      { name: "Communication", max: 10 },
      { name: "Leadership", max: 10 },
      { name: "Problem solving", max: 10 },
      { name: "Teamwork", max: 10 },
    ],
    series: [{ name: "Score", data: [9, 7, 6, 8, 8] }],
  },
}

/**
 * Multi-series radar comparing two teams.
 */
export const RadarMultiSeries: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "radar",
    title: "Team comparison",
    description: "Engineering vs Product across key dimensions",
    indicators: [
      { name: "Velocity", max: 100 },
      { name: "Quality", max: 100 },
      { name: "Collaboration", max: 100 },
      { name: "Innovation", max: 100 },
      { name: "Delivery", max: 100 },
    ],
    series: [
      { name: "Engineering", data: [85, 90, 70, 80, 88] },
      { name: "Product", data: [60, 75, 92, 88, 72] },
    ],
  },
}

// ---------------------------------------------------------------------------
// Gauge charts
// ---------------------------------------------------------------------------

/**
 * eNPS gauge — employee Net Promoter Score on a 0–100 scale.
 */
export const Gauge: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "gauge",
    title: "Employee NPS",
    description: "Current eNPS score across the company",
    value: 72,
    name: "eNPS",
  },
}

/**
 * Gauge with a custom range (0–500k budget utilization).
 */
export const GaugeCustomRange: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "gauge",
    title: "Budget utilization",
    description: "Q1 2026 spend vs allocated budget",
    value: 347000,
    min: 0,
    max: 500000,
    name: "Spent (€)",
  },
}

// ---------------------------------------------------------------------------
// Heatmap charts
// ---------------------------------------------------------------------------

/**
 * Absence heatmap — months on X axis, departments on Y axis.
 */
export const Heatmap: Story = {
  render: (args) => <F0ChatChart {...args} />,
  args: {
    type: "heatmap",
    title: "Absence heatmap",
    description: "Days absent per department per month",
    xCategories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    yCategories: ["Engineering", "Sales", "Marketing", "Design", "HR"],
    data: [
      // Engineering
      [0, 0, 12],
      [1, 0, 8],
      [2, 0, 15],
      [3, 0, 10],
      [4, 0, 6],
      [5, 0, 14],
      // Sales
      [0, 1, 9],
      [1, 1, 11],
      [2, 1, 7],
      [3, 1, 13],
      [4, 1, 8],
      [5, 1, 5],
      // Marketing
      [0, 2, 4],
      [1, 2, 6],
      [2, 2, 3],
      [3, 2, 8],
      [4, 2, 10],
      [5, 2, 7],
      // Design
      [0, 3, 2],
      [1, 3, 5],
      [2, 3, 4],
      [3, 3, 3],
      [4, 3, 7],
      [5, 3, 6],
      // HR
      [0, 4, 1],
      [1, 4, 3],
      [2, 4, 2],
      [3, 4, 4],
      [4, 4, 2],
      [5, 4, 3],
    ],
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
    series: [{ name: "Revenue (k\u20AC)", data: [320, 410, 390, 480] }],
    showArea: true,
    lineType: "smooth",
  },
}

// ---------------------------------------------------------------------------
// Snapshot (Chromatic)
// ---------------------------------------------------------------------------

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-4">
      <F0ChatChart
        type="bar"
        title="Headcount by department"
        categories={["Engineering", "Sales", "Marketing", "Design"]}
        series={[{ name: "Employees", data: [42, 38, 25, 18] }]}
      />
      <F0ChatChart
        type="line"
        title="Monthly hires"
        categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
        series={[{ name: "Hires", data: [8, 12, 10, 15, 20, 18] }]}
      />
      <F0ChatChart
        type="pie"
        title="Contract types"
        segments={[
          { name: "Full-time", value: 185 },
          { name: "Part-time", value: 32 },
          { name: "Contractor", value: 24 },
        ]}
      />
      <F0ChatChart
        type="funnel"
        title="Hiring pipeline"
        stages={[
          { name: "Applied", value: 320 },
          { name: "Screened", value: 180 },
          { name: "Interviewed", value: 52 },
          { name: "Hired", value: 4 },
        ]}
      />
    </div>
  ),
}
