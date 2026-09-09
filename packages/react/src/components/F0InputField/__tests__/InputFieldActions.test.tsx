import "@testing-library/jest-dom/vitest"
import { act, fireEvent, screen, waitFor, within } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { Archive } from "@/icons/app"
import { zeroRender as render } from "@/testing/test-utils"
import { F0InputField } from "../F0InputField"
import { InputFieldAction } from "../types"

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

describe("F0InputField actions", () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe("rendering and order", () => {
    it("renders nothing when no actions are passed", () => {
      renderField()

      expect(
        screen.queryByTestId("input-field-actions")
      ).not.toBeInTheDocument()
    })

    it("renders the actions in the declared order, after the clear button", () => {
      const { container } = renderField({
        clearable: true,
        actions: [
          { type: "copy" },
          { type: "edit", onClick: vi.fn() },
          { type: "custom", icon: Archive, label: "Archive", onClick: vi.fn() },
        ],
      })

      expect(actionNames()).toEqual(["Copy Email", "Edit Email", "Archive"])

      // Document order: the clear button precedes the whole actions row.
      const clear = screen.getByTestId("clear-button")
      const position = clear.compareDocumentPosition(actionsRow())
      expect(position & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
      expect(container).toBeInTheDocument()
    })

    it("renders the actions before append, appendTag and buttonToggle", () => {
      renderField({
        actions: [{ type: "copy" }],
        appendTag: "EUR",
      })

      const tag = screen.getByText("EUR")
      expect(
        actionsRow().compareDocumentPosition(tag) &
          Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy()
    })

    it("warns past four actions", () => {
      const actions: InputFieldAction[] = Array.from({ length: 5 }, (_, i) => ({
        type: "custom",
        icon: Archive,
        label: `Action ${i}`,
        onClick: vi.fn(),
      }))

      renderField({ actions })

      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining("5 actions passed")
      )
      // Still rendered — the warning is the fix, not silent truncation.
      expect(actionNames()).toHaveLength(5)
    })
  })

  describe("readonly and disabled", () => {
    it("shows actions but not the clear button when readonly", () => {
      renderField({
        readonly: true,
        clearable: true,
        actions: [{ type: "copy" }],
      })

      expect(actionNames()).toEqual(["Copy Email"])
      expect(screen.queryByTestId("clear-button")).not.toBeInTheDocument()
    })

    it("disables every action when the field is disabled", () => {
      renderField({
        disabled: true,
        actions: [{ type: "copy" }, { type: "edit", onClick: vi.fn() }],
      })

      within(actionsRow())
        .getAllByRole("button")
        .forEach((button) => expect(button).toBeDisabled())
    })

    it("disables a single action on its own", () => {
      renderField({
        actions: [
          { type: "copy" },
          { type: "edit", onClick: vi.fn(), disabled: true },
        ],
      })

      expect(screen.getByRole("button", { name: "Copy Email" })).toBeEnabled()
      expect(screen.getByRole("button", { name: "Edit Email" })).toBeDisabled()
    })
  })

  describe("actionsVisibility", () => {
    it('is visible from the start with the default "always"', () => {
      renderField({ actions: [{ type: "copy" }] })

      expect(actionsRow()).not.toHaveClass("opacity-0")
    })

    it('hides until hover or focus with "hover"', () => {
      renderField({
        actions: [{ type: "copy" }],
        actionsVisibility: "hover",
      })

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

    it("holds the row open while a confirmation is showing", async () => {
      const writeText = vi.fn().mockResolvedValue(undefined)
      Object.defineProperty(navigator, "clipboard", {
        value: { writeText },
        configurable: true,
      })

      renderField({
        actions: [{ type: "copy" }],
        actionsVisibility: "hover",
      })

      await userEvent.click(screen.getByRole("button", { name: "Copy Email" }))

      await waitFor(() => expect(actionsRow()).not.toHaveClass("opacity-0"))
    })
  })

  describe("resting value (readonly + transparent)", () => {
    it("drops the border and the disabled-form background", () => {
      renderField({ readonly: true, transparent: true })

      const wrapper = screen.getByTestId("input-field-wrapper")
      expect(wrapper).not.toHaveClass("border-[1px]")
      expect(wrapper).not.toHaveClass("bg-f1-background-secondary")
    })

    it("tints on hover when there are hover-revealed actions to find", () => {
      renderField({
        readonly: true,
        transparent: true,
        actions: [{ type: "edit", onClick: vi.fn() }],
        actionsVisibility: "hover",
      })

      expect(screen.getByTestId("input-field-wrapper")).toHaveClass(
        "hover:bg-f1-background-secondary"
      )
    })

    it("does not tint when the actions are always visible", () => {
      renderField({
        readonly: true,
        transparent: true,
        actions: [{ type: "edit", onClick: vi.fn() }],
      })

      expect(screen.getByTestId("input-field-wrapper")).not.toHaveClass(
        "hover:bg-f1-background-secondary"
      )
    })

    it("keeps the height and radius of the field it turns into", () => {
      // A row that changes height on click moves the record under the reader,
      // so the resting cell is the same box the editable field will occupy.
      const resting = renderField({ readonly: true, transparent: true })
      const editable = renderField({})

      const restingWrapper = within(resting.container).getByTestId(
        "input-field-wrapper"
      )
      const editableWrapper = within(editable.container).getByTestId(
        "input-field-wrapper"
      )

      expect(restingWrapper).toHaveClass("h-[32px]")
      expect(editableWrapper).toHaveClass("h-[32px]")
      expect(restingWrapper).not.toHaveClass("h-full")
    })

    it("makes the whole cell the click target when it opens an editor", async () => {
      const onClickContent = vi.fn()
      const { container } = renderField({
        readonly: true,
        transparent: true,
        onClickContent,
      })

      const wrapper = screen.getByTestId("input-field-wrapper")
      expect(wrapper).toHaveClass("cursor-text")
      // `readonly` disables the inner input, and a disabled control swallows
      // the mouse event instead of letting it bubble — so the input has to
      // stop being the pointer target.
      expect(container.querySelector("input")).toHaveClass(
        "pointer-events-none"
      )

      // jsdom does no hit-testing, so the pass-through itself is verified by
      // the `ReadonlyTransparentValue` play function in a real browser. Here:
      // the cell that receives the pass-through fires the handler.
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

  describe("confirmation tint", () => {
    it("goes positive while an action shows a positive tone", () => {
      renderField({
        actions: [
          {
            type: "custom",
            icon: Archive,
            label: "Saved",
            tone: "positive",
            onClick: vi.fn(),
          },
        ],
      })

      const wrapper = screen.getByTestId("input-field-wrapper")
      expect(wrapper).toHaveClass("bg-f1-background-positive")
      // Repeated under `hover:` or the hover tint wins back the cell the
      // pointer is sitting on.
      expect(wrapper).toHaveClass("hover:bg-f1-background-positive")
    })

    it("stays plain while every action is at its resting tone", () => {
      renderField({ actions: [{ type: "copy" }] })

      expect(screen.getByTestId("input-field-wrapper")).not.toHaveClass(
        "bg-f1-background-positive"
      )
    })

    it("goes positive when a copy succeeds, and back when it lapses", async () => {
      vi.useFakeTimers({ shouldAdvanceTime: true })
      Object.defineProperty(navigator, "clipboard", {
        value: { writeText: vi.fn().mockResolvedValue(undefined) },
        configurable: true,
      })

      renderField({ actions: [{ type: "copy" }] })

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

  describe("copy", () => {
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

    it("copies the field value and confirms only on success", async () => {
      const writeText = vi.fn().mockResolvedValue(undefined)
      stubClipboard(writeText)

      renderField({ actions: [{ type: "copy" }] })

      await userEvent.click(screen.getByRole("button", { name: "Copy Email" }))

      expect(writeText).toHaveBeenCalledWith("ada@example.com")
      await waitFor(() =>
        expect(
          screen.getByRole("button", { name: "Copied" })
        ).toBeInTheDocument()
      )
    })

    it("copies an explicit text instead of the value", async () => {
      const writeText = vi.fn().mockResolvedValue(undefined)
      stubClipboard(writeText)

      renderField({ actions: [{ type: "copy", text: "raw-payload" }] })

      await userEvent.click(screen.getByRole("button", { name: "Copy Email" }))

      expect(writeText).toHaveBeenCalledWith("raw-payload")
    })

    it("does not claim success when the write fails", async () => {
      stubClipboard(vi.fn().mockRejectedValue(new Error("denied")))

      renderField({ actions: [{ type: "copy" }] })

      await userEvent.click(screen.getByRole("button", { name: "Copy Email" }))

      await waitFor(() =>
        expect(screen.getByText("Could not copy")).toBeInTheDocument()
      )
      expect(
        screen.queryByRole("button", { name: "Copied" })
      ).not.toBeInTheDocument()
    })

    it("announces the confirmation in a polite live region", async () => {
      stubClipboard(vi.fn().mockResolvedValue(undefined))

      const { container } = renderField({ actions: [{ type: "copy" }] })

      const liveRegion = container.querySelector('[aria-live="polite"]')
      expect(liveRegion).toBeInTheDocument()
      expect(liveRegion).toHaveTextContent("")

      await userEvent.click(screen.getByRole("button", { name: "Copy Email" }))

      await waitFor(() => expect(liveRegion).toHaveTextContent("Copied"))
    })
  })

  describe("visibility", () => {
    it("masks the value until revealed, and names the state each way", async () => {
      const { container } = renderField({ actions: [{ type: "visibility" }] })

      const input = container.querySelector("input")!
      expect(input.type).toBe("password")

      await userEvent.click(screen.getByRole("button", { name: "Show Email" }))
      expect(input.type).toBe("text")

      await userEvent.click(screen.getByRole("button", { name: "Hide Email" }))
      expect(input.type).toBe("password")
    })

    it("never forces a type onto a non-input child", () => {
      // Masking works by forcing the child's `type`. On a `<button>` trigger
      // (F0Select) `type="password"` is silently treated as `submit`, which
      // would turn a select into a form submit.
      const { container } = render(
        <F0InputField
          label="Legal gender"
          value="Female"
          actions={[{ type: "visibility" }]}
        >
          <button type="button">Female</button>
        </F0InputField>
      )

      expect(container.querySelector("button[type=password]")).toBeNull()
      expect(
        screen.getByRole("button", { name: "Show Legal gender" })
      ).toBeInTheDocument()
    })

    it("takes an explicit [show, hide] label pair", () => {
      renderField({
        actions: [{ type: "visibility", label: ["Reveal IBAN", "Mask IBAN"] }],
      })

      expect(
        screen.getByRole("button", { name: "Reveal IBAN" })
      ).toBeInTheDocument()
    })

    it("leaves the child's own type alone once revealed", async () => {
      const { container } = render(
        <F0InputField
          label="Email"
          value="ada@example.com"
          actions={[{ type: "visibility" }]}
        >
          <input type="email" />
        </F0InputField>
      )

      const input = container.querySelector("input")!
      expect(input.type).toBe("password")

      await userEvent.click(screen.getByRole("button", { name: "Show Email" }))
      expect(input.type).toBe("email")
    })
  })

  describe("edit and request-change", () => {
    it("fires edit's onClick without also firing onClickContent", async () => {
      const onClick = vi.fn()
      const onClickContent = vi.fn()
      renderField({ actions: [{ type: "edit", onClick }], onClickContent })

      await userEvent.click(screen.getByRole("button", { name: "Edit Email" }))

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClickContent).not.toHaveBeenCalled()
    })

    it("renders request-change with the comment glyph and its own name", async () => {
      const onClick = vi.fn()
      renderField({
        readonly: true,
        actions: [{ type: "request-change", onClick }],
      })

      const button = screen.getByRole("button", {
        name: "Request a change to Email",
      })
      // A comment, never a pencil: the click does not let you type.
      expect(
        screen.queryByRole("button", { name: /^Edit/ })
      ).not.toBeInTheDocument()

      await userEvent.click(button)
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it("warns when edit and request-change are both passed", () => {
      renderField({
        actions: [
          { type: "edit", onClick: vi.fn() },
          { type: "request-change", onClick: vi.fn() },
        ],
      })

      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining("mutually exclusive")
      )
    })
  })

  describe("custom", () => {
    it("passes the click event through and stops it at the field", async () => {
      const onClick = vi.fn()
      const onClickContent = vi.fn()
      renderField({
        actions: [{ type: "custom", icon: Archive, label: "Archive", onClick }],
        onClickContent,
      })

      await userEvent.click(screen.getByRole("button", { name: "Archive" }))

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onClick.mock.calls[0][0]).toHaveProperty("type", "click")
      expect(onClickContent).not.toHaveBeenCalled()
    })

    it('tints the glyph for tone="positive" and announces its label', () => {
      const { container } = renderField({
        actions: [
          {
            type: "custom",
            icon: Archive,
            label: "Saved",
            tone: "positive",
            onClick: vi.fn(),
          },
        ],
      })

      expect(
        container.querySelector(".\\[\\&_svg\\]\\:text-f1-icon-positive")
      ).toBeInTheDocument()
      expect(container.querySelector('[aria-live="polite"]')).toHaveTextContent(
        "Saved"
      )
    })
  })

  describe("keyboard", () => {
    it("reaches every action with Tab, in order, and activates with Enter", async () => {
      const onEdit = vi.fn()
      renderField({
        actions: [
          { type: "custom", icon: Archive, label: "Archive", onClick: vi.fn() },
          { type: "edit", onClick: onEdit },
        ],
        actionsVisibility: "hover",
      })

      await userEvent.tab()
      await userEvent.tab()
      expect(screen.getByRole("button", { name: "Archive" })).toHaveFocus()

      await userEvent.tab()
      expect(screen.getByRole("button", { name: "Edit Email" })).toHaveFocus()

      fireEvent.keyDown(document.activeElement!, { key: "Enter" })
      await userEvent.keyboard("{Enter}")
      expect(onEdit).toHaveBeenCalled()
    })
  })
})
