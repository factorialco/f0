import { FileItem } from "@/components/RichText/FileItem"
import { F0Icon } from "@/components/F0Icon"
import { AlertCircle, CrossedCircle } from "@/icons/app"
import { Skeleton } from "@/ui/skeleton"
import { Tooltip } from "@/experimental/Overlays/Tooltip"

import { type AttachedFile } from "./types"

interface AttachedFilesListProps {
  attachedFiles: AttachedFile[]
  isUploading: boolean
  onRemove: (id: string) => void
  removeLabel: string
}

export const AttachedFilesList = ({
  attachedFiles,
  isUploading,
  onRemove,
  removeLabel,
}: AttachedFilesListProps) => {
  if (attachedFiles.length === 0) return null

  return (
    <div
      aria-live="polite"
      aria-busy={isUploading}
      className="flex flex-wrap gap-1.5 px-3 pt-3"
    >
      {attachedFiles.map((att) =>
        att.status === "uploading" ? (
          <Skeleton key={att.id} className="h-9 w-36 rounded-lg" />
        ) : att.status === "error" ? (
          <Tooltip key={att.id} label={att.errorMessage ?? ""}>
            <div
              role="alert"
              className="flex items-center gap-1.5 rounded-lg border border-f1-border-critical bg-f1-background-critical/10 px-2.5 py-1.5"
            >
              <F0Icon icon={AlertCircle} size="md" color="critical" />
              <span className="max-w-40 truncate text-sm font-medium text-f1-foreground-critical">
                {att.file.name}
              </span>
              <F0Icon
                icon={CrossedCircle}
                size="md"
                className="cursor-pointer text-f1-foreground-critical hover:text-f1-foreground-critical/80"
                onClick={() => onRemove(att.id)}
              />
            </div>
          </Tooltip>
        ) : (
          <FileItem
            key={att.id}
            file={att.file}
            size="lg"
            actions={[
              {
                label: removeLabel,
                icon: CrossedCircle,
                onClick: () => onRemove(att.id),
              },
            ]}
          />
        )
      )}
    </div>
  )
}
