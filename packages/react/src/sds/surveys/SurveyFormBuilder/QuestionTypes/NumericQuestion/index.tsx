import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import { Numbers } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestionOnChangeParams } from "../../types"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
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

  const { onQuestionChange, answering, errors, onFieldBlur } =
    useSurveyFormBuilderContext()

  const fieldError = errors?.[baseQuestionComponentProps.id]

  const handleChangeText = (newValue: number | null) => {
    onQuestionChange?.({
      ...baseQuestionComponentProps,
      type: "numeric",
      value: newValue,
    })
  }

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div
        className="px-0.5"
        onBlur={() => onFieldBlur?.(baseQuestionComponentProps.id)}
      >
        <NumberInput
          locale="en-US"
          size="md"
          value={value}
          onChange={handleChangeText}
          disabled={!answering}
          label={t("surveyFormBuilder.answer.label")}
          hideLabel={true}
          required={baseQuestionComponentProps.required}
          maxDecimals={0}
          placeholder={t("surveyFormBuilder.answer.numericPlaceholder")}
          icon={Numbers}
          error={fieldError}
        />
      </div>
    </BaseQuestion>
  )
}
