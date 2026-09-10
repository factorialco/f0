import { useState } from "react"
import { useHomeRefreshing } from "../setup/homeRefresh"
import { useProfile } from "../profileStore"
import { F0ClarifyingPanel } from "./f0-clarifying/F0ClarifyingPanel"
import type { ClarifyingQuestionState } from "./f0-clarifying/types"
import {
  answerQuestion,
  skipQuestion,
  type ChatMessage,
} from "./conversationStore"

/** State adapter only. Layout, options, custom answer and keyboard behavior
 * come from the complete F0 standalone panel, not a recreated question card. */
export function ClarifyPanel({
  conversationId,
  message,
}: {
  conversationId: string
  message: ChatMessage
}) {
  const question = message.question!
  const loading = useHomeRefreshing(useProfile())
  const [selected, setSelected] = useState<string[]>(() =>
    question.options.flatMap((option, index) =>
      question.selectedOptions?.includes(option) ? [String(index)] : []
    )
  )
  const [customText, setCustomText] = useState("")
  const [customActive, setCustomActive] = useState(false)
  const multiple = question.multi ?? false
  const cancel = () => skipQuestion(conversationId, message.id)
  const confirm = () => {
    if (loading) return
    const values = selected.map((id) => question.options[Number(id)])
    if (customActive && customText.trim()) values.push(customText.trim())
    if (values.length)
      answerQuestion(conversationId, message.id, values.join(" and "))
  }
  const state: ClarifyingQuestionState = {
    currentStep: {
      question: question.text,
      options: question.options.map((label, index) => ({
        id: String(index),
        label,
      })),
      selectionMode: multiple ? "multiple" : "single",
      allowCustomAnswer: true,
      selectedOptionIds: selected,
      customAnswerText: customText,
      isCustomAnswerActive: customActive,
    },
    currentStepIndex: 0,
    totalSteps: 1,
    toggleOption: (id) => {
      setSelected((current) =>
        multiple
          ? current.includes(id)
            ? current.filter((item) => item !== id)
            : [...current, id]
          : current.includes(id)
            ? []
            : [id]
      )
      if (!multiple) setCustomActive(false)
    },
    confirm,
    cancel,
    skip: cancel,
    back: () => {},
    setCustomAnswerText: setCustomText,
    setCustomAnswerActive: setCustomActive,
    activateCustomAnswer: () => {
      setCustomActive(true)
      if (!multiple) setSelected([])
    },
  }
  return (
    <F0ClarifyingPanel
      clarifyingQuestion={state}
      isSubmitDisabled={loading}
    />
  )
}
