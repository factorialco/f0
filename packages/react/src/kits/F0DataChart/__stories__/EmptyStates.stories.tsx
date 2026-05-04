import type { Meta, StoryObj } from "@storybook/react-vite"

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
 * `disabled: true` opts out of detection — useful when zero values are
 * legitimate (e.g. an "errors per day" timeline that's expected to show
 * zeros).
 */
export const Disabled: Story = {
  args: {
    type: "bar",
    categories: ["Mon", "Tue", "Wed"],
    series: [{ name: "Errors", data: [0, 0, 0] }],
    emptyState: { disabled: true },
  },
}
