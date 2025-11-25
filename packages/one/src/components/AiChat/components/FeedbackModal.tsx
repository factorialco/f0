import { ButtonInternal } from "../../../components/F0Button/internal"
// @ts-expect-error - Input and OneModal are not exported but exist in the package
import { Input } from "@factorialco/f0-react/experimental/Forms/Fields/Input"
// @ts-expect-error
import { type AIMessage } from "@copilotkit/shared"
import { OneModal } from "@factorialco/f0-react/experimental/Modals/OneModal"
import { useCallback, useEffect, useState } from "react"
import { useI18n } from "../../../lib/providers/i18n"
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
  const translations = useI18n()
  const { title, label, placeholder } =
    reactionType === "like"
      ? translations.ai.feedbackModal.positive
      : translations.ai.feedbackModal.negative
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
    <OneModal
      position="center"
      isOpen
      onClose={handleClose}
      contentPadding="sm"
    >
      <OneModal.Header title={title}></OneModal.Header>
      <OneModal.Content>
        <div className="flex flex-col gap-6 p-4">
          <Input
            autoFocus
            label={label}
            placeholder={placeholder}
            value={text}
            onChange={(value: string) => setText(value.trim())}
            size="md"
            type="text"
          />
        </div>
      </OneModal.Content>
      <OneModal.Footer>
        <div className="flex flex-1 flex-row-reverse gap-3">
          <ButtonInternal
            onClick={handleSubmit}
            label={translations.actions.send}
          />
          <ButtonInternal
            onClick={handleClose}
            label={translations.actions.cancel}
            variant="outline"
          />
        </div>
      </OneModal.Footer>
    </OneModal>
  )
}
