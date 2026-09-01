import type { Meta, StoryObj } from "@storybook/react-vite"

import { Plus } from "lucide-react"
import { expect, fn, userEvent, within } from "storybook/test"

import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0EmptyState } from "../F0EmptyState"

const meta = {
  component: F0EmptyState,
  title: "EmptyState",
  tags: ["stable", "!autodocs"],
  parameters: {
    a11y: { test: "error" },
  },
  argTypes: {
    ...dataTestIdArgs,
  },
} satisfies Meta<typeof F0EmptyState>

export default meta
type Story = StoryObj<typeof F0EmptyState>

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
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button", { name: "New item" }))
    await expect(args.actions![0].onClick).toHaveBeenCalledOnce()
  },
}

export const WithDataTestId: Story = {
  args: {
    title: "EmptyState with Test ID",
    description: "Start by adding your first item.",
    dataTestId: "my-test-empty-state",
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("my-test-empty-state")).toBeInTheDocument()
  },
}

export const WithAlert: Story = {
  render: () => {
    const Divider = () => (
      <div className="h-px w-80 self-center bg-f1-background-secondary" />
    )
    return (
      <div className="flex flex-col items-center gap-4">
        <F0EmptyState variant="warning" title="We couldn't load the data" />
        <Divider />
        <F0EmptyState variant="info" title="No items added yet" />
        <Divider />
        <F0EmptyState variant="critical" title="Unauthorized" />
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

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col items-center gap-8">
      <F0EmptyState
        variant="default"
        emoji="📄"
        title="No items added yet"
        description="Start by adding your first item."
        actions={[
          { label: "New item", onClick: fn(), variant: "outline", icon: Plus },
        ]}
      />
      <F0EmptyState
        variant="info"
        title="Nothing to show here"
        description="Items you add will appear in this list."
      />
      <F0EmptyState
        variant="warning"
        title="We couldn't load the data"
        description="Please try again in a moment."
      />
      <F0EmptyState
        variant="critical"
        title="Unauthorized"
        description="You don't have access to this resource."
      />
    </div>
  ),
}
