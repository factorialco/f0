import type { Meta, StoryObj } from "@storybook/react-vite"

import { SaveDashboardDialog } from "../SaveDashboardDialog"

const meta = {
  component: SaveDashboardDialog,
  title: "AI/F0AiChat/Canvas/Dashboard/SaveDashboardDialog",
  tags: ["autodocs"],
  args: {
    isOpen: true,
    onClose: () => {},
    onSave: async () => {},
    defaultTitle: "Headcount Overview",
    defaultDescription:
      "Breakdown of employees across departments, contract types, and tenure.",
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
} satisfies Meta<typeof SaveDashboardDialog>

export default meta
type Story = StoryObj<typeof SaveDashboardDialog>

export const Default: Story = {}

export const WithAiReportsBanner: Story = {
  args: {
    aiReportsHref: "https://example.com/analytics/reports/dashboards/list",
  },
}
