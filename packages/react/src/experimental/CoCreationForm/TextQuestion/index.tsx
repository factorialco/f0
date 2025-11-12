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
  id,
  title,
  description,
  value,
  type,
  onChange,
  disabled,
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
      if (disabled) return

      onChange?.({
        id,
        title,
        description,
        value: newValue,
        type,
      })
    },
    [id, title, description, onChange, type, disabled]
  )

  const placeholder = "Respondent’s answer"

  const inputValue = disabled ? placeholder : (value ?? undefined)

  const commonInputProps = {
    value: inputValue,
    onChange: handleChangeText,
    placeholder: placeholder,
    disabled: disabled,
    label: "Answer",
    hideLabel: true,
  }

  return (
    <BaseQuestion
      id={id}
      title={title}
      description={description}
      onChange={handleChange}
    >
      <div className="px-2">
        {type === "text" && (
          <Input type="text" size="md" {...commonInputProps} />
        )}
        {type === "longText" && <Textarea rows={4} {...commonInputProps} />}
      </div>
    </BaseQuestion>
  )
}
