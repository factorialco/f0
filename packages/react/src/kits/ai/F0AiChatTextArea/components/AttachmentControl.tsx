import { type ChangeEvent, type RefObject } from "react"
import { ButtonInternal } from "@/components/F0Button/internal"
import { Paperclip } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import type { AiChatComposerAction } from "../../F0AiChat/types"
import { type RecorderStatus } from "../useAudioRecorder"
import { ComposerActionsMenu } from "./ComposerActionsMenu"

interface AttachmentControlProps {
  onUploadFiles: ((files: File[]) => Promise<unknown>) | undefined
  composerActions: AiChatComposerAction[] | undefined
  isAtMaxFiles: boolean
  maxFiles: number | undefined
  acceptValue: string | undefined
  fileInputRef: RefObject<HTMLInputElement>
  handleFileSelect: (e: ChangeEvent<HTMLInputElement>) => void
  recordingStatus: RecorderStatus
}

/**
 * The composer's attachment control, in whichever of its two shapes applies:
 * a lone paperclip, or — once a host passes `composerActions` — a `+` menu
 * that carries attaching as its first entry.
 *
 * Kept out of `ActionBar` so that file has one job: the three-cell row and the
 * recording layout. Both shapes drive the SAME hidden input, defined here once,
 * so the accept/multiple rules cannot drift between them.
 */
export const AttachmentControl = ({
  onUploadFiles,
  composerActions,
  isAtMaxFiles,
  maxFiles,
  acceptValue,
  fileInputRef,
  handleFileSelect,
  recordingStatus,
}: AttachmentControlProps) => {
  const translation = useI18n()

  const isTranscribing = recordingStatus === "transcribing"
  const openFilePicker = () => fileInputRef.current?.click()

  // An empty array is the same as none: the paperclip stays. Narrowing to the
  // array (rather than a boolean) is what lets the menu branch below use it
  // without a `?? []` fallback that could never actually be reached.
  const actions = composerActions?.length ? composerActions : null

  if (!onUploadFiles && !actions) {
    return null
  }

  return (
    <>
      {actions ? (
        // With extra actions the paperclip becomes a `+` and attaching moves
        // INSIDE the menu. `isAtMaxFiles` therefore stops being a reason to kill
        // the trigger — it disables that one entry, leaving the host's actions,
        // which have nothing to do with the file count, still reachable.
        <ComposerActionsMenu
          actions={actions}
          showAttachEntry={!!onUploadFiles}
          onAttachClick={openFilePicker}
          attachDisabled={isAtMaxFiles}
          attachDisabledTooltip={
            maxFiles === undefined
              ? undefined
              : translation.ai.tooManyFilesError.replace(
                  "{{maxFiles}}",
                  String(maxFiles)
                )
          }
          disabled={isTranscribing}
        />
      ) : (
        <ButtonInternal
          label={translation.ai.attachFile}
          hideLabel
          type="button"
          icon={Paperclip}
          variant="outline"
          size="md"
          disabled={isAtMaxFiles || isTranscribing}
          onClick={(e) => {
            e.preventDefault()
            openFilePicker()
          }}
        />
      )}
      {onUploadFiles ? (
        <input
          ref={fileInputRef}
          type="file"
          // Native picker only honors a binary "single vs multiple" selection —
          // no per-N cap. We still validate the count in JS.
          multiple={maxFiles !== 1}
          disabled={isAtMaxFiles}
          accept={acceptValue}
          className="hidden"
          onChange={handleFileSelect}
        />
      ) : null}
    </>
  )
}
