import {
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { AnimatePresence, motion } from "motion/react"

import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0FileItem } from "@/components/F0FileItem"
import { ArrowUp, Check, Cross, Microphone, Paperclip } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Picker } from "@/kits/Social/Reactions/Picker"
import { RecordingWaveform } from "@/sds/ai/F0AiChatTextArea/components/RecordingWaveform"
import {
  type RecorderError,
  useAudioRecorder,
} from "@/sds/ai/F0AiChatTextArea/useAudioRecorder"
import { Skeleton } from "@/ui/skeleton"

import { buildHighlightSegments } from "../hooks/highlight-utils"
import { useMentions } from "../hooks/useMentions"
import { useF0Chat } from "../providers/F0ChatProvider"
import { useChatUI } from "../providers/ChatUIProvider"
import { type F0ChatAttachment } from "../types"
import { ChatMentionPopover } from "./ChatMentionPopover"
import { ChatReplyChip } from "./ChatReplyChip"
import { ChatTextareaField } from "./ChatTextareaField"

// How long a transient composer error (too many files, upload/voice failure)
// stays before it fades out — matches the AI chat.
const TRANSIENT_ERROR_MS = 4000

/** A pending composer attachment: a skeleton while it uploads, an F0FileItem
 * chip once the runtime resolves it (same pattern as the AI chat composer). */
type PendingAttachment =
  | { id: string; status: "uploading"; name: string }
  | { id: string; status: "ready"; attachment: F0ChatAttachment }

/** Composer: auto-growing textarea (no aura), attach, voice dictation, send.
 * Drag & drop is owned by the whole panel (F0Chat) and bridged here. */
