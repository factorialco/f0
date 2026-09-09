import "@testing-library/jest-dom/vitest"
import { act, screen, waitFor, within } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { useState } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { F0InputField } from "../F0InputField"

const renderField = (
  props: Partial<React.ComponentProps<typeof F0InputField>> = {}
) =>
  render(
    <F0InputField label="Email" value="ada@example.com" {...props}>
      <input type="text" />
    </F0InputField>
  )

const actionsRow = () => screen.getByTestId("input-field-actions")

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

describe("F0InputField value actions", () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe("the fixed set", () => {
    it("renders nothing when none are asked for", () => {
      renderField()

      expect(
        screen.queryByTestId("input-field-actions")
      ).not.toBeInTheDocument()
    })

    it("draws them in the design system's order, whatever order the props arrive in", () => {
      // The order is the field's, not the consumer's: the act you are most
      // likely to want sits closest to the value, copy at the edge.
      renderField({
        copyable: true,
        onRequestChange: vi.fn(),
        masked: true,
      })

      expect(actionNames()).toEqual([
        "Show Email",
        "Request a change to Email",
        "Copy Email",
      ])
    })

    it("puts edit first when it is present", () => {
      renderField({ copyable: true, masked: true, onEdit: vi.fn() })

      expect(actionNames()).toEqual(["Edit Email", "Show Email", "Copy Email"])
    })

    it("renders after the clear button and before append", () => {
      renderField({ clearable: true, copyable: true, appendTag: "EUR" })

      const clear = screen.getByTestId("clear-button")
      const tag = screen.getByText("EUR")

      expect(
        clear.compareDocumentPosition(actionsRow()) &
          Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy()
      expect(
        actionsRow().compareDocumentPosition(tag) &
          Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy()
    })
  })

  describe("readonly and disabled", () => {
    it("keeps the controls but drops the clear button when readonly", () => {
      renderField({ readonly: true, clearable: true, copyable: true })

      expect(actionNames()).toEqual(["Copy Email"])
      expect(screen.queryByTestId("clear-button")).not.toBeInTheDocument()
    })

    it("disables every control when the field is disabled", () => {
      renderField({ disabled: true, copyable: true, onEdit: vi.fn() })

      within(actionsRow())
        .getAllByRole("button")
        .forEach((button) => expect(button).toBeDisabled())
    })
  })

  describe("actionsVisibility", () => {
    it('is visible from the start with the default "always"', () => {
      renderField({ copyable: true })

      expect(actionsRow()).not.toHaveClass("opacity-0")
    })

    it('hides until hover or focus with "hover"', () => {
      renderField({ copyable: true, actionsVisibility: "hover" })

      const row = actionsRow()
      expect(row).toHaveClass("opacity-0")
      // Revealed by the field's own hover and focus-within, so the classes
      // have to be keyed on the named field group.
      expect(row).toHaveClass("group-hover/field:opacity-100")
      expect(row).toHaveClass("group-focus-within/field:opacity-100")
      // And unreachable by the pointer while invisible, which matters on the
      // fade-out and on any pointer that never hovers.
      expect(row).toHaveClass("pointer-events-none")
      expect(row).toHaveClass("group-hover/field:pointer-events-auto")
    })

    it("holds the row open while a confirmation is showing", () => {
      renderField({
        onEdit: vi.fn(),
        confirmed: true,
        actionsVisibility: "hover",
      })

      expect(actionsRow()).not.toHaveClass("opacity-0")
    })
  })

  describe("resting value (readonly + transparent)", () => {
    it("drops the border and the disabled-form background", () => {
      renderField({ readonly: true, transparent: true })

      const wrapper = screen.getByTestId("input-field-wrapper")
      expect(wrapper).not.toHaveClass("border-[1px]")
      expect(wrapper).not.toHaveClass("bg-f1-background-secondary")
    })

    it("tints on hover when there are hover-revealed controls to find", () => {
      renderField({
        readonly: true,
        transparent: true,
        onEdit: vi.fn(),
        actionsVisibility: "hover",
      })

      expect(screen.getByTestId("input-field-wrapper")).toHaveClass(
        "hover:bg-f1-background-secondary"
      )
    })

    it("does not tint when the controls are always visible", () => {
      renderField({ readonly: true, transparent: true, onEdit: vi.fn() })

      expect(screen.getByTestId("input-field-wrapper")).not.toHaveClass(
        "hover:bg-f1-background-secondary"
      )
    })

    it("keeps the height and radius of the field it turns into", () => {
      // A row that changes height on click moves the record under the reader,
      // so the resting cell is the same box the editable field will occupy.
      const resting = renderField({ readonly: true, transparent: true })
      const editable = renderField({})

      expect(
        within(resting.container).getByTestId("input-field-wrapper")
      ).toHaveClass("h-[32px]")
      expect(
        within(editable.container).getByTestId("input-field-wrapper")
      ).toHaveClass("h-[32px]")
      expect(
        within(resting.container).getByTestId("input-field-wrapper")
      ).not.toHaveClass("h-full")
    })

    it("makes the whole cell the click target when it opens an editor", async () => {
      const onClickContent = vi.fn()
      const { container } = renderField({
        readonly: true,
        transparent: true,
        onClickContent,
      })

      expect(screen.getByTestId("input-field-wrapper")).toHaveClass(
        "cursor-text"
      )
      // `readonly` disables the inner input, and a disabled control swallows
      // the mouse event instead of letting it bubble — so the input has to
      // stop being the pointer target.
      expect(container.querySelector("input")).toHaveClass(
        "pointer-events-none"
      )

      // jsdom does no hit-testing, so the pass-through itself is verified by
      // the `ReadonlyTransparentValue` play function in a real browser.
      await userEvent.click(screen.getByTestId("input-field-content"))
      expect(onClickContent).toHaveBeenCalledTimes(1)
    })

    it("leaves the input clickable when there is no editor to open", () => {
      const { container } = renderField({ readonly: true, transparent: true })

      expect(screen.getByTestId("input-field-wrapper")).not.toHaveClass(
        "cursor-text"
      )
      expect(container.querySelector("input")).not.toHaveClass(
        "pointer-events-none"
      )
    })
  })

  describe("confirmed", () => {
    it("turns the pencil into a tick without losing the click", async () => {
      const onEdit = vi.fn()
      renderField({ onEdit, confirmed: true })

      expect(
        screen.queryByRole("button", { name: "Edit Email" })
      ).not.toBeInTheDocument()
      const tick = screen.getByRole("button", { name: "Email saved" })

      // It stays pressable throughout: fixing a typo you spotted the instant
      // it saved should not mean waiting out an animation.
      await userEvent.click(tick)
      expect(onEdit).toHaveBeenCalledTimes(1)
    })

    it("tints the field positive, and under hover too", () => {
      renderField({ onEdit: vi.fn(), confirmed: true })

      const wrapper = screen.getByTestId("input-field-wrapper")
      expect(wrapper).toHaveClass("bg-f1-background-positive")
      // Repeated under `hover:` or the hover tint wins back the cell the
      // pointer is sitting on.
      expect(wrapper).toHaveClass("hover:bg-f1-background-positive")
    })

    it("stays plain when nothing is confirming", () => {
      renderField({ onEdit: vi.fn(), copyable: true })

      expect(screen.getByTestId("input-field-wrapper")).not.toHaveClass(
        "bg-f1-background-positive"
      )
    })

    it("announces the confirmation in a polite live region", () => {
      const { container } = renderField({ onEdit: vi.fn(), confirmed: true })

      expect(container.querySelector('[aria-live="polite"]')).toHaveTextContent(
        "Email saved"
      )
    })
  })

  describe("copyable", () => {
    it("copies the field value and confirms only on success", async () => {
      const writeText = vi.fn().mockResolvedValue(undefined)
      stubClipboard(writeText)

      renderField({ copyable: true })

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

      renderField({ copyable: true })

      await userEvent.click(screen.getByRole("button", { name: "Copy Email" }))

      await waitFor(() =>
        expect(screen.getByText("Could not copy")).toBeInTheDocument()
      )
      expect(
        screen.queryByRole("button", { name: "Copied" })
      ).not.toBeInTheDocument()
    })

    it("tints the field positive on success, and back when it lapses", async () => {
      vi.useFakeTimers({ shouldAdvanceTime: true })
      stubClipboard(vi.fn().mockResolvedValue(undefined))

      renderField({ copyable: true })

      await userEvent.click(screen.getByRole("button", { name: "Copy Email" }))

      const wrapper = screen.getByTestId("input-field-wrapper")
      await waitFor(() =>
        expect(wrapper).toHaveClass("bg-f1-background-positive")
      )

      await act(async () => {
        vi.advanceTimersByTime(1100)
      })
      expect(wrapper).not.toHaveClass("bg-f1-background-positive")

      vi.useRealTimers()
    })
  })

  describe("masked", () => {
    it("masks an input child as a password field and toggles it back", async () => {
      const { container } = renderField({ masked: true })

      const input = container.querySelector("input")!
      expect(input.type).toBe("password")

      await userEvent.click(screen.getByRole("button", { name: "Show Email" }))
      expect(input.type).toBe("text")

      await userEvent.click(screen.getByRole("button", { name: "Hide Email" }))
      expect(input.type).toBe("password")
    })

    it("leaves the child's own type alone once revealed", async () => {
      const { container } = render(
        <F0InputField label="Email" value="ada@example.com" masked>
          <input type="email" />
        </F0InputField>
      )

      const input = container.querySelector("input")!
      expect(input.type).toBe("password")

      await userEvent.click(screen.getByRole("button", { name: "Show Email" }))
      expect(input.type).toBe("email")
    })

    it("masks a non-input child with dots instead of forcing a type", async () => {
      // `type="password"` on a `<button>` is silently treated as `submit`,
      // which would turn F0Select's trigger into a form submit.
      const { container } = render(
        <F0InputField label="Legal gender" value="Female" masked>
          <button type="button" />
        </F0InputField>
      )

      const trigger = container.querySelector("button[type=button]")!
      expect(container.querySelector("button[type=password]")).toBeNull()
      expect(trigger).toHaveValue("••••••")

      await userEvent.click(
        screen.getByRole("button", { name: "Show Legal gender" })
      )
      expect(trigger).toHaveValue("Female")
    })
  })

  describe("onEdit and onRequestChange", () => {
    it("fires onEdit without also firing onClickContent", async () => {
      const onEdit = vi.fn()
      const onClickContent = vi.fn()
      renderField({ onEdit, onClickContent })

      await userEvent.click(screen.getByRole("button", { name: "Edit Email" }))

      expect(onEdit).toHaveBeenCalledTimes(1)
      expect(onClickContent).not.toHaveBeenCalled()
    })

    it("renders onRequestChange as a comment, never a pencil", async () => {
      const onRequestChange = vi.fn()
      renderField({ readonly: true, onRequestChange })

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
      renderField({ onEdit: vi.fn(), onRequestChange: vi.fn() })

      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining("mutually exclusive")
      )
    })
  })

  describe("focus", () => {
    it("puts the caret in an editable field when the value is clicked", async () => {
      const { container } = renderField({ copyable: true })

      await userEvent.click(screen.getByTestId("input-field-content"))

      expect(container.querySelector("input")).toHaveFocus()
    })

    it("puts the caret in an editable field when the pencil is clicked", async () => {
      const { container } = renderField({ onEdit: vi.fn(), copyable: true })

      await userEvent.click(screen.getByRole("button", { name: "Edit Email" }))

      expect(container.querySelector("input")).toHaveFocus()
    })

    it("does not take focus when copy or the eye is clicked", async () => {
      stubClipboard(vi.fn().mockResolvedValue(undefined))
      const { container } = renderField({ copyable: true, masked: true })

      await userEvent.click(screen.getByRole("button", { name: "Copy Email" }))
      expect(container.querySelector("input")).not.toHaveFocus()

      await userEvent.click(screen.getByRole("button", { name: "Show Email" }))
      expect(container.querySelector("input")).not.toHaveFocus()
    })

    it("waits for readonly to lift before focusing a resting value", async () => {
      // While readonly the input is disabled, so `focus()` is a no-op. The
      // caret has to land after the consumer flips readonly off.
      const Harness = () => {
        const [editing, setEditing] = useState(false)
        return (
          <F0InputField
            label="Email"
            value="ada@example.com"
            readonly={!editing}
            transparent={!editing}
            onEdit={() => setEditing(true)}
          >
            <input type="text" />
          </F0InputField>
        )
      }

      const { container } = render(<Harness />)

      await userEvent.click(screen.getByRole("button", { name: "Edit Email" }))

      await waitFor(() =>
        expect(container.querySelector("input")).toHaveFocus()
      )
    })

    it("opens the editor when a resting value is clicked, with only onEdit given", async () => {
      const onEdit = vi.fn()
      renderField({ readonly: true, transparent: true, onEdit })

      await userEvent.click(screen.getByTestId("input-field-content"))

      expect(onEdit).toHaveBeenCalledTimes(1)
    })
  })

  describe("keyboard", () => {
    it("reaches every control with Tab, in the order they are drawn", async () => {
      const { container } = renderField({
        masked: true,
        onRequestChange: vi.fn(),
        copyable: true,
        actionsVisibility: "hover",
      })

      await userEvent.tab()
      expect(container.querySelector("input")).toHaveFocus()

      await userEvent.tab()
      expect(screen.getByRole("button", { name: "Show Email" })).toHaveFocus()

      await userEvent.tab()
      expect(
        screen.getByRole("button", { name: "Request a change to Email" })
      ).toHaveFocus()

      await userEvent.tab()
      expect(screen.getByRole("button", { name: "Copy Email" })).toHaveFocus()
    })

    it("activates a focused control with Enter", async () => {
      const onRequestChange = vi.fn()
      renderField({ onRequestChange, actionsVisibility: "hover" })

      screen.getByRole("button", { name: "Request a change to Email" }).focus()
      await userEvent.keyboard("{Enter}")

      expect(onRequestChange).toHaveBeenCalledTimes(1)
    })
  })
})
