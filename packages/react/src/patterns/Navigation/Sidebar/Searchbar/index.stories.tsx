import type { Meta, StoryObj } from "@storybook/react-vite"

import { action } from "storybook/actions"

import * as Icons from "@/icons/app"

import { SearchBar } from "./index"

const meta = {
  title: "Sidebar/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[240px] bg-f1-background-tertiary p-3">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs", "experimental", "no-sidebar"],
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

/** Trigger-only: consumer manages open state externally (previous behaviour). */
export const Default: Story = {
  args: {
    placeholder: "Search...",
    onClick: action("SearchBar clicked"),
    shortcut: ["cmd", "k"],
  },
}

/** Batteries-included: pass `groups` and the SearchBar owns the command bar + ⌘K. */
export const WithCommandBar: Story = {
  args: {
    placeholder: "Search...",
    shortcut: ["cmd", "k"],
    groups: [
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
          {
            id: "people",
            label: "People",
            icon: Icons.People,
            onSelect: () => {},
          },
        ],
      },
      {
        id: "settings",
        title: "Settings",
        items: [
          {
            id: "profile",
            label: "Edit profile",
            icon: Icons.Person,
            onSelect: () => {},
          },
        ],
      },
    ],
  },
}
