import type { Meta, StoryObj } from "@storybook/react-vite"

import { FeedbackModalProvider } from "../FeedbackProvider"
import { TurnFeedback } from "../TurnFeedback"

const meta = {
  title: "AI/F0AiChat/Feedback/TurnFeedback",
  component: TurnFeedback,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <FeedbackModalProvider>
        <Story />
      </FeedbackModalProvider>
    ),
  ],
} satisfies Meta<typeof TurnFeedback>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    messages: [
      {
        id: "assistant-1",
        role: "assistant",
        content:
          "Here is the headcount breakdown by department. Engineering has 45 employees, Design has 12, and Marketing has 18.",
      },
    ],
  },
}

export const MultipleTurnMessages: Story = {
  args: {
    messages: [
      {
        id: "assistant-2a",
        role: "assistant",
        content: "Let me look up that information for you.",
      },
      {
        id: "assistant-2b",
        role: "assistant",
        content:
          "The total headcount is 120 employees across 8 departments. The largest department is Engineering with 45 people.",
      },
    ],
  },
}
