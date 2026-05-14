import { FileItem } from "@/components/RichText/FileItem"
import { IconType } from "@/components/F0Icon"
import { cn } from "@/lib/utils"

import { type UploadedFile } from "./messageFiles"

type FileAction = {
  icon?: IconType
  label: string
  onClick: () => void
  critical?: boolean
}

type MessageFilesProps = {
  files: UploadedFile[]
  align?: "start" | "end"
  actions?: (file: UploadedFile) => FileAction[]
}

/**
 * Renders a horizontal list of file chips attached to a chat message.
 * Used by both user and assistant messages; `align` controls flex alignment
 * inside the message bubble's column.
 */
export const MessageFiles = ({
  files,
  align = "start",
  actions,
}: MessageFilesProps) => {
  if (files.length === 0) return null

  return (
    <div
      className={cn(
        "flex max-w-[90%] flex-wrap gap-1.5",
        align === "end" ? "justify-end" : "justify-start"
      )}
    >
      {files.map((file, index) => (
        <FileItem
          key={`${file.filename}-${index}`}
          file={{ name: file.filename, type: file.mimetype }}
          size="lg"
          actions={actions?.(file)}
        />
      ))}
    </div>
  )
}
