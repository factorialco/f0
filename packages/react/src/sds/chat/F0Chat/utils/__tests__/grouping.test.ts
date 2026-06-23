import { describe, expect, it } from "vitest"

import { type F0ChatMessage } from "../../types"
import { groupChatMessages, lastOwnMessageId } from "../grouping"

const user = (id: string) => ({ id, name: id })

const msg = (
  id: string,
  authorId: string,
  iso: string,
  isMine = false
): F0ChatMessage => ({
  id,
  author: user(authorId),
  body: id,
  createdAt: iso,
  isMine,
})

describe("groupChatMessages", () => {
  it("merges consecutive same-author messages into one run", () => {
    const groups = groupChatMessages([
      msg("a", "u1", "2026-06-21T10:00:00"),
      msg("b", "u1", "2026-06-21T10:01:00"),
      msg("c", "u2", "2026-06-21T10:02:00", true),
    ])
    expect(groups).toHaveLength(1)
    expect(groups[0].runs).toHaveLength(2)
    expect(groups[0].runs[0].messages.map((m) => m.id)).toEqual(["a", "b"])
    expect(groups[0].runs[1].messages.map((m) => m.id)).toEqual(["c"])
  })

  it("starts a new time group on a day change", () => {
    const groups = groupChatMessages([
      msg("a", "u1", "2026-06-20T10:00:00"),
      msg("b", "u1", "2026-06-21T10:00:00"),
    ])
    expect(groups).toHaveLength(2)
  })

  it("starts a new time group when the gap is large", () => {
    const groups = groupChatMessages([
      msg("a", "u1", "2026-06-21T10:00:00"),
      msg("b", "u1", "2026-06-21T11:00:00"),
    ])
    expect(groups).toHaveLength(2)
  })
})

describe("lastOwnMessageId", () => {
  it("returns the id of the last message I sent", () => {
    expect(
      lastOwnMessageId([
        msg("a", "u1", "2026-06-21T10:00:00"),
        msg("b", "me", "2026-06-21T10:01:00", true),
        msg("c", "u1", "2026-06-21T10:02:00"),
      ])
    ).toBe("b")
  })

  it("returns null when none are mine", () => {
    expect(lastOwnMessageId([msg("a", "u1", "2026-06-21T10:00:00")])).toBeNull()
  })
})
