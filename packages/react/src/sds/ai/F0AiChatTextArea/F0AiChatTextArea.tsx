import { AnimatePresence, motion } from "motion/react"
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"

import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { useReducedMotion } from "@/lib/a11y"
import { Link } from "@/lib/linkHandler"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { useRevealOnChange } from "../F0AiChat/hooks/useRevealOnChange"
import { useAiChat } from "../F0AiChat/providers/AiChatStateProvider"
import { ActionBar } from "./components/ActionBar"
import { AttachedFilesList } from "./components/AttachedFilesList"
import { CreditWarningWrapper } from "./components/CreditWarningWrapper"
import { MentionPopover } from "./components/MentionPopover"
import { PendingQuoteChip } from "./components/PendingQuoteChip"
import { TextareaField } from "./components/TextareaField"
import { WelcomeScreenCardsRow } from "./components/WelcomeScreenCardsRow"
import { WelcomeScreenSuggestionsRow } from "./components/WelcomeScreenSuggestionsRow"
import type {
  WelcomeScreenSuggestion,
  WelcomeScreenSuggestionItem,
} from "../F0AiChat/types"
import { buildHighlightSegments } from "./highlight-utils"
import { type F0AiChatTextAreaProps } from "./types"
import { type RecorderError, useAudioRecorder } from "./useAudioRecorder"
import { useFileAttachments } from "./useFileAttachments"
import { useMentions } from "./useMentions"

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
  clarifyingUI,
  pendingContext = null,
  onPendingContextChange,
  pendingQuote = null,
  onPendingQuoteChange,
  fileAttachments,
  toolbarStart,
  onTranscribe,
  searchPersons,
  onProcessFilesRef,
  disclaimer,
  footer,
  isWelcomeScreen = false,
  fullscreen = false,
  welcomeScreenSuggestions,
  onSuggestionClick,
  welcomeScreenCards,
  ref,
  apiRef,
  onChange,
  showSubmitButton = true,
}: F0AiChatTextAreaProps) => {
  const translation = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const [inputValue, setInputValue] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const [isPreSending, setIsPreSending] = useState(false)
  // Set when the user hits send while an attachment is still uploading: the
  // submit is queued and fired once uploads finish (see effect below), so the
  // message goes WITH the file instead of being dropped or sent without it.
  const [pendingSubmit, setPendingSubmit] = useState(false)
  const [hoveredSuggestion, setHoveredSuggestion] =
    useState<WelcomeScreenSuggestionItem | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  const isClarifying = clarifyingUI != null

  // Fire `tracking.onWelcomeSuggestionClick` from inside the textarea so
  // hosts only need to wire the `onSuggestionClick` business action.
  // When the textarea is rendered outside an `F0AiChatProvider` the
  // tracking ref resolves to a no-op via the provider fallback.
  const { tracking } = useAiChat()
  const handleSuggestionClick = useCallback(
    (item: WelcomeScreenSuggestionItem, group: WelcomeScreenSuggestion) => {
      tracking?.onWelcomeSuggestionClick?.({
        item,
        group,
        prompt: item.prompt || item.title,
      })
      onSuggestionClick?.(item, group)
    },
    [tracking, onSuggestionClick]
  )

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
    showTransientError,
  } = useFileAttachments(fileAttachments)

  const mentions = useMentions({
    inputValue,
    setInputValue,
    cursorPosition,
    searchPersons,
    textareaRef,
  })

  // Voice dictation. Transcripts are written onto whatever was already typed
  // (captured when recording starts) so dictation appends instead of replacing.
  const dictationBaseRef = useRef("")
  const applyDictation = useCallback((text: string) => {
    const base = dictationBaseRef.current
    const separator = base && !/\s$/.test(base) ? " " : ""
    const next = `${base}${separator}${text}`
    setInputValue(next)
    setCursorPosition(next.length)
  }, [])
  const recorderErrorMessage: Record<RecorderError, string> = {
    "permission-denied": translation.ai.micPermissionDenied,
    "device-error": translation.ai.micError,
    "transcription-failed": translation.ai.transcriptionError,
  }
  const recorder = useAudioRecorder({
    onTranscribe,
    onPartial: applyDictation,
    onFinal: (text) => {
      applyDictation(text)
      textareaRef.current?.focus()
    },
    onError: (error) => showTransientError(recorderErrorMessage[error]),
  })
  const canRecord = !!onTranscribe && recorder.isSupported
  const handleStartRecording = useCallback(() => {
    tracking?.onDictationStart?.()
    dictationBaseRef.current = inputValue
    void recorder.start()
  }, [inputValue, recorder, tracking])
  const handleCancelRecording = useCallback(() => {
    tracking?.onDictationCancel?.()
    recorder.cancel()
  }, [recorder, tracking])

  // Imperative handle for external control: populate the textarea, submit it
  // (same path as the built-in button and Enter, so the full pipeline runs),
  // or focus it. Mirrors the house pattern used by `F0RichTextEditorHandle`.
  // The plain `ref` stays the container DOM node; this rides on `apiRef`.
  useImperativeHandle(apiRef, () => ({
    setContent: (content: string) => {
      setInputValue(content)
      setCursorPosition(content.length)
    },
    getContent: () => inputValue,
    clear: () => {
      setInputValue("")
      setCursorPosition(0)
    },
    submit: () => formRef.current?.requestSubmit(),
    focus: () => textareaRef.current?.focus(),
  }))

  // Notify the host of every content change (typing, dictation, mention
  // insertion, setContent, clear-on-submit) so it can react to the value —
  // e.g. enable/disable an external submit button.
  useEffect(() => {
    onChange?.(inputValue)
  }, [inputValue, onChange])

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

  // While recording, the placeholder becomes "Listening…" so the empty
  // textarea signals that dictation is live.
  const isRecording = recorder.status === "recording"
  const resolvedDefaultPlaceholder = isRecording
    ? translation.ai.listening
    : translation.ai.inputPlaceholder
  const uploadedFiles = attachedFiles.filter((f) => f.status === "uploaded")
  const isUploading = attachedFiles.some((f) => f.status === "uploading")
  const hasErrorFiles = attachedFiles.some((f) => f.status === "error")
  const hasDataToSend = inputValue.trim().length > 0 || uploadedFiles.length > 0

  // Fire a queued submit once all attachments finish uploading. If an upload
  // failed, do NOT auto-send (the message would go without the file) — surface
  // a transient banner so the user knows the click was acknowledged but the
  // send was blocked, instead of silently swallowing the event.
  useEffect(() => {
    if (!pendingSubmit || isUploading) return
    setPendingSubmit(false)
    if (hasErrorFiles) {
      showTransientError(translation.ai.fileUploadBlockedSubmit)
      return
    }
    formRef.current?.requestSubmit()
  }, [
    pendingSubmit,
    isUploading,
    hasErrorFiles,
    showTransientError,
    translation.ai.fileUploadBlockedSubmit,
  ])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // When clarifying, form submit is a no-op — the panel handles its own confirm
    if (isClarifying) return

    mentions.close()
    if (inProgress) {
      onStop?.()
    } else if (hasDataToSend && !isPreSending) {
      // Attachment still uploading: queue the send instead of dropping it.
      if (isUploading) {
        setPendingSubmit(true)
        textareaRef.current?.focus()
        return
      }
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
      // and only features we control (@mentions) produce rich rendering.
      const safeUserText = escapeUserText(transformed)

      const files = uploadedFiles.flatMap((f) =>
        f.uploadedFile ? [f.uploadedFile] : []
      )

      const consumedContext = pendingContext
      const consumedQuote = pendingQuote
      if (consumedContext) onPendingContextChange?.(null)
      if (consumedQuote) onPendingQuoteChange?.(null)

      await onSubmit({
        text: safeUserText,
        files,
        context: consumedContext,
        quote: consumedQuote,
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

  // Hovering a welcome suggestion replaces the rotating placeholders with the
  // hovered item's prompt so the user can preview what's about to be sent.
  const previewPlaceholder = hoveredSuggestion
    ? (hoveredSuggestion.prompt ?? hoveredSuggestion.title)
    : null
  const effectivePlaceholders = isRecording
    ? [translation.ai.listening]
    : previewPlaceholder
      ? [previewPlaceholder]
      : (placeholders ?? [])
  const multiplePlaceholders = effectivePlaceholders.length > 1

  const highlightSegments = useMemo(() => {
    return buildHighlightSegments(inputValue, mentions.mentions, {
      cursorPosition,
      inlineCompletion: mentions.inlineCompletion,
    })
  }, [inputValue, mentions.mentions, cursorPosition, mentions.inlineCompletion])

  const hasOverlay =
    mentions.mentions.length > 0 || mentions.inlineCompletion !== null

  // Welcome suggestions row. On the welcome screen it always sits above the
  // textarea (both sidepanel and fullscreen); the popover opens upward so it
  // doesn't cover the composer.
  const showSuggestions =
    isWelcomeScreen &&
    !!welcomeScreenSuggestions &&
    welcomeScreenSuggestions.length > 0 &&
    !!onSuggestionClick

  const suggestionsRow = showSuggestions ? (
    <WelcomeScreenSuggestionsRow
      suggestions={welcomeScreenSuggestions}
      onItemClick={handleSuggestionClick}
      onItemHover={setHoveredSuggestion}
      side="top"
    />
  ) : null

  // Welcome cards sit below the composer on the fullscreen welcome screen
  // (same gate the footer slot uses). Each card carries its own `onClick`;
  // the host owns the behavior.
  const showWelcomeCards =
    isWelcomeScreen &&
    fullscreen &&
    !!welcomeScreenCards &&
    welcomeScreenCards.length > 0

  const isFullscreenWelcome = fullscreen && isWelcomeScreen

  // Reveal the composer when the welcome screen gives way to the conversation
  // (sending the first message) — the textarea drops from the centered welcome
  // position to the bottom. Hide-before-paint + soft fade, same as the
  // mode-change reveal. Only applied in fullscreen, where the textarea actually
  // repositions (in sidepanel it already sits at the bottom). Mode toggles are
  // handled one level up in F0AiChat, so this never double-fires.
  const { motionProps: composerReveal } = useRevealOnChange(
    isWelcomeScreen,
    160,
    0.5
  )

  return (
    <motion.div
      ref={ref}
      className={cn(
        "flex flex-col items-center gap-2 px-4 pb-3 pt-2",
        isFullscreenWelcome && "min-h-0 flex-1 justify-start -mt-20"
      )}
      {...(fullscreen ? composerReveal : {})}
    >
      <div className="flex w-full max-w-content flex-col gap-2">
        {suggestionsRow && <div>{suggestionsRow}</div>}
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
                <motion.div
                  key="clarifying"
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      duration: shouldReduceMotion ? 0 : 0.22,
                      ease: [0.4, 0, 1, 1],
                    },
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {clarifyingUI}
                </motion.div>
              ) : (
                <motion.div
                  key="input"
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      duration: shouldReduceMotion ? 0 : 0.15,
                      ease: [0.55, 0, 1, 0.45],
                    },
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.4,
                    ease: [0.4, 0, 0.2, 1],
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
                    placeholders={effectivePlaceholders}
                    resolvedDefaultPlaceholder={resolvedDefaultPlaceholder}
                    inProgress={inProgress}
                  />

                  <ActionBar
                    onUploadFiles={onUploadFiles}
                    toolbarStart={toolbarStart}
                    isAtMaxFiles={isAtMaxFiles}
                    maxFiles={maxFiles}
                    acceptValue={acceptValue}
                    fileInputRef={fileInputRef}
                    handleFileSelect={handleFileSelect}
                    inProgress={inProgress}
                    hasDataToSend={hasDataToSend}
                    isPreSending={isPreSending || pendingSubmit}
                    showSubmitButton={showSubmitButton}
                    canRecord={canRecord}
                    recordingStatus={recorder.status}
                    recordingStream={recorder.stream}
                    onStartRecording={handleStartRecording}
                    onStopRecording={recorder.stop}
                    onCancelRecording={handleCancelRecording}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </CreditWarningWrapper>
      </div>

      {showWelcomeCards && (
        <div className="w-full max-w-content pt-2">
          <WelcomeScreenCardsRow cards={welcomeScreenCards} />
        </div>
      )}

      {footer && isWelcomeScreen && fullscreen && (
        <div className="w-full py-4 mx-auto flex max-w-content justify-center">
          {footer}
        </div>
      )}

      <AnimatePresence mode="wait" initial={false}>
        {isClarifying ? (
          <motion.div
            key="clarifying-nav-hint"
            className="flex w-full max-w-content flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-f1-foreground-tertiary"
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
          !isFullscreenWelcome && (
            <motion.div
              key="chat-disclaimer"
              className="flex w-full max-w-content flex-row items-center justify-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.3,
                ease: "easeOut",
              }}
            >
              {disclaimer.onClick ? (
                <button
                  type="button"
                  onClick={disclaimer.onClick}
                  className={cn(
                    "group min-w-0 cursor-pointer bg-transparent p-0 text-inherit",
                    "transition-transform duration-700 ease-out",
                    "hover:scale-[1.02] focus-visible:scale-[1.02]",
                    "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
                  )}
                >
                  <OneEllipsis
                    className={cn(
                      "text-sm font-medium text-f1-foreground-tertiary transition-colors duration-700 ease-out",
                      "group-hover:bg-gradient-to-r group-hover:from-[#E55619] group-hover:to-[#A1ADE5] group-hover:bg-clip-text group-hover:text-transparent",
                      "group-focus-visible:bg-gradient-to-r group-focus-visible:from-[#E55619] group-focus-visible:to-[#A1ADE5] group-focus-visible:bg-clip-text group-focus-visible:text-transparent"
                    )}
                  >
                    {disclaimer.text}
                  </OneEllipsis>
                </button>
              ) : (
                <OneEllipsis className="text-sm font-medium text-f1-foreground-tertiary">
                  {disclaimer.text}
                </OneEllipsis>
              )}

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
    </motion.div>
  )
}
