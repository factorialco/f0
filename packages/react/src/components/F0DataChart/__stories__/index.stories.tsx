import type { Meta, StoryFn, StoryObj } from "@storybook/react-vite"

import { F0DataChart } from "../index"
import {
  BarChartSkeleton,
  FunnelChartSkeleton,
  LineChartSkeleton,
} from "../skeletons"
import { ChartDecorator } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

// ---------------------------------------------------------------------------
// Bar stories
// ---------------------------------------------------------------------------

export const BarDefault: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    series: [
      {
        name: "Revenue",
        data: [
          9_200_000, 10_800_000, 8_100_000, 5_400_000, 3_200_000, 2_400_000,
        ],
      },
    ],
    showLegend: true,
    valueFormatter: (v) => `${v / 1_000_000}M`,
  },
}

export const BarMultipleSeries: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["New York", "London", "Barcelona", "Berlin", "Remote"],
    series: [
      {
        name: "Headcount",
        data: [145, 89, 67, 90, 96],
      },
      {
        name: "Open positions",
        data: [12, 8, 40, 30, 22],
      },
      {
        name: "Turnovers",
        data: [8, 19, 4, 3, 2],
      },
    ],
  },
}

export const BarWithTargets: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    series: [
      {
        name: "Revenue",
        data: [
          { value: 9_200_000, target: 12_000_000 },
          { value: 10_800_000, target: 12_000_000 },
          { value: 8_100_000, target: 12_000_000 },
          { value: 5_400_000, target: 12_000_000 },
          { value: 3_200_000, target: 12_000_000 },
          { value: 2_400_000, target: 12_000_000 },
        ],
      },
    ],
    showLegend: false,
    valueFormatter: (v) => `${v / 1_000_000}M`,
  },
}

export const BarMultipleSeriesWithTargets: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["Q1", "Q2", "Q3", "Q4"],
    series: [
      {
        name: "Sales",
        data: [
          { value: 4000, target: 6000 },
          { value: 5200, target: 6000 },
          { value: 3800, target: 6000 },
          { value: 5800, target: 6000 },
        ],
      },
      {
        name: "Marketing",
        data: [
          { value: 2000, target: 3500 },
          { value: 3100, target: 3500 },
          { value: 2800, target: 3500 },
          { value: 3400, target: 3500 },
        ],
      },
    ],
    valueFormatter: (v) => `${v} €`,
  },
}

export const BarHorizontal: Story = {
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
    series: [
      {
        name: "Successful hires",
        data: [28, 25, 23, 21, 19, 18],
      },
    ],
    showLegend: false,
    showLabels: true,
    valueFormatter: (v) => `${v} hires`,
  },
}

export const BarHorizontalWithTargets: Story = {
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
    ],
    series: [
      {
        name: "Completed",
        data: [
          { value: 28, target: 35 },
          { value: 25, target: 35 },
          { value: 23, target: 35 },
          { value: 21, target: 35 },
          { value: 19, target: 35 },
        ],
      },
    ],
    showLegend: false,
    valueFormatter: (v) => `${v} tasks`,
  },
}

export const BarCustomFormatters: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["January", "February", "March", "April", "May", "June"],
    series: [
      {
        name: "Profit",
        data: [4000, 3200, 5000, 7000, 4500, 6200],
      },
      {
        name: "Expenses",
        data: [2800, 3100, 2500, 3800, 2900, 3500],
      },
    ],
    valueFormatter: (v) => `${v / 1000}k €`,
    categoryFormatter: (v) => v.slice(0, 3),
  },
}

export const BarNoGrid: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [
      {
        name: "Tasks completed",
        data: [12, 19, 8, 15, 22],
      },
    ],
    showGrid: false,
    showLabels: true,
    showLegend: false,
  },
}

export const BarPerBarColors: Story = {
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

export const BarPerBarColorsWithTargets: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["Engineering", "Design", "Product", "Sales"],
    series: [
      {
        name: "Headcount",
        data: [
          { value: 45, target: 60, color: "malibu" },
          { value: 28, target: 35, color: "purple" },
          { value: 18, target: 25, color: "grass" },
          { value: 32, target: 40, color: "orange" },
        ],
      },
    ],
    showLegend: false,
  },
}

