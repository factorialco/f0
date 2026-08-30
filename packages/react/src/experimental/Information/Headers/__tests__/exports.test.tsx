import { describe, expect, it } from "vitest"

import { F0ResourceHeader } from "@/patterns/F0ResourceHeader"
import { zeroRender as render, screen } from "@/testing/test-utils"

describe("deprecated ResourceHeader re-export", () => {
  it("aliases the same component as F0ResourceHeader and still renders", async () => {
    // Dynamic import: this suite exists specifically to verify the deprecated
    // re-export barrel itself, which the repo's no-restricted-imports rule
    // otherwise (rightly) forbids importing statically.
    const barrel = await import("../exports")

    expect(barrel.ResourceHeader).toBe(F0ResourceHeader)

    const { ResourceHeader } = barrel
    render(<ResourceHeader title="Reports" />)
    expect(screen.getByText("Reports")).toBeInTheDocument()
  })
})
