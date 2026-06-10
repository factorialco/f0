import type { Meta, StoryObj } from "@storybook/react-vite"

import image from "@storybook-static/avatars/person04.jpg"

import { F0HILActionConfirmation } from ".."

const meta = {
  title: "AI/F0HILActionConfirmation",
  component: F0HILActionConfirmation,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "An inline human-in-the-loop approve/reject row built on `F0CardRow`'s confirm/reject variant: the prompt sits on the left as the row title (with an optional avatar and description) and icon-only ✓ (confirm) / ✗ (reject) buttons pin to the trailing edge.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-[480px]">
        <Story />
      </div>
    ),
  ],
  args: {
    text: "Send the follow-up email to the candidate?",
    confirmationText: "Confirm",
    onConfirm: () => {},
    cancelText: "Cancel",
    onCancel: () => {},
  },
  argTypes: {
    text: {
      control: "text",
      description: "The prompt shown as the row title.",
    },
    description: {
      control: "text",
      description: "Optional secondary line shown beneath the title.",
    },
    avatar: {
      control: "object",
      description: "Optional avatar rendered on the left of the row.",
    },
    stackAt: {
      control: "select",
      options: ["sm", "md", "lg", "never"],
      description:
        "Container width at which the ✓/✗ actions drop onto their own line.",
      table: { defaultValue: { summary: "sm" } },
    },
    confirmationText: {
      control: "text",
      description: "Accessible label and tooltip for the confirm (✓) button.",
    },
    onConfirm: {
      action: "confirmed",
      description: "Callback fired when the confirm button is clicked",
    },
    cancelText: {
      control: "text",
      description: "Accessible label and tooltip for the reject (✗) button.",
    },
    onCancel: {
      action: "cancelled",
      description: "Callback fired when the reject button is clicked",
    },
  },
} satisfies Meta<typeof F0HILActionConfirmation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: "Send the follow-up email to the candidate?",
    confirmationText: "Confirm",
    cancelText: "Cancel",
  },
}

export const WithDescription: Story = {
  args: {
    text: "Approve 3 days off",
    description: "Requested by Jane Cooper · Jun 10–12",
    confirmationText: "Approve",
    cancelText: "Reject",
  },
}

export const WithAvatar: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "Jane",
      lastName: "Cooper",
      src: image,
    },
    text: "Jane Cooper",
    description: "Requested 3 days off",
    confirmationText: "Approve",
    cancelText: "Reject",
  },
}
