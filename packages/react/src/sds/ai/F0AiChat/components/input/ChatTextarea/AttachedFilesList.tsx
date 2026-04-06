import { FileItem } from "@/experimental/RichText/FileItem"
import { CrossedCircle } from "@/icons/app"
import { Skeleton } from "@/ui/skeleton"

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
