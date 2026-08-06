import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { ApplicationFrame } from ".."

// Regression: with the sidebar locked (docked open), its stacking wrapper must
// sit ABOVE the main content. A sticky first table column pins its left border
// to the content's left edge at the sidebar seam; if the sidebar stacks below
// the content, that border paints over the sidebar during horizontal scroll.
// The bug was the locked wrapper at `z-0`, below the content's `z-10`. FCT-60739.
describe("ApplicationFrame sidebar stacking (locked)", () => {
  it("stacks the locked sidebar above the main content", () => {
    render(
      <ApplicationFrame sidebar={<div>SIDEBAR</div>}>
        <div>PAGE CONTENT</div>
      </ApplicationFrame>
    )

    // The locked sidebar's wrapper is z-20 (above the content), never the old z-0.
    expect(screen.getByText("SIDEBAR").closest(".z-20")).not.toBeNull()
    expect(screen.getByText("SIDEBAR").closest(".z-0")).toBeNull()

    // The main content stays at z-10, so z-20 > z-10 keeps the sidebar on top.
    const main = screen.getByText("PAGE CONTENT").closest("main")
    expect(main).not.toBeNull()
    expect(main).toHaveClass("z-10")
  })
})
