import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { HorizontalBar } from "./HorizontalBar"

/**
 * The tooltip, STUBBED — its real content sits behind Radix's open timer and a
 * portal, which neither jsdom nor the in-app browser will open. The WIRING is
 * covered in `index.spec.tsx` (the segment is a labelled image); what is worth
 * pinning here is what the tooltip is handed.
 */
vi.mock("@/experimental/Overlays/Tooltip", () => ({
  TooltipInternal: ({
    label,
    children,
  }: {
    label?: string
    children: React.ReactNode
  }) => (
    <div data-testid="segment-tooltip" data-label={label}>
      {children}
    </div>
  ),
}))

const at = (time: string) => new Date(`2024-03-20T${time}:00`)

describe("HorizontalBar", () => {
  it("tooltips every stretch of the day with its time range, label or no label", () => {
    render(
      <HorizontalBar
        segments={[
          { value: 0.5, color: "green", from: at("09:02"), to: at("12:00") },
          {
            value: 0.2,
            color: "orange",
            from: at("12:00"),
            to: at("12:34"),
            label: "Lunch break",
          },
          // The neutral remainder: the rest of the day, not a stretch of it.
          { value: 0.3, color: "grey" },
        ]}
      />
    )

    const tooltips = screen.getAllByTestId("segment-tooltip")
    expect(tooltips.map((t) => t.getAttribute("data-label"))).toEqual([
      // The range alone is the minimum, and needs nothing from the consumer…
      "09:02 – 12:00",
      // …with `label` appended after a bullet.
      "12:00 – 12:34 • Lunch break",
    ])
  })

  it("wraps nothing when there is no day yet, and hides the empty rail", () => {
    const { container } = render(
      <HorizontalBar segments={[{ value: 1, color: "grey" }]} />
    )

    expect(screen.queryByTestId("segment-tooltip")).not.toBeInTheDocument()
    // Nothing to announce: the totals are already text in the rows around it.
    expect(container.firstElementChild).toHaveAttribute("aria-hidden")
  })
})
