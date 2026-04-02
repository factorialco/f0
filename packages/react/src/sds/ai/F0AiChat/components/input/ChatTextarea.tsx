import { useCopilotChatInternal } from "@copilotkit/react-core"
import { type InputProps } from "@copilotkit/react-ui"
import { randomId } from "@copilotkit/shared"
import { motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { FileItem } from "@/experimental/RichText/FileItem"
import {
  ArrowUp,
  Cross,
  CrossedCircle,
  Paperclip,
  SolidStop,
} from "@/icons/app"
import { Skeleton } from "@/ui/skeleton"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useAiChat } from "../../providers/AiChatStateProvider"
import { MentionPopover } from "./MentionPopover"
import { ToolHintSelector } from "./ToolHintSelector"
import { TypewriterPlaceholder } from "./TypewriterPlaceholder"
import { useMentions } from "./useMentions"
import { buildHighlightSegments } from "./utils"

type ChatTextareaProps = InputProps & {
  submitLabel?: string
  creditWarning?: "soft"
  onDismissCreditWarning?: () => void
  onGetCredits?: () => void
}

type AttachedFile = {
  id: string
  file: File
  status: "uploading" | "uploaded" | "error"
  uploadedFile?: {
    url: string
    filename: string
    mimetype: string
  }
}

type UserTextPart = { type: "text"; text: string }
type UserBinaryPart = {
  type: "binary"
  url: string
  filename: string
  mimeType: string
}

/**
 * Check whether a file's MIME type matches an allowed pattern.
 * Supports exact matches ("application/pdf") and wildcard patterns ("image/*").
 */
function matchesMimeType(fileType: string, pattern: string): boolean {
  if (pattern === "*/*") return true
  if (pattern.endsWith("/*")) {
    const prefix = pattern.slice(0, pattern.indexOf("/"))
    return fileType.startsWith(prefix + "/")
  }
  return fileType === pattern
}

/**
 * Filter files against the allowed MIME types list.
 * Returns only files whose type matches at least one allowed pattern.
 * If no allowedMimeTypes are configured, all files pass through.
 */
function filterByMimeType(
  files: File[],
  allowedMimeTypes: string | string[] | undefined
): File[] {
  if (!allowedMimeTypes) return files
  const patterns = Array.isArray(allowedMimeTypes)
    ? allowedMimeTypes
    : [allowedMimeTypes]
  if (patterns.length === 0) return files
  return files.filter((file) =>
    patterns.some((pattern) => matchesMimeType(file.type, pattern))
  )
}

