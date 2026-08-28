import { type F0ChatCapabilities, type F0ChatMessage } from "../types"

/**
 * Whether a message can still be edited.
 *
 * Whose messages, and for how long, comes from `capabilities.canEditMessage`
 * when the host provides one, else the default: own messages within
 * `editWindowMs`. Whatever that says, editing also needs a host `editMessage`
 * handler, a message that has not been deleted and has reached the server, and
 * some text to change — a voice note has none.
 *
 * Shared by the actions menu and the arrow-up shortcut so both offer editing on
 * the same messages.
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
