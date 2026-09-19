import { fireEvent, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { F0TextAreaInput } from "../F0TextAreaInput"

const BIO = "First line\nSecond line\nThird line"

describe("F0TextAreaInput inline variant", () => {
  describe("at rest", () => {
    it("renders the value as plain text with no textarea", () => {
      render(<F0TextAreaInput variant="inline" label="Bio" value={BIO} />)

      expect(screen.getByTestId("input-field-inline-value")).toHaveTextContent(
        "First line Second line Third line"
      )
      expect(screen.queryByRole("textbox")).toBeNull()
    })

    it("keeps the line breaks instead of truncating", () => {
      render(<F0TextAreaInput variant="inline" label="Bio" value={BIO} />)

      const text = screen
        .getByTestId("input-field-inline-value")
        .querySelector("span")

      expect(text?.textContent).toBe(BIO)
      expect(text?.className).toContain("whitespace-pre-wrap")
      expect(text?.className).not.toContain("truncate")
    })

    it("renders the placeholder when the value is empty", () => {
      render(
        <F0TextAreaInput
          variant="inline"
          label="Bio"
          value=""
          placeholder="Add a bio"
        />
      )

      expect(screen.getByText("Add a bio")).toBeInTheDocument()
    })

    it("carries no widget role and no tab stop", () => {
      const { container } = render(
        <F0TextAreaInput variant="inline" label="Bio" value={BIO} />
      )

      expect(container.querySelector("[tabindex]")).toBeNull()
      expect(screen.queryByRole("textbox")).toBeNull()
      expect(screen.queryByRole("button")).toBeNull()
    })

    it("keeps the label as the accessible name when hideLabel is set", () => {
      render(
        <F0TextAreaInput variant="inline" label="Bio" hideLabel value={BIO} />
      )

      expect(screen.getByLabelText("Bio").textContent).toBe(BIO)
    })

    it("shows the label as text when hideLabel is not set", () => {
      render(<F0TextAreaInput variant="inline" label="Bio" value={BIO} />)

      expect(screen.getAllByText("Bio").length).toBeGreaterThan(0)
    })
  })

  describe("editing", () => {
    it("renders the textarea carrying the value", () => {
      render(
        <F0TextAreaInput variant="inline" editing label="Bio" value={BIO} />
      )

      const textarea = screen.getByRole("textbox", { name: "Bio" })
      expect(textarea.tagName).toBe("TEXTAREA")
      expect(textarea).toHaveValue(BIO)
    })

    it("focuses the textarea when editing flips true after the first render", () => {
      const { rerender } = render(
        <F0TextAreaInput variant="inline" label="Bio" value={BIO} />
      )

      expect(screen.queryByRole("textbox")).toBeNull()

      rerender(
        <F0TextAreaInput variant="inline" editing label="Bio" value={BIO} />
      )

      expect(document.activeElement).toBe(
        screen.getByRole("textbox", { name: "Bio" })
      )
    })

    it("does not steal focus when autoFocus is explicitly false", () => {
      render(
        <F0TextAreaInput
          variant="inline"
          editing
          autoFocus={false}
          label="Bio"
          value={BIO}
        />
      )

      expect(document.activeElement).not.toBe(
        screen.getByRole("textbox", { name: "Bio" })
      )
    })

    it("opens one row tall so a single-line value does not jump", () => {
      render(
        <F0TextAreaInput
          variant="inline"
          editing
          label="Bio"
          value="One line"
        />
      )

      expect(
        (screen.getByRole("textbox", { name: "Bio" }) as HTMLTextAreaElement)
          .rows
      ).toBe(1)
    })

    it("honours the rows the caller configured", () => {
      render(
        <F0TextAreaInput
          variant="inline"
          editing
          rows={4}
          label="Bio"
          value={BIO}
        />
      )

      expect(
        (screen.getByRole("textbox", { name: "Bio" }) as HTMLTextAreaElement)
          .rows
      ).toBe(4)
    })
  })

  describe("onDismiss", () => {
    const renderEditing = (onDismiss: (reason: string) => void) =>
      render(
        <F0TextAreaInput
          variant="inline"
          editing
          label="Bio"
          value={BIO}
          onDismiss={onDismiss}
        />
      )

    const textarea = () => screen.getByRole("textbox", { name: "Bio" })

    it("reports commit on Cmd+Enter", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      fireEvent.keyDown(textarea(), { key: "Enter", metaKey: true })

      expect(onDismiss).toHaveBeenCalledWith("commit")
    })

    it("reports commit on Ctrl+Enter", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      fireEvent.keyDown(textarea(), { key: "Enter", ctrlKey: true })

      expect(onDismiss).toHaveBeenCalledWith("commit")
    })

    it("leaves a bare Enter to type a newline", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      const typed = fireEvent.keyDown(textarea(), { key: "Enter" })

      expect(onDismiss).not.toHaveBeenCalled()
      // fireEvent returns true when nothing called preventDefault.
      expect(typed).toBe(true)
    })

    it("reports escape when Escape is pressed", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      fireEvent.keyDown(textarea(), { key: "Escape" })

      expect(onDismiss).toHaveBeenCalledWith("escape")
    })

    it("reports blur when focus leaves the textarea", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      fireEvent.blur(textarea())

      expect(onDismiss).toHaveBeenCalledWith("blur")
    })

    it("still calls the consumer's own onBlur", () => {
      const onBlur = vi.fn()
      render(
        <F0TextAreaInput
          variant="inline"
          editing
          label="Bio"
          value={BIO}
          onBlur={onBlur}
        />
      )

      fireEvent.blur(textarea())

      expect(onBlur).toHaveBeenCalledTimes(1)
    })

    it("keeps drawing the editor after every dismiss reason", () => {
      const onDismiss = vi.fn()
      renderEditing(onDismiss)

      fireEvent.keyDown(textarea(), { key: "Enter", metaKey: true })
      fireEvent.keyDown(textarea(), { key: "Escape" })
      fireEvent.blur(textarea())

      expect(onDismiss).toHaveBeenCalledTimes(3)
      expect(textarea()).toBeInTheDocument()
    })
  })

  it("leaves the default variant untouched", () => {
    render(<F0TextAreaInput label="Bio" value={BIO} onChange={vi.fn()} />)

    expect(screen.getByRole("textbox", { name: "Bio" })).toBeInTheDocument()
    expect(screen.queryByTestId("input-field-inline-value")).toBeNull()
  })
})
