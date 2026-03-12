import {
  SurveyFormBuilderElement,
  QuestionElement,
  SectionElement,
} from "../types"

export type FlatFormItem =
  | { type: "section-header"; id: string; section: SectionElement }
  | { type: "question"; id: string; question: QuestionElement }
  | { type: "section-end"; id: string; sectionId: string }

export function flattenElements(
  elements: SurveyFormBuilderElement[]
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
        {
          type: "section-end",
          id: `section-end-${el.section.id}`,
          sectionId: el.section.id,
        },
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
): SurveyFormBuilderElement[] {
  const result: SurveyFormBuilderElement[] = []
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
    } else if (item.type === "section-end") {
      if (currentSection) {
        result.push({
          type: "section",
          section: { ...currentSection, questions: currentQuestions },
        })
        currentSection = null
        currentQuestions = []
      }
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

/**
 * Re-inject section-end markers into a flat list that has none.
 *
 * Uses `inSectionQuestionIds` (the set of question IDs that originally
 * belonged to *any* section) to determine where each section ends:
 * - Questions in the set stay inside the current section.
 * - Original standalone questions (NOT in the set) cause the section to close
 *   before them so they remain standalone.
 *
 * This allows cross-section moves (a question from section B placed after
 * section A's header joins section A) while keeping standalone questions
 * outside sections unless the user explicitly drags them between section items.
 */
export function injectSectionEnds(
  items: FlatFormItem[],
  inSectionQuestionIds: Set<string>
): FlatFormItem[] {
  const result: FlatFormItem[] = []
  let currentSectionId: string | null = null
  let sectionBuffer: FlatFormItem[] = []

  function flushSection() {
    if (!currentSectionId) return

    // Find the last question in the buffer that was in any section.
    // Everything up to (and including) that question stays in the section;
    // everything after it becomes standalone.
    let lastSectionQuestionIdx = -1
    for (let i = sectionBuffer.length - 1; i >= 0; i--) {
      if (
        sectionBuffer[i].type === "question" &&
        inSectionQuestionIds.has(sectionBuffer[i].id)
      ) {
        lastSectionQuestionIdx = i
        break
      }
    }

    if (lastSectionQuestionIdx === -1) {
      // No section questions in buffer → empty section
      result.push({
        type: "section-end",
        id: `section-end-${currentSectionId}`,
        sectionId: currentSectionId,
      })
      // Push remaining items as standalone
      result.push(...sectionBuffer)
    } else {
      // Items inside the section (up to last section-question)
      for (let i = 0; i <= lastSectionQuestionIdx; i++) {
        result.push(sectionBuffer[i])
      }
      result.push({
        type: "section-end",
        id: `section-end-${currentSectionId}`,
        sectionId: currentSectionId,
      })
      // Items after the last section-question become standalone
      for (let i = lastSectionQuestionIdx + 1; i < sectionBuffer.length; i++) {
        result.push(sectionBuffer[i])
      }
    }

    sectionBuffer = []
    currentSectionId = null
  }

  for (const item of items) {
    if (item.type === "section-header") {
      flushSection()
      currentSectionId = item.section.id
      result.push(item)
    } else if (currentSectionId) {
      sectionBuffer.push(item)
    } else {
      result.push(item)
    }
  }

  flushSection()

  return result
}

export function computeSectionEndIds(
  elements: SurveyFormBuilderElement[]
): Set<string> {
  const result = new Set<string>()
  for (const element of elements) {
    if (element.type === "section") {
      const questions = element.section.questions
      if (questions?.length) {
        result.add(`question-${questions[questions.length - 1].id}`)
      }
    }
  }
  return result
}
