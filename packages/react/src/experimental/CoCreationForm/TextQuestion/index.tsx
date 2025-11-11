import { Input } from "@/experimental/Forms/Fields/Input"
import { useEffect, useState } from "react"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"

type OnChangeParams = BaseQuestionOnChangeParams & {
  type: "text"
  text: string
}

export type TextQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  text: string
  onChange?: (params: OnChangeParams) => void
}

export const TextQuestion = ({
  id,
  title,
  description,
  text: textProp,
  onChange,
}: TextQuestionProps) => {
  const [text, setText] = useState(textProp)

  const handleChange = (params: BaseQuestionOnChangeParams) => {
    onChange?.({
      ...params,
      text,
      type: "text",
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
        <Input
          type="text"
          value={text}
          onChange={setText}
          placeholder="Respondent’s answer"
          label=""
          hideLabel
        />
      </div>
    </BaseQuestion>
  )
}
