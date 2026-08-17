import { describe, expect, it } from "vitest"

import { panelRect, panelWidthFor, viewportRect } from "../window/panel"
import {
  PANEL_GAP,
  PANEL_MAX_WIDTH,
  PANEL_MIN_WIDTH,
} from "../window/window-constants"

describe("panelWidthFor", () => {
  it("clamps to the panel's usable range", () => {
    const area = { width: 1440, height: 900 }
    expect(panelWidthFor(area, 10)).toBe(PANEL_MIN_WIDTH)
    expect(panelWidthFor(area, 5000)).toBe(PANEL_MAX_WIDTH)
  })

  it("never takes more than half the area", () => {
    // A panel wider than the content beside it has stopped being a panel.
    expect(panelWidthFor({ width: 900, height: 700 }, 700)).toBe(450)
  })

  it("keeps the minimum even in a narrow area", () => {
    expect(panelWidthFor({ width: 400, height: 700 }, 360)).toBe(
      PANEL_MIN_WIDTH
    )
  })
})

describe("panelRect", () => {
  it("insets a card inside its slot, seam on every side", () => {
    // The card reads as a card, like the chat's panel — not as a wall glued to
    // the navigation.
    expect(panelRect({ x: 0, y: 0, width: 1440, height: 900 }, 360)).toEqual({
      x: PANEL_GAP,
      y: PANEL_GAP,
      width: 360 - PANEL_GAP * 2,
      height: 900 - PANEL_GAP * 2,
    })
  })

  it("sits inside the frame's content area, not over the navigation", () => {
    // The sidebar owns the first 240px and a banner the first 48: the panel
    // belongs between them and the content, exactly where the chat panel goes.
    expect(panelRect({ x: 240, y: 48, width: 1200, height: 852 }, 360)).toEqual(
      {
        x: 240 + PANEL_GAP,
        y: 48 + PANEL_GAP,
        width: 360 - PANEL_GAP * 2,
        height: 852 - PANEL_GAP * 2,
      }
    )
  })

  it("leaves the reserved slot's width free to the right of the card", () => {
    const area = { x: 240, y: 0, width: 1200, height: 900 }
    const rect = panelRect(area, 360)
    // The content starts at area.x + slot, so the seam on the inner edge comes
    // from the card being inset — not from the content having to provide one.
    expect(rect.x + rect.width).toBe(area.x + 360 - PANEL_GAP)
  })

  it("sizes itself against the content area, not the whole window", () => {
    // Half of 560, not half of the viewport that area sits in.
    expect(
      panelRect({ x: 240, y: 0, width: 560, height: 900 }, 700).width
    ).toBe(300 - PANEL_GAP * 2)
  })

  it("grows the card exactly as much as the slot", () => {
    // The handle drags the card and stores the delta against the slot; if the
    // two disagreed, every resize would drift by a gap.
    const area = { x: 0, y: 0, width: 1440, height: 900 }
    const before = panelRect(area, 400).width
    expect(panelRect(area, 440).width).toBe(before + 40)
  })
})

describe("viewportRect", () => {
  it("stands in for hosts that publish no content area", () => {
    expect(viewportRect({ width: 1440, height: 900 })).toEqual({
      x: 0,
      y: 0,
      width: 1440,
      height: 900,
    })
  })
})
