import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { screen, zeroRender as render, waitFor } from "@/testing/test-utils"
import { F0DatePicker } from "../F0DatePicker"

/**
 * A consumer that controls `open` only learns about a close through
 * `onOpenChange`. Picking a day closes the calendar, so it has to report it.
 */
describe("F0DatePicker open reporting", () => {
  it("reports the close that selecting a day causes", async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()

    render(
      <F0DatePicker
        label="Start date"
        open
        onOpenChange={onOpenChange}
        onChange={vi.fn()}
        value={{ value: { from: new Date(2026, 3, 10) }, granularity: "day" }}
      />
    )

    const day = await screen.findByRole("gridcell", { name: "15" })
    await user.click(day)

    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(false)
    })
  })
})
