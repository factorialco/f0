import type { Meta, StoryObj } from "@storybook/react-vite"

import type { F0DataChartProps } from "../types"

import { F0DataChart } from "../index"
import { ChartDecorator, ResponsiveSnapshot } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Line",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

// ---------------------------------------------------------------------------
// Sample data — kept at the top so individual stories stay tiny and readable.
// ---------------------------------------------------------------------------

const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] as const

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

const PURPLE_DATA = [2.1, 2.4, 2.6, 3.0, 3.4, 3.6, 3.2, 2.8, 2.4, 2.2]

const ONE_SERIES = [{ name: "Purple", data: PURPLE_DATA }]

const THREE_SERIES = [
  {
    name: "Viridian",
    data: [2.4, 2.8, 3.0, 2.7, 2.5, 2.4, 2.6, 2.9, 3.1, 3.0],
  },
  { name: "Purple", data: PURPLE_DATA },
  {
    name: "Lilac",
    data: [1.8, 2.0, 2.2, 2.4, 2.6, 2.5, 2.3, 2.1, 1.9, 1.7],
  },
]

const FIVE_SERIES = [
  ...THREE_SERIES,
  {
    name: "Indigo",
    data: [3.0, 3.1, 3.0, 2.9, 2.8, 2.7, 2.6, 2.7, 2.8, 2.9],
  },
  {
    name: "Dark barbie",
    data: [2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.6, 2.5, 2.4, 2.3],
  },
]

// ---------------------------------------------------------------------------
// Basics — one story per "thing you want to show a designer/PM"
// ---------------------------------------------------------------------------

/** The most common case: a single line with a soft area gradient below it. */
export const SingleLineWithArea: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: [...MONTHS_SHORT],
    series: [{ name: "Revenue", data: [4200, 5800, 5100, 7400, 6800, 8900] }],
    showArea: true,
    valueFormatter: (v) => `${(v / 1000).toFixed(1)}k`,
  },
}

/**
 * Multiple lines never get an area fill — even when `showArea: true` is
 * passed — because overlapping gradients quickly become unreadable.
 */
export const MultipleLines: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: [...MONTHS_SHORT],
    series: [
      { name: "Coffee", data: [120, 132, 101, 134, 90, 230] },
      { name: "Tea", data: [220, 182, 191, 234, 290, 330] },
      { name: "Cola", data: [150, 232, 201, 154, 190, 330] },
    ],
    showArea: true,
  },
}

/** Use a dashed series for projections, targets or forecasts. */
export const ActualVsTarget: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: [...MONTHS_SHORT],
    series: [
      { name: "Actual", data: [4200, 5800, 5100, 7400, 6800, 8900] },
      {
        name: "Target",
        data: [5000, 5500, 6000, 6500, 7000, 7500],
        dashed: true,
      },
    ],
    valueFormatter: (v) => `${(v / 1000).toFixed(1)}k`,
  },
}

// ---------------------------------------------------------------------------
// Line styles — pick the right curve for your data
// ---------------------------------------------------------------------------

/**
 * Three available `lineType` values rendered with the same data so you can
 * compare them at a glance.
 */
export const LineStyles: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      {(["linear", "smooth", "step"] as const).map((lineType) => (
        <div key={lineType} className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary">
            {lineType}
          </span>
          <div className="h-[200px] w-full">
            <F0DataChart
              type="line"
              categories={[...MONTHS_SHORT]}
              series={[
                { name: "Revenue", data: [4200, 5800, 5100, 7400, 6800, 8900] },
              ]}
              lineType={lineType}
              showArea
              valueFormatter={(v) => `${(v / 1000).toFixed(1)}k`}
            />
          </div>
        </div>
      ))}
    </div>
  ),
}

/** Symbol markers on each data point. Useful when you have very few values. */
export const WithDots: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: [...MONTHS_SHORT],
    series: [{ name: "Revenue", data: [4200, 5800, 5100, 7400, 6800, 8900] }],
    showDots: true,
    showArea: true,
    valueFormatter: (v) => `${(v / 1000).toFixed(1)}k`,
  },
}

// ---------------------------------------------------------------------------
// Formatting & minimal variants
// ---------------------------------------------------------------------------

/** Custom value + category formatters for currency / abbreviated month names. */
export const CustomFormatters: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["January", "February", "March", "April", "May", "June"],
    series: [
      {
        name: "Profit",
        data: [
          4_000_000, 3_200_000, 5_000_000, 7_000_000, 4_500_000, 6_200_000,
        ],
      },
      {
        name: "Expenses",
        data: [
          2_800_000, 3_100_000, 2_500_000, 3_800_000, 2_900_000, 3_500_000,
        ],
      },
    ],
    valueFormatter: (v) => `${v / 1_000_000}M €`,
    categoryFormatter: (v) => v.slice(0, 3),
  },
}

/** Minimal variant: no grid, no legend — just the line. */
export const Minimal: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [{ name: "Tasks completed", data: [12, 19, 8, 15, 22] }],
    showGrid: false,
    showLegend: false,
    showArea: true,
  },
}

// ---------------------------------------------------------------------------
// Responsive snapshot
//
// Single Storybook page that mirrors the AI Analytics Figma matrix at file
// `1smmEIugmR0CNeu7NvK33y` node `10181-31958`. Three rows = series counts
// (low / normal / large), three columns = container sizes (sm / md / lg).
// This is the easiest way to verify that the responsive logic and the
// "no area for multi-series" rule work together.
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
    type: "line",
    categories: [...MONTHS_LONG],
    series,
    lineType: "smooth",
    showArea: true,
  }
}

export const ResponsiveSnapshotMatrix: Story = {
  decorators: [(Story) => <Story />],
  render: () => <ResponsiveSnapshot getProps={responsiveProps} />,
}

/**
 * When the legend has more items than fit horizontally, ECharts paginates it
 * with arrow controls — only the legend pages, the chart area is unaffected.
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
      type="line"
      categories={[...MONTHS_LONG]}
      lineType="smooth"
      series={[
        ...FIVE_SERIES,
        {
          name: "Petrol blue",
          data: [2.0, 2.1, 2.2, 2.3, 2.4, 2.3, 2.2, 2.1, 2.0, 1.9],
        },
        {
          name: "Coral sunset",
          data: [2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 2.9, 2.8, 2.7, 2.6],
        },
        {
          name: "Forest green",
          data: [1.9, 2.0, 2.1, 2.0, 1.9, 1.8, 1.9, 2.0, 2.1, 2.2],
        },
        {
          name: "Mustard yellow",
          data: [2.7, 2.8, 2.9, 3.0, 2.9, 2.8, 2.7, 2.6, 2.5, 2.4],
        },
      ]}
    />
  ),
}
