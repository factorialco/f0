import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"
import React from "react"

import { PageHeader } from "../index"

// The real switch renders null unless the AI toggle context is enabled, so we
// stub it to a stable marker and assert only PageHeader's show/hide decision.
vi.mock("@/sds/ai/F0OneSwitch", () => ({
  F0OneSwitch: () => <div data-testid="one-switch" />,
}))

const defaultModule = {
  id: "time-tracking" as const,
  name: "Time Tracking",
  href: "/time-tracking",
}

describe("PageHeader one switch", () => {
  it("renders the One switch by default", () => {
    render(<PageHeader module={defaultModule} />)
    expect(screen.getByTestId("one-switch")).toBeInTheDocument()
  })

  it("hides the One switch when hideOneSwitch is true", () => {
    render(<PageHeader module={defaultModule} hideOneSwitch />)
    expect(screen.queryByTestId("one-switch")).toBeNull()
  })
})
