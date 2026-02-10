import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { withSkipA11y } from "@/lib/storybook-utils/parameters"

import { EntitySelectQuestion } from "."
import { CoCreationFormProvider } from "../Context"
import { CoCreationFormElement } from "../types"

const mockEmployees = [
  { id: 1, name: "Alice Johnson", avatar: undefined },
  { id: 2, name: "Bob Smith", avatar: undefined },
  { id: 3, name: "Carol Williams", avatar: undefined },
  { id: 4, name: "David Brown", avatar: undefined },
  { id: 5, name: "Eve Davis", avatar: undefined },
  { id: 6, name: "Frank Miller", avatar: undefined },
]

const meta: Meta<typeof EntitySelectQuestion> = {
  title: "CoCreationForm/EntitySelectQuestion",
  component: EntitySelectQuestion,
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
          <EntitySelectQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
}

export default meta
type Story = StoryObj<typeof EntitySelectQuestion>

export const EditMode: Story = {
  parameters: withSkipA11y({}),
  args: {
    id: "question-1",
    title: "Who is the project manager?",
    description: "Select the person responsible for this project",
    type: "entity-select",
    value: null,
    entities: mockEmployees,
  },
}

export const AnswerModeSingle: Story = {
  parameters: withSkipA11y({}),
  render: (args) => {
    const [elements, setElements] = useState<CoCreationFormElement[]>([
      { type: "question" as const, question: args },
    ])

    const question =
      elements[0] && "question" in elements[0] ? elements[0].question : {}

    return (
      <div className="h-[400px] max-w-[750px]">
        <CoCreationFormProvider
          elements={elements}
          onChange={setElements}
          isEditMode={false}
        >
          <EntitySelectQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
  args: {
    id: "question-2",
    title: "Who is the project manager?",
    description: "Select the person responsible for this project",
    type: "entity-select",
    value: null,
    entities: mockEmployees,
  },
}

export const AnswerModeMulti: Story = {
  parameters: withSkipA11y({}),
  render: (args) => {
    const [elements, setElements] = useState<CoCreationFormElement[]>([
      { type: "question" as const, question: args },
    ])

    const question =
      elements[0] && "question" in elements[0] ? elements[0].question : {}

    return (
      <div className="h-[400px] max-w-[750px]">
        <CoCreationFormProvider
          elements={elements}
          onChange={setElements}
          isEditMode={false}
        >
          <EntitySelectQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
  args: {
    id: "question-3",
    title: "Who are the team members?",
    description: "Select all people involved in this project",
    type: "entity-select-multi",
    value: [],
    entities: mockEmployees,
  },
}
