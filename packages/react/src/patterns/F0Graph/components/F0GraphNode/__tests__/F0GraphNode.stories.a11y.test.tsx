import { composeStories } from "@storybook/react-vite"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import * as stories from "../__stories__/F0GraphNode.stories"

// F0GraphNode renders a bare `role="treeitem"`. The story file opts into
// `a11y: { test: "error" }`, so the scaffolding that gives each isolated node a
// valid ARIA owner is load-bearing: when it is wrong, Storybook CI goes red, not
// the unit suite. These tests mirror the two axe rules that have actually broken
// this file so the mistake is caught here first.
const composed = composeStories(stories)
const storyNames = Object.keys(composed) as (keyof typeof composed)[]

/**
 * A deliberately narrow port of axe-core 4.11.1 `getMissingContext`, the walk
 * behind `aria-required-parent`. Starting at a `treeitem` it climbs the DOM and:
 *
 * - accepts the first `role="tree"` ancestor;
 * - passes through roleless elements *and* through `group` — a `group` is not an
 *   owner on its own, axe drops `group` from the roles it will still accept and
 *   keeps climbing, which is why a `role="group"` wrapper failed six stories;
 * - fails on any other role, React Flow's hardcoded `role="application"` root
 *   being the one that occurs here.
 *
 * It does not model `aria-owns`; a story that needs it should assert it directly.
 * The authority is still a real axe run (`pnpm test-storybook`) — this is the
 * cheap gate in front of it.
 */
function treeOwnerOf(element: Element): Element | null {
  let parent = element.parentElement
  while (parent) {
    const role = parent.getAttribute("role")
    if (role === "tree") return parent
    if (role && !["group", "presentation", "none"].includes(role)) return null
    parent = parent.parentElement
  }
  return null
}

describe("F0GraphNode stories — a11y tree scaffolding", () => {
  it.each(storyNames)(
    "%s renders treeitems that all have a role=tree owner",
    (name) => {
      const Story = composed[name]
      const { container } = render(<Story />)

      const treeitems = [...container.querySelectorAll("[role='treeitem']")]
      expect(treeitems.length).toBeGreaterThan(0)

      for (const treeitem of treeitems) {
        expect(
          treeOwnerOf(treeitem),
          `${name}: a treeitem has no role="tree" owner (aria-required-parent)`
        ).toBeTruthy()
      }
    }
  )

  it.each(storyNames)("%s renders no tree with an invalid child", (name) => {
    const Story = composed[name]
    const { container } = render(<Story />)

    // `aria-required-children` lets a tree own only `treeitem`/`group`. Two
    // shapes have broken it here: a nested `tree`, and React Flow's root div,
    // which hardcodes `role="application"` after its props spread and so cannot
    // be overridden from the outside.
    for (const tree of container.querySelectorAll("[role='tree']")) {
      expect(
        tree.querySelector("[role='application']"),
        `${name}: a role="tree" contains React Flow's role="application" root`
      ).toBeNull()
      expect(
        tree.querySelector("[role='tree']"),
        `${name}: a role="tree" contains another role="tree"`
      ).toBeNull()
    }
  })

  it("wraps the ReactFlow-embedded node (WithToolbar) in a tree inside the node type", () => {
    const { container } = render(<composed.WithToolbar />)

    const application = container.querySelector("[role='application']")
    expect(
      application,
      "React Flow should render its application root"
    ).toBeTruthy()

    // The tree must sit *below* React Flow's application root, not above it.
    const tree = container.querySelector("[role='tree']")
    expect(tree).toBeTruthy()
    expect(application?.contains(tree!)).toBe(true)
    expect(tree?.querySelector("[role='treeitem']")).toBeTruthy()
  })
})
