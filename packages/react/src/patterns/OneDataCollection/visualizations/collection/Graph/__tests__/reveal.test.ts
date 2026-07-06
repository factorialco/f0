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

  it("does NOT auto-focus on entry by default (adopts the search value as handled)", () => {
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

  it("auto-focuses `focusOnEntry` once on entry, keeping search tracking intact", () => {
    const d = resolveGraphReveal({
      isInitialLoading: false,
      initialConsumed: false,
      focusOnEntry: "me",
      revealNodeId: undefined,
      lastRevealed: undefined,
    })
    expect(d.revealId).toBe("me")
    expect(d.consumeInitial).toBe(true)
    // lastRevealed stays on the (empty) search value so a later search pick fires.
    expect(d.lastRevealed).toBeUndefined()
  })

  it("still reveals a later search selection after an entry auto-focus", () => {
    // Entry consumed already; a fresh search selection differs from lastRevealed.
    const d = resolveGraphReveal({
      isInitialLoading: false,
      initialConsumed: true,
      focusOnEntry: "me",
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

  it("ignores focusOnEntry after the initial render (entry-only)", () => {
    // focusOnEntry changing later must not re-trigger a reveal.
    const d = resolveGraphReveal({
      isInitialLoading: false,
      initialConsumed: true,
      focusOnEntry: "me",
      revealNodeId: undefined,
      lastRevealed: "search-1",
    })
    expect(d.revealId).toBeNull()
  })
})
