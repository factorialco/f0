import { type F0ChatCapabilities, type F0ChatMessage } from "../types"

/**
 * Whether a message can still be edited.
 *
 * The POLICY (whose messages, for how long) comes from
 * `capabilities.canEditMessage` when the host provides one, else the default:
 * own messages within `editWindowMs`. Independent of the policy, editing needs
 * a host `editMessage` handler, a message that still exists (not a tombstone)
 * and has settled server-side, and text to change — a voice note has none.
 *
 * Shared by the actions menu and the composer's edit-last shortcut so both
 * offer editing on exactly the same messages.
 */
export const canEditChatMessage = (
  message: F0ChatMessage,
  {
    hasEditMessage,
    capabilities,
    editWindowMs,
  }: {
    /** Whether the runtime provides an `editMessage` handler at all. */
    hasEditMessage: boolean
    capabilities?: F0ChatCapabilities
    editWindowMs?: number
  }
): boolean => {
  if (!hasEditMessage) return false
  if (message.deleted) return false
  if (message.status === "sending" || message.status === "failed") return false
  const isVoiceNote = (message.attachments ?? []).some(
    (attachment) => attachment.kind === "voice"
  )
  if (isVoiceNote) return false
  if (capabilities?.canEditMessage) return capabilities.canEditMessage(message)
  const withinEditWindow =
    editWindowMs == null ||
    Date.now() - new Date(message.createdAt).getTime() <= editWindowMs
  return message.isMine && withinEditWindow
}
