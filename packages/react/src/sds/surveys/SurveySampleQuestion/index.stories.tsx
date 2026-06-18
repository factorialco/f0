import type { Meta, StoryObj } from "@storybook/react-vite"

import { SurveySampleQuestion } from "."

const meta: Meta<typeof SurveySampleQuestion> = {
  title: "Surveys/SurveySampleQuestion",
  component: SurveySampleQuestion,
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
type Story = StoryObj<typeof SurveySampleQuestion>

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
