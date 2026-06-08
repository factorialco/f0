import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { Switch } from "../index"

describe("Switch (experimental)", () => {
  it("renders a switch role and is enabled by default", () => {
    render(<Switch title="Notifications" />)
    const sw = screen.getByRole("switch")
    expect(sw).toBeEnabled()
    expect(sw.className).not.toMatch(/!cursor-not-allowed/)
    expect(sw.className).not.toMatch(/opacity-50/)
  })

  it("applies !cursor-not-allowed and opacity-50 when disabled", () => {
    // The `!` important variant is required to defend against consumer CSS
    // resets (e.g. ress.css `[disabled]{cursor:default}`) that otherwise win
    // due to identical specificity.
    render(<Switch title="Notifications" disabled />)
    const sw = screen.getByRole("switch")
    expect(sw).toBeDisabled()
    expect(sw.className).toMatch(/!cursor-not-allowed/)
    expect(sw.className).toMatch(/opacity-50/)
  })

  it("propagates disabled cursor styles to the label", () => {
    render(<Switch title="Notifications" disabled />)
    const label = screen.getByText("Notifications")
    expect(label.className).toMatch(/!cursor-not-allowed/)
    expect(label.className).toMatch(/opacity-50/)
  })
})
