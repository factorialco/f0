import { DatePickerValue, F0DatePicker } from "@/components/F0DatePicker"
import { useI18n } from "@/lib/providers/i18n"
import { useMemo } from "react"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { useCoCreationFormContext } from "../Context"
import { BaseQuestionOnChangeParams } from "../types"

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
  const { onQuestionChange, isEditMode } = useCoCreationFormContext()

  const { t } = useI18n()

  const handleChangeDate = (newValue: DatePickerValue | undefined) => {
    if (isEditMode) return

    onQuestionChange?.({
      ...baseQuestionComponentProps,
      type: "date",
      value: newValue?.value?.from,
    })
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
          disabled={isEditMode}
          label={t("coCreationForm.answer.label")}
          hideLabel={true}
          required={baseQuestionComponentProps.required}
          readonly={isEditMode}
          clearable={!baseQuestionComponentProps.required}
        />
      </div>
    </BaseQuestion>
  )
}
