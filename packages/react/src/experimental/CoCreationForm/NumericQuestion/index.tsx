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
  index,
  title,
  description,
  value,
  onChange,
  disabled,
  required,
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
        required,
      })
    },
    [id, title, description, onChange, disabled, required]
  )

  return (
    <BaseQuestion
      id={id}
      index={index}
      title={title}
      description={description}
      onChange={handleChange}
      required={required}
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
          required={required}
        />
      </div>
    </BaseQuestion>
  )
}