export const ChatComposer = (): ReactNode => {
  const i18n = useI18n()
  const {
    sendMessage,
    onInputActivity,
    uploadFiles,
    transcribe,
    maxFiles,
    channel,
    searchMembers,
    currentUserId,
  } = useF0Chat()
  const { replyTo, setReplyTo, registerFileDropHandler } = useChatUI()
  const shouldReduceMotion = useReducedMotion()

  const [value, setValue] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const [attachments, setAttachments] = useState<PendingAttachment[]>([])
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Mentions are available wherever the host provides a member search — both
  // DMs (mention either person) and groups. The `@here` (everyone) option only
  // makes sense in a group, so it's offered there only.
  const mentionsEnabled = !!searchMembers
  const mentions = useMentions({
    inputValue: value,
    setInputValue: setValue,
    cursorPosition,
    textareaRef,
    enabled: mentionsEnabled,
    searchMembers,
    everyoneLabel:
      channel.type === "group" ? i18n.chat.mentionEveryone : undefined,
  })
  const highlightSegments = useMemo(
    () =>
      buildHighlightSegments(value, mentions.mentions, {
        cursorPosition,
        inlineCompletion: mentions.inlineCompletion,
        currentUserId,
      }),
    [
      value,
      mentions.mentions,
      cursorPosition,
      mentions.inlineCompletion,
      currentUserId,
    ]
  )
  const hasOverlay =
    mentions.mentions.length > 0 || mentions.inlineCompletion !== null
  // Monotonic id for pending attachments (avoids Date.now/random in render).
  const attachmentSeq = useRef(0)

  const isUploading = attachments.some((a) => a.status === "uploading")

  // Transient error flashed in the textarea (too many files, upload/voice
  // failure), auto-cleared after a few seconds — same pattern as the AI chat.
  const [transientError, setTransientError] = useState<string | null>(null)
  const transientErrorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  )
  const showTransientError = useCallback((message: string) => {
    if (transientErrorTimeoutRef.current) {
      clearTimeout(transientErrorTimeoutRef.current)
    }
    setTransientError(message)
    transientErrorTimeoutRef.current = setTimeout(() => {
      setTransientError(null)
      transientErrorTimeoutRef.current = null
    }, TRANSIENT_ERROR_MS)
  }, [])
  useEffect(
    () => () => {
      if (transientErrorTimeoutRef.current) {
        clearTimeout(transientErrorTimeoutRef.current)
      }
    },
    []
  )

  // Mirror the attachment count in a ref so the upload handler can read the
  // current total without depending on it (keeps its identity stable).
  const attachedCountRef = useRef(0)
  useEffect(() => {
    attachedCountRef.current = attachments.length
  }, [attachments])

  // Voice dictation — same recorder + waveform the AI chat (and RichText) use.
  // Partials stream into the textarea, appended to whatever was already typed.
  // The grid sizer in ChatTextareaField auto-grows the box, so no manual height.
  const baseValueRef = useRef("")
  const fillFromTranscript = useCallback((text: string) => {
    const base = baseValueRef.current
    const next = base ? `${base} ${text}` : text
    setValue(next)
    setCursorPosition(next.length)
  }, [])
  const recorderErrorMessage: Record<RecorderError, string> = {
    "permission-denied": i18n.chat.micPermissionDenied,
    "device-error": i18n.chat.micError,
    "transcription-failed": i18n.chat.transcriptionError,
  }
  const recorder = useAudioRecorder({
    onTranscribe: transcribe,
    onPartial: fillFromTranscript,
    onFinal: fillFromTranscript,
    onError: (error) => showTransientError(recorderErrorMessage[error]),
  })
  const isTranscribing = recorder.status === "transcribing"
  const isRecording = recorder.status === "recording"
  const canRecord = !!transcribe && recorder.isSupported

  const canSend =
    (value.trim().length > 0 || attachments.length > 0) &&
    !isTranscribing &&
    !isUploading

  const handleChange = useCallback(
    (next: string, cursorPos: number) => {
      setValue(next)
      setCursorPosition(cursorPos)
      onInputActivity()
    },
    [onInputActivity]
  )

  const updateCursorPosition = useCallback(() => {
    setCursorPosition(textareaRef.current?.selectionStart ?? 0)
  }, [])

  const syncHighlightScroll = useCallback(() => {
    if (highlightRef.current && textareaRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop
    }
  }, [])

  const handleUpload = useCallback(
    async (files: File[]) => {
      if (files.length === 0 || !uploadFiles) return
      // Reject the whole batch when it would exceed the cap — a transient banner
      // is friendlier than silently truncating the user's selection.
      if (
        maxFiles !== undefined &&
        attachedCountRef.current + files.length > maxFiles
      ) {
        showTransientError(
          i18n.chat.tooManyFilesError.replace("{{maxFiles}}", String(maxFiles))
        )
        return
      }
      // Show a skeleton per file immediately, then swap each for its chip once
      // the runtime resolves the upload (or drop them + flash an error if it fails).
      const pending = files.map((file) => ({
        id: `att-${attachmentSeq.current++}`,
        status: "uploading" as const,
        name: file.name,
      }))
      setAttachments((prev) => [...prev, ...pending])
      const pendingIds = new Set(pending.map((p) => p.id))
      try {
        const uploaded = await uploadFiles(files)
        const ready: PendingAttachment[] = uploaded.map((attachment, i) => ({
          id: pending[i]?.id ?? `att-${attachmentSeq.current++}`,
          status: "ready",
          attachment,
        }))
        setAttachments((prev) => [
          ...prev.filter((a) => !pendingIds.has(a.id)),
          ...ready,
        ])
      } catch {
        setAttachments((prev) => prev.filter((a) => !pendingIds.has(a.id)))
        showTransientError(i18n.chat.fileUploadError)
      }
    },
    [
      uploadFiles,
      maxFiles,
      showTransientError,
      i18n.chat.tooManyFilesError,
      i18n.chat.fileUploadError,
    ]
  )

  // Files dropped anywhere on the panel (F0Chat owns the drop zone) land here.
  useEffect(() => {
    registerFileDropHandler((files) => void handleUpload(files))
  }, [registerFileDropHandler, handleUpload])

  const handleSend = useCallback(() => {
    if (!canSend) return
    const ready = attachments.flatMap((a) =>
      a.status === "ready" ? [a.attachment] : []
    )
    const { mentions: mentioned, mentionedEveryone } = mentions.getMentions()
    sendMessage({
      body: value.trim(),
      attachments: ready.length > 0 ? ready : undefined,
      replyToId: replyTo?.id,
      mentions: mentioned.length > 0 ? mentioned : undefined,
      mentionedEveryone: mentionedEveryone || undefined,
    })
    mentions.close()
    setValue("")
    setCursorPosition(0)
    setAttachments([])
    setReplyTo(null)
  }, [attachments, canSend, mentions, replyTo, sendMessage, setReplyTo, value])

  // Insert a picked emoji at the caret (the textarea keeps its selection while
  // blurred), then restore focus and the caret just after it.
  const insertEmoji = useCallback(
    (emoji: string) => {
      const el = textareaRef.current
      const start = el?.selectionStart ?? el?.value.length ?? 0
      const end = el?.selectionEnd ?? el?.value.length ?? 0
      const caret = start + emoji.length
      setValue((prev) => prev.slice(0, start) + emoji + prev.slice(end))
      setCursorPosition(caret)
      onInputActivity()
      requestAnimationFrame(() => {
        const node = textareaRef.current
        if (node) {
          node.focus()
          node.setSelectionRange(caret, caret)
        }
      })
    },
    [onInputActivity]
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      // The mention popover consumes navigation keys first (↑↓/Enter/Tab/Esc).
      if (mentions.handleKeyDown(e)) return
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    },
    [handleSend, mentions]
  )

  const startRecording = useCallback(() => {
    baseValueRef.current = value
    void recorder.start()
  }, [recorder, value])

  const placeholder = i18n.chat.placeholder

  return (
    <div className="shrink-0 p-4 pt-1">
      {/* Centered, width-capped to match the message column in fullscreen. */}
      <div className="mx-auto w-full max-w-content">
        <div className="relative rounded-lg border border-solid border-f1-border bg-f1-background flex flex-col">
          <ChatMentionPopover
            isOpen={mentions.isOpen}
            results={mentions.results}
            isLoading={mentions.isLoading}
            selectedIndex={mentions.selectedIndex}
            position={mentions.popoverPosition}
            onSelect={mentions.selectCandidate}
            everyoneDescription={i18n.chat.mentionEveryoneDescription}
          />
          {replyTo && (
            <ChatReplyChip
              message={replyTo}
              onRemove={() => setReplyTo(null)}
            />
          )}

          {/* Transient error (too many files, upload/voice failure) — flashed
              briefly, then fades out. Same pattern as the AI chat. */}
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

          {/* Pending attachments — a skeleton while uploading, then an
              F0FileItem chip with a remove action (same as the AI chat). */}
          {attachments.length > 0 && (
            <div
              aria-live="polite"
              aria-busy={isUploading}
              className="flex flex-wrap gap-1 px-1 pt-1"
            >
              {attachments.map((att) =>
                att.status === "uploading" ? (
                  <Skeleton key={att.id} className="h-9 w-36 rounded-[10px]" />
                ) : (
                  <F0FileItem
                    key={att.id}
                    size="md"
                    file={{
                      name: att.attachment.name,
                      type:
                        att.attachment.mimeType ??
                        (att.attachment.kind === "image" ? "image/png" : ""),
                    }}
                    actions={[
                      {
                        label: i18n.chat.removeFile,
                        icon: Cross,
                        onClick: () =>
                          setAttachments((prev) =>
                            prev.filter((a) => a.id !== att.id)
                          ),
                      },
                    ]}
                  />
                )
              )}
            </div>
          )}

          {/* The textarea stays during recording: it shows "Listening…" and
              fills with the live transcript — only the action row swaps. */}
          <ChatTextareaField
            textareaRef={textareaRef}
            highlightRef={highlightRef}
            value={value}
            placeholder={isRecording ? i18n.chat.listening : placeholder}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onCursorUpdate={updateCursorPosition}
            onScroll={syncHighlightScroll}
            highlightSegments={highlightSegments}
            hasOverlay={hasOverlay}
          />

          {isRecording ? (
            // Recording: amplitude timeline + cancel / confirm, matching the AI chat.
            <div className="flex items-center gap-3 p-3">
              <RecordingWaveform
                stream={recorder.stream}
                className="min-w-0 flex-1"
              />
              <div className="flex shrink-0 items-center gap-2">
                <ButtonInternal
                  variant="outline"
                  size="md"
                  hideLabel
                  label={i18n.chat.cancelRecording}
                  icon={Cross}
                  onClick={recorder.cancel}
                />
                <ButtonInternal
                  variant="default"
                  size="md"
                  hideLabel
                  label={i18n.chat.stopRecording}
                  icon={Check}
                  onClick={recorder.stop}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between p-3">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={(e) => {
                  void handleUpload(Array.from(e.target.files ?? []))
                  e.target.value = ""
                }}
              />
              <div className="flex items-center gap-1">
                <ButtonInternal
                  variant="outline"
                  size="md"
                  hideLabel
                  label={i18n.chat.attachFile}
                  icon={Paperclip}
                  onClick={() => fileInputRef.current?.click()}
                  disabled={!uploadFiles || isTranscribing}
                />
                {/* Insert emoji into the message (reuses the reactions picker). */}
                <Picker
                  variant="outline"
                  size="md"
                  label={i18n.chat.addEmoji}
                  onSelect={insertEmoji}
                />
              </div>
              <div className="flex items-center gap-1">
                {canRecord && (
                  <ButtonInternal
                    variant="outline"
                    size="md"
                    hideLabel
                    label={i18n.chat.recordAudio}
                    icon={Microphone}
                    onClick={startRecording}
                    loading={isTranscribing}
                  />
                )}
                <ButtonInternal
                  variant="default"
                  size="md"
                  hideLabel
                  label={i18n.actions.send}
                  icon={ArrowUp}
                  onClick={handleSend}
                  disabled={!canSend}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
