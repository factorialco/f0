import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { FileQuestion } from "."
import { SurveyFormBuilderElement, QuestionElement } from "../../types"
import { SurveyFormBuilderProvider } from "../../Context"

const meta: Meta<typeof FileQuestion> = {
  title: "Surveys/SurveyFormBuilder/FileQuestion",
  component: FileQuestion,
  tags: ["autodocs", "experimental"],
  render: (args) => {
    const [elements, setElements] = useState<SurveyFormBuilderElement[]>([
      { type: "question" as const, question: args as QuestionElement },
    ])

    const question =
      elements[0] && "question" in elements[0] ? elements[0].question : {}

    return (
      <div className="max-w-[750px]">
        <SurveyFormBuilderProvider elements={elements} onChange={setElements}>
          <FileQuestion {...args} {...question} />
        </SurveyFormBuilderProvider>
      </div>
    )
  },
} satisfies Meta<typeof FileQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    type: "file",
    title: "Upload your documents",
    description: "Please upload any relevant files",
    value: null,
    required: true,
  },
}
