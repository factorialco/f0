import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { useDataCollectionSource } from "../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../index"
import {
  createResourceDataAdapter,
  CrudPatternLayout,
  initialResources,
  Resource,
  ResourcePage,
  tableVisualization,
} from "./shared"

const meta = {
  title: "Data collection/CRUD patterns/Complex resource",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function OpenAsPageScenario() {
  const [resourcePage, setResourcePage] = useState<Resource | null>(null)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    itemOnClick: (item) => () => setResourcePage(item),
  })

  if (resourcePage) {
    return (
      <CrudPatternLayout>
        <ResourcePage
          resource={resourcePage}
          onBack={() => setResourcePage(null)}
          title="Complex resource details"
        />
      </CrudPatternLayout>
    )
  }

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        visualizations={[tableVisualization]}
      />
    </CrudPatternLayout>
  )
}

export const OpenAsPageWithBreadcrumbs: Story = {
  render: () => <OpenAsPageScenario />,
}
