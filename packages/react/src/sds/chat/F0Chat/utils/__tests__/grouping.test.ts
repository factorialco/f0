import { describe, expect, it } from "vitest"

import { type F0ChatMessage } from "../../types"
import {
  type ChatRow,
  flattenChatRows,
  groupChatMessages,
  lastOwnMessageId,
} from "../grouping"

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

  it("keeps same-day messages in one group regardless of the gap", () => {
    const groups = groupChatMessages([
      msg("a", "u1", "2026-06-21T10:00:00"),
      msg("b", "u1", "2026-06-21T23:00:00"),
    ])
    expect(groups).toHaveLength(1)
  })
})

describe("flattenChatRows", () => {
  const types = (rows: ChatRow[]) => rows.map((r) => r.type)

  it("emits a separator then a message row for a single message", () => {
    const { rows, indexById } = flattenChatRows([
      msg("a", "u1", "2026-06-21T10:00:00"),
    ])
    expect(types(rows)).toEqual(["separator", "message"])
    expect(indexById.get("a")).toBe(1)
  })

  it("flags first/last of run and the conversation's last message", () => {
    const { rows } = flattenChatRows([
      msg("a", "u1", "2026-06-21T10:00:00"),
      msg("b", "u1", "2026-06-21T10:01:00"),
      msg("c", "u2", "2026-06-21T10:02:00", true),
    ])
    const messageRows = rows.filter(
      (r): r is Extract<ChatRow, { type: "message" }> => r.type === "message"
    )
    expect(messageRows.map((r) => r.message.id)).toEqual(["a", "b", "c"])
    // run [a, b]: a is first (not last), b is last (not first)
    expect(messageRows[0]).toMatchObject({
      isFirstOfRun: true,
      isLastOfRun: false,
    })
    expect(messageRows[1]).toMatchObject({
      isFirstOfRun: false,
      isLastOfRun: true,
    })
    // run [c]: both first and last, and the conversation's last message
    expect(messageRows[2]).toMatchObject({
      isFirstOfRun: true,
      isLastOfRun: true,
      isLastMessage: true,
    })
    expect(messageRows[0].isLastMessage).toBe(false)
  })

  it("inserts a divider row immediately before the first unread message", () => {
    const { rows } = flattenChatRows(
      [
        msg("a", "u1", "2026-06-21T10:00:00"),
        msg("b", "u1", "2026-06-21T10:01:00"),
      ],
      { dividerId: "b" }
    )
    const dividerIndex = rows.findIndex((r) => r.type === "divider")
    const bIndex = rows.findIndex(
      (r) => r.type === "message" && r.message.id === "b"
    )
    expect(dividerIndex).toBeGreaterThan(-1)
    expect(dividerIndex).toBe(bIndex - 1)
  })

  it("maps every message id to its row index", () => {
    const { rows, indexById } = flattenChatRows([
      msg("a", "u1", "2026-06-20T10:00:00"),
      msg("b", "u1", "2026-06-21T10:00:00"),
    ])
    for (const [id, index] of indexById) {
      const row = rows[index]
      expect(row.type).toBe("message")
      expect(row.type === "message" && row.message.id).toBe(id)
    }
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
