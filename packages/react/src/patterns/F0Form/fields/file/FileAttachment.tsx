import { useCallback, useEffect, useRef, useState } from "react"

import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { F0Button } from "@/components/F0Button"
import { Cross } from "@/icons/app"
import { cn } from "@/lib/utils"

import type { FileAttachmentProps } from "./types"

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const positionRadius: Record<
  NonNullable<FileAttachmentProps["position"]>,
  string
> = {
  single: "rounded-xl",
  top: "rounded-t-xl rounded-b-none",
  middle: "rounded-none",
  bottom: "rounded-b-xl rounded-t-none",
}

/**
 * Renders a single file attachment row.
 * Handles two modes:
 * - New upload (entry.file): triggers useUpload, shows progress
 * - Pre-existing (entry.initialFile): displays immediately, no upload
 *
 * The `position` prop controls border-radius for grouped lists:
 * - "single": full radius (standalone)
 * - "top" / "middle" / "bottom": partial radius for grouped lists
 */
export function FileAttachment({
  entry,
  useUpload,
  onUploadComplete,
  onRemove,
  onError,
  disabled,
  position = "single",
  className,
  translations,
}: FileAttachmentProps) {
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

  const subtitleText = error
    ? error
    : isUploading
      ? status === "processing"
        ? translations.processing
        : `${translations.uploading} ${progressPercent}%`
      : fileSize != null
        ? translations.fileWeight.replace("{{size}}", formatFileSize(fileSize))
        : null

  return (
    <div
      className={cn(
        "flex items-center gap-[10px] border border-solid bg-f1-background p-3",
        positionRadius[position],
        error ? "border-f1-border-critical" : "border-f1-border-secondary",
        className
      )}
    >
      <F0AvatarFile file={fileDef} size="lg" />

      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-medium text-f1-foreground">
          {fileName}
        </span>
        {subtitleText && (
          <span className="text-sm text-f1-foreground-secondary">
            {subtitleText}
          </span>
        )}
      </div>

      {!disabled && (
        <F0Button
          variant="outline"
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
