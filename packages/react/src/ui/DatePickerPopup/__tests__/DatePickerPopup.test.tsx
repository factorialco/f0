import { screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { DatePickerPopup } from "../DatePickerPopup"

describe("OneDatePickerPopup", () => {
  it("renders the trigger element", () => {
    render(
      <DatePickerPopup onSelect={vi.fn()} asChild>
        <button>Open Date Picker</button>
      </DatePickerPopup>
    )

    const trigger = screen.getByRole("button", { name: "Open Date Picker" })
    expect(trigger).toBeDefined()
  })

  it("renders open the popup when the trigger is clicked", async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    render(
      <DatePickerPopup onSelect={onSelect} asChild>
        <button>Trigger</button>
      </DatePickerPopup>
    )
    const trigger = screen.getByRole("button")
    await user.click(trigger)
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })
})
