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

  // WCAG 2.2 SC 2.5.8 (Target Size, Minimum) requires an interactive target to
  // be at least 24x24 CSS px unless it has 24px of clear space around it. The
  // switch button used to be 20px tall (`h-5`), so it only conformed when the
  // consumer's layout happened to isolate it — putting any other target within
  // 24px (as a form row or a card footer does) turned it into a real AA
  // failure that axe reports as `target-size`.
  //
  // Asserted on classes rather than measured: jsdom has no layout, so
  // `getBoundingClientRect()` returns zeroes. The story-level axe test in
  // `index.stories.tsx` (`AdjacentTargets`) is what checks the real geometry.
  it("sizes the interactive box to the 24px WCAG target-size floor", () => {
    render(<Switch title="Notifications" />)
    const sw = screen.getByRole("switch")
    expect(sw.className).toMatch(/\bh-6\b/)
    expect(sw.className).not.toMatch(/\bh-5\b/)
  })

  it("keeps the visible pill at 20px so the design is unchanged", () => {
    render(<Switch title="Notifications" />)
    const track = screen.getByRole("switch").querySelector("[aria-hidden]")
    expect(track).not.toBeNull()
    expect(track?.className).toMatch(/\bh-5\b/)
  })
})
