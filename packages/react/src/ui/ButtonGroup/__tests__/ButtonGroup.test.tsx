import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { ButtonGroup } from "../ButtonGroup"

// The width-driven overflow (useOverflowCalculation) can't be exercised in
// jsdom — every element measures 0, so nothing ever sheds into the "⋯" menu.
// These tests instead cover the `canOverflow` prop, which is pure render logic:
// when false the group renders every secondary inline and skips the hidden
// width-measurement copy entirely. The accessible name of the row's overflow
// trigger is "Toggle dropdown menu" (the Dropdown's default).
const secondaries = [
  { id: "one", label: "One", onClick: vi.fn() },
  { id: "two", label: "Two", onClick: vi.fn() },
  { id: "three", label: "Three", onClick: vi.fn() },
]

describe("ButtonGroup — canOverflow", () => {
  it("keeps every secondary inline and skips the measurement copy when canOverflow is false", () => {
    const { container } = render(
      <ButtonGroup secondaryActions={secondaries} canOverflow={false} />
    )

    expect(screen.getByRole("button", { name: "One" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Two" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Three" })).toBeInTheDocument()

    // No secondary sheds, so the overflow "⋯" trigger is never rendered.
    expect(
      screen.queryByRole("button", { name: "Toggle dropdown menu" })
    ).not.toBeInTheDocument()

    // The hidden measurement copy is skipped: only the 3 real buttons exist.
    expect(container.querySelectorAll("button")).toHaveLength(3)
  })

  it("allows secondaries to shed into the ⋯ menu by default (canOverflow true)", () => {
    // Contrast with the case above: by default the group can overflow, so it
    // renders the "⋯" trigger (in jsdom, where widths measure 0, the secondaries
    // shed into it). With canOverflow={false} that trigger never appears.
    render(<ButtonGroup secondaryActions={secondaries} />)

    expect(
      screen.getByRole("button", { name: "Toggle dropdown menu" })
    ).toBeInTheDocument()
  })

  it("still surfaces otherActions in the ⋯ menu when canOverflow is false", () => {
    render(
      <ButtonGroup
        secondaryActions={secondaries}
        otherActions={[{ label: "Archive", onClick: vi.fn() }]}
        canOverflow={false}
      />
    )

    // Secondaries stay inline …
    expect(screen.getByRole("button", { name: "One" })).toBeInTheDocument()
    // … and otherActions still populate the overflow menu.
    expect(
      screen.getByRole("button", { name: "Toggle dropdown menu" })
    ).toBeInTheDocument()
  })
})
