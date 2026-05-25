import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { withSkipA11y } from "@/lib/storybook-utils/parameters"
import { createDataSourceDefinition } from "@/hooks/datasource"
import type { RecordType } from "@/hooks/datasource"

import { DropdownSingleQuestion } from "."
import { SurveyFormBuilderProvider } from "../../Context"
import { SurveyDatasets, SurveyFormBuilderElement } from "../../types"

const datasets: SurveyDatasets = {
  people: {
    title: "People",
    dataSource: createDataSourceDefinition({
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: () =>
          Promise.resolve({
            type: "infinite-scroll" as const,
            cursor: "3",
            perPage: 3,
            hasMore: false,
            total: 3,
            records: [
              { id: "1", name: "Ada Lovelace" },
              { id: "2", name: "Alan Turing" },
              { id: "3", name: "Grace Hopper" },
            ],
          }),
      },
    }) as SurveyDatasets[string]["dataSource"],
    mapOptions: (item: RecordType) => ({
      value: String(item.id),
      label: String(item.name),
    }),
  },
}

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
        <SurveyFormBuilderProvider
          elements={elements}
          onChange={setElements}
          datasets={datasets}
        >
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
    datasetKey: "people",
    value: null,
  },
}

export const WithSearchBox: Story = {
  parameters: withSkipA11y({}),
  args: {
    id: "question-2",
    title: "Select your currency",
    description: "Choose the currency for this purchase request",
    type: "dropdown-single",
    datasetKey: "people",
    value: null,
  },
}

export const WithSearchBoxExplicit: Story = {
  parameters: withSkipA11y({}),
  args: {
    id: "question-3",
    title: "Select your vendor",
    description: "Search and select a vendor",
    type: "dropdown-single",
    datasetKey: "people",
    showSearchBox: true,
    searchBoxPlaceholder: "Search vendors...",
    value: null,
  },
}
