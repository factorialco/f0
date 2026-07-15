import { describe, expect, it } from "vitest"

import { resolveGraphReveal } from "../reveal"

describe("resolveGraphReveal", () => {
  it("does nothing while the tree is still loading", () => {
    expect(
      resolveGraphReveal({
        isInitialLoading: true,
        initialConsumed: false,
        revealNodeId: "n1",
        lastRevealed: undefined,
      })
    ).toEqual({
      revealId: null,
      consumeInitial: false,
      lastRevealed: undefined,
    })
  })

  it("never reveals on entry (adopts the search value as handled)", () => {
    // Entry focus is handled by initialFocusNodeId, not by a reveal/pan here.
    const d = resolveGraphReveal({
      isInitialLoading: false,
      initialConsumed: false,
      revealNodeId: "search-1",
      lastRevealed: undefined,
    })
    expect(d.revealId).toBeNull()
    expect(d.consumeInitial).toBe(true)
    expect(d.lastRevealed).toBe("search-1") // tracks the search value, not revealed
  })

  it("reveals a later search selection after entry", () => {
    const d = resolveGraphReveal({
      isInitialLoading: false,
      initialConsumed: true,
      revealNodeId: "search-2",
      lastRevealed: undefined,
    })
    expect(d.revealId).toBe("search-2")
    expect(d.lastRevealed).toBe("search-2")
  })

  it("does not re-reveal the same search selection", () => {
    const d = resolveGraphReveal({
      isInitialLoading: false,
      initialConsumed: true,
      revealNodeId: "search-2",
      lastRevealed: "search-2",
    })
    expect(d.revealId).toBeNull()
    expect(d.lastRevealed).toBe("search-2")
  })
})
