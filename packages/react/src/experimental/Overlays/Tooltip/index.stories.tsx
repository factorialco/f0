import { F0Button } from "@/components/F0Button"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TooltipInternal } from "./index"

const meta: Meta<typeof TooltipInternal> = {
  title: "Tooltip",
  component: TooltipInternal,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => <div className="flex h-32 items-center justify-center p-6">{Story()}</div>,
  ],
}

export default meta

type Story = StoryObj<typeof TooltipInternal>

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
