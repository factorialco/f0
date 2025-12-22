import { zeroRender } from "@/testing/test-utils"
import { fireEvent, screen } from "@testing-library/react"
import React, { useState } from "react"
import { describe, expect, it, vi } from "vitest"
import { F0ButtonToggle } from "../F0ButtonToggle"

// Mock icons for easier testing
const MockIconOff = React.forwardRef<SVGSVGElement>((props, ref) => (
  <svg ref={ref} {...props} data-testid="mock-icon-off">
    <title>Mock Icon Off</title>
  </svg>
))
MockIconOff.displayName = "MockIconOff"

const MockIconOn = React.forwardRef<SVGSVGElement>((props, ref) => (
  <svg ref={ref} {...props} data-testid="mock-icon-on">
    <title>Mock Icon On</title>
  </svg>
))
MockIconOn.displayName = "MockIconOn"

const MockSingleIcon = React.forwardRef<SVGSVGElement>((props, ref) => (
  <svg ref={ref} {...props} data-testid="mock-single-icon">
    <title>Mock Single Icon</title>
  </svg>
))
MockSingleIcon.displayName = "MockSingleIcon"

describe("F0ButtonToggle", () => {
  describe("Basic Rendering", () => {
    it("renders with single icon", () => {
      zeroRender(<F0ButtonToggle label="Test toggle" icon={MockSingleIcon} />)

      const button = screen.getByRole("button", { name: "Test toggle" })
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute("aria-label", "Test toggle")

      // Check that the icon is rendered
      expect(screen.getByTestId("mock-single-icon")).toBeInTheDocument()
    })

    it("renders with dual icons (array)", () => {
      zeroRender(
        <F0ButtonToggle
          label="Dual icon toggle"
          icon={[MockIconOff, MockIconOn]}
        />
      )

      const button = screen.getByRole("button", { name: "Dual icon toggle" })
      expect(button).toBeInTheDocument()

      // Should show the "off" icon when not selected
      expect(screen.getByTestId("mock-icon-off")).toBeInTheDocument()
      expect(screen.queryByTestId("mock-icon-on")).not.toBeInTheDocument()
    })

    it("applies correct default classes and structure", () => {
      zeroRender(<F0ButtonToggle label="Test toggle" icon={MockSingleIcon} />)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("aspect-square")
      expect(button).toHaveClass("h-8") // default medium size
    })
  })

  describe("Toggle State", () => {
    it("starts unselected by default", () => {
      zeroRender(<F0ButtonToggle label="Test toggle" icon={MockSingleIcon} />)

      const button = screen.getByRole("button")
      expect(button).toHaveAttribute("aria-pressed", "false")
    })

    it("respects initial selected state", () => {
      zeroRender(
        <F0ButtonToggle
          label="Test toggle"
          icon={MockSingleIcon}
          selected={true}
        />
      )

      const button = screen.getByRole("button")
      expect(button).toHaveAttribute("aria-pressed", "true")
    })

    it("toggles state when clicked", () => {
      zeroRender(<F0ButtonToggle label="Test toggle" icon={MockSingleIcon} />)

      const button = screen.getByRole("button")
      expect(button).toHaveAttribute("aria-pressed", "false")

      fireEvent.click(button)
      expect(button).toHaveAttribute("aria-pressed", "true")

      fireEvent.click(button)
      expect(button).toHaveAttribute("aria-pressed", "false")
    })
  })

  describe("Callback Functions", () => {
    it("calls onSelectedChange when toggled", () => {
      const onSelectedChange = vi.fn()

      zeroRender(
        <F0ButtonToggle
          label="Test toggle"
          icon={MockSingleIcon}
          selected={false}
          onSelectedChange={onSelectedChange}
        />
      )

      // Clear the initial call that happens on mount
      onSelectedChange.mockClear()

      const button = screen.getByRole("button")
      fireEvent.click(button)

      expect(onSelectedChange).toHaveBeenCalledWith(true)
    })

    it("calls onSelectedChange with correct values on multiple toggles", () => {
      const onSelectedChange = vi.fn()

      // We need a wrapper component because hooks (useState) can only be called
      // inside React components, not in test functions
      const TestWrapper = () => {
        const [selected, setSelected] = useState(false)

        const handleSelectedChange = (newSelected: boolean) => {
          setSelected(newSelected)
          onSelectedChange(newSelected)
        }

        return (
          <F0ButtonToggle
            label="Test toggle"
            icon={MockSingleIcon}
            selected={selected}
            onSelectedChange={handleSelectedChange}
          />
        )
      }

      zeroRender(<TestWrapper />)

      // Clear the initial call that happens on mount
      onSelectedChange.mockClear()

      const button = screen.getByRole("button")

      fireEvent.click(button)
      expect(onSelectedChange).toHaveBeenLastCalledWith(true)

      fireEvent.click(button)
      expect(onSelectedChange).toHaveBeenLastCalledWith(false)

      expect(onSelectedChange).toHaveBeenCalledTimes(2)
    })

    it("works without onSelectedChange callback", () => {
      expect(() => {
        zeroRender(<F0ButtonToggle label="Test toggle" icon={MockSingleIcon} />)

        const button = screen.getByRole("button")
        fireEvent.click(button)
      }).not.toThrow()
    })
  })

  describe("Disabled State", () => {
    it("respects disabled prop", () => {
      zeroRender(
        <F0ButtonToggle
          label="Test toggle"
          icon={MockSingleIcon}
          disabled={true}
        />
      )

      const button = screen.getByRole("button")
      expect(button).toBeDisabled()
    })

    it("does not toggle when disabled", () => {
      const onSelectedChange = vi.fn()

      zeroRender(
        <F0ButtonToggle
          label="Test toggle"
          icon={MockSingleIcon}
          disabled={true}
          onSelectedChange={onSelectedChange}
        />
      )

      // Clear the initial call that happens on mount
      onSelectedChange.mockClear()

      const button = screen.getByRole("button")
      fireEvent.click(button)

      expect(button).toHaveAttribute("aria-pressed", "false")
      expect(onSelectedChange).not.toHaveBeenCalled()
    })
  })

  describe("Accessibility", () => {
    it("has proper aria-label", () => {
      zeroRender(
        <F0ButtonToggle label="Toggle microphone" icon={MockSingleIcon} />
      )

      const button = screen.getByRole("button", { name: "Toggle microphone" })
      expect(button).toHaveAttribute("aria-label", "Toggle microphone")
    })

    it("has proper aria-pressed attribute", () => {
      zeroRender(
        <F0ButtonToggle
          label="Test toggle"
          icon={MockSingleIcon}
          selected={true}
        />
      )

      const button = screen.getByRole("button")
      expect(button).toHaveAttribute("aria-pressed", "true")
    })

    it("is focusable and keyboard accessible", () => {
      zeroRender(<F0ButtonToggle label="Test toggle" icon={MockSingleIcon} />)

      const button = screen.getByRole("button")
      button.focus()
      expect(button).toHaveFocus()
    })
  })

  describe("Size Variants", () => {
    it("applies small size classes", () => {
      zeroRender(
        <F0ButtonToggle label="Small toggle" icon={MockSingleIcon} size="sm" />
      )

      const button = screen.getByRole("button")
      expect(button).toHaveClass("h-6")
    })

    it("applies medium size classes (default)", () => {
      zeroRender(
        <F0ButtonToggle label="Medium toggle" icon={MockSingleIcon} size="md" />
      )

      const button = screen.getByRole("button")
      expect(button).toHaveClass("h-8")
    })

    it("applies large size classes", () => {
      zeroRender(
        <F0ButtonToggle label="Large toggle" icon={MockSingleIcon} size="lg" />
      )

      const button = screen.getByRole("button")
      expect(button).toHaveClass("h-10")
    })

    it("defaults to medium size when size prop is not provided", () => {
      zeroRender(
        <F0ButtonToggle label="Default size toggle" icon={MockSingleIcon} />
      )

      const button = screen.getByRole("button")
      expect(button).toHaveClass("h-8")
    })
  })

  describe("Icon Handling", () => {
    it("displays single icon consistently", () => {
      const { rerender } = zeroRender(
        <F0ButtonToggle
          label="Single icon"
          icon={MockSingleIcon}
          selected={false}
        />
      )

      let button = screen.getByRole("button")
      expect(button).toBeInTheDocument()
      // Single icon should always be visible regardless of state
      expect(screen.getByTestId("mock-single-icon")).toBeInTheDocument()

      // Toggle state and check icon remains consistent
      rerender(
        <F0ButtonToggle
          label="Single icon"
          icon={MockSingleIcon}
          selected={true}
        />
      )

      button = screen.getByRole("button")
      expect(button).toBeInTheDocument()
      // Same icon should still be visible after state change
      expect(screen.getByTestId("mock-single-icon")).toBeInTheDocument()
    })

    it("handles dual icons correctly based on state", () => {
      const { rerender } = zeroRender(
        <F0ButtonToggle
          label="Dual icons"
          icon={[MockIconOff, MockIconOn]}
          selected={false}
        />
      )

      let button = screen.getByRole("button")
      expect(button).toBeInTheDocument()

      // When not selected, should show the first icon (off state)
      expect(screen.getByTestId("mock-icon-off")).toBeInTheDocument()

      // Toggle to selected state
      rerender(
        <F0ButtonToggle
          label="Dual icons"
          icon={[MockIconOff, MockIconOn]}
          selected={true}
        />
      )

      button = screen.getByRole("button")
      expect(button).toBeInTheDocument()

      // When selected, should show the second icon (on state)
      expect(screen.getByTestId("mock-icon-on")).toBeInTheDocument()
    })

    it("switches icons when user clicks dual icon toggle", () => {
      zeroRender(
        <F0ButtonToggle
          label="Clickable dual icons"
          icon={[MockIconOff, MockIconOn]}
        />
      )

      const button = screen.getByRole("button")

      // Initially should show off icon
      expect(screen.getByTestId("mock-icon-off")).toBeInTheDocument()
      expect(button).toHaveAttribute("aria-pressed", "false")

      // Click to toggle
      fireEvent.click(button)

      // Should now show on icon and be in pressed state
      expect(screen.getByTestId("mock-icon-on")).toBeInTheDocument()
      expect(button).toHaveAttribute("aria-pressed", "true")

      // Click to toggle back
      fireEvent.click(button)

      // Should show off icon again and not be pressed
      expect(screen.getByTestId("mock-icon-off")).toBeInTheDocument()
      expect(button).toHaveAttribute("aria-pressed", "false")
    })
  })

  describe("State Management", () => {
    it("updates local state when selected prop changes", () => {
      const { rerender } = zeroRender(
        <F0ButtonToggle
          label="Controlled toggle"
          icon={MockSingleIcon}
          selected={false}
        />
      )

      let button = screen.getByRole("button")
      expect(button).toHaveAttribute("aria-pressed", "false")

      rerender(
        <F0ButtonToggle
          label="Controlled toggle"
          icon={MockSingleIcon}
          selected={true}
        />
      )

      button = screen.getByRole("button")
      expect(button).toHaveAttribute("aria-pressed", "true")
    })

    it("maintains internal state for uncontrolled usage", () => {
      zeroRender(
        <F0ButtonToggle label="Uncontrolled toggle" icon={MockSingleIcon} />
      )

      const button = screen.getByRole("button")

      expect(button).toHaveAttribute("aria-pressed", "false")

      fireEvent.click(button)
      expect(button).toHaveAttribute("aria-pressed", "true")

      fireEvent.click(button)
      expect(button).toHaveAttribute("aria-pressed", "false")
    })

    it("respects defaultSelected prop for initial state", () => {
      zeroRender(
        <F0ButtonToggle
          label="Default selected toggle"
          icon={MockSingleIcon}
          defaultSelected={true}
        />
      )

      const button = screen.getByRole("button")
      // Should start selected when defaultSelected is true
      expect(button).toHaveAttribute("aria-pressed", "true")

      // Should be able to toggle from defaultSelected state
      fireEvent.click(button)
      expect(button).toHaveAttribute("aria-pressed", "false")

      fireEvent.click(button)
      expect(button).toHaveAttribute("aria-pressed", "true")
    })

    it("defaults to false when defaultSelected is not provided", () => {
      zeroRender(
        <F0ButtonToggle
          label="No defaultSelected toggle"
          icon={MockSingleIcon}
        />
      )

      const button = screen.getByRole("button")
      // Should default to false (unselected) when defaultSelected is not provided
      expect(button).toHaveAttribute("aria-pressed", "false")
    })

    it("defaults to false when defaultSelected is explicitly false", () => {
      zeroRender(
        <F0ButtonToggle
          label="Explicitly false defaultSelected"
          icon={MockSingleIcon}
          defaultSelected={false}
        />
      )

      const button = screen.getByRole("button")
      // Should be false when defaultSelected is explicitly false
      expect(button).toHaveAttribute("aria-pressed", "false")
    })
  })

  describe("Edge Cases", () => {
    it("handles undefined onSelectedChange gracefully", () => {
      expect(() => {
        zeroRender(
          <F0ButtonToggle
            label="No callback"
            icon={MockSingleIcon}
            onSelectedChange={undefined}
          />
        )

        const button = screen.getByRole("button")
        fireEvent.click(button)
      }).not.toThrow()
    })

    it("forwards additional props to the underlying element", () => {
      zeroRender(
        <F0ButtonToggle
          label="With data attribute"
          icon={MockSingleIcon}
          data-testid="custom-toggle"
        />
      )

      const button = screen.getByTestId("custom-toggle")
      expect(button).toBeInTheDocument()
    })
  })
})
