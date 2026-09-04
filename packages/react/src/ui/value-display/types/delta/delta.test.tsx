import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { DeltaCell, type DeltaCellValue } from "./delta"

const cell = (value: DeltaCellValue) => render(DeltaCell(value)).container

describe("DeltaCell", () => {
  it("takes its arrow from the status", () => {
    expect(
      cell({ label: "10%", deltaStatus: "positive" }).querySelector("svg")
    ).toHaveClass("text-f1-icon-positive")
    expect(
      cell({ label: "10%", deltaStatus: "negative" }).querySelector("svg")
    ).toHaveClass("text-f1-icon-critical")
  })

  it("keeps the colour on the status when an arrow overrides it", () => {
    const positive = cell({
      label: "−1.2 pp",
      deltaStatus: "positive",
      arrow: "down",
    })
    const down = cell({ label: "10%", deltaStatus: "negative" })

    expect(positive.querySelector("svg")).toHaveClass("text-f1-icon-positive")
    expect(positive.querySelector("svg")!.innerHTML).toBe(
      down.querySelector("svg")!.innerHTML
    )
  })

  it("draws no arrow for a neutral status, nor for an explicit none", () => {
    expect(
      cell({ label: "0", deltaStatus: "neutral" }).querySelector("svg")
    ).toBeNull()
    expect(
      cell({
        label: "0",
        deltaStatus: "positive",
        arrow: "none",
      }).querySelector("svg")
    ).toBeNull()
  })
})
