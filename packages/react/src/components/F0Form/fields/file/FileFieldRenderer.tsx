import { useCallback, useId, useMemo, useRef, useState } from "react"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

import { F0Icon } from "@/components/F0Icon"
import { Upload } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn, focusRing } from "@/lib/utils"
import type { InputFieldStatusType } from "@/ui/InputField/types"

import type { ResolvedField } from "../types"
import type { F0FileField, FileEntry, InitialFile } from "./types"

import { useOptionalF0FormContext } from "../../context"
import { FileUploadItem } from "./FileUploadItem"

const BARE_CATEGORIES = new Set([
  "image",
  "video",
  "audio",
  "text",
  "application",
])

/**
 * Normalizes bare category shorthands (e.g. `"image"`) into their
 * wildcard form (`"image/*"`). Specific types pass through unchanged.
 */
function normalizeMime(mime: string): string {
  if (BARE_CATEGORIES.has(mime)) return `${mime}/*`
  return mime
}

const MIME_TO_LABEL: Record<string, string> = {
  "application/pdf": "PDF",
  "application/msword": "DOC",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "DOCX",
  "application/vnd.ms-excel": "XLS",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "XLSX",
  "application/vnd.ms-powerpoint": "PPT",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    "PPTX",
  "application/zip": "ZIP",
  "application/json": "JSON",
  "text/plain": "TXT",
  "text/csv": "CSV",
  "text/html": "HTML",
  "text/markdown": "Markdown",
  "image/jpeg": "JPEG",
  "image/png": "PNG",
  "image/gif": "GIF",
  "image/webp": "WebP",
  "image/svg+xml": "SVG",
  "image/heic": "HEIC",
  "image/bmp": "BMP",
  "image/tiff": "TIFF",
  "video/mp4": "MP4",
  "video/webm": "WebM",
  "video/quicktime": "MOV",
  "audio/mpeg": "MP3",
  "audio/ogg": "OGG",
  "audio/wav": "WAV",
}

const WILDCARD_LABELS: Record<string, string> = {
  "image/*": "Images",
  "video/*": "Videos",
  "audio/*": "Audio",
  "text/*": "Text files",
  "application/*": "Documents",
}

/**
 * Converts a MIME type array into a human-readable comma-separated
 * string, e.g. "PDF, JPEG, PNG". Handles bare categories like "image".
 */
function formatAcceptedTypes(accept: string[] | undefined): string | undefined {
  if (!accept || accept.length === 0) return undefined

  const labels: string[] = []
  for (const raw of accept) {
    const mime = normalizeMime(raw)
    if (WILDCARD_LABELS[mime]) {
      labels.push(WILDCARD_LABELS[mime])
    } else if (MIME_TO_LABEL[mime]) {
      labels.push(MIME_TO_LABEL[mime])
    } else {
      const ext = mime.split("/")[1]
      if (ext) labels.push(ext.toUpperCase())
    }
  }
  return labels.length > 0 ? labels.join(", ") : undefined
}

interface FileFieldRendererProps {
  field: ResolvedField<F0FileField>
  formField: ControllerRenderProps<FieldValues>
  error?: boolean
  statusType?: InputFieldStatusType
  initialFiles?: InitialFile[]
}

/**
 * Renders a file upload field with native drag-and-drop dropzone.
 * Supports single and multiple file modes.
 */
function resolveInitialEntries(
  pool: InitialFile[] | undefined,
  formValue: unknown,
  isMultiple: boolean
): FileEntry[] {
  if (!pool?.length) return []

  const values: string[] = isMultiple
    ? Array.isArray(formValue)
      ? formValue
      : []
    : typeof formValue === "string" && formValue
      ? [formValue]
      : []

  if (values.length === 0) return []

  const lookup = new Map(pool.map((f) => [f.value, f]))

  return values
    .map((v) => lookup.get(v))
    .filter((f): f is InitialFile => f != null)
    .map((f) => ({
      key: `initial-${f.value}`,
      initialFile: f,
      value: f.value,
    }))
}

