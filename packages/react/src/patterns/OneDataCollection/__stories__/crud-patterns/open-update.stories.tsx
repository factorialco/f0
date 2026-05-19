import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { Pencil, Save } from "@/icons/app"
import { F0Dialog } from "@/patterns/F0Dialog"

import { useDataCollectionSource } from "../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../index"
import {
  createResourceDataAdapter,
  CrudPatternLayout,
  initialResources,
  listVisualization,
  Resource,
  ResourceForm,
  ResourceSummary,
  tableVisualization,
} from "./shared"

const meta = {
  title: "Data collection/CRUD patterns/Open and update",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function ItemDialogScenario({
  position,
  visualization = tableVisualization,
}: {
  position?: "right"
  visualization?: typeof tableVisualization | typeof listVisualization
}) {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    itemOnClick: (item) => () => setSelectedResource(item),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection source={source} visualizations={[visualization]} />
      <F0Dialog
        isOpen={selectedResource !== null}
        onClose={() => setSelectedResource(null)}
        title={position === "right" ? "Edit resource" : "Resource details"}
        description={
          position === "right"
            ? "Right-position dialogs are an accepted Table/List variation when context should stay visible."
            : "The default item-opening pattern is a dialog."
        }
        position={position}
        width="lg"
        primaryAction={{
          label: position === "right" ? "Save changes" : "Edit resource",
          icon: position === "right" ? Save : Pencil,
          onClick: () => setSelectedResource(null),
        }}
        secondaryAction={{
          label: "Close",
          onClick: () => setSelectedResource(null),
        }}
      >
        {selectedResource && <ResourceSummary resource={selectedResource} />}
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function UpdateWithSameFormScenario() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    itemActions: (item) => [
      {
        label: "Edit",
        icon: Pencil,
        type: "primary",
        onClick: () => setSelectedResource(item),
      },
    ],
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        visualizations={[tableVisualization]}
      />
      <F0Dialog
        isOpen={selectedResource !== null}
        onClose={() => setSelectedResource(null)}
        title="Edit resource"
        description="This update dialog reuses the same structure as the create form."
        primaryAction={{
          label: "Save changes",
          icon: Save,
          onClick: () => setSelectedResource(null),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setSelectedResource(null),
        }}
      >
        <ResourceForm resource={selectedResource ?? undefined} mode="update" />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

export const OpenItemInDefaultDialog: Story = {
  render: () => <ItemDialogScenario />,
}

export const UpdateWithSameFormAsCreate: Story = {
  render: () => <UpdateWithSameFormScenario />,
}

export const RightPositionDialogForTable: Story = {
  render: () => <ItemDialogScenario position="right" />,
}

export const RightPositionDialogForList: Story = {
  render: () => (
    <ItemDialogScenario position="right" visualization={listVisualization} />
  ),
}
