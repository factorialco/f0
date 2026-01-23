import type { Meta, StoryObj } from "@storybook/react-vite"

<<<<<<<< HEAD:packages/react/src/sds/ai/F0HILActionConfirmation/__stories__/F0HILActionConfirmation.stories.tsx
import { F0HILActionConfirmation } from ".."

const meta = {
  title: "AI/F0HILActionConfirmation",
  component: F0HILActionConfirmation,
========
import { HILActionConfirmation } from "../components/HILActionConfirmation"

const meta = {
  title: "AI/F0AiChat/HILActionConfirmation",
  component: HILActionConfirmation,
>>>>>>>> 7ba2e4a6e (feat: introduce F0 AI components and refactor existing AI chat structure):packages/react/src/ai/F0AiChat/__stories__/HILActionConfirmation.stories.tsx
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
