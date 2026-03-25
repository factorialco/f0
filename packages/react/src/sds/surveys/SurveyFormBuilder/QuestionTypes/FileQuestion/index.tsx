import type { F0FileField } from "@/components/F0Form/fields/types"
import type {
  MimeType,
  UseFileUpload,
} from "@/components/F0Form/fields/file/types"

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
  value?: string[] | null
}

export type FileQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  type: "file"
  value?: string[] | null
  useUpload?: UseFileUpload
  accept?: MimeType[]
  maxSizeMB?: number
}

export const DEFAULT_FILE_ACCEPT: MimeType[] = [
  "image/*",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "text/plain",
  "text/csv",
]

const noopUpload: UseFileUpload = () => ({
  upload: async (file: File) => ({
    type: "success" as const,
    value: `local-${file.name}-${Date.now()}`,
  }),
  cancelUpload: () => {},
  progress: 0,
  status: "idle" as const,
})

export const FileQuestion = ({
  value,
  useUpload: useUploadProp,
  accept,
  maxSizeMB,
  ...baseQuestionComponentProps
}: FileQuestionProps) => {
  const { onQuestionChange, useUpload: useUploadContext } =
    useSurveyFormBuilderContext()

  const disabled = useQuestionDisabled(baseQuestionComponentProps)

  const { t } = useI18n()

  const resolvedUpload = useUploadProp ?? useUploadContext

  const field: F0FileField = {
    id: baseQuestionComponentProps.id,
    type: "file",
    label: t("surveyFormBuilder.answer.label"),
    multiple: true,
    accept: accept ?? DEFAULT_FILE_ACCEPT,
    maxSizeMB,
    useUpload: resolvedUpload ?? noopUpload,
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
              value: (v as string[]) || null,
            })
          }}
          disabled={disabled}
          hideLabel
        />
      </div>
    </BaseQuestion>
  )
}
