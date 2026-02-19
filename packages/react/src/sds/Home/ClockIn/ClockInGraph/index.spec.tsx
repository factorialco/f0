import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { ClockInGraph, ClockInGraphProps } from "./index"

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
})
