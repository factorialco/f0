import type { Meta, StoryObj } from "@storybook/react-vite"

import { WizardStepItem, WizardStepper } from "./index"

const steps: WizardStepItem[] = [
  { id: "step-1", label: "Step name", completed: false },
  { id: "step-2", label: "Step name", completed: false },
  { id: "step-3", label: "Step name", completed: false },
  { id: "step-4", label: "Step name", completed: false },
  { id: "step-5", label: "Step name", completed: false },
  { id: "step-6", label: "Step name", completed: false },
  { id: "step-7", label: "Step name", completed: false },
  { id: "step-8", label: "Step name", completed: false },
]

const stepsWithCompleted: WizardStepItem[] = [
  { id: "legal-entity", label: "Legal entity", completed: true },
  { id: "purpose", label: "Select purpose", completed: true },
  { id: "basic-info", label: "Basic information", completed: false },
  { id: "accounting", label: "Accounting", completed: false },
  { id: "authorized", label: "Authorized people", completed: false },
]

const meta: Meta<typeof WizardStepper> = {
  title: "Navigation/Wizard steps",
  component: WizardStepper,
  tags: ["autodocs", "experimental"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    steps,
    currentStepId: "step-1",
    orientation: "vertical",
  },
}

export const WithCompletedSteps: Story = {
  args: {
    steps: stepsWithCompleted,
    currentStepId: "basic-info",
    orientation: "vertical",
  },
}

export const Horizontal: Story = {
  args: {
    steps: stepsWithCompleted,
    currentStepId: "basic-info",
    orientation: "horizontal",
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
}
