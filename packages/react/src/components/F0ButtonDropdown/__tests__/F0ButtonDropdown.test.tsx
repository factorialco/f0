import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { IconType } from "@/components/F0Icon"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0ButtonDropdown } from "../index"
// Mock the imported components
vi.mock("@/ui/Action", () => ({
  actionSizes: ["sm", "md", "lg"],
  Action: ({
    children,
    prepend,
    append,
    onClick,
    appendOutside,
    disabled,
    pressed,
    ...props
  }) => (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        data-pressed={pressed}
        {...props}
      >
        {prepend && <div data-testid="action-prepend">{prepend}</div>}
        <span data-testid="action-label">{children}</span>
        {append && <div data-testid="action-append-inline">{append}</div>}
      </button>
      {appendOutside && <div data-testid="action-append">{appendOutside}</div>}
    </>
  ),
}))

vi.mock("@/experimental/Navigation/Dropdown/internal.tsx", () => ({
  DropdownInternal: ({ children, items, open, onOpenChange }) => (
    <div
      data-testid="dropdown"
      data-items={JSON.stringify(items)}
      data-open={open}
      onClick={() => onOpenChange && onOpenChange(!open)}
    >
      {children}
    </div>
  ),
}))

vi.mock("@/icons/app", () => ({
  ChevronDown: () => <div data-testid="chevron-icon">▼</div>,
}))

vi.mock("@/components/F0Icon", () => ({
  F0Icon: ({ icon: IconComponent }) => <IconComponent data-testid="icon" />,
}))

