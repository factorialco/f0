import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0AiChatProvider } from "../../.."
import { UserMessage } from "../UserMessage"

const meta = {
  title: "AI/F0AiChat/Messages/UserMessage",
  component: UserMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <F0AiChatProvider>
        <div className="flex w-96 flex-col bg-f1-background p-4">
          <Story />
        </div>
      </F0AiChatProvider>
    ),
  ],
} satisfies Meta<typeof UserMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: {
      id: "user-1",
      role: "user",
      content: "How many employees do we have?",
    },
    ImageRenderer: () => null,
    rawData: {},
  },
}

export const LongMessage: Story = {
  args: {
    message: {
      id: "user-long",
      role: "user",
      content:
        "Can you give me a detailed breakdown of the headcount per department, including the average salary, tenure distribution, and contract type for each one? I would also like to see how these numbers have changed over the last quarter.",
    },
    ImageRenderer: () => null,
    rawData: {},
  },
}

export const WithEntityRef: Story = {
  args: {
    message: {
      id: "user-entity",
      role: "user",
      content:
        'What is the salary of <entity-ref type="person" id="42">John Smith</entity-ref>?',
    },
    ImageRenderer: () => null,
    rawData: {},
  },
}

export const WithToolContext: Story = {
  args: {
    message: {
      id: "user-tool",
      role: "user",
      content:
        '<tool-context tool="data-analysis">Analyze the data in detail</tool-context> Show me salary trends by department',
    },
    ImageRenderer: () => null,
    rawData: {},
  },
}
