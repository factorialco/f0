import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import { F0FAQCard } from ".."
import type { F0FAQItem } from "../types"

const sampleFAQItems: F0FAQItem[] = [
  {
    id: "complexity",
    question: "Is projects too complex to set up?",
    answer: "No — most teams start simple and add structure over time.",
  },
  {
    id: "migration",
    question: "Do we need to migrate everything at once?",
    answer:
      "No, you can migrate incrementally. Start with one project and expand as you see value.",
  },
  {
    id: "replace-tools",
    question: "Will this replace our current tools immediately?",
    answer:
      "Projects integrates with your existing tools. You can run them in parallel during transition.",
  },
  {
    id: "time-to-value",
    question: "How long does it take to get value from Projects?",
    answer:
      "Most teams see value within the first week. The onboarding process is designed to be quick and intuitive.",
  },
  {
    id: "one-team",
    question: "Can we try it with one team first?",
    answer:
      "Absolutely! We recommend starting with a pilot team before rolling out company-wide.",
  },
]

const meta = {
  title: "AI/F0FAQCard",
  component: F0FAQCard,
  decorators: [
    (Story) => (
      <I18nProvider translations={defaultTranslations}>
        <div className="max-w-md">
          <Story />
        </div>
      </I18nProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An FAQ accordion card for displaying questions and answers. Use as a **copilot action** (name: `faqCard`) to help users find answers to common questions.\n\n" +
          "Features:\n" +
          "- Accordion-style expand/collapse\n" +
          "- Single or multiple items can be expanded\n" +
          "- Controlled or uncontrolled mode\n" +
          "- Customizable header icon and title",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    items: sampleFAQItems,
  },
  argTypes: {
    items: {
      description: "Array of { id, question, answer } objects",
      control: false,
    },
    defaultExpandedId: {
      control: "text",
      description: "Initially expanded item ID (uncontrolled mode)",
    },
    allowMultiple: {
      control: "boolean",
      description: "Whether multiple items can be expanded at once",
    },
    onExpandedChange: {
      action: "expandedChange",
    },
  },
} satisfies Meta<typeof F0FAQCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: sampleFAQItems,
  },
}

export const WithDefaultExpanded: Story = {
  args: {
    items: sampleFAQItems,
    defaultExpandedId: "complexity",
  },
}

export const AllowMultiple: Story = {
  args: {
    items: sampleFAQItems,
    allowMultiple: true,
    defaultExpandedId: "complexity",
  },
}

export const CustomTitle: Story = {
  args: {
    items: sampleFAQItems,
  },
}

export const Controlled: Story = {
  args: {
    items: sampleFAQItems,
    expandedId: "migration",
    onExpandedChange: fn(),
  },
}

export const SingleQuestion: Story = {
  args: {
    items: [sampleFAQItems[0]],
  },
}
