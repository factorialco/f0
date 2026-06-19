import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { Menu, Messages } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { SidebarTab, SidebarTabs } from "../index"

const tabs: SidebarTab[] = [
  { id: "main", label: "Main", icon: Menu },
  { id: "messages", label: "Messages", icon: Messages },
]

const renderTabs = (
  overrides: Partial<React.ComponentProps<typeof SidebarTabs>> = {}
) =>
  render(
    <SidebarTabs
      tabs={tabs}
      activeTab="main"
      onTabChange={vi.fn()}
      search={{}}
      {...overrides}
    />
  )

describe("SidebarTabs", () => {
  it("renders a labelled tab group with all tabs", () => {
    renderTabs()
    expect(
      screen.getByRole("group", { name: "Sidebar sections" })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Main" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Messages" })).toBeInTheDocument()
  })

  it("marks the active tab as pressed (its label expands)", () => {
    renderTabs({ activeTab: "main" })
    expect(screen.getByRole("button", { name: "Main" })).toHaveAttribute(
      "aria-pressed",
      "true"
    )
    expect(screen.getByRole("button", { name: "Messages" })).toHaveAttribute(
      "aria-pressed",
      "false"
    )
  })

  it("calls onTabChange when another tab is clicked", async () => {
    const onTabChange = vi.fn()
    renderTabs({ onTabChange })
    await userEvent.click(screen.getByRole("button", { name: "Messages" }))
    expect(onTabChange).toHaveBeenCalledWith("messages")
  })

  it("renders the search action and fires its onClick", async () => {
    const onClick = vi.fn()
    renderTabs({ search: { onClick } })
    await userEvent.click(screen.getByRole("button", { name: "Search" }))
    expect(onClick).toHaveBeenCalled()
  })

  it("shows an unread indicator on a tab when it has unread", () => {
    renderTabs({
      tabs: [tabs[0], { ...tabs[1], badge: 5 }],
      activeTab: "main",
    })
    expect(
      screen
        .getByRole("button", { name: "Messages" })
        .querySelector(".bg-f1-background-critical-bold")
    ).not.toBeNull()
  })
})
