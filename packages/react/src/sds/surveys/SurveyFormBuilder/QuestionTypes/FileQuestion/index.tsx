import type { F0FileField } from "@/components/F0Form/fields/types"
import type { UseFileUpload } from "@/components/F0Form/fields/file/types"

import { F0FormField } from "@/components/F0FormField"
import { useI18n } from "@/lib/providers/i18n"

import { useSurveyFormBuilderContext } from "../../Context"
import { BaseQuestionOnChangeParams } from "../../types"
import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
  useQuestionDisabled,
} from "../BaseQuestion"

export type FileQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  type: "file"
  value?: File[] | null
}

export type FileQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  type: "file"
  value?: File[] | null
  useUpload?: UseFileUpload
}

const noopUpload: UseFileUpload = () => ({
  upload: async () => ({ type: "aborted" as const }),
  cancelUpload: () => {},
  progress: 0,
  status: "idle" as const,
})

export const FileQuestion = ({
  value,
  useUpload,
  ...baseQuestionComponentProps
}: FileQuestionProps) => {
  const { onQuestionChange } = useSurveyFormBuilderContext()

  const disabled = useQuestionDisabled(baseQuestionComponentProps)

  const { t } = useI18n()

  const field: F0FileField = {
    id: baseQuestionComponentProps.id,
    type: "file",
    label: t("surveyFormBuilder.answer.label"),
    multiple: true,
    useUpload: useUpload ?? noopUpload,
  }

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="px-0.5">
        <F0FormField
          field={field}
          value={value ?? []}
          onChange={(v) => {
            onQuestionChange?.({
              ...baseQuestionComponentProps,
              type: "file",
              value: (v as File[]) || null,
            })
          }}
          disabled={disabled}
          hideLabel
        />
      </div>
    </BaseQuestion>
  )
}
