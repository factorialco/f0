import { describe, expect, it } from "vitest"

import { flattenChatRows, freshTailIds } from "../utils/grouping"
import { type F0ChatMessage } from "../types"

const msg = (
  id: string,
  authorId: string,
  minute: number,
  overrides: Partial<F0ChatMessage> = {}
): F0ChatMessage => ({
  id,
  author: { id: authorId, name: authorId },
  body: `body ${id}`,
  createdAt: new Date(2026, 0, 10, 10, minute).toISOString(),
  isMine: authorId === "me",
  ...overrides,
})

describe("flattenChatRows row identity (previousRows)", () => {
  it("reuses row objects whose message and flags did not change on append", () => {
    const a = msg("a", "other", 0)
    const b = msg("b", "me", 1)
    const first = flattenChatRows([a, b])

    const c = msg("c", "other", 2)
    const second = flattenChatRows([a, b, c], {
      previousRows: first.rowCache,
    })

    // Row "a" is untouched (same message, same flags) → SAME object.
    const rowA1 = first.rows[first.indexById.get("a")!]
    const rowA2 = second.rows[second.indexById.get("a")!]
    expect(rowA2).toBe(rowA1)

    // Row "b" flips isLastMessage → NEW object.
    const rowB1 = first.rows[first.indexById.get("b")!]
    const rowB2 = second.rows[second.indexById.get("b")!]
    expect(rowB2).not.toBe(rowB1)

    // The separator (same day, same key) is reused too.
    expect(second.rows[0]).toBe(first.rows[0])
  })

  it("keeps identity when a run extends (previous tail flips isLastOfRun)", () => {
    const a = msg("a", "other", 0)
    const b = msg("b", "other", 1)
    const first = flattenChatRows([a, b])

    const c = msg("c", "other", 2)
    const second = flattenChatRows([a, b, c], {
      previousRows: first.rowCache,
    })

    // "a" was already mid-run (not last of run, not last message) → reused.
    expect(second.rows[second.indexById.get("a")!]).toBe(
      first.rows[first.indexById.get("a")!]
    )
    // "b" flips BOTH isLastOfRun and isLastMessage → rebuilt.
    expect(second.rows[second.indexById.get("b")!]).not.toBe(
      first.rows[first.indexById.get("b")!]
    )
  })

  it("rebuilds a row when its message object changes (status advance)", () => {
    const a = msg("a", "me", 0, { status: "sending" })
    const b = msg("b", "other", 1)
    const first = flattenChatRows([a, b])

    const aSent = { ...a, status: "sent" as const }
    const second = flattenChatRows([aSent, b], {
      previousRows: first.rowCache,
    })

    expect(second.rows[second.indexById.get("a")!]).not.toBe(
      first.rows[first.indexById.get("a")!]
    )
    expect(second.rows[second.indexById.get("b")!]).toBe(
      first.rows[first.indexById.get("b")!]
    )
  })
})

describe("freshTailIds", () => {
  const a = msg("a", "other", 0)
  const b = msg("b", "me", 1)
  const c = msg("c", "other", 2)
  const d = msg("d", "other", 3)

  it("returns the appended tail oldest→newest", () => {
    expect(freshTailIds([a, b, c, d], "b")).toEqual(["c", "d"])
  })

  it("returns empty when nothing was appended", () => {
    expect(freshTailIds([a, b], "b")).toEqual([])
  })

  it("returns empty on first render (no previous tail)", () => {
    expect(freshTailIds([a, b], null)).toEqual([])
  })

  it("returns empty when the previous tail vanished (window swap / jump)", () => {
    expect(freshTailIds([c, d], "b")).toEqual([])
  })

  it("prepends alone never count as fresh", () => {
    // Older page loaded above; tail unchanged.
    expect(freshTailIds([a, b, c], "c")).toEqual([])
  })
})
