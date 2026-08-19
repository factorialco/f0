import { describe, expect, it } from "vitest"

import {
  TABLE_CELL_BAND_PX,
  TABLE_CELL_LINE_PX,
  tableCellContentClassName,
  tableDisplayClassNames,
} from "./const"

/** Tailwind's spacing scale: `min-h-6` → 24px, `pt-0.5` → 2px. */
const spacingPx = (className: string, prefix: string): number | null => {
  const match = new RegExp(`(?:^| )${prefix}-(\\d+(?:\\.\\d+)?)(?: |$)`).exec(
    className
  )
  return match ? Number(match[1]) * 4 : null
}

/**
 * These guard the *relationships* between the alignment classes, which is what a
 * future change is liable to break silently: resizing the band without moving the
 * multiline offset with it, or re-adding a per-type padding nudge, both leave cells
 * on different vertical centers again while every existing test still passes.
 *
 * The rendered geometry is covered by the `CellsOfDifferentHeightsShareOneCenter`
 * story's play function — jsdom does not lay out, so it can't be asserted here.
 */
describe("table cell alignment constants", () => {
  it("spells the band out as the height the cell reserves", () => {
    expect(spacingPx(tableCellContentClassName, "min-h")).toBe(
      TABLE_CELL_BAND_PX
    )
  })

  it("centers content in the band", () => {
    // Without this, a value shorter than the band sits at the band's top edge and
    // the whole fix is inert.
    expect(tableCellContentClassName).toContain("items-center")
  })

  it("offsets wrapping values by half the band's slack", () => {
    // A wrapping value is taller than the band, so centering can't place its first
    // line: it is pinned to the top and nudged down by whatever centering would
    // have added. Resize the band and this offset has to move with it.
    expect(spacingPx(tableDisplayClassNames.multiline, "pt")).toBe(
      (TABLE_CELL_BAND_PX - TABLE_CELL_LINE_PX) / 2
    )
    expect(tableDisplayClassNames.multiline).toContain("self-start")
  })

  it.each(["text", "avatar", "avatarList"] as const)(
    "gives %s no padding of its own",
    (type) => {
      // Regression guard for #4887: a per-type `pt-*` makes that cell taller than
      // its siblings, which grows the row and leaves the shorter cells with uneven
      // gaps. The band supplies the offset without adding height, so single-line
      // types must stay flush.
      expect(tableDisplayClassNames[type]).not.toMatch(/\bp[trblxy]?-/)
    }
  )
})