describe("F0ButtonDropdown", () => {
  const openDropdown = async (user: ReturnType<typeof userEvent.setup>) => {
    user.click(screen.getByTestId("button-menu"))

    await waitFor(() =>
      expect(screen.getByTestId("dropdown")).toHaveAttribute(
        "data-open",
        "true"
      )
    )
  }

  const mockIcons: Record<string, IconType> = {
    Icon1: (() => <div data-testid="icon1">Icon1</div>) as unknown as IconType,
    Icon2: (() => <div data-testid="icon2">Icon2</div>) as unknown as IconType,
    Icon3: (() => <div data-testid="icon3">Icon3</div>) as unknown as IconType,
  }

  const mockItems = [
    { value: "item1", label: "Item 1", icon: mockIcons.Icon1 },
    { value: "item2", label: "Item 2", icon: mockIcons.Icon2 },
    { value: "item3", label: "Item 3", icon: mockIcons.Icon3 },
  ]

  const mockOnClick = vi.fn()

  beforeEach(() => {
    mockOnClick.mockReset()
  })

  describe("split mode (default)", () => {
    it("renders with default selection (first item)", () => {
      render(<F0ButtonDropdown items={mockItems} onClick={mockOnClick} />)

      expect(screen.getByTestId("button-main")).toBeDefined()
      expect(screen.getByTestId("dropdown")).toBeDefined()
      expect(screen.getByTestId("chevron-icon")).toBeDefined()
      expect(screen.getByTestId("action-label").textContent).toBe("Item 1")
    })

    it("renders with provided value", () => {
      render(
        <F0ButtonDropdown
          items={mockItems}
          value="item2"
          onClick={mockOnClick}
        />
      )

      expect(screen.getByTestId("button-main")).toBeDefined()
      expect(screen.getByTestId("action-label").textContent).toBe("Item 2")
    })

    it("passes dropdown items excluding the selected item", () => {
      render(
        <F0ButtonDropdown
          items={mockItems}
          value="item1"
          onClick={mockOnClick}
        />
      )

      const dropdownElement = screen.getByTestId("dropdown")
      const passedItems = JSON.parse(
        dropdownElement.getAttribute("data-items") || "[]"
      )

      expect(passedItems).toHaveLength(2)
      expect(passedItems[0].label).toBe("Item 2")
      expect(passedItems[1].label).toBe("Item 3")
      expect(
        passedItems.find((item: { label: string }) => item.label === "Item 1")
      ).toBeUndefined()
      expect(mockOnClick).not.toHaveBeenCalled()
    })

    it("calls onClick with correct values when button is clicked", async () => {
      const user = userEvent.setup()
      render(
        <F0ButtonDropdown
          items={mockItems}
          value="item2"
          onClick={mockOnClick}
        />
      )

      await user.click(screen.getByTestId("button-main"))

      expect(mockOnClick).toHaveBeenCalledTimes(1)
      expect(mockOnClick).toHaveBeenCalledWith("item2", mockItems[1])
    })

    it("does not open dropdown when disabled", async () => {
      const user = userEvent.setup()
      render(
        <F0ButtonDropdown
          items={mockItems}
          disabled={true}
          onClick={mockOnClick}
        />
      )

      expect(screen.getByTestId("button-main").disabled).toBe(true)
      expect(screen.getByTestId("button-menu").disabled).toBe(true)

      await user.click(screen.getByTestId("button-menu"))

      expect(screen.getByTestId("dropdown")).toHaveAttribute(
        "data-open",
        "false"
      )
      expect(mockOnClick).not.toHaveBeenCalled()
    })

    it.skip("changes selected value when dropdown item is clicked", async () => {
      const user = userEvent.setup()
      render(
        <F0ButtonDropdown
          items={mockItems}
          value="item1"
          onClick={mockOnClick}
        />
      )

      await openDropdown(user)

      userEvent.click(screen.getByText("Item 2"))

      // Now if we click the main button, it should use the new value
      await userEvent.click(screen.getByTestId("button-main"))
      expect(mockOnClick).toHaveBeenCalledWith("item2", mockItems[1])
    })
  })

  describe("dropdown mode", () => {
    const mockItemsWithDescriptions = [
      {
        value: "expense",
        label: "Regular expense",
        icon: mockIcons.Icon1,
        description: "Costs proven by receipts or invoices",
      },
      {
        value: "mileage",
        label: "Mileage",
        icon: mockIcons.Icon2,
        description: "Travel with a personal vehicle",
      },
      {
        value: "perdiem",
        label: "Per diem",
        icon: mockIcons.Icon3,
        description: "Fixed daily travel allowance",
      },
    ]

    it("renders a single trigger button with chevron", () => {
      render(
        <F0ButtonDropdown
          mode="dropdown"
          items={mockItemsWithDescriptions}
          onClick={mockOnClick}
        />
      )

      // Should render the dropdown trigger, not a split button
      expect(screen.getByTestId("button-dropdown-trigger")).toBeInTheDocument()
      expect(screen.queryByTestId("button-main")).not.toBeInTheDocument()
      expect(screen.queryByTestId("button-menu")).not.toBeInTheDocument()

      // Should show the first item's label as the trigger
      expect(screen.getByTestId("action-label").textContent).toBe(
        "Regular expense"
      )

      // Should have an inline chevron (append), not appendOutside
      expect(screen.getByTestId("action-append-inline")).toBeInTheDocument()
      expect(screen.queryByTestId("action-append")).not.toBeInTheDocument()
    })

    it("includes ALL items in the dropdown (not excluding selected)", () => {
      render(
        <F0ButtonDropdown
          mode="dropdown"
          items={mockItemsWithDescriptions}
          onClick={mockOnClick}
        />
      )

      const dropdown = screen.getByTestId("dropdown")
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

    it("uses custom trigger label and icon when provided", () => {
      const triggerIcon: IconType = (() => (
        <div data-testid="trigger-icon">trigger</div>
      )) as unknown as IconType

      render(
        <F0ButtonDropdown
          mode="dropdown"
          trigger={{ label: "New expense", icon: triggerIcon }}
          items={mockItemsWithDescriptions}
          onClick={mockOnClick}
        />
      )

      // Trigger should show custom label, not the first item's label
      expect(screen.getByText("New expense")).toBeInTheDocument()
      expect(screen.queryByText("Regular expense")).not.toBeInTheDocument()

      // Dropdown items should still include all items
      const dropdown = screen.getByTestId("dropdown")
      const passedItems = JSON.parse(
        dropdown.getAttribute("data-items") || "[]"
      )
      expect(passedItems).toHaveLength(3)
      expect(passedItems[0].label).toBe("Regular expense")
    })

    it("falls back to first item label when no trigger is provided", () => {
      render(
        <F0ButtonDropdown
          mode="dropdown"
          items={mockItemsWithDescriptions}
          onClick={mockOnClick}
        />
      )

      expect(screen.getByTestId("action-label").textContent).toBe(
        "Regular expense"
      )
    })

    it("renders nothing when no items are provided", () => {
      const { container } = render(
        <F0ButtonDropdown mode="dropdown" items={[]} onClick={mockOnClick} />
      )

      expect(container).toBeEmptyDOMElement()
    })

    it("does not open dropdown when disabled", async () => {
      render(
        <F0ButtonDropdown
          mode="dropdown"
          items={mockItemsWithDescriptions}
          disabled={true}
          onClick={mockOnClick}
        />
      )

      const dropdown = screen.getByTestId("dropdown")
      expect(dropdown).toHaveAttribute("data-open", "false")
    })
  })
})
