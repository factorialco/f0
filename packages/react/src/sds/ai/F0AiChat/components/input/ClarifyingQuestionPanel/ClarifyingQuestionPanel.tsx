import { motion } from "motion/react"
import { useRef } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"

import type { ClarifyingQuestionState } from "../../../actions/core/clarifyingQuestion/types"

import { ConfirmFooter } from "./ConfirmFooter"
import { OptionsList } from "./OptionsList"
import { StepHeader } from "./StepHeader"

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

interface ClarifyingQuestionPanelProps {
  clarifyingQuestion: ClarifyingQuestionState
}

// ---------------------------------------------------------------------------
// Public entry point
// ---------------------------------------------------------------------------

/**
 * Animated wrapper that mounts/unmounts the clarifying question panel.
 * Handles the height + opacity transition via Framer Motion.
 */
export const ClarifyingQuestionPanel = ({
  clarifyingQuestion,
}: ClarifyingQuestionPanelProps) => {
  const shouldReduceMotion = useReducedMotion()
  const animationDuration = shouldReduceMotion ? 0 : 0.25

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: animationDuration, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <ClarifyingQuestionContent clarifyingQuestion={clarifyingQuestion} />
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// ClarifyingQuestionContent — orchestrates state and composes sub-components
// ---------------------------------------------------------------------------

const ClarifyingQuestionContent = ({
  clarifyingQuestion,
}: ClarifyingQuestionPanelProps) => {
  const translation = useI18n()
  const {
    currentStep,
    currentStepIndex,
    totalSteps,
    toggleOption,
    confirm,
    back,
    setCustomAnswerText,
    setCustomAnswerActive,
    activateCustomAnswer,
  } = clarifyingQuestion

  const {
    question,
    options,
    selectedOptionIds,
    selectionMode,
    optional,
    allowCustomAnswer,
    customAnswerText,
    isCustomAnswerActive,
  } = currentStep

  const customInputRef = useRef<HTMLInputElement>(null)

  const mode = selectionMode ?? "single"
  const isMultiStep = totalSteps > 1
  const isFirstStep = currentStepIndex === 0
  const isFinalStep = currentStepIndex === totalSteps - 1
  const stepLabel = isMultiStep
    ? translation.t("ai.clarifyingQuestion.stepOf", {
        current: String(currentStepIndex + 1),
        total: String(totalSteps),
      })
    : undefined

  const hasSelection = selectedOptionIds.length > 0
  const hasCustomText = (customAnswerText ?? "").trim().length > 0
  const canProceed =
    hasSelection || (isCustomAnswerActive && hasCustomText) || optional === true

  const confirmButtonLabel = isFinalStep
    ? translation.ai.clarifyingQuestion.submit
    : translation.ai.clarifyingQuestion.next

  const handleActivateCustom = () => {
    activateCustomAnswer()
    requestAnimationFrame(() => {
      customInputRef.current?.focus()
    })
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 pt-4">
        <StepHeader
          question={question}
          stepLabel={stepLabel}
          isFirstStep={isFirstStep}
          isFinalStep={isFinalStep}
          canProceed={canProceed}
          onBack={back}
          onNext={confirm}
        />

        <OptionsList
          mode={mode}
          question={question}
          options={options}
          selectedOptionIds={selectedOptionIds}
          allowCustomAnswer={allowCustomAnswer}
          hasSelection={hasSelection}
          hasCustomText={hasCustomText}
          customAnswerText={customAnswerText}
          isCustomAnswerActive={isCustomAnswerActive}
          canProceed={canProceed}
          customInputRef={customInputRef}
          onToggleOption={toggleOption}
          onActivateCustom={handleActivateCustom}
          onChangeCustomText={setCustomAnswerText}
          onToggleCustomActive={setCustomAnswerActive}
          onConfirm={confirm}
        />
      </div>

      <ConfirmFooter
        canProceed={canProceed}
        label={confirmButtonLabel}
        onConfirm={confirm}
        isFinalStep={isFinalStep}
      />
    </div>
  )
}
