import flatten from "lodash/flatten"
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react"

import type { UseFileUpload } from "@/components/F0Form/fields/file/types"

import {
  getDefaultParamsForQuestionType,
  getDefaultQuestionTypeToAdd,
  getNewElementId,
} from "./lib"
import {
  SurveyFormBuilderCallbacks,
  SurveyFormBuilderElement,
  QuestionElement,
  QuestionType,
  SectionElement,
} from "./types"

type SurveyFormBuilderContextType = SurveyFormBuilderCallbacks & {
  disabled?: boolean
  answering?: boolean
  disallowOptionalQuestions?: boolean
  lastElementId: string | undefined
  getQuestionById: (questionId: string) => QuestionElement | undefined
  deleteElement: (elementId: string) => void
  getIsSingleQuestionInSection: (questionId: string) => boolean
  getSectionContainingQuestion: (
    questionId: string
  ) => SectionElement | undefined
  isQuestionTypeAllowed: (questionType: QuestionType) => boolean
  errors?: Record<string, string>
  onFieldBlur?: (questionId: string) => void
  useUpload?: UseFileUpload
}

const SurveyFormBuilderContext = createContext<
  SurveyFormBuilderContextType | undefined
>(undefined)

type SurveyFormBuilderProviderProps = {
  children: React.ReactNode
  disabled?: boolean
  answering?: boolean
  elements: SurveyFormBuilderElement[]
  onChange: (elements: SurveyFormBuilderElement[]) => void
  disallowOptionalQuestions?: boolean
  allowedQuestionTypes?: QuestionType[]
  errors?: Record<string, string>
  onFieldBlur?: (questionId: string) => void
  useUpload?: UseFileUpload
}