export const ChatTextarea = ({
  submitLabel,
  inProgress,
  onSend,
  onStop,
  creditWarning,
  onDismissCreditWarning,
  onGetCredits,
}: ChatTextareaProps) => {
  const {
    placeholders,
    entityRefs,
    toolHints,
    activeToolHint,
    setActiveToolHint,
    fileAttachments,
    sendMessage,
  } = useAiChat()
  const { messages, setMessages } = useCopilotChatInternal()
  const translation = useI18n()
  const messagesRef = useRef(messages)
  messagesRef.current = messages
  const [inputValue, setInputValue] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([])

  const onUploadFiles = fileAttachments?.onUploadFiles
  const allowedMimeTypes = fileAttachments?.allowedMimeTypes
  const maxFiles = fileAttachments?.maxFiles

  const acceptValue = useMemo(() => {
    if (!allowedMimeTypes) return undefined
    if (Array.isArray(allowedMimeTypes)) return allowedMimeTypes.join(",")
    return allowedMimeTypes
  }, [allowedMimeTypes])

  const isAtMaxFiles =
    maxFiles !== undefined && attachedFiles.length >= maxFiles

  const handleFileSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      let files = Array.from(e.target.files ?? [])
      if (files.length === 0 || !onUploadFiles) return

      // Validate MIME types client-side (the <input accept> attribute is not
      // reliable — users can bypass it via drag-and-drop or file picker).
      files = filterByMimeType(files, allowedMimeTypes)
      if (files.length === 0) return

      if (maxFiles !== undefined) {
        const remaining = maxFiles - attachedFiles.length
        if (remaining <= 0) return
        files = files.slice(0, remaining)
      }

      const newAttached: AttachedFile[] = files.map((file) => ({
        id: crypto.randomUUID(),
        file,
        status: "uploading" as const,
      }))

      setAttachedFiles((prev) => [...prev, ...newAttached])

      try {
        const uploaded = await onUploadFiles(files)
        setAttachedFiles((prev) =>
          prev.map((att) => {
            const idx = newAttached.findIndex((n) => n.id === att.id)
            if (idx === -1) return att
            // Server returned a result for this file
            if (uploaded[idx]) {
              return {
                ...att,
                status: "uploaded" as const,
                uploadedFile: uploaded[idx],
              }
            }
            // Server returned fewer items than sent — mark as error
            return { ...att, status: "error" as const }
          })
        )
      } catch {
        setAttachedFiles((prev) =>
          prev.map((att) =>
            newAttached.some((n) => n.id === att.id)
              ? { ...att, status: "error" as const }
              : att
          )
        )
      }

      // Reset input so the same file can be re-selected
      e.target.value = ""
    },
    [onUploadFiles, maxFiles, attachedFiles.length, allowedMimeTypes]
  )

  const handleRemoveFile = useCallback((id: string) => {
    setAttachedFiles((prev) => prev.filter((att) => att.id !== id))
  }, [])

  const mentions = useMentions({
    inputValue,
    setInputValue,
    cursorPosition,
    searchPersons: entityRefs?.resolvers?.searchPersons,
    textareaRef,
  })

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash.length === 0) {
      textareaRef.current?.focus()
    }
  }, [])

  const handleStop = useCallback(async () => {
    await onStop?.()
    setMessages([
      ...messagesRef.current,
      {
        id: randomId(),
        role: "assistant" as const,
        content: `*<!--response-stopped-->${translation.ai.responseStopped}*`,
      },
    ])
  }, [onStop, setMessages, translation.ai.responseStopped])

  const resolvedDefaultPlaceholder = translation.ai.inputPlaceholder
  const uploadedFiles = attachedFiles.filter((f) => f.status === "uploaded")
  const isUploading = attachedFiles.some((f) => f.status === "uploading")
  const hasDataToSend = inputValue.trim().length > 0

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mentions.close()
    if (inProgress) {
      handleStop()
    } else if (hasDataToSend && !isUploading) {
      const transformed = mentions.transformMentions(inputValue.trim())

      const withToolHint = activeToolHint
        ? `<tool-context tool="${activeToolHint.id}">${activeToolHint.prompt}</tool-context>\n\n${transformed}`
        : transformed

      const files = uploadedFiles.flatMap((f) =>
        f.uploadedFile ? [f.uploadedFile] : []
      )

      if (files.length > 0) {
        const contentParts: Array<UserTextPart | UserBinaryPart> = [
          ...files.map((file) => ({
            type: "binary" as const,
            url: file.url,
            filename: file.filename,
            mimeType: file.mimetype,
          })),
          { type: "text" as const, text: withToolHint },
        ]

        sendMessage({
          id: crypto.randomUUID(),
          role: "user",
          content: contentParts,
        })
      } else {
        onSend(withToolHint)
      }

      setInputValue("")
      setAttachedFiles([])
    }

    textareaRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (mentions.handleKeyDown(e)) return

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (!inProgress) {
        formRef.current?.requestSubmit()
      }
    }
  }

  const updateCursorPosition = () => {
    setCursorPosition(textareaRef.current?.selectionStart ?? 0)
  }

  const syncHighlightScroll = () => {
    if (highlightRef.current && textareaRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop
    }
  }

  const multiplePlaceholders = (placeholders ?? []).length > 1

  const highlightSegments = useMemo(() => {
    return buildHighlightSegments(inputValue, mentions.mentions, {
      cursorPosition,
      inlineCompletion: mentions.inlineCompletion,
    })
  }, [inputValue, mentions.mentions, cursorPosition, mentions.inlineCompletion])

  const hasOverlay =
    mentions.mentions.length > 0 || mentions.inlineCompletion !== null

  const creditWarningConfig = {
    soft: {
      text: translation.ai.creditWarning.soft,
      bg: "bg-f1-background-info",
      fontColor: "text-f1-foreground-info",
      formBorder: "[&_form]:border-f1-border-info",
    },
  }

  const form = (
    <motion.form
      aria-busy={inProgress}
      ref={formRef}
      className={cn(
        "relative isolate z-20",
        "flex flex-col items-stretch md:gap-3 gap-2",
        "rounded-lg border border-solid border-f1-border",
        "transition-all hover:cursor-text",
        "p-0",
        "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
        "before:rounded-[inherit] before:bg-f1-background before:content-['']",
        "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
        "after:rounded-[inherit] after:blur-[5px] after:content-['']",
        "after:scale-90 after:opacity-0",
        "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
        "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
        "after:transition-all after:delay-200 after:duration-300",
        "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100"
      )}
      animate={{
        "--gradient-angle": ["0deg", "360deg"],
      }}
      transition={{
        duration: 6,
        ease: "linear",
        repeat: Infinity,
      }}
      style={
        {
          "--gradient-angle": "180deg",
        } as React.CSSProperties
      }
      onClick={() => {
        textareaRef.current?.focus()
      }}
      onSubmit={handleSubmit}
    >
      <MentionPopover
        isOpen={mentions.isOpen}
        results={mentions.results}
        isLoading={mentions.isLoading}
        selectedIndex={mentions.selectedIndex}
        position={mentions.popoverPosition}
        onSelect={mentions.selectPerson}
      />

      {attachedFiles.length > 0 && (
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
                    label: translation.ai.removeFile,
                    icon: CrossedCircle,
                    onClick: () => handleRemoveFile(att.id),
                  },
                ]}
              />
            )
          )}
        </div>
      )}

      <div
        className={cn(
          "grid flex-1 grid-cols-1 grid-rows-1",
          "min-h-[20px] py-0"
        )}
      >
        <div
          aria-hidden={true}
          className={cn(
            "col-start-1 row-start-1",
            "pointer-events-none invisible",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "mt-3 px-3"
          )}
        >
          {inputValue.endsWith("\n") ? inputValue + "_" : inputValue}
        </div>
        {hasOverlay && (
          <div
            ref={highlightRef}
            aria-hidden={true}
            className={cn(
              "col-start-1 row-start-1",
              "pointer-events-none",
              "min-h-[20px] max-h-[240px]",
              "whitespace-pre-wrap break-words",
              "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
              "mt-3 px-3",
              "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            )}
          >
            {highlightSegments.map((seg, i) =>
              seg.type === "mention" ? (
                <span
                  key={i}
                  className="font-medium text-f1-foreground-secondary"
                >
                  {seg.text}
                </span>
              ) : seg.type === "ghost" ? (
                <span
                  key={i}
                  className="text-f1-foreground-secondary opacity-50"
                >
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </div>
        )}
        {!inputValue && !multiplePlaceholders && (
          <p
            className={cn(
              "col-start-1 row-start-1",
              "pointer-events-none",
              "text-f1-foreground-secondary",
              "text-[16px] sm:text-[14px] leading-[20px] font-normal",
              "pt-3 px-3",
              "overflow-hidden text-ellipsis whitespace-nowrap"
            )}
          >
            {resolvedDefaultPlaceholder}
          </p>
        )}
        <textarea
          autoFocus={false}
          name="one-ai-input"
          rows={1}
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            setCursorPosition(e.target.selectionStart ?? 0)
          }}
          onKeyDown={handleKeyDown}
          onKeyUp={updateCursorPosition}
          onClick={updateCursorPosition}
          onSelect={updateCursorPosition}
          onScroll={syncHighlightScroll}
          className={cn(
            "col-start-1 row-start-1",
            "min-h-[20px] max-h-[240px] h-auto",
            "resize-none",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "mt-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "outline-none",
            hasOverlay
              ? "text-transparent caret-f1-foreground"
              : "text-f1-foreground",
            !hasOverlay &&
              (inputValue || !multiplePlaceholders
                ? "caret-f1-foreground"
                : "caret-transparent")
          )}
        />
        {multiplePlaceholders && (
          <TypewriterPlaceholder
            placeholders={placeholders ?? []}
            defaultPlaceholder={resolvedDefaultPlaceholder}
            inputValue={inputValue}
            inProgress={inProgress}
          />
        )}
      </div>

      <div className="flex shrink-0 items-center justify-between p-3">
        <div className="flex items-center gap-2">
          {onUploadFiles && (
            <>
              <ButtonInternal
                label={translation.ai.attachFile}
                hideLabel
                type="button"
                icon={Paperclip}
                variant="outline"
                size="md"
                disabled={isAtMaxFiles}
                onClick={(e) => {
                  e.preventDefault()
                  fileInputRef.current?.click()
                }}
              />
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept={acceptValue}
                className="hidden"
                onChange={handleFileSelect}
              />
            </>
          )}
          {toolHints && toolHints.length > 0 && setActiveToolHint && (
            <ToolHintSelector
              toolHints={toolHints}
              activeToolHint={activeToolHint ?? null}
              onChange={setActiveToolHint}
            />
          )}
        </div>
        <div className="flex items-center">
          {inProgress ? (
            <ButtonInternal
              type="submit"
              variant="neutral"
              label={translation.ai.stopAnswerGeneration}
              icon={SolidStop}
              hideLabel
            />
          ) : (
            <ButtonInternal
              type="submit"
              disabled={!hasDataToSend || isUploading}
              variant={hasDataToSend && !isUploading ? "default" : "neutral"}
              label={submitLabel || translation.ai.sendMessage}
              icon={submitLabel ? undefined : ArrowUp}
              hideLabel={!submitLabel}
            />
          )}
        </div>
      </div>
    </motion.form>
  )

  if (!creditWarning) return form

  const config = creditWarningConfig[creditWarning]

  return (
    <div
      className={cn("flex flex-col rounded-xl", config.bg, config.formBorder)}
    >
      <div className="flex items-center justify-between gap-2 px-4 pb-1.5 pt-2">
        <p
          className={cn("min-w-0 flex-1 text-sm font-medium", config.fontColor)}
        >
          {config.text}
        </p>
        <div className="flex shrink-0 items-center gap-1">
          {onGetCredits && (
            <F0Button
              label={translation.ai.creditWarning.getCredits ?? ""}
              size="sm"
              variant="outline"
              tooltip={translation.ai.creditWarning.getCredits ?? ""}
              onClick={onGetCredits}
            />
          )}
          {onDismissCreditWarning && (
            <F0Button
              label={translation.ai.creditWarning.dismiss ?? ""}
              size="sm"
              variant="ghost"
              icon={Cross}
              hideLabel
              onClick={onDismissCreditWarning}
            />
          )}
        </div>
      </div>
      {form}
    </div>
  )
}
