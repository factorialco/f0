import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { Add } from "@/icons/app"
import { useF0Form } from "@/patterns/F0Form"
import { F0Dialog } from "@/patterns/F0Dialog"
import { F0Wizard } from "@/ui/F0Wizard"

import { useDataCollectionSource } from "../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../index"
import {
  createResourceDataAdapter,
  CrudPatternLayout,
  initialResources,
  Resource,
  ResourceFormF0,
  tableVisualization,
  WizardStepAssignments,
  WizardStepBasic,
} from "./shared"

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
    primaryActions: () => ({
      label: "Create resource",
      icon: Add,
      onClick: () => setOpen(true),
    }),
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

function WizardDialogScenario() {
  const [open, setOpen] = useState(false)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    primaryActions: () => ({
      label: "Create guided resource",
      icon: Add,
      onClick: () => setOpen(true),
    }),
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
            <p className="text-f1-foreground-secondary">
              Review the details above and click Create plan to finish.
            </p>
          )
        }}
      </F0Wizard>
    </CrudPatternLayout>
  )
}

export const DefaultDialog: Story = {
  render: () => <DefaultDialogScenario />,
}

export const WizardDialog: Story = {
  render: () => <WizardDialogScenario />,
}
