import { useCallback, useRef, useState } from "react"

import type { DialogPosition } from "@/components/F0Dialog/types"
import type { F0FormSubmitResult } from "@/components/F0Form/types"

import { F0Dialog } from "@/components/F0Dialog"
import { F0Form } from "@/components/F0Form/F0Form"
import { useF0Form } from "@/components/F0Form/useF0Form"
import { ArrowLeft, ArrowRight, Maximize, Minimize } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { ProgressBarCell } from "@/ui/value-display/types/progressBar"

import type { SurveyAnsweringFormProps, SurveySubmitAnswers } from "./types"

import { SurveyFormBuilderProvider } from "../SurveyFormBuilder/Context"
import { TableOfContent } from "../SurveyFormBuilder/Form/TableOfContent"
import { useStepper } from "./hooks/useStepper"
import { useSurveyFormSchema } from "./hooks/useSurveyFormSchema"

const noop = () => {}

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

  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  const visibleQuestionIdRef = useRef<string | undefined>(undefined)

  const {
    schema,
    defaultValues: formDefaultValues,
    flatQuestions,
    sections,
  } = useSurveyFormSchema(
    elements,
    mode,
    t,
    defaultValues,
    visibleQuestionIdRef
  )

  const stepper = useStepper(flatQuestions)
  visibleQuestionIdRef.current = stepper.currentQuestion?.id

  const position: DialogPosition = isFullscreen ? "fullscreen" : "center"

  const handleF0Submit = useCallback(
    async (data: Record<string, unknown>): Promise<F0FormSubmitResult> => {
      const submitData: SurveySubmitAnswers = {}
      for (const [key, val] of Object.entries(data)) {
        submitData[key] = (val === undefined ? null : val) as
          | string
          | number
          | string[]
          | Date
          | null
      }
      const result = await onSubmit(submitData)
      if (result.success) {
        onClose()
        return { success: true }
      }
      return { success: false, errors: result.errors }
    },
    [onSubmit, onClose]
  )

  const isCurrentStepValid = useCallback(() => {
    if (mode !== "stepped" || !stepper.currentQuestion) return true
    if (!stepper.currentQuestion.required) return true
    const values = formRef.current?.getValues() ?? {}
    const value = values[stepper.currentQuestion.id]
    if (value === null || value === undefined) return false
    if (Array.isArray(value) && value.length === 0) return false
    if (typeof value === "string" && value.trim() === "") return false
    return true
  }, [mode, stepper.currentQuestion, formRef])

  const handleNext = useCallback(() => {
    if (!isCurrentStepValid()) return
    stepper.goToNext()
  }, [isCurrentStepValid, stepper])

  const handleSubmit = useCallback(async () => {
    try {
      await submit()
    } catch {
      // Validation failed — F0Form shows errors
    }
  }, [submit])

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
          disabled: isSubmitting || hasErrors,
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

  const showTableOfContent = mode === "all-questions"
  const isStepped = mode === "stepped"

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
      disableContentPadding
    >
      <SurveyFormBuilderProvider answering elements={elements} onChange={noop}>
        <div className="relative flex h-full flex-col">
          {showTableOfContent && (
            <TableOfContent elements={elements} onChange={noop} answering />
          )}
          {isStepped && (
            <div className="absolute left-0 right-0 top-0 [&>div>div>div]:h-1 [&>div>div>div]:rounded-none">
              <ProgressBarCell
                label="Value"
                value={stepper.progress}
                hideLabel
              />
            </div>
          )}
          <div className="mx-auto flex w-full flex-col justify-center px-4 py-12 md:w-[750px]">
            {isStepped && stepper.currentQuestion?.sectionTitle && (
              <div className="py-1 pl-5">
                <span className="text-lg font-semibold text-f1-foreground">
                  {stepper.currentQuestion.sectionTitle}
                </span>
                {stepper.currentQuestion.sectionDescription && (
                  <p className="text-f1-foreground-secondary">
                    {stepper.currentQuestion.sectionDescription}
                  </p>
                )}
              </div>
            )}
            <F0Form
              formRef={formRef}
              name="survey-answering"
              schema={schema}
              defaultValues={formDefaultValues}
              onSubmit={handleF0Submit}
              submitConfig={{ hideSubmitButton: true, hideActionBar: true }}
              errorTriggerMode={
                mode === "all-questions" ? "on-blur" : "on-submit"
              }
              sections={sections}
            />
          </div>
        </div>
      </SurveyFormBuilderProvider>
    </F0Dialog>
  )
}
