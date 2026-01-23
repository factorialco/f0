import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useState } from "react"

import { ApplicationFrame } from "@/experimental/Navigation/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/experimental/Navigation/ApplicationFrame/index.stories"
import { Placeholder } from "@/icons/app"
import CrossIcon from "@/icons/app/Cross"

import { DialogNotificationInternal } from "../internal/DialogNotification"
import { dialogNotificationTypes } from "../types"

const meta: Meta<typeof DialogNotificationInternal> = {
  title: "Dialog/Internals/DialogNotification",
  component: DialogNotificationInternal,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs", "experimental", "internal"],
  argTypes: {
    type: {
      description: "The type of the notification.",
      control: "select",
      options: dialogNotificationTypes,
      table: { defaultValue: { summary: "info" } },
    },
    title: {
      description: "Title of the notification.",
      control: "text",
    },
    description: {
      description: "Description of the notification.",
      control: "text",
    },
    isOpen: {
      description: "Whether the dialog is open",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    onClose: {
      description: "Callback when dialog is closed",
      action: "onClose",
    },
    primaryAction: {
      description: "Primary action",
      control: "object",
    },
    secondaryAction: {
      description: "Secondary action",
      control: "object",
    },
  },
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
            <button
              className="rounded-md border border-solid border-f1-border-secondary bg-f1-background-secondary p-2"
              onClick={handleOpen}
            >
              Open Notification
            </button>
            <Story args={{ ...rest, isOpen: open, onClose: handleClose }} />
          </div>
        </ApplicationFrame>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof DialogNotificationInternal>

export const Default: Story = {
  args: {
    isOpen: true,
    title: "Team Status",
    description: "This is a notification description.",
    type: "info",
    primaryAction: {
      label: "Confirm",
      icon: Placeholder,
      onClick: () => {},
    },
    secondaryAction: {
      label: "Cancel",
      icon: CrossIcon,
      onClick: () => {},
    },
  },
}

export const Critical: Story = {
  args: {
    ...Default.args,
    type: "critical",
    title: "Critical Error",
    description: "Something went wrong.",
  },
}

export const Warning: Story = {
  args: {
    ...Default.args,
    type: "warning",
    title: "Warning",
    description: "Proceed with caution.",
  },
}

export const Positive: Story = {
  args: {
    ...Default.args,
    type: "positive",
    title: "Success",
    description: "Operation completed successfully.",
  },
}
