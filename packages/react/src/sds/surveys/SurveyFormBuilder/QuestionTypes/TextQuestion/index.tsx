import { useMemo } from "react"

import type { F0Field } from "@/components/F0Form/fields/types"

import { F0FormField } from "@/components/F0FormField"
import { useI18n } from "@/lib/providers/i18n"

import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestionOnChangeParams } from "../../types"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
  useQuestionDisabled,
} from "../BaseQuestion"

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

  const disabled = useQuestionDisabled(baseQuestionComponentProps)

  const { t } = useI18n()

  const placeholder = t("surveyFormBuilder.answer.textPlaceholder")

  const field: F0Field = useMemo(
    () =>
      baseQuestionComponentProps.type === "text"
        ? {
            id: baseQuestionComponentProps.id,
            type: "text" as const,
            label: t("surveyFormBuilder.answer.label"),
            placeholder,
            clearable: !baseQuestionComponentProps.required,
          }
        : {
            id: baseQuestionComponentProps.id,
            type: "textarea" as const,
            label: t("surveyFormBuilder.answer.label"),
            placeholder,
            rows: 4,
          },
    [
      baseQuestionComponentProps.id,
      baseQuestionComponentProps.type,
      baseQuestionComponentProps.required,
      placeholder,
      t,
    ]
  )

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="px-0.5">
        <F0FormField
          field={field}
          value={answering ? (value ?? "") : placeholder}
          onChange={(v) => {
            onQuestionChange?.({
              ...baseQuestionComponentProps,
              value: v as string,
            })
          }}
          disabled={disabled}
          hideLabel
        />
      </div>
    </BaseQuestion>
  )
}
