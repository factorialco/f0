import { describe, expect, it, vi } from "vitest"

import { fireEvent, screen, zeroRender } from "@/testing/test-utils"

import { F0GraphStackedNode } from "../F0GraphStackedNode"

describe("F0GraphStackedNode", () => {
  it("renders the title as a tree item with its ARIA position", () => {
    zeroRender(
      <F0GraphStackedNode title="Senior" level={3} setSize={4} posInSet={2} />
    )

    const row = screen.getByRole("treeitem", { name: "Senior" })
    expect(row).toHaveAttribute("aria-level", "3")
    expect(row).toHaveAttribute("aria-setsize", "4")
    expect(row).toHaveAttribute("aria-posinset", "2")
    // A stacked group is only formed from leaves, so there is nothing to expand.
    expect(row).not.toHaveAttribute("aria-expanded")
  })

  it("fills exactly the height the layout reserved", () => {
    zeroRender(<F0GraphStackedNode title="Mid" height={56} />)

    expect(screen.getByRole("treeitem")).toHaveStyle({ height: "56px" })
  })

  it("selects on click and on Enter", () => {
    const onClick = vi.fn()
    zeroRender(<F0GraphStackedNode title="Junior" onClick={onClick} />)

    const row = screen.getByRole("treeitem")
    fireEvent.click(row)
    fireEvent.keyDown(row, { key: "Enter" })

    expect(onClick).toHaveBeenCalledTimes(2)
  })

  it("keeps a click on the trailing slot from selecting the row", () => {
    const onClick = vi.fn()
    const onTrailingClick = vi.fn()
    zeroRender(
      <F0GraphStackedNode
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
      <F0GraphStackedNode title="Junior" trailing={<span>x</span>} />
    )

    expect(container.querySelector("[data-no-node-select]")).not.toBeNull()
  })

  it("shows a placeholder instead of the title while loading", () => {
    zeroRender(<F0GraphStackedNode title="Senior" loading />)

    expect(screen.queryByText("Senior")).not.toBeInTheDocument()
  })

  it("reports selection through aria-selected", () => {
    zeroRender(<F0GraphStackedNode title="Senior" state="selected" />)

    expect(screen.getByRole("treeitem")).toHaveAttribute(
      "aria-selected",
      "true"
    )
  })
})
