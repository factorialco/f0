import type { Meta, StoryObj } from "@storybook/react-vite"

import { TextQuestion } from "."

const meta: Meta = {
  title: "CoCreationForm/TextQuestion",
  component: TextQuestion,
  tags: ["autodocs", "experimental"],
  args: {
    onChange: (params) => {
      console.log("Question changed:", params)
    },
  },
} satisfies Meta<typeof TextQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Tell us more about your idea",
    description: "Please provide a detailed description",
    text: "",
  },
}

export const WithInitialText: Story = {
  args: {
    id: "question-2",
    title: "Describe your project",
    description: "Share as much detail as you can",
    text: "This is my initial response...",
  },
}

export const LongText: Story = {
  args: {
    id: "question-4",
    title: "What would you like to share?",
    description: "Share as much detail as you can",
    text: "",
    type: "longText",
  },
}
