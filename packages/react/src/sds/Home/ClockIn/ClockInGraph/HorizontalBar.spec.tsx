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

describe("HorizontalBar", () => {
  it("hands each labelled segment's own label to its tooltip", () => {
    render(
      <HorizontalBar
        segments={[
          { value: 0.5, color: "green", label: "Morning · Design system" },
          { value: 0.2, color: "orange", label: "Lunch break" },
          { value: 0.3, color: "grey" },
        ]}
      />
    )

    const tooltips = screen.getAllByTestId("segment-tooltip")
    // Only the two labelled segments are wrapped; the remainder is just a bar.
    expect(tooltips.map((t) => t.getAttribute("data-label"))).toEqual([
      "Morning · Design system",
      "Lunch break",
    ])
  })

  it("wraps nothing when no segment carries a label", () => {
    render(
      <HorizontalBar
        segments={[
          { value: 0.5, color: "green" },
          { value: 0.5, color: "grey" },
        ]}
      />
    )

    expect(screen.queryByTestId("segment-tooltip")).not.toBeInTheDocument()
  })
})
