import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { action } from "storybook/actions"

import { Menu, Messages } from "@/icons/app"

import { SidebarTab, SidebarTabs } from "./index"

const tabs: SidebarTab[] = [
  { id: "main", label: "Main", icon: Menu },
  { id: "messages", label: "Messages", icon: Messages },
]

/** The product's French strings: a little wider than the 216px row. */
const borderlineTabs: SidebarTab[] = [
  { id: "main", label: "Menu", icon: Menu },
  { id: "messages", label: "Discussions", icon: Messages },
]

const meta = {
  title: "Navigation/Sidebar/Tabs",
  component: SidebarTabs,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      // The real sidebar width. A `w-fit` wrapper hugs the *collapsed* row, so
      // the probe can never fit and every story is pinned to the icon-only
      // state — the one thing the product does not render.
      <div className="w-[var(--ds-sidebar-width)] bg-f1-background-tertiary py-3">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof SidebarTabs>

export default meta
type Story = StoryObj<typeof meta>

const Interactive = ({
  initial = "main",
  items = tabs,
}: {
  initial?: string
  items?: SidebarTab[]
}) => {
  const [active, setActive] = useState(initial)
  return <SidebarTabs tabs={items} activeTab={active} onTabChange={setActive} />
}

export const Default: Story = {
  args: {
    tabs,
    activeTab: "main",
    onTabChange: action("tab changed"),
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
      />
    )
  },
}

/**
 * The product's French pair at the real sidebar width: the labels need a few
 * pixels more than the row has, so they must collapse to icons. A fixture for
 * that margin rather than a reproduction — the bug needs a measure taken before
 * the labels reach their final width, which a page load does not produce.
 */
export const LabelsJustOverTheRow: Story = {
  ...Default,
  render: () => <Interactive items={borderlineTabs} />,
}
