import { type RefObject } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import {
  ArrowUp,
  Check,
  Cross,
  Microphone,
  Paperclip,
  SolidStop,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { type RecorderStatus } from "../useAudioRecorder"
import { RecordingWaveform } from "./RecordingWaveform"

interface ActionBarProps {
  onUploadFiles: ((files: File[]) => Promise<unknown>) | undefined
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
      </div>
      <div className="flex items-center gap-2">
        {canRecord && (
          <ButtonInternal
            label={translation.ai.recordAudio}
            hideLabel
            type="button"
            icon={Microphone}
            variant="outline"
            size="md"
            disabled={inProgress}
            onClick={onStartRecording}
            loading={recordingStatus === "transcribing"}
          />
        )}
        {recordingStatus !== "transcribing" && inProgress ? (
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
            // Stays enabled while an attachment uploads so the click queues the
            // send (fired once the upload finishes) instead of being a no-op.
            disabled={!hasDataToSend || isPreSending}
            variant={"default"}
            label={translation.ai.sendMessage}
            icon={ArrowUp}
            hideLabel
          />
        )}
      </div>
    </div>
  )
}
