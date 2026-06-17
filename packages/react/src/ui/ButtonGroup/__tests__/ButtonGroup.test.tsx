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

    // The hidden width-measurement copy is skipped entirely: no aria-hidden
    // duplicate buttons, just the 3 real ones.
    expect(container.querySelector('[aria-hidden="true"] button')).toBeNull()
    expect(container.querySelectorAll("button")).toHaveLength(3)
  })

  it("renders the hidden width-measurement copy by default (canOverflow true)", () => {
    // The direct counterpart of the code change (`{canOverflow && <copy>}`): by
    // default the group keeps the hidden aria-hidden duplicate it measures to
    // decide what sheds. Deterministic — it doesn't depend on any width being
    // measured, unlike asserting that something actually shed into the menu.
    const { container } = render(<ButtonGroup secondaryActions={secondaries} />)

    expect(
      container.querySelector('[aria-hidden="true"] button')
    ).not.toBeNull()
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
