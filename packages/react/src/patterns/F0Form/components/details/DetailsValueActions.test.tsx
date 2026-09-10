import "@testing-library/jest-dom/vitest"
import { act, screen, waitFor, within } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { DetailsValueActions } from "./DetailsValueActions"

const renderActions = (
  props: Partial<React.ComponentProps<typeof DetailsValueActions>> = {}
) =>
  render(
    <DetailsValueActions label="Email" value="ada@example.com" {...props} />
  )

const actionsRow = () => screen.getByTestId("details-value-actions")

const actionNames = () =>
  within(actionsRow())
    .getAllByRole("button")
    .map((button) => button.getAttribute("aria-label"))

const stubClipboard = (writeText: () => Promise<void>) => {
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  })
  Object.defineProperty(document, "execCommand", {
    value: undefined,
    configurable: true,
  })
}

describe("DetailsValueActions", () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe("the fixed set", () => {
    it("renders no buttons when none are asked for", () => {
      renderActions()

      expect(within(actionsRow()).queryAllByRole("button")).toHaveLength(0)
    })

    it("draws them in the design system's order, whatever order the props arrive in", () => {
      // The order is the pattern's, not the consumer's: the act you are most
      // likely to want sits closest to the value, copy at the edge.
      renderActions({ copyable: true, onRequestChange: vi.fn() })

      expect(actionNames()).toEqual(["Request a change to Email", "Copy Email"])
    })

    it("puts edit first when it is present", () => {
      renderActions({ copyable: true, onEdit: vi.fn() })

      expect(actionNames()).toEqual(["Edit Email", "Copy Email"])
    })

    it("disables every control when the row is disabled", () => {
      renderActions({ disabled: true, copyable: true, onEdit: vi.fn() })

      within(actionsRow())
        .getAllByRole("button")
        .forEach((button) => expect(button).toBeDisabled())
    })
  })

  describe("visibility", () => {
    it('is visible from the start with the default "always"', () => {
      renderActions({ copyable: true })

      expect(actionsRow()).not.toHaveClass("opacity-0")
    })

    it('hides until hover or focus with "hover"', () => {
      renderActions({ copyable: true, visibility: "hover" })

      const row = actionsRow()
      expect(row).toHaveClass("opacity-0")
      // Revealed by the cell's own hover and focus-within, so the classes have
      // to be keyed on the named field group the cell puts around them.
      expect(row).toHaveClass("group-hover/field:opacity-100")
      expect(row).toHaveClass("group-focus-within/field:opacity-100")
      // And unreachable by the pointer while invisible, which matters on the
      // fade-out and on any pointer that never hovers.
      expect(row).toHaveClass("pointer-events-none")
      expect(row).toHaveClass("group-hover/field:pointer-events-auto")
    })

    it("holds the row open while a confirmation is showing", () => {
      renderActions({
        onEdit: vi.fn(),
        confirmed: true,
        visibility: "hover",
      })

      expect(actionsRow()).not.toHaveClass("opacity-0")
    })
  })

  describe("confirmed", () => {
    it("turns the pencil into a tick without losing the click", async () => {
      const onEdit = vi.fn()
      renderActions({ onEdit, confirmed: true })

      expect(
        screen.queryByRole("button", { name: "Edit Email" })
      ).not.toBeInTheDocument()
      const tick = screen.getByRole("button", { name: "Email saved" })

      // It stays pressable throughout: fixing a typo you spotted the instant
      // it saved should not mean waiting out an animation.
      await userEvent.click(tick)
      expect(onEdit).toHaveBeenCalledTimes(1)
    })

    it("tells the cell a confirmation is showing, so it can tint with it", () => {
      const onConfirmingChange = vi.fn()
      renderActions({ onEdit: vi.fn(), confirmed: true, onConfirmingChange })

      expect(onConfirmingChange).toHaveBeenCalledWith(true)
    })

    it("reports nothing confirming when nothing is", () => {
      const onConfirmingChange = vi.fn()
      renderActions({ onEdit: vi.fn(), copyable: true, onConfirmingChange })

      expect(onConfirmingChange).toHaveBeenCalledWith(false)
    })

    it("announces the confirmation in a polite live region", () => {
      const { container } = renderActions({ onEdit: vi.fn(), confirmed: true })

      expect(container.querySelector('[aria-live="polite"]')).toHaveTextContent(
        "Email saved"
      )
    })
  })

  describe("copyable", () => {
    it("copies the row value and confirms only on success", async () => {
      const writeText = vi.fn().mockResolvedValue(undefined)
      stubClipboard(writeText)

      renderActions({ copyable: true })

      await userEvent.click(screen.getByRole("button", { name: "Copy Email" }))

      expect(writeText).toHaveBeenCalledWith("ada@example.com")
      await waitFor(() =>
        expect(
          screen.getByRole("button", { name: "Copied" })
        ).toBeInTheDocument()
      )
    })

    it("does not claim success when the write fails", async () => {
      stubClipboard(vi.fn().mockRejectedValue(new Error("denied")))

      renderActions({ copyable: true })

      await userEvent.click(screen.getByRole("button", { name: "Copy Email" }))

      await waitFor(() =>
        expect(screen.getByText("Could not copy")).toBeInTheDocument()
      )
      expect(
        screen.queryByRole("button", { name: "Copied" })
      ).not.toBeInTheDocument()
    })

    it("reports the copy tick to the cell, and its lapse", async () => {
      vi.useFakeTimers({ shouldAdvanceTime: true })
      stubClipboard(vi.fn().mockResolvedValue(undefined))
      const onConfirmingChange = vi.fn()

      renderActions({ copyable: true, onConfirmingChange })

      await userEvent.click(screen.getByRole("button", { name: "Copy Email" }))

      await waitFor(() =>
        expect(onConfirmingChange).toHaveBeenLastCalledWith(true)
      )

      await act(async () => {
        vi.advanceTimersByTime(1100)
      })
      expect(onConfirmingChange).toHaveBeenLastCalledWith(false)

      vi.useRealTimers()
    })
  })

  describe("onEdit and onRequestChange", () => {
    it("stops the click so the cell's own value handler does not also fire", async () => {
      const onEdit = vi.fn()
      const onCellClick = vi.fn()
      render(
        <div onClick={onCellClick}>
          <DetailsValueActions
            label="Email"
            value="ada@example.com"
            onEdit={onEdit}
          />
        </div>
      )

      await userEvent.click(screen.getByRole("button", { name: "Edit Email" }))

      expect(onEdit).toHaveBeenCalledTimes(1)
      expect(onCellClick).not.toHaveBeenCalled()
    })

    it("renders onRequestChange as a comment, never a pencil", async () => {
      const onRequestChange = vi.fn()
      renderActions({ onRequestChange })

      const button = screen.getByRole("button", {
        name: "Request a change to Email",
      })
      expect(
        screen.queryByRole("button", { name: /^Edit/ })
      ).not.toBeInTheDocument()

      await userEvent.click(button)
      expect(onRequestChange).toHaveBeenCalledTimes(1)
    })

    it("warns when both are passed", () => {
      renderActions({ onEdit: vi.fn(), onRequestChange: vi.fn() })

      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining("mutually exclusive")
      )
    })
  })

  describe("keyboard", () => {
    it("reaches every control with Tab, in the order they are drawn", async () => {
      renderActions({
        onRequestChange: vi.fn(),
        copyable: true,
        visibility: "hover",
      })

      await userEvent.tab()
      expect(
        screen.getByRole("button", { name: "Request a change to Email" })
      ).toHaveFocus()

      await userEvent.tab()
      expect(screen.getByRole("button", { name: "Copy Email" })).toHaveFocus()
    })

    it("activates a focused control with Enter", async () => {
      const onRequestChange = vi.fn()
      renderActions({ onRequestChange, visibility: "hover" })

      screen.getByRole("button", { name: "Request a change to Email" }).focus()
      await userEvent.keyboard("{Enter}")

      expect(onRequestChange).toHaveBeenCalledTimes(1)
    })
  })
})
