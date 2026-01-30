import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ApplicationFrame } from "@/experimental/Navigation/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/experimental/Navigation/ApplicationFrame/index.stories"

import { F0Wizard } from "../index"

const meta: Meta<typeof F0Wizard> = {
  title: "Wizard",
  component: F0Wizard,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story, { args: { isOpen, ...rest } }) => {
      const [open, setOpen] = useState(isOpen)

      const handleClose = () => {
        setOpen(false)
      }
      const handleOpen = () => {
        setOpen(true)
      }

      return (
        <ApplicationFrame
          {...(ApplicationFrameStoryMeta.args as ComponentProps<
            typeof ApplicationFrame
          >)}
        >
          <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
            <F0Button label="Open wizard" onClick={handleOpen} />
            <Story args={{ ...rest, isOpen: open, onClose: handleClose }} />
          </div>
        </ApplicationFrame>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof F0Wizard>

const ExampleList = ({ itemsCount = 5 }: { itemsCount?: number }) => (
  <div className="flex flex-col gap-4">
    {Array.from({ length: itemsCount }, (_, i) => (
      <div
        key={i}
        className="rounded-sm border border-solid border-f1-border-secondary p-4"
      >
        List Item {i + 1}
      </div>
    ))}
  </div>
)

export const Default: Story = {
  args: {
    isOpen: true,
    title: "Add Account",
    steps: [
      { id: "legal-entity", label: "Legal entity", completed: true },
      { id: "purpose", label: "Select purpose", completed: true },
      { id: "basic-info", label: "Basic information", completed: false },
      { id: "accounting", label: "Accounting", completed: false },
      { id: "authorized", label: "Authorized people", completed: false },
    ],
    currentStepId: "basic-info",
    primaryAction: {
      label: "Continue",
      onClick: () => {},
    },
    secondaryAction: {
      label: "Back",
      onClick: () => {},
    },
    children: <ExampleList itemsCount={5} />,
  },
}

export const FirstStep: Story = {
  args: {
    ...Default.args,
    currentStepId: "legal-entity",
    steps: [
      { id: "legal-entity", label: "Legal entity", completed: false },
      { id: "purpose", label: "Select purpose", completed: false },
      { id: "basic-info", label: "Basic information", completed: false },
      { id: "accounting", label: "Accounting", completed: false },
      { id: "authorized", label: "Authorized people", completed: false },
    ],
    secondaryAction: undefined,
  },
}

export const LastStep: Story = {
  args: {
    ...Default.args,
    currentStepId: "authorized",
    steps: [
      { id: "legal-entity", label: "Legal entity", completed: true },
      { id: "purpose", label: "Select purpose", completed: true },
      { id: "basic-info", label: "Basic information", completed: true },
      { id: "accounting", label: "Accounting", completed: true },
      { id: "authorized", label: "Authorized people", completed: false },
    ],
    primaryAction: {
      label: "Create account",
      onClick: () => {},
    },
  },
}
