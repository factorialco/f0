import type { Meta, StoryObj } from "@storybook/react-vite"

import { SampleQuestion } from "."

const meta: Meta<typeof SampleQuestion> = {
  title: "Surveys/SampleQuestion",
  component: SampleQuestion,
  tags: ["autodocs", "experimental"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[480px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SampleQuestion>

export const Rating: Story = {
  args: {
    type: "rating",
    question: "How satisfied are you with the overall quality of the course?",
    minLabel: "Very low",
    maxLabel: "Very high",
  },
}

export const Choice: Story = {
  args: {
    type: "choice",
    question: "Which of these is correct?",
    options: ["The correct answer", "Another option"],
  },
}
