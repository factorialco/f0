import { zeroRender } from "@/testing/test-utils"
import { fireEvent, screen } from "@testing-library/react"
import React from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { F0ButtonToggleGroup } from "../F0ButtonToggleGroup"
import type { F0ButtonToggleGroupProps } from "../types"

// Mock icons for easier testing
const MockIcon = React.forwardRef<SVGSVGElement>((props, ref) => (
  <svg ref={ref} {...props} data-testid="mock-icon">
    <title>Mock Icon</title>
  </svg>
))
MockIcon.displayName = "MockIcon"

// Store the onValueChange handler to allow ToggleGroupItem to call it
let currentOnValueChange: ((value: string | string[]) => void) | undefined
let currentType: "single" | "multiple" | undefined
let currentValue: string | string[] | undefined

// Mock the subcomponent - use vi.hoisted to ensure proper hoisting
const MockF0ButtonToggleInternal = vi.hoisted(() => {
  return vi.fn(
    ({
      label,
      icon,
      disabled,
      size,
      variant,
      withBorder,
      selected,
      onSelectedChange,
      ...props
    }: {
      label: string | [string, string]
      icon: unknown
      disabled?: boolean
      size?: "sm" | "md" | "lg"
      variant?: "compact" | "expanded"
      withBorder?: boolean
      selected?: boolean
      onSelectedChange?: (selected: boolean) => void
    }) => {
      const displayLabel = Array.isArray(label) ? label[0] : label
      return (
        <button
          data-testid={`toggle-${displayLabel}`}
          data-disabled={disabled}
          data-size={size}
          data-variant={variant}
          data-with-border={withBorder}
          data-selected={selected}
          onClick={() => onSelectedChange?.(!selected)}
          disabled={disabled}
          {...props}
        >
          {displayLabel}
        </button>
      )
    }
  )
})

vi.mock("../F0ButtonToggle/internal/F0ButtonToggle.internal", () => ({
  F0ButtonToggleInternal: MockF0ButtonToggleInternal,
}))

// Mock Radix UI ToggleGroup - must be inside vi.mock factory due to hoisting
vi.mock("@radix-ui/react-toggle-group", () => {
  const MockToggleGroup = vi.fn(
    ({
      children,
      onValueChange,
      value,
      type,
      disabled,
      className,
    }: {
      children: React.ReactNode
      onValueChange?: (value: string | string[]) => void
      value?: string | string[]
      type?: "single" | "multiple"
      disabled?: boolean
      className?: string
    }) => {
      // Store these for ToggleGroupItem to use
      currentOnValueChange = onValueChange
      currentType = type
      currentValue = value

      return (
        <div
          data-testid="toggle-group"
          data-type={type}
          data-disabled={disabled}
          className={className}
        >
          {children}
        </div>
      )
    }
  )

  const MockToggleGroupItem = vi.fn(
    ({
      children,
      value: itemValue,
    }: {
      children: React.ReactNode
      value: string
    }) => {
      const handleClick = () => {
        if (!currentOnValueChange) return

        if (currentType === "single") {
          // In single mode, clicking selects that item (or deselects if already selected)
          const current = currentValue as string | undefined
          currentOnValueChange(current === itemValue ? "" : itemValue)
        } else if (currentType === "multiple") {
          // In multiple mode, clicking toggles the item
          const current = (currentValue as string[]) || []
          if (current.includes(itemValue)) {
            currentOnValueChange(current.filter((v) => v !== itemValue))
          } else {
            currentOnValueChange([...current, itemValue])
          }
        }
      }

      return (
        <div
          data-testid={`toggle-item-${itemValue}`}
          data-value={itemValue}
          onClick={handleClick}
        >
          {children}
        </div>
      )
    }
  )

  return {
    ToggleGroup: MockToggleGroup,
    ToggleGroupItem: MockToggleGroupItem,
  }
})

// Mock browser APIs
beforeEach(() => {
  // Reset mock state
  currentOnValueChange = undefined
  currentType = undefined
  currentValue = undefined

  // Mock ResizeObserver
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))

  // Mock getBoundingClientRect
  vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
    () => ({
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      bottom: 100,
      right: 100,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    })
  )

  // Clear all mocks before each test
  vi.clearAllMocks()
})

