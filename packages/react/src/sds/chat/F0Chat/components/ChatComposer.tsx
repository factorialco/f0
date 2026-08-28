import { AnimatePresence, motion } from "motion/react"
import {
  type ClipboardEvent,
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react"

import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowUp, Check, Cross, Microphone, Paperclip } from "@/icons/app"
import { RecordingWaveform } from "@/kits/ai/F0AiChatTextArea/components/RecordingWaveform"
import {
  type RecorderError,
  useAudioRecorder,
} from "@/kits/ai/F0AiChatTextArea/useAudioRecorder"
import { useI18n } from "@/lib/providers/i18n"
import { containsEmojis } from "@/lib/text"
import { cn } from "@/lib/utils"
import { Picker } from "@/sds/social/Reactions/Picker"

import { buildHighlightSegments } from "../hooks/highlight-utils"
import {
  replaceClosedEmojiShortcode,
  useEmojiAutocomplete,
} from "../hooks/useEmojiAutocomplete"
import { MENTION_EVERYONE_ID, useMentions } from "../hooks/useMentions"
import { useEditLastOwnMessage } from "../hooks/useEditLastOwnMessage"
import { useTransientError } from "../hooks/useTransientError"
import { useChatRenderConfig } from "../providers/ChatRenderConfigProvider"
import {
  useChatComposeActions,
  useChatComposeTarget,
  useChatDrop,
  type ChatComposeTarget,
  type ChatComposerHandle,
} from "../providers/ChatUIProvider"
import { useF0Chat, useF0ChatEmit } from "../providers/F0ChatProvider"
import {
  type F0ChatAttachment,
  type F0ChatAttachSource,
  type F0ChatFileAttachment,
  type F0ChatImageAttachment,
  type F0ChatMessage,
} from "../types"
import { attachedKindOf, formatFileSize } from "../utils/attachments"
import {
  EASE_OUT_SWIFT,
  layoutTransition,
  microEnterTransition,
  microExitTransition,
} from "../utils/chat-motion"
import { ChatComposerAttachmentPreview } from "./ChatComposerAttachmentPreview"
import { ChatEditChip } from "./ChatEditChip"
import { ChatEmojiAutocomplete } from "./ChatEmojiAutocomplete"
import {
  ChatMentionPopover,
  getChatMentionOptionId,
} from "./ChatMentionPopover"
import { ChatReplyChip } from "./ChatReplyChip"
import { ChatTextareaField } from "./ChatTextareaField"

type UploadingAttachment = {
  id: string
  status: "uploading"
  attachment: F0ChatFileAttachment | F0ChatImageAttachment
}

/** An attachment shown immediately from a local URL while its upload resolves. */
type PendingAttachment =
  | UploadingAttachment
  | { id: string; status: "ready"; attachment: F0ChatAttachment }

const isImagePending = (att: PendingAttachment): boolean =>
  att.attachment.kind === "image"

