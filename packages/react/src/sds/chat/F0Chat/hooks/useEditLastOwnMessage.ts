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
 * Stops at the newest own message instead of searching past it: the user
 * pressed a key without choosing a message, so opening an older one surprises
 * them. The actions menu still reaches those.
 *
 * Stricter than that menu in two ways. Own messages only, even where
 * `capabilities.canEditMessage` allows editing other people's. And text only —
 * a message with just an image loads an empty box plus the image, so the next
 * Enter captions it rather than sending what the user typed.
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

/** Returns whether it found one, so the caller only swallows the key when
 * something happened. */
export const useEditLastOwnMessage = (): (() => boolean) => {
  const { messages, hasMoreNewer, editMessage, capabilities, editWindowMs } =
    useF0Chat()
  const { startEdit } = useChatComposeActions()
  // Held keys repeat ~30 times a second, and only a failed search repeats the
  // work. The policy is part of the key because a permission change can arrive
  // with the same message array.
  const missRef = useRef<{ messages: F0ChatItem[]; policy: EditPolicy } | null>(
    null
  )

  return useCallback(() => {
    if (!editMessage) return false
    // The loaded messages do not always end at the newest one: after jumping to
    // a search result the last one can be months old.
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
