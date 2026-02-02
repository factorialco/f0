import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0HILActionConfirmation } from ".."

const meta = {
  title: "AI/F0HILActionConfirmation",
  component: F0HILActionConfirmation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    confirmationText: "Confirm",
    onConfirm: () => {},
    cancelText: "Cancel",
    onCancel: () => {},
  },
  argTypes: {
    text: {
      control: "text",
      description: "Optional descriptive text shown above the action buttons",
    },
    confirmationText: {
      control: "text",
      description: "Text displayed on the confirmation button",
    },
    onConfirm: {
      action: "confirmed",
      description: "Callback fired when the confirmation button is clicked",
    },
    cancelText: {
      control: "text",
      description: "Text displayed on the cancel button",
    },
    onCancel: {
      action: "cancelled",
      description: "Callback fired when the cancel button is clicked",
    },
  },
} satisfies Meta<typeof F0HILActionConfirmation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    confirmationText: "Confirm",
    cancelText: "Cancel",
  },
}

export const WithDescriptiveText: Story = {
  args: {
    text: "Are you sure you want to proceed with this action?",
    confirmationText: "Yes, proceed",
    cancelText: "No, cancel",
  },
}
