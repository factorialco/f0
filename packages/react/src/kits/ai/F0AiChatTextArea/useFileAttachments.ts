import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useChatComposerController } from "@/lib/chat/useChatComposerController"
import { useI18n } from "@/lib/providers/i18n"
import {
  type AiChatFileAttachmentConfig,
  type UploadedFile,
} from "../F0AiChat/types"
import { filterByMimeType } from "./file-utils"
import { type AttachedFile } from "./types"

const TRANSIENT_ERROR_MS = 4000

export function useFileAttachments(
  fileAttachments: AiChatFileAttachmentConfig | undefined,
  scopeKey = "default"
) {
  const [transientError, setTransientError] = useState<string | null>(null)
  const errorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const translation = useI18n()
  const onUploadFiles = fileAttachments?.onUploadFiles
  const allowedMimeTypes = fileAttachments?.allowedMimeTypes
  const maxFiles = fileAttachments?.maxFiles

  const acceptValue = useMemo(
    () =>
      Array.isArray(allowedMimeTypes)
        ? allowedMimeTypes.join(",")
        : allowedMimeTypes,
    [allowedMimeTypes]
  )

  const showTransientError = useCallback((message: string) => {
    if (errorTimerRef.current) {
      clearTimeout(errorTimerRef.current)
    }
    setTransientError(message)
    errorTimerRef.current = setTimeout(() => {
      setTransientError(null)
      errorTimerRef.current = null
    }, TRANSIENT_ERROR_MS)
  }, [])

  useEffect(
    () => () => {
      if (errorTimerRef.current) {
        clearTimeout(errorTimerRef.current)
      }
    },
    []
  )

  const validateFiles = useCallback(
    (files: File[]) => filterByMimeType(files, allowedMimeTypes),
    [allowedMimeTypes]
  )
  const onError = useCallback(
    (reason: "too-many" | "too-large" | "upload") => {
      showTransientError(
        reason === "too-many"
          ? translation.ai.tooManyFilesError.replace(
              "{{maxFiles}}",
              String(maxFiles)
            )
          : translation.ai.fileUploadError
      )
    },
    [
      maxFiles,
      showTransientError,
      translation.ai.fileUploadError,
      translation.ai.tooManyFilesError,
    ]
  )

  const composerFiles = useChatComposerController<UploadedFile>({
    scopeKey,
    uploadFiles: onUploadFiles,
    maxFiles,
    validateFiles,
    onError,
  })
  const attachedFiles: AttachedFile[] = composerFiles.files.map((item) => ({
    id: item.id,
    file: item.file,
    previewUrl: item.previewUrl,
    status: item.status === "ready" ? "uploaded" : item.status,
    uploadedFile: item.value,
    errorMessage: item.errorMessage,
  }))
  const isAtMaxFiles =
    maxFiles !== undefined && attachedFiles.length >= maxFiles

  const handleFileSelect = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      await composerFiles.addFiles(Array.from(event.target.files ?? []))
      event.target.value = ""
    },
    [composerFiles.addFiles]
  )

  return {
    renderedScopeKey: composerFiles.renderedScopeKey,
    value: composerFiles.value,
    cursorPosition: composerFiles.cursorPosition,
    setValue: composerFiles.setValue,
    setCursorPosition: composerFiles.setCursorPosition,
    updateValueForScope: composerFiles.updateValueForScope,
    paste: composerFiles.paste,
    submit: composerFiles.submit,
    attachedFiles,
    fileInputRef,
    onUploadFiles,
    acceptValue,
    isAtMaxFiles,
    maxFiles,
    processFiles: composerFiles.addFiles,
    handleFileSelect,
    handleRemoveFile: composerFiles.removeFile,
    clearFiles: composerFiles.clearFiles,
    retryFile: composerFiles.retryFile,
    transientError,
    showTransientError,
  }
}
