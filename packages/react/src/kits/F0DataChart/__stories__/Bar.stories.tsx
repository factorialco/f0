import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { F0DataChartProps } from "../types"

import { F0DataChart } from "../index"
import { ChartDecorator, ResponsiveSnapshot } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Bar",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

// ---------------------------------------------------------------------------
// Sample data
// ---------------------------------------------------------------------------

const MONTHS_SHORT = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"] as const

const MONTHS_LONG = [
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
] as const

const ONE_SERIES = [
  {
    name: "Headcount",
    data: [142, 156, 168, 175, 189, 195, 188, 178, 169, 162],
  },
]

const THREE_SERIES = [
  {
    name: "Engineering",
    data: [45, 48, 52, 55, 58, 60, 59, 57, 54, 52],
  },
  {
    name: "Design",
    data: [22, 24, 25, 27, 28, 29, 28, 27, 25, 24],
  },
  {
    name: "Product",
    data: [18, 19, 20, 22, 23, 24, 24, 23, 22, 21],
  },
]

const FIVE_SERIES = [
  ...THREE_SERIES,
  {
    name: "Sales",
    data: [30, 32, 35, 36, 38, 40, 39, 37, 35, 33],
  },
  {
    name: "Support",
    data: [12, 13, 14, 15, 16, 17, 16, 15, 14, 13],
  },
]

// ---------------------------------------------------------------------------
// Basics
// ---------------------------------------------------------------------------

/** A single revenue series — the most common bar chart. */
export const SingleSeries: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: [...MONTHS_SHORT],
    series: [
      {
        name: "Revenue",
        data: [
          9_200_000, 10_800_000, 8_100_000, 5_400_000, 3_200_000, 2_400_000,
        ],
      },
    ],
    valueFormatter: (v) => `${v / 1_000_000}M`,
  },
}

/** Multiple series rendered side-by-side as grouped bars. */
export const MultipleSeries: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["New York", "London", "Barcelona", "Berlin", "Remote"],
    series: [
      { name: "Headcount", data: [145, 89, 67, 90, 96] },
      { name: "Open positions", data: [12, 8, 40, 30, 22] },
      { name: "Turnovers", data: [8, 19, 4, 3, 2] },
    ],
  },
}

/**
 * Values can be negative. Each bar is rounded on the end pointing away from
 * the zero line, so negative bars are rounded at the bottom (on the left for
 * horizontal orientation) and flat where they meet the axis.
 */
export const NegativeValues: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["Barcelona", "Paris", "Berlin", "London", "Remote"],
    series: [{ name: "Gender pay gap", data: [24.3, 8.1, -0.4, -27.5, -35.2] }],
    showLegend: false,
    valueFormatter: (v) => `${v}%`,
  },
}

/** Negative values stacked below the zero line, positive ones above it. */
export const StackedNegativeValues: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    stacked: true,
    categories: ["Q1", "Q2", "Q3", "Q4"],
    series: [
      { name: "Hires", data: [24, 18, 12, 20] },
      { name: "Internal moves", data: [6, 4, 9, 5] },
      { name: "Voluntary exits", data: [-8, -12, -6, -10] },
      { name: "Involuntary exits", data: [-3, -2, -14, -4] },
    ],
  },
}

/**
 * All values are positive, but not every series has data in every category —
 * e.g. "Involuntary exits" is 0 for most offices. The outer-most non-zero
 * segment of each bar is rounded, whichever series that happens to be for
 * that category, instead of always the last series in the array.
 */
export const StackedWithMissingCategories: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    stacked: true,
    categories: ["Barcelona", "Paris", "Berlin", "London", "Remote"],
    series: [
      { name: "Working from home", data: [14, 13, 0, 0, 0] },
      { name: "Paid — Vacation", data: [12, 10, 25, 28, 26] },
      { name: "Paid — Compensation", data: [0, 2, 0, 0, 0] },
      { name: "Involuntary exits", data: [0, 2, 2, 0, 0] },
    ],
  },
}

/**
 * Each bar has a `target` value — the gap between the actual value and the
 * target is rendered as a faded "ghost" bar above the solid one.
 */
export const WithTargets: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: [...MONTHS_SHORT],
    series: [
      {
        name: "Revenue",
        data: [
          9_200_000, 10_800_000, 8_100_000, 5_400_000, 3_200_000, 2_400_000,
        ].map((value) => ({ value, target: 12_000_000 })),
      },
    ],
    showLegend: false,
    valueFormatter: (v) => `${v / 1_000_000}M`,
  },
}

