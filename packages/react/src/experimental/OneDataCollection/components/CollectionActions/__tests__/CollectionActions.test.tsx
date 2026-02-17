import { describe, expect, it, vi } from "vitest"

import { IconType } from "@/components/F0Icon"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { PrimaryActionItemDefinition } from "../../../actions"
import { CollectionActions } from "../CollectionActions"

vi.mock("@/components/F0Button", () => ({
  F0Button: ({ label, onClick, ...props }) => (
    <button data-testid="f0-button" onClick={onClick} {...props}>
      {label}
    </button>
  ),
}))

vi.mock("@/components/F0Button/internal", () => ({
  ButtonInternal: ({ label, onClick, ...props }) => (
    <button data-testid="button-internal" onClick={onClick} {...props}>
      {label}
    </button>
  ),
}))

vi.mock("@/components/F0ButtonDropdown", () => ({
  F0ButtonDropdown: ({ items, onClick }) => (
    <div data-testid="button-dropdown" data-items={JSON.stringify(items)}>
      <button
        data-testid="button-dropdown-main"
        onClick={() => onClick(items[0].value, items[0])}
      >
        {items[0]?.label}
      </button>
    </div>
  ),
}))

vi.mock("@/experimental/Navigation/Dropdown", () => ({
  Dropdown: ({ children, items, open, onOpenChange }) => (
    <div
      data-testid="dropdown"
      data-items={JSON.stringify(items)}
      data-open={open}
    >
      {children}
      <button
        data-testid="dropdown-toggle"
        onClick={() => onOpenChange?.(!open)}
      >
        Toggle
      </button>
    </div>
  ),
  DropdownItem: ({ children }) => <div>{children}</div>,
}))

vi.mock("@/icons/app", () => ({
  Ellipsis: () => <div data-testid="ellipsis-icon">...</div>,
}))

const mockIcon: IconType = (() => (
  <div data-testid="mock-icon">icon</div>
)) as unknown as IconType

