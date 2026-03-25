import { F0Checkbox } from "@/components/F0Checkbox"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestionOnChangeParams } from "../../types"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
  useQuestionDisabled,
} from "../BaseQuestion"

export type CheckboxQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  type: "checkbox"
  value?: boolean | null
  label: string
}

export type CheckboxQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    type: "checkbox"
    value?: boolean | null
    label: string
  }

const TEXT_AREA_STYLE: object = {
  fieldSizing: "content",
}

export const CheckboxQuestion = ({
  value,
  label: labelProp,
  ...baseQuestionComponentProps
}: CheckboxQuestionProps) => {
  const { onQuestionChange, answering, disabled } =
    useSurveyFormBuilderContext()

  const questionDisabled = useQuestionDisabled(baseQuestionComponentProps)

  const { t } = useI18n()

  if (answering) {
    return (
      <BaseQuestion {...baseQuestionComponentProps}>
        <div className="px-0.5">
          <F0Checkbox
            id={baseQuestionComponentProps.id}
            checked={value ?? false}
            onCheckedChange={(checked) => {
              onQuestionChange?.({
                ...baseQuestionComponentProps,
                type: "checkbox",
                label: labelProp,
                value: checked || null,
              })
            }}
            disabled={questionDisabled}
            title={labelProp}
          />
        </div>
      </BaseQuestion>
    )
  }

  const inputDisabled = disabled || baseQuestionComponentProps.locked

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="flex items-center px-0.5">
        <F0Checkbox checked={false} disabled hideLabel presentational />
        <textarea
          value={labelProp}
          placeholder={t("surveyFormBuilder.checkboxQuestion.placeholder")}
          onChange={(e) => {
            onQuestionChange?.({
              ...baseQuestionComponentProps,
              type: "checkbox",
              label: e.target.value,
            } as Parameters<NonNullable<typeof onQuestionChange>>[0])
          }}
          disabled={!!inputDisabled}
          className={cn(
            "w-full resize-none bg-transparent pl-2.5 text-current outline-none placeholder:text-f1-foreground-tertiary",
            inputDisabled && "cursor-not-allowed opacity-50"
          )}
          style={TEXT_AREA_STYLE}
        />
      </div>
    </BaseQuestion>
  )
}
