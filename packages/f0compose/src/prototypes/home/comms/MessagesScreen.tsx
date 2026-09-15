import { useSearchParams } from "react-router-dom"

import type { ChatId } from "./chats"

import { CHATS_BY_ID } from "./chats"
import { ChatWindow } from "./ChatWindow"

/**
 * The DMs canvas: the conversation you picked from the panel, rendered by
 * the same `ChatWindow` the docked windows use, so a thread reads the
 * same wherever you opened it from. Until you pick one, a single line —
 * no illustration, no actions (Angel, 2026-09-14).
 */
export function MessagesScreen() {
  const [searchParams] = useSearchParams()
  const chat = CHATS_BY_ID[searchParams.get("chat") as ChatId]
  if (!chat)
    return (
      <div className="flex h-full w-full flex-1 items-center justify-center p-6">
        <p className="text-base text-f1-foreground-secondary">
          Select a conversation to read it
        </p>
      </div>
    )
  return (
    <div className="flex h-full w-full min-w-0 flex-col">
      <ChatWindow chat={chat} />
    </div>
  )
}
