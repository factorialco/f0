import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { F0DataChartProps } from "../types"

import { F0DataChart } from "../index"
import { ChartDecorator } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Empty states",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
  parameters: {
    docs: {
      description: {
        component:
          "When `F0DataChart` receives empty data (empty `series`, empty `data`, all-zero values, or missing `value` for gauges), it auto-renders a faded chart skeleton + centered message so the chart never appears as a bare axis. Use the `emptyState` prop to override copy, escape-hatch with a custom render, or skip detection entirely.",
      },
    },
  },
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

// ---------------------------------------------------------------------------
// One story per variant — what the default empty state looks like
// ---------------------------------------------------------------------------

export const EmptyBar: Story = {
  args: { type: "bar", categories: [], series: [] },
}

export const EmptyLine: Story = {
  args: { type: "line", categories: [], series: [] },
}

export const EmptyPie: Story = {
  args: { type: "pie", series: { name: "", data: [] } },
}

export const EmptyFunnel: Story = {
  args: { type: "funnel", series: { name: "", data: [] } },
}

export const EmptyRadar: Story = {
  args: { type: "radar", indicators: [], series: [] },
}

export const EmptyGauge: Story = {
  // Undefined value triggers the empty state — a gauge with `value: 0` is NOT
  // empty (0% is a legitimate state).
  args: { type: "gauge" },
}

export const EmptyHeatmap: Story = {
  args: {
    type: "heatmap",
    xCategories: [],
    yCategories: [],
    data: [],
  },
}

// ---------------------------------------------------------------------------
// Behavior showcases
// ---------------------------------------------------------------------------

/** Override `title` and `description` to surface domain-specific copy. */
export const CustomCopy: Story = {
  args: {
    type: "line",
    categories: [],
    series: [],
    emptyState: {
      title: "No expenses to show",
      description:
        "Submit an expense from the Expenses tab to see it tracked here.",
    },
  },
}

/** `render` is an escape hatch — it replaces the default UI completely. */
export const RenderPropEscapeHatch: Story = {
  args: {
    type: "bar",
    categories: [],
    series: [],
    emptyState: {
      render: () => (
        <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed border-f1-border-critical bg-f1-background-critical text-f1-foreground-critical">
          Custom render — full control
        </div>
      ),
    },
  },
}

/**
 * `disabled: true` opts out of detection — render the chart frame even
 * when there is no data. Rarely useful (the default detection only fires
 * on genuinely empty data — all-zero datasets already render normally),
 * but kept as an escape hatch for unusual cases.
 */
export const Disabled: Story = {
  args: {
    type: "bar",
    categories: [],
    series: [],
    emptyState: { disabled: true },
  },
}

// ---------------------------------------------------------------------------
// Chromatic snapshot — covers every variant in a single shot
// ---------------------------------------------------------------------------

const SNAPSHOT_VARIANTS: { label: string; props: F0DataChartProps }[] = [
  { label: "Bar", props: { type: "bar", categories: [], series: [] } },
  { label: "Line", props: { type: "line", categories: [], series: [] } },
  { label: "Pie", props: { type: "pie", series: { name: "", data: [] } } },
  {
    label: "Funnel",
    props: { type: "funnel", series: { name: "", data: [] } },
  },
  {
    label: "Radar",
    props: { type: "radar", indicators: [], series: [] },
  },
  // Gauge: undefined value is the empty case.
  { label: "Gauge", props: { type: "gauge" } as F0DataChartProps },
  {
    label: "Heatmap",
    props: {
      type: "heatmap",
      xCategories: [],
      yCategories: [],
      data: [],
    },
  },
]

/** Chromatic-only matrix that covers every empty variant in one snapshot. */
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  decorators: [(Story) => <Story />],
  render: () => (
    <div className="grid grid-cols-2 gap-6 p-6">
      {SNAPSHOT_VARIANTS.map(({ label, props }) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary">
            {label}
          </span>
          <div className="h-[260px] w-[420px] rounded-md border border-solid border-f1-border-secondary bg-f1-background">
            <F0DataChart {...props} />
          </div>
        </div>
      ))}
    </div>
  ),
}
