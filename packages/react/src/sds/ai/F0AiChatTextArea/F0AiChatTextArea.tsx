import { AnimatePresence, motion } from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"

import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { useReducedMotion } from "@/lib/a11y"
import { Link } from "@/lib/linkHandler"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { F0ClarifyingPanel } from "../F0ClarifyingPanel"

import { ActionBar } from "./components/ActionBar"
import { AttachedFilesList } from "./components/AttachedFilesList"
import { CreditWarningWrapper } from "./components/CreditWarningWrapper"
import { MentionPopover } from "./components/MentionPopover"
import { PendingQuoteChip } from "./components/PendingQuoteChip"
import { TextareaField } from "./components/TextareaField"
import { buildHighlightSegments } from "./highlight-utils"
import { type F0AiChatTextAreaProps } from "./types"
import { useFileAttachments } from "./useFileAttachments"
import { useMentions } from "./useMentions"

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

/**
 * Headless chat composer.
 *
 * Owns local UI state (text, cursor, attached files, mention popover) and
 * emits a structured payload via `onSubmit`. The consumer decides what to
 * do with it (forward to CopilotKit, log it, mock it…). It carries no
 * coupling to `useAiChat()` or CopilotKit — wrappers like F0AiChat
 * provide the wiring.
 */
export const F0AiChatTextArea = ({
  onSubmit,
  onStop,
  inProgress,
  onBeforeSubmit,
  placeholders,
  creditWarning,
  clarifyingQuestion = null,
  pendingContext = null,
  onPendingContextChange,
  pendingQuote = null,
  onPendingQuoteChange,
  fileAttachments,
  searchPersons,
  onProcessFilesRef,
  disclaimer,
  footer,
  isWelcomeScreen = false,
  fullscreen = false,
}: F0AiChatTextAreaProps) => {
  const fullscreenWelcome = fullscreen && isWelcomeScreen
  const translation = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const [inputValue, setInputValue] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const [isPreSending, setIsPreSending] = useState(false)
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
    maxFiles,
    processFiles,
    handleFileSelect,
    handleRemoveFile,
    clearFiles,
    transientError,
  } = useFileAttachments(fileAttachments)

  const mentions = useMentions({
    inputValue,
    setInputValue,
    cursorPosition,
    searchPersons,
    textareaRef,
  })

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash.length === 0) {
      textareaRef.current?.focus()
    }
  }, [])

  // Expose the file-drop handler to parents that own a wider drop zone
  // (e.g. the whole chat window). The handler is stable for the lifetime
  // of the textarea — `processFiles` keeps its identity unless its
  // dependencies change, which the parent re-registers automatically.
  useEffect(() => {
    if (!onProcessFilesRef) return
    onProcessFilesRef((files) => {
      void processFiles(files)
    })
    return () => {
      onProcessFilesRef(null)
    }
  }, [onProcessFilesRef, processFiles])

  const resolvedDefaultPlaceholder = translation.ai.inputPlaceholder
  const uploadedFiles = attachedFiles.filter((f) => f.status === "uploaded")
  const isUploading = attachedFiles.some((f) => f.status === "uploading")
  const hasDataToSend = inputValue.trim().length > 0

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // When clarifying, form submit is a no-op — the panel handles its own confirm
    if (isClarifying) return

    mentions.close()
    if (inProgress) {
      onStop?.()
    } else if (hasDataToSend && !isUploading && !isPreSending) {
      if (onBeforeSubmit) {
        setIsPreSending(true)
        try {
          if ((await onBeforeSubmit()) === false) {
            textareaRef.current?.focus()
            return
          }
        } finally {
          setIsPreSending(false)
        }
      }

      const transformed = mentions.transformMentions(inputValue.trim())
      // Escape markdown/HTML in the user's own text so `*hola*` stays literal
      // and only features we control (quote blockquote, @mentions) produce
      // rich rendering in the bubble.
      const safeUserText = escapeUserText(transformed)

      // When replying to a selected fragment, prepend the quote as a
      // dedicated `<reply-quote>` tag. The renderer strips this tag from
      // the bubble content and renders the quote above the bubble.
      const withQuote = pendingQuote
        ? `<reply-quote>${escapeHtml(pendingQuote.text).replace(/\n/g, "<br/>")}</reply-quote>${safeUserText}`
        : safeUserText

      const files = uploadedFiles.flatMap((f) =>
        f.uploadedFile ? [f.uploadedFile] : []
      )

      const consumedContext = pendingContext
      if (consumedContext) onPendingContextChange?.(null)
      if (pendingQuote) onPendingQuoteChange?.(null)

      await onSubmit({
        text: withQuote,
        files,
        context: consumedContext,
      })

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
    <div
      className={cn(
        "flex flex-col items-center gap-2 px-4 pb-3 pt-2",
        fullscreenWelcome && "flex-1"
      )}
    >
      <div className="w-full max-w-[712px]">
        <CreditWarningWrapper creditWarning={creditWarning}>
          <motion.form
            aria-busy={inProgress}
            ref={formRef}
            className={cn(
              "relative isolate z-20",
              "flex flex-col items-stretch md:gap-3 gap-2",
              "rounded-lg border border-solid border-f1-border has-[textarea:focus]:border-f1-background-tertiary",
              "transition-all hover:cursor-text",
              "p-0",
              "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
              "before:rounded-[inherit] before:bg-f1-background before:content-['']",
              "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
              "after:rounded-md after:blur-[6px] after:content-['']",
              "after:scale-90 after:opacity-0",
              "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
              "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
              "after:transition-all after:delay-200 after:duration-300",
              "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100",
              isClarifying &&
                "after:scale-100 after:opacity-100 border-f1-background-tertiary"
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
                <F0ClarifyingPanel
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
                      onRemove={() => onPendingQuoteChange?.(null)}
                    />
                  )}

                  <AnimatePresence initial={false}>
                    {transientError && (
                      <motion.div
                        key="transient-error"
                        role="alert"
                        aria-live="polite"
                        className="p-1"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.2,
                          ease: "easeOut",
                        }}
                      >
                        <div
                          className={cn(
                            "flex w-full flex-row items-center gap-2 rounded-md p-2 pr-3",
                            "bg-f1-background-critical text-f1-foreground"
                          )}
                        >
                          <div className="h-6 w-6 flex-shrink-0">
                            <F0AvatarAlert type="critical" size="sm" />
                          </div>
                          <p className="font-medium text-f1-foreground-critical">
                            {transientError}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

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
                    maxFiles={maxFiles}
                    acceptValue={acceptValue}
                    fileInputRef={fileInputRef}
                    handleFileSelect={handleFileSelect}
                    inProgress={inProgress}
                    hasDataToSend={hasDataToSend}
                    isUploading={isUploading}
                    isPreSending={isPreSending}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </CreditWarningWrapper>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {isClarifying ? (
          <motion.div
            key="clarifying-nav-hint"
            className="flex w-full max-w-[712px] flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-f1-foreground-tertiary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <span>
              <kbd className="font-sans">↑↓</kbd>{" "}
              {translation.ai.clarifyingQuestion.navHint.navigate}
            </span>
            <span>
              <kbd className="font-sans">Enter</kbd>{" "}
              {translation.ai.clarifyingQuestion.navHint.select}
            </span>
            <span>
              <kbd className="font-sans">Esc</kbd>{" "}
              {translation.ai.clarifyingQuestion.navHint.cancel}
            </span>
          </motion.div>
        ) : (
          disclaimer?.text &&
          !fullscreenWelcome && (
            <motion.div
              key="chat-disclaimer"
              className="flex w-full max-w-[712px] flex-row items-center justify-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <OneEllipsis className="text-sm font-medium text-f1-foreground-tertiary">
                {disclaimer.text}
              </OneEllipsis>

              {disclaimer.link && disclaimer.linkText && (
                <Link
                  href={disclaimer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary"
                >
                  {disclaimer.linkText}
                </Link>
              )}
            </motion.div>
          )
        )}
      </AnimatePresence>
      <AnimatePresence>
        {footer && isWelcomeScreen && (
          <motion.div
            key="chat-footer"
            className={cn(
              "w-full py-4 mx-auto max-w-[712px]",
              fullscreenWelcome && "mt-auto",
              fullscreen && "flex justify-center"
            )}
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {footer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
