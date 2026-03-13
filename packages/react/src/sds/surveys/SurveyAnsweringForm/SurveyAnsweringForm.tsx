import { useCallback, useRef, useState, useMemo } from "react"

import type { DialogPosition } from "@/components/F0Dialog/types"
import type { F0FormSubmitResult } from "@/components/F0Form/types"

import { F0Box } from "@/components/F0Box"
import { F0Dialog } from "@/components/F0Dialog"
import { F0Form } from "@/components/F0Form/F0Form"
import { useF0Form } from "@/components/F0Form/useF0Form"
import { OneEmptyState } from "@/experimental/OneEmptyState"
import { ArrowLeft, ArrowRight, Maximize, Minimize } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ProgressBarCell } from "@/ui/value-display/types/progressBar"

import type { SurveyAnsweringFormProps, SurveySubmitAnswers } from "./types"

import { SurveyFormBuilderProvider } from "../SurveyFormBuilder/Context"
import { TableOfContent } from "../SurveyFormBuilder/Form/TableOfContent"
import {
  SurveyAllQuestionsLoadingSkeleton,
  SurveySteppedLoadingSkeleton,
} from "./components/skeletons/SurveyAnsweringFormLoadingSkeletons"
import { useStepper } from "./hooks/useStepper"
import {
  extractFlatQuestions,
  useSurveyFormSchema,
} from "./hooks/useSurveyFormSchema"

const noop = () => {}

