import { useRef } from "react"

import { F0Button } from "@/components/F0Button"
import { FileItem } from "@/experimental/RichText/FileItem"
import { Upload } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import {
  BaseQuestion,
  BaseQuestionPropsForOtherQuestionComponents,
} from "../BaseQuestion"
import { useCoCreationFormContext } from "../Context"
import { BaseQuestionOnChangeParams } from "../types"

export type FileQuestionOnChangeParams = BaseQuestionOnChangeParams & {
  type: "file"
  value?: File[] | null
}

export type FileQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
  type: "file"
  value?: File[] | null
}

export const FileQuestion = ({
  value,
  ...baseQuestionComponentProps
}: FileQuestionProps) => {
  const { t } = useI18n()
  const { onQuestionChange, isEditMode } = useCoCreationFormContext()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isEditMode) return

    const selectedFiles = e.target.files
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles)
      const updatedFiles = [...(value ?? []), ...newFiles]

      onQuestionChange?.({
        ...baseQuestionComponentProps,
        type: "file",
        value: updatedFiles,
      })
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleUploadClick = () => {
    if (isEditMode) return
    fileInputRef.current?.click()
  }

  return (
    <BaseQuestion {...baseQuestionComponentProps}>
      <div className="px-0.5">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
          aria-label={t("coCreationForm.answer.label")}
        />
        <div className="flex flex-col gap-2">
          <F0Button
            variant="outline"
            label={t("coCreationForm.fileQuestion.uploadButton")}
            icon={Upload}
            onClick={handleUploadClick}
            disabled={isEditMode}
            size="md"
          />
          {value && value.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {value.map((file, index) => (
                <FileItem
                  key={`${file.name}-${index}`}
                  file={file}
                  disabled={isEditMode}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </BaseQuestion>
  )
}
