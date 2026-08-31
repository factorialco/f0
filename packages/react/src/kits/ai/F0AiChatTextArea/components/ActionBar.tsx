import { type ReactNode, type RefObject } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { Check, Cross, Paperclip } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { type RecorderStatus } from "../useAudioRecorder"
import { DictationButton } from "./DictationButton"
import { RecordingWaveform } from "./RecordingWaveform"
import { SubmitButton } from "./SubmitButton"

interface ActionBarProps {
  onUploadFiles: ((files: File[]) => Promise<unknown>) | undefined
  toolbarStart?: ReactNode
  /**
   * Content for the middle of the row, between the attachment/host controls and
   * the dictation/send pair. Takes the row's slack (`flex-1`) and is expected to
   * handle its own overflow — the `inside` suggestions layout puts the chips
   * here, scrolled sideways.
   *
   * Dropped while recording: that row is the waveform plus its cancel · confirm
   * pair, and it needs the whole width.
   */
  center?: ReactNode
  isAtMaxFiles: boolean
  maxFiles: number | undefined
  acceptValue: string | undefined
  fileInputRef: RefObject<HTMLInputElement>
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  inProgress?: boolean
  hasDataToSend: boolean
  isPreSending?: boolean
  /** Voice dictation — when canRecord is false the microphone is hidden. */
  canRecord?: boolean
  recordingStatus?: RecorderStatus
  recordingStream?: MediaStream | null
  onStartRecording?: () => void
  onStopRecording?: () => void
  onCancelRecording?: () => void
}

export const ActionBar = ({
  onUploadFiles,
  toolbarStart,
  center,
  isAtMaxFiles,
  maxFiles,
  acceptValue,
  fileInputRef,
  handleFileSelect,
  inProgress,
  hasDataToSend,
  isPreSending,
  canRecord,
  recordingStatus = "idle",
  recordingStream,
  onStartRecording,
  onStopRecording,
  onCancelRecording,
}: ActionBarProps) => {
  const translation = useI18n()

  // Recording: a scrolling amplitude timeline fills the row (building up as
  // seconds pass) with the cancel · confirm actions grouped on the right, so
  // the regular send/submit button can't fire mid-record.
  if (recordingStatus === "recording") {
    return (
      <div className="flex shrink-0 items-center gap-3 p-3">
        <RecordingWaveform
          stream={recordingStream ?? null}
          className="min-w-0 flex-1"
        />
        <div className="flex shrink-0 items-center gap-2">
          <ButtonInternal
            label={translation.ai.cancelRecording}
            hideLabel
            type="button"
            icon={Cross}
            variant="outline"
            size="md"
            onClick={onCancelRecording}
          />
          <ButtonInternal
            label={translation.ai.stopRecording}
            hideLabel
            type="button"
            icon={Check}
            variant="default"
            size="md"
            onClick={onStopRecording}
          />
        </div>
      </div>
    )
  }

  return (
    // Three cells: the start controls, the optional middle, and the dictation ·
    // send pair. `ml-auto` on the last one is what pins it right — NOT
    // `justify-between`, which would strand a lone send button on the left the
    // moment the row has nothing else in it.
    <div className="flex shrink-0 items-center gap-2 p-3">
      {(onUploadFiles || toolbarStart) && (
        <div
          className={cn(
            "flex items-center gap-2",
            // The middle takes the slack, so the controls beside it hold their
            // width; with no middle they keep the shrink that lets a wide
            // `toolbarStart` truncate instead of pushing send off the row.
            center ? "shrink-0" : "min-w-0"
          )}
        >
          {onUploadFiles && (
            <>
              <ButtonInternal
                label={translation.ai.attachFile}
                hideLabel
                type="button"
                icon={Paperclip}
                variant="outline"
                size="md"
                disabled={isAtMaxFiles || recordingStatus === "transcribing"}
                onClick={(e) => {
                  e.preventDefault()
                  fileInputRef.current?.click()
                }}
              />
              <input
                ref={fileInputRef}
                type="file"
                // Native picker only honors a binary "single vs multiple"
                // selection — no per-N cap. We still validate the count in JS.
                multiple={maxFiles !== 1}
                disabled={isAtMaxFiles}
                accept={acceptValue}
                className="hidden"
                onChange={handleFileSelect}
              />
            </>
          )}
          {toolbarStart && (
            // Host controls keep their own focus instead of bubbling to the
            // form's click handler, which intentionally focuses the textarea.
            <div
              className="min-w-0 cursor-default"
              onClick={(event) => event.stopPropagation()}
            >
              {toolbarStart}
            </div>
          )}
        </div>
      )}
      {center && <div className="min-w-0 flex-1">{center}</div>}
      <div className="ml-auto flex shrink-0 items-center gap-2">
        {canRecord && (
          <DictationButton
            inProgress={inProgress}
            recordingStatus={recordingStatus}
            onStartRecording={onStartRecording}
          />
        )}
        <SubmitButton
          inProgress={inProgress}
          hasDataToSend={hasDataToSend}
          isPreSending={isPreSending}
          recordingStatus={recordingStatus}
        />
      </div>
    </div>
  )
}
