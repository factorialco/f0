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

export type DateQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  value?: Date | null
}

export type DateQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  value?: Date | null
}

export const DateQuestion = ({
  value,
  ...baseQuestionComponentProps
}: DateQuestionProps) => {
  const { onQuestionChange } = useSurveyFormBuilderContext()

  const disabled = useQuestionDisabled(baseQuestionComponentProps)

  const { t } = useI18n()

  const field: F0Field = {
    id: baseQuestionComponentProps.id,
    type: "date",
    label: t("surveyFormBuilder.answer.label"),
    clearable: !baseQuestionComponentProps.required,
  }

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="px-0.5">
        <F0FormField
          field={field}
          value={value ?? undefined}
          onChange={(v) => {
            onQuestionChange?.({
              ...baseQuestionComponentProps,
              type: "date",
              value: (v as Date | null) ?? undefined,
            })
          }}
          disabled={disabled}
          hideLabel
        />
      </div>
    </BaseQuestion>
  )
}