export function SurveyFormBuilderProvider({
  elements,
  children,
  disabled,
  answering,
  disallowOptionalQuestions,
  onChange,
  allowedQuestionTypes,
  errors,
  onFieldBlur,
  useUpload,
}: SurveyFormBuilderProviderProps) {
  const elementsRef = useRef(elements)
  elementsRef.current = elements

  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  const lastElementId = useMemo(() => {
    const lastElement = elements[elements.length - 1]
    if (!lastElement) return undefined

    return lastElement.type === "section"
      ? lastElement.section.id
      : lastElement.question.id
  }, [elements])

  const handleQuestionChange: NonNullable<
    SurveyFormBuilderCallbacks["onQuestionChange"]
  > = useCallback((params) => {
    const questionId = params.id

    const newElements = elementsRef.current.map((element) => {
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

    onChangeRef.current(newElements)
  }, [])

  const handleSectionChange: NonNullable<
    SurveyFormBuilderCallbacks["onSectionChange"]
  > = useCallback((params) => {
    const sectionId = params.id

    const newElements = elementsRef.current.map((element) => {
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

    onChangeRef.current(newElements)
  }, [])

  const handleAddElement = useCallback(
    ({
      element,
      afterId,
    }: {
      element: SurveyFormBuilderElement
      afterId?: string
    }) => {
      const newElements = [...elementsRef.current]

      if (!afterId) {
        newElements.push(element)
        onChangeRef.current(newElements)
        return
      }

      const addNewElementAfterIdOnFirstLevel = (afterId?: string) => {
        newElements.forEach((currentElement, index) => {
          if (
            currentElement.type === "section" &&
            currentElement.section.id === afterId
          ) {
            newElements.splice(index + 1, 0, element)
          }
          if (
            currentElement.type === "question" &&
            currentElement.question.id === afterId
          ) {
            newElements.splice(index + 1, 0, element)
          }
        })
      }

      addNewElementAfterIdOnFirstLevel(afterId)

      if (
        element.type === "question" &&
        newElements.length === elementsRef.current.length
      ) {
        newElements.forEach((currentElement, index) => {
          if (currentElement.type !== "section") {
            return
          }

          const newQuestions = [...(currentElement.section.questions ?? [])]

          newQuestions?.forEach((question, questionIndex) => {
            if (question.id === afterId) {
              newQuestions.splice(questionIndex + 1, 0, element.question)
            }
          })

          newElements.splice(index, 1, {
            ...currentElement,
            section: {
              ...currentElement.section,
              questions: newQuestions,
            },
          })
        })
      }

      onChangeRef.current(newElements)
    },
    []
  )

  const handleAddNewElement: NonNullable<
    SurveyFormBuilderCallbacks["onAddNewElement"]
  > = useCallback(
    ({ type, afterId }) => {
      const newElementId = getNewElementId(
        type === "section" ? "section" : "question"
      )

      const defaultQuestionTypeToAdd =
        getDefaultQuestionTypeToAdd(allowedQuestionTypes)

      const newElement: SurveyFormBuilderElement =
        type === "section"
          ? {
              type: "section" as const,
              section: {
                id: newElementId,
                title: "",
                questions: [
                  {
                    id: getNewElementId("question"),
                    title: "",
                    description: "",
                    type: defaultQuestionTypeToAdd,
                    required: true,
                    ...getDefaultParamsForQuestionType(
                      defaultQuestionTypeToAdd
                    ),
                  } as QuestionElement,
                ],
              },
            }
          : {
              type: "question" as const,
              question: {
                id: newElementId,
                title: "",
                description: "",
                type,
                required: true,
                ...getDefaultParamsForQuestionType(type),
              } as QuestionElement,
            }

      handleAddElement({ element: newElement, afterId })
    },
    [handleAddElement, allowedQuestionTypes]
  )

  const handleDuplicateElement: NonNullable<
    SurveyFormBuilderCallbacks["onDuplicateElement"]
  > = useCallback(
    ({ elementId }) => {
      const flattenedElements = flatten(
        elementsRef.current.map((element) =>
          element.type === "section"
            ? [element, ...(element.section.questions ?? [])]
            : [element.question]
        )
      )

      const element = flattenedElements.find((element) =>
        element.type === "section"
          ? element.section.id === elementId
          : element.id === elementId
      )

      let newElement: SurveyFormBuilderElement | undefined = undefined
      if (element) {
        newElement =
          element.type === "section"
            ? {
                ...element,
                section: {
                  ...element.section,
                  id: getNewElementId("section"),
                },
              }
            : {
                type: "question" as const,
                question: { ...element, id: getNewElementId("question") },
              }
      }

      if (!newElement) {
        return
      }

      handleAddElement({ element: newElement, afterId: elementId })
    },
    [handleAddElement]
  )

  const getQuestionById = useCallback((questionId: string) => {
    const questions = flatten(
      elementsRef.current.map((element) =>
        element.type === "question"
          ? [element.question]
          : element.section.questions
      )
    )
    return questions.find((question) => question?.id === questionId)
  }, [])

  const deleteElement = useCallback((elementId: string) => {
    let newElements = elementsRef.current.filter((element) => {
      if (element.type === "section") {
        return element.section.id !== elementId
      }
      if (element.type === "question") {
        return element.question.id !== elementId
      }
      return true
    })

    if (newElements.length === elementsRef.current.length) {
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

    onChangeRef.current(newElements)
  }, [])

  const getIsSingleQuestionInSection = useCallback((questionId: string) => {
    const sectionWithQuestion = elementsRef.current.find((element) => {
      if (element.type === "section") {
        return element.section.questions?.some(
          (question) => question.id === questionId
        )
      }
      return false
    })

    return (
      sectionWithQuestion?.type === "section" &&
      sectionWithQuestion?.section.questions?.length === 1
    )
  }, [])

  const getSectionContainingQuestion = useCallback((questionId: string) => {
    const element = elementsRef.current.find((element) => {
      if (element.type === "section") {
        return element.section.questions?.some(
          (question) => question.id === questionId
        )
      }
      return false
    })
    return element?.type === "section" ? element.section : undefined
  }, [])

  const isFirstRender = useRef(true)

  const isEmpty = !elements.length

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      if (isEmpty && !disabled && !answering) {
        handleAddNewElement({
          type: "section",
        })
      }
      return
    }
  }, [isEmpty, handleAddNewElement, disabled])

  const isQuestionTypeAllowed = useCallback(
    (questionType: QuestionType) => {
      return (
        !allowedQuestionTypes || allowedQuestionTypes.includes(questionType)
      )
    },
    [allowedQuestionTypes]
  )

  const contextValue = useMemo(
    () => ({
      onQuestionChange: handleQuestionChange,
      onSectionChange: handleSectionChange,
      onAddNewElement: handleAddNewElement,
      onDuplicateElement: handleDuplicateElement,
      getIsSingleQuestionInSection,
      getSectionContainingQuestion,
      disabled,
      answering,
      getQuestionById,
      deleteElement,
      lastElementId,
      disallowOptionalQuestions,
      isQuestionTypeAllowed,
      errors,
      onFieldBlur,
      useUpload,
    }),
    [
      handleQuestionChange,
      handleSectionChange,
      handleAddNewElement,
      handleDuplicateElement,
      getIsSingleQuestionInSection,
      getSectionContainingQuestion,
      disabled,
      answering,
      getQuestionById,
      deleteElement,
      lastElementId,
      disallowOptionalQuestions,
      isQuestionTypeAllowed,
      errors,
      onFieldBlur,
      useUpload,
    ]
  )

  return (
    <SurveyFormBuilderContext.Provider value={contextValue}>
      {children}
    </SurveyFormBuilderContext.Provider>
  )
}

export function useSurveyFormBuilderContext() {
  const context = useContext(SurveyFormBuilderContext)
  if (!context) {
    throw new Error(
      "useSurveyFormBuilderContext must be used within a SurveyFormBuilderProvider"
    )
  }
  return context
}
