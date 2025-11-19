import { useI18n } from "@/lib/providers/i18n"
import flatten from "lodash/flatten"
import React, { createContext, useCallback, useContext, useMemo } from "react"
import { getDefaultParamsForQuestionType } from "./lib"
import {
  CoCreationFormCallbacks,
  CoCreationFormElement,
  QuestionElement,
  SectionElement,
} from "./types"

type CoCreationFormContextType = CoCreationFormCallbacks & {
  isEditMode?: boolean
  getQuestionById: (questionId: string) => QuestionElement | undefined
  deleteElement: (elementId: string) => void
}

const CoCreationFormContext = createContext<
  CoCreationFormContextType | undefined
>(undefined)

export function CoCreationFormProvider({
  elements,
  children,
  isEditMode,
  onChange,
}: {
  children: React.ReactNode
  isEditMode?: boolean
  elements: CoCreationFormElement[]
  onChange: (elements: CoCreationFormElement[]) => void
}) {
  const { t } = useI18n()

  const handleQuestionChange = useCallback<
    NonNullable<CoCreationFormCallbacks["onQuestionChange"]>
  >(
    (params) => {
      const questionId = params.id

      const newElements = elements.map((element) => {
        if (element.type === "question") {
          if (element.question.id === questionId) {
            return {
              ...element,
              question: {
                ...element.question,
                ...params,
              } as QuestionElement,
            }
          }

          return element
        }

        if (element.type === "section") {
          const newNestedQuestions = element.section.questions?.map(
            (question) => {
              if (question.id === questionId) {
                return {
                  ...question,
                  ...params,
                } as QuestionElement
              }

              return question
            }
          )

          return {
            ...element,
            section: {
              ...element.section,
              questions: newNestedQuestions,
            },
          }
        }

        return element
      })

      onChange(newElements)
    },
    [elements, onChange]
  )

  const handleSectionChange = useCallback<
    NonNullable<CoCreationFormCallbacks["onSectionChange"]>
  >(
    (params) => {
      const sectionId = params.id

      const newElements = elements.map((element) => {
        if (element.type === "section" && element.section.id === sectionId) {
          return {
            ...element,
            section: {
              ...element.section,
              ...params,
            } as SectionElement,
          }
        }
        return element
      })

      onChange(newElements)
    },
    [elements, onChange]
  )

  const handleAddNewElement = useCallback<
    NonNullable<CoCreationFormCallbacks["onAddNewElement"]>
  >(
    ({ type, afterId }) => {
      const newElements = [...elements]

      const newElementId = `new-${type}-${Date.now()}`

      const newElement: CoCreationFormElement =
        type === "section"
          ? {
              type: "section" as const,
              section: {
                id: newElementId,
                title: t("coCreationForm.defaults.newSection"),
                questions: [],
              },
            }
          : {
              type: "question" as const,
              question: {
                id: newElementId,
                title: t("coCreationForm.defaults.newQuestion"),
                type,
                ...getDefaultParamsForQuestionType(type),
              } as QuestionElement,
            }

      // if adding a new section, it can only be added on the first level
      if (type === "section") {
        newElements.forEach((element, index) => {
          if (element.type === "section" && element.section.id === afterId) {
            newElements.splice(index + 1, 0, newElement)
          }
          if (element.type === "question" && element.question.id === afterId) {
            newElements.splice(index + 1, 0, newElement)
          }
        })
      } else {
        newElements.forEach((element, index) => {
          if (element.type === "section") {
            if (element.section.id === afterId) {
              newElements.splice(index + 1, 0, newElement)
            } else {
              const newQuestions = element.section.questions ?? []
              // In this branch, type !== "section", so newElement must be a question
              const questionElement = (
                newElement as { type: "question"; question: QuestionElement }
              ).question
              newQuestions?.forEach((question, questionIndex) => {
                if (question.id === afterId) {
                  newQuestions.splice(questionIndex + 1, 0, questionElement)
                }
              })
              newElements.splice(index + 1, 0, {
                ...element,
                section: {
                  ...element.section,
                  questions: newQuestions,
                },
              })
            }
          }
          if (element.type === "question" && element.question.id === afterId) {
            newElements.splice(index + 1, 0, newElement)
          }
        })
      }

      onChange(newElements)
    },
    [elements, onChange, t]
  )

  const callbacks: CoCreationFormCallbacks = useMemo(
    () => ({
      onQuestionChange: handleQuestionChange,
      onSectionChange: handleSectionChange,
      onAddNewElement: handleAddNewElement,
    }),
    [handleQuestionChange, handleSectionChange, handleAddNewElement]
  )

  const getQuestionById = useCallback(
    (questionId: string) => {
      const questions = flatten(
        elements.map((element) =>
          element.type === "question"
            ? [element.question]
            : element.section.questions
        )
      )
      return questions.find((question) => question?.id === questionId)
    },
    [elements]
  ) as (questionId: string) => QuestionElement | undefined

  const deleteElement = useCallback(
    (elementId: string) => {
      let newElements = elements.filter((element) => {
        if (element.type === "section") {
          return element.section.id !== elementId
        }
        if (element.type === "question") {
          return element.question.id !== elementId
        }
        return true
      })

      if (newElements.length === elements.length) {
        newElements = newElements.map((element) => {
          if (element.type === "section") {
            return {
              ...element,
              section: {
                ...element.section,
                questions: element.section.questions?.filter(
                  (question) => question.id !== elementId
                ),
              },
            }
          }
          return element
        })
      }

      onChange(newElements)
    },
    [elements, onChange]
  )

  return (
    <CoCreationFormContext.Provider
      value={{ ...callbacks, isEditMode, getQuestionById, deleteElement }}
    >
      {children}
    </CoCreationFormContext.Provider>
  )
}

export function useCoCreationFormContext() {
  const context = useContext(CoCreationFormContext)
  if (!context) {
    throw new Error(
      "useCoCreationFormContext must be used within a CoCreationFormProvider"
    )
  }
  return context
}
