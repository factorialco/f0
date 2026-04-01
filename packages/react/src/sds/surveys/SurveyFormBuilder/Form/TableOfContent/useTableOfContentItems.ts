import { useCallback, useMemo } from "react"

import { IconType } from "@/components/F0Icon/F0Icon"
import {
  TOCItem,
  TOCItemAction,
} from "@/experimental/Navigation/F0TableOfContent"
import {
  AcademicCap,
  AlertCircleLine,
  Check,
  CheckDouble,
  Delete,
  Hub,
  LayersFront,
} from "@/icons/app"

import { questionTypeIconMap } from "../../constants"
import { useSurveyFormBuilderContext } from "../../Context"
import {
  RATING_OPTIONS,
  useQuestionActionsFactory,
} from "../../QuestionTypes/BaseQuestion/ActionsMenu/useQuestionActions"
import {
  SurveyFormBuilderElement,
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
  duplicateQuestionLabel: string
  deleteQuestionLabel: string
  duplicateSectionLabel: string
  deleteSectionLabel: string
  questionOptionsLabel: string
  requiredLabel: string
  questionTypeLabel: string
  singleSelectionLabel: string
  multiSelectionLabel: string
}

export const useTableOfContentItems = (
  elements: SurveyFormBuilderElement[],
  options: UseTableOfContentItemsOptions
): TOCItem[] => {
  const {
    untitledSectionLabel,
    untitledQuestionLabel,
    duplicateQuestionLabel,
    deleteQuestionLabel,
    duplicateSectionLabel,
    deleteSectionLabel,
    questionOptionsLabel,
    requiredLabel,
    questionTypeLabel,
    singleSelectionLabel,
    multiSelectionLabel,
  } = options

  const { deleteElement, onDuplicateElement, disabled, answering } =
    useSurveyFormBuilderContext()

  const { getActionsForQuestion, questionTypes } = useQuestionActionsFactory()

  const handleItemClick = useCallback((id: string) => {
    scrollToElement(id)
  }, [])

  const buildQuestionActions = useCallback(
    (
      questionId: string,
      questionType: QuestionType,
      canDelete: boolean
    ): TOCItemAction[] => {
      const {
        question,
        currentRatingType,
        currentDatasetKey,
        disallowOptionalQuestions,
        handleChangeRequired,
        handleSelectQuestionType,
        handleSelectRatingType,
        handleDuplicate,
        handleDelete,
      } = getActionsForQuestion(questionId, questionType, canDelete)

      const actions: TOCItemAction[] = [
        { type: "label", text: questionOptionsLabel },
      ]

      if (!disallowOptionalQuestions) {
        actions.push({
          type: "toggle",
          label: requiredLabel,
          icon: AlertCircleLine,
          checked: !!question?.required,
          onCheckedChange: handleChangeRequired,
        })
      }

      // Split question types into regular and dataset types
      const regularTypes = questionTypes.filter((qt) => !qt.datasetKey)
      const datasetTypes = questionTypes.filter((qt) => !!qt.datasetKey)

      // Build type children: regular types + dataset sub-menus
      const typeChildren: TOCItemAction[] = regularTypes.map((qt) => {
        if (qt.questionType === "rating") {
          const ratingChildren: TOCItemAction[] = RATING_OPTIONS.map((ro) => ({
            label: ro.label,
            onClick: () => handleSelectRatingType(ro.value),
            selected: currentRatingType === ro.value,
          }))
          return {
            type: "submenu" as const,
            label: qt.label,
            icon: qt.icon,
            selectedLabel: currentRatingType
              ? RATING_OPTIONS.find((o) => o.value === currentRatingType)?.label
              : undefined,
            children: ratingChildren,
          }
        }
        return {
          label: qt.label,
          icon: qt.icon,
          onClick: () => handleSelectQuestionType(qt.questionType),
          selected: questionType === qt.questionType && !currentDatasetKey,
        }
      })

      // Group dataset types by datasetKey to avoid duplicates
      const uniqueDatasets = new Map<
        string,
        { label: string; icon: IconType; datasetKey: string }
      >()
      for (const dt of datasetTypes) {
        if (dt.datasetKey && !uniqueDatasets.has(dt.datasetKey)) {
          uniqueDatasets.set(dt.datasetKey, {
            label: dt.label,
            icon: dt.icon,
            datasetKey: dt.datasetKey,
          })
        }
      }

      if (uniqueDatasets.size > 0) {
        typeChildren.push({ type: "separator" })
        for (const [dk, ds] of uniqueDatasets) {
          typeChildren.push({
            type: "submenu" as const,
            label: ds.label,
            icon: ds.icon,
            selectedLabel:
              currentDatasetKey === dk
                ? questionType === "dropdown-multi"
                  ? multiSelectionLabel
                  : singleSelectionLabel
                : undefined,
            children: [
              {
                label: singleSelectionLabel,
                icon: Check,
                onClick: () => handleSelectQuestionType("dropdown-single", dk),
                selected:
                  currentDatasetKey === dk &&
                  questionType === "dropdown-single",
              },
              {
                label: multiSelectionLabel,
                icon: CheckDouble,
                onClick: () => handleSelectQuestionType("dropdown-multi", dk),
                selected:
                  currentDatasetKey === dk && questionType === "dropdown-multi",
              },
            ],
          })
        }
      }

      // Find selected type label (accounts for dataset questions)
      let selectedTypeLabel: string | undefined
      if (currentDatasetKey) {
        const ds = uniqueDatasets.get(currentDatasetKey)
        if (ds) {
          selectedTypeLabel = ds.label
        }
      } else {
        selectedTypeLabel = regularTypes.find(
          (qt) => qt.questionType === questionType
        )?.label
      }

      actions.push({
        type: "submenu",
        label: questionTypeLabel,
        icon: Hub,
        selectedLabel: selectedTypeLabel,
        children: typeChildren,
      })

      actions.push({ type: "separator" })

      actions.push({
        label: duplicateQuestionLabel,
        icon: LayersFront,
        onClick: handleDuplicate,
      })

      if (canDelete) {
        actions.push({
          label: deleteQuestionLabel,
          icon: Delete,
          onClick: handleDelete,
          critical: true,
        })
      }

      return actions
    },
    [
      getActionsForQuestion,
      questionTypes,
      questionOptionsLabel,
      requiredLabel,
      questionTypeLabel,
      singleSelectionLabel,
      multiSelectionLabel,
      duplicateQuestionLabel,
      deleteQuestionLabel,
    ]
  )

  return useMemo(
    () =>
      elements.map((element) => {
        if (element.type === "section") {
          const section = element.section
          const sectionId = `co-creation-section-${section.id}`
          const questions = section.questions ?? []
          const isSingleQuestion = questions.length === 1

          return {
            id: sectionId,
            label: section.title || untitledSectionLabel,
            icon: AcademicCap,
            onClick: handleItemClick,
            ...(!disabled &&
              !answering &&
              !section.locked && {
                otherActions: [
                  {
                    label: duplicateSectionLabel,
                    icon: LayersFront,
                    onClick: () =>
                      onDuplicateElement?.({
                        elementId: section.id,
                        type: "section",
                      }),
                  },
                  { type: "separator" as const },
                  {
                    label: deleteSectionLabel,
                    icon: Delete,
                    onClick: () => deleteElement(section.id),
                    critical: true,
                  },
                ] satisfies TOCItemAction[],
              }),
            children: questions.map((question: QuestionElement) => ({
              id: `co-creation-question-${question.id}`,
              label: question.title || untitledQuestionLabel,
              icon: getQuestionIcon(question.type as QuestionType),
              onClick: handleItemClick,
              ...(!disabled &&
                !answering &&
                !section.locked && {
                  otherActions: buildQuestionActions(
                    question.id,
                    question.type as QuestionType,
                    !isSingleQuestion
                  ),
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
          ...(!disabled &&
            !answering &&
            !question.locked && {
              otherActions: buildQuestionActions(
                question.id,
                question.type as QuestionType,
                true
              ),
            }),
        }
      }),
    [
      elements,
      handleItemClick,
      untitledSectionLabel,
      untitledQuestionLabel,
      disabled,
      answering,
      buildQuestionActions,
      duplicateSectionLabel,
      deleteSectionLabel,
      onDuplicateElement,
      deleteElement,
    ]
  )
}
