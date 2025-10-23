import { ButtonInternal } from "@/components/Actions/Button/internal"
import { Input } from "@/experimental/Forms/Fields/Input"
import { OneModal } from "@/experimental/Modals/OneModal"
import { useI18n } from "@/lib/providers/i18n"
import { type AIMessage } from "@copilotkit/shared"
import { useState } from "react"
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
  const { title, description, placeholder } =
    reactionType === "like"
      ? translations.ai.feedbackModal.positive
      : translations.ai.feedbackModal.negative
  const handleSubmit = () => {
    onSubmit(message, text)
  }
  const handleClose = () => {
    onClose(message)
  }

  return (
    <OneModal position="center" isOpen onClose={handleClose} size="sm">
      <OneModal.Header title={title}></OneModal.Header>
      <OneModal.Content>
        <div className="flex flex-col gap-6 p-4">
          <p className="text-balance text-base text-f1-foreground-secondary">
            {description}
          </p>
          <Input
            autoFocus
            label={title}
            hideLabel
            placeholder={placeholder}
            value={text}
            onChange={(value) => setText(value.trim())}
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
