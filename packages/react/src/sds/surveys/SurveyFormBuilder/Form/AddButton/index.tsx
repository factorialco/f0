import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import { AcademicCap, Add } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useQuestionTypes } from "../../constants"
import { useSurveyFormBuilderContext } from "../../Context"
import { QuestionType } from "../../types"

export const AddButton = () => {
  const { disabled, answering, onAddNewElement, datasets } =
    useSurveyFormBuilderContext()

  const questionTypes = useQuestionTypes()

  const { t } = useI18n()

  const handleAddNewQuestion = (type: QuestionType, datasetKey?: string) => {
    onAddNewElement?.({
      type,
      datasetKey,
    })
  }

  const handleAddNewSection = () => {
    onAddNewElement?.({
      type: "section",
    })
  }

  const newQuestionDropdownItems: DropdownInternalProps["items"] = [
    {
      label: t("surveyFormBuilder.questionTypes.section"),
      icon: AcademicCap,
      onClick: handleAddNewSection,
    },
    {
      type: "separator" as const,
    },
    ...questionTypes
      .filter((questionType) => !questionType.datasetKey)
      .map((questionType) => ({
        ...questionType,
        onClick: () => handleAddNewQuestion(questionType.questionType),
      })),
    ...(datasets && Object.keys(datasets).length
      ? [
          { type: "separator" as const },
          ...questionTypes
            .filter((questionType) => !!questionType.datasetKey)
            .map((questionType) => ({
              ...questionType,
              onClick: () =>
                handleAddNewQuestion(
                  "dropdown-single",
                  questionType.datasetKey
                ),
            })),
        ]
      : []),
  ]

  if (disabled || answering) return null

  return (
    <div className="ml-6 flex justify-center">
      <Dropdown
        items={newQuestionDropdownItems}
        icon={Add}
        size="md"
        align="center"
      />
    </div>
  )
}
