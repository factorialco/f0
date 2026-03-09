import { useCallback, useMemo, useState } from "react"

import type {
  SurveyFormBuilderElement,
  QuestionElement,
} from "../../SurveyFormBuilder/types"
import type { FlatQuestion, SurveyAnswers } from "../types"

function extractFlatQuestions(
  elements: SurveyFormBuilderElement[]
): FlatQuestion[] {
  const questions: FlatQuestion[] = []

  for (const element of elements) {
    if (element.type === "section") {
      for (const q of element.section.questions ?? []) {
        questions.push({
          id: q.id,
          type: q.type,
          required: q.required,
          sectionTitle: element.section.title,
          sectionDescription: element.section.description,
        })
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

function extractAnswers(elements: SurveyFormBuilderElement[]): SurveyAnswers {
  const answers: SurveyAnswers = {}

  const processQuestion = (q: QuestionElement) => {
    const question = q as QuestionElement & { value?: unknown }
    switch (question.type) {
      case "text":
      case "longText":
        answers[question.id] = {
          type: question.type,
          value: (question.value as string) ?? null,
        }
        break
      case "rating":
        answers[question.id] = {
          type: "rating",
          value: (question.value as number) ?? null,
        }
        break
      case "select":
        answers[question.id] = {
          type: "select",
          value: (question.value as string) ?? null,
        }
        break
      case "multi-select":
        answers[question.id] = {
          type: "multi-select",
          value: (question.value as string[]) ?? null,
        }
        break
      case "dropdown-single":
        answers[question.id] = {
          type: "dropdown-single",
          value: (question.value as string) ?? null,
        }
        break
      case "numeric":
        answers[question.id] = {
          type: "numeric",
          value: (question.value as number) ?? null,
        }
        break
      case "link":
        answers[question.id] = {
          type: "link",
          value: (question.value as string) ?? null,
        }
        break
      case "date":
        answers[question.id] = {
          type: "date",
          value: (question.value as Date) ?? null,
        }
        break
    }
  }

  for (const element of elements) {
    if (element.type === "section") {
      for (const q of element.section.questions ?? []) {
        processQuestion(q)
      }
    } else {
      processQuestion(element.question)
    }
  }

  return answers
}

function applyDefaultValues(
  elements: SurveyFormBuilderElement[],
  defaultValues: Partial<SurveyAnswers>
): SurveyFormBuilderElement[] {
  return elements.map((element) => {
    if (element.type === "section") {
      return {
        ...element,
        section: {
          ...element.section,
          questions: element.section.questions?.map((q) => {
            const dv = defaultValues[q.id]
            if (!dv) return q
            return { ...q, value: dv.value } as QuestionElement
          }),
        },
      }
    }
    const dv = defaultValues[element.question.id]
    if (!dv) return element
    return {
      ...element,
      question: { ...element.question, value: dv.value } as QuestionElement,
    }
  })
}

export function useSurveyForm(
  elements: SurveyFormBuilderElement[],
  defaultValues?: Partial<SurveyAnswers>
) {
  const [currentElements, setCurrentElements] = useState<
    SurveyFormBuilderElement[]
  >(() =>
    defaultValues ? applyDefaultValues(elements, defaultValues) : elements
  )

  const flatQuestions = useMemo(
    () => extractFlatQuestions(currentElements),
    [currentElements]
  )

  const getAnswers = useCallback(
    () => extractAnswers(currentElements),
    [currentElements]
  )

  return {
    currentElements,
    setCurrentElements,
    flatQuestions,
    getAnswers,
  }
}
