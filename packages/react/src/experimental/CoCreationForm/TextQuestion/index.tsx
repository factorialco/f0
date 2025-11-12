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
  text: string
}

export type TextQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  type: "text" | "longText"
  text: string
  onChange?: (params: TextQuestionOnChangeParams) => void
}

export const TextQuestion = ({
  id,
  title,
  description,
  text,
  type,
  onChange,
  disabled,
}: TextQuestionProps) => {
  const handleChange = useCallback(
    (params: BaseQuestionOnChangeParams) => {
      onChange?.({
        ...params,
        text,
        type,
      })
    },
    [onChange, text, type]
  )

  const handleChangeText = useCallback(
    (value: string) => {
      if (disabled) return

      onChange?.({
        id,
        title,
        description,
        text: value,
        type,
      })
    },
    [id, title, description, onChange, type, disabled]
  )

  const placeholder = "Respondent’s answer"

  return (
    <BaseQuestion
      id={id}
      title={title}
      description={description}
      onChange={handleChange}
    >
      <div className="px-2">
        {type === "text" && (
          <Input
            type="text"
            size="md"
            value={disabled ? placeholder : text}
            onChange={handleChangeText}
            placeholder={placeholder}
            disabled={disabled}
            label="Answer"
            hideLabel
          />
        )}
        {type === "longText" && (
          <Textarea
            value={disabled ? placeholder : text}
            onChange={handleChangeText}
            placeholder={placeholder}
            disabled={disabled}
            label="Answer"
            rows={4}
            hideLabel
          />
        )}
      </div>
    </BaseQuestion>
  )
}
