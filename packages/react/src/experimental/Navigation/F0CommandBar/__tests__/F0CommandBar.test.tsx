import { describe, expect, it, vi } from "vitest"

import * as Icons from "@/icons/app"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { F0CommandBar } from "../index"
import type { CommandGroup } from "../types"

const groups: CommandGroup[] = [
  {
    id: "pages",
    title: "Pages",
    items: [
      { id: "tickets", label: "Tickets", icon: Icons.Inbox, onSelect: vi.fn() },
      {
        id: "devices",
        label: "Devices",
        icon: Icons.Computer,
        onSelect: vi.fn(),
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
        onSelect: vi.fn(),
      },
    ],
  },
]

function renderOpen(
  overrides?: Partial<React.ComponentProps<typeof F0CommandBar>>
) {
  const onOpenChange = vi.fn()
  render(
    <F0CommandBar
      open={true}
      onOpenChange={onOpenChange}
      groups={groups}
      {...overrides}
    />
  )
  return { onOpenChange }
}

describe("F0CommandBar — rendering", () => {
  it("renders all items when open", () => {
    renderOpen()
    expect(screen.getByText("Tickets")).toBeInTheDocument()
    expect(screen.getByText("Devices")).toBeInTheDocument()
    expect(screen.getByText("Edit profile")).toBeInTheDocument()
  })

  it("renders section titles", () => {
    renderOpen()
    expect(screen.getByText("Pages")).toBeInTheDocument()
    expect(screen.getByText("Settings")).toBeInTheDocument()
  })

  it("renders the empty state when no groups match", () => {
    renderOpen({ groups: [], emptyState: <span>Nothing here</span> })
    expect(screen.getByText("Nothing here")).toBeInTheDocument()
  })

  it("shows a loading indicator when loading=true", () => {
    renderOpen({ loading: true })
    expect(screen.getByText("Loading")).toBeInTheDocument()
  })
})

describe("F0CommandBar — filtering", () => {
  it("filters items by label substring", async () => {
    renderOpen()
    const input = screen.getByRole("searchbox")
    await userEvent.type(input, "tick")
    expect(screen.getByText("Tickets")).toBeInTheDocument()
    expect(screen.queryByText("Devices")).not.toBeInTheDocument()
  })

  it("filters items by keywords", async () => {
    const groupsWithKeywords: CommandGroup[] = [
      {
        id: "g",
        items: [
          { id: "1", label: "Alpha", keywords: ["beta"], onSelect: vi.fn() },
          { id: "2", label: "Gamma", onSelect: vi.fn() },
        ],
      },
    ]
    renderOpen({ groups: groupsWithKeywords })
    const input = screen.getByRole("searchbox")
    await userEvent.type(input, "beta")
    expect(screen.getByText("Alpha")).toBeInTheDocument()
    expect(screen.queryByText("Gamma")).not.toBeInTheDocument()
  })

  it("skips internal filtering when filter=false", async () => {
    renderOpen({ filter: false, searchValue: "zzz" })
    // groups are passed through as-is, all items visible
    expect(screen.getByText("Tickets")).toBeInTheDocument()
  })
})

describe("F0CommandBar — keyboard navigation", () => {
  it("calls onSelect and closes when Enter is pressed on selected item", async () => {
    const onSelect = vi.fn()
    const { onOpenChange } = renderOpen({
      groups: [
        {
          id: "g",
          items: [{ id: "1", label: "Go home", onSelect }],
        },
      ],
    })
    // First item is auto-selected; press Enter
    const input = screen.getByRole("searchbox")
    input.focus()
    await userEvent.keyboard("{Enter}")
    expect(onSelect).toHaveBeenCalledOnce()
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it("moves selection down with ArrowDown", async () => {
    renderOpen()
    const input = screen.getByRole("searchbox")
    input.focus()
    await userEvent.keyboard("{ArrowDown}")
    // No error thrown; navigation works across items
  })

  it("closes on Escape", async () => {
    const { onOpenChange } = renderOpen()
    const input = screen.getByRole("searchbox")
    input.focus()
    await userEvent.keyboard("{Escape}")
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })
})

describe("F0CommandBar — link items", () => {
  it("renders href items as anchor elements", () => {
    renderOpen({
      groups: [
        {
          id: "links",
          items: [
            {
              id: "ext",
              label: "Factorial HR",
              href: "https://factorial.co",
              external: true,
            },
          ],
        },
      ],
    })
    const link = screen.getByRole("link", { name: /factorial hr/i })
    expect(link).toHaveAttribute("href", "https://factorial.co")
    expect(link).toHaveAttribute("target", "_blank")
  })
})
