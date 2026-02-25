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
 * Manages a single file's upload lifecycle.
 * Each instance calls the consumer's useUpload hook to get independent state.
 */
export function FileUploadItem({
  file,
  useUpload,
  onUploadComplete,
  onRemove,
  onError,
  disabled,
  translations,
}: FileUploadItemProps) {
  const { upload, cancelUpload, progress, status } = useUpload()
  const [error, setError] = useState<string | null>(null)
  const uploadStartedRef = useRef(false)

  const handleUpload = useCallback(async () => {
    if (uploadStartedRef.current) return
    uploadStartedRef.current = true

    try {
      const result = await upload(file)
      if (result.type === "success") {
        onUploadComplete(result.signedId)
      } else {
        onRemove()
      }
    } catch {
      const msg = translations.uploadFailed
      setError(msg)
      onError(msg)
    }
  }, [upload, file, onUploadComplete, onRemove, onError, translations])

  useEffect(() => {
    handleUpload()
  }, [handleUpload])

  const handleRemove = useCallback(() => {
    if (status === "uploading" || status === "processing") {
      cancelUpload?.()
    }
    onRemove()
  }, [status, cancelUpload, onRemove])

  const isUploading = status === "uploading" || status === "processing"
  const progressPercent = Math.round(progress * 100)

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border border-solid border-f1-border-secondary px-3 py-2",
        error && "border-f1-border-critical"
      )}
    >
      <F0AvatarFile file={file} size="md" />

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="truncate text-base font-medium text-f1-foreground">
          {file.name}
        </span>
        <span className="text-sm text-f1-foreground-secondary">
          {error
            ? error
            : isUploading
              ? status === "processing"
                ? translations.processing
                : `${translations.uploading} ${progressPercent}%`
              : formatFileSize(file.size)}
        </span>

        {isUploading && (
          <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-f1-background-tertiary">
            <div
              className="h-full rounded-full bg-f1-background-accent transition-all duration-200"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
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
