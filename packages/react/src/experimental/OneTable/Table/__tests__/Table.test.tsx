import { describe, expect, it } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { OneTable } from "../../index"

describe("OneTable.Skeleton", () => {
  it("wraps the placeholder table in the same scroll container as the loaded table", () => {
    // Regression test: with many columns the skeleton's intrinsic table
    // width can exceed its card, and without this wrapper it overflowed
    // the card uncontained instead of scrolling within it like TableBase.
    const { container } = zeroRender(<OneTable.Skeleton columns={12} />)

    const table = container.querySelector("table")
    expect(table).not.toBeNull()
    // `table` sits inside the Table primitive's own "relative w-full" div
    // (see `@/ui/table`), so the scroll container is its grandparent — the
    // same nesting depth TableBase uses for the loaded table.
    expect(table?.parentElement?.parentElement?.className).toContain(
      "overflow-auto"
    )
  })
})
