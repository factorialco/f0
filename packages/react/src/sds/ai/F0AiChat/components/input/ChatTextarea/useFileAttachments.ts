import { useCallback, useMemo, useRef, useState } from "react"

import { type AiChatFileAttachmentConfig } from "../../../types"
import { type AttachedFile } from "./types"
import { filterByMimeType } from "./file-utils"

export function useFileAttachments(
  fileAttachments: AiChatFileAttachmentConfig | undefined
) {
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  const processFiles = useCallback(
    async (rawFiles: File[]) => {
      if (rawFiles.length === 0 || !onUploadFiles) return

      let files = filterByMimeType(rawFiles, allowedMimeTypes)
      if (files.length === 0) return

      if (maxFiles !== undefined) {
        const remaining = maxFiles - attachedFiles.length
        if (remaining <= 0) return
        files = files.slice(0, remaining)
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
            return { ...att, status: "error" as const }
          })
        )
      } catch {
        setAttachedFiles((prev) =>
          prev.map((att) =>
            newAttached.some((n) => n.id === att.id)
              ? { ...att, status: "error" as const }
              : att
          )
        )
      }
    },
    [onUploadFiles, maxFiles, attachedFiles.length, allowedMimeTypes]
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
    processFiles,
    handleFileSelect,
    handleRemoveFile,
    clearFiles,
  }
}
