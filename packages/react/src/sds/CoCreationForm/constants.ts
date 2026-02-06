import { IconType } from "@/components/F0Icon/F0Icon"
import { Check, CheckDouble, List, Numbers, Star, TextSize } from "@/icons/app"
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
  ]

  const filteredQuestionTypes = allQuestionTypes.filter((questionType) =>
    isQuestionTypeAllowed(questionType.questionType)
  )

  return filteredQuestionTypes
}
