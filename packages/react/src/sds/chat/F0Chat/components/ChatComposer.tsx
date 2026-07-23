import { AnimatePresence, motion } from "motion/react"
import {
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0FileItem } from "@/components/F0FileItem"
import { ArrowUp, Check, Cross, Microphone, Paperclip } from "@/icons/app"
import { Picker } from "@/kits/Social/Reactions/Picker"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { containsEmojis } from "@/lib/text"
import { cn } from "@/lib/utils"
import { RecordingWaveform } from "@/sds/ai/F0AiChatTextArea/components/RecordingWaveform"
import {
  type RecorderError,
  useAudioRecorder,
} from "@/sds/ai/F0AiChatTextArea/useAudioRecorder"
import { Skeleton } from "@/ui/skeleton"

import { buildHighlightSegments } from "../hooks/highlight-utils"
import {
  MENTION_EVERYONE_ID,
  type MentionEntry,
  useMentions,
} from "../hooks/useMentions"
import { useTransientError } from "../hooks/useTransientError"
import {
  useChatDrop,
  useChatEdit,
  useChatReply,
} from "../providers/ChatUIProvider"
import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatAttachment } from "../types"
import {
  EASE_OUT_SWIFT,
  layoutTransition,
  microEnterTransition,
  microExitTransition,
} from "../utils/chat-motion"
import { ChatEditChip } from "./ChatEditChip"
import { ChatMentionPopover } from "./ChatMentionPopover"
import { ChatReplyChip } from "./ChatReplyChip"
import { ChatTextareaField } from "./ChatTextareaField"
import { FadeInImage } from "./FadeInImage"

/** A pending composer attachment: a skeleton while it uploads, then a square
 * image preview or an F0FileItem chip once the runtime resolves it. */
type PendingAttachment =
  | { id: string; status: "uploading"; name: string; isImage: boolean }
  | { id: string; status: "ready"; attachment: F0ChatAttachment }

const isImagePending = (att: PendingAttachment): boolean =>
  att.status === "uploading" ? att.isImage : att.attachment.kind === "image"

/** Composer: auto-growing textarea (no aura), attach, voice dictation, send.
 * Drag & drop is owned by the whole panel (F0Chat) and bridged here. */
