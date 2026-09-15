import "@testing-library/jest-dom/vitest"
import { describe, expect, it, vi } from "vitest"
import { F0DatePicker } from ".."
import {
  screen,
  userEvent,
  zeroRender as render,
} from "../../../testing/test-utils"
import { DatePickerValue, F0DatePickerInlineProps } from "../types"

const dayValue: DatePickerValue = {
  value: {
    from: new Date(2018, 8, 1, 0, 0, 0),
    to: new Date(2018, 8, 1, 23, 59, 59),
  },
  granularity: "day",
}

const renderInline = (props: Partial<F0DatePickerInlineProps> = {}) =>
  render(
    <F0DatePicker variant="inline" label="Date" value={dayValue} {...props} />
  )

describe("F0DatePicker inline variant", () => {
  it("reads the date as dd/MM/yyyy text instead of an input", () => {
    renderInline()

    expect(screen.getByText("01/09/2018")).toBeInTheDocument()
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
  })

  it("keeps the numeric format once the row is edited", async () => {
    const user = userEvent.setup()
    renderInline()

    await user.click(screen.getByRole("button", { name: "Edit Date" }))

    expect(screen.getByRole("textbox")).toHaveValue("01/09/2018")
  })

  it("honours an explicit displayFormat over the inline default", () => {
    renderInline({ displayFormat: "long" })

    expect(screen.getByText("01 Sep 2018")).toBeInTheDocument()
  })

  it("keeps the label as the accessible name without showing it", () => {
    renderInline()

    expect(screen.queryByText("Date")).not.toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Edit Date" })
    ).toBeInTheDocument()
  })

  describe("when the date can be set here", () => {
    it("exposes a single edit control labelled with the field", () => {
      renderInline()

      expect(
        screen.getByRole("button", { name: "Edit Date" })
      ).toBeInTheDocument()
      expect(screen.getAllByRole("button")).toHaveLength(1)
    })

    it("opens the calendar on the input when activated", async () => {
      const user = userEvent.setup()
      renderInline()

      await user.click(screen.getByRole("button", { name: "Edit Date" }))

      expect(screen.getByRole("textbox")).toBeInTheDocument()
      expect(await screen.findByRole("dialog")).toBeInTheDocument()
    })

    it("is reachable with the keyboard", async () => {
      const user = userEvent.setup()
      renderInline()

      await user.tab()
      expect(screen.getByRole("button", { name: "Edit Date" })).toHaveFocus()

      await user.keyboard("{Enter}")
      expect(screen.getByRole("textbox")).toBeInTheDocument()
    })

    it("reports the move into editing", async () => {
      const user = userEvent.setup()
      const onModeChange = vi.fn()
      renderInline({ onModeChange })

      await user.click(screen.getByRole("button", { name: "Edit Date" }))

      expect(onModeChange).toHaveBeenCalledWith("edit")
    })

    it("goes back to reading once the calendar closes", async () => {
      const user = userEvent.setup()
      const onModeChange = vi.fn()
      renderInline({ onModeChange })

      await user.click(screen.getByRole("button", { name: "Edit Date" }))
      await user.keyboard("{Escape}")

      expect(onModeChange).toHaveBeenLastCalledWith("read")
      expect(
        await screen.findByRole("button", { name: "Edit Date" })
      ).toBeInTheDocument()
    })

    it("commits a picked date and goes back to reading it", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      renderInline({ onChange })

      await user.click(screen.getByRole("button", { name: "Edit Date" }))
      await screen.findByRole("grid")
      const twelfth = screen
        .getAllByRole("gridcell", { name: "12" })
        .find((cell) => !cell.className.includes("day-outside"))
      await user.click(twelfth!)

      expect(onChange).toHaveBeenCalledOnce()
      expect(
        await screen.findByRole("button", { name: "Edit Date" })
      ).toBeInTheDocument()
      expect(screen.getByText("12/09/2018")).toBeInTheDocument()
    })

    it("offers no request-change action, since the date can be set", () => {
      renderInline({ onRequestChange: vi.fn() })

      expect(
        screen.queryByRole("button", { name: "Request a change to Date" })
      ).not.toBeInTheDocument()
    })
  })

  describe("when readonly", () => {
    it("offers a request-change action instead of the edit one", async () => {
      const user = userEvent.setup()
      const onRequestChange = vi.fn()
      renderInline({ readonly: true, onRequestChange })

      expect(
        screen.queryByRole("button", { name: "Edit Date" })
      ).not.toBeInTheDocument()

      await user.click(
        screen.getByRole("button", { name: "Request a change to Date" })
      )

      expect(onRequestChange).toHaveBeenCalledTimes(1)
    })

    it("drops the action when there is nobody to ask", () => {
      // The consumer passes onRequestChange conditionally, so `undefined` is
      // the ordinary way to say "this reader may not request either".
      renderInline({ readonly: true, onRequestChange: undefined })

      expect(screen.getByText("01/09/2018")).toBeInTheDocument()
      expect(screen.queryAllByRole("button")).toHaveLength(0)
    })
  })

  describe("validation and messaging", () => {
    it("rejects clearing a required date", async () => {
      const user = userEvent.setup()
      renderInline({ required: true, clearable: true })

      await user.click(screen.getByRole("button", { name: "Edit Date" }))
      await user.clear(screen.getByRole("textbox"))
      await user.tab()

      // F0InputField signals invalidity through the wrapper's border alone —
      // it sets no `aria-invalid`, and a boolean `error` carries no message,
      // so the border class is the only thing there is to assert.
      // Scoped to the row's own wrapper: the open calendar renders a second
      // one, so a bare getByTestId matches twice.
      const field = screen
        .getByRole("textbox")
        .closest("[data-testid='input-field-wrapper']")

      expect(field).toHaveClass("border-f1-border-critical-bold")
    })

    it("offers the clear button while editing", async () => {
      const user = userEvent.setup()
      renderInline({ clearable: true })

      await user.click(screen.getByRole("button", { name: "Edit Date" }))

      expect(screen.getByTestId("clear-button")).toBeInTheDocument()
    })

    it("keeps an error visible once the row goes back to text", () => {
      renderInline({ status: { type: "error", message: "Could not save" } })

      expect(screen.getByText("Could not save")).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Edit Date" })
      ).toBeInTheDocument()
    })

    it("reads a hint below the value", () => {
      renderInline({ hint: "Used by years-of-service reports" })

      expect(
        screen.getByText("Used by years-of-service reports")
      ).toBeInTheDocument()
    })

    it("lets error override hint, as the field does", () => {
      renderInline({ hint: "A hint", error: "Could not save" })

      expect(screen.getByText("Could not save")).toBeInTheDocument()
      expect(screen.queryByText("A hint")).not.toBeInTheDocument()
    })

    it("shows the message on a readonly row too", () => {
      renderInline({
        readonly: true,
        status: { type: "warning", message: "Pending approval" },
      })

      expect(screen.getByText("Pending approval")).toBeInTheDocument()
    })
  })

  describe("without a date", () => {
    it("falls back to the translated empty label", () => {
      renderInline({ value: undefined })

      expect(screen.getByText("None")).toBeInTheDocument()
    })

    it("prefers the placeholder", () => {
      renderInline({ value: undefined, placeholder: "no date" })

      expect(screen.getByText("no date")).toBeInTheDocument()
    })
  })

  describe("the default variant", () => {
    it("still renders the input with the long format", () => {
      render(<F0DatePicker label="Date" value={dayValue} />)

      expect(screen.getByRole("textbox")).toHaveValue("01 Sep 2018")
    })
  })
})
