import { useMemo } from "react"

import { DatePickerValue, F0DatePicker } from "@/components/F0DatePicker"
import { useI18n } from "@/lib/providers/i18n"

import { BaseQuestion } from "../BaseQuestion"
import { useCoCreationFormContext } from "../Context"
import { DateRangeQuestionProps, DateRangeValue } from "./types"

export type { DateRangeQuestionProps } from "./types"

export const DateRangeQuestion = ({
  value,
  ...baseQuestionComponentProps
}: DateRangeQuestionProps) => {
  const { onQuestionChange, isEditMode } = useCoCreationFormContext()

  const { t } = useI18n()

  const handleChangeDateRange = (newValue: DatePickerValue | undefined) => {
    if (isEditMode) return

    const rangeValue: DateRangeValue | null =
      newValue?.value?.from && newValue?.value?.to
        ? { from: newValue.value.from, to: newValue.value.to }
        : null

    onQuestionChange?.({
      ...baseQuestionComponentProps,
      type: "daterange",
      value: rangeValue,
    })
  }

  const datePickerValue = useMemo(
    () =>
      value
        ? {
            granularity: "range" as const,
            value: { from: value.from, to: value.to },
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
          onChange={handleChangeDateRange}
          granularities={["range"]}
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
