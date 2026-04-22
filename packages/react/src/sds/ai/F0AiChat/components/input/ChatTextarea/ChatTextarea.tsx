import { useCopilotChatInternal } from "@copilotkit/react-core"
import { randomId } from "@copilotkit/shared"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useAiChat } from "../../../providers/AiChatStateProvider"
import { ClarifyingQuestionPanel } from "../ClarifyingQuestionPanel"
import { MentionPopover } from "../MentionPopover"
import { useMentions } from "../useMentions"
import { buildHighlightSegments } from "../utils"
import { ActionBar } from "./ActionBar"
import { AttachedFilesList } from "./AttachedFilesList"
import { CreditWarningWrapper } from "./CreditWarningWrapper"
import { DropOverlay } from "./DropOverlay"
import { PendingQuoteChip } from "./PendingQuoteChip"
import { TextareaField } from "./TextareaField"
import {
  type ChatTextareaProps,
  type UserBinaryPart,
  type UserTextPart,
} from "./types"
import { useFileAttachments } from "./useFileAttachments"

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}

/** Escape HTML entities so the quoted selection can't inject markup. */
const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => HTML_ESCAPES[c])

/** Markdown syntax characters that would otherwise trigger formatting. */
const MD_SPECIAL = /[\\`*_{}[\]()#+\-.!|~>]/g

/**
 * Neutralize markdown / HTML metacharacters in user-typed text so `*hola*`,
 * `# title`, `> quote`, etc. render literally in the bubble. Preserves the
 * `<entity-ref>` tags that `transformMentions` inserts, so @mentions keep
 * their interactive rendering.
 */
const escapeUserText = (s: string): string =>
  s
    .split(/(<entity-ref\b[^>]*>[\s\S]*?<\/entity-ref>)/g)
    .map((part, i) => {
      // Odd indices are entity-ref tags produced by transformMentions — leave
      // them intact so the markdown renderer can turn them into chips.
      if (i % 2 === 1) return part
      return part
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(MD_SPECIAL, "\\$&")
    })
    .join("")

export const ChatTextarea = ({
  submitLabel,
  inProgress,
  onSend,
  onStop,
  creditWarning,
}: ChatTextareaProps) => {
  const {
    placeholders,
    entityRefs,
    toolHints,
    activeToolHint,
    setActiveToolHint,
    fileAttachments,
    sendMessage,
    clarifyingQuestion,
    fileDragOver,
    pendingContext,
    setPendingContext,
    pendingQuote,
    setPendingQuote,
  } = useAiChat()
  const { messages, setMessages } = useCopilotChatInternal()
  const translation = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const messagesRef = useRef(messages)
  messagesRef.current = messages
  const [inputValue, setInputValue] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  const isClarifying = clarifyingQuestion !== null

  const {
    attachedFiles,
    fileInputRef,
    onUploadFiles,
    acceptValue,
    isAtMaxFiles,
    processFiles,
    handleFileSelect,
    handleRemoveFile,
    clearFiles,
  } = useFileAttachments(fileAttachments)

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

    // When clarifying, form submit is a no-op — the panel handles its own confirm
    if (isClarifying) return

    mentions.close()
    if (inProgress) {
      handleStop()
    } else if (hasDataToSend && !isUploading) {
      const transformed = mentions.transformMentions(inputValue.trim())
      // Escape markdown/HTML in the user's own text so `*hola*` stays literal
      // and only features we control (quote blockquote, @mentions, tool
      // hints) produce rich rendering in the bubble.
      const safeUserText = escapeUserText(transformed)

      const withToolHint = activeToolHint
        ? `<tool-context tool="${activeToolHint.id}">${activeToolHint.prompt}</tool-context>\n\n${safeUserText}`
        : safeUserText

      // When replying to a selected fragment, prepend the quote as a
      // dedicated `<reply-quote>` tag. `UserMessage` strips this tag from
      // the bubble content and renders the quote above the bubble (see
      // the design: muted text with a reply arrow icon, mirroring the
      // bubble alignment). Newlines are encoded as <br/> so they survive
      // the HTML round-trip.
      const withQuote = pendingQuote
        ? `<reply-quote>${escapeHtml(pendingQuote.text).replace(/\n/g, "<br/>")}</reply-quote>${withToolHint}`
        : withToolHint

      const files = uploadedFiles.flatMap((f) =>
        f.uploadedFile ? [f.uploadedFile] : []
      )

      // When there's pending context or files, send as multipart content.
      // The context goes as a separate text part so the agent sees it
      // without polluting the user's visible text.
      if (pendingContext || files.length > 0) {
        const contentParts: Array<UserTextPart | UserBinaryPart> = [
          ...(pendingContext
            ? [
                {
                  type: "text" as const,
                  text: `<pending-context>${pendingContext.context}</pending-context>`,
                },
              ]
            : []),
          ...files.map((file) => ({
            type: "binary" as const,
            url: file.url,
            filename: file.filename,
            mimeType: file.mimetype,
          })),
          { type: "text" as const, text: withQuote },
        ]

        if (pendingContext) setPendingContext(null)
        if (pendingQuote) setPendingQuote(null)

        sendMessage({
          id: crypto.randomUUID(),
          role: "user",
          content: contentParts,
        })
      } else {
        if (pendingQuote) setPendingQuote(null)
        onSend(withQuote)
      }

      setInputValue("")
      clearFiles()
    }

    textareaRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isClarifying) return
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

  return (
    <CreditWarningWrapper creditWarning={creditWarning}>
      <motion.form
        aria-busy={inProgress}
        ref={formRef}
        className={cn(
          "relative isolate z-20",
          "flex flex-col items-stretch md:gap-3 gap-2",
          "rounded-lg border border-solid border-f1-border has-[textarea:focus]:border-f1-border-secondary",
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
          "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100",
          isClarifying && "after:scale-100 after:opacity-100"
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
          if (!isClarifying) {
            textareaRef.current?.focus()
          }
        }}
        onSubmit={handleSubmit}
      >
        <DropOverlay
          visible={fileDragOver}
          onFilesDropped={(files) => {
            void processFiles(files)
          }}
        />
        <MentionPopover
          isOpen={mentions.isOpen}
          results={mentions.results}
          isLoading={mentions.isLoading}
          selectedIndex={mentions.selectedIndex}
          position={mentions.popoverPosition}
          onSelect={mentions.selectPerson}
        />

        <AnimatePresence initial={false}>
          {isClarifying ? (
            <ClarifyingQuestionPanel
              key="clarifying"
              clarifyingQuestion={clarifyingQuestion}
            />
          ) : (
            <motion.div
              key="input"
              className="overflow-hidden"
              initial={{ height: "auto", opacity: 1 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.3,
                ease: "easeOut",
              }}
            >
              {pendingQuote && (
                <PendingQuoteChip
                  quote={pendingQuote}
                  onRemove={() => setPendingQuote(null)}
                />
              )}

              <AttachedFilesList
                attachedFiles={attachedFiles}
                isUploading={isUploading}
                onRemove={handleRemoveFile}
                removeLabel={translation.ai.removeFile}
              />

              <TextareaField
                textareaRef={textareaRef}
                highlightRef={highlightRef}
                inputValue={inputValue}
                onInputChange={(value, cursorPos) => {
                  setInputValue(value)
                  setCursorPosition(cursorPos)
                }}
                onKeyDown={handleKeyDown}
                onCursorUpdate={updateCursorPosition}
                onScroll={syncHighlightScroll}
                highlightSegments={highlightSegments}
                hasOverlay={hasOverlay}
                multiplePlaceholders={multiplePlaceholders}
                placeholders={placeholders ?? []}
                resolvedDefaultPlaceholder={resolvedDefaultPlaceholder}
                inProgress={inProgress}
              />

              <ActionBar
                onUploadFiles={onUploadFiles}
                isAtMaxFiles={isAtMaxFiles}
                acceptValue={acceptValue}
                fileInputRef={fileInputRef}
                handleFileSelect={handleFileSelect}
                toolHints={toolHints}
                activeToolHint={activeToolHint}
                setActiveToolHint={setActiveToolHint}
                inProgress={inProgress}
                hasDataToSend={hasDataToSend}
                isUploading={isUploading}
                submitLabel={submitLabel}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </CreditWarningWrapper>
  )
}