export const BarStacked: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["Q1", "Q2", "Q3", "Q4"],
    stacked: true,
    series: [
      {
        name: "Fixed salary",
        data: [120_000, 125_000, 130_000, 128_000],
      },
      {
        name: "Variable pay",
        data: [18_000, 22_000, 15_000, 30_000],
      },
      {
        name: "Benefits",
        data: [8_000, 8_500, 9_000, 9_200],
      },
    ],
    valueFormatter: (v) => `${v / 1000}k €`,
  },
}

export const BarStackedHorizontal: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: ["Engineering", "Design", "Product", "Sales"],
    orientation: "horizontal",
    stacked: true,
    series: [
      {
        name: "Juniors",
        data: [30, 12, 8, 20],
      },
      {
        name: "Mid-level",
        data: [45, 18, 15, 35],
      },
      {
        name: "Seniors",
        data: [25, 10, 12, 15],
      },
    ],
  },
}

export const BarAllColors: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "bar",
    categories: [
      "Lilac",
      "Barbie",
      "Smoke",
      "Army",
      "Flubber",
      "Indigo",
      "Camel",
      "Radical",
      "Viridian",
      "Orange",
      "Red",
      "Grass",
      "Malibu",
      "Yellow",
      "Purple",
    ],
    series: [
      {
        name: "Color palette",
        data: [
          { value: 90, color: "lilac" },
          { value: 85, color: "barbie" },
          { value: 80, color: "smoke" },
          { value: 75, color: "army" },
          { value: 70, color: "flubber" },
          { value: 65, color: "indigo" },
          { value: 60, color: "camel" },
          { value: 55, color: "radical" },
          { value: 50, color: "viridian" },
          { value: 45, color: "orange" },
          { value: 40, color: "red" },
          { value: 35, color: "grass" },
          { value: 30, color: "malibu" },
          { value: 25, color: "yellow" },
          { value: 20, color: "purple" },
        ],
      },
    ],
    showLegend: false,
  },
}

// ---------------------------------------------------------------------------
// Line stories
// ---------------------------------------------------------------------------

export const LineLinear: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Revenue",
        data: [4200, 5800, 5100, 7400, 6800, 8900],
      },
    ],
    lineType: "linear",
    showArea: true,
    valueFormatter: (v) => `${(v / 1000).toFixed(1)}k`,
  },
}

export const LineSmooth: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Sessions",
        data: [3200, 4100, 3800, 5600, 5200, 6700],
      },
    ],
    lineType: "smooth",
    showArea: true,
  },
}

export const LineStep: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Headcount",
        data: [120, 120, 125, 125, 130, 138],
      },
    ],
    lineType: "step",
    showArea: true,
  },
}

export const LineNoFill: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Active users",
        data: [1800, 2400, 2100, 3200, 2900, 3600],
      },
    ],
    showArea: false,
  },
}

export const LineMultipleSeries: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Coffee",
        data: [120, 132, 101, 134, 90, 230],
      },
      {
        name: "Tea",
        data: [220, 182, 191, 234, 290, 330],
      },
      {
        name: "Cola",
        data: [150, 232, 201, 154, 190, 330],
      },
    ],
    showArea: false,
  },
}

export const LineMultipleSeriesWithDashed: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Actual",
        data: [4200, 5800, 5100, 7400, 6800, 8900],
      },
      {
        name: "Target",
        data: [5000, 5500, 6000, 6500, 7000, 7500],
        dashed: true,
      },
    ],
    showArea: false,
    valueFormatter: (v) => `${(v / 1000).toFixed(1)}k`,
  },
}

export const LineCustomFormatters: Story = {
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
    showArea: false,
    valueFormatter: (v) => `${v / 1_000_000}M €`,
    categoryFormatter: (v) => v.slice(0, 3),
  },
}

export const LineWithDots: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Revenue",
        data: [4200, 5800, 5100, 7400, 6800, 8900],
      },
    ],
    showDots: true,
    showArea: true,
    valueFormatter: (v) => `${(v / 1000).toFixed(1)}k`,
  },
}

export const LineNoGrid: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [
      {
        name: "Tasks completed",
        data: [12, 19, 8, 15, 22],
      },
    ],
    showGrid: false,
    showLegend: false,
    showArea: true,
  },
}

// ---------------------------------------------------------------------------
// Funnel stories
// ---------------------------------------------------------------------------

const FunnelDecorator = (Story: StoryFn) => (
  <div className="h-[360px] w-[900px]">
    <Story />
  </div>
)

