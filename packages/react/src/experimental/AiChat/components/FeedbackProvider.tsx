import { AIMessage } from "@copilotkit/shared"
import { createContext, FC, PropsWithChildren, useContext, useState } from "react"

const FeedbackContext = createContext<FeedbackModal | null>(null)

export type UserReaction = "like" | "dislike"

export type FeedbackModal = FeedbackModalOpen | FeedbackModalClosed

type FeedbackModalOpen = {
  isOpen: true
  currentReaction: UserReaction
  currentMessage: AIMessage
  open: (action: UserReaction, message: AIMessage) => void
  close: () => void
}

type FeedbackModalClosed = {
  isOpen: false
  currentReaction: null
  currentMessage: null
  open: (action: UserReaction, message: AIMessage) => void
  close: () => void
}

export type FeedbackModalState = {
  action: UserReaction
  message: AIMessage
} | null

export const FeedbackModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [feedbackModalState, setFeedbackModalState] = useState<FeedbackModalState>(null)

  const value: FeedbackModal = feedbackModalState
    ? {
        isOpen: true,
        currentReaction: feedbackModalState.action,
        currentMessage: feedbackModalState.message,
        open: (action: UserReaction, message: AIMessage) =>
          setFeedbackModalState({ action, message }),
        close: () => setFeedbackModalState(null),
      }
    : {
        isOpen: false,
        currentReaction: null,
        currentMessage: null,
        open: (action: UserReaction, message: AIMessage) =>
          setFeedbackModalState({ action, message }),
        close: () => setFeedbackModalState(null),
      }

  return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>
}

export const useFeedbackModal = (): FeedbackModal => {
  const context = useContext(FeedbackContext)

  if (context === null) {
    throw new Error("useFeedbackModal must be used within a FeedbackModalProvider")
  }

  return context
}
