import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import {
  fireEvent,
  screen,
  zeroRender as render,
  waitFor,
} from "@/testing/test-utils"
import { F0DatePicker } from "../F0DatePicker"
import type { DatePickerValue } from "../types"

const april10: DatePickerValue = {
  value: { from: new Date(2026, 3, 10) },
  granularity: "day",
}

const april: DatePickerValue = {
  value: { from: new Date(2026, 3, 1) },
  granularity: "month",
}

describe("F0DatePicker inline variant", () => {
  describe("at rest", () => {
    it("renders the same string the input prints, with no input element", () => {
      render(
        <F0DatePicker variant="inline" label="Start date" value={april10} />
      )

      expect(screen.getByText("10 Apr 2026")).toBeInTheDocument()
      expect(screen.queryByRole("textbox")).toBeNull()
    })

    it("prints dd/MM/yyyy under the default format, exactly as the input does", () => {
      render(
        <F0DatePicker
          variant="inline"
          label="Start date"
          value={april10}
          displayFormat="default"
        />
      )

      expect(screen.getByText("10/04/2026")).toBeInTheDocument()
    })

    it("prints a coarser granularity with its own toString", () => {
      render(
        <F0DatePicker
          variant="inline"
          label="Start date"
          granularities={["month"]}
          value={april}
        />
      )

      expect(screen.getByText("April 2026")).toBeInTheDocument()
    })

    it("renders the placeholder when there is no value", () => {
      render(
        <F0DatePicker
          variant="inline"
          label="Start date"
          placeholder="Add a start date"
        />
      )

      expect(screen.getByText("Add a start date")).toBeInTheDocument()
    })

    it("keeps the label as the accessible name when hideLabel is set", () => {
      render(
        <F0DatePicker
          variant="inline"
          label="Start date"
          hideLabel
          value={april10}
        />
      )

      expect(screen.getByLabelText("Start date").textContent).toBe(
        "10 Apr 2026"
      )
    })

    it("carries no popup trigger and no tab stop", () => {
      const { container } = render(
        <F0DatePicker variant="inline" label="Start date" value={april10} />
      )

      expect(container.querySelector("[tabindex]")).toBeNull()
      expect(container.querySelector("[aria-haspopup]")).toBeNull()
      expect(screen.queryByRole("button")).toBeNull()
    })

    it("shows no calendar", () => {
      render(
        <F0DatePicker variant="inline" label="Start date" value={april10} />
      )

      expect(screen.queryByRole("grid")).toBeNull()
    })
  })

  describe("editing", () => {
    it("renders the input with the calendar open and takes focus", async () => {
      render(
        <F0DatePicker
          variant="inline"
          editing
          label="Start date"
          value={april10}
        />
      )

      const input = screen.getByRole("textbox", { name: "Start date" })
      expect((input as HTMLInputElement).value).toBe("10 Apr 2026")
      expect(await screen.findByRole("grid")).toBeInTheDocument()
      await waitFor(() => expect(document.activeElement).toBe(input))
    })

    it("opens the calendar when editing flips true after the first render", async () => {
      const { rerender } = render(
        <F0DatePicker variant="inline" label="Start date" value={april10} />
      )

      expect(screen.queryByRole("textbox")).toBeNull()

      rerender(
        <F0DatePicker
          variant="inline"
          editing
          label="Start date"
          value={april10}
        />
      )

      const input = screen.getByRole("textbox", { name: "Start date" })
      expect(await screen.findByRole("grid")).toBeInTheDocument()
      await waitFor(() => expect(document.activeElement).toBe(input))
    })
  })

  describe("onDismiss", () => {
    it("reports commit when a day is picked", async () => {
      const user = userEvent.setup()
      const onDismiss = vi.fn()

      render(
        <F0DatePicker
          variant="inline"
          editing
          label="Start date"
          value={april10}
          onDismiss={onDismiss}
        />
      )

      await user.click(await screen.findByRole("gridcell", { name: "15" }))

      await waitFor(() => expect(onDismiss).toHaveBeenCalledWith("commit"))
    })

    it("swallows the Enter so it does not submit the form around it", () => {
      render(
        <F0DatePicker
          variant="inline"
          editing
          label="Start date"
          value={april10}
        />
      )

      // `fireEvent` returns false once something called `preventDefault`, which
      // is what stops a browser's implicit submission.
      expect(
        fireEvent.keyDown(screen.getByRole("textbox", { name: "Start date" }), {
          key: "Enter",
        })
      ).toBe(false)
    })

    it("reports escape when Escape is pressed in the input", async () => {
      const onDismiss = vi.fn()

      render(
        <F0DatePicker
          variant="inline"
          editing
          label="Start date"
          value={april10}
          onDismiss={onDismiss}
        />
      )

      fireEvent.keyDown(screen.getByRole("textbox", { name: "Start date" }), {
        key: "Escape",
      })

      await waitFor(() => expect(onDismiss).toHaveBeenCalledWith("escape"))
      expect(onDismiss).toHaveBeenCalledTimes(1)
    })

    it("reports popupClose when the calendar is dismissed from outside", async () => {
      const user = userEvent.setup()
      const onDismiss = vi.fn()

      render(
        <div>
          <button type="button">Elsewhere</button>
          <F0DatePicker
            variant="inline"
            editing
            label="Start date"
            value={april10}
            onDismiss={onDismiss}
          />
        </div>
      )

      await screen.findByRole("grid")
      await user.click(screen.getByRole("button", { name: "Elsewhere" }))

      await waitFor(() => expect(onDismiss).toHaveBeenCalledWith("popupClose"))
      expect(onDismiss).toHaveBeenCalledTimes(1)
    })

    it("reports blur when focus leaves without a pick", async () => {
      const onDismiss = vi.fn()

      render(
        <F0DatePicker
          variant="inline"
          editing
          label="Start date"
          value={april10}
          onDismiss={onDismiss}
        />
      )

      const input = screen.getByRole("textbox", { name: "Start date" })
      await waitFor(() => expect(document.activeElement).toBe(input))
      // A real blur, not a dispatched event: what makes it a dismissal is where
      // focus ends up.
      ;(input as HTMLInputElement).blur()

      await waitFor(() => expect(onDismiss).toHaveBeenCalledWith("blur"))
    })

    it("keeps drawing the editor after every dismissal", async () => {
      const onDismiss = vi.fn()

      render(
        <F0DatePicker
          variant="inline"
          editing
          label="Start date"
          value={april10}
          onDismiss={onDismiss}
        />
      )

      const input = screen.getByRole("textbox", { name: "Start date" })
      await screen.findByRole("grid")

      fireEvent.keyDown(input, { key: "Escape" })

      expect(screen.getByRole("textbox", { name: "Start date" })).toBeVisible()
      expect(screen.getByRole("grid")).toBeInTheDocument()
    })

    it("stays at rest while editing is false, whatever the calendar reports", () => {
      const onDismiss = vi.fn()

      render(
        <F0DatePicker
          variant="inline"
          label="Start date"
          value={april10}
          onDismiss={onDismiss}
        />
      )

      expect(screen.getByText("10 Apr 2026")).toBeInTheDocument()
      expect(screen.queryByRole("textbox")).toBeNull()
      expect(onDismiss).not.toHaveBeenCalled()
    })
  })

  describe("the field variant", () => {
    it("still renders its input and opens on focus", async () => {
      const user = userEvent.setup()

      render(<F0DatePicker label="Start date" value={april10} />)

      const input = screen.getByRole("textbox", { name: "Start date" })
      expect((input as HTMLInputElement).value).toBe("10 Apr 2026")

      await user.click(input)
      expect(await screen.findByRole("grid")).toBeInTheDocument()
    })

    it("still reports open changes to the consumer", async () => {
      const user = userEvent.setup()
      const onOpenChange = vi.fn()

      render(
        <F0DatePicker
          label="Start date"
          open
          onOpenChange={onOpenChange}
          value={april10}
        />
      )

      await user.click(await screen.findByRole("gridcell", { name: "15" }))

      await waitFor(() => expect(onOpenChange).toHaveBeenCalledWith(false))
    })
  })
})
