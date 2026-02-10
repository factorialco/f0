import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { withSkipA11y } from "@/lib/storybook-utils/parameters"

import { DateRangeQuestion } from "."
import { CoCreationFormProvider } from "../Context"
import { CoCreationFormElement } from "../types"

const meta: Meta<typeof DateRangeQuestion> = {
  title: "CoCreationForm/DateRangeQuestion",
  component: DateRangeQuestion,
  tags: ["autodocs", "experimental"],
  render: (args) => {
    const [elements, setElements] = useState<CoCreationFormElement[]>([
      { type: "question" as const, question: args },
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
          <DateRangeQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
}

export default meta
type Story = StoryObj<typeof DateRangeQuestion>

export const EditMode: Story = {
  parameters: withSkipA11y({}),
  args: {
    id: "question-1",
    title: "What is the project timeline?",
    description: "Select the start and end dates",
    type: "daterange",
    value: null,
  },
}

export const AnswerMode: Story = {
  parameters: withSkipA11y({}),
  render: (args) => {
    const [elements, setElements] = useState<CoCreationFormElement[]>([
      { type: "question" as const, question: args },
    ])

    const question =
      elements[0] && "question" in elements[0] ? elements[0].question : {}

    return (
      <div className="max-w-[750px]">
        <CoCreationFormProvider
          elements={elements}
          onChange={setElements}
          isEditMode={false}
        >
          <DateRangeQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
  args: {
    id: "question-2",
    title: "What is the project timeline?",
    description: "Select the start and end dates",
    type: "daterange",
    value: null,
  },
}

export const WithValue: Story = {
  parameters: withSkipA11y({}),
  render: (args) => {
    const [elements, setElements] = useState<CoCreationFormElement[]>([
      { type: "question" as const, question: args },
    ])

    const question =
      elements[0] && "question" in elements[0] ? elements[0].question : {}

    return (
      <div className="max-w-[750px]">
        <CoCreationFormProvider
          elements={elements}
          onChange={setElements}
          isEditMode={false}
        >
          <DateRangeQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
  args: {
    id: "question-3",
    title: "Contract period",
    description: "When does the contract start and end?",
    type: "daterange",
    value: {
      from: new Date(2026, 2, 1),
      to: new Date(2026, 5, 30),
    },
  },
}
