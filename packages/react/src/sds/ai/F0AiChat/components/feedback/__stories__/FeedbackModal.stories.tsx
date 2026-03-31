import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

import type { AIMessage } from "@copilotkit/shared"

import { FeedbackModal } from "../FeedbackModal"

const mockMessage: AIMessage = {
  id: "msg-feedback-1",
  role: "assistant",
  content: "Here is the headcount breakdown by department.",
}

const meta = {
  title: "AI/F0AiChat/Feedback/FeedbackModal",
  component: FeedbackModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeedbackModal>

export default meta
type Story = StoryObj<typeof meta>

export const Positive: Story = {
  args: {
    reactionType: "like",
    message: mockMessage,
    onClose: fn(),
    onSubmit: fn(),
  },
}

export const Negative: Story = {
  args: {
    reactionType: "dislike",
    message: mockMessage,
    onClose: fn(),
    onSubmit: fn(),
  },
}
