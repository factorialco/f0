import {
  type ChangeEvent,
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0FileItem } from "@/components/F0FileItem"
import { ArrowUp, Check, Cross, Microphone, Paperclip } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { RecordingWaveform } from "@/sds/ai/F0AiChatTextArea/components/RecordingWaveform"
import { useAudioRecorder } from "@/sds/ai/F0AiChatTextArea/useAudioRecorder"
import { Skeleton } from "@/ui/skeleton"

import { useF0Chat } from "../providers/F0ChatProvider"
import { useChatUI } from "../providers/ChatUIProvider"
import { type F0ChatAttachment } from "../types"
import { ChatReplyChip } from "./ChatReplyChip"

const MAX_TEXTAREA_HEIGHT = 140

/** A pending composer attachment: a skeleton while it uploads, an F0FileItem
 * chip once the runtime resolves it (same pattern as the AI chat composer). */
type PendingAttachment =
  | { id: string; status: "uploading"; name: string }
  | { id: string; status: "ready"; attachment: F0ChatAttachment }

/** Composer: auto-growing textarea (no aura), attach, voice dictation, send.
 * Drag & drop is owned by the whole panel (F0Chat) and bridged here. */
export const ChatComposer = (): ReactNode => {
  const i18n = useI18n()
  const { sendMessage, onInputActivity, uploadFiles, transcribe } = useF0Chat()
  const { replyTo, setReplyTo, registerFileDropHandler } = useChatUI()

  const [value, setValue] = useState("")
  const [attachments, setAttachments] = useState<PendingAttachment[]>([])
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  // Monotonic id for pending attachments (avoids Date.now/random in render).
  const attachmentSeq = useRef(0)

  const isUploading = attachments.some((a) => a.status === "uploading")

  const grow = useCallback(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${Math.min(el.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`
  }, [])

  // Voice dictation — same recorder + waveform the AI chat (and RichText) use.
  // Partials stream into the textarea, appended to whatever was already typed.
  const baseValueRef = useRef("")
  const fillFromTranscript = useCallback(
    (text: string) => {
      const base = baseValueRef.current
      setValue(base ? `${base} ${text}` : text)
      requestAnimationFrame(grow)
    },
    [grow]
  )
  const recorder = useAudioRecorder({
    onTranscribe: transcribe,
    onPartial: fillFromTranscript,
    onFinal: fillFromTranscript,
    onError: () => {},
  })
  const isTranscribing = recorder.status === "transcribing"
  const isRecording = recorder.status === "recording"
  const canRecord = !!transcribe && recorder.isSupported

  const canSend =
    (value.trim().length > 0 || attachments.length > 0) &&
    !isTranscribing &&
    !isUploading

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value)
      onInputActivity()
      grow()
    },
    [grow, onInputActivity]
  )

  const handleUpload = useCallback(
    async (files: File[]) => {
      if (files.length === 0 || !uploadFiles) return
      // Show a skeleton per file immediately, then swap each for its chip once
      // the runtime resolves the upload (or drop them if it fails).
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
      }
    },
    [uploadFiles]
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
    sendMessage({
      body: value.trim(),
      attachments: ready.length > 0 ? ready : undefined,
      replyToId: replyTo?.id,
    })
    setValue("")
    setAttachments([])
    setReplyTo(null)
    const el = textareaRef.current
    if (el) el.style.height = "auto"
  }, [attachments, canSend, replyTo, sendMessage, setReplyTo, value])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    },
    [handleSend]
  )

  const startRecording = useCallback(() => {
    baseValueRef.current = value
    void recorder.start()
  }, [recorder, value])

  const placeholder = i18n.chat.placeholder

  return (
    <div className="shrink-0 p-3 pt-1">
      {/* Centered, width-capped to match the message column in fullscreen. */}
      <div className="mx-auto w-full max-w-content">
        <div className="rounded-2xl border border-solid border-f1-border-secondary bg-f1-background">
          {replyTo && (
            <ChatReplyChip
              message={replyTo}
              onRemove={() => setReplyTo(null)}
            />
          )}

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
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder={isRecording ? i18n.chat.listening : placeholder}
            className={cn(
              "w-full resize-none bg-transparent px-3.5 pt-3 text-md text-f1-foreground",
              "placeholder:text-f1-foreground-secondary focus:outline-none"
            )}
          />

          {isRecording ? (
            // Recording: amplitude timeline + cancel / confirm, matching the AI chat.
            <div className="flex items-center gap-3 p-2">
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
            <div className="flex items-center justify-between p-2">
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
              <ButtonInternal
                variant="outline"
                size="md"
                hideLabel
                label={i18n.chat.attachFile}
                icon={Paperclip}
                onClick={() => fileInputRef.current?.click()}
                disabled={!uploadFiles || isTranscribing}
              />
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
                  label={i18n.chat.send}
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
