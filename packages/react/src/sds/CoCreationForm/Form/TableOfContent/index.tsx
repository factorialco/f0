import { useCallback } from "react"

import { F0TableOfContentPopover } from "@/components/F0TableOfContentPopover/F0TableOfContentPopover"
import { IdStructure } from "@/experimental/Navigation/F0TableOfContent/types"
import { useI18n } from "@/lib/providers/i18n"

import {
  CoCreationFormElement,
  QuestionElement,
  SectionElement,
} from "../../types"
import { useTableOfContentItems } from "./useTableOfContentItems"

const SECTION_PREFIX = "co-creation-section-"
const QUESTION_PREFIX = "co-creation-question-"

function reorderElements(
  idStructure: IdStructure[],
  elements: CoCreationFormElement[]
): CoCreationFormElement[] {
  const sectionMap = new Map<string, SectionElement>()
  const questionMap = new Map<string, QuestionElement>()

  for (const element of elements) {
    if (element.type === "section") {
      sectionMap.set(element.section.id, element.section)
      for (const question of element.section.questions ?? []) {
        questionMap.set(question.id, question)
      }
    } else {
      questionMap.set(element.question.id, element.question)
    }
  }

  const result: CoCreationFormElement[] = []

  const processNode = (node: IdStructure): void => {
    if (node.id.startsWith(SECTION_PREFIX)) {
      const sectionId = node.id.slice(SECTION_PREFIX.length)
      const section = sectionMap.get(sectionId)

      if (!section) return

      const reorderedQuestions = (node.children ?? [])
        .filter((child) => child.id.startsWith(QUESTION_PREFIX))
        .map((child) => questionMap.get(child.id.slice(QUESTION_PREFIX.length)))
        .filter((q): q is QuestionElement => q != null)

      result.push({
        type: "section",
        section: { ...section, questions: reorderedQuestions },
      })

      // Promote any sections that were dropped inside this section back to root level
      for (const child of node.children ?? []) {
        if (child.id.startsWith(SECTION_PREFIX)) {
          processNode(child)
        }
      }

      return
    }

    if (node.id.startsWith(QUESTION_PREFIX)) {
      const questionId = node.id.slice(QUESTION_PREFIX.length)
      const question = questionMap.get(questionId)
      if (question) {
        result.push({ type: "question", question })
      }
    }
  }

  for (const node of idStructure) {
    processNode(node)
  }

  return result
}

export const TableOfContent = ({
  elements,
  onChange,
}: {
  elements: CoCreationFormElement[]
  onChange: (elements: CoCreationFormElement[]) => void
}) => {
  const { t } = useI18n()

  const tocItems = useTableOfContentItems(elements, {
    untitledSectionLabel: t("coCreationForm.labels.sectionTitlePlaceholder"),
    untitledQuestionLabel: t("coCreationForm.labels.titlePlaceholder"),
    duplicateQuestionLabel: t("coCreationForm.actions.duplicateQuestion"),
    deleteQuestionLabel: t("coCreationForm.actions.deleteQuestion"),
    duplicateSectionLabel: t("coCreationForm.actions.duplicateSection"),
    deleteSectionLabel: t("coCreationForm.actions.deleteSection"),
    questionOptionsLabel: t("coCreationForm.labels.questionOptions"),
    requiredLabel: t("coCreationForm.labels.required"),
    questionTypeLabel: t("coCreationForm.labels.questionType"),
  })

  const handleReorder = useCallback(
    (reorderedIds: IdStructure[]) => {
      onChange(reorderElements(reorderedIds, elements))
    },
    [elements, onChange]
  )

  return (
    <div className="sticky top-0 flex h-screen items-center">
      <F0TableOfContentPopover
        items={tocItems}
        barsAlign="left"
        size="md"
        collapsible
        showChildrenCounter
        sortable
        onReorder={handleReorder}
      />
    </div>
  )
}
