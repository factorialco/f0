import { type RefObject } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ArrowUp, Paperclip, SolidStop } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import { type AiChatToolHint } from "../../../types"
import { ToolHintSelector } from "../ToolHintSelector"

interface ActionBarProps {
  onUploadFiles: ((files: File[]) => Promise<unknown>) | undefined
  isAtMaxFiles: boolean
  acceptValue: string | undefined
  fileInputRef: RefObject<HTMLInputElement>
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  toolHints: AiChatToolHint[] | undefined
  activeToolHint: AiChatToolHint | null | undefined
  setActiveToolHint: ((hint: AiChatToolHint | null) => void) | undefined
  inProgress?: boolean
  hasDataToSend: boolean
  isUploading: boolean
  isPreSending?: boolean
  submitLabel?: string
}

export const ActionBar = ({
  onUploadFiles,
  isAtMaxFiles,
  acceptValue,
  fileInputRef,
  handleFileSelect,
  toolHints,
  activeToolHint,
  setActiveToolHint,
  inProgress,
  hasDataToSend,
  isUploading,
  isPreSending,
  submitLabel,
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
              multiple
              accept={acceptValue}
              className="hidden"
              onChange={handleFileSelect}
            />
          </>
        )}
        {toolHints && toolHints.length > 0 && setActiveToolHint && (
          <ToolHintSelector
            toolHints={toolHints}
            activeToolHint={activeToolHint ?? null}
            onChange={setActiveToolHint}
          />
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
            variant={hasDataToSend && !isUploading && !isPreSending ? "default" : "neutral"}
            label={submitLabel || translation.ai.sendMessage}
            icon={submitLabel ? undefined : ArrowUp}
            hideLabel={!submitLabel}
          />
        )}
      </div>
    </div>
  )
}