/** Multiple series stacked into a single bar per category. */
export const Stacked: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["Q1", "Q2", "Q3", "Q4"],
    stacked: true,
    series: [
      { name: "Fixed salary", data: [120_000, 125_000, 130_000, 128_000] },
      { name: "Variable pay", data: [18_000, 22_000, 15_000, 30_000] },
      { name: "Benefits", data: [8_000, 8_500, 9_000, 9_200] },
    ],
    valueFormatter: (v) => `${v / 1000}k €`,
  },
}

// ---------------------------------------------------------------------------
// Horizontal variants
// ---------------------------------------------------------------------------

/** Horizontal bars — useful for ranking long category names. */
export const Horizontal: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    orientation: "horizontal",
    categories: [
      "Sarah Johnson",
      "Michael Chen",
      "Emma Thompson",
      "James Wilson",
      "Olivia Martinez",
      "David Brown",
    ],
    series: [{ name: "Successful hires", data: [28, 25, 23, 21, 19, 18] }],
    showLegend: false,
    showLabels: true,
    valueFormatter: (v) => `${v} hires`,
  },
}

/** Horizontal stacked variant. */
export const HorizontalStacked: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    orientation: "horizontal",
    stacked: true,
    categories: ["Engineering", "Design", "Product", "Sales"],
    series: [
      { name: "Juniors", data: [30, 12, 8, 20] },
      { name: "Mid-level", data: [45, 18, 15, 35] },
      { name: "Seniors", data: [25, 10, 12, 15] },
    ],
  },
}

// ---------------------------------------------------------------------------
// Per-bar customization
// ---------------------------------------------------------------------------

/** Each bar can override its color via the `color` data point property. */
export const PerBarColors: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["Engineering", "Design", "Product", "Sales", "Support"],
    series: [
      {
        name: "Headcount",
        data: [
          { value: 45, color: "malibu" },
          { value: 28, color: "purple" },
          { value: 18, color: "grass" },
          { value: 32, color: "orange" },
          { value: 22, color: "red" },
        ],
      },
    ],
    showLegend: false,
  },
}

// ---------------------------------------------------------------------------
// Formatting & minimal variants
// ---------------------------------------------------------------------------

/** Custom value + category formatters. */
export const CustomFormatters: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["January", "February", "March", "April", "May", "June"],
    series: [
      { name: "Profit", data: [4000, 3200, 5000, 7000, 4500, 6200] },
      { name: "Expenses", data: [2800, 3100, 2500, 3800, 2900, 3500] },
    ],
    valueFormatter: (v) => `${v / 1000}k €`,
    categoryFormatter: (v) => v.slice(0, 3),
  },
}

/** Minimal variant: no grid, no legend — just the bars with value labels. */
export const Minimal: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [{ name: "Tasks completed", data: [12, 19, 8, 15, 22] }],
    showGrid: false,
    showLabels: true,
    showLegend: false,
  },
}

const BAR_POLISH_SNAPSHOT_VARIANTS: {
  label: string
  props: F0DataChartProps
}[] = [
  {
    label: "Grouped labels and sparse grid",
    props: {
      type: "bar",
      categories: ["Engineering", "Design", "Product", "Sales"],
      series: [
        { name: "Headcount", data: [145, 89, 67, 90] },
        { name: "Open roles", data: [12, 8, 40, 30] },
      ],
      showLabels: true,
      labelFontSize: 11,
      valueAxisSplitNumber: 2,
      valueFormatter: (value) => `${value}`,
    },
  },
  {
    label: "Stacked labels",
    props: {
      type: "bar",
      categories: ["Q1", "Q2", "Q3", "Q4"],
      stacked: true,
      series: [
        { name: "Fixed", data: [120, 125, 130, 128] },
        { name: "Variable", data: [18, 22, 15, 30] },
        { name: "Benefits", data: [8, 9, 9, 10] },
      ],
      showLabels: true,
      valueFormatter: (value) => `${value}K`,
    },
  },
  {
    label: "Horizontal categories",
    props: {
      type: "bar",
      orientation: "horizontal",
      categories: [
        "Engineering",
        "Design",
        "Product",
        "Sales",
        "Customer support",
      ],
      series: [{ name: "Headcount", data: [145, 89, 67, 90, 58] }],
      showLabels: true,
      showLegend: false,
    },
  },
  {
    label: "Narrow stacked labels",
    props: {
      type: "bar",
      orientation: "horizontal",
      categories: ["Engineering", "Design", "Product"],
      stacked: true,
      series: [
        { name: "Completed", data: [92, 45, 74] },
        { name: "Blocked", data: [3, 2, 4] },
        { name: "Pending review", data: [5, 53, 22] },
      ],
      showLabels: true,
      valueFormatter: (value) => `${value}%`,
    },
  },
]

