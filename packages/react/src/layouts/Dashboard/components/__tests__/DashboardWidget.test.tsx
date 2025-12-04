import { screen, userEvent, zeroRender } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { DashboardWidget } from "../DashboardWidget"

const _ = React
// Mock components
vi.mock("@/components/F0Text", () => ({
  F0Text: ({ content }: { content: string }) => (
    <p data-testid="one-ellipsis">{content}</p>
  ),
}))

vi.mock("@/components/F0Icon", () => ({
  F0Icon: ({
    icon: _Icon,
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

vi.mock("@/experimental/Navigation/Dropdown/internal", () => ({
  DropdownInternal: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="dropdown-internal">{children}</div>
  ),
  DropdownItem: {},
}))

vi.mock("@/icons/app", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/icons/app")>()
  return {
    ...actual,
    Handle: () => <svg data-testid="handle-icon" />,
  }
})

describe("DashboardWidget", () => {
  describe("Component Rendering", () => {
    it("should render div element", () => {
      const { container } = zeroRender(
        <DashboardWidget title="Test Widget">
          <div>Content</div>
        </DashboardWidget>
      )

      const widget = container.querySelector("div.relative")
      expect(widget).toBeInTheDocument()
    })

    it("should render title", () => {
      zeroRender(
        <DashboardWidget title="My Widget Title">
          <div>Content</div>
        </DashboardWidget>
      )

      expect(screen.getByTestId("one-ellipsis")).toHaveTextContent(
        "My Widget Title"
      )
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
  })

  describe("Draggable Handle", () => {
    it("should render handle when draggable is true", () => {
      zeroRender(
        <DashboardWidget title="Widget" draggable={true}>
          <div>Content</div>
        </DashboardWidget>
      )

      expect(screen.getByTestId("icon")).toBeInTheDocument()
      expect(screen.getByTestId("icon")).toHaveAttribute("data-size", "xs")
    })

    it("should not render handle when draggable is false", () => {
      zeroRender(
        <DashboardWidget title="Widget" draggable={false}>
          <div>Content</div>
        </DashboardWidget>
      )

      // Icon should not be present when draggable is false
      // The icon might still be rendered but not visible, so we check the handle container
      const handle = document.querySelector('[data-gs-handle="true"]')
      expect(handle).not.toBeInTheDocument()
    })

    it("should not render handle when draggable is undefined (default false)", () => {
      zeroRender(
        <DashboardWidget title="Widget">
          <div>Content</div>
        </DashboardWidget>
      )

      const handle = document.querySelector('[data-gs-handle="true"]')
      expect(handle).not.toBeInTheDocument()
    })

    it("should have correct handle classes and data attributes", () => {
      const { container } = zeroRender(
        <DashboardWidget title="Widget" draggable={true}>
          <div>Content</div>
        </DashboardWidget>
      )

      const handle = container.querySelector('[data-gs-handle="true"]')
      expect(handle).toBeInTheDocument()
      expect(handle).toHaveClass("hover:cursor-grab")
      expect(handle).toHaveAttribute("data-gs-handle", "true")
    })
  })

  describe("Header Structure", () => {
    it("should render title and handle", () => {
      zeroRender(
        <DashboardWidget title="Widget Title" draggable={true}>
          <div>Content</div>
        </DashboardWidget>
      )

      expect(screen.getByTestId("one-ellipsis")).toHaveTextContent(
        "Widget Title"
      )
      const handle = document.querySelector('[data-gs-handle="true"]')
      expect(handle).toBeInTheDocument()
    })

    it("should render actions dropdown when provided", async () => {
      const actions = [
        { id: "action-1", label: "Action 1" },
        { id: "action-2", label: "Action 2" },
      ]

      const { container } = zeroRender(
        <DashboardWidget title="Widget" actions={actions}>
          <div>Content</div>
        </DashboardWidget>
      )

      const widget = container.querySelector("div.relative")
      if (widget) {
        await userEvent.hover(widget)
      }

      expect(screen.getByTestId("dropdown-internal")).toBeInTheDocument()
    })

    it("should not render dropdown when actions are not provided", () => {
      zeroRender(
        <DashboardWidget title="Widget">
          <div>Content</div>
        </DashboardWidget>
      )

      const dropdown = screen.queryByTestId("dropdown-internal")
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

      const widget = container.querySelector("div.relative")
      expect(widget).toHaveClass("relative")
      expect(widget).toHaveClass("h-full")
      expect(widget).toHaveClass("w-full")
      expect(widget).toHaveClass("rounded-xl")
      expect(widget).toHaveClass("border")
      expect(widget).toHaveClass("border-solid")
      expect(widget).toHaveClass("border-f1-border")
      expect(widget).toHaveClass("bg-f1-background")
    })
  })
})
