import { Input } from "@/experimental/Forms/Fields/Input"
import { Textarea } from "@/experimental/Forms/Fields/TextArea"
import { useI18n } from "@/lib/providers/i18n"

import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { useSurveyFormBuilderContext } from "../Context"
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
  const { onQuestionChange, answering } = useSurveyFormBuilderContext()

  const { t } = useI18n()

  const handleChangeText = (newValue: string) => {
    onQuestionChange?.({
      ...baseQuestionComponentProps,
      value: newValue,
    })
  }

  const placeholder = t("surveyFormBuilder.answer.placeholder")

  const commonInputProps = {
    value: answering ? (value ?? "") : placeholder,
    onChange: handleChangeText,
    placeholder,
    disabled: !answering,
    label: t("surveyFormBuilder.answer.label"),
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
