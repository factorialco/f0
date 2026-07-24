import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"
import React from "react"

import { DaytimePage } from "../index"

// The real switches render null unless their AI context is enabled, so we stub
// them to stable markers and assert only DaytimePage's show/hide decision.
vi.mock("@/kits/ai/F0OneSwitch", () => ({
  F0OneSwitch: () => <div data-testid="one-switch" />,
}))
vi.mock("@/experimental/AiPromotionChat/OneSwitch", () => ({
  OneSwitch: () => <div data-testid="one-promotion-switch" />,
}))

const header = {
  title: "Good morning, Hellen",
  employeeFirstName: "Hellen",
  employeeLastName: "the HR",
}

describe("DaytimePage one switch", () => {
  it("renders the One switch by default", () => {
    render(<DaytimePage header={header} />)
    expect(screen.getByTestId("one-switch")).toBeInTheDocument()
  })

  it("hides the One switch when hideOneSwitch is true", () => {
    render(<DaytimePage header={header} hideOneSwitch />)
    expect(screen.queryByTestId("one-switch")).toBeNull()
    // The promotion switch is independent and stays.
    expect(screen.getByTestId("one-promotion-switch")).toBeInTheDocument()
  })
})
