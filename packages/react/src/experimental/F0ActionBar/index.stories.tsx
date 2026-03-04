import { useEffect, useState } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { Reset, Save } from "@/icons/app"

import { F0ActionBar, ActionBarStatus } from "."

const meta: Meta<typeof F0ActionBar> = {
  title: "Experimental/F0ActionBar",
  component: F0ActionBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "400px" },
    },
    a11y: {
      skipCi: true,
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls the visibility of the action bar",
    },
    primaryActions: {
      control: false,
      description: "The primary action",
    },
    secondaryActions: {
      control: false,
      description: "The secondary actions",
    },
    label: {
      control: "text",
      description: "The label of the action bar",
    },
    status: {
      control: "select",
      options: ["idle", "loading", "success"],
      description: "The current status of the action bar",
    },
  },
}

export default meta
type Story = StoryObj<typeof F0ActionBar>

export const Default: Story = {
  args: {
    isOpen: true,
    primaryActions: [
      {
        label: "Save changes",
        onClick: fn(),
        icon: Save,
      },
    ],
    secondaryActions: [
      {
        label: "Discard",
        onClick: fn(),
        icon: Reset,
      },
    ],
    label: "Unsaved changes",
  },
}

export const Idle: Story = {
  args: {
    isOpen: true,
    variant: "light",
    status: "idle",
    primaryActions: [
      {
        label: "Save",
        onClick: fn(),
        icon: Save,
      },
    ],
    secondaryActions: [
      {
        label: "Discard",
        onClick: fn(),
      },
    ],
    label: "You have changes pending to be saved",
  },
}

export const Loading: Story = {
  args: {
    isOpen: true,
    variant: "light",
    status: "loading",
    primaryActions: [
      {
        label: "Save",
        icon: Save,
      },
    ],
    secondaryActions: [
      {
        label: "Discard",
      },
    ],
    label: "Saving...",
  },
}

export const Success: Story = {
  args: {
    isOpen: true,
    variant: "light",
    status: "success",
    primaryActions: [
      {
        label: "Save",
        icon: Save,
      },
    ],
    secondaryActions: [
      {
        label: "Discard",
      },
    ],
    label: "Your changes have been saved",
  },
}

const StatusFlowDemo = () => {
  const [status, setStatus] = useState<ActionBarStatus>("idle")
  const [label, setLabel] = useState("You have changes pending to be saved")

  const handleSave = () => {
    setStatus("loading")
    setLabel("Saving...")
    setTimeout(() => {
      setStatus("success")
      setLabel("Your changes have been saved")
    }, 2000)
  }

  const handleDiscard = () => {
    setStatus("idle")
    setLabel("You have changes pending to be saved")
  }

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle")
        setLabel("You have changes pending to be saved")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <F0ActionBar
      isOpen
      variant="light"
      status={status}
      label={label}
      primaryActions={[
        {
          label: "Save",
          icon: Save,
          onClick: handleSave,
        },
      ]}
      secondaryActions={[
        {
          label: "Discard",
          onClick: handleDiscard,
        },
      ]}
    />
  )
}

export const StatusFlow: Story = {
  render: () => <StatusFlowDemo />,
}
