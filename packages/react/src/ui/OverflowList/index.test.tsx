import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { screen, zeroRender } from "@/testing/test-utils"

import { OverflowList } from "."

type RowItem = { preset: { label: string } }

const CONTAINER_WIDTH = 800
const ITEM_WIDTH = 50

/**
 * jsdom reports zero for all layout measurements, which keeps every item out
 * of the visible list. Give the container and items real widths so the
 * overflow calculation commits a non-empty split.
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

const renderSkeleton = (item: number) => <span>skeleton-{item}</span>
const renderRow = (item: RowItem) => <span>{item.preset.label}</span>

describe("OverflowList", () => {
  beforeEach(() => {
    mockLayout()
  })

  afterEach(() => {
    delete (HTMLElement.prototype as { clientWidth?: number }).clientWidth
    vi.restoreAllMocks()
  })

  it("renders the current items after a type-changing rerender (loading skeletons → content)", () => {
    const { rerender } = zeroRender(
      <OverflowList
        items={[0, 1, 2, 3]}
        renderListItem={renderSkeleton}
        renderDropdownItem={renderSkeleton}
      />
    )

    // The calculation effect has committed a split of the numeric items.
    // Swapping to object items at the same tree position must never render
    // the stale numbers through the new render callbacks (regression: crashed
    // with "Cannot read properties of undefined (reading 'itemsCount')" in
    // FiltersPresets when presets finished loading).
    const rows: RowItem[] = [
      { preset: { label: "First" } },
      { preset: { label: "Second" } },
    ]
    rerender(
      <OverflowList
        items={rows}
        renderListItem={renderRow}
        renderDropdownItem={renderRow}
      />
    )

    expect(screen.getAllByText("First").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Second").length).toBeGreaterThan(0)
    expect(screen.queryByText("skeleton-0")).not.toBeInTheDocument()
  })

  it("renders nothing when items becomes empty", () => {
    const rows: RowItem[] = [{ preset: { label: "First" } }]
    const { rerender } = zeroRender(
      <OverflowList
        items={rows}
        renderListItem={renderRow}
        renderDropdownItem={renderRow}
      />
    )
    expect(screen.getAllByText("First").length).toBeGreaterThan(0)

    rerender(
      <OverflowList
        items={[] as RowItem[]}
        renderListItem={renderRow}
        renderDropdownItem={renderRow}
      />
    )
    expect(screen.queryByText("First")).not.toBeInTheDocument()
  })
})
