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

export type LinkQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  value?: string | null
}

export type LinkQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  value?: string | null
}

export const LinkQuestion = ({
  value,
  ...baseQuestionComponentProps
}: LinkQuestionProps) => {
  const { t } = useI18n()

  const { onQuestionChange, answering } = useSurveyFormBuilderContext()

  const disabled = useQuestionDisabled(baseQuestionComponentProps)

  const placeholder = t("surveyFormBuilder.answer.linkPlaceholder")

  const field: F0Field = {
    id: baseQuestionComponentProps.id,
    type: "text",
    inputType: "url",
    label: t("surveyFormBuilder.answer.label"),
    placeholder,
    clearable: !baseQuestionComponentProps.required,
  }

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="px-0.5">
        <F0FormField
          field={field}
          value={answering ? (value ?? "") : placeholder}
          onChange={(v) => {
            onQuestionChange?.({
              ...baseQuestionComponentProps,
              type: "link",
              value: (v as string) || null,
            })
          }}
          disabled={disabled}
          hideLabel
        />
      </div>
    </BaseQuestion>
  )
}
