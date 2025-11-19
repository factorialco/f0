import { FileItem } from "@/experimental/RichText/FileItem"
import { type UserMessageProps } from "@copilotkit/react-ui"
import { useEffect, useMemo, useRef } from "react"

// Parse message ID from content
const parseMessageId = (content: string): string | null => {
  const match = content.match(/\[MessageId: (.+?)\]/)
  return match ? match[1] : null
}

// Parse file references from message content
const parseFilesFromMessage = (content: string) => {
  const fileRegex = /\[File: (.+?)\]/g
  const files: string[] = []
  let match

  while ((match = fileRegex.exec(content)) !== null) {
    files.push(match[1])
  }

  return files
}

// Remove file references and message ID from content
const cleanMessageContent = (content: string) => {
  return content
    .replace(/\[MessageId: .+?\]\n?/g, "")
    .replace(/\[File: .+?\]\n?/g, "")
    .trim()
}

// Cache for reconstructed files to avoid re-creating them on every render
const fileCache = new Map<string, File>()

// Create a unique cache key for a file
const getFileCacheKey = (messageId: string, fileName: string) =>
  `${messageId}:${fileName}`

export const UserMessage = ({ message, ImageRenderer }: UserMessageProps) => {
  const isImageMessage = message && "image" in message && message.image
  const ref = useRef<HTMLDivElement>(null)

  // Extract message content and file info before any early returns
  const messageContent = message?.content || ""
  const messageId = parseMessageId(messageContent)
  const fileNames = parseFilesFromMessage(messageContent)
  const cleanContent = cleanMessageContent(messageContent)

  // Get files from the message-specific storage
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filesMap = (window as any).__copilot_message_files_map__ as Map<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any[]
  >
  const messageFiles = messageId && filesMap ? filesMap.get(messageId) : null

  // Memoize file reconstruction to avoid re-creating on every render
  const reconstructedFiles = useMemo(() => {
    if (!messageFiles || fileNames.length === 0 || !messageId) {
      return []
    }

    return fileNames
      .map((fileName) => {
        const cacheKey = getFileCacheKey(messageId, fileName)

        // Check if file is already in cache
        if (fileCache.has(cacheKey)) {
          return fileCache.get(cacheKey)!
        }

        // Find file data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fileData = messageFiles.find((f: any) => f.name === fileName)

        if (!fileData) {
          return null
        }

        try {
          // Reconstruct File object from stored data
          const blob = new Blob(
            [Uint8Array.from(atob(fileData.data), (c) => c.charCodeAt(0))],
            { type: fileData.type }
          )
          const file = new File([blob], fileData.name, {
            type: fileData.type,
          })

          // Store in cache for future renders
          fileCache.set(cacheKey, file)

          return file
        } catch (error) {
          console.error(`Error reconstructing file ${fileName}:`, error)
          return null
        }
      })
      .filter((item): item is File => item !== null)
  }, [messageFiles, fileNames, messageId])

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
      {reconstructedFiles.length > 0 && (
        <div className="grid grid-cols-2 gap-2 overflow-x-hidden" dir="rtl">
          {reconstructedFiles.map((file, index) => (
            <FileItem key={index} file={file} size="md" dir="ltr" />
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
