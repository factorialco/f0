import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, FC, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ApplicationFrame } from "@/examples/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/examples/ApplicationFrame/index.stories"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { F0WizardStep } from "../types"

import { F0Wizard } from "../index"

const meta: Meta<typeof F0Wizard> = {
  title: "F0Wizard",
  component: F0Wizard,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story, { args: { isOpen, ...rest } }) => {
      const [open, setOpen] = useState(isOpen)

      return (
        <ApplicationFrame
          {...(ApplicationFrameStoryMeta.args as ComponentProps<
            typeof ApplicationFrame
          >)}
        >
          <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
            <F0Button label="Open wizard" onClick={() => setOpen(true)} />
            <Story
              args={{
                ...rest,
                isOpen: open,
                onClose: () => setOpen(false),
              }}
            />
          </div>
        </ApplicationFrame>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof F0Wizard>

const BASIC_STEPS: F0WizardStep[] = [
  { title: "General information" },
  { title: "Personal details" },
  { title: "Work details" },
]

const StepContent: FC<{ step: number }> = ({ step }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-semibold text-f1-foreground">
      Step {step + 1} content
    </h3>
    <p className="text-f1-foreground-secondary">
      This is the content area for step {step + 1}. In a real wizard, this would
      contain form fields or other interactive content.
    </p>
    <div className="flex flex-col gap-2">
      {Array.from({ length: 3 }, (_, i) => (
        <div
          key={i}
          className="rounded-md border border-solid border-f1-border-secondary p-3"
        >
          Field placeholder {i + 1}
        </div>
      ))}
    </div>
  </div>
)

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Add employee",
    width: "lg",
    steps: BASIC_STEPS,
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    },
    children: ({ currentStep }) => <StepContent step={currentStep} />,
  },
}

export const WithCustomLabels: Story = {
  args: {
    ...Default.args,
    nextLabel: "Next step",
    previousLabel: "Go back",
    submitLabel: "Create employee",
  },
}

export const WithStepLevelLabels: Story = {
  args: {
    ...Default.args,
    steps: [
      { title: "Upload file", nextLabel: "Validate file" },
      { title: "Map columns", nextLabel: "Preview import" },
      { title: "Review", nextLabel: "Start import" },
    ],
  },
}

export const WithCompletedSteps: Story = {
  args: {
    ...Default.args,
    steps: [
      { title: "General information", isCompleted: () => true },
      { title: "Personal details", isCompleted: () => true },
      { title: "Work details" },
      { title: "Agreement" },
      { title: "Settings" },
    ],
    defaultStepIndex: 2,
  },
}

export const WithAsyncOnNext: Story = {
  args: {
    ...Default.args,
    steps: [
      {
        title: "Step 1",
        onNext: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1500))
        },
      },
      {
        title: "Step 2",
        onNext: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1500))
        },
      },
      { title: "Step 3" },
    ],
  },
}

export const WithIsCompletedGate: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    const [accepted, setAccepted] = useState(false)

    return (
      <>
        <F0Button label="Open wizard" onClick={() => setOpen(true)} />
        <F0Wizard
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Gated wizard"
          width="lg"
          steps={[
            { title: "Accept terms", isCompleted: () => accepted },
            { title: "Configure" },
            { title: "Finish" },
          ]}
          onSubmit={async () => {
            await new Promise((r) => setTimeout(r, 1500))
            setOpen(false)
          }}
        >
          {({ currentStep }) => {
            if (currentStep === 0) {
              return (
                <div className="flex flex-col gap-4">
                  <p className="text-f1-foreground-secondary">
                    You must accept the terms to continue.
                  </p>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={accepted}
                      onChange={(e) => setAccepted(e.target.checked)}
                    />
                    <span>I accept the terms and conditions</span>
                  </label>
                </div>
              )
            }
            return <StepContent step={currentStep} />
          }}
        </F0Wizard>
      </>
    )
  },
}

export const AllowStepSkipping: Story = {
  args: {
    ...Default.args,
    allowStepSkipping: true,
    steps: [
      { title: "General information", isCompleted: () => true },
      { title: "Personal details", isCompleted: () => true },
      { title: "Work details" },
      { title: "Agreement" },
      { title: "Settings" },
    ],
    defaultStepIndex: 2,
  },
}

export const AutoCloseOnSubmit: Story = {
  args: {
    ...Default.args,
    autoCloseOnLastStepSubmit: true,
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
    },
  },
}

export const ManySteps: Story = {
  args: {
    ...Default.args,
    steps: Array.from({ length: 8 }, (_, i) => ({
      title: `Step ${i + 1}`,
    })),
  },
}

export const AutoSkipCompletedSteps: Story = {
  args: {
    ...Default.args,
    autoSkipCompletedSteps: true,
    steps: [
      { title: "Step 1 (completed)", isCompleted: () => true },
      { title: "Step 2 (completed)", isCompleted: () => true },
      { title: "Step 3" },
    ],
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    ...Default.args,
  },
}
