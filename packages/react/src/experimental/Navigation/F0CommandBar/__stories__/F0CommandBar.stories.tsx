import { useState } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"

import * as Icons from "@/icons/app"

import { SearchBar } from "../../../../patterns/Navigation/Sidebar/Searchbar"
import { F0CommandBar } from "../index"
import type { CommandGroup } from "../types"

const meta = {
  title: "Components/F0CommandBar",
  component: F0CommandBar,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof F0CommandBar>

export default meta

type Story = StoryObj<typeof meta>

const PAGE_GROUPS: CommandGroup[] = [
  {
    id: "pages",
    title: "Pages",
    items: [
      {
        id: "tickets",
        label: "Tickets",
        icon: Icons.Inbox,
        onSelect: () => {},
      },
      {
        id: "devices",
        label: "Devices",
        icon: Icons.Computer,
        onSelect: () => {},
      },
      { id: "people", label: "People", icon: Icons.People, onSelect: () => {} },
      {
        id: "settings",
        label: "Settings",
        icon: Icons.Settings,
        onSelect: () => {},
      },
    ],
  },
  {
    id: "settings",
    title: "Settings",
    items: [
      {
        id: "notifications",
        label: "Notification preferences",
        icon: Icons.Bell,
        onSelect: () => {},
      },
      {
        id: "profile",
        label: "Edit profile",
        icon: Icons.Person,
        onSelect: () => {},
      },
    ],
  },
]

// Wrapper to show SearchBar trigger + F0CommandBar together (the real integration pattern)
function CommandBarWithTrigger({ groups }: { groups: CommandGroup[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-4">
      <div style={{ width: 260 }}>
        <SearchBar
          onClick={() => setOpen(true)}
          placeholder="Search..."
          shortcut={["cmd", "k"]}
        />
      </div>
      <F0CommandBar open={open} onOpenChange={setOpen} groups={groups} />
      <p className="mt-4 text-sm text-f1-foreground-secondary">
        Click the search bar or press ⌘K to open the command bar.
      </p>
    </div>
  )
}

export const Default: Story = {
  render: () => <CommandBarWithTrigger groups={PAGE_GROUPS} />,
  args: {
    open: false,
    onOpenChange: () => {},
    groups: PAGE_GROUPS,
  },
}

// Dark-mode toggle story — demonstrates the exact screenshot UX
function CommandBarWithDarkModeCommand() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  const groups: CommandGroup[] = [
    ...PAGE_GROUPS,
    {
      id: "devtools",
      title: "Developer tools",
      items: [
        {
          id: "toggle-dark-mode",
          label: dark ? "Disable dark-mode" : "Enable dark-mode",
          icon: Icons.Moon,
          onSelect: () => setDark((d) => !d),
        },
      ],
    },
  ]

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-f1-background p-4">
        <div style={{ width: 260 }}>
          <SearchBar
            onClick={() => setOpen(true)}
            placeholder="Search..."
            shortcut={["cmd", "k"]}
          />
        </div>
        <F0CommandBar open={open} onOpenChange={setOpen} groups={groups} />
        <p className="mt-4 text-sm text-f1-foreground-secondary">
          Open the command bar and select{" "}
          <strong>"{dark ? "Disable" : "Enable"} dark-mode"</strong> to toggle.
          Current theme: <strong>{dark ? "dark" : "light"}</strong>
        </p>
      </div>
    </div>
  )
}

export const WithDarkModeCommand: Story = {
  render: () => <CommandBarWithDarkModeCommand />,
  args: {
    open: false,
    onOpenChange: () => {},
    groups: [],
  },
}

export const Loading: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    groups: [],
    loading: true,
  },
}

export const Empty: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    groups: [],
    searchValue: "zzz",
    filter: false,
  },
}

export const CustomEmptyState: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    groups: [],
    searchValue: "something",
    filter: false,
    emptyState: <span>No matches — try a different search term</span>,
  },
}
