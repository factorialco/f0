import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { LinkQuestion } from "."
import { CoCreationFormProvider } from "../Context"
import { CoCreationFormElement, QuestionElement } from "../types"

const meta: Meta<typeof LinkQuestion> = {
  title: "CoCreationForm/LinkQuestion",
  component: LinkQuestion,
  tags: ["autodocs", "experimental"],
  render: (args) => {
    const [elements, setElements] = useState<CoCreationFormElement[]>([
      { type: "question" as const, question: args as QuestionElement },
    ])

    const question = elements[0] && "question" in elements[0] ? elements[0].question : {}

    return (
      <div className="max-w-[750px]">
        <CoCreationFormProvider elements={elements} onChange={setElements} isEditMode>
          <LinkQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
} satisfies Meta<typeof LinkQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Tell us more about your idea",
    description: "Please provide a detailed description",
    value: "https://www.google.com",
    required: true,
  },
}

export const LongQuestionTitle: Story = {
  args: {
    id: "question-1",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at nunc sodales, viverra magna sed, cursus dui. Nam vulputate pretium est. Phasellus ornare lacus a erat gravida tincidunt. In in dignissim neque.",
    description: "Please provide a detailed description",
    value: "https://www.google.com",
    required: true,
  },
}
