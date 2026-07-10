import { type F0ChatMessage, type F0ChatUser } from "../types"
import { calendarDaysApart } from "./natural-time"

/**
 * A new separator is inserted only when the message falls on a later calendar
 * day (WhatsApp-style: one date divider per day). The per-message clock lives on
 * the sticky header instead, so a busy day doesn't get peppered with separators.
 */
const needsSeparator = (
  current: F0ChatMessage,
  previous: F0ChatMessage | undefined
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
  // Appended by the container (not by `flattenChatRows`) at the end of the list
  // while someone is typing — an incoming dots bubble.
  | { type: "typing"; key: string; users: F0ChatUser[] }

export type FlattenedChat = {
  rows: ChatRow[]
  /** message id → index of its message row (for jump-to-message + scroll anchor). */
  indexById: Map<string, number>
}

/**
 * Flattens an ordered (oldest→newest) message list into a single row array for
 * virtualization: per-day separators, the optional "new messages" divider, and
 * one row per message carrying the run/last flags (computed inline). Pure.
 */
export function flattenChatRows(
  messages: F0ChatMessage[],
  opts: { dividerId?: string | null } = {}
): FlattenedChat {
  const { dividerId = null } = opts
  const rows: ChatRow[] = []
  const indexById = new Map<string, number>()
  let lastMessageRowIndex = -1

  messages.forEach((message, index) => {
    const previous = messages[index - 1]
    const separated = needsSeparator(message, previous)

    if (separated) {
      rows.push({
        type: "separator",
        key: `sep-${message.id}`,
        at: message.createdAt,
      })
    }

    // The "new messages" divider visually splits the transcript, so it also
    // breaks the run: both sides read as separate stacks (corners, avatar,
    // name) while it's shown, and rejoin once it's dismissed (rows recompute).
    const dividerHere = dividerId != null && message.id === dividerId

    // First of a run: a separator or the unread divider broke the flow, there's
    // no previous, or the author changed. Continuing the run flips the previous
    // row off "last".
    const isFirstOfRun =
      separated ||
      dividerHere ||
      !previous ||
      previous.author.id !== message.author.id
    if (!isFirstOfRun && lastMessageRowIndex >= 0) {
      const prevRow = rows[lastMessageRowIndex]
      if (prevRow.type === "message") prevRow.isLastOfRun = false
    }

    if (dividerHere) {
      rows.push({ type: "divider", key: "unread-divider" })
    }

    rows.push({
      type: "message",
      key: message.id,
      message,
      isFirstOfRun,
      isLastOfRun: true,
      isLastMessage: index === messages.length - 1,
    })
    lastMessageRowIndex = rows.length - 1
    indexById.set(message.id, lastMessageRowIndex)
  })

  return { rows, indexById }
}
