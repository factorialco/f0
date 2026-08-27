import { ButtonInternal } from "@/components/F0Button/internal"
import { Microphone } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { type RecorderStatus } from "../useAudioRecorder"

interface DictationButtonProps {
  inProgress?: boolean
  recordingStatus?: RecorderStatus
  onStartRecording?: () => void
  /**
   * `md` (32px) in the action row, `sm` (24px) when it trails the text inline on
   * the collapsed bar — see {@link SubmitButton} for why a 32px button cannot be
   * centred on a 20px line of text.
   *
   * @default "md"
   */
  size?: "sm" | "md"
}

/**
 * The composer's dictation control.
 *
 * Kept apart from `ActionBar` because the collapsed bar keeps this button and
 * send while dropping every other control: talking is a way to start a prompt
 * without typing one, so it earns its place on a one-line bar. Both placements
 * must render the same button, so there is one definition rather than two.
 */
export const DictationButton = ({
  inProgress,
  recordingStatus = "idle",
  onStartRecording,
  size = "md",
}: DictationButtonProps) => {
  const translation = useI18n()

  return (
    <ButtonInternal
      label={translation.ai.recordAudio}
      hideLabel
      type="button"
      icon={Microphone}
      variant="outline"
      size={size}
      disabled={inProgress}
      onClick={onStartRecording}
      loading={recordingStatus === "transcribing"}
    />
  )
}
