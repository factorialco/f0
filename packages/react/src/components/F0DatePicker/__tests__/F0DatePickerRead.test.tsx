import "@testing-library/jest-dom/vitest"
import { describe, expect, it, vi } from "vitest"
import { F0DatePicker } from ".."
import {
  screen,
  userEvent,
  zeroRender as render,
} from "../../../testing/test-utils"
import { DatePickerValue } from "../types"

const seniorityDate: DatePickerValue = {
  value: {
    from: new Date(2018, 8, 1, 0, 0, 0),
    to: new Date(2018, 8, 1, 23, 59, 59),
  },
  granularity: "day",
}

const renderRead = (props: Partial<Parameters<typeof F0DatePicker>[0]> = {}) =>
  render(
    <F0DatePicker
      label="Seniority date"
      mode="read"
      value={seniorityDate}
      {...props}
    />
  )

describe("F0DatePicker read mode", () => {
  it("reads the date as dd/MM/yyyy text instead of an input", () => {
    renderRead()

    expect(screen.getByText("01/09/2018")).toBeInTheDocument()
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
  })

  it("keeps the numeric format once the field is edited", async () => {
    const user = userEvent.setup()
    renderRead()

    await user.click(
      screen.getByRole("button", { name: "Edit Seniority date" })
    )

    expect(screen.getByRole("textbox")).toHaveValue("01/09/2018")
  })

  it("still shows the long format in edit mode by default", () => {
    render(<F0DatePicker label="Seniority date" value={seniorityDate} />)

    expect(screen.getByRole("textbox")).toHaveValue("01 Sep 2018")
  })

  it("honours an explicit displayFormat over the read-mode default", () => {
    renderRead({ displayFormat: "long" })

    expect(screen.getByText("01 Sep 2018")).toBeInTheDocument()
  })

  describe("when the reader can edit", () => {
    it("exposes a single edit control labelled with the field", () => {
      renderRead()

      expect(
        screen.getByRole("button", { name: "Edit Seniority date" })
      ).toBeInTheDocument()
      expect(screen.getAllByRole("button")).toHaveLength(1)
    })

    it("opens the calendar on the input when activated", async () => {
      const user = userEvent.setup()
      renderRead()

      await user.click(
        screen.getByRole("button", { name: "Edit Seniority date" })
      )

      expect(screen.getByRole("textbox")).toBeInTheDocument()
      expect(await screen.findByRole("dialog")).toBeInTheDocument()
    })

    it("is reachable with the keyboard", async () => {
      const user = userEvent.setup()
      renderRead()

      await user.tab()
      expect(
        screen.getByRole("button", { name: "Edit Seniority date" })
      ).toHaveFocus()

      await user.keyboard("{Enter}")
      expect(screen.getByRole("textbox")).toBeInTheDocument()
    })

    it("reports the move into editing", async () => {
      const user = userEvent.setup()
      const onModeChange = vi.fn()
      renderRead({ onModeChange })

      await user.click(
        screen.getByRole("button", { name: "Edit Seniority date" })
      )

      expect(onModeChange).toHaveBeenCalledWith("edit")
    })

    it("goes back to reading once the calendar closes", async () => {
      const user = userEvent.setup()
      const onModeChange = vi.fn()
      renderRead({ onModeChange })

      await user.click(
        screen.getByRole("button", { name: "Edit Seniority date" })
      )
      await user.keyboard("{Escape}")

      expect(onModeChange).toHaveBeenLastCalledWith("read")
      expect(
        await screen.findByRole("button", { name: "Edit Seniority date" })
      ).toBeInTheDocument()
    })

    it("commits a picked date and goes back to reading it", async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      renderRead({ onChange })

      await user.click(
        screen.getByRole("button", { name: "Edit Seniority date" })
      )
      await screen.findByRole("grid")
      const twelfth = screen
        .getAllByRole("gridcell", { name: "12" })
        .find((cell) => !cell.className.includes("day-outside"))
      await user.click(twelfth!)

      expect(onChange).toHaveBeenCalledOnce()
      expect(
        await screen.findByRole("button", { name: "Edit Seniority date" })
      ).toBeInTheDocument()
      expect(screen.getByText("12/09/2018")).toBeInTheDocument()
    })

    it("offers no request-change action, since editing is available", () => {
      const onRequestChange = vi.fn()
      renderRead({ onRequestChange })

      expect(
        screen.queryByRole("button", {
          name: "Request a change to Seniority date",
        })
      ).not.toBeInTheDocument()
    })
  })

  describe("when the reader cannot edit", () => {
    it("offers a request-change action instead of the edit one", async () => {
      const user = userEvent.setup()
      const onRequestChange = vi.fn()
      renderRead({ canEdit: false, onRequestChange })

      expect(
        screen.queryByRole("button", { name: "Edit Seniority date" })
      ).not.toBeInTheDocument()

      await user.click(
        screen.getByRole("button", {
          name: "Request a change to Seniority date",
        })
      )

      expect(onRequestChange).toHaveBeenCalledTimes(1)
    })

    it("reads as plain text when there is nothing to request either", () => {
      renderRead({ canEdit: false })

      expect(screen.getByText("01/09/2018")).toBeInTheDocument()
      expect(screen.queryAllByRole("button")).toHaveLength(0)
    })
  })

  describe("when disabled", () => {
    it("reads as plain text with no actions at all", () => {
      renderRead({ disabled: true, onRequestChange: vi.fn() })

      expect(screen.getByText("01/09/2018")).toBeInTheDocument()
      expect(screen.queryAllByRole("button")).toHaveLength(0)
    })
  })

  describe("without a date", () => {
    it("falls back to the translated empty label", () => {
      renderRead({ value: undefined })

      expect(screen.getByText("None")).toBeInTheDocument()
    })

    it("prefers a caller-supplied empty label", () => {
      renderRead({ value: undefined, emptyLabel: "no date" })

      expect(screen.getByText("no date")).toBeInTheDocument()
    })
  })

  describe("label", () => {
    it("reads the field label above the value", () => {
      renderRead()

      expect(screen.getByText("Seniority date")).toBeInTheDocument()
    })

    it("hides it when asked, keeping it on the action", () => {
      renderRead({ hideLabel: true })

      expect(screen.queryByText("Seniority date")).not.toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Edit Seniority date" })
      ).toBeInTheDocument()
    })
  })
})
