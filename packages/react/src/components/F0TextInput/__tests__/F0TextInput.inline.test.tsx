import { fireEvent, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { F0TextInput } from "../F0TextInput"

describe("F0TextInput inline variant", () => {
  describe("at rest", () => {
    it("renders the value as plain text with no input element", () => {
      render(
        <F0TextInput
          variant="inline"
          label="Job title"
          value="Head of design"
        />
      )

      expect(screen.getByText("Head of design")).toBeTruthy()
      expect(screen.queryByRole("textbox")).toBeNull()
    })

    it("renders the placeholder when the value is empty", () => {
      render(
        <F0TextInput
          variant="inline"
          label="Job title"
          value=""
          placeholder="Add a job title"
        />
      )

      expect(screen.getByText("Add a job title")).toBeTruthy()
    })

    it("carries no widget role and no tab stop", () => {
      const { container } = render(
        <F0TextInput
          variant="inline"
          label="Job title"
          value="Head of design"
        />
      )

      expect(container.querySelector("[tabindex]")).toBeNull()
      expect(screen.queryByRole("textbox")).toBeNull()
      expect(screen.queryByRole("button")).toBeNull()
    })

    it("keeps the label as the accessible name when hideLabel is set", () => {
      render(
        <F0TextInput
          variant="inline"
          label="Job title"
          hideLabel
          value="Head of design"
        />
      )

      const named = screen.getByLabelText("Job title")
      expect(named.textContent).toBe("Head of design")
    })

    it("shows the label as text when hideLabel is not set", () => {
      render(
        <F0TextInput
          variant="inline"
          label="Job title"
          value="Head of design"
        />
      )

      expect(screen.getAllByText("Job title").length).toBeGreaterThan(0)
    })
  })

  describe("private values", () => {
    it("masks resting text and its title", () => {
      render(
        <F0TextInput
          variant="inline"
          type="private"
          label="SSN"
          value="123-45-6789"
        />
      )

      const display = screen.getByTestId("input-field-inline-value")
      expect(display).toHaveTextContent("••••••••")
      expect(screen.getByTitle("••••••••")).toBeInTheDocument()
      expect(screen.queryByText("123-45-6789")).toBeNull()
      expect(screen.queryByTitle("123-45-6789")).toBeNull()
    })

    it("masks uncontrolled edits without replacing the input value", () => {
      const onChange = vi.fn()
      const props = {
        variant: "inline",
        type: "private",
        label: "SSN",
        onChange,
      } as const
      const { rerender } = render(<F0TextInput {...props} editing />)
      fireEvent.change(screen.getByRole("textbox", { name: "SSN" }), {
        target: { value: "123-45-6789" },
      })
      expect(onChange).toHaveBeenCalledWith("123-45-6789")
      rerender(<F0TextInput {...props} editing={false} />)
      expect(screen.getByTitle("••••••••")).toBeInTheDocument()
      expect(screen.queryByText("123-45-6789")).toBeNull()
      rerender(<F0TextInput {...props} editing />)
      expect(screen.getByRole("textbox", { name: "SSN" })).toHaveValue(
        "123-45-6789"
      )
    })

    it("keeps the placeholder for an empty private value", () => {
      render(
        <F0TextInput
          variant="inline"
          type="private"
          label="SSN"
          value=""
          placeholder="Add SSN"
        />
      )
      expect(screen.getByText("Add SSN")).toBeInTheDocument()
    })

    it("reveals on autofocus and masks on blur without leaving editing mode", () => {
      const onBlur = vi.fn()
      const onDismiss = vi.fn()
      render(
        <F0TextInput
          variant="inline"
          editing
          type="private"
          label="SSN"
          value="123-45-6789"
          onBlur={onBlur}
          onDismiss={onDismiss}
        />
      )
      const input = screen.getByLabelText("SSN", { selector: "input" })
      expect(input).toHaveFocus()
      expect(input).toHaveAttribute("type", "text")
      fireEvent.blur(input)
      expect(input).toHaveAttribute("type", "password")
      expect(input).toHaveValue("123-45-6789")
      expect(onBlur).toHaveBeenCalledTimes(1)
      expect(onDismiss).toHaveBeenCalledWith("blur")
      fireEvent.focus(input)
      expect(input).toHaveAttribute("type", "text")
    })

    it("does not reveal an unfocused editor, including after remount", () => {
      const props = {
        variant: "inline",
        type: "private",
        label: "SSN",
        value: "123-45-6789",
        autoFocus: false,
      } as const
      const { rerender } = render(<F0TextInput {...props} editing />)
      expect(
        screen.getByLabelText("SSN", { selector: "input" })
      ).toHaveAttribute("type", "password")
      fireEvent.focus(screen.getByLabelText("SSN", { selector: "input" }))
      rerender(<F0TextInput {...props} editing={false} />)
      rerender(<F0TextInput {...props} editing />)
      expect(
        screen.getByLabelText("SSN", { selector: "input" })
      ).toHaveAttribute("type", "password")
    })
  })

  describe("editing", () => {
    it("renders the input", () => {
      render(
        <F0TextInput
          variant="inline"
          editing
          label="Job title"
          value="Head of design"
        />
      )

      const input = screen.getByRole("textbox", { name: "Job title" })
      expect((input as HTMLInputElement).value).toBe("Head of design")
    })

    it("focuses the input when editing flips true after the first render", () => {
      const { rerender } = render(
        <F0TextInput
          variant="inline"
          label="Job title"
          value="Head of design"
        />
      )

      expect(screen.queryByRole("textbox")).toBeNull()

      rerender(
        <F0TextInput
          variant="inline"
          editing
          label="Job title"
          value="Head of design"
        />
      )

      const input = screen.getByRole("textbox", { name: "Job title" })
      expect(document.activeElement).toBe(input)
    })

    it("does not steal focus when autoFocus is explicitly false", () => {
      render(
        <F0TextInput
          variant="inline"
          editing
          autoFocus={false}
          label="Job title"
          value="Head of design"
        />
      )

      const input = screen.getByRole("textbox", { name: "Job title" })
      expect(document.activeElement).not.toBe(input)
    })

    it("draws the critical border and tint while the value is invalid", () => {
      const { container } = render(
        <F0TextInput
          variant="inline"
          editing
          error
          label="Job title"
          value="Head of design"
        />
      )

      const wrapper = container.querySelector(
        '[data-testid="input-field-wrapper"]'
      )
      expect(wrapper?.className).toContain("border-f1-border-critical-bold")
      expect(wrapper?.className).toContain("bg-f1-background-critical")
    })
  })

  describe("onDismiss", () => {
    const renderEditing = (onDismiss: (reason: string) => void) =>
      render(
        <F0TextInput
          variant="inline"
          editing
          label="Job title"
          value="Head of design"
          onDismiss={onDismiss}
        />
      )

    it("reports commit when Enter is pressed", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      fireEvent.keyDown(screen.getByRole("textbox", { name: "Job title" }), {
        key: "Enter",
      })

      expect(onDismiss).toHaveBeenCalledWith("commit")
    })

    it("swallows the Enter so it does not submit the form around it", () => {
      renderEditing(vi.fn())

      const submitted = fireEvent.keyDown(
        screen.getByRole("textbox", { name: "Job title" }),
        { key: "Enter" }
      )

      // fireEvent returns false when preventDefault blocks implicit submission.
      expect(submitted).toBe(false)
    })

    it("leaves Enter alone in the field variant", () => {
      render(
        <F0TextInput
          label="Job title"
          value="Head of design"
          onChange={vi.fn()}
        />
      )

      const submitted = fireEvent.keyDown(
        screen.getByRole("textbox", { name: "Job title" }),
        { key: "Enter" }
      )

      expect(submitted).toBe(true)
    })

    it("reports escape when Escape is pressed", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      fireEvent.keyDown(screen.getByRole("textbox", { name: "Job title" }), {
        key: "Escape",
      })

      expect(onDismiss).toHaveBeenCalledWith("escape")
    })

    it("reports blur when focus leaves the input", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      fireEvent.blur(screen.getByRole("textbox", { name: "Job title" }))

      expect(onDismiss).toHaveBeenCalledWith("blur")
    })

    it("still calls the consumer's own onPressEnter and onBlur", () => {
      const onPressEnter = vi.fn()
      const onBlur = vi.fn()
      render(
        <F0TextInput
          variant="inline"
          editing
          label="Job title"
          value="Head of design"
          onPressEnter={onPressEnter}
          onBlur={onBlur}
        />
      )

      const input = screen.getByRole("textbox", { name: "Job title" })
      fireEvent.keyDown(input, { key: "Enter" })
      fireEvent.blur(input)

      expect(onPressEnter).toHaveBeenCalledTimes(1)
      expect(onBlur).toHaveBeenCalledTimes(1)
    })

    it("keeps drawing the editor after every dismiss reason", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      const input = screen.getByRole("textbox", { name: "Job title" })
      fireEvent.keyDown(input, { key: "Enter" })
      fireEvent.keyDown(input, { key: "Escape" })
      fireEvent.blur(input)

      expect(onDismiss).toHaveBeenCalledTimes(3)
      expect(screen.getByRole("textbox", { name: "Job title" })).toBeTruthy()
    })
  })

  it("leaves the default variant untouched", () => {
    render(<F0TextInput label="Job title" value="Head of design" />)

    expect(screen.getByRole("textbox", { name: "Job title" })).toBeTruthy()
  })
})
