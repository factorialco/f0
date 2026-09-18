import { fireEvent, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { F0NumberInput } from "../F0NumberInput"

describe("F0NumberInput inline variant", () => {
  describe("at rest", () => {
    it("renders the formatted value as plain text with no input element", () => {
      render(
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Salary"
          value={1234567.5}
          maxDecimals={2}
          grouping
        />
      )

      expect(screen.getByText("1,234,567.5")).toBeTruthy()
      expect(screen.queryByRole("textbox")).toBeNull()
    })

    it("prints the same decimals the editor would print", () => {
      render(
        <F0NumberInput
          variant="inline"
          locale="es-ES"
          label="Salary"
          value={123.456}
          maxDecimals={2}
        />
      )

      expect(screen.getByText("123,46")).toBeTruthy()
    })

    it("appends the units to the formatted value", () => {
      render(
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Weight"
          value={1234}
          units="kg"
          grouping
        />
      )

      expect(screen.getByText("1,234 kg")).toBeTruthy()
    })

    it("renders the placeholder when the value is empty", () => {
      render(
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Weight"
          value={null}
          units="kg"
          placeholder="Add a weight"
        />
      )

      expect(screen.getByText("Add a weight")).toBeTruthy()
      expect(screen.queryByText("kg")).toBeNull()
    })

    it("renders no stepper", () => {
      render(
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Days"
          value={3}
          step={1}
        />
      )

      expect(screen.queryAllByRole("button")).toHaveLength(0)
    })

    it("carries no widget role and no tab stop", () => {
      const { container } = render(
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Salary"
          value={1234}
        />
      )

      expect(container.querySelector("[tabindex]")).toBeNull()
      expect(screen.queryByRole("textbox")).toBeNull()
    })

    it("keeps the label as the accessible name when hideLabel is set", () => {
      render(
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Salary"
          hideLabel
          value={1234}
          units="EUR"
        />
      )

      const named = screen.getByLabelText("Salary")
      expect(named.textContent).toBe("1234 EUR")
    })

    it("shows the label as text when hideLabel is not set", () => {
      render(
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Salary"
          value={1234}
        />
      )

      expect(screen.getAllByText("Salary").length).toBeGreaterThan(0)
    })
  })

  describe("editing", () => {
    it("renders the input", () => {
      render(
        <F0NumberInput
          variant="inline"
          editing
          locale="en-US"
          label="Salary"
          value={1234}
        />
      )

      const input = screen.getByRole("textbox", { name: "Salary" })
      expect((input as HTMLInputElement).value).toBe("1234")
    })

    it("focuses the input when editing flips true after the first render", () => {
      const { rerender } = render(
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Salary"
          value={1234}
        />
      )

      expect(screen.queryByRole("textbox")).toBeNull()

      rerender(
        <F0NumberInput
          variant="inline"
          editing
          locale="en-US"
          label="Salary"
          value={1234}
        />
      )

      const input = screen.getByRole("textbox", { name: "Salary" })
      expect(document.activeElement).toBe(input)
    })

    it("does not steal focus when autoFocus is explicitly false", () => {
      render(
        <F0NumberInput
          variant="inline"
          editing
          autoFocus={false}
          locale="en-US"
          label="Salary"
          value={1234}
        />
      )

      const input = screen.getByRole("textbox", { name: "Salary" })
      expect(document.activeElement).not.toBe(input)
    })

    it("renders the stepper", () => {
      render(
        <F0NumberInput
          variant="inline"
          editing
          locale="en-US"
          label="Days"
          value={3}
          step={1}
        />
      )

      expect(screen.queryAllByRole("button").length).toBeGreaterThan(0)
    })
  })

  describe("onDismiss", () => {
    const renderEditing = (onDismiss: (reason: string) => void) =>
      render(
        <F0NumberInput
          variant="inline"
          editing
          locale="en-US"
          label="Salary"
          value={1234}
          onDismiss={onDismiss}
        />
      )

    it("reports commit when Enter is pressed", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      fireEvent.keyDown(screen.getByRole("textbox", { name: "Salary" }), {
        key: "Enter",
      })

      expect(onDismiss).toHaveBeenCalledWith("commit")
    })

    it("swallows the Enter so it does not submit the form around it", () => {
      renderEditing(vi.fn())

      // fireEvent returns false when preventDefault blocks implicit submission.
      expect(
        fireEvent.keyDown(screen.getByRole("textbox", { name: "Salary" }), {
          key: "Enter",
        })
      ).toBe(false)
    })

    it("reports escape when Escape is pressed", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      fireEvent.keyDown(screen.getByRole("textbox", { name: "Salary" }), {
        key: "Escape",
      })

      expect(onDismiss).toHaveBeenCalledWith("escape")
    })

    it("reports blur when focus leaves the input", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      fireEvent.blur(screen.getByRole("textbox", { name: "Salary" }))

      expect(onDismiss).toHaveBeenCalledWith("blur")
    })

    it("still calls the consumer's own onBlur", () => {
      const onBlur = vi.fn()
      render(
        <F0NumberInput
          variant="inline"
          editing
          locale="en-US"
          label="Salary"
          value={1234}
          onBlur={onBlur}
        />
      )

      fireEvent.blur(screen.getByRole("textbox", { name: "Salary" }))

      expect(onBlur).toHaveBeenCalledTimes(1)
    })

    it("keeps drawing the editor after every dismiss reason", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      const input = screen.getByRole("textbox", { name: "Salary" })
      fireEvent.keyDown(input, { key: "Enter" })
      fireEvent.keyDown(input, { key: "Escape" })
      fireEvent.blur(input)

      expect(onDismiss).toHaveBeenCalledTimes(3)
      expect(screen.getByRole("textbox", { name: "Salary" })).toBeTruthy()
    })

    it("stays at rest when the user types nothing and no dismiss happens", () => {
      render(
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Salary"
          value={1234}
        />
      )

      fireEvent.click(screen.getByText("1234"))

      expect(screen.queryByRole("textbox")).toBeNull()
    })
  })

  it("leaves the default variant untouched", () => {
    render(<F0NumberInput locale="en-US" label="Salary" value={1234} />)

    expect(screen.getByRole("textbox", { name: "Salary" })).toBeTruthy()
  })
})
