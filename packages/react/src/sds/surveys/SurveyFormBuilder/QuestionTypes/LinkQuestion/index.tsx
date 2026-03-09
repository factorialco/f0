import { Input } from "@/experimental/Forms/Fields/Input"
import { useI18n } from "@/lib/providers/i18n"

import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestionOnChangeParams } from "../../types"

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

  const handleChangeText = (newValue: string | null) => {
    onQuestionChange?.({
      ...baseQuestionComponentProps,
      type: "link",
      value: newValue,
    })
  }

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="px-0.5">
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
        />
      </div>
    </BaseQuestion>
  )
}
