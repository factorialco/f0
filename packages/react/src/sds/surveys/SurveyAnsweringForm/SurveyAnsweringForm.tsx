import { useCallback, useState } from "react"

import { F0Dialog } from "@/components/F0Dialog"
import type { DialogPosition } from "@/components/F0Dialog/types"
import { useI18n } from "@/lib/providers/i18n"

import { ArrowLeft, ArrowRight, Maximize, Minimize } from "@/icons/app"
import { SurveyFormBuilderProvider } from "../SurveyFormBuilder/Context"
import { TableOfContent } from "../SurveyFormBuilder/Form/TableOfContent"
import { AllQuestionsView } from "./components/AllQuestionsView"
import { SteppedView } from "./components/SteppedView"
import { useStepper } from "./hooks/useStepper"
import { useSurveyForm } from "./hooks/useSurveyForm"
import type { SurveyAnsweringFormProps, SurveyFormSubmitResult } from "./types"

export function SurveyAnsweringForm({
  elements,
  onSubmit,
  mode,
  title,
  isOpen,
  onClose,
  fullscreen: fullscreenProp = false,
  allowToChangeFullscreen = false,
  defaultValues,
}: SurveyAnsweringFormProps) {
  const { t } = useI18n()
  const [isFullscreen, setIsFullscreen] = useState(fullscreenProp)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { currentElements, setCurrentElements, flatQuestions, getAnswers } =
    useSurveyForm(elements, defaultValues)
  const stepper = useStepper(flatQuestions)

  const position: DialogPosition = isFullscreen ? "fullscreen" : "center"
  const showTableOfContent = mode === "all-questions"

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true)
    try {
      const answers = getAnswers()
      const plainAnswers: Record<
        string,
        string | number | string[] | Date | null
      > = {}
      for (const [key, answer] of Object.entries(answers)) {
        plainAnswers[key] = answer.value
      }
      const result: SurveyFormSubmitResult = await onSubmit(plainAnswers)
      if (result.success) {
        onClose()
      }
    } finally {
      setIsSubmitting(false)
    }
  }, [getAnswers, onSubmit, onClose])

  const isCurrentStepValid = useCallback(() => {
    if (mode !== "stepped" || !stepper.currentQuestion) return true
    if (!stepper.currentQuestion.required) return true
    const answers = getAnswers()
    const answer = answers[stepper.currentQuestion.id]
    if (!answer) return false
    const { value } = answer
    if (value === null || value === undefined) return false
    if (Array.isArray(value) && value.length === 0) return false
    return true
  }, [mode, stepper.currentQuestion, getAnswers])

  const handleNext = useCallback(() => {
    if (isCurrentStepValid()) {
      stepper.goToNext()
    }
  }, [isCurrentStepValid, stepper])

  const otherActions = allowToChangeFullscreen
    ? [
        {
          label: isFullscreen
            ? t("surveyAnsweringForm.actions.collapse")
            : t("surveyAnsweringForm.actions.expand"),
          icon: isFullscreen ? Minimize : Maximize,
          onClick: () => setIsFullscreen((prev) => !prev),
        },
      ]
    : undefined

  const primaryAction =
    mode === "stepped" && !stepper.isLastStep
      ? {
          label: t("surveyAnsweringForm.actions.next"),
          onClick: handleNext,
          icon: ArrowRight,
          disabled: !isCurrentStepValid(),
        }
      : {
          label: t("surveyAnsweringForm.actions.submit"),
          onClick: handleSubmit,
          disabled: isSubmitting,
          loading: isSubmitting,
        }

  const secondaryAction =
    mode === "stepped" && !stepper.isFirstStep
      ? {
          label: t("surveyAnsweringForm.actions.previous"),
          onClick: stepper.goToPrevious,
          icon: ArrowLeft,
        }
      : undefined

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      position={position}
      width="xl"
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      otherActions={otherActions}
    >
      <SurveyFormBuilderProvider
        answering
        elements={currentElements}
        onChange={setCurrentElements}
      >
        <div className="relative flex h-full flex-col">
          {showTableOfContent && (
            <TableOfContent
              elements={currentElements}
              onChange={setCurrentElements}
            />
          )}
          <div className="flex flex-col h-full max-w-[750px] mx-auto py-12 justify-center">
            {mode === "all-questions" ? (
              <AllQuestionsView elements={currentElements} />
            ) : stepper.currentQuestion ? (
              <SteppedView
                elements={currentElements}
                currentQuestion={stepper.currentQuestion}
                progress={stepper.progress}
              />
            ) : null}
          </div>
        </div>
      </SurveyFormBuilderProvider>
    </F0Dialog>
  )
}
