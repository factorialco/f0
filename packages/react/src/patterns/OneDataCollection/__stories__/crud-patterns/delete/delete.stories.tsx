import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { Delete } from "@/icons/app"
import { F0Dialog } from "@/patterns/F0Dialog"

import { useDataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../../index"
import {
  createResourceDataAdapter,
  CrudPatternLayout,
  defaultCrudPrimaryAction,
  defaultCrudSecondaryActions,
  initialResources,
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

function SingleDeleteScenario() {
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
        <p className="text-sm text-f1-foreground-secondary">
          The confirmation names the item and explains the destructive outcome
          before the user commits.
        </p>
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function BulkDeleteScenario() {
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
        <p className="text-sm text-f1-foreground-secondary">
          Selected resources will be removed from the collection. This action
          cannot be undone.
        </p>
      </F0Dialog>
    </CrudPatternLayout>
  )
}

export const SingleDelete: Story = {
  render: () => <SingleDeleteScenario />,
}

export const BulkDelete: Story = {
  render: () => <BulkDeleteScenario />,
}
