import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import type { F0QuestionCardOption } from "../types"

import { F0QuestionCardMultiStep } from ".."

const multiSteps = [
  {
    question: "What would you like help with?",
    options: [
      { id: "a", label: "Product setup" },
      { id: "b", label: "Billing and plans" },
      { id: "c", label: "Integrations" },
    ] as F0QuestionCardOption[],
  },
  {
    question: "How often do you use this product?",
    options: [
      { id: "daily", label: "Daily" },
      { id: "weekly", label: "Weekly" },
      { id: "monthly", label: "Monthly" },
      { id: "rarely", label: "Rarely" },
    ] as F0QuestionCardOption[],
  },
  {
    question: "Anything else we should know?",
    options: [
      { id: "yes", label: "Yes, I have feedback" },
      { id: "no", label: "No, that's all" },
    ] as F0QuestionCardOption[],
  },
]

const singleStep = [
  {
    question: "What would you like help with?",
    options: [
      { id: "a", label: "Product setup" },
      { id: "b", label: "Billing and plans" },
      { id: "c", label: "Integrations" },
      { id: "d", label: "Something else" },
    ] as F0QuestionCardOption[],
  },
]

const meta = {
  title: "AI/F0QuestionCard",
  component: F0QuestionCardMultiStep,
  decorators: [
    (Story) => (
      <I18nProvider translations={defaultTranslations}>
        <Story />
      </I18nProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Multi-step question card with checkboxes, pagination (Prev/Next), Skip and Next. When used as a **copilot action** (name: `questionCard`), the AI backend triggers it by returning a tool call with these args.\n\n" +
          "**Single-step:** `question`, `options` (array of `{ id, label }`), optional `nextLabel`, `skipLabel`, `sendAsMessage`.\n\n" +
          "**Multi-step:** `steps` (array of `{ question, options }`). Prev/Next switch between steps. On last step, Next completes and optionally sends all selections via `sendAsMessage`.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    steps: multiSteps,
    onComplete: fn(),
    onSkip: fn(),
    onSendMessage: fn(),
  },
  argTypes: {
    steps: {
      description: "Array of { question, options }. Each option: { id, label }",
      control: false,
    },
    sendAsMessage: { control: "boolean" },
    onComplete: { action: "complete" },
    onSkip: { action: "skip" },
    onSendMessage: { action: "sendMessage" },
  },
} satisfies Meta<typeof F0QuestionCardMultiStep>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    steps: multiSteps,
  },
}

export const SingleStep: Story = {
  args: {
    steps: singleStep,
    onSkip: undefined,
  },
}

export const SendAsMessage: Story = {
  args: {
    steps: multiSteps,
    sendAsMessage: true,
    onSendMessage: fn(),
  },
}
