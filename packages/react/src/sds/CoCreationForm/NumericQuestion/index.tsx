import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import { useI18n } from "@/lib/providers/i18n"

import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { useCoCreationFormContext } from "../Context"
import { BaseQuestionOnChangeParams } from "../types"

export type NumericQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  value?: number | null
}

export type NumericQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    value?: number | null
  }

export const NumericQuestion = ({
  value,
  ...baseQuestionComponentProps
}: NumericQuestionProps) => {
  const { t } = useI18n()

  const { onQuestionChange, isEditMode } = useCoCreationFormContext()

  const handleChangeText = (newValue: number | null) => {
    if (isEditMode) return

    onQuestionChange?.({
      ...baseQuestionComponentProps,
      type: "numeric",
      value: newValue,
    })
  }

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="px-0.5">
        <NumberInput
          locale="en-US"
          size="md"
          value={value}
          onChange={handleChangeText}
          disabled={isEditMode}
          label={t("coCreationForm.answer.label")}
          hideLabel={true}
          required={baseQuestionComponentProps.required}
        />
      </div>
    </BaseQuestion>
  )
}
