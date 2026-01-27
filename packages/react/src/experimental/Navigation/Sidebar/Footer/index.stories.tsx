import type { Meta, StoryObj } from "@storybook/react-vite"

import { action } from "storybook/actions"

import * as Icons from "@/icons/app"

import { SidebarFooter } from "./index"

const meta = {
  title: "Sidebar/SidebarFooter",
  component: SidebarFooter,
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof SidebarFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    user: {
      firstName: "Dani",
      lastName: "Moreno Frontend kind of long name",
      avatarUrl: "/avatars/person04.jpg",
    },
    showActivityButton: true,
    hasActivityUpdates: true,
    onActivityButtonClick: action("Activity button clicked"),
    options: [
      { label: "Preferences", href: "/preferences", icon: Icons.Sliders },
      { label: "Notifications", href: "/notifications", icon: Icons.Bell },
      { type: "separator" },
      { label: "Logout", href: "/logout", icon: Icons.Exit, critical: true },
    ],
  },
}
