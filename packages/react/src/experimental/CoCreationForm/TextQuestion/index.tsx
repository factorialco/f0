import { Input } from "@/experimental/Forms/Fields/Input"
import { Textarea } from "@/experimental/Forms/Fields/TextArea"
import { useI18n } from "@/lib/providers/i18n"
import { useCallback } from "react"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { useCoCreationFormContext } from "../Context"
import { BaseQuestionOnChangeParams } from "../types"

export type TextQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  type: "text" | "longText"
  value?: string | null
}

export type TextQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  type: "text" | "longText"
  value?: string | null
}

export const TextQuestion = ({
  value,
  ...baseQuestionComponentProps
}: TextQuestionProps) => {
  const { onQuestionChange, isEditMode } = useCoCreationFormContext()

  const { t } = useI18n()

  const handleChangeText = useCallback(
    (newValue: string) => {
      if (isEditMode) return

      onQuestionChange?.({
        ...baseQuestionComponentProps,
        value: newValue,
      })
    },
    [isEditMode, baseQuestionComponentProps, onQuestionChange]
  )

  const placeholder = t("coCreationForm.answer.placeholder")

  const inputValue = isEditMode ? placeholder : (value ?? undefined)

  const commonInputProps = {
    value: inputValue,
    onChange: handleChangeText,
    placeholder,
    disabled: isEditMode,
    label: t("coCreationForm.answer.label"),
    hideLabel: true,
    required: baseQuestionComponentProps.required,
  }

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="px-0.5">
        {baseQuestionComponentProps.type === "text" && (
          <Input
            type="text"
            size="md"
            clearable={!baseQuestionComponentProps.required}
            {...commonInputProps}
          />
        )}
        {baseQuestionComponentProps.type === "longText" && (
          <Textarea rows={4} {...commonInputProps} />
        )}
      </div>
    </BaseQuestion>
  )
}
