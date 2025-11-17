import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import { useI18n } from "@/lib/providers/i18n"
import { useCallback } from "react"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"

export type NumericQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  value?: number | null
}

export type NumericQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    value?: number | null
    onChange?: (params: NumericQuestionOnChangeParams) => void
  }

export const NumericQuestion = ({
  value,
  onChange,
  ...baseQuestionComponentProps
}: NumericQuestionProps) => {
  const { t } = useI18n()

  const handleChange = useCallback(
    (params: BaseQuestionOnChangeParams) => {
      onChange?.({
        ...params,
        value,
      })
    },
    [onChange, value]
  )

  const handleChangeText = useCallback(
    (newValue: number | null) => {
      if (baseQuestionComponentProps.isEditMode) return

      onChange?.({
        ...baseQuestionComponentProps,
        value: newValue,
      })
    },
    [baseQuestionComponentProps, onChange]
  )

  return (
    <BaseQuestion {...baseQuestionComponentProps} onChange={handleChange}>
      <div className="px-0.5">
        <NumberInput
          locale="en-US"
          size="md"
          value={value}
          onChange={handleChangeText}
          disabled={baseQuestionComponentProps.isEditMode}
          label={t("coCreationForm.answer.label")}
          hideLabel={true}
          required={baseQuestionComponentProps.required}
        />
      </div>
    </BaseQuestion>
  )
}