export const ChatComposer = (): ReactNode => {
  const i18n = useI18n()
  const {
    sendMessage,
    editMessage,
    onInputActivity,
    stopTyping,
    uploadFiles,
    transcribe,
    maxFiles,
    channel,
    searchMembers,
    currentUserId,
    capabilities,
  } = useF0Chat()
  // Uploads need both the runtime hook AND the capability (a frozen channel
  // can forbid attachments even when the transport could upload them).
  const canUpload = !!uploadFiles && capabilities?.canUpload !== false
  const { replyTo, setReplyTo } = useChatReply()
  const { editingMessage, setEditingMessage } = useChatEdit()
  const { registerFileDropHandler } = useChatDrop()
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
  // The overlay also turns on when the text has emoji, so the composer can
  // paint twemoji (matching the bubble). Plain text keeps the native textarea
  // visible, so IME composition stays visible for non-emoji typing.
  const hasOverlay =
    mentions.mentions.length > 0 ||
    mentions.inlineCompletion !== null ||
    containsEmojis(value)
  // Monotonic id for pending attachments (avoids Date.now/random in render).
  const attachmentSeq = useRef(0)

  const isUploading = attachments.some((a) => a.status === "uploading")

  // Images render grouped first: mixing thumbnails and file chips in arrival
  // order makes the row jump in height at every boundary between the two.
  const orderedAttachments = useMemo(
    () => [
      ...attachments.filter(isImagePending),
      ...attachments.filter((att) => !isImagePending(att)),
    ],
    [attachments]
  )

  // Transient error flashed in the textarea (too many files, upload/voice
  // failure), auto-cleared after a few seconds — same pattern as the AI chat.
  const { error: transientError, show: showTransientError } =
    useTransientError()

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

  // Voice NOTES (WhatsApp-style): when the runtime can upload, the mic records
  // audio and sends it as its own message on confirm — no transcription.
  // Dictation (`transcribe`) remains the fallback when there's no uploadFiles.
  const voiceNotesEnabled = canUpload
  // While the confirmed recording uploads, the action row swaps for a "sending
  // voice note" status so the confirm→message gap isn't silent.
  const [isSendingVoiceNote, setIsSendingVoiceNote] = useState(false)
  const handleVoiceNote = useCallback(
    async (audio: Blob, durationMs: number) => {
      if (!uploadFiles) return
      // Set before any await so it batches with the recorder's own
      // setStatus("idle") — the recording row swaps straight to the sending row.
      setIsSendingVoiceNote(true)
      const type = audio.type || "audio/webm"
      const ext = type.includes("mp4")
        ? "m4a"
        : type.includes("ogg")
          ? "ogg"
          : "webm"
      const file = new File([audio], `voice-note.${ext}`, { type })
      try {
        const [uploaded] = await uploadFiles([file])
        if (uploaded && "url" in uploaded) {
          sendMessage({
            body: "",
            attachments: [
              {
                kind: "voice",
                url: uploaded.url,
                durationSeconds: Math.max(1, Math.round(durationMs / 1000)),
                mimeType: type,
                name: file.name,
              },
            ],
          })
        }
      } catch {
        showTransientError(i18n.chat.fileUploadError)
      } finally {
        setIsSendingVoiceNote(false)
      }
    },
    [uploadFiles, sendMessage, showTransientError, i18n.chat.fileUploadError]
  )

  const recorder = useAudioRecorder({
    onTranscribe: transcribe,
    onPartial: fillFromTranscript,
    onFinal: fillFromTranscript,
    onError: (error) => showTransientError(recorderErrorMessage[error]),
    onAudio: voiceNotesEnabled
      ? (audio, durationMs) => void handleVoiceNote(audio, durationMs)
      : undefined,
  })
  const isTranscribing = recorder.status === "transcribing"
  const isRecording = recorder.status === "recording"
  const canRecord = (voiceNotesEnabled || !!transcribe) && recorder.isSupported

  const canSend =
    (value.trim().length > 0 || attachments.length > 0) &&
    !isTranscribing &&
    !isUploading &&
    !isSendingVoiceNote

  // Activation pop for the send button: bump only on the false→true boundary
  // (state-from-props adjustment during render), so the remount-driven pop
  // fires once per activation — never per keystroke, never on deactivation.
  const [sendActivationEpoch, setSendActivationEpoch] = useState(0)
  const prevCanSendRef = useRef(canSend)
  if (prevCanSendRef.current !== canSend) {
    prevCanSendRef.current = canSend
    if (canSend) setSendActivationEpoch((epoch) => epoch + 1)
  }

  const handleChange = useCallback(
    (next: string, cursorPos: number) => {
      setValue(next)
      setCursorPosition(cursorPos)
      onInputActivity()
      // Clearing the text means typing stopped NOW — don't leave the
      // counterpart's dots hanging until the transport's timeout.
      if (next.trim().length === 0) void stopTyping?.()
    },
    [onInputActivity, stopTyping]
  )

  // Leaving the conversation mid-type must also drop the dots immediately.
  useEffect(
    () => () => {
      void stopTyping?.()
    },
    [stopTyping]
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
      if (files.length === 0 || !uploadFiles || !canUpload) return
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
        isImage: file.type.startsWith("image/"),
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
      canUpload,
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

  const isEditing = editingMessage !== null

  // Cancel an in-progress edit: drop the edit target and reset the composer.
  const cancelEdit = useCallback(() => {
    setEditingMessage(null)
    mentions.close()
    mentions.seedMentions([])
    setValue("")
    setCursorPosition(0)
    setAttachments([])
  }, [setEditingMessage, mentions.close, mentions.seedMentions])

  // Entering edit mode reloads the message into the composer — text, existing
  // attachments (as ready chips) and its mentions — then focuses at the end.
  useEffect(() => {
    if (!editingMessage) return
    setValue(editingMessage.body)
    setCursorPosition(editingMessage.body.length)
    setAttachments(
      (editingMessage.attachments ?? []).map((attachment) => ({
        id: `att-${attachmentSeq.current++}`,
        status: "ready" as const,
        attachment,
      }))
    )
    const entries: MentionEntry[] = [
      ...(editingMessage.mentions ?? []).map((m) => ({
        id: m.id,
        name: m.name,
        avatar: m.avatar,
        subtitle: m.subtitle,
        profileHref: m.profileHref,
      })),
      ...(editingMessage.mentionedEveryone && channel.type === "group"
        ? [{ id: MENTION_EVERYONE_ID, name: i18n.chat.mentionEveryone }]
        : []),
    ]
    mentions.seedMentions(entries)
    requestAnimationFrame(() => {
      const node = textareaRef.current
      if (node) {
        node.focus()
        const end = editingMessage.body.length
        node.setSelectionRange(end, end)
      }
    })
  }, [
    editingMessage,
    channel.type,
    i18n.chat.mentionEveryone,
    mentions.seedMentions,
  ])

  const handleSend = useCallback(() => {
    if (!canSend) return
    // Typing stopped by definition — the message is out (or the edit saved).
    void stopTyping?.()
    const ready = attachments.flatMap((a) =>
      a.status === "ready" ? [a.attachment] : []
    )
    const { mentions: mentioned, mentionedEveryone } = mentions.getMentions()

    // In edit mode, persist the changes to the existing message instead of
    // sending a new one, then reset the composer.
    if (editingMessage && editMessage) {
      editMessage(editingMessage.id, {
        body: value.trim(),
        attachments: ready.length > 0 ? ready : undefined,
        mentions: mentioned.length > 0 ? mentioned : undefined,
        mentionedEveryone: mentionedEveryone || undefined,
      })
      cancelEdit()
      return
    }

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
  }, [
    attachments,
    canSend,
    mentions,
    replyTo,
    sendMessage,
    setReplyTo,
    stopTyping,
    value,
    editingMessage,
    editMessage,
    cancelEdit,
  ])

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
      // Escape backs out of an edit (when the popover didn't claim it).
      if (e.key === "Escape" && isEditing) {
        e.preventDefault()
        cancelEdit()
        return
      }
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    },
    [handleSend, mentions, isEditing, cancelEdit]
  )

  const startRecording = useCallback(() => {
    baseValueRef.current = value
    void recorder.start()
  }, [recorder, value])

  const placeholder = i18n.chat.placeholder

  return (
    <div className="shrink-0 p-4 pt-0">
      {/* Centered, width-capped to match the message column in fullscreen. */}
      <div className="mx-auto w-full max-w-content">
        <div className="relative flex flex-col rounded-lg border border-solid border-f1-border bg-f1-background">
          <ChatMentionPopover
            isOpen={mentions.isOpen}
            results={mentions.results}
            isLoading={mentions.isLoading}
            selectedIndex={mentions.selectedIndex}
            position={mentions.popoverPosition}
            onSelect={mentions.selectCandidate}
            everyoneDescription={i18n.chat.mentionEveryoneDescription}
          />
          {/* Editing and replying are mutually exclusive — the edit chip takes
              the reply chip's slot while you're editing a message. The chip
              unfolds/collapses (height + fade); the transcript follows the
              composer edge continuously via its ResizeObserver re-pin.
              popLayout runs a reply→edit swap's exit and enter concurrently. */}
          <AnimatePresence initial={false} mode="popLayout">
            {isEditing && editingMessage ? (
              <motion.div
                key="edit-chip"
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.18,
                  ease: EASE_OUT_SWIFT,
                }}
              >
                <ChatEditChip message={editingMessage} onRemove={cancelEdit} />
              </motion.div>
            ) : replyTo ? (
              <motion.div
                key="reply-chip"
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.18,
                  ease: EASE_OUT_SWIFT,
                }}
              >
                <ChatReplyChip
                  message={replyTo}
                  onRemove={() => setReplyTo(null)}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>

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

          {/* Pending attachments — a skeleton while uploading, then a square
              image preview (matching the message thumbnails) or an F0FileItem
              chip, each with a remove action. Each chip fades in and shrinks
              out (`layout` slides the neighbours into the gap); the whole row
              collapses when the last one goes (or the message sends). The
              skeleton→ready swap crossfades inside the chip's stable key. */}
          <AnimatePresence initial={false}>
            {attachments.length > 0 && (
              <motion.div
                key="attachments-row"
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.18,
                  ease: EASE_OUT_SWIFT,
                }}
              >
                <div
                  aria-live="polite"
                  aria-busy={isUploading}
                  className="flex flex-wrap items-end gap-1 px-1 pt-1"
                >
                  <AnimatePresence initial={false} mode="popLayout">
                    {orderedAttachments.map((att) => (
                      <motion.div
                        key={att.id}
                        layout="position"
                        className="flex"
                        initial={
                          shouldReduceMotion
                            ? false
                            : { opacity: 0, scale: 0.95 }
                        }
                        animate={{ opacity: 1, scale: 1 }}
                        exit={
                          shouldReduceMotion
                            ? undefined
                            : {
                                opacity: 0,
                                scale: 0.95,
                                transition: microExitTransition,
                              }
                        }
                        // Explicit `layout` key: the default transform
                        // transition is an underdamped spring (bounces).
                        transition={{
                          ...microEnterTransition,
                          layout: layoutTransition,
                        }}
                      >
                        <motion.div
                          key={att.status}
                          className="flex"
                          initial={shouldReduceMotion ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.15 }}
                        >
                          {att.status === "uploading" ? (
                            <Skeleton
                              className={cn(
                                att.isImage
                                  ? "h-16 w-16 rounded-lg"
                                  : "h-9 w-36 rounded"
                              )}
                            />
                          ) : att.attachment.kind === "image" ? (
                            <div className="group/attachment relative flex">
                              <FadeInImage
                                src={
                                  att.attachment.thumbnailUrl ??
                                  att.attachment.url
                                }
                                alt={att.attachment.name}
                                className="h-16 w-16 rounded-lg border border-solid border-f1-border-secondary object-cover"
                              />
                              {/* Remove is hidden until hover; focus also
                                  reveals it so it stays reachable by keyboard. */}
                              <div className="absolute right-1 top-1 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100">
                                <ButtonInternal
                                  variant="outline"
                                  size="sm"
                                  hideLabel
                                  label={i18n.chat.removeFile}
                                  icon={Cross}
                                  onClick={() =>
                                    setAttachments((prev) =>
                                      prev.filter((a) => a.id !== att.id)
                                    )
                                  }
                                />
                              </div>
                            </div>
                          ) : att.attachment.kind === "file" ? (
                            <F0FileItem
                              size="md"
                              file={{
                                name: att.attachment.name,
                                type: att.attachment.mimeType ?? "",
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
                          ) : // Locations never sit in the composer (uploads
                          // only) — the narrowing here just satisfies the
                          // widened attachment union.
                          null}
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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

          {/* Recording row ↔ action row: both stacked in the same grid cell
              (equal height — p-3 + md buttons), crossfaded so starting/stopping
              a recording never hard-swaps the composer's bottom edge. */}
          <div className="grid">
            <AnimatePresence initial={false}>
              {isRecording ? (
                // Recording: amplitude timeline + cancel / confirm, matching the AI chat.
                <motion.div
                  key="recording-row"
                  className="flex items-center gap-3 p-3 [grid-area:1/1]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
                >
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
                      label={
                        voiceNotesEnabled
                          ? i18n.chat.sendVoiceNote
                          : i18n.chat.stopRecording
                      }
                      icon={Check}
                      onClick={recorder.stop}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="actions-row"
                  className="flex items-center justify-between p-3 [grid-area:1/1]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
                >
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
                      disabled={!canUpload || isTranscribing}
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
                        label={
                          isSendingVoiceNote
                            ? i18n.chat.sendingVoiceNote
                            : i18n.chat.recordAudio
                        }
                        icon={Microphone}
                        onClick={startRecording}
                        // Spins while dictation transcribes or a voice note uploads.
                        loading={isTranscribing || isSendingVoiceNote}
                      />
                    )}
                    {/* The send button fades on ACTIVATION (boundary flip of
                        canSend — first character, attachment ready) and on the
                        edit-mode icon swap; never per keystroke. */}
                    <AnimatePresence initial={false} mode="popLayout">
                      <motion.div
                        key={`${isEditing ? "save" : "send"}-${sendActivationEpoch}`}
                        className="flex"
                        initial={
                          shouldReduceMotion
                            ? false
                            : { opacity: 0, scale: 0.95 }
                        }
                        animate={{ opacity: 1, scale: 1 }}
                        exit={
                          shouldReduceMotion
                            ? undefined
                            : { opacity: 0, transition: { duration: 0.1 } }
                        }
                        transition={{ duration: 0.15, ease: EASE_OUT_SWIFT }}
                      >
                        <ButtonInternal
                          variant="default"
                          size="md"
                          hideLabel
                          label={
                            isEditing ? i18n.chat.saveEdit : i18n.actions.send
                          }
                          icon={isEditing ? Check : ArrowUp}
                          onClick={handleSend}
                          disabled={!canSend}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
