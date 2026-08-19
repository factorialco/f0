import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { screen, zeroRender } from "@/testing/test-utils"

import { F0TagList } from "./F0TagList"

const CONTAINER_WIDTH = 800
const ITEM_WIDTH = 50

/**
 * jsdom reports zero for every layout measurement, which keeps all items out of
 * the visible list. Give the container and items real widths so the overflow
 * calculation commits a non-empty split.
 */
function mockLayout() {
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    get() {
      return CONTAINER_WIDTH
    },
  })
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
    width: ITEM_WIDTH,
    height: 32,
    top: 0,
    left: 0,
    bottom: 32,
    right: ITEM_WIDTH,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  } as DOMRect)
}

const dotTags = [
  { text: "Strategic Workforce Planning", color: "viridian" as const },
  { text: "Change Management", color: "lilac" as const },
]

describe("F0TagList", () => {
  beforeEach(() => {
    mockLayout()
  })

  afterEach(() => {
    delete (HTMLElement.prototype as { clientWidth?: number }).clientWidth
    vi.restoreAllMocks()
  })

  it("opts its visible tags into fluid shrinking so an over-wide tag truncates instead of overflowing the +N", () => {
    zeroRender(<F0TagList type="dot" tags={dotTags} />)

    // `fluidItems` is forwarded to OverflowList: its visible container lets each
    // tag shrink below its intrinsic width (`[&>*]:min-w-0`) so the tag's own
    // OneEllipsis truncates it rather than painting over the "+N" counter.
    expect(
      screen.getByTestId("overflow-visible-container").className
    ).toContain("[&>*]:min-w-0")
  })

  it("lets its flex row shrink below content width (min-w-0 flex-1) so an auto-layout table cell ellipsizes instead of expanding", () => {
    const { container } = zeroRender(<F0TagList type="dot" tags={dotTags} />)

    // `flex-1` alone leaves `min-width: auto`, pinning the row to its widest tag
    // and expanding the column; `min-w-0` is what actually lets it shrink.
    const row = container.querySelector(".flex-1")
    expect(row).not.toBeNull()
    expect(row?.className).toContain("min-w-0")
  })
})
