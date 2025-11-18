import React, { createContext, useCallback, useContext, useMemo } from "react"
import {
  CoCreationFormCallbacks,
  CoCreationFormElement,
  QuestionElement,
  SectionElement,
} from "./types"

type CoCreationFormContextType = CoCreationFormCallbacks & {
  isEditMode?: boolean
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
  const handleQuestionChange = useCallback<
    NonNullable<CoCreationFormCallbacks["onQuestionChange"]>
  >(
    (params) => {
      const questionId = params.id

      console.log("questionId", questionId)
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

      console.log("newElements", newElements)

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
    (params) => {
      const newElements = elements

      if (params.type === "section") {
        newElements.push({
          type: "section",
          section: {
            ...params,
            id: crypto.randomUUID(),
            title: `Section ${newElements.length + 1}`,
          },
        })
      } else {
        newElements.push({
          type: "question",
          question: {
            ...params,
            id: crypto.randomUUID(),
            title: `Question ${newElements.length + 1}`,
          } as QuestionElement,
        })
      }

      onChange(newElements)
    },
    [elements, onChange]
  )

  const callbacks: CoCreationFormCallbacks = useMemo(
    () => ({
      onQuestionChange: handleQuestionChange,
      onSectionChange: handleSectionChange,
      onAddNewElement: handleAddNewElement,
      onQuestionAction: () => {},
      onSectionAction: () => {},
    }),
    [handleQuestionChange, handleSectionChange, handleAddNewElement]
  )

  return (
    <CoCreationFormContext.Provider value={{ ...callbacks, isEditMode }}>
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
