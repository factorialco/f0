import { describe, expect, it } from "vitest"

import { flattenChatRows, freshTailIds, rowItem } from "../utils/grouping"
import {
  type F0ChatMessage,
  type F0ChatPost,
  type F0ChatSystemMessage,
} from "../types"

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

  it("reuses an untouched system row on append", () => {
    const a = msg("a", "other", 0)
    const s: F0ChatSystemMessage = {
      type: "system",
      id: "s1",
      createdAt: new Date(2026, 0, 10, 10, 1).toISOString(),
      system: { event: "member.added", members: [{ id: "n", name: "n" }] },
    }
    const first = flattenChatRows([a, s])

    const b = msg("b", "other", 2)
    const second = flattenChatRows([a, s, b], {
      previousRows: first.rowCache,
    })

    expect(second.rows[second.indexById.get("s1")!]).toBe(
      first.rows[first.indexById.get("s1")!]
    )
  })

  it("rebuilds only the system row when its item is replaced (coalescing update)", () => {
    const a = msg("a", "other", 0)
    const s: F0ChatSystemMessage = {
      type: "system",
      id: "s1",
      createdAt: new Date(2026, 0, 10, 10, 1).toISOString(),
      system: { event: "member.added", members: [{ id: "n", name: "n" }] },
    }
    const first = flattenChatRows([a, s])

    // The adapter coalesces a second member into the SAME item id.
    const grown: F0ChatSystemMessage = {
      ...s,
      system: {
        event: "member.added",
        members: [
          { id: "n", name: "n" },
          { id: "m", name: "m" },
        ],
      },
    }
    const second = flattenChatRows([a, grown], {
      previousRows: first.rowCache,
    })

    expect(second.rows[second.indexById.get("s1")!]).not.toBe(
      first.rows[first.indexById.get("s1")!]
    )
    expect(second.rows[second.indexById.get("a")!]).toBe(
      first.rows[first.indexById.get("a")!]
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

const communityPost = (
  id: string,
  authorId: string,
  minute: number
): F0ChatPost => ({
  type: "post",
  id,
  author: { id: authorId, name: authorId },
  createdAt: new Date(2026, 0, 10, 10, minute).toISOString(),
  title: `title ${id}`,
  commentCount: 0,
})

describe("posts in the flattened rows", () => {
  it("emits one post row per post, with no run flags", () => {
    const { rows } = flattenChatRows([communityPost("p1", "ana", 0)])

    const postRows = rows.filter((row) => row.type === "post")
    expect(postRows).toHaveLength(1)
    expect(postRows[0]).toMatchObject({ type: "post", key: "p1" })
  })

  it("breaks an author run on both sides", () => {
    // Joining two bubbles across a full-width card would read as a stray
    // bubble, so the post resets the run like a system row does.
    const rows = flattenChatRows([
      msg("a", "ana", 0),
      communityPost("p1", "ana", 1),
      msg("b", "ana", 2),
    ]).rows

    const messageRows = rows.filter((row) => row.type === "message")
    expect(messageRows.every((row) => row.isFirstOfRun)).toBe(true)
    expect(messageRows.every((row) => row.isLastOfRun)).toBe(true)
  })

  it("never gives a post the delivery-status flag", () => {
    // A post is published, not delivered — a trailing post must not steal
    // `isLastMessage` from the message before it either.
    const rows = flattenChatRows([
      msg("a", "me", 0),
      communityPost("p1", "ana", 1),
    ]).rows

    const lastMessage = rows.find((row) => row.type === "message")
    expect(lastMessage).toMatchObject({ isLastMessage: true })
    expect(rows.some((row) => row.type === "footer")).toBe(false)
  })

  it("keeps day separators around posts", () => {
    const rows = flattenChatRows([
      communityPost("p1", "ana", 0),
      {
        ...communityPost("p2", "ana", 0),
        createdAt: new Date(2026, 0, 11, 10, 0).toISOString(),
      },
    ]).rows

    expect(rows.filter((row) => row.type === "separator")).toHaveLength(2)
  })

  it("reuses the post rows an append did not touch", () => {
    const [p1, p2, p3] = [
      communityPost("p1", "ana", 0),
      communityPost("p2", "ana", 1),
      communityPost("p3", "ana", 2),
    ]
    const first = flattenChatRows([p1, p2, p3])
    const second = flattenChatRows(
      [p1, p2, p3, communityPost("p4", "ana", 3)],
      {
        previousRows: first.rowCache,
      }
    )

    // Neither of these was last before, and neither is now.
    expect(second.rows[1]).toBe(first.rows[1])
    expect(second.rows[2]).toBe(first.rows[2])
  })

  it("rebuilds the post that stops being last", () => {
    // It carries `isLast`, which is what decides its divider — so an append
    // rebuilds exactly two rows: the new one, and the one it displaced. Same
    // trade-off `isLastOfRun` makes for a message stack's tail.
    const p1 = communityPost("p1", "ana", 0)
    const first = flattenChatRows([p1])
    const second = flattenChatRows([p1, communityPost("p2", "ana", 1)], {
      previousRows: first.rowCache,
    })

    expect(second.rows[1]).not.toBe(first.rows[1])
    expect(second.rows[1]).toMatchObject({ type: "post", isLast: false })
    expect(second.rows[2]).toMatchObject({ type: "post", isLast: true })
  })

  it("indexes a post so it can be jumped to", () => {
    const { indexById } = flattenChatRows([communityPost("p1", "ana", 0)])

    expect(indexById.get("p1")).toBe(1)
  })
})

describe("rowItem", () => {
  it("resolves the item behind a message row", () => {
    const a = msg("a", "ana", 0)
    expect(
      rowItem({
        type: "message",
        key: "a",
        message: a,
        isFirstOfRun: true,
        isLastOfRun: true,
        isLastMessage: true,
      })
    ).toBe(a)
  })

  it("resolves the item behind a post row", () => {
    const p = communityPost("p1", "ana", 0)
    expect(rowItem({ type: "post", key: "p1", post: p })).toBe(p)
  })

  it("resolves nothing for rows that stand for no item", () => {
    expect(rowItem({ type: "divider", key: "d" })).toBeNull()
    expect(
      rowItem({ type: "separator", key: "s", at: "x", forId: "a" })
    ).toBeNull()
  })
})
