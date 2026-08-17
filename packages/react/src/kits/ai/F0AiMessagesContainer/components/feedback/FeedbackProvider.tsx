import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react"

import { type AIMessage } from "../../types"

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
  const [feedbackModalState, setFeedbackModalState] =
    useState<FeedbackModalState>(null)

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

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  )
}

export const useFeedbackModal = (): FeedbackModal => {
  const context = useContext(FeedbackContext)

  if (context === null) {
    throw new Error(
      "useFeedbackModal must be used within a FeedbackModalProvider"
    )
  }

  return context
}

export type FeedbackConfig = {
  threadId: string
  onThumbsUp: (
    msg: AIMessage,
    ctx: { threadId: string; feedback: string }
  ) => void
  onThumbsDown: (
    msg: AIMessage,
    ctx: { threadId: string; feedback: string }
  ) => void
}

export function useFeedbackSubmit(config: FeedbackConfig) {
  const modal = useFeedbackModal()

  const handleSubmit = (message: AIMessage, feedback: string) => {
    const callback =
      modal.currentReaction === "like" ? config.onThumbsUp : config.onThumbsDown
    callback?.(message, { threadId: config.threadId, feedback })
    modal.close()
  }

  const handleClose = (message: AIMessage) => {
    const callback =
      modal.currentReaction === "like" ? config.onThumbsUp : config.onThumbsDown
    callback?.(message, { threadId: config.threadId, feedback: "" })
    modal.close()
  }

  return { modal, handleSubmit, handleClose }
}
