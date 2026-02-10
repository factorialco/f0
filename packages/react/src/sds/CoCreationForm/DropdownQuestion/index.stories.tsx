import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { withSkipA11y } from "@/lib/storybook-utils/parameters"

import { DropdownQuestion } from "."
import { CoCreationFormProvider } from "../Context"
import { CoCreationFormElement } from "../types"

const meta: Meta<typeof DropdownQuestion> = {
  title: "CoCreationForm/DropdownQuestion",
  component: DropdownQuestion,
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
          <DropdownQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
}

export default meta
type Story = StoryObj<typeof DropdownQuestion>

export const SingleDropdown: Story = {
  parameters: withSkipA11y({}),
  args: {
    id: "question-1",
    title: "What department are you in?",
    description: "Select your department from the dropdown",
    type: "dropdown",
    value: null,
    options: [
      { value: "engineering", label: "Engineering" },
      { value: "design", label: "Design" },
      { value: "product", label: "Product" },
      { value: "marketing", label: "Marketing" },
      { value: "sales", label: "Sales" },
      { value: "hr", label: "Human Resources" },
      { value: "finance", label: "Finance" },
      { value: "legal", label: "Legal" },
    ],
  },
}

export const MultiDropdown: Story = {
  parameters: withSkipA11y({}),
  args: {
    id: "question-2",
    title: "Which tools do you use daily?",
    description: "Select all tools that apply",
    type: "dropdown-multi",
    value: [],
    options: [
      { value: "slack", label: "Slack" },
      { value: "jira", label: "Jira" },
      { value: "figma", label: "Figma" },
      { value: "github", label: "GitHub" },
      { value: "notion", label: "Notion" },
      { value: "google-docs", label: "Google Docs" },
      { value: "vscode", label: "VS Code" },
      { value: "linear", label: "Linear" },
    ],
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
          <DropdownQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
  args: {
    id: "question-3",
    title: "What department are you in?",
    description: "Select your department from the dropdown",
    type: "dropdown",
    value: null,
    options: [
      { value: "engineering", label: "Engineering" },
      { value: "design", label: "Design" },
      { value: "product", label: "Product" },
      { value: "marketing", label: "Marketing" },
      { value: "sales", label: "Sales" },
      { value: "hr", label: "Human Resources" },
    ],
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
      <div className="max-w-[750px]">
        <CoCreationFormProvider
          elements={elements}
          onChange={setElements}
          isEditMode={false}
        >
          <DropdownQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
  args: {
    id: "question-4",
    title: "Which tools do you use daily?",
    description: "Select all that apply",
    type: "dropdown-multi",
    value: [],
    options: [
      { value: "slack", label: "Slack" },
      { value: "jira", label: "Jira" },
      { value: "figma", label: "Figma" },
      { value: "github", label: "GitHub" },
      { value: "notion", label: "Notion" },
    ],
  },
}
