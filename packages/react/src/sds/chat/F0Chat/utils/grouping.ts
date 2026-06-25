import { type F0ChatMessage, type F0ChatUser } from "../types"
import { calendarDaysApart } from "./natural-time"

/** A run of consecutive messages from the same author (merged bubble). */
export type ChatSenderRun = {
  key: string
  author: F0ChatUser
  isMine: boolean
  messages: F0ChatMessage[]
}

/** Messages under one date/time separator. */
export type ChatTimeGroup = {
  key: string
  /** ISO of the first message — used to render the separator label. */
  separatorAt: string
  runs: ChatSenderRun[]
}

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
 * Splits an ordered (oldest→newest) message list into per-day groups, each
 * further split into consecutive same-author runs. Pure — drives both the
 * separators and the bubble merging / avatar placement.
 */
export function groupChatMessages(messages: F0ChatMessage[]): ChatTimeGroup[] {
  const groups: ChatTimeGroup[] = []

  messages.forEach((message, index) => {
    const previous = messages[index - 1]

    if (needsSeparator(message, previous)) {
      groups.push({
        key: `sep-${message.id}`,
        separatorAt: message.createdAt,
        runs: [],
      })
    }

    const group = groups[groups.length - 1]
    const lastRun = group.runs[group.runs.length - 1]

    if (lastRun && lastRun.author.id === message.author.id) {
      lastRun.messages.push(message)
    } else {
      group.runs.push({
        key: `run-${message.id}`,
        author: message.author,
        isMine: message.isMine,
        messages: [message],
      })
    }
  })

  return groups
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
 * one row per message carrying the run/last flags that {@link groupChatMessages}
 * + {@link ChatMessageRun} computed implicitly. Pure.
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

    // First of a run: a separator broke the flow, there's no previous, or the
    // author changed. Continuing the run flips the previous row off "last".
    const isFirstOfRun =
      separated || !previous || previous.author.id !== message.author.id
    if (!isFirstOfRun && lastMessageRowIndex >= 0) {
      const prevRow = rows[lastMessageRowIndex]
      if (prevRow.type === "message") prevRow.isLastOfRun = false
    }

    if (dividerId && message.id === dividerId) {
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

/** Id of the last message I sent — only that one shows a delivery status. */
export function lastOwnMessageId(messages: F0ChatMessage[]): string | null {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].isMine) return messages[i].id
  }
  return null
}
