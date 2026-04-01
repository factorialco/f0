import { useCallback, useMemo } from "react"

import { useQuestionTypes } from "../../../constants"
import { useSurveyFormBuilderContext } from "../../../Context"
import {
  detectRatingOptionType,
  getDefaultParamsForQuestionType,
  getRatingOptions,
  RatingOptionType,
} from "../../../lib"
import { SurveyFormBuilderCallbacks, QuestionType } from "../../../types"

export const RATING_OPTIONS: { label: string; value: RatingOptionType }[] = [
  { label: "1 - 5", value: "1-5" },
  { label: "1 - 10", value: "1-10" },
  { label: "Emojis", value: "emojis" },
]

/**
 * Detects the current rating option type from a question's options.
 * Extracted as a pure function for testability.
 */
export function getCurrentRatingType(
  questionType: QuestionType,
  question: { type: string; options?: unknown } | undefined
): RatingOptionType | null {
  if (questionType !== "rating" || !question || question.type !== "rating") {
    return null
  }
  const opts = (question as { options?: unknown }).options
  if (
    !Array.isArray(opts) ||
    opts.length === 0 ||
    typeof opts[0]?.value !== "number"
  ) {
    return null
  }
  return detectRatingOptionType(opts as { value: number; label: string }[])
}

/**
 * Determines whether changing to a new question type requires resetting
 * the question's params (options, value, etc.).
 */
export function shouldResetParamsOnTypeChange(
  newType: QuestionType,
  currentType: QuestionType,
  question: { options?: unknown } | undefined
): boolean {
  if (newType === currentType) return false

  // Keep existing options when switching between select and multi-select
  // if the question already has options
  if (
    (newType === "select" || newType === "multi-select") &&
    question &&
    "options" in question &&
    Array.isArray(question.options) &&
    question.options.length > 0
  ) {
    return false
  }

  if (
    (newType === "dropdown-single" || newType === "dropdown-multi") &&
    (currentType === "dropdown-single" || currentType === "dropdown-multi")
  ) {
    return false
  }

  return true
}

export type QuestionActions = {
  question: ReturnType<
    ReturnType<typeof useSurveyFormBuilderContext>["getQuestionById"]
  >
  questionTypes: ReturnType<typeof useQuestionTypes>
  currentRatingType: RatingOptionType | null
  currentDatasetKey: string | undefined
  isMultiSelectEnabled: boolean
  disallowOptionalQuestions: boolean | undefined
  canDelete: boolean
  handleChangeRequired: (checked: boolean) => void
  handleSelectQuestionType: (type: QuestionType, datasetKey?: string) => void
  handleSelectRatingType: (type: RatingOptionType) => void
  handleToggleMultiSelect: (enabled: boolean) => void
  handleDuplicate: () => void
  handleDelete: () => void
}

/**
 * Returns a factory function that builds question actions for any question.
 * Use this when you need actions for multiple questions (e.g. in a loop).
 * For a single question, prefer `useQuestionActions` instead.
 */
export function useQuestionActionsFactory() {
  const {
    onQuestionChange,
    getQuestionById,
    deleteElement,
    onDuplicateElement,
    disallowOptionalQuestions,
  } = useSurveyFormBuilderContext()

  const questionTypes = useQuestionTypes()

  const getActionsForQuestion = useCallback(
    (
      questionId: string,
      questionType: QuestionType,
      canDelete: boolean
    ): QuestionActions => {
      const question = getQuestionById(questionId)
      const currentDatasetKey =
        question &&
        "datasetKey" in question &&
        typeof question.datasetKey === "string"
          ? (question as { datasetKey: string }).datasetKey
          : undefined
      const currentRatingType = getCurrentRatingType(questionType, question)

      const handleChangeRequired = (checked: boolean) => {
        onQuestionChange?.({
          id: questionId,
          type: questionType,
          required: checked,
        } as Parameters<
          NonNullable<SurveyFormBuilderCallbacks["onQuestionChange"]>
        >[0])
      }

      const handleSelectQuestionType = (
        newType: QuestionType,
        newDatasetKey?: string
      ) => {
        const resetParams = shouldResetParamsOnTypeChange(
          newType,
          questionType,
          question as { options?: unknown } | undefined
        )
        const isDropdown =
          newType === "dropdown-single" || newType === "dropdown-multi"
        const isSwitchingDropdownMode =
          isDropdown &&
          (questionType === "dropdown-single" ||
            questionType === "dropdown-multi") &&
          newType !== questionType
        onQuestionChange?.({
          id: questionId,
          type: newType,
          ...(isDropdown ? { datasetKey: newDatasetKey } : {}),
          // Reset value when switching between single and multi to avoid
          // a string value bleeding into multi-select (showing "1 selected")
          ...(isSwitchingDropdownMode
            ? { value: newType === "dropdown-multi" ? [] : null }
            : {}),
          ...(resetParams && {
            ...getDefaultParamsForQuestionType(newType),
          }),
        } as Parameters<
          NonNullable<SurveyFormBuilderCallbacks["onQuestionChange"]>
        >[0])
      }

      const handleSelectRatingType = (ratingType: RatingOptionType) => {
        onQuestionChange?.({
          id: questionId,
          type: "rating",
          value: 0,
          options: getRatingOptions(ratingType),
        } as Parameters<
          NonNullable<SurveyFormBuilderCallbacks["onQuestionChange"]>
        >[0])
      }

      const isMultiSelectEnabled =
        questionType === "dropdown-multi" && !!currentDatasetKey

      const handleToggleMultiSelect = (enabled: boolean) => {
        if (!currentDatasetKey) return
        const newType = enabled ? "dropdown-multi" : "dropdown-single"
        onQuestionChange?.({
          id: questionId,
          type: newType,
          datasetKey: currentDatasetKey,
          value: enabled ? [] : null,
        } as Parameters<
          NonNullable<SurveyFormBuilderCallbacks["onQuestionChange"]>
        >[0])
      }

      const handleDuplicate = () => {
        onDuplicateElement?.({ elementId: questionId, type: questionType })
      }

      const handleDelete = () => {
        deleteElement(questionId)
      }

      return {
        question,
        questionTypes,
        currentRatingType,
        currentDatasetKey,
        isMultiSelectEnabled,
        disallowOptionalQuestions,
        canDelete,
        handleChangeRequired,
        handleSelectQuestionType,
        handleSelectRatingType,
        handleToggleMultiSelect,
        handleDuplicate,
        handleDelete,
      }
    },
    [
      getQuestionById,
      onQuestionChange,
      deleteElement,
      onDuplicateElement,
      disallowOptionalQuestions,
      questionTypes,
    ]
  )

  return { getActionsForQuestion, questionTypes }
}

type UseQuestionActionsOptions = {
  questionId: string
  questionType: QuestionType
  canDelete?: boolean
}

export function useQuestionActions({
  questionId,
  questionType,
  canDelete = true,
}: UseQuestionActionsOptions) {
  const { getActionsForQuestion } = useQuestionActionsFactory()

  return useMemo(
    () => getActionsForQuestion(questionId, questionType, canDelete),
    [getActionsForQuestion, questionId, questionType, canDelete]
  )
}
