import {
  isUserMessage,
  type F0ChatItem,
  type F0ChatMessage,
  type F0ChatSystemMessage,
  type F0ChatUser,
} from "../types"
import { calendarDaysApart } from "./natural-time"

/**
 * A new separator is inserted only when the item falls on a later calendar
 * day (WhatsApp-style: one date divider per day). The per-message clock lives on
 * the sticky header instead, so a busy day doesn't get peppered with separators.
 */
const needsSeparator = (
  current: F0ChatItem,
  previous: F0ChatItem | undefined
): boolean => {
  if (!previous) return true
  return (
    calendarDaysApart(
      new Date(previous.createdAt),
      new Date(current.createdAt)
    ) !== 0
  )
}

/**
 * A single flat row for the virtualized transcript. The nested
 * groups→runs→messages shape is flattened into one indexable list so a
 * windowed renderer can map an index to exactly one row.
 */
export type ChatRow =
  | { type: "separator"; key: string; at: string }
  | { type: "divider"; key: string }
  // A centered system row (membership events). Breaks author runs on both
  // sides and never carries run flags, footer or interactions.
  | { type: "system"; key: string; message: F0ChatSystemMessage }
  | {
      type: "message"
      key: string
      message: F0ChatMessage
      /** First message of a same-author run → renders the sender name (groups). */
      isFirstOfRun: boolean
      /** Last message of a run → renders the avatar gutter (groups). */
      isLastOfRun: boolean
      /** Conversation's last message → renders the delivery-status footer. */
      isLastMessage: boolean
    }
  // Appended by the container (not by `flattenChatRows`): the delivery-status
  // footer under the conversation's last message. A DEDICATED row — inside the
  // last message's row it made every send shrink the previous row and grow the
  // new one (stale-measurement churn, the send bounce); as its own constant-
  // height row, sending only APPENDS.
  | { type: "footer"; key: string; message: F0ChatMessage }
  // Appended by the container (not by `flattenChatRows`) at the end of the list
  // while someone is typing — an incoming dots bubble.
  | { type: "typing"; key: string; users: F0ChatUser[] }

export type FlattenedChat = {
  rows: ChatRow[]
  /** item id → index of its row (for jump-to-message + scroll anchor). */
  indexById: Map<string, number>
  /** key → row of THIS result — feed it back as `previousRows` on the next call
   * so unchanged rows keep their identity (see below). */
  rowCache: Map<string, ChatRow>
}

/** Two builds of the same key produce an equivalent row (same message object,
 * same flags) — safe to reuse the previous object so `memo` holds. */
const sameRow = (a: ChatRow, b: ChatRow): boolean => {
  if (a.type !== b.type) return false
  if (a.type === "separator" && b.type === "separator") return a.at === b.at
  if (a.type === "system" && b.type === "system") return a.message === b.message
  if (a.type === "message" && b.type === "message") {
    return (
      a.message === b.message &&
      a.isFirstOfRun === b.isFirstOfRun &&
      a.isLastOfRun === b.isLastOfRun &&
      a.isLastMessage === b.isLastMessage
    )
  }
  // divider (static) — typing rows are container-made and never cached here.
  return a.type === "divider"
}

/**
 * Flattens an ordered (oldest→newest) item list into a single row array for
 * virtualization: per-day separators, the optional "new messages" divider,
 * centered system rows, and one row per user message carrying the run/last
 * flags (computed inline). Pure.
 *
 * Identity: pass the previous call's `rowCache` as `previousRows` and rows whose
 * message (by reference) and flags didn't change are returned as the SAME
 * object — an append then re-renders only the new row and the previous tail row
 * whose flags flip, instead of every visible row (the row renderer is memoized
 * on the row's identity).
 */
export function flattenChatRows(
  messages: F0ChatItem[],
  opts: {
    dividerId?: string | null
    previousRows?: Map<string, ChatRow>
  } = {}
): FlattenedChat {
  const { dividerId = null, previousRows } = opts
  const rows: ChatRow[] = []
  const indexById = new Map<string, number>()
  let lastMessageRowIndex = -1
  // The previous USER message with no separator/divider/system row emitted
  // since — the author-run comparand. A system row resets it, so the runs on
  // both sides of it read as separate stacks.
  let previousUser: F0ChatMessage | undefined
  // The conversation's last USER message gets the delivery footer — a trailing
  // system item ("X left the group") must not steal the flag from it.
  let lastUserIndex = -1
  for (let i = messages.length - 1; i >= 0; i--) {
    if (isUserMessage(messages[i])) {
      lastUserIndex = i
      break
    }
  }

  messages.forEach((item, index) => {
    const separated = needsSeparator(item, messages[index - 1])

    if (separated) {
      rows.push({
        type: "separator",
        key: `sep-${item.id}`,
        at: item.createdAt,
      })
    }

    // The "new messages" divider visually splits the transcript, so it also
    // breaks the run: both sides read as separate stacks (corners, avatar,
    // name) while it's shown, and rejoin once it's dismissed (rows recompute).
    const dividerHere = dividerId != null && item.id === dividerId

    if (dividerHere) {
      rows.push({ type: "divider", key: "unread-divider" })
    }

    if (!isUserMessage(item)) {
      rows.push({ type: "system", key: item.id, message: item })
      indexById.set(item.id, rows.length - 1)
      previousUser = undefined
      return
    }

    // First of a run: a separator, the unread divider or a system row broke
    // the flow, there's no previous user message, or the author changed.
    // Continuing the run flips the previous row off "last".
    const isFirstOfRun =
      separated ||
      dividerHere ||
      !previousUser ||
      previousUser.author.id !== item.author.id
    if (!isFirstOfRun && lastMessageRowIndex >= 0) {
      const prevRow = rows[lastMessageRowIndex]
      if (prevRow.type === "message") prevRow.isLastOfRun = false
    }

    rows.push({
      type: "message",
      key: item.id,
      message: item,
      isFirstOfRun,
      isLastOfRun: true,
      isLastMessage: index === lastUserIndex,
    })
    lastMessageRowIndex = rows.length - 1
    indexById.set(item.id, lastMessageRowIndex)
    previousUser = item
  })

  // Swap freshly-built rows for their previous twins AFTER the build (the run
  // flags mutate mid-build, so equivalence can only be judged on final rows).
  // The returned cache holds only current keys — switching conversations or
  // paginating never leaks stale rows.
  const rowCache = new Map<string, ChatRow>()
  for (let i = 0; i < rows.length; i++) {
    const previous = previousRows?.get(rows[i].key)
    if (previous && sameRow(previous, rows[i])) rows[i] = previous
    rowCache.set(rows[i].key, rows[i])
  }

  return { rows, indexById, rowCache }
}

/**
 * Ids of the items appended at the TAIL since the previous render (newest
 * batch), oldest→newest. Empty when nothing was appended, when the previous
 * tail id is unknown (first render, conversation/window swap, jump — those must
 * never animate) or when the tail id vanished (reload).
 */
export function freshTailIds(
  messages: F0ChatItem[],
  prevLastId: string | null
): string[] {
  if (prevLastId === null) return []
  const fresh: string[] = []
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].id === prevLastId) return fresh.reverse()
    fresh.push(messages[i].id)
  }
  // Previous tail not found: the loaded window was replaced, not appended to.
  return []
}