export const FunnelDefault: Story = {
  decorators: [FunnelDecorator],
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "funnel",
    series: {
      name: "Hiring Pipeline",
      data: [
        { value: 1200, name: "Applied" },
        { value: 800, name: "Phone Screen" },
        { value: 400, name: "Technical" },
        { value: 180, name: "Onsite" },
        { value: 80, name: "Offer" },
        { value: 50, name: "Hired" },
      ],
    },
  },
}

export const FunnelWithConversion: Story = {
  decorators: [FunnelDecorator],
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "funnel",
    showConversion: true,
    series: {
      name: "Hiring Pipeline",
      data: [
        { value: 1200, name: "Applied" },
        { value: 800, name: "Phone Screen" },
        { value: 400, name: "Technical" },
        { value: 180, name: "Onsite" },
        { value: 80, name: "Offer" },
        { value: 50, name: "Hired" },
      ],
    },
  },
}

export const FunnelCustomColors: Story = {
  decorators: [FunnelDecorator],
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "funnel",
    series: {
      name: "Conversion",
      data: [
        { value: 10_000, name: "Visitors", color: "malibu" },
        { value: 6_500, name: "Signups", color: "purple" },
        { value: 3_200, name: "Activated", color: "grass" },
        { value: 1_800, name: "Subscribed", color: "orange" },
        { value: 900, name: "Retained", color: "viridian" },
      ],
    },
    valueFormatter: (v) =>
      v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(v),
  },
}

export const FunnelAscending: Story = {
  decorators: [FunnelDecorator],
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "funnel",
    sort: "ascending",
    series: {
      name: "Growth",
      data: [
        { value: 20, name: "Week 1" },
        { value: 45, name: "Week 2" },
        { value: 80, name: "Week 3" },
        { value: 130, name: "Week 4" },
        { value: 200, name: "Week 5" },
      ],
    },
  },
}

export const FunnelNoConversion: Story = {
  decorators: [FunnelDecorator],
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "funnel",
    showConversion: false,
    series: {
      name: "Support Tickets",
      data: [
        { value: 450, name: "Received" },
        { value: 380, name: "Triaged" },
        { value: 290, name: "In Progress" },
        { value: 250, name: "Resolved" },
        { value: 230, name: "Closed" },
      ],
    },
  },
}

// ---------------------------------------------------------------------------
// Skeleton stories
// ---------------------------------------------------------------------------

const SkeletonDecorator = (Story: StoryFn) => (
  <div className="h-[320px] w-[420px] rounded-lg border border-f1-border-secondary bg-f1-background p-4">
    <Story />
  </div>
)

export const SkeletonBar: StoryObj = {
  decorators: [SkeletonDecorator],
  render: () => <BarChartSkeleton />,
}

export const SkeletonBarHorizontal: StoryObj = {
  decorators: [SkeletonDecorator],
  render: () => <BarChartSkeleton orientation="horizontal" />,
}

export const SkeletonBarStacked: StoryObj = {
  decorators: [SkeletonDecorator],
  render: () => <BarChartSkeleton stacked />,
}

export const SkeletonBarHorizontalStacked: StoryObj = {
  decorators: [SkeletonDecorator],
  render: () => <BarChartSkeleton orientation="horizontal" stacked />,
}

export const SkeletonLine: StoryObj = {
  decorators: [SkeletonDecorator],
  render: () => <LineChartSkeleton />,
}

export const SkeletonLineLinear: StoryObj = {
  decorators: [SkeletonDecorator],
  render: () => <LineChartSkeleton lineType="linear" />,
}

export const SkeletonLineStep: StoryObj = {
  decorators: [SkeletonDecorator],
  render: () => <LineChartSkeleton lineType="step" />,
}

export const SkeletonLineNoArea: StoryObj = {
  decorators: [SkeletonDecorator],
  render: () => <LineChartSkeleton showArea={false} />,
}

export const SkeletonLineWithDots: StoryObj = {
  decorators: [SkeletonDecorator],
  render: () => <LineChartSkeleton showDots />,
}

export const SkeletonFunnel: StoryObj = {
  decorators: [SkeletonDecorator],
  render: () => <FunnelChartSkeleton />,
}

export const SkeletonFunnelAscending: StoryObj = {
  decorators: [SkeletonDecorator],
  render: () => <FunnelChartSkeleton sort="ascending" />,
}
