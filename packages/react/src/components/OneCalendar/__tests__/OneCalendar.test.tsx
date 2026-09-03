import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { OneCalendar } from "../OneCalendar"

describe("OneCalendar", () => {
  it("renders the empty periods state when the view is periods and none are supplied", () => {
    render(<OneCalendar mode="single" view="periods" />)

    expect(screen.getByText("No periods available")).toBeInTheDocument()
  })
})

describe("OneCalendar initial month", () => {
  // Regression: `setSelected` runs on mount and used to compare two Date
  // objects with `!==`, which is always true, so it rewrote `viewDate` from
  // the exact instant (today / the nearest bound) to the first of that month.
  // DayView keyed its motion wrapper on that instant, so the grid was
  // re-keyed on mount and replayed its 150ms fade. CI's axe pass then sampled
  // the weekday headers mid-fade and reported a false color-contrast failure.
  it("renders a single month grid on mount when minDate is in the future", () => {
    const minDate = new Date()
    minDate.setMonth(minDate.getMonth() + 2)

    const { container } = render(
      <OneCalendar mode="single" view="day" minDate={minDate} />
    )

    expect(container.querySelectorAll("table")).toHaveLength(1)
  })

  it("renders a single month grid on mount with no bounds", () => {
    const { container } = render(<OneCalendar mode="single" view="day" />)

    expect(container.querySelectorAll("table")).toHaveLength(1)
  })
})
