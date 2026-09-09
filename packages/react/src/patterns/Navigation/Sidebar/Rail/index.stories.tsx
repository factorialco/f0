import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { action } from "storybook/actions"

import {
  Calendar,
  Comment,
  Home,
  Hub,
  Inbox,
  Marketplace,
  Shield,
} from "@/icons/app"

import * as SidebarFooterStories from "../Footer/index.stories"
import * as SidebarHeaderStories from "../Header/index.stories"
import { SidebarRail } from "./index"

const companies = SidebarHeaderStories.Default.args.companies

const user = {
  user: SidebarFooterStories.Default.args.user,
  options: SidebarFooterStories.Default.args.options,
}

const actions = [
  {
    id: "marketplace",
    label: "Marketplace",
    icon: Marketplace,
    onClick: action("Marketplace"),
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    onClick: action("Security"),
  },
]

/**
 * Controlled from the outside, exactly as a host does it — the rail never owns
 * the selection, so a story that fakes it would be testing the wrong thing.
 */
const Controlled = (args: React.ComponentProps<typeof SidebarRail>) => {
  const [tab, setTab] = useState(args.activeTab)
  const [selected, setSelected] = useState(args.company.selected ?? "1")
  return (
    <SidebarRail
      {...args}
      activeTab={tab}
      onTabChange={setTab}
      company={{ ...args.company, selected, onChange: setSelected }}
    />
  )
}

const meta = {
  title: "Navigation/Sidebar/Rail",
  component: SidebarRail,
  tags: ["autodocs", "experimental"],
  parameters: { layout: "centered" },
  render: (args) => <Controlled {...args} />,
  decorators: [
    (Story) => (
      <div className="flex h-[520px] rounded border border-solid border-f1-border-secondary bg-f1-background">
        <Story />
      </div>
    ),
  ],
  args: {
    company: { companies, selected: "1", onChange: action("Company changed") },
    activeTab: "home",
    onTabChange: action("Tab changed"),
    tabs: [
      { id: "home", label: "Home", icon: Home },
      { id: "comms", label: "Comms", icon: Comment },
      { id: "inbox", label: "Inbox", icon: Inbox },
      { id: "cal", label: "Cal", icon: Calendar },
      { id: "hub", label: "Hub", icon: Hub },
    ],
    actions,
    user,
  },
} satisfies Meta<typeof SidebarRail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

/** Unread markers sit over the icon box, not beside the label. */
export const WithBadges: Story = {
  args: {
    tabs: [
      { id: "home", label: "Home", icon: Home },
      { id: "comms", label: "Comms", icon: Comment, badge: 4 },
      { id: "inbox", label: "Inbox", icon: Inbox, badge: 12 },
      { id: "cal", label: "Cal", icon: Calendar },
      { id: "hub", label: "Hub", icon: Hub },
    ],
  },
}

/** More modules than fit: the rail scrolls, and the account rides with it. */
export const ManyTabs: Story = {
  args: {
    tabs: Array.from({ length: 14 }, (_, index) => ({
      id: `tab-${index}`,
      label: `Mod ${index + 1}`,
      icon: Home,
    })),
  },
  decorators: [
    (Story) => (
      <div className="flex h-[320px] rounded border border-solid border-f1-border-secondary bg-f1-background">
        <Story />
      </div>
    ),
  ],
}

/**
 * A label wider than the rail is truncated; the full name stays in the title
 * and in the accessible name. There is nothing to measure and nothing to hide
 * — at 48px a translation can only ever be cut.
 */
export const LongLabels: Story = {
  args: {
    tabs: [
      { id: "home", label: "Inicio", icon: Home },
      { id: "comms", label: "Comunicaciones", icon: Comment },
      { id: "inbox", label: "Bandeja de entrada", icon: Inbox },
    ],
  },
}

/** Nothing to switch to: the logo is identity, not a control. */
export const SingleCompany: Story = {
  args: {
    company: {
      companies: [companies[0]],
      selected: "1",
      onChange: action("Company changed"),
    },
  },
}

/** Without a rail action list or an account, the rail is modules alone. */
export const ModulesOnly: Story = {
  args: { actions: undefined, user: undefined },
}
