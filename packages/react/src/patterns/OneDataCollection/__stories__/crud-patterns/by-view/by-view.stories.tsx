import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { Add, Delete, Pencil, Save } from "@/icons/app"
import { F0Dialog } from "@/patterns/F0Dialog"
import { useF0Form } from "@/patterns/F0Form"

import type { BulkAction } from "../../../types"

import { useDataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../../index"
import {
  cardVisualization,
  createResourceDataAdapter,
  CrudContentPlaceholder,
  CrudPatternLayout,
  editableTableVisualization,
  initialResources,
  kanbanSourceLanes,
  kanbanVisualization,
  listVisualization,
  Resource,
  ResourceFormF0,
  resourceFilters,
  tableVisualization,
  type CrudVisualization,
} from "../shared"

const meta = {
  title: "Data collection/CRUD patterns/By view",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type CrudView = "table" | "list" | "card" | "kanban" | "editableTable"

function createResource(
  data: { name: string; owner: string; status: string },
  summary: string
): Resource {
  return {
    id: `resource-${Date.now()}`,
    name: data.name,
    owner: data.owner,
    status: (data.status as Resource["status"]) || "Draft",
    summary,
  }
}

function CrudByViewScenario({
  view,
  visualization,
}: {
  view: CrudView
  visualization: CrudVisualization
}) {
  const [resources, setResources] = useState(initialResources)
  const [previewedResource, setPreviewedResource] = useState<Resource | null>(
    null
  )
  const [editingResource, setEditingResource] = useState<Resource | null>(null)
  const [deletingResource, setDeletingResource] = useState<Resource | null>(
    null
  )
  const [createOpen, setCreateOpen] = useState(false)
  const [bulkActionOpen, setBulkActionOpen] = useState<
    "update" | "delete" | null
  >(null)
  const [selectedCount, setSelectedCount] = useState(0)
  const createForm = useF0Form()
  const updateForm = useF0Form()
  const isKanban = view === "kanban"
  const isEditableTable = view === "editableTable"

  const openCreate = () => setCreateOpen(true)
  const openUpdate = (resource: Resource) => {
    setPreviewedResource(null)
    setEditingResource(resource)
  }
  const openDelete = (resource: Resource) => {
    setPreviewedResource(null)
    setDeletingResource(resource)
  }

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(resources),
    filters: resourceFilters,
    lanes: isKanban ? kanbanSourceLanes : undefined,
    selectable: isKanban ? (item) => item.id : undefined,
    itemOnClick: isEditableTable
      ? undefined
      : (item) => () => setPreviewedResource(item),
    itemActions: isKanban
      ? undefined
      : (item) => [
          {
            label: "Edit",
            icon: Pencil,
            type: view === "table" || view === "list" ? "primary" : "other",
            onClick: () => openUpdate(item),
          },
          {
            label: "Delete",
            icon: Delete,
            critical: true,
            type: "other",
            onClick: () => openDelete(item),
          },
        ],
    bulkActions: isKanban
      ? () => ({
          primary: [
            {
              label: "Update selected cards",
              icon: Save,
              id: "update",
            },
          ],
          secondary: [
            {
              label: "Delete selected cards",
              icon: Delete,
              id: "delete",
              critical: true,
            },
          ],
        })
      : undefined,
    primaryActions: () => ({
      label: "Create resource",
      icon: Add,
      onClick: openCreate,
    }),
  })

  const visualizations = [
    isKanban
      ? {
          ...kanbanVisualization,
          options: {
            ...kanbanVisualization.options,
            onCreate: (laneId: string) => {
              const laneStatus: Record<string, Resource["status"]> = {
                draft: "Draft",
                "needs-details": "Needs details",
                complete: "Complete",
              }

              setResources((currentResources) => [
                createResource(
                  {
                    name: `New ${laneStatus[laneId] ?? "Draft"} resource`,
                    owner: "Alicia Keys",
                    status: laneStatus[laneId] ?? "Draft",
                  },
                  "Created from the lane where the resource belongs."
                ),
                ...currentResources,
              ])
            },
          },
        }
      : isEditableTable
        ? {
            ...editableTableVisualization,
            options: {
              ...editableTableVisualization.options,
              onCellChange: async (updatedResource: Resource) => {
                setResources((currentResources) =>
                  currentResources.map((resource) =>
                    resource.id === updatedResource.id
                      ? updatedResource
                      : resource
                  )
                )
              },
              addRowActions: () => ({
                label: "Add row",
                onClick: () => {
                  setResources((currentResources) => [
                    ...currentResources,
                    {
                      id: `resource-${Date.now()}`,
                      name: "New row resource",
                      owner: "Alicia Keys",
                      status: "Draft",
                      summary:
                        "Created inline because the resource is lightweight.",
                    },
                  ])
                },
              }),
            },
          }
        : visualization,
  ]

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        visualizations={visualizations}
        onSelectItems={({ selectedCount }) => setSelectedCount(selectedCount)}
        onBulkAction={(action: BulkAction, { selectedCount }) => {
          setSelectedCount(selectedCount)
          setBulkActionOpen(action === "delete" ? "delete" : "update")
        }}
      />
      <F0Dialog
        isOpen={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Create resource"
        description="Create starts from the collection primary action."
        primaryAction={{
          label: "Create resource",
          icon: Add,
          onClick: createForm.submit,
          loading: createForm.isSubmitting,
          disabled: createForm.hasErrors,
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setCreateOpen(false),
        }}
        disableContentPadding
      >
        <ResourceFormF0
          key="create-by-view"
          mode="create"
          formRef={createForm.formRef}
          onSuccess={(data) => {
            setResources((currentResources) => [
              createResource(data, "Created from the collection action."),
              ...currentResources,
            ])
            setCreateOpen(false)
          }}
        />
      </F0Dialog>
      <F0Dialog
        isOpen={previewedResource !== null}
        onClose={() => setPreviewedResource(null)}
        title="Resource details"
        description="Read opens first; edit and delete remain explicit actions."
        otherActions={
          previewedResource
            ? [
                {
                  label: "Edit",
                  icon: Pencil,
                  onClick: () => openUpdate(previewedResource),
                },
                {
                  label: "Delete",
                  icon: Delete,
                  critical: true,
                  onClick: () => openDelete(previewedResource),
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
        isOpen={editingResource !== null}
        onClose={() => setEditingResource(null)}
        title="Update resource"
        description="Update reuses the create form structure with existing values."
        primaryAction={{
          label: "Save changes",
          icon: Save,
          onClick: updateForm.submit,
          loading: updateForm.isSubmitting,
          disabled: updateForm.hasErrors,
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setEditingResource(null),
        }}
        disableContentPadding
      >
        <ResourceFormF0
          key={editingResource?.id}
          mode="update"
          resource={editingResource ?? undefined}
          formRef={updateForm.formRef}
          onSuccess={(data) => {
            setResources((currentResources) =>
              currentResources.map((resource) =>
                resource.id === editingResource?.id
                  ? {
                      ...resource,
                      name: data.name,
                      owner: data.owner,
                      status: data.status as Resource["status"],
                    }
                  : resource
              )
            )
            setEditingResource(null)
          }}
        />
      </F0Dialog>
      <F0Dialog
        isOpen={deletingResource !== null}
        onClose={() => setDeletingResource(null)}
        title={`Delete ${deletingResource?.name ?? "resource"}?`}
        description="This action cannot be undone."
        primaryAction={{
          label: "Delete resource",
          icon: Delete,
          onClick: () => {
            setResources((currentResources) =>
              currentResources.filter(
                (resource) => resource.id !== deletingResource?.id
              )
            )
            setDeletingResource(null)
          },
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setDeletingResource(null),
        }}
      >
        <CrudContentPlaceholder minHeight="min-h-24" />
      </F0Dialog>
      <F0Dialog
        isOpen={bulkActionOpen !== null}
        onClose={() => setBulkActionOpen(null)}
        title={`${bulkActionOpen === "delete" ? "Delete" : "Update"} ${selectedCount || "selected"} cards?`}
        description="Kanban uses selected cards plus the bulk action bar for multi-card changes."
        primaryAction={{
          label:
            bulkActionOpen === "delete"
              ? "Delete selected cards"
              : "Update selected cards",
          icon: bulkActionOpen === "delete" ? Delete : Save,
          onClick: () => setBulkActionOpen(null),
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setBulkActionOpen(null),
        }}
      >
        <CrudContentPlaceholder minHeight="min-h-24" />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

export const Table: Story = {
  render: () => (
    <CrudByViewScenario view="table" visualization={tableVisualization} />
  ),
}

export const List: Story = {
  render: () => (
    <CrudByViewScenario view="list" visualization={listVisualization} />
  ),
}

export const Card: Story = {
  render: () => (
    <CrudByViewScenario view="card" visualization={cardVisualization} />
  ),
}

export const Kanban: Story = {
  render: () => (
    <CrudByViewScenario view="kanban" visualization={kanbanVisualization} />
  ),
}

export const EditableTable: Story = {
  render: () => (
    <CrudByViewScenario
      view="editableTable"
      visualization={editableTableVisualization}
    />
  ),
}
