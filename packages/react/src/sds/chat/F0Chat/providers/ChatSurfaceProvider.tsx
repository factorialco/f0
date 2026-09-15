"use client"

import { createContext, useContext, type ReactNode } from "react"

/**
 * Which side of the chat an attachment is being rendered on.
 *
 * The transcript and the composer's draft strip reuse the SAME leaf components
 * (`ChatDocumentAttachmentCard`, `ChatVoiceAttachment`, `ChatLocationAttachment`),
 * so a leaf cannot otherwise tell whether it is showing content someone shared
 * with you or a file you have not sent yet. Only the transcript side reports
 * consumption events — previewing your own draft is not consuming shared content.
 */
export type ChatSurface = "transcript" | "composer"

// Defaults to `transcript`: a leaf added to a new surface reports until someone
// says otherwise, which is the failure that shows up in a dashboard rather than
// the one that silently loses data.
const ChatSurfaceContext = createContext<ChatSurface>("transcript")

export const ChatSurfaceProvider = ({
  surface,
  children,
}: {
  surface: ChatSurface
  children: ReactNode
}): ReactNode => (
  <ChatSurfaceContext.Provider value={surface}>
    {children}
  </ChatSurfaceContext.Provider>
)

export function useChatSurface(): ChatSurface {
  return useContext(ChatSurfaceContext)
}
