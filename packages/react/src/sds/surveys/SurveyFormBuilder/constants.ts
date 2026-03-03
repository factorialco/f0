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
  Upload,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useSurveyFormBuilderContext } from "./Context"
import { QuestionType } from "./types"

export const useQuestionTypes = () => {
  const { isQuestionTypeAllowed } = useSurveyFormBuilderContext()

  const { t } = useI18n()

  const allQuestionTypes: {
    label: string
    icon: IconType
    questionType: QuestionType
  }[] = [
    {
      label: t("surveyFormBuilder.questionTypes.rating"),
      icon: Star,
      questionType: "rating",
    },
    {
      label: t("surveyFormBuilder.questionTypes.multipleChoice"),
      icon: CheckDouble,
      questionType: "multi-select",
    },
    {
      label: t("surveyFormBuilder.questionTypes.singleChoice"),
      icon: Check,
      questionType: "select",
    },
    {
      label: t("surveyFormBuilder.questionTypes.text"),
      icon: TextSize,
      questionType: "text",
    },
    {
      label: t("surveyFormBuilder.questionTypes.longText"),
      icon: List,
      questionType: "longText",
    },
    {
      label: t("surveyFormBuilder.questionTypes.numeric"),
      icon: Numbers,
      questionType: "numeric",
    },
    {
      label: t("surveyFormBuilder.questionTypes.link"),
      icon: Link,
      questionType: "link",
    },
    {
      label: t("surveyFormBuilder.questionTypes.date"),
      icon: Calendar,
      questionType: "date",
    },
    {
      label: t("surveyFormBuilder.questionTypes.dropdownSingle"),
      icon: ChevronDown,
      questionType: "dropdown-single",
    },
    {
      label: t("coCreationForm.questionTypes.file"),
      icon: Upload,
      questionType: "file",
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
 * without requiring SurveyFormBuilderContext.
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
  file: Upload,
}
