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
    onClick,
    appendOutside,
    disabled,
    ...props
  }) => (
    <>
      <button onClick={onClick} disabled={disabled} {...props}>
        {prepend && <div data-testid="action-prepend">{prepend}</div>}
        <span data-testid="action-label">{children}</span>
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

  it("renders with default selection (first item)", () => {
    render(<F0ButtonDropdown items={mockItems} onClick={mockOnClick} />)

    expect(screen.getByTestId("button-main")).toBeDefined()
    expect(screen.getByTestId("dropdown")).toBeDefined()
    expect(screen.getByTestId("chevron-icon")).toBeDefined()
    expect(screen.getByTestId("action-label").textContent).toBe("Item 1")
  })

  it("renders with provided value", () => {
    render(
      <F0ButtonDropdown items={mockItems} value="item2" onClick={mockOnClick} />
    )

    expect(screen.getByTestId("button-main")).toBeDefined()
    expect(screen.getByTestId("action-label").textContent).toBe("Item 2")
  })

  it("passes dropdown items excluding the selected item", () => {
    render(
      <F0ButtonDropdown items={mockItems} value="item1" onClick={mockOnClick} />
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
      <F0ButtonDropdown items={mockItems} value="item2" onClick={mockOnClick} />
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

    expect(screen.getByTestId("dropdown")).toHaveAttribute("data-open", "false")
    expect(mockOnClick).not.toHaveBeenCalled()
  })

  it.skip("changes selected value when dropdown item is clicked", async () => {
    const user = userEvent.setup()
    render(
      <F0ButtonDropdown items={mockItems} value="item1" onClick={mockOnClick} />
    )

    await openDropdown(user)

    userEvent.click(screen.getByText("Item 2"))

    // Now if we click the main button, it should use the new value
    await userEvent.click(screen.getByTestId("button-main"))
    expect(mockOnClick).toHaveBeenCalledWith("item2", mockItems[1])
  })
})
