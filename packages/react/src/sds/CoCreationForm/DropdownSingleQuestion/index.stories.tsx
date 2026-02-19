import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { withSkipA11y } from "@/lib/storybook-utils/parameters"

import { DropdownSingleQuestion } from "."
import { CoCreationFormProvider } from "../Context"
import { CoCreationFormElement } from "../types"

const meta: Meta<typeof DropdownSingleQuestion> = {
  title: "CoCreationForm/DropdownSingleQuestion",
  component: DropdownSingleQuestion,
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
          <DropdownSingleQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
}

export default meta
type Story = StoryObj<typeof DropdownSingleQuestion>

export const Default: Story = {
  parameters: withSkipA11y({}),
  args: {
    id: "question-1",
    title: "Select your department",
    description: "Choose one option from the list",
    type: "dropdown-single",
    value: null,
    options: [
      { value: "engineering", label: "Engineering" },
      { value: "design", label: "Design" },
      { value: "marketing", label: "Marketing" },
      { value: "sales", label: "Sales" },
    ],
  },
}
