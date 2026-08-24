import { describe, expect, it } from "vitest"

import {
  COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM,
  STACKED_GROUP_PADDING,
} from "../constants"
import {
  COLLAPSER_HOVER_HEIGHT,
  EXPANDER_Y_OFFSET_STACKED_BY_ZOOM,
  STACKED_RANK_SEP,
  collapserHoverHeightStacked,
} from "../internal/ReactFlowAdapters"

/**
 * The collapser's hover band is `pointer-events-auto` and sits above the nodes,
 * so any part of it reaching past the lane swallows clicks on whatever is under
 * it. Over a stacked column the lane is halved, so the default band would cover
 * the top of the first row and make it unclickable.
 *
 * The collapser is hidden at dot zoom, so only the two visible levels matter.
 */
const VISIBLE_ZOOMS = ["detail", "compact"] as const

describe("collapser hover area over a stacked column", () => {
  it.each(VISIBLE_ZOOMS)("stays inside the shortened lane (%s)", (zoom) => {
    const bandTop =
      EXPANDER_Y_OFFSET_STACKED_BY_ZOOM[zoom] +
      COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM[zoom]

    expect(bandTop + collapserHoverHeightStacked(zoom)).toBeLessThanOrEqual(
      STACKED_RANK_SEP
    )
  })

  it.each(VISIBLE_ZOOMS)("is shorter than the full-lane band (%s)", (zoom) => {
    expect(collapserHoverHeightStacked(zoom)).toBeLessThan(
      COLLAPSER_HOVER_HEIGHT
    )
  })

  it.each(VISIBLE_ZOOMS)(
    "still leaves a band tall enough to hover (%s)",
    (zoom) => {
      // Clamping must not collapse the band to nothing, or the affordance
      // becomes unreachable by pointer.
      expect(collapserHoverHeightStacked(zoom)).toBeGreaterThan(
        EXPANDER_Y_OFFSET_STACKED_BY_ZOOM[zoom]
      )
    }
  )

  it.each(VISIBLE_ZOOMS)(
    "overlaps the column's own hover zone, so there is no dead stripe (%s)",
    (zoom) => {
      // Two mechanisms reveal the affordance: this band's CSS hover, and the
      // geometric zone that starts at the group's top edge. They have to meet,
      // or a retune of the clamp would open a stripe where hovering reveals
      // nothing and the button blinks as the pointer crosses it.
      const bandBottom =
        EXPANDER_Y_OFFSET_STACKED_BY_ZOOM[zoom] +
        COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM[zoom] +
        collapserHoverHeightStacked(zoom)
      const zoneTop = STACKED_RANK_SEP - STACKED_GROUP_PADDING

      expect(bandBottom).toBeGreaterThanOrEqual(zoneTop)
    }
  )

  it("leaves the full-lane band untouched", () => {
    // A normal rank lane has room for the whole 80px band; only the stacked
    // lane needed clamping.
    expect(COLLAPSER_HOVER_HEIGHT).toBe(80)
  })
})
