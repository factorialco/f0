import type { Meta, StoryObj } from "@storybook/react-vite"

import { type Message } from "@copilotkit/shared"

import { F0Thinking } from ".."
import { F0ActionItem } from "../../F0ActionItem"

// Helper to create mock messages with generativeUI
const createThinkingMessage = (
  content: string,
  status: "inProgress" | "executing" | "completed" = "completed"
): Message => ({
  id: `msg-${Math.random().toString(36).substr(2, 9)}`,
  role: "assistant",
  content: "",
  generativeUI: () => <F0ActionItem title={content} status={status} inGroup />,
})

const meta = {
  title: "AI/F0Thinking",
  component: F0Thinking,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    messages: {
      description: "Array of thinking/reflection messages to display",
    },
    isActive: {
      control: "boolean",
      description: "Whether the thinking process is currently active",
    },
    inProgress: {
      control: "boolean",
      description: "Whether the chat is currently in progress",
    },
    title: {
      control: "text",
      description: "Custom title for the thinking section",
    },
  },
} satisfies Meta<typeof F0Thinking>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    messages: [
      createThinkingMessage("Analyzing the request..."),
      createThinkingMessage("Gathering relevant information..."),
      createThinkingMessage("Formulating response..."),
    ],
    title: "Reflection",
  },
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
}

export const SingleThought: Story = {
  args: {
    messages: [createThinkingMessage("Processing your question...")],
    title: "Reflection",
  },
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
}

export const InProgress: Story = {
  args: {
    messages: [
      createThinkingMessage("Analyzing the request...", "completed"),
      createThinkingMessage("Gathering relevant information...", "completed"),
      createThinkingMessage("Formulating response...", "executing"),
    ],
    isActive: true,
    inProgress: true,
    title: "Reflection",
  },
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
}

export const ManyThoughts: Story = {
  args: {
    messages: [
      createThinkingMessage("Understanding the context..."),
      createThinkingMessage("Reviewing relevant documents..."),
      createThinkingMessage("Cross-referencing data sources..."),
      createThinkingMessage("Validating information accuracy..."),
      createThinkingMessage("Organizing the response structure..."),
      createThinkingMessage("Final review complete"),
    ],
    title: "Reflection",
  },
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
}

export const CustomTitle: Story = {
  args: {
    messages: [
      createThinkingMessage("Step 1: Initialize process"),
      createThinkingMessage("Step 2: Execute analysis"),
      createThinkingMessage("Step 3: Generate output"),
    ],
    title: "Processing Steps",
  },
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
}
