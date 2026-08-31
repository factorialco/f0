import { screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { endOfDay, startOfDay } from "date-fns"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { DatePickerPopup } from "../DatePickerPopup"

const periods = {
  label: "Payroll",
  header: "Spain — Iberia Workforce SL",
  periods: [
    {
      label: "December 2025",
      from: new Date(2025, 10, 25),
      to: new Date(2025, 11, 24),
    },
    {
      label: "January 2026",
      from: new Date(2025, 11, 25),
      to: new Date(2026, 0, 24),
    },
    {
      label: "February 2026",
      from: new Date(2026, 0, 25),
      to: new Date(2026, 1, 24),
    },
  ],
}

const openPeriods = async (onSelect = vi.fn()) => {
  const user = userEvent.setup()
  render(
    <DatePickerPopup
      onSelect={onSelect}
      granularities={["month"]}
      periods={periods}
      asChild
    >
      <button>Trigger</button>
    </DatePickerPopup>
  )

  await user.click(screen.getByRole("button", { name: "Trigger" }))
  await user.click(await screen.findByRole("option", { name: "Payroll" }))

  return { user, onSelect }
}

describe("DatePickerPopup with periods", () => {
  it("lists the consumer periods as an extra granularity entry", async () => {
    const user = userEvent.setup()
    render(
      <DatePickerPopup
        onSelect={vi.fn()}
        granularities={["month"]}
        periods={periods}
        asChild
      >
        <button>Trigger</button>
      </DatePickerPopup>
    )

    await user.click(screen.getByRole("button", { name: "Trigger" }))

    expect(
      await screen.findByRole("option", { name: "Payroll" })
    ).toBeInTheDocument()
    expect(screen.getByRole("option", { name: "Month" })).toBeInTheDocument()
  })

  it("renders each period with its label, its range and the header", async () => {
    await openPeriods()

    expect(await screen.findByText("January 2026")).toBeInTheDocument()
    expect(screen.getByText("February 2026")).toBeInTheDocument()
    expect(screen.getByText("Spain — Iberia Workforce SL")).toBeInTheDocument()
    expect(screen.getByText("Dec 25 → Jan 24")).toBeInTheDocument()
  })

  it("emits the full period range when one is picked", async () => {
    const { user, onSelect } = await openPeriods()

    await user.click(await screen.findByText("February 2026"))

    expect(onSelect).toHaveBeenLastCalledWith({
      value: {
        from: startOfDay(new Date(2026, 0, 25)),
        to: endOfDay(new Date(2026, 1, 24)),
      },
      granularity: "periods",
    })
  })

  it("pages the list by year and hides the date input", async () => {
    await openPeriods()

    await screen.findByText("January 2026")
    expect(screen.getByRole("button", { name: "Previous" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument()
    expect(screen.queryByRole("textbox")).toBeNull()
  })

  it("only lists the periods of the year in view", async () => {
    const { user } = await openPeriods()

    await screen.findByText("January 2026")
    // The 2026 cycles start on 25 Dec 2025 but belong to the year they end in
    expect(screen.queryByText("December 2025")).toBeNull()

    await user.click(screen.getByRole("button", { name: "Previous" }))

    expect(await screen.findByText("December 2025")).toBeInTheDocument()
    expect(screen.queryByText("January 2026")).toBeNull()
  })
})

describe("DatePickerPopup with a periods value and no periods", () => {
  it("renders the empty periods state instead of throwing", async () => {
    const user = userEvent.setup()
    render(
      <DatePickerPopup
        onSelect={vi.fn()}
        value={{
          granularity: "periods",
          value: { from: new Date(2026, 0, 25), to: new Date(2026, 1, 24) },
        }}
        asChild
      >
        <button>Trigger</button>
      </DatePickerPopup>
    )

    await user.click(screen.getByRole("button", { name: "Trigger" }))

    expect(await screen.findByText("No periods available")).toBeInTheDocument()
  })
})
