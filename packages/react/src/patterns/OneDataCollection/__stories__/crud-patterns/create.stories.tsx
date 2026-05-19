import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { Add, ArrowRight, Save } from "@/icons/app"
import { F0Dialog } from "@/patterns/F0Dialog"
import { F0Wizard } from "@/ui/F0Wizard"

import { useDataCollectionSource } from "../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../index"
import {
  createResourceDataAdapter,
  CrudPatternLayout,
  ExampleField,
  initialResources,
  LightweightCreateForm,
  Resource,
  ResourceForm,
  ResourcePage,
  tableVisualization,
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
          onClick: () => {
            setResources([
              {
                id: "resource-new",
                name: "New resource",
                owner: "People Ops",
                status: "Draft",
                summary: "Created from the default dialog.",
              },
              ...resources,
            ])
            setOpen(false)
          },
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: () => setOpen(false),
        }}
      >
        <ResourceForm mode="create" />
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
        {({ currentStep }) => (
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-f1-foreground">
              Step {currentStep + 1}
            </h3>
            <p className="text-sm text-f1-foreground-secondary">
              The wizard keeps users focused on one step at a time.
            </p>
            <ExampleField
              label="Step input"
              value={
                currentStep === 0
                  ? "Onboarding plan"
                  : currentStep === 1
                    ? "People team"
                    : "Ready to create"
              }
            />
          </div>
        )}
      </F0Wizard>
    </CrudPatternLayout>
  )
}

function LightweightCreateActionsScenario() {
  const [resources, setResources] = useState(initialResources)
  const [open, setOpen] = useState(false)
  const [resourcePage, setResourcePage] = useState<Resource | null>(null)

  const createdResource: Resource = {
    id: "payroll-integration",
    name: "Factorial Payroll",
    owner: "People Ops",
    status: "Needs details",
    summary: "Created with the minimum fields and ready for setup.",
  }

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(resources),
    primaryActions: () => ({
      label: "Create payroll integration",
      icon: Add,
      onClick: () => setOpen(true),
    }),
  })

  if (resourcePage) {
    return (
      <CrudPatternLayout>
        <ResourcePage
          resource={resourcePage}
          onBack={() => setResourcePage(null)}
          title="Complete payroll integration"
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
      <F0Dialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Create payroll integration"
        description="Use Save and open resource as primary when the created resource usually needs immediate completion."
        primaryAction={{
          label: "Save and open resource",
          icon: ArrowRight,
          onClick: () => {
            setResources([createdResource, ...resources])
            setOpen(false)
            setResourcePage(createdResource)
          },
        }}
        secondaryAction={{
          label: "Save and close",
          icon: Save,
          onClick: () => {
            setResources([createdResource, ...resources])
            setOpen(false)
          },
        }}
      >
        <LightweightCreateForm />
      </F0Dialog>
    </CrudPatternLayout>
  )
}

export const DefaultDialog: Story = {
  render: () => <DefaultDialogScenario />,
}

export const WizardDialog: Story = {
  render: () => <WizardDialogScenario />,
}

export const LightweightCreateActions: Story = {
  render: () => <LightweightCreateActionsScenario />,
}
