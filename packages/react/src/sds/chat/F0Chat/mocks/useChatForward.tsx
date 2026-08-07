"use client"

import { useState, type ReactNode } from "react"

import { type F0ChatMessage } from "../types"
import { ChatForwardDialog } from "./ChatForwardDialog"

/**
 * Demo wiring for {@link F0ChatRuntime.forwardMessage}: owns which message is
 * being forwarded and renders the picker dialog OUTSIDE F0Chat (same "host
 * owns the dialog" pattern as `useDemoHeaderActions`'s `editDialog`). Plug
 * `forwardMessage` into the conversation's runtime and render `forwardDialog`
 * alongside it.
 */
export function useChatForward(currentChannelId: string): {
  forwardMessage: (message: F0ChatMessage) => void
  forwardDialog: ReactNode
} {
  const [message, setMessage] = useState<F0ChatMessage | null>(null)

  const forwardDialog = (
    <ChatForwardDialog
      message={message}
      currentChannelId={currentChannelId}
      onClose={() => setMessage(null)}
    />
  )

  return { forwardMessage: setMessage, forwardDialog }
}