export function FileFieldRenderer({
  field,
  formField,
  error,
  statusType,
  initialFiles,
}: FileFieldRendererProps) {
  const { forms } = useI18n()
  const context = useOptionalF0FormContext()
  const initialFilesPool = initialFiles ?? context?.initialFiles
  const inputId = useId()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const isMultiple = field.multiple ?? false
  const [entries, setEntries] = useState<FileEntry[]>(() =>
    resolveInitialEntries(initialFilesPool, formField.value, isMultiple)
  )
  const [validationError, setValidationError] = useState<string | null>(null)

  const translations = forms.file

  const hasFiles = entries.length > 0

  // In single mode, hide dropzone once a file entry exists
  const showDropzone = isMultiple || !hasFiles

  const acceptString = field.accept
    ? field.accept.map(normalizeMime).join(",")
    : undefined

  const acceptedTypesLabel = useMemo(
    () => formatAcceptedTypes(field.accept),
    [field.accept]
  )

  const validateFile = useCallback(
    (file: File): string | null => {
      if (
        field.accept &&
        !field.accept.some((raw) => {
          const mime = normalizeMime(raw)
          if (mime.endsWith("/*")) {
            return file.type.startsWith(mime.replace("/*", "/"))
          }
          return file.type === mime
        })
      ) {
        return translations.invalidFileType.replace(
          "{{types}}",
          acceptedTypesLabel ?? ""
        )
      }

      if (field.maxSizeMB && file.size > field.maxSizeMB * 1024 * 1024) {
        return translations.fileTooLarge.replace(
          "{{maxSize}}",
          String(field.maxSizeMB)
        )
      }

      return null
    },
    [field.accept, field.maxSizeMB, translations, acceptedTypesLabel]
  )

  const addFiles = useCallback(
    (files: File[]) => {
      setValidationError(null)

      const filesToProcess = isMultiple ? files : [files[0]]

      for (const file of filesToProcess) {
        const validationMsg = validateFile(file)
        if (validationMsg) {
          setValidationError(validationMsg)
          continue
        }

        const key = `${file.name}-${file.size}-${Date.now()}-${Math.random()}`
        setEntries((prev) => {
          if (!isMultiple) return [{ key, file }]
          return [...prev, { key, file }]
        })
      }
    },
    [isMultiple, validateFile]
  )

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!field.disabled) setIsDragOver(true)
    },
    [field.disabled]
  )

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragOver(false)

      if (field.disabled) return

      const droppedFiles = Array.from(e.dataTransfer.files)
      if (droppedFiles.length > 0) {
        addFiles(droppedFiles)
      }
    },
    [field.disabled, addFiles]
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(e.target.files ?? [])
      if (selectedFiles.length > 0) {
        addFiles(selectedFiles)
      }
      // Reset input so the same file can be re-selected
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    },
    [addFiles]
  )

  const handleDropzoneClick = useCallback(() => {
    if (!field.disabled) {
      fileInputRef.current?.click()
    }
  }, [field.disabled])

  const handleDropzoneKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        handleDropzoneClick()
      }
    },
    [handleDropzoneClick]
  )

  const handleUploadComplete = useCallback(
    (key: string, value: string) => {
      setEntries((prev) =>
        prev.map((entry) => (entry.key === key ? { ...entry, value } : entry))
      )

      if (isMultiple) {
        const currentValue: string[] = Array.isArray(formField.value)
          ? formField.value
          : []
        formField.onChange([...currentValue, value])
      } else {
        formField.onChange(value)
      }
    },
    [isMultiple, formField]
  )

  const handleRemove = useCallback(
    (key: string) => {
      const entry = entries.find((e) => e.key === key)
      setEntries((prev) => prev.filter((e) => e.key !== key))

      if (entry?.value) {
        if (isMultiple) {
          const currentValue: string[] = Array.isArray(formField.value)
            ? formField.value
            : []
          formField.onChange(currentValue.filter((id) => id !== entry.value))
        } else {
          formField.onChange(undefined)
        }
      } else if (!isMultiple) {
        formField.onChange(undefined)
      }

      // Trigger validation after removing a file
      formField.onBlur()
    },
    [entries, isMultiple, formField]
  )

  const handleUploadError = useCallback((key: string, errorMsg: string) => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.key === key ? { ...entry, error: errorMsg } : entry
      )
    )
  }, [])

  const dropzoneText = isDragOver
    ? translations.dropzoneActive
    : (field.description ??
      (isMultiple ? translations.dropzoneMultiple : translations.dropzone))

  return (
    <div className="flex flex-col gap-2">
      {showDropzone && (
        <div
          role="button"
          tabIndex={field.disabled ? -1 : 0}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleDropzoneClick}
          onKeyDown={handleDropzoneKeyDown}
          aria-disabled={field.disabled}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 transition-colors",
            isDragOver
              ? "border-f1-border-accent bg-f1-background-accent-bold/5"
              : error || validationError || statusType === "error"
                ? "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10"
                : statusType === "warning"
                  ? "border-f1-border-warning-bold"
                  : statusType === "info"
                    ? "border-f1-border-info-bold"
                    : "border-f1-border bg-f1-background",
            !field.disabled &&
              !isDragOver &&
              "hover:border-f1-border-hover hover:bg-f1-background-secondary",
            field.disabled && "cursor-not-allowed opacity-50",
            focusRing("rounded-lg")
          )}
        >
          <div className="flex aspect-square items-center justify-center rounded-md border border-solid border-f1-border p-1 text-f1-icon">
            <F0Icon icon={Upload} size="lg" />
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-center text-base text-f1-foreground-secondary">
              {dropzoneText}
            </span>
            {!isDragOver && acceptedTypesLabel && (
              <span className="text-center text-sm text-f1-foreground-secondary/70">
                {translations.acceptedTypes.replace(
                  "{{types}}",
                  acceptedTypesLabel
                )}
              </span>
            )}
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        id={inputId}
        type="file"
        accept={acceptString}
        multiple={isMultiple}
        onChange={handleInputChange}
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
      />

      {validationError && (
        <p className="text-base text-f1-foreground-critical">
          {validationError}
        </p>
      )}

      {entries.length > 0 && (
        <div className="flex flex-col gap-2">
          {entries.map((entry) => (
            <FileUploadItem
              key={entry.key}
              entry={entry}
              useUpload={entry.file ? field.useUpload : undefined}
              onUploadComplete={(value) =>
                handleUploadComplete(entry.key, value)
              }
              onRemove={() => handleRemove(entry.key)}
              onError={(msg) => handleUploadError(entry.key, msg)}
              disabled={field.disabled}
              translations={{
                remove: translations.remove,
                uploading: translations.uploading,
                processing: translations.processing,
                uploadFailed: translations.uploadFailed,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
