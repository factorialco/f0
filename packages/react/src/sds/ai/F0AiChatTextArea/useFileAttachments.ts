import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { useI18n } from "@/lib/providers/i18n"

import { type AiChatFileAttachmentConfig } from "../F0AiChat/types"

import { filterByMimeType } from "./file-utils"
import { type AttachedFile } from "./types"

const TRANSIENT_ERROR_MS = 4000

export function useFileAttachments(
  fileAttachments: AiChatFileAttachmentConfig | undefined
) {
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([])
  const [transientError, setTransientError] = useState<string | null>(null)
  const transientErrorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  )
  const fileInputRef = useRef<HTMLInputElement>(null)
  const translation = useI18n()

  const onUploadFiles = fileAttachments?.onUploadFiles
  const allowedMimeTypes = fileAttachments?.allowedMimeTypes
  const maxFiles = fileAttachments?.maxFiles

  const acceptValue = useMemo(() => {
    if (!allowedMimeTypes) return undefined
    if (Array.isArray(allowedMimeTypes)) return allowedMimeTypes.join(",")
    return allowedMimeTypes
  }, [allowedMimeTypes])

  const isAtMaxFiles =
    maxFiles !== undefined && attachedFiles.length >= maxFiles

  const showTransientError = useCallback((message: string) => {
    if (transientErrorTimeoutRef.current) {
      clearTimeout(transientErrorTimeoutRef.current)
    }
    setTransientError(message)
    transientErrorTimeoutRef.current = setTimeout(() => {
      setTransientError(null)
      transientErrorTimeoutRef.current = null
    }, TRANSIENT_ERROR_MS)
  }, [])

  useEffect(
    () => () => {
      if (transientErrorTimeoutRef.current) {
        clearTimeout(transientErrorTimeoutRef.current)
      }
    },
    []
  )

  const processFiles = useCallback(
    async (rawFiles: File[]) => {
      if (rawFiles.length === 0 || !onUploadFiles) return

      const files = filterByMimeType(rawFiles, allowedMimeTypes)
      if (files.length === 0) return

      // Reject the whole batch when it would exceed the cap — surfacing a
      // transient banner is friendlier than silently truncating the user's
      // selection.
      if (
        maxFiles !== undefined &&
        attachedFiles.length + files.length > maxFiles
      ) {
        showTransientError(
          translation.ai.tooManyFilesError.replace(
            "{{maxFiles}}",
            String(maxFiles)
          )
        )
        return
      }

      const newAttached: AttachedFile[] = files.map((file) => ({
        id: crypto.randomUUID(),
        file,
        status: "uploading" as const,
      }))

      setAttachedFiles((prev) => [...prev, ...newAttached])

      try {
        const uploaded = await onUploadFiles(files)
        setAttachedFiles((prev) =>
          prev.map((att) => {
            const idx = newAttached.findIndex((n) => n.id === att.id)
            if (idx === -1) return att
            if (uploaded[idx]) {
              return {
                ...att,
                status: "uploaded" as const,
                uploadedFile: uploaded[idx],
              }
            }
            return {
              ...att,
              status: "error" as const,
              errorMessage: translation.ai.fileUploadError,
            }
          })
        )
      } catch (err) {
        const errorMessage =
          err instanceof Error && err.message
            ? err.message
            : translation.ai.fileUploadError
        const errorIds = newAttached.map((n) => n.id)
        setAttachedFiles((prev) =>
          prev.map((att) =>
            errorIds.includes(att.id)
              ? { ...att, status: "error" as const, errorMessage }
              : att
          )
        )
      }
    },
    [
      onUploadFiles,
      maxFiles,
      attachedFiles.length,
      allowedMimeTypes,
      translation.ai.tooManyFilesError,
      translation.ai.fileUploadError,
      showTransientError,
    ]
  )

  const handleFileSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      await processFiles(Array.from(e.target.files ?? []))
      e.target.value = ""
    },
    [processFiles]
  )

  const handleRemoveFile = useCallback((id: string) => {
    setAttachedFiles((prev) => prev.filter((att) => att.id !== id))
  }, [])

  const clearFiles = useCallback(() => {
    setAttachedFiles([])
  }, [])

  return {
    attachedFiles,
    fileInputRef,
    onUploadFiles,
    acceptValue,
    isAtMaxFiles,
    maxFiles,
    processFiles,
    handleFileSelect,
    handleRemoveFile,
    clearFiles,
    transientError,
  }
}
