import { describe, expect, it } from "vitest"

import { F0FilterPicker } from "@/patterns/F0FilterPicker/F0FilterPicker"

describe("deprecated OneFilterPicker re-export", () => {
  it("aliases the same component as F0FilterPicker", async () => {
    // Dynamic import: this suite exists specifically to verify the deprecated
    // re-export barrel itself, which the repo's no-restricted-imports rule
    // otherwise (rightly) forbids importing statically.
    const barrel = await import("../exports")

    // The rename to F0FilterPicker would otherwise drop this name from the
    // public entry point, breaking every consumer on the next version bump.
    expect(barrel.OneFilterPicker).toBe(F0FilterPicker)
  })
})
