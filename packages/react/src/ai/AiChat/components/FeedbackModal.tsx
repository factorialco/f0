import { F0Dialog } from "@/components/F0Dialog"
import { Input } from "@/experimental/Forms/Fields/Input"
import { useI18n } from "@/ai"
import { type AIMessage } from "@copilotkit/shared"
import { useCallback, useEffect, useState } from "react"
import { UserReaction } from "./FeedbackProvider"

interface ReactionModalProps {
  onClose: (message: AIMessage) => void
  onSubmit: (message: AIMessage, feedback: string) => void
  reactionType: UserReaction
  message: AIMessage
}

export const FeedbackModal = ({
  onClose,
  onSubmit,
  reactionType,
  message,
}: ReactionModalProps) => {
  const [text, setText] = useState("")
  const translation = useI18n()
  const { title, label, placeholder } =
    reactionType === "like"
      ? translation.ai.feedbackModal.positive
      : translation.ai.feedbackModal.negative
  const handleSubmit = useCallback(() => {
    onSubmit(message, text)
  }, [text, message, onSubmit])
  const handleClose = () => {
    onClose(message)
  }

  // handle keyboard submit manually because using built-in <form> fails
  // due to unmount of the dialog before the form is processed
  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault()
        handleSubmit()
      }
    }

    document.addEventListener("keydown", handleKeyboard)

    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    }
  }, [handleSubmit])

  return (
    <F0Dialog
      position="center"
      isOpen
      onClose={handleClose}
      width="sm"
      title={title}
      primaryAction={{
        label: translation.actions.send,
        onClick: handleSubmit,
      }}
      secondaryAction={{
        label: translation.actions.cancel,
        onClick: handleClose,
      }}
    >
      <div className="flex flex-col gap-6">
        <Input
          autoFocus
          label={label}
          placeholder={placeholder}
          value={text}
          onChange={(value) => setText(value.trim())}
          size="md"
          type="text"
        />
      </div>
    </F0Dialog>
  )
}
