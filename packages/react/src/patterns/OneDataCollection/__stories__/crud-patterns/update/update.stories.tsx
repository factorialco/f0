import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Text } from "@/components/F0Text"
import { Pencil, Save } from "@/icons/app"
import { F0Dialog } from "@/patterns/F0Dialog"
import { useF0Form } from "@/patterns/F0Form"

import { useDataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../../index"
import {
  cardVisualization,
  createResourceDataAdapter,
  CrudContentPlaceholder,
  CrudPatternLayout,
  defaultCrudPrimaryAction,
  defaultCrudSecondaryActions,
  editableTableVisualization,
  initialResources,
  kanbanSourceLanes,
  kanbanVisualization,
  listVisualization,
  Resource,
  ResourceFormF0,
  resourceFilters,
  type CrudVisualization,
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
  visualization?: CrudVisualization
}) {
  const [previewedResource, setPreviewedResource] = useState<Resource | null>(
    null
  )
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )
  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  const openUpdateDialog = (item: Resource) => {
    setPreviewedResource(null)
    setSelectedResource(item)
  }

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemOnClick: (item) => () => setPreviewedResource(item),
    itemActions: (item) => [
      {
        label: "Edit",
        icon: Pencil,
        type: "primary",
        onClick: () => openUpdateDialog(item),
      },
    ],
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection source={source} visualizations={[visualization]} />
      <F0Dialog
        isOpen={previewedResource !== null}
        onClose={() => setPreviewedResource(null)}
        title="Resource details"
        description="Open a reduced view in a Right Dialog while keeping update as an explicit action."
        position="right"
        width="md"
        disableContentPadding
        otherActions={
          previewedResource
            ? [
                {
                  label: "Edit",
                  icon: Pencil,
                  onClick: () => openUpdateDialog(previewedResource),
                },
              ]
            : undefined
        }
        primaryAction={{
          label: "Primary Action",
          onClick: () => {},
        }}
        secondaryAction={{
          label: "Close",
          onClick: () => setPreviewedResource(null),
        }}
      >
        {previewedResource && (
          <div className="flex h-full flex-col p-4">
            <CrudContentPlaceholder minHeight="h-[calc(95dvh-12.5rem)]" />
          </div>
        )}
      </F0Dialog>
      <F0Dialog
        isOpen={selectedResource !== null}
        onClose={() => setSelectedResource(null)}
        title="Update resource"
        description="Right Dialog is an accepted Table/List variation when context should stay visible."
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
        disableContentPadding
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
  const [previewedResource, setPreviewedResource] = useState<Resource | null>(
    null
  )
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )
  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  const openUpdateDialog = (item: Resource) => {
    setPreviewedResource(null)
    setSelectedResource(item)
  }

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemOnClick: (item) => () => setPreviewedResource(item),
    itemActions: (item) => [
      {
        label: "Edit",
        icon: Pencil,
        type: "primary",
        onClick: () => openUpdateDialog(item),
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
        isOpen={previewedResource !== null}
        onClose={() => setPreviewedResource(null)}
        title="Resource details"
        description="Open the default read dialog first, then move into update from the header action."
        otherActions={
          previewedResource
            ? [
                {
                  label: "Edit",
                  icon: Pencil,
                  onClick: () => openUpdateDialog(previewedResource),
                },
              ]
            : undefined
        }
        primaryAction={{
          label: "Primary Action",
          onClick: () => {},
        }}
        secondaryAction={{
          label: "Close",
          onClick: () => setPreviewedResource(null),
        }}
      >
        {previewedResource && <CrudContentPlaceholder minHeight="min-h-56" />}
      </F0Dialog>
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
        disableContentPadding
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
          label: "Edit selected resources",
          icon: Save,
          onClick: () => setOpen(false),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setOpen(false),
        }}
      >
        <F0Text
          content="Use bulk update only when the visualization provides explicit selection, so the user can verify the affected items before confirming."
          variant="description"
        />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function CardActionsUpdateScenario() {
  const [previewedResource, setPreviewedResource] = useState<Resource | null>(
    null
  )
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )
  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  const openUpdateDialog = (item: Resource) => {
    setPreviewedResource(null)
    setSelectedResource(item)
  }

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemOnClick: (item) => () => setPreviewedResource(item),
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection source={source} visualizations={[cardVisualization]} />
      <F0Dialog
        isOpen={previewedResource !== null}
        onClose={() => setPreviewedResource(null)}
        title="Resource details"
        description="Card click opens the read dialog first. Edit remains an explicit action at the top of the dialog."
        otherActions={
          previewedResource
            ? [
                {
                  label: "Edit",
                  icon: Pencil,
                  onClick: () => openUpdateDialog(previewedResource),
                },
              ]
            : undefined
        }
        primaryAction={{
          label: "Primary Action",
          onClick: () => {},
        }}
        secondaryAction={{
          label: "Close",
          onClick: () => setPreviewedResource(null),
        }}
      >
        {previewedResource && <CrudContentPlaceholder minHeight="min-h-56" />}
      </F0Dialog>
      <F0Dialog
        isOpen={selectedResource !== null}
        onClose={() => setSelectedResource(null)}
        title="Update resource"
        description="Card update uses the default update dialog after the user chooses Edit from the read dialog or card actions."
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
        disableContentPadding
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

function KanbanBulkUpdateScenario() {
  const [selectedCount, setSelectedCount] = useState(0)
  const [open, setOpen] = useState(false)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    lanes: kanbanSourceLanes,
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
        visualizations={[kanbanVisualization]}
      />
      <F0Dialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title={`Update ${selectedCount || "selected"} kanban cards?`}
        description="Kanban bulk update is recommended when selected cards stay visibly selected and the action bar confirms the affected scope."
        primaryAction={{
          label: "Update selected cards",
          icon: Save,
          onClick: () => setOpen(false),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setOpen(false),
        }}
      >
        <F0Text
          content="Bulk update is not table-only. The requirement is explicit, reviewable selection scope before applying one update to multiple records."
          variant="description"
        />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function EditableTableInlineUpdateScenario() {
  const [resources, setResources] = useState(initialResources)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(resources),
    filters: resourceFilters,
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        visualizations={[
          {
            ...editableTableVisualization,
            options: {
              ...editableTableVisualization.options,
              onCellChange: async (updatedResource) => {
                setResources((currentResources) =>
                  currentResources.map((resource) =>
                    resource.id === updatedResource.id
                      ? updatedResource
                      : resource
                  )
                )
              },
            },
          },
        ]}
      />
    </CrudPatternLayout>
  )
}

export const TableUpdateDialog: Story = {
  render: () => <UpdateWithSameFormScenario />,
}

export const TableUpdateRightDialog: Story = {
  render: () => <RightPositionDialogScenario />,
}

export const ListUpdateRightDialog: Story = {
  render: () => (
    <RightPositionDialogScenario visualization={listVisualization} />
  ),
}

export const TableBulkUpdate: Story = {
  render: () => <BulkUpdateScenario />,
}

export const CardUpdateFromReadDialog: Story = {
  render: () => <CardActionsUpdateScenario />,
}

export const KanbanBulkUpdate: Story = {
  render: () => <KanbanBulkUpdateScenario />,
}

export const EditableTableUpdateInline: Story = {
  render: () => <EditableTableInlineUpdateScenario />,
}