/** Consolidated Chromatic coverage for the polished bar variants. */
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  decorators: [(Story) => <Story />],
  render: () => (
    <div className="grid w-fit grid-cols-1 gap-6 p-6">
      {BAR_POLISH_SNAPSHOT_VARIANTS.map(({ label, props }) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary">
            {label}
          </span>
          <div className="h-[300px] w-[720px] rounded-md border border-solid border-f1-border-secondary bg-f1-background">
            <F0DataChart {...props} />
          </div>
        </div>
      ))}
    </div>
  ),
}

/** Compact axis/labels with precise values preserved in the hover tooltip. */
export const PreciseTooltip: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["January", "February", "March", "April"],
    series: [
      {
        name: "Revenue",
        data: [107_505, 93_240, 128_910, 115_780],
      },
    ],
    showLabels: true,
    valueFormatter: (value) => `${(value / 1000).toFixed(1)}K`,
    tooltipValueFormatter: (value) => value.toLocaleString("en-US"),
  },
}

/** Narrow stacked segments demonstrate labels disappearing before overlap. */
export const OverflowingLabels: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    orientation: "horizontal",
    categories: ["Engineering", "Design", "Product"],
    stacked: true,
    series: [
      { name: "Completed", data: [92, 45, 74] },
      { name: "Blocked", data: [3, 2, 4] },
      { name: "Pending review", data: [5, 53, 22] },
    ],
    showLabels: true,
    valueFormatter: (value) => `${value}%`,
  },
}

// ---------------------------------------------------------------------------
// Responsive snapshot
//
// Mirrors the AI Analytics Figma matrix at file `1smmEIugmR0CNeu7NvK33y` node
// `10181-31958` — same layout as the LineChart `ResponsiveSnapshotMatrix`.
// Three rows = series counts (low / normal / large), three columns = container
// sizes (sm / md / lg). Use this story to verify that BarChart matches
// LineChart's responsive behaviour.
// ---------------------------------------------------------------------------

const responsiveProps = (
  column: "low" | "normal" | "large"
): F0DataChartProps => {
  const series =
    column === "low"
      ? ONE_SERIES
      : column === "normal"
        ? THREE_SERIES
        : FIVE_SERIES
  return {
    type: "bar",
    categories: [...MONTHS_LONG],
    series,
  }
}

export const ResponsiveSnapshotMatrix: Story = {
  decorators: [(Story) => <Story />],
  render: () => <ResponsiveSnapshot getProps={responsiveProps} />,
}

/**
 * Same matrix as `ResponsiveSnapshotMatrix` but rendered with
 * `orientation: "horizontal"`. The category axis lives on Y instead of X, and
 * unlike the vertical case it survives the medium breakpoint: each label names
 * the row beside it, so hiding them would leave a stack of anonymous bars.
 * Both axes are visible from `md` up; `sm` still drops all chrome.
 */
const responsivePropsHorizontal = (
  column: "low" | "normal" | "large"
): F0DataChartProps => ({
  ...(responsiveProps(column) as Extract<F0DataChartProps, { type: "bar" }>),
  orientation: "horizontal",
})

export const ResponsiveSnapshotMatrixHorizontal: Story = {
  decorators: [(Story) => <Story />],
  render: () => <ResponsiveSnapshot getProps={responsivePropsHorizontal} />,
}

/**
 * Many series with long names — the legend paginates with arrow controls
 * while the chart area stays the same size.
 */
export const ScrollableLegend: Story = {
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="h-[320px] w-[720px]">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <F0DataChart
      type="bar"
      categories={[...MONTHS_LONG]}
      series={[
        ...FIVE_SERIES,
        {
          name: "Petrol blue",
          data: [22, 24, 25, 27, 28, 29, 28, 27, 25, 24],
        },
        {
          name: "Coral sunset",
          data: [18, 19, 20, 22, 23, 24, 24, 23, 22, 21],
        },
        {
          name: "Forest green",
          data: [12, 14, 15, 16, 17, 18, 17, 16, 15, 14],
        },
      ]}
    />
  ),
}

/**
 * No data — the empty state takes over so the chart never renders as a
 * bare axis. See `F0DataChart/Empty states` for full coverage.
 */
export const Empty: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: [],
    series: [],
  },
}
