import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
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
  id,
  title,
  description,
  value,
  onChange,
  disabled,
}: NumericQuestionProps) => {
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
      if (disabled) return

      onChange?.({
        id,
        title,
        description,
        value: newValue,
      })
    },
    [id, title, description, onChange, disabled]
  )

  return (
    <BaseQuestion
      id={id}
      title={title}
      description={description}
      onChange={handleChange}
    >
      <div className="px-2">
        <NumberInput
          locale="en-US"
          size="md"
          value={value}
          onChange={handleChangeText}
          disabled={disabled}
          label="Answer"
          hideLabel={true}
        />
      </div>
    </BaseQuestion>
  )
}
