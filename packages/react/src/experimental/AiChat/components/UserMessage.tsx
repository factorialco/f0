import { File as FileIcon } from "@/icons/app"
import { type UserMessageProps } from "@copilotkit/react-ui"
import { useEffect, useMemo, useRef } from "react"

// Parse attachment markers from message content
// Supports both [Attachment: name] (new) and [File: name] (legacy) formats
const parseAttachments = (content: string): string[] => {
  const attachments: string[] = []
  const regex = /\[(?:Attachment|File): (.+?)\]/g
  let match

  while ((match = regex.exec(content)) !== null) {
    attachments.push(match[1])
  }

  return attachments
}

// Remove attachment markers and legacy message ID from content
const cleanMessageContent = (content: string): string => {
  return content
    .replace(/\[MessageId: .+?\]\n?/g, "")
    .replace(/\[(?:Attachment|File): .+?\]\n?/g, "")
    .trim()
}

// Simple attachment chip component
const AttachmentChip = ({ filename }: { filename: string }) => {
  // Get file extension for display
  const extension = filename.split(".").pop()?.toUpperCase() || "FILE"

  return (
    <div className="flex items-center gap-2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary px-3 py-2">
      <FileIcon className="h-4 w-4 text-f1-foreground-secondary" />
      <div className="flex flex-col">
        <span className="max-w-[120px] truncate text-sm text-f1-foreground">
          {filename}
        </span>
        <span className="text-xs text-f1-foreground-secondary">
          {extension}
        </span>
      </div>
    </div>
  )
}

export const UserMessage = ({ message, ImageRenderer }: UserMessageProps) => {
  const isImageMessage = message && "image" in message && message.image
  const ref = useRef<HTMLDivElement>(null)

  // Extract message content and attachment info
  const messageContent = message?.content || ""

  const { attachments, cleanContent } = useMemo(() => {
    return {
      attachments: parseAttachments(messageContent),
      cleanContent: cleanMessageContent(messageContent),
    }
  }, [messageContent])

  useEffect(() => {
    if (!ref.current) return

    ref.current.scrollIntoView({
      behavior: "smooth",
    })
  }, [])

  // Image message
  if (isImageMessage) {
    return (
      <div className="copilotKitMessage copilotKitUserMessage">
        <ImageRenderer image={message.image!} content={message.content} />
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="my-4 flex w-fit max-w-[min(90%,330px)] flex-col gap-2 self-end first:mt-0 last:mb-0"
    >
      {attachments.length > 0 && (
        <div className="flex flex-wrap justify-end gap-2">
          {attachments.map((filename, index) => (
            <AttachmentChip key={`${filename}-${index}`} filename={filename} />
          ))}
        </div>
      )}
      {cleanContent && (
        <div className="whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3">
          {cleanContent}
        </div>
      )}
    </div>
  )
}
