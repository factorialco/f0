import { describe, expect, it, vi } from "vitest"

import { fireEvent, screen, zeroRender } from "@/testing/test-utils"

import { F0GraphNode } from "../F0GraphNode"

import { STACKED_NODE_HEIGHT } from "../../../constants"

describe("F0GraphNode (stacked)", () => {
  it("renders the title as a tree item with its ARIA position", () => {
    zeroRender(
      <F0GraphNode stacked title="Senior" level={3} setSize={4} posInSet={2} />
    )

    const row = screen.getByRole("treeitem", { name: "Senior" })
    expect(row).toHaveAttribute("aria-level", "3")
    expect(row).toHaveAttribute("aria-setsize", "4")
    expect(row).toHaveAttribute("aria-posinset", "2")
    // A stacked group is only formed from leaves, so there is nothing to expand.
    expect(row).not.toHaveAttribute("aria-expanded")
  })

  it("fills exactly the height the layout reserved", () => {
    zeroRender(<F0GraphNode stacked title="Mid" stackedHeight={56} />)

    expect(screen.getByRole("treeitem")).toHaveStyle({ height: "56px" })
  })

  it("defaults to the band width the layout reserves", () => {
    zeroRender(<F0GraphNode stacked title="Mid" />)

    expect(screen.getByRole("treeitem")).toHaveStyle({
      height: `${STACKED_NODE_HEIGHT}px`,
    })
  })

  it("selects on click and on Enter", () => {
    const onClick = vi.fn()
    zeroRender(<F0GraphNode stacked title="Junior" onClick={onClick} />)

    const row = screen.getByRole("treeitem")
    fireEvent.click(row)
    fireEvent.keyDown(row, { key: "Enter" })

    expect(onClick).toHaveBeenCalledTimes(2)
  })

  it("keeps a click on the trailing slot from selecting the row", () => {
    const onClick = vi.fn()
    const onTrailingClick = vi.fn()
    zeroRender(
      <F0GraphNode
        stacked
        title="Junior"
        onClick={onClick}
        trailing={<button onClick={onTrailingClick}>pick</button>}
      />
    )

    fireEvent.click(screen.getByRole("button", { name: "pick" }))

    expect(onTrailingClick).toHaveBeenCalledTimes(1)
    expect(onClick).not.toHaveBeenCalled()
  })

  it("marks the trailing slot so the canvas pointer handler skips it too", () => {
    // The canvas selects on `pointerup` regardless of React click handlers; it
    // opts out via this attribute, so stopPropagation alone is not enough.
    const { container } = zeroRender(
      <F0GraphNode stacked title="Junior" trailing={<span>x</span>} />
    )

    expect(container.querySelector("[data-no-node-select]")).not.toBeNull()
  })

  it("shows a placeholder instead of the title while loading", () => {
    zeroRender(<F0GraphNode stacked title="Senior" loading />)

    expect(screen.queryByText("Senior")).not.toBeInTheDocument()
  })

  it("reports selection through aria-selected", () => {
    zeroRender(<F0GraphNode stacked title="Senior" state="selected" />)

    expect(screen.getByRole("treeitem")).toHaveAttribute(
      "aria-selected",
      "true"
    )
  })

  // ── Zoom ──
  // The reserved band is fixed, so a row answers to zoom through its contents:
  // the title steps up to the card's compact type scale, then leaves entirely.

  it("steps the title up to the card's compact type scale", () => {
    zeroRender(<F0GraphNode stacked title="Senior" variant="compact" />)

    expect(screen.getByText("Senior")).toHaveStyle({
      fontSize: "24px",
      lineHeight: "32px",
    })
  })

  it("keeps the detail type scale at detail zoom", () => {
    zeroRender(<F0GraphNode stacked title="Senior" variant="detail" />)

    expect(screen.getByText("Senior")).toHaveStyle({
      fontSize: "14px",
      lineHeight: "20px",
    })
  })

  it("drops the title at dot zoom, leaving an avatar-only strip", () => {
    zeroRender(
      <F0GraphNode
        stacked
        title="Senior"
        variant="dot"
        avatar={{ type: "team", name: "Senior" }}
      />
    )

    expect(screen.queryByText("Senior")).not.toBeInTheDocument()
    expect(screen.getByRole("treeitem")).toBeInTheDocument()
  })

  it("drops the trailing slot at dot zoom, where no text remains beside it", () => {
    zeroRender(
      <F0GraphNode
        stacked
        title="Senior"
        variant="dot"
        trailing={<button>pick</button>}
      />
    )

    expect(
      screen.queryByRole("button", { name: "pick" })
    ).not.toBeInTheDocument()
  })

  it("keeps the band height across every zoom level", () => {
    for (const variant of ["detail", "compact", "dot"] as const) {
      const { unmount } = zeroRender(
        <F0GraphNode stacked title="Senior" variant={variant} />
      )
      expect(screen.getByRole("treeitem")).toHaveStyle({
        height: `${STACKED_NODE_HEIGHT}px`,
      })
      unmount()
    }
  })

  // ── Card-only props ──

  it("ignores the card-only props that have nowhere to go in a strip", () => {
    zeroRender(
      <F0GraphNode
        stacked
        title="Senior"
        subtitle="Level 3"
        tags={[{ type: "raw", label: "Ops" }]}
        actions={<button>act</button>}
      />
    )

    expect(screen.queryByText("Level 3")).not.toBeInTheDocument()
    expect(screen.queryByText("Ops")).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "act" })
    ).not.toBeInTheDocument()
  })

  it("still renders the card shape when not stacked", () => {
    zeroRender(<F0GraphNode title="Senior" subtitle="Level 3" />)

    expect(screen.getByText("Level 3")).toBeInTheDocument()
  })
})
