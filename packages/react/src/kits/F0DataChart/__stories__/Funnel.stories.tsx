import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0DataChart } from "../index"
import { ChartDecoratorWide } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "Kits/F0DataChart/Funnel",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecoratorWide],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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

export const WithConversion: Story = {
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

export const CustomColors: Story = {
  args: {
    type: "funnel",
    colorScale: false,
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

export const Ascending: Story = {
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

export const Vertical: Story = {
  args: {
    type: "funnel",
    orient: "vertical",
    series: {
      name: "Sales Pipeline",
      data: [
        { value: 500, name: "Leads" },
        { value: 320, name: "Qualified" },
        { value: 180, name: "Proposal" },
        { value: 90, name: "Negotiation" },
        { value: 45, name: "Closed" },
      ],
    },
  },
}

export const NoLegend: Story = {
  args: {
    type: "funnel",
    showLegend: false,
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

export const NoColorScale: Story = {
  args: {
    type: "funnel",
    colorScale: false,
    series: {
      name: "Recruitment",
      data: [
        { value: 800, name: "Applications" },
        { value: 500, name: "Screening" },
        { value: 200, name: "Interview" },
        { value: 80, name: "Offer" },
        { value: 50, name: "Hired" },
      ],
    },
  },
}
