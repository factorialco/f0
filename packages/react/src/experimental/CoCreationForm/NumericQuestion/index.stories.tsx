import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { NumericQuestion } from "."
import { CoCreationFormProvider } from "../Context"
import { CoCreationFormElement, QuestionElement } from "../types"

const meta: Meta<typeof NumericQuestion> = {
  title: "CoCreationForm/NumericQuestion",
  component: NumericQuestion,
  tags: ["autodocs", "experimental"],
  render: (args) => {
    const [elements, setElements] = useState<CoCreationFormElement[]>([
      { type: "question" as const, question: args as QuestionElement },
    ])

    const question = elements[0] && "question" in elements[0] ? elements[0].question : {}

    return (
      <div className="max-w-[750px]">
        <CoCreationFormProvider elements={elements} onChange={setElements} isEditMode>
          <NumericQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
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