const localAttachmentFromFile = (
  file: File,
  url: string
): F0ChatFileAttachment | F0ChatImageAttachment =>
  file.type.startsWith("image/")
    ? {
        kind: "image",
        url,
        name: file.name,
        mimeType: file.type,
      }
    : {
        kind: "file",
        url,
        name: file.name,
        size: file.size,
        mimeType: file.type,
      }

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
    maxFileSizeBytes,
    channel,
    searchMembers,
    currentUserId,
    capabilities,
  } = useF0Chat()
  // Uploads need both the runtime hook AND the capability (a frozen channel
  // can forbid attachments even when the transport could upload them).
  const canUpload = !!uploadFiles && capabilities?.canUpload !== false
  const { target } = useChatComposeTarget()
  const { clearComposeTarget, registerComposerHandle } = useChatComposeActions()
  const editLastOwnMessage = useEditLastOwnMessage()
  const { registerFileDropHandler } = useChatDrop()
  const emit = useF0ChatEmit()
  const { reducedMotion: shouldReduceMotion } = useChatRenderConfig()

  const [value, setValue] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const [attachments, setAttachments] = useState<PendingAttachment[]>([])
  const [isStartingRecording, setIsStartingRecording] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const attachmentStripRef = useRef<HTMLDivElement>(null)
  const localPreviewUrlsRef = useRef(new Set<string>())

  const emojiAutocomplete = useEmojiAutocomplete({
    inputValue: value,
    setInputValue: setValue,
    cursorPosition,
    setCursorPosition,
    textareaRef,
  })
  // Mentions are available wherever the host provides a member search — both
  // DMs (mention either person) and groups. Emoji lookup owns the active token
  // while open, so member searches pause until it closes.
  const mentionsEnabled = !!searchMembers
  const mentions = useMentions({
    inputValue: value,
    setInputValue: setValue,
    cursorPosition,
    textareaRef,
    enabled: mentionsEnabled && !emojiAutocomplete.isOpen,
    searchMembers,
    everyoneLabel:
      channel.type === "group" ? i18n.chat.mentionEveryone : undefined,
  })
  const closeEmojiAutocomplete = emojiAutocomplete.close
  const handleEmojiAutocompleteKeyDown = emojiAutocomplete.handleKeyDown
  const mentionReactId = useId()
  const mentionListboxId = `chat-mention-autocomplete-${mentionReactId.replace(/:/g, "")}`
  const activeMentionCandidate =
    mentions.results[mentions.selectedIndex] ?? mentions.results[0]
  const activeMentionOptionId =
    mentions.isOpen && activeMentionCandidate
      ? getChatMentionOptionId(mentionListboxId, activeMentionCandidate)
      : undefined

  useEffect(() => {
    if (emojiAutocomplete.isOpen) mentions.dismissCurrentTrigger()
  }, [emojiAutocomplete.isOpen, mentions.dismissCurrentTrigger])
  const highlightSegments = useMemo(
    () =>
      buildHighlightSegments(value, mentions.mentions, {
        cursorPosition,
        inlineCompletion: emojiAutocomplete.isOpen
          ? null
          : mentions.inlineCompletion,
        currentUserId,
      }),
    [
      value,
      mentions.mentions,
      cursorPosition,
      mentions.inlineCompletion,
      emojiAutocomplete.isOpen,
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

  const releaseLocalPreview = useCallback((url: string) => {
    if (!localPreviewUrlsRef.current.delete(url)) return
    URL.revokeObjectURL(url)
  }, [])

  useEffect(
    () => () => {
      for (const url of localPreviewUrlsRef.current) {
        URL.revokeObjectURL(url)
      }
      localPreviewUrlsRef.current.clear()
    },
    []
  )

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
  const {
    error: transientError,
    show: showTransientError,
    clear: clearTransientError,
  } = useTransientError()

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
  const valueRef = useRef(value)
  valueRef.current = value
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

  // `value === ""`, not trimmed: with any character present ↑ already moves the
  // caret, and stealing a key that does something is worse than a missed
  // shortcut.
  const isComposerIdle =
    value === "" &&
    attachments.length === 0 &&
    target.kind === "none" &&
    !isStartingRecording &&
    !isRecording &&
    !isTranscribing &&
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
      const replacement = replaceClosedEmojiShortcode(next, cursorPos)
      const nextValue = replacement?.value ?? next
      const nextCursorPosition = replacement?.cursorPosition ?? cursorPos
      setValue(nextValue)
      setCursorPosition(nextCursorPosition)
      onInputActivity()
      if (replacement) {
        requestAnimationFrame(() => {
          textareaRef.current?.setSelectionRange(
            nextCursorPosition,
            nextCursorPosition
          )
        })
      }
      // Clearing the text means typing stopped NOW — don't leave the
      // counterpart's dots hanging until the transport's timeout.
      if (nextValue.trim().length === 0) void stopTyping?.()
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
    async (files: File[], source: F0ChatAttachSource) => {
      if (files.length === 0 || !uploadFiles || !canUpload) return
      clearTransientError()
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
      // Keep validation transport-agnostic and reject the whole batch before
      // starting any upload when one file exceeds the host-provided cap.
      if (
        maxFileSizeBytes !== undefined &&
        files.some((file) => file.size > maxFileSizeBytes)
      ) {
        showTransientError(
          i18n.chat.fileTooLargeError.replace(
            "{{maxFileSize}}",
            formatFileSize(maxFileSizeBytes)
          ),
          { persistent: true }
        )
        return
      }
      // Render every previewable format immediately from a local object URL,
      // then swap it for the host attachment without changing its stable key.
      const pending = files.map((file): UploadingAttachment => {
        const url = URL.createObjectURL(file)
        localPreviewUrlsRef.current.add(url)
        return {
          id: `att-${attachmentSeq.current++}`,
          status: "uploading",
          attachment: localAttachmentFromFile(file, url),
        }
      })
      // One per file, and only once the batch passed validation — but BEFORE
      // the upload resolves, so a failed upload still records which affordance
      // the person reached for.
      for (const item of pending) {
        emit.onFileAttached({
          kind: attachedKindOf(item.attachment),
          source,
        })
      }
      setAttachments((prev) => [...prev, ...pending])
      const pendingIds = new Set(pending.map((p) => p.id))
      try {
        const uploaded = await uploadFiles(files)
        const ready: PendingAttachment[] = uploaded.map((attachment, i) => ({
          id: pending[i]?.id ?? `att-${attachmentSeq.current++}`,
          status: "ready",
          attachment,
        }))
        setAttachments((prev) => {
          const readyById = new Map(ready.map((item) => [item.id, item]))
          return prev.flatMap((item) => {
            if (!pendingIds.has(item.id)) return [item]
            const replacement = readyById.get(item.id)
            return replacement ? [replacement] : []
          })
        })
        for (const item of pending) {
          releaseLocalPreview(item.attachment.url)
        }
      } catch {
        setAttachments((prev) => prev.filter((a) => !pendingIds.has(a.id)))
        for (const item of pending) {
          releaseLocalPreview(item.attachment.url)
        }
        showTransientError(i18n.chat.fileUploadError)
      }
    },
    [
      uploadFiles,
      canUpload,
      maxFiles,
      maxFileSizeBytes,
      clearTransientError,
      showTransientError,
      i18n.chat.tooManyFilesError,
      i18n.chat.fileTooLargeError,
      i18n.chat.fileUploadError,
      releaseLocalPreview,
      emit,
    ]
  )

  const removeAttachment = useCallback(
    (id: string) => {
      const item = attachments.find((attachment) => attachment.id === id)
      // `F0ChatAttachedKind` has no voice/location member, so those two are not
      // reportable. The strip does render both (ChatComposerAttachmentPreview),
      // so this drops their removal rather than describing an impossible case.
      const removed = item?.attachment
      if (removed && removed.kind !== "voice" && removed.kind !== "location") {
        emit.onAttachmentRemoved({ kind: attachedKindOf(removed) })
      }
      const hasRemainingAttachments = attachments.some(
        (attachment) => attachment.id !== id
      )
      if (item?.status === "uploading") {
        releaseLocalPreview(item.attachment.url)
      }
      setAttachments((prev) =>
        prev.filter((attachment) => attachment.id !== id)
      )
      requestAnimationFrame(() => {
        if (hasRemainingAttachments) attachmentStripRef.current?.focus()
        else textareaRef.current?.focus()
      })
    },
    [attachments, releaseLocalPreview, emit]
  )

  const releaseUploadingPreviews = useCallback(
    (items: PendingAttachment[]) => {
      for (const item of items) {
        if (item.status === "uploading") {
          releaseLocalPreview(item.attachment.url)
        }
      }
    },
    [releaseLocalPreview]
  )

  // Files dropped anywhere on the panel (F0Chat owns the drop zone) land here.
  useEffect(() => {
    registerFileDropHandler((files) => void handleUpload(files, "drop"))
  }, [registerFileDropHandler, handleUpload])

  const handlePaste = useCallback(
    (event: ClipboardEvent<HTMLTextAreaElement>) => {
      if (!canUpload) return
      const files = Array.from(event.clipboardData.files)
      if (files.length === 0) return

      // File pastes (Cmd/Ctrl+V) become attachments. Text-only clipboard
      // content keeps the textarea's native paste behavior.
      event.preventDefault()
      void handleUpload(files, "paste")
    },
    [canUpload, handleUpload]
  )

  const isEditing = target.kind === "edit"
  const editingMessage = target.kind === "edit" ? target.message : null
  const replyTo = target.kind === "reply" ? target.message : null

  // Must not touch the target: the provider owns it, and calling back would
  // recurse through `retarget`.
  const discardDraft = useCallback(() => {
    mentions.close()
    mentions.seedMentions([])
    setValue("")
    setCursorPosition(0)
    releaseUploadingPreviews(attachments)
    setAttachments([])
  }, [
    mentions.close,
    mentions.seedMentions,
    releaseUploadingPreviews,
    attachments,
  ])

  const loadEditDraft = useCallback(
    (message: F0ChatMessage) => {
      setValue(message.body)
      setCursorPosition(message.body.length)
      setAttachments((prev) => {
        releaseUploadingPreviews(prev)
        return (message.attachments ?? []).map((attachment) => ({
          id: `att-${attachmentSeq.current++}`,
          status: "ready" as const,
          attachment,
        }))
      })
      mentions.seedMentions([
        ...(message.mentions ?? []).map((m) => ({
          id: m.id,
          name: m.name,
          avatar: m.avatar,
          subtitle: m.subtitle,
          profileHref: m.profileHref,
        })),
        ...(message.mentionedEveryone && channel.type === "group"
          ? [{ id: MENTION_EVERYONE_ID, name: i18n.chat.mentionEveryone }]
          : []),
      ])
    },
    [
      channel.type,
      i18n.chat.mentionEveryone,
      mentions.seedMentions,
      releaseUploadingPreviews,
    ]
  )

  const focusComposer = useCallback(() => {
    const node = textareaRef.current
    if (!node) return
    // preventScroll: the panel can sit in a longer host page, and taking a
    // quote must not scroll it.
    node.focus({ preventScroll: true })
    const end = node.value.length
    node.setSelectionRange(end, end)
  }, [])

  const retarget = useCallback(
    (previous: ChatComposeTarget, next: ChatComposeTarget) => {
      const leavingEdit = previous.kind === "edit" && next.kind !== "edit"
      // Re-picking Edit on the message already open must not wipe the typing.
      const sameEdit =
        previous.kind === "edit" &&
        next.kind === "edit" &&
        previous.message.id === next.message.id

      if (leavingEdit) discardDraft()
      if (next.kind === "edit" && !sameEdit) loadEditDraft(next.message)
      if (next.kind !== "none") focusComposer()
    },
    [discardDraft, loadEditDraft, focusComposer]
  )

  const handle = useMemo<ChatComposerHandle>(
    () => ({ retarget, abandonDraft: discardDraft }),
    [retarget, discardDraft]
  )

  // Re-registers on closure change: `discardDraft` reads the current attachments.
  useEffect(
    function publishComposerHandle() {
      registerComposerHandle(handle)
      return () => registerComposerHandle(null)
    },
    [registerComposerHandle, handle]
  )

  // A read-only channel removes the composer. A target that outlived it would
  // come back to an empty composer still showing an edit chip, and pressing
  // Enter would then save that empty text over the message.
  useEffect(
    function releaseComposeTargetOnUnmount() {
      return clearComposeTarget
    },
    [clearComposeTarget]
  )

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
      clearComposeTarget()
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
    clearComposeTarget()
  }, [
    attachments,
    canSend,
    mentions,
    replyTo,
    sendMessage,
    clearComposeTarget,
    stopTyping,
    value,
    editingMessage,
    editMessage,
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
      closeEmojiAutocomplete()
      onInputActivity()
      emit.onEmojiInserted({ emoji, source: "picker" })
      requestAnimationFrame(() => {
        const node = textareaRef.current
        if (node) {
          node.focus()
          node.setSelectionRange(caret, caret)
        }
      })
    },
    [closeEmojiAutocomplete, onInputActivity, emit]
  )

  // The target is also cleared after a successful send, and on a channel
  // switch — neither is an abandonment. Only Escape and the chip's X route
  // through these, so the cancelled counts stay meaningful.
  const dismissEdit = useCallback(() => {
    if (editingMessage) emit.onEditCancelled({ messageId: editingMessage.id })
    clearComposeTarget()
  }, [clearComposeTarget, editingMessage, emit])

  const dismissReply = useCallback(() => {
    if (replyTo) emit.onReplyCancelled({ messageId: replyTo.id })
    clearComposeTarget()
  }, [clearComposeTarget, emit, replyTo])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      // Enter confirms the active IME composition. It must never select an
      // autocomplete option or send the message while composition is active.
      if (e.nativeEvent.isComposing) return
      // Emoji shortcode suggestions take precedence when the active caret token
      // starts with `:`; Enter/Tab select instead of sending the message.
      if (handleEmojiAutocompleteKeyDown(e)) return
      // The mention popover consumes navigation keys first (↑↓/Enter/Tab/Esc).
      if (mentions.handleKeyDown(e)) return
      // Escape backs out of an edit (when the popover didn't claim it).
      if (e.key === "Escape" && isEditing) {
        e.preventDefault()
        dismissEdit()
        return
      }
      // A modifier makes ↑ a selection gesture, never this shortcut; and with
      // nothing to reopen it must keep its caret meaning, hence preventDefault
      // only on a hit.
      const isArrowUpShortcut =
        e.key === "ArrowUp" &&
        !e.shiftKey &&
        !e.altKey &&
        !e.metaKey &&
        !e.ctrlKey &&
        isComposerIdle
      if (isArrowUpShortcut && editLastOwnMessage()) {
        e.preventDefault()
        return
      }
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    },
    [
      handleSend,
      handleEmojiAutocompleteKeyDown,
      mentions,
      isEditing,
      dismissEdit,
      isComposerIdle,
      editLastOwnMessage,
    ]
  )

  // `recorder.start()` reports "recording" only after the permission prompt
  // resolves, so the composer looks idle while it is open — long enough for ↑
  // to load a message the first transcript partial would then overwrite.
  const startRecording = useCallback(() => {
    setIsStartingRecording(true)
    void (async () => {
      try {
        await recorder.start()
        // Captured at capture start, not at button press: the transcript is
        // appended to whatever the textarea holds by then.
        baseValueRef.current = valueRef.current
      } catch {
        // The recorder reports its own failures through onError.
      } finally {
        setIsStartingRecording(false)
      }
    })()
  }, [recorder])

  // Not on the button press: `recorder.start()` resolves whether or not the
  // user granted the microphone. Only the transition into `recording` means
  // capture actually began.
  const reportedRecordingRef = useRef(false)
  useEffect(
    function reportRecordingStarted() {
      const recording = recorder.status === "recording"
      if (recording && !reportedRecordingRef.current) {
        emit.onVoiceRecordingStarted()
      }
      reportedRecordingRef.current = recording
    },
    [recorder.status, emit]
  )

  const placeholder = i18n.chat.placeholder

  return (
    <div className="pointer-events-none shrink-0 p-4 pt-0">
      {/* Centered, width-capped to match the message column in fullscreen. */}
      <div className="pointer-events-auto mx-auto w-full max-w-content">
        <div
          data-testid="chat-composer-surface"
          className="relative flex flex-col rounded-lg border border-solid border-f1-border-secondary bg-f1-background/90 shadow-md backdrop-blur-[2px]"
        >
          <ChatEmojiAutocomplete
            isOpen={emojiAutocomplete.isOpen}
            results={emojiAutocomplete.results}
            selectedIndex={emojiAutocomplete.selectedIndex}
            position={emojiAutocomplete.popoverPosition}
            listboxId={emojiAutocomplete.listboxId}
            label={i18n.chat.addEmoji}
            onSelect={emojiAutocomplete.selectCandidate}
            onHighlight={emojiAutocomplete.setSelectedIndex}
          />
          <ChatMentionPopover
            isOpen={mentions.isOpen && !emojiAutocomplete.isOpen}
            listboxId={mentionListboxId}
            results={mentions.results}
            isLoading={mentions.isLoading}
            selectedIndex={mentions.selectedIndex}
            position={mentions.popoverPosition}
            onSelect={mentions.selectCandidate}
            everyoneDescription={i18n.chat.mentionEveryoneDescription}
          />
          {/* Editing and replying are mutually exclusive — the edit chip takes
              the reply chip's slot while you're editing a message. The chip
              unfolds/collapses (height + fade); the floating transcript gap
              follows the composer edge through its shared ResizeObserver.
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
                <ChatEditChip message={editingMessage} onRemove={dismissEdit} />
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
                <ChatReplyChip message={replyTo} onRemove={dismissReply} />
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Composer error. Upload/voice failures fade out; validation errors
              may persist until the next corrective attachment attempt. */}
          <AnimatePresence initial={false}>
            {transientError && (
              <motion.div
                key="transient-error"
                role="alert"
                aria-atomic="true"
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

          {/* Pending files render from local object URLs immediately. Their
              uniform image-sized thumbnails keep the composer compact. */}
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
                  ref={attachmentStripRef}
                  role="region"
                  tabIndex={0}
                  aria-label={i18n.t(
                    attachments.length === 1
                      ? "chat.attachmentCount.one"
                      : "chat.attachmentCount.other",
                    { count: attachments.length }
                  )}
                  aria-live="polite"
                  aria-busy={isUploading}
                  className="flex flex-nowrap items-end gap-1 overflow-x-auto px-1 pt-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring"
                  data-testid="chat-composer-attachments"
                >
                  <AnimatePresence initial={false} mode="popLayout">
                    {orderedAttachments.map((att) => (
                      <motion.div
                        key={att.id}
                        layout="position"
                        className="flex shrink-0"
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
                          className="flex"
                          initial={shouldReduceMotion ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.15 }}
                        >
                          <ChatComposerAttachmentPreview
                            attachment={att.attachment}
                            uploading={att.status === "uploading"}
                            onRemove={() => removeAttachment(att.id)}
                          />
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
            accessibleLabel={placeholder}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            onBlur={closeEmojiAutocomplete}
            onCursorUpdate={updateCursorPosition}
            onScroll={syncHighlightScroll}
            highlightSegments={highlightSegments}
            hasOverlay={hasOverlay}
            isAutocompleteOpen={emojiAutocomplete.isOpen || mentions.isOpen}
            autocompleteListboxId={
              emojiAutocomplete.isOpen
                ? emojiAutocomplete.listboxId
                : mentions.isOpen
                  ? mentionListboxId
                  : undefined
            }
            activeAutocompleteOptionId={
              emojiAutocomplete.activeDescendantId ?? activeMentionOptionId
            }
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
                      onClick={() => {
                        recorder.cancel()
                        emit.onVoiceRecordingCancelled()
                      }}
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
                      void handleUpload(
                        Array.from(e.target.files ?? []),
                        "button"
                      )
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
                        // Includes the permission prompt: a second press
                        // there opens a second getUserMedia and orphans the
                        // first stream.
                        loading={
                          isStartingRecording ||
                          isTranscribing ||
                          isSendingVoiceNote
                        }
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
