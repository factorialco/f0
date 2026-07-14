import type { Meta, StoryObj } from "@storybook/react-vite"

import { ReactNode } from "react"
import { action } from "storybook/actions"

import { New, People } from "@/icons/app"

import { SidebarTabPanel } from "./SidebarTabPanel"
import { SidebarTabPanelGroup } from "./types"

/** A plain row, styled to match the sidebar's item paddings. */
const Row = (label: string): ReactNode => (
  <button
    type="button"
    className="flex w-full cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 text-left text-f1-foreground-secondary transition-colors hover:bg-f1-background-secondary"
  >
    {label}
  </button>
)

const item = (label: string) => ({
  id: label,
  searchText: label,
  content: Row(label),
})

const exampleGroups: SidebarTabPanelGroup[] = [
  {
    id: "dms",
    title: "Direct messages",
    items: [
      item("Roger Campos"),
      item("Raúl Sigüenza"),
      item("María José Fernández"),
    ],
  },
  {
    id: "channels",
    title: "Channels",
    items: [item("General"), item("Engineering"), item("Design")],
  },
]

const actions = [
  { label: "New chat", icon: New, onClick: action("new chat") },
  { label: "New group", icon: People, onClick: action("new group") },
]

const meta: Meta<typeof SidebarTabPanel> = {
  title: "Patterns/Navigation/Sidebar/SidebarTabPanel",
  component: SidebarTabPanel,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="w-[var(--ds-sidebar-width)] bg-f1-background py-3">
        <Story />
      </div>
    ),
  ],
  args: {
    groups: exampleGroups,
  },
}

export default meta

type Story = StoryObj<typeof SidebarTabPanel>

/** Search above the groups (default order), with top actions below it. */
export const Default: Story = {
  args: {
    actions,
    searchPlaceholder: "Search messages",
    noResultsLabel: "No chats found",
    animateItems: true,
  },
}

/** No search box — just actions and groups. */
export const WithoutSearch: Story = {
  args: { actions },
}

/** Whole-panel loading: the search stays at the top, the skeleton replaces the groups. */
export const Loading: Story = {
  args: {
    groups: [],
    loading: true,
    searchPlaceholder: "Search messages",
    skeleton: (
      <div className="px-1.5 text-sm text-f1-foreground-tertiary">Loading…</div>
    ),
  },
}

/** No items at all: the empty state is shown. */
export const Empty: Story = {
  args: {
    groups: [],
    emptyState: (
      <div className="flex flex-col items-center gap-1 px-4 py-10 text-center">
        <span className="text-3xl" role="img" aria-hidden="true">
          💬
        </span>
        <p className="font-medium text-f1-foreground">No chats yet</p>
        <p className="text-sm text-f1-foreground-secondary">
          Start a new conversation to see it here.
        </p>
      </div>
    ),
  },
}

/** A titleless (root) group renders its items without a collapsible header. */
export const RootGroup: Story = {
  args: {
    groups: [
      { id: "root", items: [item("Home"), item("Inbox"), item("Calendar")] },
      ...exampleGroups,
    ],
  },
}
