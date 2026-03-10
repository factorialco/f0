import { useMemo } from "react"

import { DatePickerValue, F0DatePicker } from "@/components/F0DatePicker"
import { useI18n } from "@/lib/providers/i18n"

import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestionOnChangeParams } from "../../types"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"

export type DateQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  value?: Date | null
}

export type DateQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  value?: Date | null
}

export const DateQuestion = ({
  value,
  ...baseQuestionComponentProps
}: DateQuestionProps) => {
  const { onQuestionChange, answering, errors, onFieldBlur } =
    useSurveyFormBuilderContext()

  const fieldError = errors?.[baseQuestionComponentProps.id]

  const { t } = useI18n()

  const handleChangeDate = (newValue: DatePickerValue | undefined) => {
    onQuestionChange?.({
      ...baseQuestionComponentProps,
      type: "date",
      value: newValue?.value?.from,
    })
    onFieldBlur?.(baseQuestionComponentProps.id)
  }

  const datePickerValue = useMemo(
    () =>
      value
        ? {
            granularity: "day" as const,
            value: { from: value, to: value },
          }
        : undefined,
    [value]
  )

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="px-0.5">
        <F0DatePicker
          size="md"
          value={datePickerValue}
          onChange={handleChangeDate}
          disabled={!answering}
          label={t("surveyFormBuilder.answer.label")}
          hideLabel={true}
          required={baseQuestionComponentProps.required}
          readonly={!answering}
          clearable={!baseQuestionComponentProps.required}
          error={fieldError}
        />
      </div>
    </BaseQuestion>
  )
}
