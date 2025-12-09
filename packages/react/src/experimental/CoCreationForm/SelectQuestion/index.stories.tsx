import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSkipA11y } from "@/lib/storybook-utils/parameters"
import { useState } from "react"
import { SelectQuestion } from "."
import { CoCreationFormProvider } from "../Context"
import { CoCreationFormElement } from "../types"

const meta: Meta<typeof SelectQuestion> = {
  title: "CoCreationForm/SelectQuestion",
  component: SelectQuestion,
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
          <SelectQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
}

export default meta
type Story = StoryObj<typeof SelectQuestion>

export const Default: Story = {
  // TODO: Fix a11y issues
  parameters: withSkipA11y({}),
  args: {
    id: "question-1",
    title: "How supported do you feel by your manager and team?",
    description: "Responders can select 1",
    type: "select",
    value: null,
    options: [
      { value: "work-life-balance", label: "Work-life balance" },
      { value: "recognition", label: "Recognition and appreciation" },
      { value: "manager-relationship", label: "Relationship with manager" },
      { value: "team-collaboration", label: "Team collaboration" },
    ],
  },
}

export const WithSelectedValue: Story = {
  // TODO: Fix a11y issues
  parameters: withSkipA11y({}),
  args: {
    id: "question-2",
    title: "What is your primary concern?",
    description: "Select one option",
    type: "select",
    value: "work-life-balance",
    options: [
      { value: "work-life-balance", label: "Work-life balance" },
      { value: "recognition", label: "Recognition and appreciation" },
      { value: "manager-relationship", label: "Relationship with manager" },
      { value: "team-collaboration", label: "Team collaboration" },
    ],
  },
}

export const ManyOptions: Story = {
  // TODO: Fix a11y issues
  parameters: withSkipA11y({}),
  args: {
    id: "question-3",
    title: "Which areas would you like to improve?",
    description: "Select one option",
    type: "select",
    value: null,
    options: [
      { value: "communication", label: "Communication" },
      { value: "feedback", label: "Feedback and recognition" },
      { value: "growth", label: "Career growth opportunities" },
      { value: "workload", label: "Workload management" },
      { value: "team-dynamics", label: "Team dynamics" },
      { value: "tools", label: "Tools and resources" },
    ],
  },
}

export const MultiSelect: Story = {
  // TODO: Fix a11y issues
  parameters: withSkipA11y({}),
  args: {
    id: "question-4",
    title: "What are your primary concerns?",
    description: "Select one or more options",
    type: "multi-select",
    value: [],
    options: [
      { value: "communication", label: "Communication" },
      { value: "feedback", label: "Feedback and recognition" },
      { value: "growth", label: "Career growth opportunities" },
      { value: "workload", label: "Workload management" },
      { value: "team-dynamics", label: "Team dynamics" },
    ],
  },
}
