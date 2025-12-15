import { Archive } from "@/icons/app"
import { zeroRender as render } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import { fireEvent, screen } from "@testing-library/react"

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { InputField, InputFieldStatusType } from "../InputField"

describe("InputField", () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {})
  })

  afterEach(() => {
    consoleErrorSpy.mockRestore()
  })

  describe("Label validation", () => {
    it("should emit an error when label is empty string", () => {
      render(
        <InputField label="">
          <input />
        </InputField>
      )

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "InputField: label is required for accessibility reasons. If you don't want to show a label, set hideLabel to true."
      )
    })

    it("should not emit an error when label is provided", () => {
      render(
        <InputField label="Test Label">
          <input />
        </InputField>
      )

      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })
  })

  describe("Basic rendering", () => {
    it("should render with required props", () => {
      render(
        <InputField label="Test Label">
          <input />
        </InputField>
      )

      expect(screen.getByText("Test Label")).toBeInTheDocument()
      expect(screen.getByRole("textbox")).toBeInTheDocument()
    })

    it("should render with placeholder", () => {
      render(
        <InputField label="Test Label" placeholder="Enter text">
          <input />
        </InputField>
      )

      expect(screen.getByText("Enter text")).toBeInTheDocument()
    })

    it("should hide label when hideLabel is true", () => {
      render(
        <InputField label="Test Label" hideLabel>
          <input />
        </InputField>
      )

      expect(screen.queryByText("Test Label")).not.toBeInTheDocument()
    })

    it("should render with icon", () => {
      render(
        <InputField label="Test Label" icon={Archive}>
          <input />
        </InputField>
      )

      expect(screen.getByTestId("input-field-wrapper")).toBeInTheDocument()
    })

    it("should render with label icon", () => {
      render(
        <InputField label="Test Label" labelIcon={Archive}>
          <input />
        </InputField>
      )

      expect(screen.getByText("Test Label")).toBeInTheDocument()
    })
  })

  describe("Value handling", () => {
    it("should handle onChange events", () => {
      const handleChange = vi.fn()

      render(
        <InputField label="Test Label" onChange={handleChange}>
          <input />
        </InputField>
      )

      const input = screen.getByRole("textbox")
      fireEvent.change(input, { target: { value: "test value" } })

      expect(handleChange).toHaveBeenCalledWith("test value")
    })

    it("should handle controlled value", () => {
      const { rerender } = render(
        <InputField label="Test Label" value="initial">
          <input />
        </InputField>
      )

      expect(screen.getByRole("textbox")).toHaveValue("initial")

      rerender(
        <InputField label="Test Label" value="updated">
          <input />
        </InputField>
      )

      expect(screen.getByRole("textbox")).toHaveValue("updated")
    })

    it("should respect maxLength", () => {
      const handleChange = vi.fn()

      render(
        <InputField label="Test Label" maxLength={5} onChange={handleChange}>
          <input />
        </InputField>
      )

      const input = screen.getByRole("textbox")
      fireEvent.change(input, { target: { value: "123456" } })

      expect(handleChange).toHaveBeenCalledWith("12345")
    })

    it("should display character count when maxLength is provided", () => {
      render(
        <InputField label="Test Label" maxLength={10} value="test">
          <input />
        </InputField>
      )

      expect(screen.getByText("4/10")).toBeInTheDocument()
    })

    it("should hide character count when hideMaxLength is true", () => {
      render(
        <InputField label="Test Label" maxLength={10} hideMaxLength>
          <input />
        </InputField>
      )

      expect(screen.queryByText("0/10")).not.toBeInTheDocument()
    })
  })

  describe("Clear functionality", () => {
    it("should show clear button when clearable and has value", () => {
      const { container } = render(
        <InputField label="Test Label" clearable value="test">
          <input />
        </InputField>
      )

      // Look for the clear button in the AnimatePresence container
      const clearButton =
        container.querySelector("svg") ||
        container.querySelector("[data-testid='animate-presence'] svg")
      expect(clearButton).toBeInTheDocument()
    })

    it("should clear value when clear button is clicked", () => {
      const handleChange = vi.fn()

      const { container } = render(
        <InputField label="Test Label" clearable value="test" onChange={handleChange}>
          <input />
        </InputField>
      )

      const clearButton =
        container.querySelector("svg") ||
        container.querySelector("[data-testid='animate-presence'] svg")
      expect(clearButton).toBeInTheDocument()

      fireEvent.click(clearButton!)
      expect(handleChange).toHaveBeenCalledWith("")
    })

    it("should not show clear button when value is empty", () => {
      const { container } = render(
        <InputField label="Test Label" clearable value="">
          <input />
        </InputField>
      )

      // When value is empty, the clear button should not be rendered
      const animatePresence = container.querySelector("[data-testid='animate-presence']")
      expect(animatePresence).toBeNull()
    })
  })

  describe("Loading state", () => {
    it("should show spinner when loading", () => {
      const { container } = render(
        <InputField label="Test Label" loading>
          <input />
        </InputField>
      )

      expect(container.querySelector('[aria-busy="true"][aria-live="polite"]')).toBeInTheDocument()
    })

    it("should not show spinner when not loading", () => {
      render(
        <InputField label="Test Label">
          <input />
        </InputField>
      )

      expect(screen.queryByTestId("spinner")).not.toBeInTheDocument()
    })
  })

  describe("Error handling", () => {
    it("should display error message", () => {
      render(
        <InputField label="Test Label" error="This is an error">
          <input />
        </InputField>
      )

      expect(screen.getByText("This is an error")).toBeInTheDocument()
    })

    it("should apply error styling when error is present", () => {
      render(
        <InputField label="Test Label" error="This is an error">
          <input />
        </InputField>
      )

      const wrapper = screen.getByTestId("input-field-wrapper")
      expect(wrapper).toHaveClass("border-f1-border-critical-bold")
    })
  })

  describe("Status handling", () => {
    const statuses: Record<
      string,
      { type: InputFieldStatusType; message: string; expectedClass: string }
    > = {
      error: {
        type: "error",
        message: "This is an error",
        expectedClass: "border-f1-border-critical-bold",
      },
      warning: {
        type: "warning",
        message: "This is a warning",
        expectedClass: "border-f1-border-warning-bold",
      },
      info: {
        type: "info",
        message: "This is an info",
        expectedClass: "border-f1-border-info-bold",
      },
    }

    Object.entries(statuses).forEach(([type, status]) => {
      it(`should display status message for ${type}`, () => {
        render(
          <InputField
            label="Test Label"
            status={{
              type: status.type as InputFieldStatusType,
              message: status.message,
            }}
          >
            <input />
          </InputField>
        )

        expect(screen.getByText(status.message)).toBeInTheDocument()
      })

      it(`should apply ${type} styling when ${type} is present`, () => {
        render(
          <InputField
            label="Test Label"
            status={{
              type: status.type as InputFieldStatusType,
              message: status.message,
            }}
          >
            <input />
          </InputField>
        )

        const wrapper = screen.getByTestId("input-field-wrapper")
        expect(wrapper).toHaveClass(status.expectedClass)
      })
    })
  })

  describe("Disabled and readonly states", () => {
    it("should disable input when disabled", () => {
      render(
        <InputField label="Test Label" disabled>
          <input />
        </InputField>
      )

      expect(screen.getByRole("textbox")).toBeDisabled()
    })

    it("should make input readonly when readonly", () => {
      render(
        <InputField label="Test Label" readonly>
          <input />
        </InputField>
      )

      expect(screen.getByRole("textbox")).toHaveAttribute("readonly")
    })

    it("should not show clear button when disabled", () => {
      const { container } = render(
        <InputField label="Test Label" disabled clearable value="test">
          <input />
        </InputField>
      )

      // When disabled, clearable section should not be rendered
      const animatePresence = container.querySelector("[data-testid='animate-presence']")
      expect(animatePresence).not.toBeInTheDocument()
    })

    it("should not show character count when disabled", () => {
      render(
        <InputField label="Test Label" disabled maxLength={10}>
          <input />
        </InputField>
      )

      expect(screen.queryByText("0/10")).not.toBeInTheDocument()
    })
  })

  describe("Placeholder handling", () => {
    it("should hide placeholder when hidePlaceholder is true", () => {
      render(
        <InputField label="Test Label" placeholder="Enter text" hidePlaceholder>
          <input />
        </InputField>
      )

      // The placeholder div is still in the DOM but should have opacity-0
      const placeholder = screen.getByText("Enter text")
      expect(placeholder).toHaveClass("opacity-0")
    })

    it("should hide placeholder when input has value", () => {
      render(
        <InputField label="Test Label" placeholder="Enter text" value="test">
          <input />
        </InputField>
      )

      const placeholder = screen.getByText("Enter text")
      expect(placeholder).toHaveClass("opacity-0")
    })

    it("should show placeholder when input is empty", () => {
      render(
        <InputField label="Test Label" placeholder="Enter text" value="">
          <input />
        </InputField>
      )

      const placeholder = screen.getByText("Enter text")
      expect(placeholder).toHaveClass("opacity-100")
    })

    it("should call onClickPlaceholder when placeholder is clicked", () => {
      const handleClickPlaceholder = vi.fn()

      render(
        <InputField
          label="Test Label"
          placeholder="Enter text"
          onClickPlaceholder={handleClickPlaceholder}
          value=""
        >
          <input />
        </InputField>
      )

      const placeholder = screen.getByText("Enter text")
      fireEvent.click(placeholder)

      expect(handleClickPlaceholder).toHaveBeenCalled()
    })
  })

  describe("Size variants", () => {
    it("should apply small size classes", () => {
      render(
        <InputField label="Test Label" size="sm">
          <input />
        </InputField>
      )

      const wrapper = screen.getByTestId("input-field-wrapper")
      expect(wrapper).toHaveClass("h-[32px]")
    })

    it("should apply medium size classes", () => {
      render(
        <InputField label="Test Label" size="md">
          <input />
        </InputField>
      )

      const wrapper = screen.getByTestId("input-field-wrapper")
      expect(wrapper).toHaveClass("h-[40px]")
    })

    it("should handle canGrow prop", () => {
      render(
        <InputField label="Test Label" canGrow size="md">
          <input />
        </InputField>
      )

      const wrapper = screen.getByTestId("input-field-wrapper")
      expect(wrapper).toHaveClass("min-h-[40px]")
    })
  })

  describe("Accessibility", () => {
    it("should have proper ARIA attributes", () => {
      render(
        <InputField
          label="Test Label"
          required
          role="combobox"
          aria-controls="listbox"
          aria-expanded={false}
        >
          <input />
        </InputField>
      )

      const input = screen.getByRole("combobox")
      expect(input).toHaveAttribute("aria-label", "Test Label")
      expect(input).toHaveAttribute("aria-controls", "listbox")
      expect(input).toHaveAttribute("aria-expanded", "false")
    })

    it("should set aria-busy when loading", () => {
      render(
        <InputField label="Test Label" loading>
          <input />
        </InputField>
      )

      const input = screen.getByRole("textbox")
      expect(input).toHaveAttribute("aria-busy", "true")
    })

    it("should set aria-disabled when disabled", () => {
      render(
        <InputField label="Test Label" disabled>
          <input />
        </InputField>
      )

      const input = screen.getByRole("textbox")
      expect(input).toHaveAttribute("aria-disabled", "true")
    })

    it("should associate label with input through id", () => {
      render(
        <InputField label="Test Label">
          <input />
        </InputField>
      )

      const input = screen.getByRole("textbox")
      const label = screen.getByText("Test Label")

      // Check that the label has htmlFor attribute pointing to the input id
      expect(label.closest("label")).toHaveAttribute("for", input.id)
    })
  })

  describe("Event handlers", () => {
    it("should call onFocus when input is focused", () => {
      const handleFocus = vi.fn()

      render(
        <InputField label="Test Label" onFocus={handleFocus}>
          <input />
        </InputField>
      )

      const input = screen.getByRole("textbox")
      fireEvent.focus(input)

      expect(handleFocus).toHaveBeenCalled()
    })

    it("should call onBlur when input loses focus", () => {
      const handleBlur = vi.fn()

      render(
        <InputField label="Test Label" onBlur={handleBlur}>
          <input />
        </InputField>
      )

      const input = screen.getByRole("textbox")
      fireEvent.blur(input)

      expect(handleBlur).toHaveBeenCalled()
    })

    it("should call onClickContent when content area is clicked", () => {
      const handleClickContent = vi.fn()

      render(
        <InputField label="Test Label" onClickContent={handleClickContent}>
          <input />
        </InputField>
      )

      const wrapper = screen.getByTestId("input-field-wrapper")
      // Click on the content area div inside the wrapper
      const contentDiv = wrapper.querySelector(".relative")
      fireEvent.click(contentDiv!)

      expect(handleClickContent).toHaveBeenCalled()
    })

    it("should call onClickChildren when children area is clicked", () => {
      const handleClickChildren = vi.fn()

      render(
        <InputField label="Test Label" onClickChildren={handleClickChildren}>
          <input />
        </InputField>
      )

      const input = screen.getByRole("textbox")
      fireEvent.click(input)

      expect(handleClickChildren).toHaveBeenCalled()
    })

    it("should not call click handlers when disabled", () => {
      const handleClickContent = vi.fn()
      const handleClickChildren = vi.fn()

      render(
        <InputField
          label="Test Label"
          disabled
          onClickContent={handleClickContent}
          onClickChildren={handleClickChildren}
        >
          <input />
        </InputField>
      )

      const wrapper = screen.getByTestId("input-field-wrapper")
      const input = screen.getByRole("textbox")

      fireEvent.click(wrapper)
      fireEvent.click(input)

      expect(handleClickContent).not.toHaveBeenCalled()
      expect(handleClickChildren).not.toHaveBeenCalled()
    })
  })

  describe("Append functionality", () => {
    it("should render append content", () => {
      render(
        <InputField label="Test Label" append={<button>Append</button>}>
          <input />
        </InputField>
      )

      expect(screen.getByText("Append")).toBeInTheDocument()
    })
  })

  describe("Custom empty handling", () => {
    it("should use custom isEmpty function", () => {
      const customIsEmpty = vi.fn().mockReturnValue(false)

      const { container } = render(
        <InputField label="Test Label" isEmpty={customIsEmpty} clearable value="">
          <input />
        </InputField>
      )

      expect(customIsEmpty).toHaveBeenCalledWith("")
      // When custom isEmpty returns false, clear button should be shown
      const clearButton = container.querySelector("svg")
      expect(clearButton).toBeInTheDocument()
    })

    it("should use custom emptyValue", () => {
      const handleChange = vi.fn()

      const { container } = render(
        <InputField
          label="Test Label"
          emptyValue="custom-empty"
          onChange={handleChange}
          clearable
          value="test"
        >
          <input />
        </InputField>
      )

      const clearButton = container.querySelector("svg")
      expect(clearButton).toBeInTheDocument()
      fireEvent.click(clearButton!)

      expect(handleChange).toHaveBeenCalledWith("custom-empty")
    })

    it("should use custom lengthProvider", () => {
      const customLengthProvider = vi.fn().mockReturnValue(3)

      render(
        <InputField
          label="Test Label"
          lengthProvider={customLengthProvider}
          maxLength={5}
          value="test"
        >
          <input />
        </InputField>
      )

      expect(customLengthProvider).toHaveBeenCalledWith("test")
      expect(screen.getByText("3/5")).toBeInTheDocument()
    })
  })
})
