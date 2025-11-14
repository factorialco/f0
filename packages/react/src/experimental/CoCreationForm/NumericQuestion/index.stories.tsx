import type { Meta, StoryObj } from "@storybook/react-vite"

import { NumericQuestion } from "."

const meta: Meta = {
  title: "CoCreationForm/NumericQuestion",
  component: NumericQuestion,
  tags: ["autodocs", "experimental"],
  args: {
    onChange: (params) => {
      console.log("Question changed:", params)
    },
  },
} satisfies Meta<typeof NumericQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Tell us more about your idea",
    description: "Please provide a detailed description",
    value: 33,
  },
}
