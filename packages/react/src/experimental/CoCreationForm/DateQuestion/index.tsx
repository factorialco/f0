import { DatePickerValue, F0DatePicker } from "@/components/F0DatePicker"
import { useCallback, useMemo } from "react"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"

export type DateQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  value?: Date | null
}

export type DateQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  value?: Date | null
  onChange?: (params: DateQuestionOnChangeParams) => void
}

export const DateQuestion = ({
  value,
  onChange,
  ...baseQuestionComponentProps
}: DateQuestionProps) => {
  const handleChange = useCallback(
    (params: BaseQuestionOnChangeParams) => {
      onChange?.({
        ...params,
        value,
      })
    },
    [onChange, value]
  )

  const handleChangeDate = useCallback(
    (newValue: DatePickerValue | undefined) => {
      if (baseQuestionComponentProps.isEditMode) return

      onChange?.({
        ...baseQuestionComponentProps,
        value: newValue?.value?.from,
      })
    },
    [baseQuestionComponentProps, onChange]
  )

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
    <BaseQuestion {...baseQuestionComponentProps} onChange={handleChange}>
      <div className="px-2">
        <F0DatePicker
          size="md"
          value={datePickerValue}
          onChange={handleChangeDate}
          disabled={baseQuestionComponentProps.isEditMode}
          label="Answer"
          hideLabel={true}
          required={baseQuestionComponentProps.required}
          readonly={baseQuestionComponentProps.isEditMode}
          clearable={!baseQuestionComponentProps.required}
        />
      </div>
    </BaseQuestion>
  )
}
