import type { Meta, StoryObj } from "@storybook/react-vite"

import { Plus } from "lucide-react"
import { fn } from "storybook/test"

import { OneEmptyState } from "../OneEmptyState"

const meta = {
  component: OneEmptyState,
  title: "EmptyState",
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof OneEmptyState>

export default meta
type Story = StoryObj<typeof OneEmptyState>

export const Basic: Story = {
  args: {
    title: "No items added yet",
    description: "Start by adding your first item.",
    emoji: "📄",
    actions: [
      {
        label: "New item",
        onClick: fn(),
        variant: "outline",
        icon: Plus,
      },
    ],
  },
}

export const WithAlert: Story = {
  render: () => {
    const Divider = () => (
      <div className="h-px w-80 self-center bg-f1-background-secondary" />
    )
    return (
      <div className="flex flex-col items-center gap-4">
        <OneEmptyState variant="warning" title="We couldn't load the data" />
        <Divider />
        <OneEmptyState variant="info" title="No items added yet" />
        <Divider />
        <OneEmptyState variant="critical" title="Unauthorized" />
      </div>
    )
  },
}

export const WithUpsell: Story = {
  args: {
    title: "Take your team’s skills to the next level",
    description:
      "Activate Trainings to create engaging sessions and track real progress!",
    emoji: "⚡️",
    actions: [
      {
        label: "Learn more",
        onClick: fn(),
        variant: "outline",
      },
      {
        label: "Request information",
        onClick: fn(),
        type: "upsell",
        errorMessage: {
          title: "Error",
          description: "Something went wrong",
        },
        successMessage: {
          title: "Success",
          description: "Something went right",
          buttonLabel: "Close",
          buttonOnClick: fn(),
        },
        loadingState: {
          label: "Loading...",
        },
        nextSteps: {
          title: "Next steps",
          items: [
            {
              text: "Step 1",
            },
          ],
        },
        closeLabel: "Close",
      },
    ],
  },
}
