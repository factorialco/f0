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
      lastNonce: undefined,
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

  it("does not re-reveal the same search selection on a plain re-render", () => {
    // Same id, same nonce → nothing changed, so no reveal.
    const d = resolveGraphReveal({
      isInitialLoading: false,
      initialConsumed: true,
      revealNodeId: "search-2",
      lastRevealed: "search-2",
      revealNonce: 3,
      lastNonce: 3,
    })
    expect(d.revealId).toBeNull()
    expect(d.lastRevealed).toBe("search-2")
    expect(d.lastNonce).toBe(3)
  })

  it("re-reveals the same node when the search nonce bumps (repeat pick)", () => {
    // Re-picking the same node in the shared search bumps the nonce even though
    // the id is unchanged — so it re-centers, like "Find me".
    const d = resolveGraphReveal({
      isInitialLoading: false,
      initialConsumed: true,
      revealNodeId: "search-2",
      lastRevealed: "search-2",
      revealNonce: 4,
      lastNonce: 3,
    })
    expect(d.revealId).toBe("search-2")
    expect(d.lastRevealed).toBe("search-2")
    expect(d.lastNonce).toBe(4)
  })

  it("adopts the entry nonce as handled without revealing", () => {
    const d = resolveGraphReveal({
      isInitialLoading: false,
      initialConsumed: false,
      revealNodeId: "search-1",
      lastRevealed: undefined,
      revealNonce: 2,
      lastNonce: undefined,
    })
    expect(d.revealId).toBeNull()
    expect(d.consumeInitial).toBe(true)
    expect(d.lastNonce).toBe(2)
  })
})
