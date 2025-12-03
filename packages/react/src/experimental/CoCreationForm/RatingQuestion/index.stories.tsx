import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSkipA11y } from "@/lib/storybook-utils/parameters"
import { useState } from "react"
import { RatingQuestion } from "."
import { CoCreationFormProvider } from "../Context"
import { CoCreationFormElement, QuestionElement } from "../types"

const meta: Meta<typeof RatingQuestion> = {
  title: "CoCreationForm/RatingQuestion",
  component: RatingQuestion,
  tags: ["autodocs", "experimental"],
  render: (args) => {
    const [elements, setElements] = useState<CoCreationFormElement[]>([
      { type: "question" as const, question: args as QuestionElement },
    ])

    const question =
      elements[0] && "question" in elements[0] ? elements[0].question : {}

    return (
      <div className="max-w-[750px]">
        <CoCreationFormProvider
          elements={elements}
          onChange={setElements}
          isEditMode
        >
          <RatingQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
} satisfies Meta<typeof RatingQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  // TODO: Fix a11y issues
  parameters: withSkipA11y({}),
  args: {
    id: "question-1",
    title: "Rate your experience",
    description: "How satisfied are you?",
    value: 0,
    options: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 4, label: "4" },
      { value: 5, label: "5" },
    ],
  },
}

export const WithSelectedValue: Story = {
  // TODO: Fix a11y issues
  parameters: withSkipA11y({}),
  args: {
    id: "question-2",
    title: "How would you rate this?",
    description: "Select a rating from 1 to 10",
    value: 7,
    options: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 4, label: "4" },
      { value: 5, label: "5" },
      { value: 6, label: "6" },
      { value: 7, label: "7" },
      { value: 8, label: "8" },
      { value: 9, label: "9" },
      { value: 10, label: "10" },
    ],
  },
}

export const SmallRange: Story = {
  // TODO: Fix a11y issues
  parameters: withSkipA11y({}),
  args: {
    id: "question-3",
    title: "Satisfaction level",
    description: "Rate from 1 to 3",
    value: 0,
    options: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
    ],
  },
}

export const WithEmojiOptions = {
  // TODO: Fix a11y issues
  parameters: withSkipA11y({}),
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
