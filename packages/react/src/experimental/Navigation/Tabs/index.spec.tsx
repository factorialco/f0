import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ComponentProps, forwardRef, PropsWithChildren } from "react"
import { describe, expect, it, vi } from "vitest"

import { BaseTabs, TabsSkeleton } from "./index"

// Mock the linkHandler module
vi.mock("@/lib/linkHandler", () => ({
  Link: forwardRef<HTMLAnchorElement, PropsWithChildren<ComponentProps<"a">>>(
    function Link({ children, ...props }, ref) {
      return (
        <a ref={ref} {...props}>
          {children}
        </a>
      )
    }
  ),
  useNavigation: () => ({
    isActive: (href: string) => href === "/active",
  }),
}))

describe("Tabs", () => {
  const defaultTabs = [
    { label: "Tab 1", href: "/active" },
    { label: "Tab 2", href: "/other" },
    { label: "Tab 3", href: "/another" },
  ]

  const secondaryTabsWithUpsellIcons = [
    { label: "Tab 1", href: "/active", variant: "upsell" as const },
    { label: "Tab 2", href: "/other", variant: "upsell" as const },
  ]

  const secondaryTabsWithoutUpsellIcons = [
    { label: "Tab 1", href: "/active" },
    { label: "Tab 2", href: "/other" },
  ]

  it("renders multiple tabs correctly", () => {
    render(<BaseTabs tabs={defaultTabs} />)

    expect(screen.getByText("Tab 1")).toBeInTheDocument()
    expect(screen.getByText("Tab 2")).toBeInTheDocument()
    expect(screen.getByText("Tab 3")).toBeInTheDocument()
  })

  it("renders a single tab as plain text", () => {
    const singleTab = [{ label: "Single Tab", href: "/single" }]
    render(<BaseTabs tabs={singleTab} />)

    const tab = screen.getByText("Single Tab")
    expect(tab.tagName).toBe("LI")
    expect(tab).toHaveClass("text-lg", "font-medium")
  })

  it("applies active state to the correct tab", () => {
    render(<BaseTabs tabs={defaultTabs} />)

    const activeTab = screen.getByText("Tab 1").closest("a")
    expect(activeTab).toHaveAttribute("data-active", "true")
  })

  it("renders secondary tabs with correct styling", () => {
    render(<BaseTabs tabs={defaultTabs} secondary />)

    const nav = screen.getByRole("navigation")
    expect(nav).toHaveAttribute("aria-label", "primary-navigation")
  })

  it("renders Upsell icons in secondary tabs when variant is 'upsell'", () => {
    render(<BaseTabs tabs={secondaryTabsWithUpsellIcons} secondary />)

    const icons = document.querySelectorAll("svg")
    expect(icons).toHaveLength(2)
  })

  it("renders Upsell icons for primary tabs when variant is 'upsell'", () => {
    render(<BaseTabs tabs={secondaryTabsWithUpsellIcons} secondary={false} />)

    const icons = document.querySelectorAll("svg")
    expect(icons).toHaveLength(2)
  })

  it("does not render icons in secondary tabs when variant is 'default' or undefined", () => {
    render(<BaseTabs tabs={secondaryTabsWithoutUpsellIcons} secondary />)

    const icons = document.querySelectorAll("svg")
    expect(icons).toHaveLength(0)
  })

  it("does not render icons in primary tabs when variant is 'default' or undefined", () => {
    render(
      <BaseTabs tabs={secondaryTabsWithoutUpsellIcons} secondary={false} />
    )

    const icons = document.querySelectorAll("svg")
    expect(icons).toHaveLength(0)
  })

  describe("controlled mode with id-based tabs", () => {
    const idTabs = [
      { label: "Tab A", id: "a" },
      { label: "Tab B", id: "b" },
      { label: "Tab C", id: "c" },
    ]

    it("respects the activeTabId prop over internal state", () => {
      const onChangeActiveTabId = vi.fn()
      const { rerender } = render(
        <BaseTabs
          tabs={idTabs}
          activeTabId="a"
          setActiveTabId={onChangeActiveTabId}
        />
      )

      const tabA = screen.getByText("Tab A").closest("a")
      const tabB = screen.getByText("Tab B").closest("a")
      expect(tabA).toHaveAttribute("data-active", "true")
      expect(tabB).not.toHaveAttribute("data-active")

      rerender(
        <BaseTabs
          tabs={idTabs}
          activeTabId="b"
          setActiveTabId={onChangeActiveTabId}
        />
      )

      expect(tabA).not.toHaveAttribute("data-active")
      expect(tabB).toHaveAttribute("data-active", "true")
    })

    it("does not change the active tab visually on click when controlled", async () => {
      const user = userEvent.setup()
      const onChangeActiveTabId = vi.fn()

      render(
        <BaseTabs
          tabs={idTabs}
          activeTabId="a"
          setActiveTabId={onChangeActiveTabId}
        />
      )

      const tabB = screen.getByText("Tab B")
      await user.click(tabB)

      expect(onChangeActiveTabId).toHaveBeenCalledWith("b")

      const tabA = screen.getByText("Tab A").closest("a")
      expect(tabA).toHaveAttribute("data-active", "true")

      const tabBLink = tabB.closest("a")
      expect(tabBLink).not.toHaveAttribute("data-active")
    })

    it("works in uncontrolled mode when activeTabId is not provided", async () => {
      const user = userEvent.setup()
      const onChangeActiveTabId = vi.fn()

      render(<BaseTabs tabs={idTabs} setActiveTabId={onChangeActiveTabId} />)

      const tabA = screen.getByText("Tab A").closest("a")
      expect(tabA).toHaveAttribute("data-active", "true")

      const tabB = screen.getByText("Tab B")
      await user.click(tabB)

      expect(tabA).not.toHaveAttribute("data-active")
      const tabBLink = tabB.closest("a")
      expect(tabBLink).toHaveAttribute("data-active", "true")
    })

    it("treats activeTabId as initial value when setActiveTabId is not provided", async () => {
      const user = userEvent.setup()

      render(<BaseTabs tabs={idTabs} activeTabId="a" />)

      const tabA = screen.getByText("Tab A").closest("a")
      expect(tabA).toHaveAttribute("data-active", "true")

      const tabB = screen.getByText("Tab B")
      await user.click(tabB)

      expect(tabA).not.toHaveAttribute("data-active")
      const tabBLink = tabB.closest("a")
      expect(tabBLink).toHaveAttribute("data-active", "true")
    })
  })

  describe("TabsSkeleton", () => {
    it("renders skeleton state with correct number of items", () => {
      render(<TabsSkeleton />)

      const skeletons = screen.getAllByRole("listitem")
      expect(skeletons).toHaveLength(4)
    })

    it("renders secondary skeleton with correct aria label", () => {
      render(<TabsSkeleton secondary />)

      const nav = screen.getByRole("navigation")
      expect(nav).toHaveAttribute("aria-label", "Secondary empty nav")
    })
  })
})
