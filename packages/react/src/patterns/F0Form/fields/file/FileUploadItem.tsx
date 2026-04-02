import { useCallback, useEffect, useRef, useState } from "react"

import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { F0Button } from "@/components/F0Button"
import { Cross } from "@/icons/app"
import { cn } from "@/lib/utils"

import type { FileUploadItemProps } from "./types"

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/**
 * Renders a single file row. Handles two modes:
 * - New upload (entry.file): triggers useUpload, shows progress
 * - Pre-existing (entry.initialFile): displays immediately, no upload
 */
export function FileUploadItem({
  entry,
  useUpload,
  onUploadComplete,
  onRemove,
  onError,
  disabled,
  translations,
}: FileUploadItemProps) {
  const isNewUpload = !!entry.file
  const uploadHook = useUpload?.()
  const upload = uploadHook?.upload
  const cancelUpload = uploadHook?.cancelUpload
  const progress = uploadHook?.progress ?? 0
  const status = uploadHook?.status ?? "idle"

  const [error, setError] = useState<string | null>(null)
  const uploadStartedRef = useRef(false)

  const handleUpload = useCallback(async () => {
    if (!isNewUpload || !entry.file || !upload) return
    if (uploadStartedRef.current) return
    uploadStartedRef.current = true

    try {
      const result = await upload(entry.file)
      if (result.type === "success") {
        onUploadComplete(result.value)
      } else {
        onRemove()
      }
    } catch {
      const msg = translations.uploadFailed
      setError(msg)
      onError(msg)
    }
  }, [
    isNewUpload,
    entry.file,
    upload,
    onUploadComplete,
    onRemove,
    onError,
    translations,
  ])

  useEffect(() => {
    if (isNewUpload) {
      handleUpload()
    }
  }, [isNewUpload, handleUpload])

  const handleRemove = useCallback(() => {
    if (isNewUpload && (status === "uploading" || status === "processing")) {
      cancelUpload?.()
    }
    onRemove()
  }, [isNewUpload, status, cancelUpload, onRemove])

  const isUploading =
    isNewUpload && (status === "uploading" || status === "processing")
  const progressPercent = Math.round(progress * 100)

  const fileDef = entry.file ?? {
    name: entry.initialFile?.name ?? "",
    type: entry.initialFile?.type ?? "",
  }
  const fileName = entry.file?.name ?? entry.initialFile?.name ?? ""
  const fileSize = entry.file?.size ?? entry.initialFile?.size

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary px-2.5 py-2",
        error && "border-f1-border-critical"
      )}
    >
      <F0AvatarFile file={fileDef} size="md" />

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="truncate text-base font-medium text-f1-foreground">
          {fileName}
        </span>
        <span className="text-sm text-f1-foreground-secondary">
          {error
            ? error
            : isUploading
              ? status === "processing"
                ? translations.processing
                : `${translations.uploading} ${progressPercent}%`
              : fileSize != null
                ? formatFileSize(fileSize)
                : null}
        </span>
      </div>

      {!disabled && (
        <F0Button
          variant="ghost"
          size="sm"
          label={translations.remove}
          onClick={handleRemove}
          icon={Cross}
          hideLabel
        />
      )}
    </div>
  )
}
