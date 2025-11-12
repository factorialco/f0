import type { Meta, StoryObj } from "@storybook/react-vite"

import { DateQuestion } from "."

const meta: Meta = {
  title: "CoCreationForm/DateQuestion",
  component: DateQuestion,
  tags: ["autodocs", "experimental"],
  args: {
    onChange: (params) => {
      console.log("Question changed:", params)
    },
  },
} satisfies Meta<typeof DateQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Tell us more about your idea",
    description: "Please provide a detailed description",
    value: new Date(),
  },
}
