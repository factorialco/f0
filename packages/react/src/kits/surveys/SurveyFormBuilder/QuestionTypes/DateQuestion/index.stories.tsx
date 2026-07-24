import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { DateQuestion } from "."
import { SurveyFormBuilderProvider } from "../../Context"
import { SurveyFormBuilderElement, QuestionElement } from "../../types"

const meta: Meta<typeof DateQuestion> = {
  title: "Surveys/SurveyFormBuilder/DateQuestion",
  component: DateQuestion,
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
          <DateQuestion {...args} {...question} />
        </SurveyFormBuilderProvider>
      </div>
    )
  },
} satisfies Meta<typeof DateQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Tell us more about your idea",
    description: "Please provide a detailed description",
    value: new Date(),
  },
}
