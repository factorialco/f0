import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"

import { Tooltip } from "./index"

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="flex h-32 items-center justify-center p-6">{Story()}</div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Basic: Story = {
  args: {
    label: "View planmed hours",
    description: "View a breakdown of planned working hours.",
    children: <F0Button variant="outline" label="Planned hours" />,
  },
}

export const WithShortcut: Story = {
  args: {
    label: "Collapse sidebar",
    children: <F0Button variant="outline" label="Hover me" />,
    shortcut: ["cmd", "."],
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Basic.args,
    dataTestId: "tooltip-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Tooltip trigger should have the test id
    await expect(canvas.getByTestId("tooltip-test-id")).toBeInTheDocument()
  },
}
