import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { Placeholder as PlaceholderIcon } from "../../../icons/app"
import { WidgetEmptyState } from "./index"

const meta: Meta<typeof WidgetEmptyState> = {
  title: "Widgets/WidgetEmptyState",
  component: WidgetEmptyState,
  tags: ["autodocs", "experimental"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-2 items-center justify-center gap-4">
      <WidgetEmptyState
        title="Widget Empty State"
        description="This is a widget empty state"
        emoji="🍆"
        actions={[
          {
            label: "Action",
            onClick: () => {},
            icon: PlaceholderIcon,
          },
        ]}
      />
      <WidgetEmptyState
        title="Widget Empty State"
        description="This is a widget empty state"
        actions={[
          {
            label: "Action",
            onClick: () => {},
            icon: PlaceholderIcon,
            variant: "outline",
          },
        ]}
      />
      <WidgetEmptyState
        title="Really really long title that we want to show that we want to show to our users for them to read"
        description="Really really long description that we want to show to our users for them to read and express their thoughts"
      />
      <WidgetEmptyState
        title="Widget Empty State"
        description="This is a widget empty state"
      />
    </div>
  ),
}

export const WithDataTestId: Story = {
  render: () => (
    <WidgetEmptyState
      title="Widget Empty State"
      description="This is a widget empty state"
      dataTestId="widget-empty-state-test-id"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByTestId("widget-empty-state-test-id")
    ).toBeInTheDocument()
  },
}
