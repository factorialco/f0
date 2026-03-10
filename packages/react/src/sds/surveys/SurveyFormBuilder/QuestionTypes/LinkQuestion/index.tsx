import { Input } from "@/experimental/Forms/Fields/Input"
import { Link } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestionOnChangeParams } from "../../types"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
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

  const { onQuestionChange, answering, errors, onFieldBlur } =
    useSurveyFormBuilderContext()

  const fieldError = errors?.[baseQuestionComponentProps.id]

  const handleChangeText = (newValue: string | null) => {
    onQuestionChange?.({
      ...baseQuestionComponentProps,
      type: "link",
      value: newValue,
    })
  }

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div
        className="px-0.5"
        onBlur={() => onFieldBlur?.(baseQuestionComponentProps.id)}
      >
        <Input
          type="url"
          size="md"
          value={value ?? undefined}
          onChange={handleChangeText}
          disabled={!answering}
          label={t("surveyFormBuilder.answer.label")}
          hideLabel={true}
          required={baseQuestionComponentProps.required}
          clearable={!baseQuestionComponentProps.required}
          placeholder={t("surveyFormBuilder.answer.linkPlaceholder")}
          error={fieldError}
          icon={Link}
        />
      </div>
    </BaseQuestion>
  )
}
