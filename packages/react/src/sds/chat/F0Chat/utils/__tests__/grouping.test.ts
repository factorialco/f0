import { describe, expect, it } from "vitest"

import { type F0ChatMessage, type F0ChatSystemMessage } from "../../types"
import { type ChatRow, flattenChatRows } from "../grouping"

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

const sys = (id: string, iso: string): F0ChatSystemMessage => ({
  type: "system",
  id,
  createdAt: iso,
  system: { event: "member.added", members: [user("newbie")] },
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

  it("breaks a same-author run at the divider, and rejoins it without one", () => {
    const messages = [
      msg("a", "u1", "2026-06-21T10:00:00"),
      msg("b", "u1", "2026-06-21T10:01:00"),
      msg("c", "u1", "2026-06-21T10:02:00"),
    ]
    const { rows } = flattenChatRows(messages, { dividerId: "b" })
    const messageRows = rows.filter(
      (r): r is Extract<ChatRow, { type: "message" }> => r.type === "message"
    )
    // The divider splits [a] | [b, c]: a stays last of its run, b restarts one.
    expect(messageRows[0]).toMatchObject({
      isFirstOfRun: true,
      isLastOfRun: true,
    })
    expect(messageRows[1]).toMatchObject({
      isFirstOfRun: true,
      isLastOfRun: false,
    })
    expect(messageRows[2]).toMatchObject({
      isFirstOfRun: false,
      isLastOfRun: true,
    })

    // Same input without the divider: one continuous run again.
    const { rows: joined } = flattenChatRows(messages)
    const joinedRows = joined.filter(
      (r): r is Extract<ChatRow, { type: "message" }> => r.type === "message"
    )
    expect(joinedRows[0]).toMatchObject({
      isFirstOfRun: true,
      isLastOfRun: false,
    })
    expect(joinedRows[1]).toMatchObject({
      isFirstOfRun: false,
      isLastOfRun: false,
    })
    expect(joinedRows[2]).toMatchObject({
      isFirstOfRun: false,
      isLastOfRun: true,
    })
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

  it("emits a system row for a system item and indexes it by id", () => {
    const { rows, indexById } = flattenChatRows([
      msg("a", "u1", "2026-06-21T10:00:00"),
      sys("s1", "2026-06-21T10:01:00"),
    ])
    expect(types(rows)).toEqual(["separator", "message", "system"])
    const row = rows[indexById.get("s1")!]
    expect(row.type).toBe("system")
    expect(row.type === "system" && row.message.id).toBe("s1")
  })

  it("breaks a same-author run on both sides of a system row", () => {
    const { rows } = flattenChatRows([
      msg("a", "u1", "2026-06-21T10:00:00"),
      msg("b", "u1", "2026-06-21T10:01:00"),
      sys("s1", "2026-06-21T10:02:00"),
      msg("c", "u1", "2026-06-21T10:03:00"),
    ])
    const messageRows = rows.filter(
      (r): r is Extract<ChatRow, { type: "message" }> => r.type === "message"
    )
    // [a, b] end their run at the system row; c restarts a fresh one.
    expect(messageRows[1]).toMatchObject({
      isFirstOfRun: false,
      isLastOfRun: true,
    })
    expect(messageRows[2]).toMatchObject({
      isFirstOfRun: true,
      isLastOfRun: true,
    })
  })

  it("gets a day separator when the system item opens a new day", () => {
    const { rows } = flattenChatRows([
      msg("a", "u1", "2026-06-20T10:00:00"),
      sys("s1", "2026-06-21T09:00:00"),
    ])
    expect(types(rows)).toEqual(["separator", "message", "separator", "system"])
  })

  it("places the unread divider on a system item id", () => {
    const { rows } = flattenChatRows(
      [msg("a", "u1", "2026-06-21T10:00:00"), sys("s1", "2026-06-21T10:01:00")],
      { dividerId: "s1" }
    )
    const dividerIndex = rows.findIndex((r) => r.type === "divider")
    const sysIndex = rows.findIndex((r) => r.type === "system")
    expect(dividerIndex).toBe(sysIndex - 1)
  })

  it("keeps isLastMessage on the last USER message when a system item trails", () => {
    const { rows } = flattenChatRows([
      msg("a", "u1", "2026-06-21T10:00:00"),
      sys("s1", "2026-06-21T10:01:00"),
    ])
    const messageRow = rows.find(
      (r): r is Extract<ChatRow, { type: "message" }> => r.type === "message"
    )
    expect(messageRow?.isLastMessage).toBe(true)
  })
})
