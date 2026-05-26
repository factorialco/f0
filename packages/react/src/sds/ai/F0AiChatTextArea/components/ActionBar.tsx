import { type RefObject } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowUp, Paperclip, SolidStop } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

interface ActionBarProps {
  onUploadFiles: ((files: File[]) => Promise<unknown>) | undefined
  isAtMaxFiles: boolean
  maxFiles: number | undefined
  acceptValue: string | undefined
  fileInputRef: RefObject<HTMLInputElement>
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  inProgress?: boolean
  hasDataToSend: boolean
  isUploading: boolean
  isPreSending?: boolean
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
  isUploading,
  isPreSending,
}: ActionBarProps) => {
  const translation = useI18n()

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
              disabled={isAtMaxFiles}
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
      <div className="flex items-center">
        {inProgress ? (
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
            disabled={!hasDataToSend || isUploading || isPreSending}
            variant={
              hasDataToSend && !isUploading && !isPreSending
                ? "default"
                : "neutral"
            }
            label={translation.ai.sendMessage}
            icon={ArrowUp}
            hideLabel
          />
        )}
      </div>
    </div>
  )
}
