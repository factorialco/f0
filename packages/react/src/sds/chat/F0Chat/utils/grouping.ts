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

/** A new separator is inserted when the gap from the previous message exceeds this. */
export const TIME_SEPARATOR_GAP_MS = 20 * 60 * 1000

const needsSeparator = (
  current: F0ChatMessage,
  previous: F0ChatMessage | undefined,
  gapMs: number
): boolean => {
  if (!previous) return true
  const prev = new Date(previous.createdAt)
  const curr = new Date(current.createdAt)
  if (calendarDaysApart(prev, curr) !== 0) return true
  return curr.getTime() - prev.getTime() > gapMs
}

/**
 * Splits an ordered (oldest→newest) message list into time-separated groups,
 * each further split into consecutive same-author runs. Pure — drives both the
 * separators and the bubble merging / avatar placement.
 */
export function groupChatMessages(
  messages: F0ChatMessage[],
  gapMs: number = TIME_SEPARATOR_GAP_MS
): ChatTimeGroup[] {
  const groups: ChatTimeGroup[] = []

  messages.forEach((message, index) => {
    const previous = messages[index - 1]

    if (needsSeparator(message, previous, gapMs)) {
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

/** Id of the last message I sent — only that one shows a delivery status. */
export function lastOwnMessageId(messages: F0ChatMessage[]): string | null {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].isMine) return messages[i].id
  }
  return null
}
