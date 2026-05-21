import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { Add } from "@/icons/app"
import { F0Text } from "@/components/F0Text"
import { useF0Form } from "@/patterns/F0Form"
import { F0Dialog } from "@/patterns/F0Dialog"
import { F0Wizard } from "@/ui/F0Wizard"

import { useDataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../../index"
import {
  createResourceDataAdapter,
  CrudPatternLayout,
  defaultCrudSecondaryActions,
  editableTableVisualization,
  initialResources,
  kanbanSourceLanes,
  kanbanVisualization,
  Resource,
  ResourceFormF0,
  resourceFilters,
  tableVisualization,
  WizardStepAssignments,
  WizardStepBasic,
} from "../shared"

const meta = {
  title: "Data collection/CRUD patterns/Create",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function DefaultDialogScenario() {
  const [resources, setResources] = useState(initialResources)
  const [open, setOpen] = useState(false)
  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(resources),
    filters: resourceFilters,
    primaryActions: () => ({
      label: "Create resource",
      icon: Add,
      onClick: () => setOpen(true),
    }),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        visualizations={[tableVisualization]}
      />
      <F0Dialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Create resource"
        description="Use the default dialog for create flows that fit in a focused overlay."
        primaryAction={{
          label: "Create resource",
          icon: Add,
          onClick: submit,
          loading: isSubmitting,
          disabled: hasErrors,
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setOpen(false),
        }}
      >
        <ResourceFormF0
          key="create"
          mode="create"
          formRef={formRef}
          onSuccess={(data) => {
            setResources([
              {
                id: `resource-${Date.now()}`,
                name: data.name,
                owner: data.owner,
                status: (data.status as Resource["status"]) ?? "Draft",
                summary: "Created from the default dialog.",
              },
              ...resources,
            ])
            setOpen(false)
          }}
        />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function RightDialogScenario() {
  const [resources, setResources] = useState(initialResources)
  const [open, setOpen] = useState(false)
  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(resources),
    filters: resourceFilters,
    primaryActions: () => ({
      label: "Create resource",
      icon: Add,
      onClick: () => setOpen(true),
    }),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        visualizations={[tableVisualization]}
      />
      <F0Dialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Create resource"
        description="Right-position dialogs are an accepted Table variation when the collection context should remain visible."
        position="right"
        width="md"
        primaryAction={{
          label: "Create resource",
          icon: Add,
          onClick: submit,
          loading: isSubmitting,
          disabled: hasErrors,
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setOpen(false),
        }}
      >
        <ResourceFormF0
          key="create-right-dialog"
          mode="create"
          formRef={formRef}
          onSuccess={(data) => {
            setResources([
              {
                id: `resource-${Date.now()}`,
                name: data.name,
                owner: data.owner,
                status: (data.status as Resource["status"]) ?? "Draft",
                summary: "Created from the right-position dialog.",
              },
              ...resources,
            ])
            setOpen(false)
          }}
        />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function WizardDialogScenario() {
  const [open, setOpen] = useState(false)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    primaryActions: () => ({
      label: "Create guided resource",
      icon: Add,
      onClick: () => setOpen(true),
    }),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        visualizations={[tableVisualization]}
      />
      <F0Wizard
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Create onboarding plan"
        width="lg"
        submitLabel="Create plan"
        steps={[
          { title: "General information" },
          { title: "Assignments" },
          { title: "Review" },
        ]}
        onSubmit={async () => setOpen(false)}
      >
        {({ currentStep }) => {
          if (currentStep === 0) return <WizardStepBasic />
          if (currentStep === 1) return <WizardStepAssignments />
          return (
            <F0Text
              content="Review the details above and click Create plan to finish."
              variant="description"
            />
          )
        }}
      </F0Wizard>
    </CrudPatternLayout>
  )
}

function KanbanLaneCreateScenario() {
  const [resources, setResources] = useState(initialResources)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(resources),
    filters: resourceFilters,
    lanes: kanbanSourceLanes,
    primaryActions: () => ({
      label: "Create resource",
      icon: Add,
      onClick: () => {},
    }),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        visualizations={[
          {
            ...kanbanVisualization,
            options: {
              ...kanbanVisualization.options,
              onCreate: (laneId) => {
                const laneStatus: Record<string, Resource["status"]> = {
                  draft: "Draft",
                  "needs-details": "Needs details",
                  complete: "Complete",
                }

                setResources([
                  {
                    id: `resource-${Date.now()}`,
                    name: `New ${laneStatus[laneId] ?? "Draft"} resource`,
                    owner: "Alicia Keys",
                    status: laneStatus[laneId] ?? "Draft",
                    summary:
                      "Created from the lane where the resource belongs.",
                  },
                  ...resources,
                ])
              },
            },
          },
        ]}
      />
    </CrudPatternLayout>
  )
}

function EditableTableAddRowScenario() {
  const [resources, setResources] = useState(initialResources)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(resources),
    filters: resourceFilters,
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
              addRowActions: () => ({
                label: "Add row",
                onClick: () => {
                  setResources([
                    ...resources,
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
          },
        ]}
      />
    </CrudPatternLayout>
  )
}

export const Default: Story = {
  render: () => <DefaultDialogScenario />,
}

export const RightDialog: Story = {
  render: () => <RightDialogScenario />,
}

export const WizardDialog: Story = {
  render: () => <WizardDialogScenario />,
}

export const KanbanLaneCreate: Story = {
  render: () => <KanbanLaneCreateScenario />,
}

export const EditableTableAddRow: Story = {
  render: () => <EditableTableAddRowScenario />,
}
