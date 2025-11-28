import { screen, zeroRender } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it, vi } from "vitest"
import { DashboardWidget } from "../DashboardWidget"

// Mock components
vi.mock("@/components/F0Heading", () => ({
  F0Heading: ({ content }: { content: string }) => (
    <h6 data-testid="heading">{content}</h6>
  ),
}))

vi.mock("@/components/F0Icon", () => ({
  F0Icon: ({
    icon: Icon,
    size,
  }: {
    icon: React.ComponentType
    size: string
  }) => (
    <div data-testid="icon" data-size={size}>
      Icon
    </div>
  ),
}))

vi.mock("@/experimental/Navigation/Dropdown", () => ({
  Dropdown: ({ items }: { items: unknown[] }) => (
    <div data-testid="dropdown">
      {items ? `Dropdown with ${items.length} items` : "Dropdown"}
    </div>
  ),
  DropdownItem: {},
}))

vi.mock("@/icons/app", () => ({
  Handle: () => <svg data-testid="handle-icon" />,
}))

describe("DashboardWidget", () => {
  describe("Component Rendering", () => {
    it("should render article element", () => {
      const { container } = zeroRender(
        <DashboardWidget title="Test Widget">
          <div>Content</div>
        </DashboardWidget>
      )

      const article = container.querySelector("article")
      expect(article).toBeInTheDocument()
    })

    it("should render title", () => {
      zeroRender(
        <DashboardWidget title="My Widget Title">
          <div>Content</div>
        </DashboardWidget>
      )

      expect(screen.getByTestId("heading")).toHaveTextContent("My Widget Title")
    })

    it("should render children content", () => {
      zeroRender(
        <DashboardWidget title="Widget">
          <div data-testid="widget-content">Widget Content</div>
        </DashboardWidget>
      )

      expect(screen.getByTestId("widget-content")).toHaveTextContent(
        "Widget Content"
      )
    })

    it("should apply custom className", () => {
      const { container } = zeroRender(
        <DashboardWidget title="Widget" className="custom-class">
          <div>Content</div>
        </DashboardWidget>
      )

      const article = container.querySelector("article")
      expect(article).toHaveClass("custom-class")
    })
  })

  describe("Draggable Handle", () => {
    it("should render handle when draggable is true", () => {
      zeroRender(
        <DashboardWidget title="Widget" draggable={true}>
          <div>Content</div>
        </DashboardWidget>
      )

      expect(screen.getByTestId("icon")).toBeInTheDocument()
      expect(screen.getByTestId("icon")).toHaveAttribute("data-size", "sm")
    })

    it("should not render handle when draggable is false", () => {
      zeroRender(
        <DashboardWidget title="Widget" draggable={false}>
          <div>Content</div>
        </DashboardWidget>
      )

      // Icon should not be present when draggable is false
      const icons = screen.queryAllByTestId("icon")
      // The icon might still be rendered but not visible, so we check the handle container
      const handle = document.querySelector(".dashboard-widget-handle")
      expect(handle).not.toBeInTheDocument()
    })

    it("should not render handle when draggable is undefined (default false)", () => {
      zeroRender(
        <DashboardWidget title="Widget">
          <div>Content</div>
        </DashboardWidget>
      )

      const handle = document.querySelector(".dashboard-widget-handle")
      expect(handle).not.toBeInTheDocument()
    })

    it("should have correct handle classes and data attributes", () => {
      const { container } = zeroRender(
        <DashboardWidget title="Widget" draggable={true}>
          <div>Content</div>
        </DashboardWidget>
      )

      const handle = container.querySelector(".dashboard-widget-handle")
      expect(handle).toBeInTheDocument()
      expect(handle).toHaveClass("cursor-grab")
      expect(handle).toHaveClass("active:cursor-grabbing")
      expect(handle).toHaveAttribute("data-gs-handle", "true")
    })
  })

  describe("Header Structure", () => {
    it("should render header with title and handle", () => {
      const { container } = zeroRender(
        <DashboardWidget title="Widget Title" draggable={true}>
          <div>Content</div>
        </DashboardWidget>
      )

      const header = container.querySelector("header")
      expect(header).toBeInTheDocument()
      expect(header?.querySelector("h6")).toHaveTextContent("Widget Title")
      expect(
        header?.querySelector(".dashboard-widget-handle")
      ).toBeInTheDocument()
    })

    it("should render actions dropdown when provided", () => {
      const actions = [
        { id: "action-1", label: "Action 1" },
        { id: "action-2", label: "Action 2" },
      ]

      zeroRender(
        <DashboardWidget title="Widget" actions={actions}>
          <div>Content</div>
        </DashboardWidget>
      )

      expect(screen.getByTestId("dropdown")).toHaveTextContent(
        "Dropdown with 2 items"
      )
    })

    it("should not render dropdown when actions are not provided", () => {
      zeroRender(
        <DashboardWidget title="Widget">
          <div>Content</div>
        </DashboardWidget>
      )

      const dropdown = screen.queryByTestId("dropdown")
      expect(dropdown).not.toBeInTheDocument()
    })
  })

  describe("Styling", () => {
    it("should apply default classes", () => {
      const { container } = zeroRender(
        <DashboardWidget title="Widget">
          <div>Content</div>
        </DashboardWidget>
      )

      const article = container.querySelector("article")
      expect(article).toHaveClass("relative")
      expect(article).toHaveClass("h-full")
      expect(article).toHaveClass("rounded-md")
      expect(article).toHaveClass("border")
      expect(article).toHaveClass("border-solid")
      expect(article).toHaveClass("border-f1-border-secondary")
      expect(article).toHaveClass("bg-f1-background")
      expect(article).toHaveClass("px-4")
      expect(article).toHaveClass("py-2")
      expect(article).toHaveClass("hover:border-f1-border-hover")
    })

    it("should merge custom className with default classes", () => {
      const { container } = zeroRender(
        <DashboardWidget title="Widget" className="my-custom-class">
          <div>Content</div>
        </DashboardWidget>
      )

      const article = container.querySelector("article")
      expect(article).toHaveClass("my-custom-class")
      expect(article).toHaveClass("relative")
      expect(article).toHaveClass("h-full")
    })
  })
})
