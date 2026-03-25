import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { CheckboxQuestion } from "."
import { SurveyFormBuilderElement, QuestionElement } from "../../types"
import { SurveyFormBuilderProvider } from "../../Context"

const meta: Meta<typeof CheckboxQuestion> = {
  title: "Surveys/SurveyFormBuilder/CheckboxQuestion",
  component: CheckboxQuestion,
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
          <CheckboxQuestion {...args} {...question} />
        </SurveyFormBuilderProvider>
      </div>
    )
  },
} satisfies Meta<typeof CheckboxQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    type: "checkbox",
    title: "Terms and conditions",
    description: "Please accept to continue",
    label: "I agree with the terms and conditions",
    value: null,
    required: true,
  },
}
