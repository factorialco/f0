import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { CLOCK_IN_COLORS, ClockInGraph, ClockInGraphProps } from "./index"

describe("ClockInGraph", () => {
  it("renders with default props", () => {
    render(<ClockInGraph />)
    expect(screen.getByText("00:00")).toBeInTheDocument()
  })

  it("renders with custom dates", () => {
    const data: ClockInGraphProps["data"] = [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T17:00:00"),
        variant: "clocked-in",
      },
    ]
    const hours = 8
    render(<ClockInGraph data={data} trackedMinutes={hours * 60} />)
    expect(screen.getByText(`0${hours}:00`)).toBeInTheDocument()
  })

  describe("horizontal-bar variant", () => {
    const data: ClockInGraphProps["data"] = [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T13:00:00"),
        variant: "break",
      },
    ]

    it("draws one segment per entry plus the remaining time, and no text", () => {
      const { container } = render(
        <ClockInGraph
          variant="horizontal-bar"
          data={data}
          trackedMinutes={3 * 60}
          remainingMinutes={5 * 60}
        />
      )

      // Worked, break, and what is left of the day.
      expect(container.firstElementChild?.children).toHaveLength(3)
      // The rail carries no numbers of its own — the layout around it does.
      expect(container.textContent).toBe("")
    })

    it("is hidden from assistive tech, since its numbers are text elsewhere", () => {
      const { container } = render(
        <ClockInGraph
          variant="horizontal-bar"
          data={data}
          trackedMinutes={60}
        />
      )
      expect(container.firstElementChild).toHaveAttribute("aria-hidden")
    })

    it("names a labelled stretch of the day, so a past break can be identified", () => {
      const { container } = render(
        <ClockInGraph
          variant="horizontal-bar"
          data={[
            {
              from: new Date("2024-03-20T09:00:00"),
              to: new Date("2024-03-20T12:00:00"),
              variant: "clocked-in",
            },
            {
              from: new Date("2024-03-20T12:00:00"),
              to: new Date("2024-03-20T13:00:00"),
              variant: "break",
              label: "Lunch break",
            },
          ]}
          trackedMinutes={3 * 60}
          remainingMinutes={5 * 60}
        />
      )

      // The labelled segment is in the a11y tree; the unlabelled ones aren't.
      expect(screen.getByLabelText("Lunch break")).toBeInTheDocument()
      // And with something worth announcing, the rail is no longer hidden.
      expect(container.firstElementChild).not.toHaveAttribute("aria-hidden")
    })

    it("fills with the empty colour when the day hasn't started", () => {
      const { container } = render(
        <ClockInGraph
          variant="horizontal-bar"
          data={[]}
          trackedMinutes={0}
          remainingMinutes={8 * 60}
        />
      )
      const segments = container.firstElementChild?.children
      expect(segments).toHaveLength(1)
      expect(segments?.[0]).toHaveStyle({
        backgroundColor: CLOCK_IN_COLORS.empty,
      })
    })
  })
})
