import { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

import { InsightCarousel } from "../InsightCarousel"
import type { SavedInsightCardProps } from "../types"

const sampleInsights: SavedInsightCardProps[] = [
  {
    id: 1,
    title: "Training completion",
    question: "How many trainings are still pending?",
    highlight: { value: "12", label: "trainings pending" },
    content: "Out of **50** trainings, **12** are pending.",
    onRefresh: fn(),
    onDelete: fn(),
  },
  {
    id: 2,
    title: "Gender distribution",
    question: "What is the gender distribution in Visual Merchandising?",
    highlight: { value: "62%", label: "female enrollment" },
    content:
      "| Gender | Count |\n|--------|-------|\n| Female | 31 |\n| Male | 17 |",
    onRefresh: fn(),
    onDelete: fn(),
  },
  {
    id: 3,
    title: "Headcount",
    question: "What is the current headcount?",
    highlight: { value: "142", label: "active employees" },
    onRefresh: fn(),
    onDelete: fn(),
  },
]

const meta = {
  component: InsightCarousel,
  title: "AI/F0AiChat/Actions/InsightCarousel",
  tags: ["autodocs"],
} satisfies Meta<typeof InsightCarousel>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Carousel with 3 insight cards + the empty-state CTA (fits in 4 slots).
 */
export const Default: Story = {
  args: {
    insights: sampleInsights,
    onCreateNew: fn(),
  },
}

/**
 * Carousel with more than 4 cards — shows carousel navigation arrows.
 */
export const WithOverflow: Story = {
  args: {
    insights: [
      ...sampleInsights,
      {
        id: 4,
        title: "Payroll summary",
        question: "What is the total payroll this month?",
        highlight: { value: "$142,500", label: "total payroll" },
        onRefresh: fn(),
        onDelete: fn(),
      },
      {
        id: 5,
        title: "Absence trends",
        question: "What are the absence trends?",
        highlight: { value: "+23%", label: "sick leave increase" },
        content: "Sick leave requests increased **23%** vs last month.",
        onRefresh: fn(),
        onDelete: fn(),
      },
      {
        id: 6,
        title: "Open positions",
        question: "How many positions are open?",
        highlight: { value: "6", label: "open positions" },
        onRefresh: fn(),
        onDelete: fn(),
      },
    ],
    onCreateNew: fn(),
  },
}

/**
 * Empty carousel — only the CTA card is shown.
 */
export const Empty: Story = {
  args: {
    insights: [],
    onCreateNew: fn(),
  },
}
