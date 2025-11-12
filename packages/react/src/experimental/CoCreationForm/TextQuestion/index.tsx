import { Input } from "@/experimental/Forms/Fields/Input"
import { Textarea } from "@/experimental/Forms/Fields/TextArea"
import { useCallback } from "react"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"

export type TextQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  type: "text" | "longText"
  value?: string | null
}

export type TextQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  type: "text" | "longText"
  value?: string | null
  onChange?: (params: TextQuestionOnChangeParams) => void
}

export const TextQuestion = ({
  value,
  type,
  onChange,
  ...baseQuestionComponentProps
}: TextQuestionProps) => {
  const handleChange = useCallback(
    (params: BaseQuestionOnChangeParams) => {
      onChange?.({
        ...params,
        value,
        type,
      })
    },
    [onChange, value, type]
  )

  const handleChangeText = useCallback(
    (newValue: string) => {
      if (baseQuestionComponentProps.disabled) return

      onChange?.({
        ...baseQuestionComponentProps,
        value: newValue,
        type,
      })
    },
    [baseQuestionComponentProps, onChange, type]
  )

  const placeholder = "Respondent’s answer"

  const inputValue = baseQuestionComponentProps.disabled
    ? placeholder
    : (value ?? undefined)

  const commonInputProps = {
    value: inputValue,
    onChange: handleChangeText,
    placeholder,
    disabled: baseQuestionComponentProps.disabled,
    label: "Answer",
    hideLabel: true,
    required: baseQuestionComponentProps.required,
  }

  return (
    <BaseQuestion {...baseQuestionComponentProps} onChange={handleChange}>
      <div className="px-2">
        {type === "text" && (
          <Input type="text" size="md" {...commonInputProps} />
        )}
        {type === "longText" && <Textarea rows={4} {...commonInputProps} />}
      </div>
    </BaseQuestion>
  )
}
