import { DropdownItem } from "@/experimental/Navigation/Dropdown/internal"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { describe, expect, it, vi } from "vitest"
import { ItemActionsDropdown } from "../ItemActionsDropdown"

// Mock the imported components
vi.mock("@/components/Utilities/Icon", () => ({
  Icon: ({ icon: Icon }) => <Icon data-testid="icon" />,
}))

vi.mock("@/lib/utils", () => ({
  cn: (...classes: string[]) => classes.join(" "),
  focusRing: (className: string) => className,
}))

vi.mock("@/icons/app", () => ({
  Ellipsis: () => <div data-testid="ellipsis-icon">...</div>,
  Windows: () => <div data-testid="windows-icon">Windows</div>,
}))

vi.mock("@/experimental/Navigation/Dropdown", () => ({
  Dropdown: ({ children, items, open, onOpenChange }) => (
    <div data-testid="dropdown" data-items={JSON.stringify(items)} data-open={open}>
      {children}
      <button onClick={() => onOpenChange?.(!open)}>Toggle</button>
    </div>
  ),
  DropdownItem: ({ children }) => <div>{children}</div>,
}))

describe("ItemActionsDropdown", () => {
  const mockItems: DropdownItem[] = [
    {
      label: "View Details",
      onClick: () => {},
    },
    {
      type: "separator",
    },
    {
      label: "Edit Item",
      onClick: () => {},
    },
  ]

  it("renders dropdown with actions when items are available", () => {
    render(<ItemActionsDropdown items={mockItems} />)

    expect(screen.getByTestId("dropdown")).toBeInTheDocument()
    expect(screen.getByTestId("ellipsis-icon")).toBeInTheDocument()

    // Verify items are passed to dropdown
    const dropdownElement = screen.getByTestId("dropdown")
    const passedItems = JSON.parse(dropdownElement.getAttribute("data-items") || "[]")
    expect(passedItems).toHaveLength(3)
    expect(passedItems[0].label).toBe("View Details")
    expect(passedItems[1].type).toBe("separator")
    expect(passedItems[2].label).toBe("Edit Item")
  })

  it("doesn't render when items array is empty", () => {
    const { container } = render(<ItemActionsDropdown items={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("handles open state changes", () => {
    const onOpenChange = vi.fn()
    render(<ItemActionsDropdown items={mockItems} onOpenChange={onOpenChange} />)

    const toggleButton = screen.getByText("Toggle")
    toggleButton.click()

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })
})
