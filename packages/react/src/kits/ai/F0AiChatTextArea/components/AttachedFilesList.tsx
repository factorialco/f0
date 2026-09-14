import { useState } from "react"
import { F0FileItem } from "@/components/F0FileItem"
import { F0Icon } from "@/components/F0Icon"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { AlertCircle, Cross, EyeVisible } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { focusRing } from "@/lib/utils"
import { F0ChatMediaPreview } from "@/sds/chat/F0Chat/components/F0ChatMediaPreview"
import { Skeleton } from "@/ui/skeleton"
import { type AttachedFile } from "../types"

interface AttachedFilesListProps {
  attachedFiles: AttachedFile[]
  isUploading: boolean
  onRemove: (id: string) => void
  onRetry: (id: string) => void
  removeLabel: string
  retryLabel: string
}

export const AttachedFilesList = ({
  attachedFiles,
  isUploading,
  onRemove,
  onRetry,
  removeLabel,
  retryLabel,
}: AttachedFilesListProps) => {
  const i18n = useI18n()
  const [previewId, setPreviewId] = useState<string | null>(null)
  const preview = attachedFiles.find((file) => file.id === previewId)
  const previewUrl = preview?.previewUrl ?? preview?.uploadedFile?.url
  if (attachedFiles.length === 0) {
    return null
  }

  return (
    <div
      aria-live="polite"
      aria-busy={isUploading}
      className="flex flex-wrap gap-1 px-1 pt-1"
    >
      {attachedFiles.map((att) =>
        att.status === "uploading" ? (
          <Skeleton key={att.id} className="h-9 w-36 rounded-[10px]" />
        ) : att.status === "error" ? (
          <ErrorFilePill
            key={att.id}
            att={att}
            onRemove={onRemove}
            onRetry={onRetry}
            removeLabel={removeLabel}
            retryLabel={retryLabel}
          />
        ) : att.file.type.startsWith("image/") &&
          (att.previewUrl ?? att.uploadedFile?.url) ? (
          <div key={att.id} className="relative h-16 w-16">
            <button
              type="button"
              onClick={() => setPreviewId(att.id)}
              aria-label={`${i18n.chat.openImage}: ${att.file.name}`}
              className={focusRing(
                "h-16 w-16 rounded-lg border border-f1-border-secondary"
              )}
            >
              <img
                src={att.previewUrl ?? att.uploadedFile?.url}
                alt={att.file.name}
                className="h-full w-full rounded-lg object-cover"
              />
            </button>
            <button
              type="button"
              onClick={() => onRemove(att.id)}
              aria-label={`${removeLabel}: ${att.file.name}`}
              className={focusRing(
                "absolute right-1 top-1 rounded bg-f1-background p-0.5"
              )}
            >
              <F0Icon icon={Cross} size="sm" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <F0FileItem
            key={att.id}
            file={att.file}
            size="md"
            actions={[
              ...(att.file.type === "application/pdf" &&
              (att.previewUrl ?? att.uploadedFile?.url)
                ? [
                    {
                      label: i18n.chat.documentPreview,
                      icon: EyeVisible,
                      onClick: () => setPreviewId(att.id),
                    },
                  ]
                : []),
              {
                label: removeLabel,
                icon: Cross,
                onClick: () => onRemove(att.id),
              },
            ]}
          />
        )
      )}
      {preview && previewUrl && preview.file.type.startsWith("image/") ? (
        <F0ChatMediaPreview
          images={[
            {
              url: previewUrl,
              name: preview.file.name,
              mimeType: preview.file.type,
            },
          ]}
          index={0}
          onIndexChange={() => undefined}
          onClose={() => setPreviewId(null)}
        />
      ) : null}
      {preview && previewUrl && preview.file.type === "application/pdf" ? (
        <F0ChatMediaPreview
          document={{
            url: previewUrl,
            name: preview.file.name,
            mimeType: preview.file.type,
            kind: "pdf",
          }}
          onClose={() => setPreviewId(null)}
        />
      ) : null}
    </div>
  )
}

function ErrorFilePill({
  att,
  onRemove,
  onRetry,
  removeLabel,
  retryLabel,
}: {
  att: AttachedFile
  onRemove: (id: string) => void
  onRetry: (id: string) => void
  removeLabel: string
  retryLabel: string
}) {
  const content = (
    <div className="flex items-center gap-1.5 rounded-lg border border-f1-border-critical bg-f1-background-critical/10 px-2.5 py-1.5">
      <F0Icon icon={AlertCircle} size="md" color="critical" />
      <span className="max-w-40 truncate text-sm font-medium text-f1-foreground-critical">
        {att.file.name}
      </span>
      <button
        type="button"
        onClick={(event) => {
          const textarea = event.currentTarget
            .closest("form")
            ?.querySelector("textarea")
          onRetry(att.id)
          textarea?.focus()
        }}
        aria-label={`${retryLabel}: ${att.file.name}`}
        className={focusRing(
          "rounded text-xs text-f1-foreground-critical underline"
        )}
      >
        {retryLabel}
      </button>
      <button
        type="button"
        aria-label={`${removeLabel}: ${att.file.name}`}
        className={focusRing(
          "rounded-full text-f1-foreground-critical hover:text-f1-foreground-critical/80"
        )}
        onClick={() => onRemove(att.id)}
      >
        <F0Icon icon={Cross} size="md" aria-hidden="true" />
      </button>
    </div>
  )

  if (att.errorMessage) {
    return <Tooltip label={att.errorMessage}>{content}</Tooltip>
  }

  return content
}
