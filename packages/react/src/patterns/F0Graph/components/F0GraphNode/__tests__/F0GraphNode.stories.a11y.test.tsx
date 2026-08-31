import { composeStories } from "@storybook/react-vite"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import * as stories from "../__stories__/F0GraphNode.stories"

// F0GraphNode renders a bare `role="treeitem"`, which axe requires to be owned
// by a `tree`/`group` (aria-required-parent), and a `tree` requires a treeitem
// child (aria-required-children). These tests lock the story scaffolding that
// gives the isolated node a valid owner in both the direct-render case and the
// case where the node sits behind React Flow's `role="application"` wrapper.
const { Default, WithToolbar } = composeStories(stories)

describe("F0GraphNode stories — a11y tree scaffolding", () => {
  it("direct-render node is owned by the group wrapper", () => {
    const { container } = render(<Default />)
    const owned = container.querySelector("[role='group'] [role='treeitem']")
    expect(owned).toBeTruthy()
  })

  it("ReactFlow-embedded node (WithToolbar) is owned by a tree via aria-owns", () => {
    const { container } = render(<WithToolbar />)

    const tree = container.querySelector("[role='tree']")
    expect(tree).toBeTruthy()

    // The tree must own the rendered treeitem across the role="application"
    // boundary — every aria-owns id must resolve to a present treeitem.
    const owns = tree?.getAttribute("aria-owns")?.split(/\s+/).filter(Boolean)
    expect(owns && owns.length).toBeGreaterThan(0)
    for (const id of owns ?? []) {
      const el = container.querySelector(`#${CSS.escape(id)}`)
      expect(el, `aria-owns target #${id} should exist`).toBeTruthy()
      expect(el?.getAttribute("role")).toBe("treeitem")
    }
  })
})
