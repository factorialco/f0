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
  value,
  onChange,
  ...baseQuestionComponentProps
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
      if (baseQuestionComponentProps.disabled) return

      onChange?.({
        ...baseQuestionComponentProps,
        value: newValue,
      })
    },
    [baseQuestionComponentProps, onChange]
  )

  return (
    <BaseQuestion {...baseQuestionComponentProps} onChange={handleChange}>
      <div className="px-2">
        <Input
          type="url"
          size="md"
          value={value ?? undefined}
          onChange={handleChangeText}
          disabled={baseQuestionComponentProps.disabled}
          label="Answer"
          hideLabel={true}
          required={baseQuestionComponentProps.required}
        />
      </div>
    </BaseQuestion>
  )
}
