import flatten from "lodash/flatten"
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react"
import {
  getDefaultParamsForQuestionType,
  getDefaultQuestionTypeToAdd,
  getNewElementId,
} from "./lib"
import {
  CoCreationFormCallbacks,
  CoCreationFormElement,
  QuestionElement,
  QuestionType,
  SectionElement,
} from "./types"

type CoCreationFormContextType = CoCreationFormCallbacks & {
  isEditMode?: boolean
  disallowOptionalQuestions?: boolean
  lastElementId: string | undefined
  getQuestionById: (questionId: string) => QuestionElement | undefined
  deleteElement: (elementId: string) => void
  getIsSingleQuestionInSection: (questionId: string) => boolean
  getSectionContainingQuestion: (
    questionId: string
  ) => SectionElement | undefined
  isQuestionTypeAllowed: (questionType: QuestionType) => boolean
}

const CoCreationFormContext = createContext<
  CoCreationFormContextType | undefined
>(undefined)

type CoCreationFormProviderProps = {
  children: React.ReactNode
  isEditMode?: boolean
  elements: CoCreationFormElement[]
  onChange: (elements: CoCreationFormElement[]) => void
  disallowOptionalQuestions?: boolean
  allowedQuestionTypes?: QuestionType[]
}

export function CoCreationFormProvider({
  elements,
  children,
  isEditMode,
  disallowOptionalQuestions,
  onChange,
  allowedQuestionTypes,
}: CoCreationFormProviderProps) {
  const lastElementId = useMemo(() => {
    const lastElement = elements[elements.length - 1]
    if (!lastElement) return undefined

    return lastElement.type === "section"
      ? lastElement.section.id
      : lastElement.question.id
  }, [elements])

  const handleQuestionChange: NonNullable<
    CoCreationFormCallbacks["onQuestionChange"]
  > = (params) => {
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
  }

  const handleSectionChange: NonNullable<
    CoCreationFormCallbacks["onSectionChange"]
  > = (params) => {
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
  }

  const handleAddElement = useCallback(
    ({
      element,
      afterId,
    }: {
      element: CoCreationFormElement
      afterId?: string
    }) => {
      const newElements = [...elements]

      if (!afterId) {
        newElements.push(element)
        onChange(newElements)
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
        newElements.length === elements.length
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

      onChange(newElements)
    },
    [elements, onChange]
  )

  const handleAddNewElement: NonNullable<
    CoCreationFormCallbacks["onAddNewElement"]
  > = useCallback(
    ({ type, afterId }) => {
      const newElementId = getNewElementId(
        type === "section" ? "section" : "question"
      )

      const defaultQuestionTypeToAdd =
        getDefaultQuestionTypeToAdd(allowedQuestionTypes)

      const newElement: CoCreationFormElement =
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
    CoCreationFormCallbacks["onDuplicateElement"]
  > = ({ elementId }) => {
    const flattenedElements = flatten(
      elements.map((element) =>
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

    let newElement: CoCreationFormElement | undefined = undefined
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
  }

  const getQuestionById = (questionId: string) => {
    const questions = flatten(
      elements.map((element) =>
        element.type === "question"
          ? [element.question]
          : element.section.questions
      )
    )
    return questions.find((question) => question?.id === questionId)
  }

  const deleteElement = (elementId: string) => {
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
  }

  const getIsSingleQuestionInSection = (questionId: string) => {
    const sectionWithQuestion = elements.find((element) => {
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
  }

  const getSectionContainingQuestion = (questionId: string) => {
    const element = elements.find((element) => {
      if (element.type === "section") {
        return element.section.questions?.some(
          (question) => question.id === questionId
        )
      }
      return false
    })
    return element?.type === "section" ? element.section : undefined
  }

  const isFirstRender = useRef(true)

  const isEmpty = !elements.length

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      if (isEmpty) {
        handleAddNewElement({
          type: "section",
        })
      }
      return
    }
  }, [isEmpty, handleAddNewElement])

  const isQuestionTypeAllowed = (questionType: QuestionType) => {
    return !allowedQuestionTypes || allowedQuestionTypes.includes(questionType)
  }

  return (
    <CoCreationFormContext.Provider
      value={{
        onQuestionChange: handleQuestionChange,
        onSectionChange: handleSectionChange,
        onAddNewElement: handleAddNewElement,
        onDuplicateElement: handleDuplicateElement,
        getIsSingleQuestionInSection,
        getSectionContainingQuestion,
        isEditMode,
        getQuestionById,
        deleteElement,
        lastElementId,
        disallowOptionalQuestions,
        isQuestionTypeAllowed,
      }}
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