describe("CollectionActions", () => {
  describe("without descriptions (split button mode)", () => {
    it("renders a single F0Button when there is exactly one primary action", () => {
      const actions: PrimaryActionItemDefinition[] = [
        { label: "New expense", icon: mockIcon, onClick: vi.fn() },
      ]

      render(<CollectionActions primaryActions={actions} />)

      expect(screen.getByTestId("f0-button")).toBeInTheDocument()
      expect(screen.getByText("New expense")).toBeInTheDocument()
      expect(screen.queryByTestId("button-dropdown")).not.toBeInTheDocument()
      expect(screen.queryByTestId("dropdown")).not.toBeInTheDocument()
    })

    it("renders F0ButtonDropdown when there are multiple primary actions without descriptions", () => {
      const actions: PrimaryActionItemDefinition[] = [
        { label: "New expense", icon: mockIcon, onClick: vi.fn() },
        { label: "Mileage", icon: mockIcon, onClick: vi.fn() },
        { label: "Per diem", icon: mockIcon, onClick: vi.fn() },
      ]

      render(<CollectionActions primaryActions={actions} />)

      expect(screen.getByTestId("button-dropdown")).toBeInTheDocument()
      expect(screen.queryByTestId("dropdown")).not.toBeInTheDocument()
    })
  })

  describe("with descriptions (dropdown mode)", () => {
    it("renders a Dropdown with all actions when primary actions have descriptions", () => {
      const actions: PrimaryActionItemDefinition[] = [
        {
          label: "Regular expense",
          icon: mockIcon,
          description: "Costs proven by receipts or invoices",
          onClick: vi.fn(),
        },
        {
          label: "Mileage",
          icon: mockIcon,
          description: "Travel with a personal vehicle",
          onClick: vi.fn(),
        },
        {
          label: "Per diem",
          icon: mockIcon,
          description: "Fixed daily travel allowance",
          onClick: vi.fn(),
        },
      ]

      render(<CollectionActions primaryActions={actions} />)

      // Should render Dropdown, not F0ButtonDropdown
      const dropdown = screen.getByTestId("dropdown")
      expect(dropdown).toBeInTheDocument()
      expect(screen.queryByTestId("button-dropdown")).not.toBeInTheDocument()

      // The trigger button should use the first action's label
      expect(screen.getByTestId("button-internal")).toBeInTheDocument()
      expect(screen.getByText("Regular expense")).toBeInTheDocument()

      // All items should be in the dropdown, including the first one
      const passedItems = JSON.parse(
        dropdown.getAttribute("data-items") || "[]"
      )
      expect(passedItems).toHaveLength(3)
      expect(passedItems[0].label).toBe("Regular expense")
      expect(passedItems[0].description).toBe(
        "Costs proven by receipts or invoices"
      )
      expect(passedItems[1].label).toBe("Mileage")
      expect(passedItems[1].description).toBe("Travel with a personal vehicle")
      expect(passedItems[2].label).toBe("Per diem")
      expect(passedItems[2].description).toBe("Fixed daily travel allowance")
    })

    it("renders Dropdown even with a single action that has a description", () => {
      const actions: PrimaryActionItemDefinition[] = [
        {
          label: "Regular expense",
          icon: mockIcon,
          description: "Costs proven by receipts or invoices",
          onClick: vi.fn(),
        },
      ]

      render(<CollectionActions primaryActions={actions} />)

      expect(screen.getByTestId("dropdown")).toBeInTheDocument()
      expect(screen.queryByTestId("f0-button")).not.toBeInTheDocument()
    })

    it("uses primaryActionsTrigger label and icon when provided", () => {
      const triggerIcon: IconType = (() => (
        <div data-testid="trigger-icon">trigger</div>
      )) as unknown as IconType

      const actions: PrimaryActionItemDefinition[] = [
        {
          label: "Regular expense",
          icon: mockIcon,
          description: "Costs proven by receipts or invoices",
          onClick: vi.fn(),
        },
        {
          label: "Mileage",
          icon: mockIcon,
          description: "Travel with a personal vehicle",
          onClick: vi.fn(),
        },
      ]

      render(
        <CollectionActions
          primaryActions={actions}
          primaryActionsTrigger={{
            label: "New expense",
            icon: triggerIcon,
          }}
        />
      )

      // The trigger button should show "New expense", not "Regular expense"
      expect(screen.getByText("New expense")).toBeInTheDocument()
      expect(screen.queryByText("Regular expense")).not.toBeInTheDocument()

      // Dropdown items should still include all actions
      const dropdown = screen.getByTestId("dropdown")
      const passedItems = JSON.parse(
        dropdown.getAttribute("data-items") || "[]"
      )
      expect(passedItems).toHaveLength(2)
      expect(passedItems[0].label).toBe("Regular expense")
      expect(passedItems[1].label).toBe("Mileage")
    })

    it("calls onClick when a dropdown item is selected", async () => {
      const onClickMock = vi.fn()
      const actions: PrimaryActionItemDefinition[] = [
        {
          label: "Regular expense",
          icon: mockIcon,
          description: "Costs proven by receipts",
          onClick: onClickMock,
        },
        {
          label: "Mileage",
          icon: mockIcon,
          description: "Travel with a vehicle",
          onClick: vi.fn(),
        },
      ]

      render(<CollectionActions primaryActions={actions} />)

      const dropdown = screen.getByTestId("dropdown")
      const passedItems = JSON.parse(
        dropdown.getAttribute("data-items") || "[]"
      )

      // The onClick should be present on items
      expect(passedItems[0]).toHaveProperty("label", "Regular expense")
      expect(passedItems[1]).toHaveProperty("label", "Mileage")
    })
  })

  describe("edge cases", () => {
    it("returns null when no actions are provided", () => {
      const { container } = render(<CollectionActions />)
      expect(container).toBeEmptyDOMElement()
    })

    it("returns null when empty arrays are provided", () => {
      const { container } = render(
        <CollectionActions
          primaryActions={[]}
          secondaryActions={[]}
          otherActions={[]}
        />
      )
      expect(container).toBeEmptyDOMElement()
    })

    it("uses split button mode when only some actions have descriptions", () => {
      // If any action has a description, we switch to dropdown mode
      const actions: PrimaryActionItemDefinition[] = [
        { label: "New expense", icon: mockIcon, onClick: vi.fn() },
        {
          label: "Mileage",
          icon: mockIcon,
          description: "Travel with a vehicle",
          onClick: vi.fn(),
        },
      ]

      render(<CollectionActions primaryActions={actions} />)

      // Should use dropdown mode since at least one action has a description
      expect(screen.getByTestId("dropdown")).toBeInTheDocument()
      expect(screen.queryByTestId("button-dropdown")).not.toBeInTheDocument()
    })
  })
})
