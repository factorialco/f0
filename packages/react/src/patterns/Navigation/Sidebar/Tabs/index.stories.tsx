import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { action } from "storybook/actions"

import { Menu, Messages } from "@/icons/app"

import { SidebarTab, SidebarTabs } from "./index"

const tabs: SidebarTab[] = [
  { id: "main", label: "Main", icon: Menu },
  { id: "messages", label: "Messages", icon: Messages },
]

const meta = {
  title: "Navigation/Sidebar/Tabs",
  component: SidebarTabs,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-fit bg-f1-background-tertiary py-3">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof SidebarTabs>

export default meta
type Story = StoryObj<typeof meta>

const Interactive = ({ initial = "main" }: { initial?: string }) => {
  const [active, setActive] = useState(initial)
  return (
    <SidebarTabs
      tabs={tabs}
      activeTab={active}
      onTabChange={setActive}
      search={{ placeholder: "Search...", onClick: action("search clicked") }}
    />
  )
}

export const Default: Story = {
  args: {
    tabs,
    activeTab: "main",
    onTabChange: action("tab changed"),
    search: { placeholder: "Search...", onClick: action("search clicked") },
  },
  render: () => <Interactive initial="main" />,
}

export const MessagesActive: Story = {
  ...Default,
  render: () => <Interactive initial="messages" />,
}

export const WithBadges: Story = {
  ...Default,
  render: () => {
    const badged: SidebarTab[] = [
      { id: "main", label: "Main", icon: Menu },
      { id: "messages", label: "Messages", icon: Messages, badge: 12 },
    ]
    return (
      <SidebarTabs
        tabs={badged}
        activeTab="main"
        onTabChange={action("tab changed")}
        search={{ onClick: action("search clicked") }}
      />
    )
  },
}