export function SurveyAnsweringForm({
  elements,
  onSubmit: onSubmitProp,
  mode,
  title,
  isOpen,
  onClose,
  position: positionProp = "center",
  allowToChangeFullscreen = false,
  defaultValues,
  errorTriggerMode = "on-blur",
  loading = false,
  labels,
  preview = false,
}: SurveyAnsweringFormProps) {
  const { t } = useI18n()
  const initialIsFullscreen = positionProp === "fullscreen"
  const nonFullscreenPosition =
    positionProp === "fullscreen" ? "center" : positionProp
  const [isFullscreen, setIsFullscreen] = useState(initialIsFullscreen)

  const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

  const accumulatedValuesRef = useRef<Record<string, unknown>>({})

  const flatQuestions = useMemo(
    () => extractFlatQuestions(elements),
    [elements]
  )

  const stepper = useStepper(flatQuestions)
  const hasQuestions = flatQuestions.length > 0

  const emptyLabels = {
    title: labels?.empty?.title ?? t("surveyAnsweringForm.labels.empty.title"),
    description:
      labels?.empty?.description ??
      t("surveyAnsweringForm.labels.empty.description"),
    emoji: labels?.empty?.emoji ?? t("surveyAnsweringForm.labels.empty.emoji"),
  }

  const isStepped = mode === "stepped"
  const hasPreviewDefaultValues =
    preview && !!defaultValues && Object.keys(defaultValues).length > 0
  const isReadonlyPreview = hasPreviewDefaultValues
  const isEditablePreview = preview && !isReadonlyPreview
  const currentQuestionId = isStepped ? stepper.currentQuestion?.id : undefined

  const {
    schema,
    defaultValues: formDefaultValues,
    sections,
  } = useSurveyFormSchema(
    elements,
    mode,
    t,
    defaultValues,
    currentQuestionId,
    isStepped ? accumulatedValuesRef.current : undefined,
    preview,
    isReadonlyPreview
  )

  const position: DialogPosition = isFullscreen
    ? "fullscreen"
    : nonFullscreenPosition
  const dialogWidth = position === "center" ? "xl" : undefined

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleClose = useCallback(
    (delay: number) => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
      closeTimerRef.current = setTimeout(() => {
        closeTimerRef.current = null
        onClose()
      }, delay)
    },
    [onClose]
  )

  const handleF0Submit = useCallback(
    async (data: Record<string, unknown>): Promise<F0FormSubmitResult> => {
      if (preview) {
        return { success: true }
      }
      if (!onSubmitProp) {
        throw new Error("onSubmit is required when preview is false")
      }

      if (isStepped && !stepper.isLastStep) {
        accumulatedValuesRef.current = {
          ...accumulatedValuesRef.current,
          ...data,
        }
        stepper.goToNext()
        return { success: true }
      }

      const allData = isStepped
        ? { ...accumulatedValuesRef.current, ...data }
        : data

      const submitData: SurveySubmitAnswers = {}
      for (const [key, val] of Object.entries(allData)) {
        submitData[key] = (val === undefined ? null : val) as
          | string
          | number
          | string[]
          | Date
          | null
      }
      if (isStepped) {
        stepper.setProgress(100)
        const [result] = await Promise.all([
          onSubmitProp(submitData),
          new Promise((r) => setTimeout(r, 1000)),
        ])
        if (result.success) {
          scheduleClose(result.message ? 1000 : 0)
          return { success: true, message: result.message }
        }
        stepper.setProgress(null)
        return { success: false, errors: result.errors }
      }

      const result = await onSubmitProp(submitData)
      if (result.success) {
        scheduleClose(result.message ? 1000 : 0)
        return { success: true, message: result.message }
      }
      return { success: false, errors: result.errors }
    },
    [
      onSubmitProp,
      preview,
      scheduleClose,
      isStepped,
      stepper.isLastStep,
      stepper.goToNext,
      stepper.setProgress,
    ]
  )

  const handleSubmit = useCallback(async () => {
    try {
      await submit()
    } catch {
      // Validation failed — F0Form shows errors
    }
  }, [submit])

  const handlePrevious = useCallback(() => {
    const values = formRef.current?.getValues() ?? {}
    accumulatedValuesRef.current = {
      ...accumulatedValuesRef.current,
      ...values,
    }
    stepper.goToPrevious()
  }, [formRef, stepper.goToPrevious])

  const otherActions =
    allowToChangeFullscreen && !loading
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

  const primaryAction = hasQuestions
    ? loading
      ? undefined
      : isReadonlyPreview
        ? undefined
        : isEditablePreview
          ? isStepped && !stepper.isLastStep
            ? {
                label: t("surveyAnsweringForm.actions.next"),
                onClick: stepper.goToNext,
                icon: ArrowRight,
              }
            : {
                label: t("surveyAnsweringForm.actions.submit"),
                onClick: noop,
                disabled: true,
              }
          : isStepped && !stepper.isLastStep
            ? {
                label: t("surveyAnsweringForm.actions.next"),
                onClick: handleSubmit,
                icon: ArrowRight,
              }
            : {
                label: t("surveyAnsweringForm.actions.submit"),
                onClick: handleSubmit,
                disabled: isSubmitting || hasErrors,
                loading: isSubmitting,
              }
    : undefined

  const secondaryAction = hasQuestions
    ? loading
      ? undefined
      : isReadonlyPreview
        ? undefined
        : isStepped && !stepper.isFirstStep
          ? {
              label: t("surveyAnsweringForm.actions.previous"),
              onClick: handlePrevious,
              icon: ArrowLeft,
            }
          : undefined
    : undefined

  const showTableOfContent =
    mode === "all-questions" && hasQuestions && !loading

  const showStepperProgress = isStepped && hasQuestions && !loading

  const showSectionHeader =
    isStepped && !!stepper.currentQuestion?.sectionTitle && !loading

  const shouldCenterContent = (!hasQuestions && !loading) || isStepped

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      position={position}
      width={dialogWidth}
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      otherActions={otherActions}
      disableContentPadding
    >
      <SurveyFormBuilderProvider answering elements={elements} onChange={noop}>
        <div
          className={cn(
            "relative flex min-h-full flex-col @container",
            isStepped && !isFullscreen && "min-h-[600px]",
            shouldCenterContent && "h-full"
          )}
        >
          {showTableOfContent && (
            <TableOfContent elements={elements} onChange={noop} answering />
          )}
          {showStepperProgress && (
            <div className="absolute left-0 right-0 top-0 [&>div>div>div]:h-1 [&>div>div>div]:rounded-none">
              <ProgressBarCell
                label="Value"
                value={stepper.progress}
                hideLabel
              />
            </div>
          )}
          <div
            className={cn(
              "mx-auto flex w-full flex-col px-4 py-12 @lg:w-[750px] max-w-full",
              mode === "all-questions" && !shouldCenterContent
                ? "justify-start"
                : "flex-1 justify-center"
            )}
          >
            {loading ? (
              mode === "stepped" ? (
                <SurveySteppedLoadingSkeleton />
              ) : (
                <SurveyAllQuestionsLoadingSkeleton />
              )
            ) : !hasQuestions ? (
              <F0Box
                display="flex"
                flexDirection="column"
                height="full"
                justifyContent="center"
                alignItems="center"
                paddingX="lg"
              >
                <OneEmptyState
                  emoji={emptyLabels.emoji}
                  title={emptyLabels.title}
                  description={emptyLabels.description}
                />
              </F0Box>
            ) : null}
            {showSectionHeader && (
              <div className="py-1 pl-5">
                <span className="text-lg font-semibold text-f1-foreground">
                  {stepper.currentQuestion?.sectionTitle}
                </span>
                {stepper.currentQuestion?.sectionDescription && (
                  <p className="text-f1-foreground-secondary">
                    {stepper.currentQuestion?.sectionDescription}
                  </p>
                )}
              </div>
            )}
            {hasQuestions && !loading && (
              <F0Form
                key={isStepped ? stepper.currentStep : undefined}
                formRef={formRef}
                name="survey-answering"
                schema={schema}
                defaultValues={formDefaultValues}
                onSubmit={handleF0Submit}
                submitConfig={{
                  hideSubmitButton: true,
                }}
                errorTriggerMode={errorTriggerMode}
                sections={sections}
              />
            )}
          </div>
        </div>
      </SurveyFormBuilderProvider>
    </F0Dialog>
  )
}
