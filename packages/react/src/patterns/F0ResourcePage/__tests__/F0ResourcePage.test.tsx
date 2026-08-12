import { describe, expect, it, vi } from "vitest"

import {
  act,
  zeroRender as render,
  screen,
  userEvent,
} from "@/testing/test-utils"

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

const railSections = { items: [{ id: "members", label: "Rail" }] }

describe("F0ResourcePage", () => {
  it("renders every block in a fixed order", () => {
    render(
      <F0ResourcePage
        title="Payroll"
        alert={<div>Sync paused</div>}
        tabs={tabs}
        aside={railSections}
      >
        <div>Members</div>
      </F0ResourcePage>
    )

    expectInOrder([
      screen.getByText("Sync paused"),
      // BaseHeader renders the title as a styled span, not a heading element.
      screen.getByText("Payroll"),
      screen.getByText("Overview"),
      screen.getByText("Members"),
    ])
  })

  it("renders a single root element so `Page` does not stretch each block", () => {
    // `Page` applies `[&>*]:flex-1` to its children. A fragment root would let
    // the header, the tab strip and the content split the page height evenly.
    const { container } = render(
      <F0ResourcePage title="Payroll" tabs={tabs}>
        <div>Members</div>
      </F0ResourcePage>
    )

    expect(container.children).toHaveLength(1)
  })

  it("renders the rail beside the content when `aside` is set", () => {
    render(
      <F0ResourcePage title="Payroll" aside={railSections}>
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

  it("isolates the content so its z-indexes stay under the sticky chrome", () => {
    // Buttons carry an internal flex item at z-20. Without its own stacking
    // context the content would hand that value to the page, where it ties
    // with the chrome's z-20 and, being later in the DOM, paints over the
    // header as the reader scrolls. Both content branches must isolate.
    const withRail = render(
      <F0ResourcePage title="Payroll" aside={railSections}>
        <div>Members</div>
      </F0ResourcePage>
    )
    expect(
      withRail.container.querySelector("main")?.parentElement?.className
    ).toContain("isolate")
    withRail.unmount()

    const withoutRail = render(
      <F0ResourcePage title="Payroll">
        <div>Members</div>
      </F0ResourcePage>
    )
    expect(withoutRail.container.querySelector("section")?.className).toContain(
      "isolate"
    )
  })

  it("pins the rail under the chrome and lets it scroll inside what is left", () => {
    const { container } = render(
      <F0ResourcePage title="Payroll" aside={railSections}>
        <div>Members</div>
      </F0ResourcePage>
    )

    const rail = container.querySelector("aside > div")
    expect(rail?.className).toContain("sticky")
    expect(rail?.className).toContain("overflow-y-auto")
  })

  it("renders tabs only when they are provided", () => {
    const { unmount } = render(
      <F0ResourcePage title="Payroll">
        <div>Members</div>
      </F0ResourcePage>
    )
    expect(screen.queryByText("People")).toBeNull()
    unmount()

    render(
      <F0ResourcePage title="Payroll" tabs={tabs}>
        <div>Members</div>
      </F0ResourcePage>
    )
    expect(screen.getByText("People")).toBeDefined()
  })

  it("marks the active tab", () => {
    render(
      <F0ResourcePage title="Payroll" tabs={tabs} activeTabId="people">
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
  })

  describe("tab content", () => {
    const contentTabs = [
      {
        id: "overview",
        label: "Overview",
        content: <div>Work information</div>,
        aside: { items: [{ id: "work", label: "Work" }] },
      },
      {
        id: "people",
        label: "People",
        content: <div>Members table</div>,
        aside: { items: [{ id: "members", label: "Members" }] },
      },
    ]

    it("shows the first tab's content when no tab is named", () => {
      render(<F0ResourcePage title="Payroll" tabs={contentTabs} />)

      expect(screen.getByText("Work information")).toBeDefined()
      expect(screen.queryByText("Members table")).toBeNull()
    })

    it("opens the tab it is told to", () => {
      render(
        <F0ResourcePage
          title="Payroll"
          tabs={contentTabs}
          activeTabId="people"
        />
      )

      expect(screen.getByText("Members table")).toBeDefined()
      expect(screen.queryByText("Work information")).toBeNull()
    })

    it("follows a click with no state from the consumer", async () => {
      const user = userEvent.setup()
      render(<F0ResourcePage title="Payroll" tabs={contentTabs} />)

      await user.click(screen.getByRole("link", { name: "People" }))

      expect(screen.getByText("Members table")).toBeDefined()
      expect(screen.queryByText("Work information")).toBeNull()
    })

    it("swaps the rail along with the content", async () => {
      const user = userEvent.setup()
      render(<F0ResourcePage title="Payroll" tabs={contentTabs} />)

      expect(screen.getByText("Work")).toBeDefined()

      await user.click(screen.getByRole("link", { name: "People" }))

      // The rail lists the sections of the tab being read, so it cannot outlive
      // the tab it belongs to.
      expect(screen.getByText("Members")).toBeDefined()
      expect(screen.queryByText("Work")).toBeNull()
    })

    it("falls back to children for href tabs, which are routes", () => {
      render(
        <F0ResourcePage
          title="Payroll"
          tabs={[
            { href: "/teams/payroll", label: "Overview" },
            { href: "/teams/payroll/people", label: "People" },
          ]}
        >
          <div>Whatever the route rendered</div>
        </F0ResourcePage>
      )

      expect(screen.getByText("Whatever the route rendered")).toBeDefined()
    })

    it("keeps the page's own rail for a tab without one", () => {
      render(
        <F0ResourcePage
          title="Payroll"
          tabs={[
            { id: "overview", label: "Overview", content: <div>Fields</div> },
          ]}
          aside={railSections}
        />
      )

      expect(screen.getByText("Rail")).toBeDefined()
    })
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

    it("drops it when the tab strip already divides", () => {
      const { container } = render(
        <F0ResourcePage title="Payroll" tabs={tabs}>
          <div>Members</div>
        </F0ResourcePage>
      )

      expect(headerOf(container)?.className).not.toContain("border-b")
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

  describe("collapse on scroll", () => {
    /**
     * jsdom does no layout, so `scrollTop` cannot be set the way a browser sets
     * it. Stub the reading instead: the hook only ever reads it.
     */
    const putScrollAt = (element: HTMLElement, top: number) =>
      Object.defineProperty(element, "scrollTop", {
        value: top,
        configurable: true,
      })

    /** Mounts the page inside a scrolling box, the way `Page` provides one. */
    const renderInScroller = () => {
      const view = render(
        <div style={{ overflowY: "auto" }} data-testid="scroller">
          <F0ResourcePage
            title="René Galindo"
            avatar={{ type: "person", firstName: "René", lastName: "Galindo" }}
            metadata={[
              {
                label: "Location",
                value: { type: "text", content: "Barcelona" },
              },
            ]}
            tabs={tabs}
          >
            <div>Members</div>
          </F0ResourcePage>
        </div>
      )
      const scroller = screen.getByTestId("scroller")
      const scrollTo = (top: number) => {
        putScrollAt(scroller, top)
        // The listener is a plain DOM one, so its state update needs flushing.
        act(() => {
          scroller.dispatchEvent(new Event("scroll"))
        })
      }
      return { ...view, scrollTo }
    }

    const title = () => screen.getByText("René Galindo")
    /** The name's size is interpolated, so read it rather than a class. */
    const titleSize = () => title().style.fontSize

    it("keeps the header and its tabs at the top of the scroller", () => {
      const { container } = renderInScroller()

      const chrome = container.querySelector(".sticky")
      expect(chrome?.className).toContain("top-0")
      expect(chrome?.querySelector(".resource-header")).not.toBeNull()
      expect(chrome?.textContent).toContain("Overview")
    })

    it("draws no border of its own while there are tabs, condensed or not", () => {
      const { container, scrollTo } = renderInScroller()
      const header = () => container.querySelector(".resource-header")

      expect(header()?.className).not.toContain("border-b")

      scrollTo(120)

      // A rule here would sit on top of the tab strip as it scrolls under.
      expect(header()?.className).not.toContain("border-b")
    })

    it("condenses the header once the content has scrolled", () => {
      const { scrollTo } = renderInScroller()

      expect(titleSize()).toBe("22px")

      scrollTo(200)

      expect(titleSize()).toBe("16px")
    })

    it("expands again at the top", () => {
      const { scrollTo } = renderInScroller()

      scrollTo(200)
      expect(titleSize()).toBe("16px")

      scrollTo(0)
      expect(titleSize()).toBe("22px")
    })

    it("reopens as soon as the reader turns back, wherever they are", () => {
      // Progress follows travel since the last change of direction, not the
      // absolute position. Mapping the position pins the header at fully
      // condensed anywhere deep in the page, so scrolling up does nothing for
      // hundreds of pixels, which reads as stuck.
      const { scrollTo } = renderInScroller()

      scrollTo(600)
      expect(titleSize()).toBe("16px")

      scrollTo(504)
      expect(titleSize()).toBe("19px")

      scrollTo(408)
      expect(titleSize()).toBe("22px")

      // And it closes again on the way back down, without visiting the top.
      scrollTo(600)
      expect(titleSize()).toBe("16px")
    })

    it("condenses in step with the scroll, not faster than it", () => {
      const { container, scrollTo } = renderInScroller()

      // Halfway through the 192px the collapse takes, halfway condensed. The
      // distance is longer than the ~156px of height the chrome gives up, so
      // the tab strip under it never slides up faster than the content does.
      scrollTo(96)
      expect(titleSize()).toBe("19px")

      // Not eased at all: a transition would let the avatar's composited scale
      // drift from the main-thread sizes around it mid-gesture.
      expect(
        container.querySelector(".resource-header")?.className
      ).not.toContain("transition-")
    })

    it("condenses on mount when the page is restored mid-scroll", () => {
      const scroller = document.createElement("div")
      scroller.style.overflowY = "auto"
      putScrollAt(scroller, 200)
      document.body.appendChild(scroller)

      render(
        <F0ResourcePage title="René Galindo">
          <div>Members</div>
        </F0ResourcePage>,
        { container: scroller }
      )

      expect(titleSize()).toBe("16px")
    })

    it("does not condense a page that merely mounts a few pixels down", () => {
      // A restored scroll is deep in the page. An anchor, Storybook's canvas or
      // a stray pixel of overscroll are not restorations, and condensing for
      // them leaves an untouched page looking half closed.
      const scroller = document.createElement("div")
      scroller.style.overflowY = "auto"
      putScrollAt(scroller, 5)
      document.body.appendChild(scroller)

      render(
        <F0ResourcePage title="René Galindo">
          <div>Members</div>
        </F0ResourcePage>,
        { container: scroller }
      )

      expect(titleSize()).toBe("22px")
    })

    it("reserves the chrome's space so the page's height never changes", () => {
      // The spacer holds whatever the chrome has given up, like a fixed padding
      // at the top of the page. Its height needs a layout engine to assert, but
      // the reservation itself is structural: the chrome's next sibling.
      const { container } = renderInScroller()

      const chrome = container.querySelector(".sticky")
      const spacer = chrome?.nextElementSibling
      expect(spacer?.getAttribute("aria-hidden")).toBe("true")
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
