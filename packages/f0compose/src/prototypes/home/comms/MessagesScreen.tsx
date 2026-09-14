import { OneEmptyState } from "@factorialco/f0-react"

import type { ChatId } from "./chats"

import { CHATS_BY_ID } from "./chats"
import { useOpenChats } from "./chatStore"
import { ChatWindow } from "./ChatWindow"

/**
 * The Messages canvas. It exists because every first-level rail item has
 * to change the content area (Angel, 2026-09-14) — before this, clicking
 * Messages swapped the panel and left whatever was on the canvas alone.
 *
 * It is a LANDING surface, not a second implementation of comms: the same
 * `ChatWindow` the docked windows use renders the open thread, so a
 * conversation reads identically whether you arrived here or opened it
 * over the canvas from the panel.
 */
export function MessagesScreen() {
  const open = useOpenChats()
  // The open list also carries ticket ids, which are not chats.
  const chat = open.map((id) => CHATS_BY_ID[id as ChatId]).find(Boolean)
  if (!chat)
    return (
      <div className="flex w-full flex-1 flex-col p-6">
        <OneEmptyState
          emoji="💬"
          title="No conversation open"
          description="Pick a chat, a channel or a community from the panel to read it here."
        />
      </div>
    )
  return (
    <div className="flex h-full w-full min-w-0 flex-col">
      <ChatWindow chat={chat} />
    </div>
  )
}
