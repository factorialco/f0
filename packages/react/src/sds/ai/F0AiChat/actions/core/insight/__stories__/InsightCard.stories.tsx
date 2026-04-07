import { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

import { InsightCard } from "../InsightCard"

const meta = {
  component: InsightCard,
  title: "AI/F0AiChat/Actions/InsightCard",
  tags: ["autodocs"],
} satisfies Meta<typeof InsightCard>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Full insight with a highlight metric and markdown detail content.
 */
export const Default: Story = {
  args: {
    title: "Training completion",
    highlight: {
      value: "12",
      label: "trainings pending",
    },
    content:
      "Out of **50** total trainings assigned this quarter, **12** are still pending completion.\n\n- 8 are overdue by more than a week\n- 4 are due within the next 5 days",
  },
}

/**
 * Insight with a percentage-based metric.
 */
export const PercentageMetric: Story = {
  args: {
    title: "Headcount overview",
    highlight: {
      value: "85%",
      label: "positions filled",
    },
    content:
      "Your organization has **34 out of 40** budgeted positions filled. The remaining **6** open positions are distributed across:\n\n| Department | Open |\n|------------|------|\n| Engineering | 3 |\n| Marketing | 2 |\n| Sales | 1 |",
  },
}

/**
 * Insight without a highlight value — just title and content.
 */
export const WithoutHighlight: Story = {
  args: {
    title: "Absence trends",
    content:
      "Sick leave requests have increased **23%** compared to last month. The most affected teams are:\n\n1. Customer Support (7 requests)\n2. Engineering (5 requests)\n3. Operations (4 requests)",
  },
}

/**
 * Minimal insight with only a highlight metric and no detail.
 */
export const HighlightOnly: Story = {
  args: {
    title: "Pending approvals",
    highlight: {
      value: "7",
      label: "time-off requests awaiting approval",
    },
  },
}

/**
 * Insight with a monetary value.
 */
export const MonetaryValue: Story = {
  args: {
    title: "Payroll summary",
    highlight: {
      value: "$142,500",
      label: "total payroll this month",
    },
    content:
      "Breakdown by department:\n\n| Department | Amount |\n|------------|--------|\n| Engineering | $68,000 |\n| Sales | $38,500 |\n| Marketing | $22,000 |\n| HR | $14,000 |",
  },
}

/**
 * Insight with a save button — shows the question and pin action.
 */
export const WithSaveButton: Story = {
  args: {
    title: "Gender distribution",
    question:
      "How is the gender distribution in training enrollments for Visual Merchandising?",
    section: "trainings",
    highlight: {
      value: "62%",
      label: "female enrollment",
    },
    content:
      "| Gender | Count | Percentage |\n|--------|-------|------------|\n| Female | 31 | 62% |\n| Male | 17 | 34% |\n| Non-binary | 2 | 4% |",
    onSave: fn(),
  },
}
