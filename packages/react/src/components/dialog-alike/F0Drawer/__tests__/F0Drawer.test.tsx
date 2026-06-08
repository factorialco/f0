import { describe, expect, it, vi, beforeEach } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Drawer } from "../index"
import { DrawerInternal } from "../internal/DrawerInternal"

// Mock dependencies
vi.mock("../internal/DrawerInternal", () => ({
  DrawerInternal: vi.fn(({ children }) => (
    <div data-testid="drawer-internal">{children}</div>
  )),
}))

vi.mock("@/lib/experimental", () => ({
  experimentalComponent: vi.fn((_name, component) => component),
}))

vi.mock("usehooks-ts", () => ({
  useMediaQuery: vi.fn(() => false),
}))

describe("F0Drawer", () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("rendering", () => {
    it("should render successfully with default props", () => {
      render(
        <F0Drawer {...defaultProps}>
          <div>Drawer Content</div>
        </F0Drawer>
      )
      expect(screen.getByTestId("drawer-internal")).toBeInTheDocument()
      expect(screen.getByText("Drawer Content")).toBeInTheDocument()
    })

    it("should pass isOpen prop correctly", () => {
      render(
        <F0Drawer {...defaultProps} isOpen={false}>
          <div>Drawer Content</div>
        </F0Drawer>
      )

      expect(DrawerInternal).toHaveBeenCalledWith(
        expect.objectContaining({ isOpen: false }),
        expect.anything()
      )
    })

    it("should render with displayName set correctly", () => {
      expect(F0Drawer.displayName).toBe("F0Drawer")
    })
  })

  describe("prop filtering", () => {
    it("should filter out private props before passing to DrawerInternal", () => {
      const props = {
        ...defaultProps,
        // @ts-expect-error - Testing private prop
        variant: "default",
        // @ts-expect-error - Testing private prop
        disableClose: true,
      }

      render(
        <F0Drawer {...props}>
          <div>Content</div>
        </F0Drawer>
      )

      expect(DrawerInternal).toHaveBeenCalledWith(
        expect.not.objectContaining({
          variant: expect.anything(),
          disableClose: expect.anything(),
        }),
        expect.anything()
      )
    })

    it("should pass public props to DrawerInternal", () => {
      const publicProps = {
        title: "Test Title",
        description: "Test Description",
        size: "md" as const,
        position: "right" as const,
      }

      render(
        <F0Drawer {...defaultProps} {...publicProps}>
          <div>Content</div>
        </F0Drawer>
      )

      expect(DrawerInternal).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Test Title",
          description: "Test Description",
          size: "md",
          position: "right",
        }),
        expect.anything()
      )
    })
  })

  describe("prop combinations", () => {
    it("should pass action props correctly", () => {
      const actions = {
        primaryAction: { label: "Save", onClick: vi.fn() },
        secondaryAction: { label: "Cancel", onClick: vi.fn() },
        otherActions: [{ label: "Other", onClick: vi.fn() }],
      }

      render(
        <F0Drawer {...defaultProps} {...actions}>
          <div>Content</div>
        </F0Drawer>
      )

      expect(DrawerInternal).toHaveBeenCalledWith(
        expect.objectContaining(actions),
        expect.anything()
      )
    })

    it("should pass module and tabs props correctly", () => {
      const props = {
        module: { id: "test", label: "Test", href: "/test" },
        tabs: [{ id: "tab1", label: "Tab 1" }],
        activeTabId: "tab1",
        setActiveTabId: vi.fn(),
      }

      render(
        <F0Drawer {...defaultProps} {...props}>
          <div>Content</div>
        </F0Drawer>
      )

      expect(DrawerInternal).toHaveBeenCalledWith(
        expect.objectContaining(props),
        expect.anything()
      )
    })

    it("should pass modal and disableContentPadding props correctly", () => {
      const props = {
        modal: true,
        disableContentPadding: true,
      }

      render(
        <F0Drawer {...defaultProps} {...props}>
          <div>Content</div>
        </F0Drawer>
      )

      expect(DrawerInternal).toHaveBeenCalledWith(
        expect.objectContaining(props),
        expect.anything()
      )
    })
  })

  describe("edge cases", () => {
    it("should not pass undefined optional props as keys", () => {
      render(
        <F0Drawer {...defaultProps}>
          <div>Content</div>
        </F0Drawer>
      )

      // Verify that optional props are not present in the props object passed to DrawerInternal
      // This confirms that F0Drawer doesn't add undefined keys for props not passed to it
      expect(DrawerInternal).toHaveBeenCalledWith(
        expect.not.objectContaining({
          title: expect.anything(),
          description: expect.anything(),
          primaryAction: expect.anything(),
          secondaryAction: expect.anything(),
        }),
        expect.anything()
      )
    })

    it("should handle empty children", () => {
      render(<F0Drawer {...defaultProps} />)
      expect(screen.getByTestId("drawer-internal")).toBeInTheDocument()
    })
  })

  describe("callbacks", () => {
    it("should pass onClose callback correctly", () => {
      const onClose = vi.fn()
      render(
        <F0Drawer {...defaultProps} onClose={onClose}>
          <div>Content</div>
        </F0Drawer>
      )

      expect(DrawerInternal).toHaveBeenCalledWith(
        expect.objectContaining({ onClose }),
        expect.anything()
      )
    })

    it("should pass action callbacks correctly", () => {
      const onPrimaryClick = vi.fn()
      const onSecondaryClick = vi.fn()

      render(
        <F0Drawer
          {...defaultProps}
          primaryAction={{ label: "Primary", onClick: onPrimaryClick }}
          secondaryAction={{ label: "Secondary", onClick: onSecondaryClick }}
        >
          <div>Content</div>
        </F0Drawer>
      )

      const lastCall = vi.mocked(DrawerInternal).mock.lastCall
      const props = lastCall![0] as any

      expect(props.primaryAction.onClick).toBe(onPrimaryClick)
      expect(props.secondaryAction.onClick).toBe(onSecondaryClick)
    })
  })
})
