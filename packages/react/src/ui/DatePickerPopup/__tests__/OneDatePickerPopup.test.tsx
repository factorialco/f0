import { zeroRender as render } from "@/testing/test-utils"
import { screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { OneDatePickerPopup } from "../OneDatePickerPopup"

describe("OneDatePickerPopup", () => {
  it("renders the trigger element", () => {
    render(
      <OneDatePickerPopup onSelect={vi.fn()}>
        <button>Open Date Picker</button>
      </OneDatePickerPopup>
    )

    const trigger = screen.getByRole("button", { name: "Open Date Picker" })
    expect(trigger).toBeDefined()
  })

  it("renders open the popup when the trigger is clicked", async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    render(
      <OneDatePickerPopup onSelect={onSelect}>
        <button>Trigger</button>
      </OneDatePickerPopup>
    )
    const trigger = screen.getByRole("button")
    await user.click(trigger)
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })
})
