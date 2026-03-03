import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0AnalyticsDashboard } from "../index"
import { dashboardFilters, dashboardPresets, mixedItems } from "./mockData"

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  title: "F0AnalyticsDashboard",
  tags: ["autodocs", "experimental"],
} satisfies Meta

export default meta
type Story = StoryObj

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/**
 * A mix of chart widgets (bar, line, funnel) and a paginated data collection table.
 * Demonstrates charts and collections coexisting with shared dashboard filters.
 * Filtering by department will update both the charts and the employee table.
 */
export const DashboardMixed: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={mixedItems}
    />
  ),
}
