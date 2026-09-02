import { describe, expect, it } from "vitest"

import { fitToContent } from "../MeetingOneSwitch"

/** The frame's content box. It INCLUDES the chat's width — see the fn's docs. */
const area = { x: 240, y: 0, width: 1200, height: 800 }

describe("fitToContent", () => {
  it("leaves the chat its room on the right", () => {
    const rect = fitToContent(area, 360, "right")

    expect(rect.x).toBe(240 + 24)
    expect(rect.width).toBe(1200 - 360 - 48)
    // The right edge stops short of where the chat begins.
    expect(rect.x + rect.width).toBeLessThanOrEqual(240 + 1200 - 360)
  })

  it("leaves it its room on the left instead", () => {
    const rect = fitToContent(area, 360, "left")

    expect(rect.x).toBe(240 + 360 + 24)
    expect(rect.width).toBe(1200 - 360 - 48)
  })

  it("keeps a margin all the way round, so the page shows through", () => {
    const rect = fitToContent(area, 0, "right")

    expect(rect.x).toBe(area.x + 24)
    expect(rect.y).toBe(area.y + 24)
    expect(rect.width).toBe(area.width - 48)
    expect(rect.height).toBe(area.height - 48)
  })

  it("never returns a negative size in a box smaller than the padding", () => {
    const rect = fitToContent({ x: 0, y: 0, width: 20, height: 20 }, 0, "right")
    expect(rect.width).toBe(0)
    expect(rect.height).toBe(0)
  })

  it("does not fall off the bottom of the content area", () => {
    const rect = fitToContent(area, 360, "right")
    expect(rect.y + rect.height).toBeLessThanOrEqual(area.y + area.height)
  })
})
