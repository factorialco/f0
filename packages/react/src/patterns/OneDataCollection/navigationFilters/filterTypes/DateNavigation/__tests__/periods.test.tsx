import { screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { endOfDay, startOfDay } from "date-fns"
import { describe, expect, it, vi } from "vitest"

import { TranslationsType } from "@/lib/providers/i18n"
import { zeroRender as render } from "@/testing/test-utils"

import { DateNavigation } from "../DateNavigation"
import dateNavigatorFilter from "../index"
import { DateNavigatorFilterDefinition } from "../types"

const periods = [
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
]

const rangeOf = (label: string) => {
  const period = periods.find((p) => p.label === label)!
  return { from: startOfDay(period.from), to: endOfDay(period.to) }
}

const filter: DateNavigatorFilterDefinition = {
  type: "date-navigator",
  defaultValue: new Date(2026, 0, 10),
  granularity: ["month", "periods"],
  defaultGranularity: "periods",
  periods: { label: "Payroll", periods },
}

describe("date-navigator filter with periods", () => {
  it("converts the initial value into the period containing it", () => {
    const result = dateNavigatorFilter.valueConverter?.(
      new Date(2026, 0, 10),
      filter,
      {} as TranslationsType
    )

    expect(result).toEqual({
      value: rangeOf("January 2026"),
      valueString: "January 2026",
      granularity: "periods",
    })
  })

  it("labels the trigger with the selected period", () => {
    render(
      <DateNavigation
        filter={filter}
        value={{
          value: rangeOf("January 2026"),
          valueString: "January 2026",
          granularity: "periods",
        }}
        onChange={vi.fn()}
      />
    )

    expect(
      screen.getByRole("button", { name: "January 2026" })
    ).toBeInTheDocument()
  })

  it("steps to the next period from the navigation arrows", async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(
      <DateNavigation
        filter={filter}
        value={{
          value: rangeOf("January 2026"),
          valueString: "January 2026",
          granularity: "periods",
        }}
        onChange={onChange}
      />
    )

    await user.click(screen.getByRole("button", { name: "Next" }))

    expect(onChange).toHaveBeenCalledWith({
      value: rangeOf("February 2026"),
      valueString: "February 2026",
      granularity: "periods",
    })
  })
})
