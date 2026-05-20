import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { Pencil, Save } from "@/icons/app"
import { useF0Form } from "@/patterns/F0Form"
import { F0Dialog } from "@/patterns/F0Dialog"

import { useDataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../../index"
import {
  createResourceDataAdapter,
  CrudPatternLayout,
  defaultCrudPrimaryAction,
  defaultCrudSecondaryActions,
  initialResources,
  listVisualization,
  Resource,
  ResourceFormF0,
  resourceFilters,
  tableVisualization,
} from "../shared"

const meta = {
  title: "Data collection/CRUD patterns/Update",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function RightPositionDialogScenario({
  visualization = tableVisualization,
}: {
  visualization?: typeof tableVisualization | typeof listVisualization
}) {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )
  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemOnClick: (item) => () => setSelectedResource(item),
    itemActions: (item) => [
      {
        label: "Edit",
        icon: Pencil,
        type: "primary",
        onClick: () => setSelectedResource(item),
      },
    ],
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <div
        className={
          visualization.type === "list"
            ? "[&>div>div:nth-child(2)]:px-4"
            : undefined
        }
      >
        <OneDataCollection source={source} visualizations={[visualization]} />
      </div>
      <F0Dialog
        isOpen={selectedResource !== null}
        onClose={() => setSelectedResource(null)}
        title="Edit resource"
        description="Right-position dialogs are an accepted Table/List variation when context should stay visible."
        position="right"
        width="md"
        primaryAction={{
          label: "Save changes",
          icon: Save,
          onClick: submit,
          loading: isSubmitting,
          disabled: hasErrors,
        }}
        secondaryAction={{
          label: "Close",
          onClick: () => setSelectedResource(null),
        }}
      >
        {selectedResource && (
          <ResourceFormF0
            key={selectedResource.id}
            mode="update"
            resource={selectedResource}
            formRef={formRef}
            onSuccess={() => setSelectedResource(null)}
          />
        )}
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function UpdateWithSameFormScenario() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )
  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemActions: (item) => [
      {
        label: "Edit",
        icon: Pencil,
        type: "primary",
        onClick: () => setSelectedResource(item),
      },
    ],
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
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
          onClick: submit,
          loading: isSubmitting,
          disabled: hasErrors,
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setSelectedResource(null),
        }}
      >
        <ResourceFormF0
          key={selectedResource?.id}
          mode="update"
          resource={selectedResource ?? undefined}
          formRef={formRef}
          onSuccess={() => setSelectedResource(null)}
        />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

export const Default: Story = {
  render: () => <UpdateWithSameFormScenario />,
}

export const RightPositionDialogForTable: Story = {
  render: () => <RightPositionDialogScenario />,
}

export const RightPositionDialogForList: Story = {
  render: () => (
    <RightPositionDialogScenario visualization={listVisualization} />
  ),
}
