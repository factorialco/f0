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
