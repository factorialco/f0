import { useCallback, useRef } from "react"

import { useChatComposeActions } from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import {
  isUserMessage,
  type F0ChatCapabilities,
  type F0ChatItem,
  type F0ChatMessage,
} from "../types"
import { canEditChatMessage } from "../utils/message-permissions"

type EditPolicy = {
  hasEditMessage: boolean
  capabilities?: F0ChatCapabilities
  editWindowMs?: number
}

/**
 * The message a keyboard shortcut may reopen: the viewer's NEWEST own message,
 * and only if it is editable as text.
 *
 * It does not look further back on purpose. The user presses a key without
 * choosing a message, so opening anything other than their newest one is a
 * surprise. When that message does not qualify the shortcut does nothing, and
 * the actions menu is still there for older messages.
 *
 * Stricter than the menu in two ways:
 * - own messages only, even where `capabilities.canEditMessage` allows editing
 *   other people's, so a moderator cannot open a colleague's message by
 *   accident;
 * - text only. A message with just an image would load an empty box plus that
 *   image, and the next Enter would add a caption to it instead of sending the
 *   message the user typed.
 */
export const findShortcutEditTarget = (
  messages: F0ChatItem[],
  policy: EditPolicy
): F0ChatMessage | null => {
  for (let i = messages.length - 1; i >= 0; i--) {
    const item = messages[i]
    if (!isUserMessage(item) || !item.isMine) continue
    if (item.body.trim() === "") return null
    return canEditChatMessage(item, policy) ? item : null
  }
  return null
}

/**
 * Reopen the viewer's last editable message. Returns whether it found one, so
 * the caller only swallows the keystroke when something actually happened.
 */
export const useEditLastOwnMessage = (): (() => boolean) => {
  const { messages, hasMoreNewer, editMessage, capabilities, editWindowMs } =
    useF0Chat()
  const { startEdit } = useChatComposeActions()
  // What a search already found nothing in. Holding the key down repeats it
  // about 30 times a second, and only a failed search repeats the work — a
  // successful one opens an edit, which the caller's guard then blocks. The
  // policy is part of the key because a permission change can arrive with the
  // same message array, and the shortcut has to notice.
  const missRef = useRef<{ messages: F0ChatItem[]; policy: EditPolicy } | null>(
    null
  )

  return useCallback(() => {
    if (!editMessage) return false
    // The loaded messages do not always end at the newest one: after jumping to
    // a search result the last one loaded can be months old, so "your last
    // message" would mean the wrong message.
    if (hasMoreNewer === true) return false

    const policy: EditPolicy = {
      hasEditMessage: true,
      capabilities,
      editWindowMs,
    }
    const miss = missRef.current
    if (
      miss &&
      miss.messages === messages &&
      miss.policy.capabilities === capabilities &&
      miss.policy.editWindowMs === editWindowMs
    ) {
      return false
    }

    const found = findShortcutEditTarget(messages, policy)
    if (!found) {
      missRef.current = { messages, policy }
      return false
    }
    startEdit(found)
    return true
  }, [
    messages,
    hasMoreNewer,
    editMessage,
    capabilities,
    editWindowMs,
    startEdit,
  ])
}
