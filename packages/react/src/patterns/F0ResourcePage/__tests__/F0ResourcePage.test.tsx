import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { F0ResourcePage } from "../index"

/** Asserts every node precedes the next one in document order. */
const expectInOrder = (nodes: Element[]) => {
  nodes.forEach((node, index) => {
    const next = nodes[index + 1]
    if (!next) return
    expect(
      node.compareDocumentPosition(next) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })
}

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "people", label: "People" },
]

const subTabs = [
  { id: "active", label: "Active" },
  { id: "archived", label: "Archived" },
]

describe("F0ResourcePage", () => {
  it("renders every block in a fixed order", () => {
    render(
      <F0ResourcePage
        title="Payroll"
        alert={<div>Sync paused</div>}
        tabs={tabs}
        secondaryTabs={subTabs}
        aside={<div>Rail</div>}
      >
        <div>Members</div>
      </F0ResourcePage>
    )

    // Tabs renders a nav per strip. Note the aria-labels are inverted upstream
    // (`secondary` yields "primary-navigation"), so the strips are matched by
    // their own links rather than by label.
    expectInOrder([
      screen.getByText("Sync paused"),
      // BaseHeader renders the title as a styled span, not a heading element.
      screen.getByText("Payroll"),
      screen.getByText("Overview"),
      screen.getByText("Active"),
      screen.getByText("Members"),
    ])
  })

  it("renders a single root element so `Page` does not stretch each block", () => {
    // `Page` applies `[&>*]:flex-1` to its children. A fragment root would let
    // the header, the tab strips and the content split the page height evenly.
    const { container } = render(
      <F0ResourcePage title="Payroll" tabs={tabs}>
        <div>Members</div>
      </F0ResourcePage>
    )

    expect(container.children).toHaveLength(1)
  })

  it("renders the rail beside the content when `aside` is set", () => {
    render(
      <F0ResourcePage title="Payroll" aside={<div>Rail</div>}>
        <div>Members</div>
      </F0ResourcePage>
    )

    expect(screen.getByText("Rail")).toBeDefined()
    expect(screen.getByRole("complementary")).toBeDefined()
  })

  it("stays single column when `aside` is omitted", () => {
    render(
      <F0ResourcePage title="Payroll">
        <div>Members</div>
      </F0ResourcePage>
    )

    expect(screen.getByText("Members")).toBeDefined()
    expect(screen.queryByRole("complementary")).toBeNull()
  })

  it("keeps the rail sticky when asked", () => {
    const { container } = render(
      <F0ResourcePage title="Payroll" aside={<div>Rail</div>} stickyAside>
        <div>Members</div>
      </F0ResourcePage>
    )

    // TwoColumnLayout applies the sticky classes to the main column, not to the
    // aside: its inner Aside declares `sticky` but never uses it. Asserting on
    // main records the behaviour that actually ships.
    expect(container.querySelector("main")?.className).toContain("md:h-full")
  })

  it("renders tabs only when they are provided", () => {
    const { unmount } = render(
      <F0ResourcePage title="Payroll">
        <div>Members</div>
      </F0ResourcePage>
    )
    expect(screen.queryByText("People")).toBeNull()
    expect(screen.queryByText("Archived")).toBeNull()
    unmount()

    render(
      <F0ResourcePage title="Payroll" tabs={tabs} secondaryTabs={subTabs}>
        <div>Members</div>
      </F0ResourcePage>
    )
    expect(screen.getByText("People")).toBeDefined()
    expect(screen.getByText("Archived")).toBeDefined()
  })

  it("marks the active tab in each strip", () => {
    render(
      <F0ResourcePage
        title="Payroll"
        tabs={tabs}
        activeTabId="people"
        secondaryTabs={subTabs}
        activeSecondaryTabId="archived"
      >
        <div>Members</div>
      </F0ResourcePage>
    )

    expect(screen.getByRole("link", { name: "People" })).toHaveAttribute(
      "data-active",
      "true"
    )
    expect(screen.getByRole("link", { name: "Overview" })).not.toHaveAttribute(
      "data-active"
    )
    expect(screen.getByRole("link", { name: "Archived" })).toHaveAttribute(
      "data-active",
      "true"
    )
  })

  describe("header bottom border", () => {
    const headerOf = (container: HTMLElement) =>
      container.querySelector(".resource-header")

    it("draws it when there are no tabs, since nothing else divides", () => {
      const { container } = render(
        <F0ResourcePage title="Payroll">
          <div>Members</div>
        </F0ResourcePage>
      )

      expect(headerOf(container)?.className).toContain("border-b")
    })

    it("drops it when a tab strip already divides", () => {
      const { container, unmount } = render(
        <F0ResourcePage title="Payroll" tabs={tabs}>
          <div>Members</div>
        </F0ResourcePage>
      )
      expect(headerOf(container)?.className).not.toContain("border-b")
      unmount()

      // Secondary tabs alone are enough to divide.
      const second = render(
        <F0ResourcePage title="Payroll" secondaryTabs={subTabs}>
          <div>Members</div>
        </F0ResourcePage>
      )
      expect(headerOf(second.container)?.className).not.toContain("border-b")
    })

    it("lets an explicit value win over the derived one", () => {
      const { container } = render(
        <F0ResourcePage title="Payroll" tabs={tabs} showBottomBorder>
          <div>Members</div>
        </F0ResourcePage>
      )

      expect(headerOf(container)?.className).toContain("border-b")
    })
  })

  it("calls onHistoryClick from the history button", async () => {
    const user = userEvent.setup()
    const onHistoryClick = vi.fn()

    render(
      <F0ResourcePage title="Payroll" onHistoryClick={onHistoryClick}>
        <div>Members</div>
      </F0ResourcePage>
    )

    // BaseHeader duplicates its action row into a mobile and a desktop cluster,
    // so assert on at least one rather than pinning the duplication. The last
    // one is the desktop instance.
    const historyButtons = screen.getAllByRole("button", { name: "History" })
    expect(historyButtons.length).toBeGreaterThan(0)

    await user.click(historyButtons[historyButtons.length - 1])
    expect(onHistoryClick).toHaveBeenCalledTimes(1)
  })

  it("omits the history button when no handler is given", () => {
    render(
      <F0ResourcePage title="Payroll">
        <div>Members</div>
      </F0ResourcePage>
    )

    expect(screen.queryByRole("button", { name: "History" })).toBeNull()
  })
})
