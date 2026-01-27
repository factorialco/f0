import type { Meta, StoryObj } from "@storybook/react-vite"

import { SidebarIcon } from "./index"

const meta: Meta<typeof SidebarIcon> = {
  title: "Sidebar/Icon",
  component: SidebarIcon,
  tags: ["autodocs", "experimental", "no-sidebar"],
}

export default meta

type Story = StoryObj<typeof SidebarIcon>

export const Default: Story = {
  args: {
    isExpanded: true,
  },
}
