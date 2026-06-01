import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { Delete, Files } from "@/icons/app"
import { F0Text } from "@/components/F0Text"
import { F0Dialog } from "@/patterns/F0Dialog"

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
  Resource,
  resourceFilters,
  tableVisualization,
} from "../shared"

const meta = {
  title: "Data collection/CRUD patterns/Delete",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function TableSingleDeleteScenario() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemActions: (item) => [
      {
        label: "Delete",
        icon: Delete,
        critical: true,
        type: "other",
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
        title={`Delete ${selectedResource?.name ?? "resource"}?`}
        description="This action cannot be undone."
        primaryAction={{
          label: "Delete resource",
          icon: Delete,
          onClick: () => setSelectedResource(null),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setSelectedResource(null),
        }}
      >
        <F0Text
          content="The confirmation names the item and explains the destructive outcome before the user commits."
          variant="description"
        />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function TableBulkDeleteScenario() {
  const [selectedCount, setSelectedCount] = useState(0)
  const [open, setOpen] = useState(false)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    selectable: (item) => item.id,
    bulkActions: () => ({
      primary: [
        {
          label: "Delete",
          icon: Delete,
          id: "delete",
          critical: true,
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
        title={`Delete ${selectedCount || "selected"} resources?`}
        description="Bulk destructive actions must state the affected scope before confirmation."
        primaryAction={{
          label: "Delete selected resources",
          icon: Delete,
          onClick: () => setOpen(false),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setOpen(false),
        }}
      >
        <F0Text
          content="Selected resources will be removed from the collection. This action cannot be undone."
          variant="description"
        />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function EditableTableDeleteScenario({
  actionType = "primary",
}: {
  actionType?: "primary" | "secondary" | "other"
}) {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemActions: (item) => [
      {
        label: "Delete",
        icon: Delete,
        critical: true,
        type: actionType,
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
        visualizations={[editableTableVisualization]}
      />
      <F0Dialog
        isOpen={selectedResource !== null}
        onClose={() => setSelectedResource(null)}
        title={`Delete ${selectedResource?.name ?? "resource"}?`}
        description="This action cannot be undone."
        primaryAction={{
          label: "Delete resource",
          icon: Delete,
          onClick: () => setSelectedResource(null),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setSelectedResource(null),
        }}
      >
        <CrudContentPlaceholder minHeight="min-h-24" />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function CardDeleteScenario() {
  const [previewedResource, setPreviewedResource] = useState<Resource | null>(
    null
  )
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemActions: (item) => [
      {
        label: "Delete",
        icon: Delete,
        critical: true,
        type: "other",
        onClick: () => setSelectedResource(item),
      },
    ],
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
        description="Delete stays inside the ellipsis in both the card and the opened dialog, so the destructive action remains consistent."
        otherActions={
          previewedResource
            ? [
                {
                  label: "Duplicate",
                  icon: Files,
                  onClick: () => {},
                },
                {
                  label: "Delete",
                  icon: Delete,
                  critical: true,
                  onClick: () => {
                    setSelectedResource(previewedResource)
                    setPreviewedResource(null)
                  },
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
        title={`Delete ${selectedResource?.name ?? "resource"}?`}
        description="This action cannot be undone."
        primaryAction={{
          label: "Delete resource",
          icon: Delete,
          onClick: () => setSelectedResource(null),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setSelectedResource(null),
        }}
      >
        <CrudContentPlaceholder minHeight="min-h-24" />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function KanbanBulkDeleteScenario() {
  const [selectedCount, setSelectedCount] = useState(0)
  const [open, setOpen] = useState(false)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    lanes: kanbanSourceLanes,
    selectable: (item) => item.id,
    bulkActions: () => ({
      primary: [
        {
          label: "Delete",
          icon: Delete,
          id: "delete",
          critical: true,
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
        title={`Delete ${selectedCount || "selected"} kanban cards?`}
        description="Bulk destructive actions must state the selected scope before confirmation."
        primaryAction={{
          label: "Delete selected cards",
          icon: Delete,
          onClick: () => setOpen(false),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setOpen(false),
        }}
      >
        <CrudContentPlaceholder minHeight="min-h-24" />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

export const TableDeleteSingle: Story = {
  render: () => <TableSingleDeleteScenario />,
}

export const TableDeleteBulk: Story = {
  render: () => <TableBulkDeleteScenario />,
}

export const CardDelete: Story = {
  render: () => <CardDeleteScenario />,
}

export const EditableTableDeleteRowAction: Story = {
  render: () => <EditableTableDeleteScenario actionType="other" />,
}

export const KanbanDeleteBulk: Story = {
  render: () => <KanbanBulkDeleteScenario />,
}
