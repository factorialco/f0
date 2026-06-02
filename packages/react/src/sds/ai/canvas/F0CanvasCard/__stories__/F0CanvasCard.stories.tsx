import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

import { Download } from "@/icons/app"

import { F0CanvasCard } from "../F0CanvasCard"

const meta = {
  title: "AI/F0CanvasCard",
  component: F0CanvasCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0CanvasCard>

export default meta
type Story = StoryObj<typeof meta>

const openAction = {
  type: "open" as const,
  onOpen: fn(),
  onClose: fn(),
}

export const Default: Story = {
  args: {
    avatar: { type: "module", module: "analytics" },
    title: "Headcount Overview",
    description: "Employee distribution by department",
    isActive: false,
    action: openAction,
  },
}

export const Active: Story = {
  args: {
    avatar: { type: "module", module: "analytics" },
    title: "Headcount Overview",
    description: "Employee distribution by department",
    isActive: true,
    action: openAction,
  },
}

export const LongTitle: Story = {
  args: {
    avatar: { type: "module", module: "analytics" },
    title:
      "Quarterly Performance Review Dashboard with Detailed Metrics and Historical Trends",
    description:
      "A comprehensive view of team performance across all departments for Q1 2026",
    isActive: false,
    action: openAction,
  },
}

export const DifferentModule: Story = {
  args: {
    avatar: { type: "module", module: "my_surveys" },
    title: "Employee Satisfaction Survey",
    description: "Results from the latest pulse survey",
    isActive: false,
    action: openAction,
  },
}

export const FileAvatar: Story = {
  args: {
    avatar: { type: "file", file: { name: "headcount_q1.pdf", type: "pdf" } },
    title: "Headcount report Q1",
    description: "Generated 2026-04-01",
    isActive: false,
    action: openAction,
  },
}

export const FileAvatarNoDescription: Story = {
  args: {
    avatar: { type: "file", file: { name: "headcount_q1.pdf", type: "pdf" } },
    title: "Headcount report Q1",
    isActive: false,
    action: openAction,
  },
}

export const CustomAction: Story = {
  args: {
    avatar: {
      type: "file",
      file: { name: "payroll_2026_q1.csv", type: "csv" },
    },
    title: "payroll_2026_q1.csv",
    description: "2.4 MB · ready to download",
    isActive: false,
    action: {
      type: "custom",
      icon: Download,
      label: "Download",
      hideLabel: true,
      onClick: fn(),
    },
  },
}

export const OpenButtonHidden: Story = {
  args: {
    avatar: { type: "module", module: "analytics" },
    title: "Headcount Overview",
    description: "Employee distribution by department",
    isActive: false,
    action: { type: "open", onOpen: fn(), onClose: fn(), showButton: false },
  },
}
