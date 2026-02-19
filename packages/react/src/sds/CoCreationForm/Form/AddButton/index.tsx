import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import { AcademicCap, Add } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useQuestionTypes } from "../../constants"
import { useCoCreationFormContext } from "../../Context"
import { QuestionType } from "../../types"

export const AddButton = () => {
  const { isEditMode, onAddNewElement, lastElementId } =
    useCoCreationFormContext()

  const questionTypes = useQuestionTypes()

  const { t } = useI18n()

  const handleAddNewQuestion = (type: QuestionType) => {
    onAddNewElement?.({
      type,
      afterId: lastElementId,
    })
  }

  const handleAddNewSection = () => {
    onAddNewElement?.({
      type: "section",
      afterId: lastElementId,
    })
  }

  const newQuestionDropdownItems: DropdownInternalProps["items"] = [
    {
      label: t("coCreationForm.questionTypes.section"),
      icon: AcademicCap,
      onClick: handleAddNewSection,
    },
    {
      type: "separator" as const,
    },
    ...questionTypes.map((questionType) => ({
      ...questionType,
      onClick: () => handleAddNewQuestion(questionType.questionType),
    })),
  ]

  if (!isEditMode) return null

  return (
    <div className="ml-[26px] flex justify-center">
      <Dropdown
        items={newQuestionDropdownItems}
        icon={Add}
        size="md"
        align="center"
      />
    </div>
  )
}
