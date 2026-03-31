import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { withSkipA11y } from "@/lib/storybook-utils/parameters"

import { DropdownSingleQuestion } from "."
import { SurveyFormBuilderProvider } from "../../Context"
import { SurveyFormBuilderElement } from "../../types"

const meta: Meta<typeof DropdownSingleQuestion> = {
  title: "Surveys/SurveyFormBuilder/DropdownSingleQuestion",
  component: DropdownSingleQuestion,
  tags: ["autodocs", "experimental"],
  render: (args) => {
    const [elements, setElements] = useState<SurveyFormBuilderElement[]>([
      { type: "question" as const, question: args },
    ])

    const question =
      elements[0] && "question" in elements[0] ? elements[0].question : {}

    return (
      <div className="max-w-[750px]">
        <SurveyFormBuilderProvider elements={elements} onChange={setElements}>
          <DropdownSingleQuestion {...args} {...question} />
        </SurveyFormBuilderProvider>
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

export const WithSearchBox: Story = {
  parameters: withSkipA11y({}),
  args: {
    id: "question-2",
    title: "Select your currency",
    description: "Choose the currency for this purchase request",
    type: "dropdown-single",
    value: null,
    options: [
      { value: "EUR", label: "EUR - Euro" },
      { value: "USD", label: "USD - US Dollar" },
      { value: "GBP", label: "GBP - British Pound" },
      { value: "CHF", label: "CHF - Swiss Franc" },
      { value: "JPY", label: "JPY - Japanese Yen" },
      { value: "CAD", label: "CAD - Canadian Dollar" },
      { value: "AUD", label: "AUD - Australian Dollar" },
      { value: "SEK", label: "SEK - Swedish Krona" },
      { value: "NOK", label: "NOK - Norwegian Krone" },
      { value: "DKK", label: "DKK - Danish Krone" },
      { value: "PLN", label: "PLN - Polish Złoty" },
      { value: "CZK", label: "CZK - Czech Koruna" },
    ],
  },
}

export const WithSearchBoxExplicit: Story = {
  parameters: withSkipA11y({}),
  args: {
    id: "question-3",
    title: "Select your vendor",
    description: "Search and select a vendor",
    type: "dropdown-single",
    showSearchBox: true,
    searchBoxPlaceholder: "Search vendors...",
    value: null,
    options: [
      { value: "vendor-1", label: "Acme Corp" },
      { value: "vendor-2", label: "Globex Inc" },
      { value: "vendor-3", label: "Initech" },
    ],
  },
}