describe("F0ButtonToggleGroup", () => {
  const mockItems: F0ButtonToggleGroupProps["items"] = [
    {
      value: "value1",
      label: "Option 1",
      icon: MockIcon,
    },
    {
      value: "value2",
      label: "Option 2",
      icon: MockIcon,
    },
    {
      value: "value3",
      label: "Option 3",
      icon: MockIcon,
    },
  ]

  describe("Basic Rendering", () => {
    it("renders with items array", () => {
      zeroRender(
        <F0ButtonToggleGroup items={mockItems} size="md" multiple={false} />
      )

      expect(screen.getByTestId("toggle-group")).toBeInTheDocument()
      expect(screen.getByTestId("toggle-item-value1")).toBeInTheDocument()
      expect(screen.getByTestId("toggle-item-value2")).toBeInTheDocument()
      expect(screen.getByTestId("toggle-item-value3")).toBeInTheDocument()
    })

    it("renders correct number of toggle buttons", () => {
      zeroRender(
        <F0ButtonToggleGroup items={mockItems} size="md" multiple={false} />
      )

      expect(
        screen.getByRole("button", { name: "Option 1" })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Option 2" })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Option 3" })
      ).toBeInTheDocument()
    })

    it("applies correct CSS classes to ToggleGroup", () => {
      zeroRender(
        <F0ButtonToggleGroup items={mockItems} size="md" multiple={false} />
      )

      const toggleGroup = screen.getByTestId("toggle-group")
      expect(toggleGroup).toHaveClass(
        "flex",
        "items-center",
        "justify-center",
        "gap-1"
      )
    })

    it("passes size prop to subcomponents", () => {
      zeroRender(
        <F0ButtonToggleGroup items={mockItems} size="lg" multiple={false} />
      )

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      // Check that the button has the large size class (h-10 for lg)
      expect(toggle1).toHaveClass("h-10")
    })

    it("passes variant prop to subcomponents", () => {
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          variant="expanded"
        />
      )

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      // Check that expanded variant is applied (has p-2 class)
      expect(toggle1).toHaveClass("p-2")
    })

    it("passes withBorder prop to subcomponents", () => {
      zeroRender(
        <F0ButtonToggleGroup items={mockItems} size="md" multiple={false} />
      )

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      // Check that border is applied (has border class)
      expect(toggle1).toHaveClass("border")
    })
  })

  describe("Single Selection Mode", () => {
    it("handles initial value", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          value="value1"
          onChange={onChange}
        />
      )

      const toggleGroup = screen.getByTestId("toggle-group")
      expect(toggleGroup).toHaveAttribute("data-type", "single")
      // When disabled is false, the attribute might be undefined/null, so check it's not "true"
      expect(toggleGroup.getAttribute("data-disabled")).not.toBe("true")
    })

    it("calls onChange with string value when selection changes", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          onChange={onChange}
        />
      )

      // Click on an item to simulate selection
      const toggleItem = screen.getByTestId("toggle-item-value2")
      fireEvent.click(toggleItem)

      expect(onChange).toHaveBeenCalledWith("value2")
    })

    it("updates value when selection changes", () => {
      const onChange = vi.fn()
      const { rerender } = zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          value="value1"
          onChange={onChange}
        />
      )

      // Change value externally
      rerender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          value="value2"
          onChange={onChange}
        />
      )

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      const toggle2 = screen.getByRole("button", { name: "Option 2" })

      // After rerender, value2 should be selected
      expect(toggle2).toHaveAttribute("aria-pressed", "true")
      expect(toggle1).toHaveAttribute("aria-pressed", "false")
    })

    it("prevents clearing selection when required is true", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          value="value1"
          required={true}
          onChange={onChange}
        />
      )

      // Clear any initial onChange calls
      onChange.mockClear()

      // Try to click the same item to deselect (should be prevented)
      const toggleItem = screen.getByTestId("toggle-item-value1")
      fireEvent.click(toggleItem)

      // onChange should not be called because required prevents clearing
      expect(onChange).not.toHaveBeenCalled()
    })

    it("allows changing selection when required is true", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          value="value1"
          required={true}
          onChange={onChange}
        />
      )

      onChange.mockClear()

      // Click on a different item to change selection
      const toggleItem = screen.getByTestId("toggle-item-value2")
      fireEvent.click(toggleItem)

      // onChange should be called because we're changing, not clearing
      expect(onChange).toHaveBeenCalledWith("value2")
    })

    it("works in controlled mode", () => {
      const onChange = vi.fn()
      const { rerender } = zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          value="value1"
          onChange={onChange}
        />
      )

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      expect(toggle1).toHaveAttribute("aria-pressed", "true")

      // Update value externally
      rerender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          value="value2"
          onChange={onChange}
        />
      )

      const toggle2 = screen.getByRole("button", { name: "Option 2" })
      expect(toggle2).toHaveAttribute("aria-pressed", "true")
      expect(toggle1).toHaveAttribute("aria-pressed", "false")
    })

    it("works in uncontrolled mode", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          onChange={onChange}
        />
      )

      // Initially no selection
      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      expect(toggle1).toHaveAttribute("aria-pressed", "false")

      // Click to select
      const toggleItem = screen.getByTestId("toggle-item-value1")
      fireEvent.click(toggleItem)

      expect(onChange).toHaveBeenCalledWith("value1")
    })
  })

  describe("Multiple Selection Mode", () => {
    it("handles initial value as array", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          value={["value1", "value2"]}
          onChange={onChange}
        />
      )

      const toggleGroup = screen.getByTestId("toggle-group")
      expect(toggleGroup).toHaveAttribute("data-type", "multiple")
    })

    it("calls onChange with string array when selection changes", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          onChange={onChange}
        />
      )

      // Click on first item to select it
      const toggleItem1 = screen.getByTestId("toggle-item-value1")
      fireEvent.click(toggleItem1)

      // Should have been called with array containing value1
      expect(onChange).toHaveBeenCalledWith(["value1"])

      // Click on second item to add it to selection
      const toggleItem2 = screen.getByTestId("toggle-item-value2")
      fireEvent.click(toggleItem2)

      // Should have been called with array containing both values
      expect(onChange).toHaveBeenCalledWith(["value1", "value2"])
    })

    it("updates array when items are deselected", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          value={["value1", "value2"]}
          onChange={onChange}
        />
      )

      onChange.mockClear()

      // Click on value2 to deselect it
      const toggleItem2 = screen.getByTestId("toggle-item-value2")
      fireEvent.click(toggleItem2)

      expect(onChange).toHaveBeenCalledWith(["value1"])
    })

    it("prevents clearing all selections when required is true", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          value={["value1"]}
          required={true}
          onChange={onChange}
        />
      )

      onChange.mockClear()

      // Try to deselect the only selected item (should be prevented)
      const toggleItem1 = screen.getByTestId("toggle-item-value1")
      fireEvent.click(toggleItem1)

      // onChange should not be called because required prevents clearing all
      expect(onChange).not.toHaveBeenCalled()
    })

    it("allows changing selection when required is true", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          value={["value1"]}
          required={true}
          onChange={onChange}
        />
      )

      onChange.mockClear()

      // Add another selection
      const toggleItem2 = screen.getByTestId("toggle-item-value2")
      fireEvent.click(toggleItem2)

      // onChange should be called because we're changing, not clearing all
      expect(onChange).toHaveBeenCalledWith(["value1", "value2"])
    })

    it("works in controlled mode", () => {
      const onChange = vi.fn()
      const { rerender } = zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          value={["value1"]}
          onChange={onChange}
        />
      )

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      expect(toggle1).toHaveAttribute("aria-pressed", "true")

      // Update value externally
      rerender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          value={["value2", "value3"]}
          onChange={onChange}
        />
      )

      const toggle2 = screen.getByRole("button", { name: "Option 2" })
      const toggle3 = screen.getByRole("button", { name: "Option 3" })
      expect(toggle2).toHaveAttribute("aria-pressed", "true")
      expect(toggle3).toHaveAttribute("aria-pressed", "true")
      expect(toggle1).toHaveAttribute("aria-pressed", "false")
    })

    it("works in uncontrolled mode", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          onChange={onChange}
        />
      )

      // Initially no selections
      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      expect(toggle1).toHaveAttribute("aria-pressed", "false")

      // Click to select
      const toggleItem1 = screen.getByTestId("toggle-item-value1")
      fireEvent.click(toggleItem1)

      expect(onChange).toHaveBeenCalledWith(["value1"])
    })
  })

  describe("Disabled State", () => {
    it("disables all items when group-level disabled is true", () => {
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          disabled={true}
        />
      )

      const toggleGroup = screen.getByTestId("toggle-group")
      expect(toggleGroup).toHaveAttribute("data-disabled", "true")

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      const toggle2 = screen.getByRole("button", { name: "Option 2" })
      const toggle3 = screen.getByRole("button", { name: "Option 3" })

      expect(toggle1).toBeDisabled()
      expect(toggle2).toBeDisabled()
      expect(toggle3).toBeDisabled()
    })

    it("respects individual item disabled prop", () => {
      const itemsWithDisabled: F0ButtonToggleGroupProps["items"] = [
        {
          value: "value1",
          label: "Option 1",
          icon: MockIcon,
          disabled: true,
        },
        {
          value: "value2",
          label: "Option 2",
          icon: MockIcon,
        },
      ]

      zeroRender(
        <F0ButtonToggleGroup
          items={itemsWithDisabled}
          size="md"
          multiple={false}
        />
      )

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      const toggle2 = screen.getByRole("button", { name: "Option 2" })

      expect(toggle1).toBeDisabled()
      expect(toggle2).not.toBeDisabled()
    })

    it("combines group-level and item-level disabled", () => {
      const itemsWithDisabled: F0ButtonToggleGroupProps["items"] = [
        {
          value: "value1",
          label: "Option 1",
          icon: MockIcon,
          disabled: false,
        },
        {
          value: "value2",
          label: "Option 2",
          icon: MockIcon,
        },
      ]

      zeroRender(
        <F0ButtonToggleGroup
          items={itemsWithDisabled}
          size="md"
          multiple={false}
          disabled={true}
        />
      )

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      const toggle2 = screen.getByRole("button", { name: "Option 2" })

      // Both should be disabled because group-level disabled overrides
      expect(toggle1).toBeDisabled()
      expect(toggle2).toBeDisabled()
    })
  })

  describe("Value Synchronization", () => {
    it("syncs external value changes to local state", () => {
      const onChange = vi.fn()
      const { rerender } = zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          value="value1"
          onChange={onChange}
        />
      )

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      expect(toggle1).toHaveAttribute("aria-pressed", "true")

      // Change value externally
      rerender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          value="value2"
          onChange={onChange}
        />
      )

      const toggle2 = screen.getByRole("button", { name: "Option 2" })
      expect(toggle2).toHaveAttribute("aria-pressed", "true")
      expect(toggle1).toHaveAttribute("aria-pressed", "false")
    })

    it("calls onChange with correct type based on multiple prop (single)", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          value="value1"
          onChange={onChange}
        />
      )

      // The useEffect should call onChange on mount
      // Note: This tests the useEffect that calls onChange when localValue changes
      expect(onChange).toHaveBeenCalledWith("value1")
    })

    it("calls onChange with correct type based on multiple prop (multiple)", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          value={["value1"]}
          onChange={onChange}
        />
      )

      // The useEffect should call onChange on mount
      expect(onChange).toHaveBeenCalledWith(["value1"])
    })

    it("handles value prop changes in multiple mode", () => {
      const onChange = vi.fn()
      const { rerender } = zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          value={["value1"]}
          onChange={onChange}
        />
      )

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      expect(toggle1).toHaveAttribute("aria-pressed", "true")

      // Update value externally
      rerender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          value={["value2", "value3"]}
          onChange={onChange}
        />
      )

      const toggle2 = screen.getByRole("button", { name: "Option 2" })
      const toggle3 = screen.getByRole("button", { name: "Option 3" })
      expect(toggle2).toHaveAttribute("aria-pressed", "true")
      expect(toggle3).toHaveAttribute("aria-pressed", "true")
      expect(toggle1).toHaveAttribute("aria-pressed", "false")
    })
  })

  describe("Edge Cases", () => {
    it("handles empty items array", () => {
      zeroRender(<F0ButtonToggleGroup items={[]} size="md" multiple={false} />)

      const toggleGroup = screen.getByTestId("toggle-group")
      expect(toggleGroup).toBeInTheDocument()
      // No toggle items should be rendered
      expect(screen.queryByTestId("toggle-item-value1")).not.toBeInTheDocument()
    })

    it("handles undefined onChange handler", () => {
      expect(() => {
        zeroRender(
          <F0ButtonToggleGroup items={mockItems} size="md" multiple={false} />
        )
      }).not.toThrow()
    })

    it("handles items array changes", () => {
      const { rerender } = zeroRender(
        <F0ButtonToggleGroup items={mockItems} size="md" multiple={false} />
      )

      expect(
        screen.getByRole("button", { name: "Option 1" })
      ).toBeInTheDocument()

      const newItems: F0ButtonToggleGroupProps["items"] = [
        {
          value: "value4",
          label: "Option 4",
          icon: MockIcon,
        },
      ]

      rerender(
        <F0ButtonToggleGroup items={newItems} size="md" multiple={false} />
      )

      expect(
        screen.queryByRole("button", { name: "Option 1" })
      ).not.toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Option 4" })
      ).toBeInTheDocument()
    })

    it("handles value prop being undefined initially", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={false}
          onChange={onChange}
        />
      )

      // Should render without errors
      expect(screen.getByTestId("toggle-group")).toBeInTheDocument()
    })

    it("handles value prop being undefined in multiple mode", () => {
      const onChange = vi.fn()
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          onChange={onChange}
        />
      )

      // Should render without errors
      expect(screen.getByTestId("toggle-group")).toBeInTheDocument()
    })

    it("correctly determines selected state for items", () => {
      zeroRender(
        <F0ButtonToggleGroup
          items={mockItems}
          size="md"
          multiple={true}
          value={["value1", "value3"]}
        />
      )

      const toggle1 = screen.getByRole("button", { name: "Option 1" })
      const toggle2 = screen.getByRole("button", { name: "Option 2" })
      const toggle3 = screen.getByRole("button", { name: "Option 3" })

      expect(toggle1).toHaveAttribute("aria-pressed", "true")
      expect(toggle2).toHaveAttribute("aria-pressed", "false")
      expect(toggle3).toHaveAttribute("aria-pressed", "true")
    })

    it("handles all size variants", () => {
      const sizes: Array<"sm" | "md" | "lg"> = ["sm", "md", "lg"]

      sizes.forEach((size) => {
        const { unmount } = zeroRender(
          <F0ButtonToggleGroup items={mockItems} size={size} multiple={false} />
        )

        const toggle1 = screen.getByRole("button", { name: "Option 1" })
        // Check size classes: sm=h-6, md=h-8, lg=h-10
        const sizeClasses = { sm: "h-6", md: "h-8", lg: "h-10" }
        expect(toggle1).toHaveClass(sizeClasses[size])
        unmount()
      })
    })

    it("handles all variant options", () => {
      const variants: Array<"compact" | "expanded"> = ["compact", "expanded"]

      variants.forEach((variant) => {
        const { unmount } = zeroRender(
          <F0ButtonToggleGroup
            items={mockItems}
            size="md"
            multiple={false}
            variant={variant}
          />
        )

        const toggle1 = screen.getByRole("button", { name: "Option 1" })
        // Check variant: expanded has p-2 class, compact doesn't
        if (variant === "expanded") {
          expect(toggle1).toHaveClass("p-2")
        }
        unmount()
      })
    })
  })
})
