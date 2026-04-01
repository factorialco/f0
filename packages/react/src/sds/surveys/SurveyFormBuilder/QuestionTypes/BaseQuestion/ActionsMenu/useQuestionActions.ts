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
  disallowOptionalQuestions: boolean | undefined
  canDelete: boolean
  handleChangeRequired: (checked: boolean) => void
  handleSelectQuestionType: (type: QuestionType) => void
  handleSelectRatingType: (type: RatingOptionType) => void
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
      const hasDatasetKey =
        !!question &&
        "datasetKey" in question &&
        typeof question.datasetKey === "string"
      const filteredQuestionTypes = hasDatasetKey
        ? (() => {
            const datasetOption = questionTypes.find(
              (item) =>
                item.questionType === "dropdown-single" &&
                item.datasetKey === question?.datasetKey
            )
            if (!datasetOption) {
              return []
            }
            return [
              datasetOption,
              {
                ...datasetOption,
                questionType: "dropdown-multi" as const,
                label: `${datasetOption.label} (multiple)`,
              },
            ]
          })()
        : questionTypes.filter((item) => !item.datasetKey)
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

      const handleSelectQuestionType = (newType: QuestionType) => {
        const shouldKeepDatasetKey =
          hasDatasetKey &&
          (newType === "dropdown-single" || newType === "dropdown-multi")
        const resetParams = shouldResetParamsOnTypeChange(
          newType,
          questionType,
          question as { options?: unknown } | undefined
        )
        onQuestionChange?.({
          id: questionId,
          type: newType,
          ...(shouldKeepDatasetKey ? { datasetKey: question?.datasetKey } : {}),
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

      const handleDuplicate = () => {
        onDuplicateElement?.({ elementId: questionId, type: questionType })
      }

      const handleDelete = () => {
        deleteElement(questionId)
      }

      return {
        question,
        questionTypes: filteredQuestionTypes,
        currentRatingType,
        disallowOptionalQuestions,
        canDelete,
        handleChangeRequired,
        handleSelectQuestionType,
        handleSelectRatingType,
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
