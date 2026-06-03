import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0HILActionConfirmation } from ".."

const meta = {
  title: "AI/F0HILActionConfirmation",
  component: F0HILActionConfirmation,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  args: {
    text: "Do you want to proceed?",
    confirmationText: "Confirm",
    onConfirm: () => {},
    cancelText: "Cancel",
    onCancel: () => {},
  },
  argTypes: {
    text: {
      control: "text",
      description:
        "The confirmation text shown alongside the action buttons (required)",
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
