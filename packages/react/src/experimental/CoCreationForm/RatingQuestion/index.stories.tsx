import type { Meta, StoryObj } from "@storybook/react-vite"

import { RatingQuestion } from "."
import { CoCreationFormProvider } from "../Context"

const meta: Meta = {
  title: "CoCreationForm/RatingQuestion",
  component: RatingQuestion,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="max-w-[750px]">
        <CoCreationFormProvider elements={[]} onChange={() => {}}>
          <Story />
        </CoCreationFormProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof RatingQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Rate your experience",
    description: "How satisfied are you?",
    value: 0,
    range: { min: 1, max: 5 },
  },
}

export const WithSelectedValue: Story = {
  args: {
    id: "question-2",
    title: "How would you rate this?",
    description: "Select a rating from 1 to 10",
    value: 7,
    range: { min: 1, max: 10 },
  },
}

export const SmallRange: Story = {
  args: {
    id: "question-3",
    title: "Satisfaction level",
    description: "Rate from 1 to 3",
    value: 0,
    range: { min: 1, max: 3 },
  },
}

export const WithEmojiOptions = {
  args: {
    id: "question-4",
    title: "Satisfaction level",
    description: "Rate from 1 to 10",
    value: 0,
    options: [
      { value: 1, label: "😠" },
      { value: 2, label: "😐" },
      { value: 3, label: "😊" },
      { value: 4, label: "😍" },
      { value: 5, label: "🤩" },
    ],
  },
}

export const Disabled: Story = {
  args: {
    id: "question-5",
    title: "Satisfaction level",
    description: "Rate from 1 to 10",
    value: 0,
    range: { min: 1, max: 10 },
    disabled: true,
  },
}
