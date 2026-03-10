import { useCallback, useEffect, useRef, useState } from "react"

import type { TranslationKey } from "@/lib/providers/i18n/i18n-provider-defaults"

import type { SurveyFormBuilderElement } from "../../SurveyFormBuilder/types"
import type { SurveyAnsweringFormMode } from "../types"
import type { SurveyAnswers } from "../types"

const ERROR_NAVIGATE_CLASS = "f0-form-error-navigate"
const ANIMATION_DURATION = 600

const URL_PATTERN = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i

type ErrorTriggerMode = "on-blur" | "on-submit"

export type SurveyValidationErrors = Record<string, string>

function getErrorTriggerMode(mode: SurveyAnsweringFormMode): ErrorTriggerMode {
  return mode === "all-questions" ? "on-blur" : "on-submit"
}

function validateAnswer(
  questionId: string,
  questionType: string,
  required: boolean | undefined,
  answers: SurveyAnswers,
  t: (key: TranslationKey) => string
): string | undefined {
  const answer = answers[questionId]
  const value = answer?.value

  if (required) {
    if (value === null || value === undefined) {
      return t("forms.validation.required")
    }
    if (typeof value === "string" && value.trim() === "") {
      return t("forms.validation.required")
    }
    if (Array.isArray(value) && value.length === 0) {
      return t("forms.validation.required")
    }
  }

  if (questionType === "link" && value && typeof value === "string") {
    if (!URL_PATTERN.test(value)) {
      return t("surveyFormBuilder.answer.invalidUrl")
    }
  }

  return undefined
}

interface FlatValidationQuestion {
  id: string
  type: string
  required?: boolean
}

function extractValidationQuestions(
  elements: SurveyFormBuilderElement[]
): FlatValidationQuestion[] {
  const questions: FlatValidationQuestion[] = []
  for (const element of elements) {
    if (element.type === "section") {
      for (const q of element.section.questions ?? []) {
        questions.push({ id: q.id, type: q.type, required: q.required })
      }
    } else {
      questions.push({
        id: element.question.id,
        type: element.question.type,
        required: element.question.required,
      })
    }
  }
  return questions
}

function applyErrorHighlight(questionId: string) {
  const element = document.getElementById(`co-creation-question-${questionId}`)
  if (!element) return

  element.classList.remove(ERROR_NAVIGATE_CLASS)
  void element.offsetWidth
  element.classList.add(ERROR_NAVIGATE_CLASS)

  element.scrollIntoView({ behavior: "smooth", block: "center" })

  setTimeout(() => {
    element.classList.remove(ERROR_NAVIGATE_CLASS)
  }, ANIMATION_DURATION)
}

interface UseSurveyValidationOptions {
  mode: SurveyAnsweringFormMode
  elements: SurveyFormBuilderElement[]
  getAnswers: () => SurveyAnswers
  t: (key: TranslationKey) => string
}

interface UseSurveyValidationReturn {
  errors: SurveyValidationErrors
  hasErrors: boolean
  validateAll: () => boolean
  validateField: (questionId: string) => void
  onFieldBlur: (questionId: string) => void
  clearFieldError: (questionId: string) => void
}

export function useSurveyValidation({
  mode,
  elements,
  getAnswers,
  t,
}: UseSurveyValidationOptions): UseSurveyValidationReturn {
  const [errors, setErrors] = useState<SurveyValidationErrors>({})
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())
  const triggerMode = getErrorTriggerMode(mode)
  const hasSubmittedRef = useRef(false)

  const questions = extractValidationQuestions(elements)

  const validateField = useCallback(
    (questionId: string) => {
      const question = questions.find((q) => q.id === questionId)
      if (!question) return

      const answers = getAnswers()
      const error = validateAnswer(
        questionId,
        question.type,
        question.required,
        answers,
        t
      )

      setErrors((prev) => {
        if (error) {
          return { ...prev, [questionId]: error }
        }
        const { [questionId]: _, ...rest } = prev
        return rest
      })
    },
    [questions, getAnswers, t]
  )

  const onFieldBlur = useCallback(
    (questionId: string) => {
      setTouchedFields((prev) => {
        const next = new Set(prev)
        next.add(questionId)
        return next
      })

      if (triggerMode === "on-blur" || hasSubmittedRef.current) {
        validateField(questionId)
      }
    },
    [triggerMode, validateField]
  )

  const clearFieldError = useCallback((questionId: string) => {
    setErrors((prev) => {
      const { [questionId]: _, ...rest } = prev
      return rest
    })
  }, [])

  const validateAll = useCallback((): boolean => {
    hasSubmittedRef.current = true
    const answers = getAnswers()
    const newErrors: SurveyValidationErrors = {}

    for (const question of questions) {
      const error = validateAnswer(
        question.id,
        question.type,
        question.required,
        answers,
        t
      )
      if (error) {
        newErrors[question.id] = error
      }
    }

    setErrors(newErrors)

    const errorIds = Object.keys(newErrors)
    if (errorIds.length > 0) {
      applyErrorHighlight(errorIds[0])
      return false
    }

    return true
  }, [questions, getAnswers, t])

  // Re-validate touched fields when answers change (for on-blur mode)
  useEffect(() => {
    if (triggerMode !== "on-blur" && !hasSubmittedRef.current) return

    const fieldsToValidate = hasSubmittedRef.current
      ? questions.map((q) => q.id)
      : Array.from(touchedFields)

    if (fieldsToValidate.length === 0) return

    const answers = getAnswers()
    setErrors((prev) => {
      const next = { ...prev }
      let changed = false

      for (const questionId of fieldsToValidate) {
        const question = questions.find((q) => q.id === questionId)
        if (!question) continue

        const error = validateAnswer(
          questionId,
          question.type,
          question.required,
          answers,
          t
        )

        if (error && next[questionId] !== error) {
          next[questionId] = error
          changed = true
        } else if (!error && questionId in next) {
          delete next[questionId]
          changed = true
        }
      }

      return changed ? next : prev
    })
  }, [elements, triggerMode, touchedFields, questions, getAnswers, t])

  const hasErrors = Object.keys(errors).length > 0

  return {
    errors,
    hasErrors,
    validateAll,
    validateField,
    onFieldBlur,
    clearFieldError,
  }
}
