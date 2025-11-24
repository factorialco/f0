import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { BaseQuestion } from "."
import { CoCreationFormProvider } from "../Context"
import { CoCreationFormElement, QuestionElement } from "../types"

const meta: Meta<typeof BaseQuestion> = {
  title: "CoCreationForm/BaseQuestion",
  component: BaseQuestion,
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
          <BaseQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
} satisfies Meta<typeof BaseQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "What is your question?",
    description: "Optional description",
  },
}
