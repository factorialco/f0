import { Input } from "@/experimental/Forms/Fields/Input"
import { Textarea } from "@/experimental/Forms/Fields/TextArea"
import { useEffect, useState } from "react"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"

type OnChangeParams = BaseQuestionOnChangeParams & {
  type: "text" | "longText"
  text: string
}

export type TextQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  type: "text" | "longText"
  text: string
  onChange?: (params: OnChangeParams) => void
}

export const TextQuestion = ({
  id,
  title,
  description,
  text: textProp,
  type,
  onChange,
  disabled,
}: TextQuestionProps) => {
  const [text, setText] = useState(textProp)

  const handleChange = (params: BaseQuestionOnChangeParams) => {
    onChange?.({
      ...params,
      text,
      type,
    })
  }

  const handleChangeText = (value: string) => {
    if (disabled) return
    setText(value)
  }

  useEffect(() => {
    onChange?.({
      id,
      title,
      description,
      text,
      type: "text",
    })
  }, [id, title, description, onChange, text])

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
