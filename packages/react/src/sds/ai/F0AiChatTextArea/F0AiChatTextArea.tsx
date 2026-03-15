import { motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { FileItem } from "@/experimental/RichText/FileItem"
import { CrossedCircle, Paperclip } from "@/icons/app"
import { Skeleton } from "@/ui/skeleton"
import { ArrowUp, SolidStop } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type { AttachedFile } from "./types"
import type { F0AiChatTextAreaProps } from "./types"

import { MentionPopover } from "./MentionPopover"
import { ToolHintSelector } from "./ToolHintSelector"
import { TypewriterPlaceholder } from "./TypewriterPlaceholder"
import { useMentions } from "./useMentions"
import { buildHighlightSegments } from "./utils"

export const F0AiChatTextArea = ({
  submitLabel,
  inProgress,
  onSend,
  onStop,
  placeholders = [],
  defaultPlaceholder,
  autoFocus = true,
  entityResolvers,
  toolHints,
  activeToolHint,
  onActiveToolHintChange,
  onUploadFiles,
  allowedMimeTypes,
  maxFiles,
}: F0AiChatTextAreaProps) => {
  const [inputValue, setInputValue] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([])
  const translation = useI18n()

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
            if (idx !== -1 && uploaded[idx]) {
              return {
                ...att,
                status: "uploaded" as const,
                uploadedFile: uploaded[idx],
              }
            }
            return att
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
    [onUploadFiles, maxFiles, attachedFiles.length]
  )

  const handleRemoveFile = useCallback((id: string) => {
    setAttachedFiles((prev) => prev.filter((att) => att.id !== id))
  }, [])

  const mentions = useMentions({
    inputValue,
    setInputValue,
    cursorPosition,
    entityResolvers,
    textareaRef,
  })

  // Skip autofocus when URL has a hash (e.g. #section) so we don't steal focus
  // from the element the hash points to when the URL updates. We use an effect
  // so we only read window on the client and avoid hydration mismatch.
  useEffect(() => {
    if (
      autoFocus &&
      typeof window !== "undefined" &&
      window.location.hash.length === 0
    ) {
      textareaRef.current?.focus()
    }
  }, [autoFocus])

  const resolvedDefaultPlaceholder =
    defaultPlaceholder ?? translation.ai.inputPlaceholder

  const uploadedFiles = attachedFiles.filter((f) => f.status === "uploaded")
  const isUploading = attachedFiles.some((f) => f.status === "uploading")
  const hasDataToSend = inputValue.trim().length > 0

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mentions.close()
    if (inProgress) {
      onStop?.()
    } else if (hasDataToSend && !isUploading) {
      const transformed = mentions.transformMentions(inputValue.trim())

      // Prepend file attachment metadata if there are uploaded files
      const filePrefix =
        uploadedFiles.length > 0
          ? `<file-attachments>${JSON.stringify(uploadedFiles.map((f) => f.uploadedFile))}</file-attachments>\n\n`
          : ""

      const withFiles = filePrefix + transformed

      const withToolHint = activeToolHint
        ? `<tool-context tool="${activeToolHint.id}">${activeToolHint.prompt}</tool-context>\n\n${withFiles}`
        : withFiles
      onSend(withToolHint)
      setInputValue("")
      setAttachedFiles([])
    }

    textareaRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Let mention popover handle keyboard events first
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

  const multiplePlaceholders = placeholders.length > 1

  /**
   * Split inputValue into segments: plain text, mention spans, and ghost
   * (inline-completion) text. The highlight overlay uses these to render
   * @Name mentions with distinct styling and show the autocomplete ghost
   * text at the cursor position.
   */
  const highlightSegments = useMemo(() => {
    return buildHighlightSegments(inputValue, mentions.mentions, {
      cursorPosition,
      inlineCompletion: mentions.inlineCompletion,
    })
  }, [inputValue, mentions.mentions, cursorPosition, mentions.inlineCompletion])

  // The overlay must be active when there are either mentions to highlight
  // or ghost (inline-completion) text to render at the cursor.
  const hasOverlay =
    mentions.mentions.length > 0 || mentions.inlineCompletion !== null

  return (
    <motion.form
      aria-busy={inProgress}
      ref={formRef}
      className={cn(
        "relative isolate z-20",
        "flex flex-row items-end sm:flex-col sm:items-stretch gap-3",
        "rounded-lg border border-solid border-f1-border",
        "transition-all hover:cursor-text",
        "py-px pl-3 pr-1 sm:p-0",
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
        <div className="flex flex-wrap gap-1.5 px-3 pt-3">
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
          "min-h-[20px] py-2.5 sm:min-h-[20px] sm:py-0"
        )}
      >
        <div
          aria-hidden={true}
          className={cn(
            "col-start-1 row-start-1",
            "pointer-events-none invisible",
            "min-h-[20px] max-h-[120px] sm:min-h-[20px] sm:max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "sm:text-[14px] text-[16px] leading-[20px] font-normal text-f1-foreground",
            "sm:mt-3 sm:px-3"
          )}
        >
          {inputValue.endsWith("\n") ? inputValue + "_" : inputValue}
        </div>
        {/* Highlight overlay: renders text with styled @mentions and ghost completions */}
        {hasOverlay && (
          <div
            ref={highlightRef}
            aria-hidden={true}
            className={cn(
              "col-start-1 row-start-1",
              "pointer-events-none",
              "min-h-[20px] max-h-[120px] sm:min-h-[20px] sm:max-h-[240px]",
              "whitespace-pre-wrap break-words",
              "sm:text-[14px] text-[16px] leading-[20px] font-normal text-f1-foreground",
              "px-0 sm:mt-3 sm:px-3",
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
              "sm:text-[14px] text-[16px] leading-[20px] font-normal",
              "sm:pt-3 sm:px-3",
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
            "min-h-[20px] max-h-[120px] sm:min-h-[20px] sm:max-h-[240px] sm:h-auto",
            "resize-none",
            "whitespace-pre-wrap break-words",
            "sm:text-[14px] text-[16px] leading-[20px] font-normal",
            "px-0 sm:mt-3 sm:px-3",
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
            placeholders={placeholders}
            defaultPlaceholder={resolvedDefaultPlaceholder}
            inputValue={inputValue}
            inProgress={inProgress}
          />
        )}
      </div>

      <div className="flex shrink-0 items-center justify-between p-1 sm:p-3">
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
          {toolHints && toolHints.length > 0 && onActiveToolHintChange && (
            <ToolHintSelector
              toolHints={toolHints}
              activeToolHint={activeToolHint ?? null}
              onChange={onActiveToolHintChange}
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
}
