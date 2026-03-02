import {
  CoCreationFormElement,
  QuestionElement,
  SectionElement,
} from "../types"

export type FlatFormItem =
  | { type: "section-header"; id: string; section: SectionElement }
  | { type: "question"; id: string; question: QuestionElement }

export function flattenElements(
  elements: CoCreationFormElement[]
): FlatFormItem[] {
  return elements.flatMap((el): FlatFormItem[] => {
    if (el.type === "section") {
      return [
        {
          type: "section-header",
          id: `section-header-${el.section.id}`,
          section: el.section,
        },
        ...(el.section.questions ?? []).map(
          (q): FlatFormItem => ({
            type: "question",
            id: `question-${q.id}`,
            question: q,
          })
        ),
      ]
    }
    return [
      {
        type: "question",
        id: `question-${el.question.id}`,
        question: el.question,
      },
    ]
  })
}

export function reconstructElements(
  flatItems: FlatFormItem[]
): CoCreationFormElement[] {
  const result: CoCreationFormElement[] = []
  let currentSection: SectionElement | null = null
  let currentQuestions: QuestionElement[] = []

  for (const item of flatItems) {
    if (item.type === "section-header") {
      if (currentSection) {
        result.push({
          type: "section",
          section: { ...currentSection, questions: currentQuestions },
        })
      }
      currentSection = item.section
      currentQuestions = []
    } else {
      if (currentSection) {
        currentQuestions.push(item.question)
      } else {
        result.push({ type: "question", question: item.question })
      }
    }
  }

  if (currentSection) {
    result.push({
      type: "section",
      section: { ...currentSection, questions: currentQuestions },
    })
  }

  return result
}

export function computeSectionEndIds(flatItems: FlatFormItem[]): Set<string> {
  const result = new Set<string>()
  let inSection = false
  let lastQuestionId: string | null = null

  for (const item of flatItems) {
    if (item.type === "section-header") {
      if (inSection && lastQuestionId) {
        result.add(lastQuestionId)
      }
      inSection = true
      lastQuestionId = null
    } else {
      if (inSection) {
        lastQuestionId = item.id
      }
    }
  }

  if (inSection && lastQuestionId) {
    result.add(lastQuestionId)
  }

  return result
}
