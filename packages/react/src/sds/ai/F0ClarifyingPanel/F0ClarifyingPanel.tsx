import { AnimatePresence, motion } from "motion/react"
import { useRef } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"

import type { ClarifyingQuestionState } from "./types"

import { ConfirmFooter } from "./components/ConfirmFooter"
import { OptionsList } from "./components/OptionsList"
import { StepHeader } from "./components/StepHeader"

// One easing / duration shared by every animation in the panel.
const EASE = "easeOut" as const
const DURATION = 0.3

interface F0ClarifyingPanelProps {
  clarifyingQuestion: ClarifyingQuestionState
}

/**
 * Animated wrapper that mounts/unmounts the clarifying question panel.
 *
 * Uses Motion's native `height: "auto"` support — it measures the
 * content internally, so the same transition covers the initial
 * appearance, step changes with a different number of options, and
 * dismissal. No manual ResizeObserver.
 *
 * Props-driven: the entire panel state (current step, navigation,
 * callbacks) lives in `clarifyingQuestion`. No coupling to `useAiChat`
 * — embedders can construct a state object themselves.
 */
export const F0ClarifyingPanel = ({
  clarifyingQuestion,
}: F0ClarifyingPanelProps) => {
  const shouldReduceMotion = useReducedMotion()
  const duration = shouldReduceMotion ? 0 : DURATION

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration, ease: EASE }}
      className="overflow-hidden"
    >
      <F0ClarifyingPanelContent clarifyingQuestion={clarifyingQuestion} />
    </motion.div>
  )
}

const F0ClarifyingPanelContent = ({
  clarifyingQuestion,
}: F0ClarifyingPanelProps) => {
  const translation = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const {
    currentStep,
    currentStepIndex,
    totalSteps,
    toggleOption,
    confirm,
    skip,
    cancel,
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

  // In single-select mode, auto-advance on selection when this is not the
  // last step — avoids requiring an explicit "Next" click. Only advance when
  // the toggle results in a selection (not a deselect).
  const handleToggleOption = (optionId: string) => {
    const isDeselecting =
      mode === "single" && selectedOptionIds.includes(optionId)
    toggleOption(optionId)
    if (mode === "single" && !isFinalStep && !isDeselecting) {
      // Defer confirm() until after toggleOption's synchronous work completes.
      Promise.resolve().then(confirm)
    }
  }

  const confirmButtonLabel = isFinalStep
    ? translation.ai.clarifyingQuestion.submit
    : translation.ai.clarifyingQuestion.next

  const showSkip =
    optional === true &&
    !hasSelection &&
    !(isCustomAnswerActive && hasCustomText)

  const handleActivateCustom = () => {
    activateCustomAnswer()
    requestAnimationFrame(() => {
      customInputRef.current?.focus()
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Escape always cancels the whole flow — this is independent of
    // `optional`, which only controls whether the current step can be
    // individually skipped (via the Skip button or the skip handler).
    // Cancelling closes the panel and marks the tool call as
    // resolved-but-not-completed, regardless of which step we're on.
    if (e.key === "Escape") {
      e.preventDefault()
      cancel()
    }
  }

  const fadeDuration = shouldReduceMotion ? 0 : DURATION / 2

  return (
    <div className="flex flex-col" onKeyDown={handleKeyDown}>
      <div className="flex flex-col gap-3 pt-3">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentStepIndex}
            className="flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration, ease: EASE }}
          >
            <StepHeader
              question={question}
              stepLabel={stepLabel}
              isFirstStep={isFirstStep}
              isFinalStep={isFinalStep}
              canProceed={canProceed}
              onBack={back}
              onNext={confirm}
              onCancel={cancel}
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
              onToggleOption={handleToggleOption}
              onActivateCustom={handleActivateCustom}
              onChangeCustomText={setCustomAnswerText}
              onToggleCustomActive={setCustomAnswerActive}
              onConfirm={confirm}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <ConfirmFooter
        canProceed={canProceed}
        label={confirmButtonLabel}
        onConfirm={confirm}
        onSkip={skip}
        showSkip={showSkip}
      />
    </div>
  )
}
