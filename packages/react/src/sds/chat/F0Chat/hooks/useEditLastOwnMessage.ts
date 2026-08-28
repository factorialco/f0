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
 * Deliberately does not scan past it. "Reopen my last message" has to mean the
 * message the user is looking at — walking further back to find something
 * editable silently opens a different message than the one they expect, which
 * a blind keystroke must never do. When the newest own message does not
 * qualify, the shortcut does nothing and the actions menu remains the way in.
 *
 * Stricter than the menu on two further points:
 * - own messages only, even where `capabilities.canEditMessage` allows editing
 *   other people's (a moderator must not reopen a colleague's by reflex);
 * - text only. An attachment-only message would load an empty textarea plus its
 *   image, so the user's next Enter would caption that image instead of sending
 *   the message they just typed.
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
  // What a scan already came up empty for. A held-down key repeats the keydown
  // ~30x/s and only a MISS repeats the scan (a hit opens an edit, which the
  // caller's own guard then blocks). The policy is part of the key: a
  // `channel.updated` event can hand over new capabilities while reusing the
  // same memoized message array, and the shortcut has to notice.
  const missRef = useRef<{ messages: F0ChatItem[]; policy: EditPolicy } | null>(
    null
  )

  return useCallback(() => {
    if (!editMessage) return false
    // The loaded window is not always anchored to the live tail: after jumping
    // to a search hit its last message can be months old, and "your last
    // message" would silently mean the wrong one.
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
