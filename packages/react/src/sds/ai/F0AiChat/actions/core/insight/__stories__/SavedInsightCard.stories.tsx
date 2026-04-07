import { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

import { SavedInsightCard } from "../SavedInsightCard"

const meta = {
  component: SavedInsightCard,
  title: "AI/F0AiChat/Actions/SavedInsightCard",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SavedInsightCard>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Full saved insight card with all data and action buttons.
 */
export const Default: Story = {
  args: {
    id: 1,
    title: "Training completion",
    question: "How many trainings are still pending?",
    highlight: {
      value: "12",
      label: "trainings pending",
    },
    content:
      "Out of **50** total trainings, **12** are still pending completion.",
    onRefresh: fn(),
    onDelete: fn(),
  },
}

/**
 * Card without a highlight — just question and content.
 */
export const WithoutHighlight: Story = {
  args: {
    id: 2,
    title: "Absence trends",
    question: "What are the absence trends this month?",
    content:
      "Sick leave requests have increased **23%** compared to last month.",
    onRefresh: fn(),
    onDelete: fn(),
  },
}

/**
 * Card in a refreshing state (buttons disabled).
 */
export const Refreshing: Story = {
  args: {
    id: 3,
    title: "Headcount overview",
    question: "What is the current headcount?",
    highlight: {
      value: "142",
      label: "active employees",
    },
    isRefreshing: true,
    onRefresh: fn(),
    onDelete: fn(),
  },
}

/**
 * Card with a table breakdown.
 */
export const WithTable: Story = {
  args: {
    id: 4,
    title: "Gender distribution",
    question:
      "How is the gender distribution in training enrollments for Visual Merchandising?",
    highlight: {
      value: "62%",
      label: "female enrollment",
    },
    content:
      "| Gender | Count | % |\n|--------|-------|---|\n| Female | 31 | 62% |\n| Male | 17 | 34% |\n| Non-binary | 2 | 4% |",
    onRefresh: fn(),
    onDelete: fn(),
  },
}
