import { Input } from "@/experimental/Forms/Fields/Input"
import { useCallback } from "react"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"

export type LinkQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  value?: string | null
}

export type LinkQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  value?: string | null
  onChange?: (params: LinkQuestionOnChangeParams) => void
}

export const LinkQuestion = ({
  id,
  title,
  description,
  value,
  onChange,
  disabled,
  required,
}: LinkQuestionProps) => {
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
    (newValue: string | null) => {
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
      required={required}
    >
      <div className="px-2">
        <Input
          type="url"
          size="md"
          value={value ?? undefined}
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
