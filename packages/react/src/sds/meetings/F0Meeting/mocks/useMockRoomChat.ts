import { useCallback, useEffect, useRef, useState } from "react"

/** One line of the call's own chat. */
export type MockRoomMessage = {
  id: string
  participantId: string
  text: string
  at: string
}

export type MockRoomChat = {
  messages: MockRoomMessage[]
  send: (text: string) => void
}

/**
 * The call's OWN chat — ephemeral, scoped to the room, gone when it ends.
 *
 * This is deliberately NOT the conversation the huddle was started from. In
 * production it rides on LiveKit's data channels (`useChat`, topic `lk.chat`),
 * whose own documentation says "message history is not persisted and will be
 * lost if the component is refreshed". Two different chats with two different
 * jobs: this one is what is said DURING the call, while the huddle card in the
 * DM is how you find out about it and how you get in.
 *
 * Wiring this tab to the conversation's transcript would quietly promise that
 * what you type here survives the call. It does not.
 */
export const useMockRoomChat = (roomId: string): MockRoomChat => {
  const [messages, setMessages] = useState<MockRoomMessage[]>([])
  const counter = useRef(0)

  // A new room is a new chat. Keeping the old lines would be the exact
  // misunderstanding this hook exists to prevent.
  useEffect(() => {
    setMessages([])
    counter.current = 0
  }, [roomId])

  const send = useCallback((text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((current) => [
      ...current,
      {
        id: `room-msg-${counter.current++}`,
        participantId: "me",
        text: trimmed,
        at: new Date().toISOString(),
      },
    ])
  }, [])

  return { messages, send }
}
