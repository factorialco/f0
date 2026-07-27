import { userEvent } from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

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

  it("shows an unread indicator on a tab when it has unread", () => {
    renderTabs({
      tabs: [tabs[0], { ...tabs[1], badge: 5 }],
      activeTab: "main",
    })
    // The unread dot uses the special-highlight colour and shows on any tab
    // with unread (the pill is also absolutely positioned, so we target the
    // dot's colour specifically).
    expect(
      screen
        .getByRole("button", { name: "Messages" })
        .querySelector(".bg-f1-special-highlight")
    ).not.toBeNull()
    expect(
      screen
        .getByRole("button", { name: "Main" })
        .querySelector(".bg-f1-special-highlight")
    ).toBeNull()
  })

  // The label wrapper is a grid column animating 0fr (collapsed) ↔ 1fr
  // (revealed) — assert through it.
  const labelState = (name: string) =>
    screen
      .getByRole("button", { name })
      .querySelector(".grid")
      ?.className.includes("grid-cols-[1fr]")
      ? "revealed"
      : "collapsed"

  it("reveals inactive labels when every label fits in the row", () => {
    // jsdom reports zero widths, so the probe (0) always "fits" the group (0).
    renderTabs({ activeTab: "main" })
    expect(labelState("Main")).toBe("revealed")
    expect(labelState("Messages")).toBe("revealed")
  })

  it("collapses inactive labels to icon-only when they don't fit", () => {
    const { container, rerender } = renderTabs({ activeTab: "main" })

    // Make the probe wider than the group, then change a label so the measure
    // effect re-runs with these dimensions.
    const probe = container.querySelector(".invisible") as HTMLElement
    const group = screen.getByRole("group", { name: "Sidebar sections" })
    Object.defineProperty(probe, "scrollWidth", { value: 500 })
    Object.defineProperty(group, "clientWidth", { value: 200 })
    rerender(
      <SidebarTabs
        tabs={[tabs[0], { ...tabs[1], label: "Messages!" }]}
        activeTab="main"
        onTabChange={vi.fn()}
      />
    )

    // The active tab keeps its label; the inactive one falls back to the icon.
    expect(labelState("Main")).toBe("revealed")
    expect(labelState("Messages!")).toBe("collapsed")
  })
})

describe("SidebarTabs persistence", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("stores the active tab under the persist key", () => {
    const { rerender } = renderTabs({ persistKey: "demo" })
    expect(localStorage.getItem("f0-sidebar-tab:demo")).toBe("main")

    // The owner switches tab (controlled) — the stored value follows.
    rerender(
      <SidebarTabs
        tabs={tabs}
        activeTab="messages"
        onTabChange={vi.fn()}
        persistKey="demo"
      />
    )
    expect(localStorage.getItem("f0-sidebar-tab:demo")).toBe("messages")
  })

  it("restores the stored tab on mount", () => {
    localStorage.setItem("f0-sidebar-tab:demo", "messages")
    const onTabChange = vi.fn()
    renderTabs({ persistKey: "demo", onTabChange })
    expect(onTabChange).toHaveBeenCalledWith("messages")
  })

  it("ignores a stored tab that no longer exists in the tab set", () => {
    localStorage.setItem("f0-sidebar-tab:demo", "one")
    const onTabChange = vi.fn()
    renderTabs({ persistKey: "demo", onTabChange })
    expect(onTabChange).not.toHaveBeenCalled()
  })

  it("does nothing without a persist key", () => {
    const onTabChange = vi.fn()
    renderTabs({ onTabChange })
    expect(onTabChange).not.toHaveBeenCalled()
    expect(localStorage.length).toBe(0)
  })
})
