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
  isLongText?: boolean
}

export const TextQuestion = ({
  id,
  title,
  description,
  text: textProp,
  type,
  onChange,
}: TextQuestionProps) => {
  const [text, setText] = useState(textProp)

  const handleChange = (params: BaseQuestionOnChangeParams) => {
    onChange?.({
      ...params,
      text,
      type,
    })
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
            value={text}
            onChange={setText}
            placeholder="Respondent’s answer"
            label=""
            hideLabel
          />
        )}
        {type === "longText" && (
          <Textarea
            value={text}
            onChange={setText}
            placeholder="Respondent’s answer"
            label=""
            hideLabel
          />
        )}
      </div>
    </BaseQuestion>
  )
}
