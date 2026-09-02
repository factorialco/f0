import { describe, expect, it } from "vitest"

import { type F0MeetingAction } from "../types"
import { collapseActions } from "../components/controls/collapse-actions"

const action = (
  id: string,
  overrides: Partial<F0MeetingAction> = {}
): F0MeetingAction => ({
  id,
  label: id,
  icon: (() => null) as unknown as F0MeetingAction["icon"],
  onClick: () => {},
  ...overrides,
})

describe("collapseActions", () => {
  it("keeps the overflow empty when everything fits", () => {
    // It used to reserve the "more" slot unconditionally, which could be the
    // very thing that pushed an action out — a button whose only job was to
    // hold what its own reservation displaced.
    const actions = [action("a"), action("b"), action("c")]
    const { visible, overflow } = collapseActions(actions, 1000, "fullscreen")

    expect(visible).toHaveLength(3)
    expect(overflow).toHaveLength(0)
  })

  it("does not reserve room for a button it is not going to draw", () => {
    // Three 40px actions + two 8px gaps = 136. A bar of exactly that width
    // fits them, and only does so because the overflow slot is not deducted.
    const actions = [action("a"), action("b"), action("c")]
    expect(collapseActions(actions, 136, "fullscreen").overflow).toHaveLength(0)
  })

  it("collapses once the bar genuinely runs out of room", () => {
    const actions = Array.from({ length: 10 }, (_, index) =>
      action(`a${index}`, { priority: 10 - index })
    )
    const { visible, overflow } = collapseActions(actions, 200, "fullscreen")

    expect(overflow.length).toBeGreaterThan(0)
    expect(visible.length + overflow.length).toBe(actions.length)
  })

  it("keeps pinned actions in the bar and pushes the rest out", () => {
    const actions = [
      action("core:microphone", { pinned: true }),
      action("core:leave", { pinned: true, variant: "critical" }),
      action("extra-1", { priority: 5 }),
      action("extra-2", { priority: 4 }),
      action("extra-3", { priority: 3 }),
    ]
    const { visible, overflow } = collapseActions(actions, 180, "fullscreen")

    expect(visible.map((entry) => entry.id)).toContain("core:leave")
    expect(overflow.length).toBeGreaterThan(0)
  })

  it("renders in the original order, never in rank order", () => {
    const actions = [
      action("first", { priority: 1 }),
      action("second", { priority: 99, pinned: true }),
      action("third", { priority: 50 }),
    ]
    const { visible } = collapseActions(actions, 1000, "fullscreen")
    expect(visible.map((entry) => entry.id)).toEqual([
      "first",
      "second",
      "third",
    ])
  })

  it("gives a minimized pill no overflow at all", () => {
    const actions = [action("a", { pinned: true }), action("b")]
    const { visible, overflow } = collapseActions(actions, 200, "minimized")
    expect(visible.map((entry) => entry.id)).toEqual(["a"])
    expect(overflow).toHaveLength(0)
  })
})
