import { type F0ChatMessage } from "../types"

/** What the footer under the conversation's last message has to say. */
export type ChatDeliveryState = "sent" | "read" | "failed"

/**
 * The delivery state worth reporting, or `null` when there is nothing to say.
 *
 * Only my own settled messages qualify. An incoming message has no delivery
 * state, and a message still in flight is covered by the sending clock beside
 * its bubble — in both cases the footer would be an empty row the virtualizer
 * still has to measure, so callers use `null` to skip it entirely.
 *
 * In a group, `read` is only reached once every other member appears in the
 * receipt count; short of that it stays at `sent` rather than exposing a
 * partial tally. Reader identities remain available in the Info panel.
 */
export const deliveryState = (
  message: F0ChatMessage,
  { isGroup, memberCount }: { isGroup?: boolean; memberCount?: number } = {}
): ChatDeliveryState | null => {
  if (!message.isMine) return null
  if (message.status === "failed") return "failed"

  const isSettled =
    message.status === "sent" ||
    message.status === "delivered" ||
    message.status === "read"
  if (!isSettled) return null

  if (message.status !== "read") return "sent"

  const expectedGroupReaders =
    isGroup && memberCount != null ? Math.max(0, memberCount - 1) : undefined
  if (expectedGroupReaders == null || expectedGroupReaders === 0) return "read"

  const readByCount = message.readBy?.length ?? message.readByCount
  return readByCount != null && readByCount >= expectedGroupReaders
    ? "read"
    : "sent"
}
