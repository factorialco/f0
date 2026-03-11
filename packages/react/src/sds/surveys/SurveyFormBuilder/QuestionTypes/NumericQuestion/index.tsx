import { Input } from "@/experimental/Forms/Fields/Input"
import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import { Numbers } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestionOnChangeParams } from "../../types"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
  useQuestionDisabled,
} from "../BaseQuestion"

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

  const { onQuestionChange, answering } = useSurveyFormBuilderContext()

  const disabled = useQuestionDisabled(baseQuestionComponentProps)

  const handleChangeText = (newValue: number | null) => {
    onQuestionChange?.({
      ...baseQuestionComponentProps,
      type: "numeric",
      value: newValue,
    })
  }

  const placeholder = t("surveyFormBuilder.answer.numericPlaceholder")

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="px-0.5">
        {answering ? (
          <NumberInput
            locale="en-US"
            size="md"
            value={value}
            onChange={handleChangeText}
            disabled={disabled}
            label={t("surveyFormBuilder.answer.label")}
            hideLabel={true}
            required={baseQuestionComponentProps.required}
            maxDecimals={0}
            placeholder={placeholder}
            icon={Numbers}
          />
        ) : (
          <Input
            type="text"
            size="md"
            value={placeholder}
            onChange={() => {}}
            disabled
            label={t("surveyFormBuilder.answer.label")}
            hideLabel={true}
            icon={Numbers}
          />
        )}
      </div>
    </BaseQuestion>
  )
}
