import { Home, Settings } from "@/icons/app"
import { zeroRender as render } from "@/testing/test-utils"
import { within } from "@testing-library/react"

import { beforeEach, describe, expect, it, vi } from "vitest"
import { Breadcrumbs } from "./index"

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

function setContainerWidth(px) {
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    value: px,
    writable: true,
  })
}

function setBreadcrumbItemWidth(px) {
  Object.defineProperty(HTMLLIElement.prototype, "clientWidth", {
    configurable: true,
    value: px,
    writable: true,
  })
}

describe("Breadcrumbs", async () => {
  beforeEach(() => {
    setContainerWidth(1000)
    setBreadcrumbItemWidth(100)
  })

  it("renders all breadcrumbs when there's enough space", async () => {
    const home = { id: "home", label: "Home", href: "/" }
    const products = { id: "products", label: "Products", href: "/products" }
    const electronics = {
      id: "electronics",
      label: "Electronics",
      href: "/products/electronics",
    }
    const laptops = {
      id: "laptops",
      label: "Laptops",
      href: "/products/electronics/laptops",
    }
    const breadcrumbs = [home, products, electronics, laptops]

    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    const nav: HTMLElement | null = container.querySelector("nav>ol:last-child")
    expect(nav).toBeInTheDocument()

    expect(await within(nav!).findByText(laptops.label)).toBeInTheDocument()
    // Check if all non-last breadcrumb items are rendered as links
    for (const item of breadcrumbs.slice(0, -1)) {
      const links = await within(nav!).findAllByRole("link")
      const matchingLink = links.find((link) => link.textContent?.includes(item.label))
      expect(matchingLink).toBeDefined()
    }

    // Check if last item is rendered as text
    const lastItem = breadcrumbs[breadcrumbs.length - 1]
    const lastElement = nav!.querySelector('[aria-current="page"]')
    expect(lastElement).toHaveTextContent(lastItem.label)
  })

  it("renders first and last items when space is limited", () => {
    setContainerWidth(100)

    const home = { id: "home", label: "Home", href: "/" }
    const products = { id: "products", label: "Products", href: "/products" }
    const electronics = {
      id: "electronics",
      label: "Electronics",
      href: "/products/electronics",
    }
    const laptops = {
      id: "laptops",
      label: "Laptops",
      href: "/products/electronics/laptops",
    }
    const breadcrumbs = [home, products, electronics, laptops]

    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()

    // First item should be a link
    const links = within(nav!).getAllByRole("link")
    const firstLink = links.find((link) => link.textContent?.includes(home.label))
    expect(firstLink).toBeDefined()

    // Last item should be text
    const lastElement = nav!.querySelector('[aria-current="page"]')
    expect(lastElement).toHaveTextContent(laptops.label)

    // Should show ellipsis for collapsed items
    expect(within(nav!).getByText("...")).toBeInTheDocument()
  })

  it("renders breadcrumbs with icons when provided", () => {
    const home = {
      id: "home",
      label: "Home",
      href: "/",
      icon: Home,
      module: "home",
    }
    const settings = {
      id: "settings",
      label: "Settings",
      href: "/settings",
      icon: Settings,
    }
    const breadcrumbs = [home, settings]

    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    const nav: HTMLElement = container.querySelector("nav>ol:last-child")
    expect(nav).toBeInTheDocument()

    // Check if first item is rendered as a link with icon
    const links = within(nav!).getAllByRole("link")
    const homeLink = links.find((link) => link.textContent?.includes(home.label))
    expect(homeLink).toBeDefined()

    // Check if last item is rendered as text
    const lastElement = nav!.querySelector('[aria-current="page"]')
    expect(lastElement).toHaveTextContent(settings.label)

    // Check if icons are rendered (2 icons + 1 separator)
    expect(nav!.querySelectorAll("svg")).toHaveLength(3)
  })

  it("renders correct links for non-last items", () => {
    const home = { id: "home", label: "Home", href: "/" }
    const products = { id: "products", label: "Products", href: "/products" }
    const currentPage = {
      id: "current",
      label: "Current Page",
      href: "/products/current",
    }
    const breadcrumbs = [home, products, currentPage]

    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()

    // Check non-last items are links
    const links = within(nav!).getAllByRole("link")
    const firstLink = links.find((link) => link.textContent?.includes(home.label))
    expect(firstLink).toHaveAttribute("href", home.href)

    // Last item should be text
    const lastElement = nav!.querySelector('[aria-current="page"]')
    expect(lastElement).toHaveTextContent(currentPage.label)
    expect(lastElement?.closest("a")).toBeNull()
  })

  it("handles empty breadcrumbs gracefully", () => {
    const { container } = render(<Breadcrumbs breadcrumbs={[]} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()
    expect(nav!.textContent).toBe("")
  })

  describe("loading states", () => {
    it("renders skeleton for last item when loading", () => {
      const home = { id: "home", label: "Home", href: "/" }
      const products = { id: "products", label: "Products", href: "/products" }
      const loadingItem = { id: "loading", loading: true } as const
      const breadcrumbs = [home, products, loadingItem]

      const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
      const nav: HTMLElement = container.querySelector("nav>ol:last-child")
      expect(nav).toBeInTheDocument()

      // Find all items that contain text content
      const items = within(nav!).getAllByRole("listitem")
      const textItems = items.filter((item) => item.textContent)
      expect(textItems).toHaveLength(2)
      expect(textItems[0]).toHaveTextContent(home.label)
      expect(textItems[1]).toHaveTextContent(products.label)

      // Verify loading items
      const loadingItems = items.filter((item) => item.querySelector(".h-4.w-24"))
      expect(loadingItems).toHaveLength(1)
    })

    it("renders skeletons for last two items when loading", () => {
      const home = { id: "home", label: "Home", href: "/" }
      const loadingItem1 = { id: "loading1", loading: true } as const
      const loadingItem2 = { id: "loading2", loading: true } as const
      const breadcrumbs = [home, loadingItem1, loadingItem2]

      const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
      const nav = container.querySelector("nav")
      expect(nav).toBeInTheDocument()

      // Find all items that contain text content
      const items = within(nav!).getAllByRole("listitem")
      const textItems = items.filter((item) => item.textContent)
      expect(textItems).toHaveLength(1)
      expect(textItems[0]).toHaveTextContent(home.label)

      // Verify loading items
      const loadingItems = items.filter((item) => item.querySelector(".h-4.w-24"))
      expect(loadingItems).toHaveLength(2)
    })

    it("ensures loading items are not interactive", () => {
      const home = { id: "home", label: "Home", href: "/" }
      const loadingItem1 = { id: "loading1", loading: true } as const
      const loadingItem2 = { id: "loading2", loading: true } as const
      const breadcrumbs = [home, loadingItem1, loadingItem2]

      const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
      const nav = container.querySelector("nav")

      // Ensure loading items are not interactive
      const items = within(nav!).getAllByRole("listitem")
      const loadingItems = items.filter((item) => item.querySelector(".h-4.w-24"))

      loadingItems.forEach((item) => {
        expect(item.closest("a")).toBeNull()
      })
    })
  })

  it.skip("renders select type breadcrumb correctly", async () => {
    const breadcrumbs = [
      { id: "home", label: "Home", href: "/" },
      {
        id: "select",
        type: "select" as const,
        options: [
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
        ],
        label: "Option 1",
        value: "1",
        onChange: vi.fn(),
      },
    ]

    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    const nav = container.querySelector("nav")
    expect(nav).toBeInTheDocument()

    // Check if home link is rendered
    const homeLinks = await within(nav!).findAllByText("Home")
    expect(homeLinks).toHaveLength(2)
    expect(homeLinks[1]).toBeInTheDocument()

    // Check if select is rendered with correct value
    const selects = await within(nav!).findAllByText("Option 1")
    expect(selects).toHaveLength(2)
    expect(selects[1]).toBeInTheDocument()
    expect(selects[1].closest('[role="combobox"]')).toBeInTheDocument()
  })

  it("renders append element when provided", async () => {
    const home = { id: "home", label: "Home", href: "/" }
    const products = { id: "products", label: "Products", href: "/products" }
    const breadcrumbs = [home, products]
    const appendElement = <span>Append</span>

    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} append={appendElement} />)
    const nav: HTMLElement = container.querySelector("nav>ol:last-child")
    const append = await within(nav!).findByText("Append")
    expect(append).toBeInTheDocument()
  })

  it("renders append element when space is limited", async () => {
    setContainerWidth(100) // Set limited width

    const home = { id: "home", label: "Home", href: "/" }
    const products = { id: "products", label: "Products", href: "/products" }
    const electronics = {
      id: "electronics",
      label: "Electronics",
      href: "/products/electronics",
    }
    const breadcrumbs = [home, electronics, products]
    const appendElement = <span>Append</span>

    const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} append={appendElement} />)
    const nav: HTMLElement = container.querySelector("nav>ol:last-child")
    const append = await within(nav!).findByText("Append")
    expect(append).toBeInTheDocument()

    // Should show ellipsis for collapsed items
    expect(within(nav!).getByText("...")).toBeInTheDocument()
  })
})
