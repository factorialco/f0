import { useCallback, useMemo } from "react"

import { IconType } from "@/components/F0Icon/F0Icon"
import { AcademicCap, Delete, LayersFront } from "@/icons/app"
import {
  TOCItem,
  TOCItemAction,
} from "@/experimental/Navigation/F0TableOfContent"

import { questionTypeIconMap } from "../../constants"
import {
  CoCreationFormElement,
  QuestionElement,
  QuestionType,
} from "../../types"

const getQuestionIcon = (type: QuestionType): IconType => {
  return questionTypeIconMap[type]
}

const scrollToElement = (elementId: string) => {
  document
    .getElementById(elementId)
    ?.scrollIntoView({ behavior: "smooth", block: "start" })
}

type UseTableOfContentItemsOptions = {
  untitledSectionLabel: string
  untitledQuestionLabel: string
  onDuplicateElement: (elementId: string) => void
  onDeleteElement: (elementId: string) => void
  duplicateQuestionLabel: string
  deleteQuestionLabel: string
  duplicateSectionLabel: string
  deleteSectionLabel: string
  isEditMode?: boolean
}

const buildQuestionActions = (
  questionId: string,
  {
    onDuplicateElement,
    onDeleteElement,
    duplicateLabel,
    deleteLabel,
  }: {
    onDuplicateElement: (id: string) => void
    onDeleteElement: (id: string) => void
    duplicateLabel: string
    deleteLabel: string
  }
): TOCItemAction[] => [
  {
    label: duplicateLabel,
    icon: LayersFront,
    onClick: () => onDuplicateElement(questionId),
  },
  { type: "separator" },
  {
    label: deleteLabel,
    icon: Delete,
    onClick: () => onDeleteElement(questionId),
    critical: true,
  },
]

const buildSectionActions = (
  sectionId: string,
  {
    onDuplicateElement,
    onDeleteElement,
    duplicateLabel,
    deleteLabel,
  }: {
    onDuplicateElement: (id: string) => void
    onDeleteElement: (id: string) => void
    duplicateLabel: string
    deleteLabel: string
  }
): TOCItemAction[] => [
  {
    label: duplicateLabel,
    icon: LayersFront,
    onClick: () => onDuplicateElement(sectionId),
  },
  { type: "separator" },
  {
    label: deleteLabel,
    icon: Delete,
    onClick: () => onDeleteElement(sectionId),
    critical: true,
  },
]

export const useTableOfContentItems = (
  elements: CoCreationFormElement[],
  {
    untitledSectionLabel,
    untitledQuestionLabel,
    onDuplicateElement,
    onDeleteElement,
    duplicateQuestionLabel,
    deleteQuestionLabel,
    duplicateSectionLabel,
    deleteSectionLabel,
    isEditMode,
  }: UseTableOfContentItemsOptions
): TOCItem[] => {
  const handleItemClick = useCallback((id: string) => {
    scrollToElement(id)
  }, [])

  return useMemo(
    () =>
      elements.map((element) => {
        if (element.type === "section") {
          const section = element.section
          const sectionId = `co-creation-section-${section.id}`

          return {
            id: sectionId,
            label: section.title || untitledSectionLabel,
            icon: AcademicCap,
            onClick: handleItemClick,
            ...(isEditMode &&
              !section.locked && {
                otherActions: buildSectionActions(section.id, {
                  onDuplicateElement,
                  onDeleteElement,
                  duplicateLabel: duplicateSectionLabel,
                  deleteLabel: deleteSectionLabel,
                }),
              }),
            children: section.questions?.map((question: QuestionElement) => ({
              id: `co-creation-question-${question.id}`,
              label: question.title || untitledQuestionLabel,
              icon: getQuestionIcon(question.type as QuestionType),
              onClick: handleItemClick,
              ...(isEditMode &&
                !section.locked && {
                  otherActions: buildQuestionActions(question.id, {
                    onDuplicateElement,
                    onDeleteElement,
                    duplicateLabel: duplicateQuestionLabel,
                    deleteLabel: deleteQuestionLabel,
                  }),
                }),
            })),
          }
        }

        const question = element.question
        return {
          id: `co-creation-question-${question.id}`,
          label: question.title || untitledQuestionLabel,
          icon: getQuestionIcon(question.type as QuestionType),
          onClick: handleItemClick,
          ...(isEditMode &&
            !question.locked && {
              otherActions: buildQuestionActions(question.id, {
                onDuplicateElement,
                onDeleteElement,
                duplicateLabel: duplicateQuestionLabel,
                deleteLabel: deleteQuestionLabel,
              }),
            }),
        }
      }),
    [
      elements,
      handleItemClick,
      untitledSectionLabel,
      untitledQuestionLabel,
      onDuplicateElement,
      onDeleteElement,
      duplicateQuestionLabel,
      deleteQuestionLabel,
      duplicateSectionLabel,
      deleteSectionLabel,
      isEditMode,
    ]
  )
}
