import { IconType } from "@/components/F0Icon/F0Icon"
import {
  Calendar,
  Check,
  CheckDouble,
  ChevronDown,
  Link,
  List,
  Numbers,
  Star,
  TextSize,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useCoCreationFormContext } from "./Context"
import { QuestionType } from "./types"

export const useQuestionTypes = () => {
  const { isQuestionTypeAllowed } = useCoCreationFormContext()

  const { t } = useI18n()

  const allQuestionTypes: {
    label: string
    icon: IconType
    questionType: QuestionType
  }[] = [
    {
      label: t("coCreationForm.questionTypes.rating"),
      icon: Star,
      questionType: "rating",
    },
    {
      label: t("coCreationForm.questionTypes.multipleChoice"),
      icon: CheckDouble,
      questionType: "multi-select",
    },
    {
      label: t("coCreationForm.questionTypes.singleChoice"),
      icon: Check,
      questionType: "select",
    },
    {
      label: t("coCreationForm.questionTypes.text"),
      icon: TextSize,
      questionType: "text",
    },
    {
      label: t("coCreationForm.questionTypes.longText"),
      icon: List,
      questionType: "longText",
    },
    {
      label: t("coCreationForm.questionTypes.numeric"),
      icon: Numbers,
      questionType: "numeric",
    },
    {
      label: t("coCreationForm.questionTypes.link"),
      icon: Link,
      questionType: "link",
    },
    {
      label: t("coCreationForm.questionTypes.date"),
      icon: Calendar,
      questionType: "date",
    },
    {
      label: t("coCreationForm.questionTypes.dropdownSingle"),
      icon: ChevronDown,
      questionType: "dropdown-single",
    },
  ]

  const filteredQuestionTypes = allQuestionTypes.filter((questionType) =>
    isQuestionTypeAllowed(questionType.questionType)
  )

  return filteredQuestionTypes
}

/**
 * Context-free icon lookup for question types.
 * Used by the table of content to map question types to icons
 * without requiring CoCreationFormContext.
 */
export const questionTypeIconMap: Record<QuestionType, IconType> = {
  rating: Star,
  "multi-select": CheckDouble,
  select: Check,
  text: TextSize,
  longText: List,
  numeric: Numbers,
  link: Link,
  date: Calendar,
  "dropdown-single": ChevronDown,
}
