import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Text } from "@/components/F0Text"
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
        label: "Update",
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
      <OneDataCollection source={source} visualizations={[visualization]} />
      <F0Dialog
        isOpen={selectedResource !== null}
        onClose={() => setSelectedResource(null)}
        title="Update resource"
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
        label: "Update",
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
        title="Update resource"
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

function BulkUpdateScenario() {
  const [selectedCount, setSelectedCount] = useState(0)
  const [open, setOpen] = useState(false)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    selectable: (item) => item.id,
    bulkActions: () => ({
      secondary: [
        {
          label: "Second",
          id: "second",
        },
        {
          label: "Third",
          id: "third",
        },
        {
          label: "Fourth action",
          id: "fourth-action",
        },
        {
          label: "Fifth action",
          id: "fifth-action",
        },
      ],
      primary: [
        {
          label: "Primary Action",
          id: "primary-action",
        },
      ],
    }),
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        onSelectItems={({ selectedCount }) => setSelectedCount(selectedCount)}
        onBulkAction={(_action, { selectedCount }) => {
          setSelectedCount(selectedCount)
          setOpen(true)
        }}
        visualizations={[tableVisualization]}
      />
      <F0Dialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title={`Update ${selectedCount || "selected"} resources?`}
        description="Bulk update actions should confirm the affected scope before applying shared changes."
        primaryAction={{
          label: "Update selected resources",
          icon: Save,
          onClick: () => setOpen(false),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setOpen(false),
        }}
      >
        <F0Text
          content="Use bulk update only in table view, where selection is explicit through checkboxes and the user can verify the affected rows before confirming."
          variant="description"
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

export const BulkUpdate: Story = {
  render: () => <BulkUpdateScenario />,
}
