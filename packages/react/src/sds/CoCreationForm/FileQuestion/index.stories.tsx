import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { FileQuestion } from "."
import { CoCreationFormProvider } from "../Context"
import { CoCreationFormElement, QuestionElement } from "../types"

const meta: Meta<typeof FileQuestion> = {
  title: "CoCreationForm/FileQuestion",
  component: FileQuestion,
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
          <FileQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
} satisfies Meta<typeof FileQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Upload your documents",
    description: "Please upload any relevant files",
    value: null,
    required: true,
  },
}
