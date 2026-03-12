import { useCallback, useMemo } from "react"

import { IconType } from "@/components/F0Icon/F0Icon"
import {
  TOCItem,
  TOCItemAction,
} from "@/experimental/Navigation/F0TableOfContent"
import {
  AcademicCap,
  AlertCircleLine,
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

const triggerWiggleEffect = (element: HTMLElement) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return
  }

  element.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-4px)" },
      { transform: "translateX(4px)" },
      { transform: "translateX(-3px)" },
      { transform: "translateX(3px)" },
      { transform: "translateX(0)" },
    ],
    {
      duration: 320,
      easing: "ease-out",
    }
  )
}

const triggerWiggleAfterScroll = (
  element: HTMLElement,
  scroller?: HTMLElement | Window
) => {
  const scrollTarget: HTMLElement | Window = scroller ?? window
  const eventTarget = scrollTarget as EventTarget & {
    addEventListener: (
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ) => void
    removeEventListener: (
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ) => void
  }
  const supportsScrollEnd = "onscrollend" in scrollTarget
  let hasTriggered = false

  const triggerOnce = () => {
    if (hasTriggered) return
    hasTriggered = true
    triggerWiggleEffect(element)
  }

  if (supportsScrollEnd) {
    const handleScrollEnd = () => {
      triggerOnce()
    }

    eventTarget.addEventListener("scrollend", handleScrollEnd, {
      once: true,
    })

    // Fallback in case the browser never emits scrollend.
    window.setTimeout(() => {
      eventTarget.removeEventListener("scrollend", handleScrollEnd)
      triggerOnce()
    }, 900)

    return
  }

  let settleTimer: number | null = null

  const cleanup = () => {
    eventTarget.removeEventListener("scroll", handleScroll)
    if (settleTimer) {
      clearTimeout(settleTimer)
      settleTimer = null
    }
  }

  const finish = () => {
    cleanup()
    triggerOnce()
  }

  const handleScroll = () => {
    if (settleTimer) {
      clearTimeout(settleTimer)
    }
    settleTimer = window.setTimeout(finish, 120)
  }

  eventTarget.addEventListener("scroll", handleScroll, { passive: true })
  handleScroll()

  // Hard stop to avoid listeners hanging around if scroll events are not fired.
  window.setTimeout(finish, 1000)
}

const getScrollableParent = (element: HTMLElement): HTMLElement | null => {
  let parent = element.parentElement

  while (parent) {
    const { overflowY } = window.getComputedStyle(parent)
    const canScroll =
      (overflowY === "auto" ||
        overflowY === "scroll" ||
        overflowY === "overlay") &&
      parent.scrollHeight > parent.clientHeight

    if (canScroll) {
      return parent
    }

    parent = parent.parentElement
  }

  return null
}

const scrollToElement = (elementId: string, offset = 0) => {
  const target = document.getElementById(elementId)
  if (!target) return

  const scrollableParent = getScrollableParent(target)

  if (scrollableParent) {
    const parentRect = scrollableParent.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const targetTop =
      scrollableParent.scrollTop +
      (targetRect.top - parentRect.top) -
      Math.max(0, offset)

    scrollableParent.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    })

    triggerWiggleAfterScroll(target, scrollableParent)

    return
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" })

  if (offset > 0) {
    window.scrollBy({ top: -offset, behavior: "smooth" })
  }

  triggerWiggleAfterScroll(target)
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
  scrollOffset?: number
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
    scrollOffset = 0,
  } = options

  const { deleteElement, onDuplicateElement, disabled, answering } =
    useSurveyFormBuilderContext()

  const { getActionsForQuestion, questionTypes } = useQuestionActionsFactory()

  const handleItemClick = useCallback(
    (id: string) => {
      scrollToElement(id, scrollOffset)
    },
    [scrollOffset]
  )

  const buildQuestionActions = useCallback(
    (
      questionId: string,
      questionType: QuestionType,
      canDelete: boolean
    ): TOCItemAction[] => {
      const {
        question,
        currentRatingType,
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

      // Question type submenu
      const typeChildren: TOCItemAction[] = questionTypes.map((qt) => {
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
          selected: questionType === qt.questionType,
        }
      })

      const selectedTypeLabel = questionTypes.find(
        (qt) => qt.questionType === questionType
      )?.label

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
            ...(!answering && { onClick: handleItemClick }),
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
