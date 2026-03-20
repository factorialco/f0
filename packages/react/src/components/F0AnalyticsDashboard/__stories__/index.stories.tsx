import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0AnalyticsDashboard } from "../index"
import {
  dashboardFilters,
  dashboardPresets,
  itemFilterItems,
  mixedItems,
} from "./mockDataMixed"

const meta = {
  component: F0AnalyticsDashboard,
  title: "F0AnalyticsDashboard",
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof F0AnalyticsDashboard>

export default meta
type Story = StoryObj

/**
 * Full dashboard with metrics, charts (bar, line, pie, radar, gauge, heatmap,
 * funnel), and a paginated collection — all wired to shared filters.
 */
export const MixedDashboard: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={mixedItems}
    />
  ),
}

/**
 * Dashboard with item-level filters: a metric with a "Period" picker,
 * a chart with a "Quarter" picker, and a collection with a "Role" picker.
 * Items without `itemFilters` work exactly as before (backward compatible).
 */
export const WithItemFilters: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={itemFilterItems}
    />
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={mixedItems}
    />
  ),
}
