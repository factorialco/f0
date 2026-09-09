import { userEvent } from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { Home, Inbox, Marketplace, Messages } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

import type { SidebarTab } from "../../Tabs"
import { SidebarRail, type SidebarRailProps } from "../index"

const tabs: SidebarTab[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "comms", label: "Comms", icon: Messages },
  { id: "inbox", label: "Inbox", icon: Inbox, badge: 3 },
]

const companies = [
  { id: "1", name: "Factorial" },
  { id: "2", name: "Acme Corp" },
]

const user = {
  user: { firstName: "Jordan", lastName: "Avery" },
  options: [{ label: "Preferences", href: "/preferences" }],
}

const renderRail = (props: Partial<SidebarRailProps> = {}) => {
  const onTabChange = vi.fn()
  const onChange = vi.fn()
  render(
    <SidebarRail
      company={{ companies, selected: "1", onChange }}
      tabs={tabs}
      activeTab="home"
      onTabChange={onTabChange}
      user={user}
      {...props}
    />
  )
  return { onTabChange, onChange }
}

/** The tabs, in DOM order, as the accessible names a user would read. */
const tabButtons = () =>
  tabs.map((tab) => screen.getByRole("button", { name: tab.label }))

beforeEach(() => {
  localStorage.clear()
})

describe("SidebarRail", () => {
  it("renders every module with its label", () => {
    renderRail()
    for (const tab of tabs) {
      expect(screen.getByText(tab.label)).toBeInTheDocument()
    }
  })

  it("marks only the active module as current", () => {
    renderRail({ activeTab: "comms" })
    const [home, comms, inbox] = tabButtons()
    expect(comms).toHaveAttribute("aria-current", "true")
    expect(home).not.toHaveAttribute("aria-current")
    expect(inbox).not.toHaveAttribute("aria-current")
  })

  it("reports a module change", async () => {
    const { onTabChange } = renderRail()
    await userEvent.click(screen.getByRole("button", { name: "Comms" }))
    expect(onTabChange).toHaveBeenCalledWith("comms")
  })

  it("does not report a change for the module already active — it reports the press", async () => {
    const onActiveTabPress = vi.fn()
    const { onTabChange } = renderRail({ onActiveTabPress })
    await userEvent.click(screen.getByRole("button", { name: "Home" }))
    expect(onTabChange).not.toHaveBeenCalled()
    expect(onActiveTabPress).toHaveBeenCalledTimes(1)
  })

  it("keeps one tab stop and walks the column with the arrow keys", async () => {
    renderRail({ activeTab: "comms" })
    const [home, comms, inbox] = tabButtons()
    // Roving tabindex: the active module is the only way in.
    expect(comms).toHaveAttribute("tabindex", "0")
    expect(home).toHaveAttribute("tabindex", "-1")

    comms.focus()
    await userEvent.keyboard("{ArrowDown}")
    expect(inbox).toHaveFocus()
    // ...and wraps, so the end of the list is never a dead end.
    await userEvent.keyboard("{ArrowDown}")
    expect(home).toHaveFocus()
    await userEvent.keyboard("{End}")
    expect(inbox).toHaveFocus()
    await userEvent.keyboard("{Home}")
    expect(home).toHaveFocus()
  })

  it("restores the module stored under persistKey", () => {
    localStorage.setItem("f0-sidebar-tab:rail", "inbox")
    const { onTabChange } = renderRail({ persistKey: "rail" })
    expect(onTabChange).toHaveBeenCalledWith("inbox")
  })

  it("ignores a stored module that no longer ships", () => {
    localStorage.setItem("f0-sidebar-tab:rail", "retired-module")
    const { onTabChange } = renderRail({ persistKey: "rail" })
    expect(onTabChange).not.toHaveBeenCalled()
  })

  it("shows the company as a logo, with its name only to assistive tech", () => {
    renderRail()
    // The name is not on screen…
    expect(screen.queryByText("Factorial")).not.toBeInTheDocument()
    // …but the control still says which workspace you are in.
    expect(screen.getByTestId("company-selector-button")).toHaveAttribute(
      "aria-label",
      "Factorial"
    )
  })

  it("shows the account as an avatar named after the user", () => {
    renderRail()
    expect(
      screen.getByRole("button", { name: "Jordan Avery" })
    ).toBeInTheDocument()
    expect(screen.queryByText("Jordan Avery")).not.toBeInTheDocument()
  })

  it("renders the pinned actions", async () => {
    const onClick = vi.fn()
    renderRail({
      actions: [
        {
          id: "marketplace",
          label: "Marketplace",
          icon: Marketplace,
          hasUpdates: true,
          onClick,
        },
      ],
    })
    await userEvent.click(screen.getByRole("button", { name: "Marketplace" }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("renders modules alone when there is no account and no actions", () => {
    renderRail({ user: undefined, actions: undefined })
    expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Jordan Avery" })
    ).not.toBeInTheDocument()
  })

  it("keeps every module and the account in the rail however many there are", () => {
    const tabCount = 20
    renderRail({
      tabs: Array.from({ length: tabCount }, (_, index) => ({
        id: `tab-${index}`,
        label: `Mod ${index}`,
        icon: Home,
      })),
      activeTab: "tab-0",
    })
    // No overflow menu and no truncation of the list: a rail too short for its
    // modules scrolls, so the last one and the account are both still there.
    expect(
      screen.getByRole("button", { name: `Mod ${tabCount - 1}` })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Jordan Avery" })
    ).toBeInTheDocument()
  })
})
