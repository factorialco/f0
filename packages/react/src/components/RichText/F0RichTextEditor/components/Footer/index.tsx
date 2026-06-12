import { Editor, useEditorState } from "@tiptap/react"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { cn } from "@/lib/utils"
import { Toolbar } from "@/components/RichText/internal"
import { Check, Cross, Microphone, Paperclip, TextSize } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"

import { EnhanceActivator } from "@/components/RichText/internal/Enhance"
import type { UseEnhanceReturn } from "@/components/RichText/internal/Enhance"
import { RecordingWaveform } from "@/sds/ai/F0AiChatTextArea/components/RecordingWaveform"
import { type RecorderStatus } from "@/sds/ai/F0AiChatTextArea/useAudioRecorder"
import { UPLOAD_INPUT_ID } from "../../utils/constants"
import { primaryActionType, secondaryActionsType } from "../../utils/types"
import { ActionsMenu } from "./ActionsMenu"

interface FooterProps {
  editor: Editor
  maxCharacters: number | undefined
  secondaryAction: secondaryActionsType | undefined
  primaryAction: primaryActionType | undefined
  fileInputRef: React.RefObject<HTMLInputElement>
  canUseFiles: boolean
  enhance: UseEnhanceReturn
  disableButtons: boolean
  disabled?: boolean
  isFullscreen: boolean
  setIsToolbarOpen: (isToolbarOpen: boolean) => void
  isToolbarOpen: boolean
  plainHtmlMode: boolean
  /** Voice dictation — when canRecord is false the microphone is hidden. */
  canRecord?: boolean
  recordingStatus?: RecorderStatus
  recordingStream?: MediaStream | null
  onStartRecording?: () => void
  onStopRecording?: () => void
  onCancelRecording?: () => void
}

const Footer = ({
  editor,
  maxCharacters,
  secondaryAction,
  primaryAction,
  fileInputRef,
  canUseFiles,
  enhance,
  isFullscreen,
  disableButtons,
  disabled = false,
  setIsToolbarOpen,
  isToolbarOpen,
  plainHtmlMode,
  canRecord,
  recordingStatus = "idle",
  recordingStream,
  onStartRecording,
  onStopRecording,
  onCancelRecording,
}: FooterProps) => {
  const i18n = useI18n()
  const [toolbarAnimationComplete, setToolbarAnimationComplete] =
    useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const useLittleMode = containerWidth < 500

  // Subscribe to the character count only (the editor no longer re-renders
  // its whole tree on every transaction).
  const characterCount = useEditorState({
    editor,
    selector: ({ editor: editorInstance }) =>
      editorInstance.storage.characterCount?.characters() ?? 0,
  })

  const handleFileClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (fileInputRef?.current) {
      fileInputRef.current.click()
    } else {
      const fileInput = document.getElementById(UPLOAD_INPUT_ID)
      fileInput?.click()
    }
  }

  const renderToolbarButton = () => (
    <F0Button
      onClick={(e) => {
        e?.preventDefault()
        setIsToolbarOpen(true)
      }}
      variant="outline"
      size="md"
      label="Toolbar"
      disabled={disableButtons}
      hideLabel
      icon={TextSize}
    />
  )

  const renderActionButtons = () => (
    <>
      {/* Always second, right after the toolbar button: while transcribing
          this button shows the spinner exactly where the recording confirm
          (✓) button was. */}
      {canRecord && (
        <F0Button
          label={i18n.ai.recordAudio}
          hideLabel
          icon={Microphone}
          variant="outline"
          disabled={disableButtons}
          onClick={(e) => {
            e?.preventDefault()
            onStartRecording?.()
          }}
          loading={recordingStatus === "transcribing"}
        />
      )}

      {canUseFiles && (
        <F0Button
          icon={Paperclip}
          onClick={handleFileClick}
          hideLabel
          label="Add Attachment"
          variant="outline"
          disabled={disableButtons}
        />
      )}

      {enhance.config && !isFullscreen && (
        <EnhanceActivator
          enhance={enhance}
          disabled={disableButtons}
          hideLabel={useLittleMode}
          menuWidth={containerWidth}
          menuContainerRef={containerRef}
        />
      )}

      {maxCharacters && !useLittleMode && (
        <p className="text-sm font-normal text-f1-foreground-secondary">
          {characterCount}/{maxCharacters}
        </p>
      )}
    </>
  )

  // Recording: cancel · confirm actions on the left (the ✓ sits in the same
  // second slot as the mic button, so the transcribing spinner appears exactly
  // where the user just clicked) and the amplitude timeline grows left→right.
  if (recordingStatus === "recording") {
    return (
      <div
        ref={containerRef}
        className="flex min-h-[56px] max-w-full items-center gap-3 py-3"
      >
        <div className="flex shrink-0 items-center gap-2">
          <F0Button
            label={i18n.ai.cancelRecording}
            hideLabel
            icon={Cross}
            variant="outline"
            size="md"
            onClick={(e) => {
              e?.preventDefault()
              onCancelRecording?.()
            }}
          />
          <F0Button
            label={i18n.ai.stopRecording}
            hideLabel
            icon={Check}
            variant="default"
            size="md"
            onClick={(e) => {
              e?.preventDefault()
              onStopRecording?.()
            }}
          />
        </div>
        <RecordingWaveform
          stream={recordingStream ?? null}
          className="min-w-0 flex-1"
          anchor="left"
        />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="flex min-h-[56px] max-w-full items-center gap-2 py-3"
    >
      <div className="relative flex flex-grow items-center gap-2">
        {!isFullscreen && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isToolbarOpen ? "100%" : 0 }}
            transition={{
              duration: 0.3,
              delay: isToolbarOpen ? 0.15 : 0,
              ease: "easeInOut",
            }}
            onAnimationComplete={() =>
              setToolbarAnimationComplete(isToolbarOpen)
            }
            className={cn(
              "absolute left-0 top-0 z-10 h-full overflow-hidden",
              disabled ? "bg-f1-background-tertiary" : "bg-f1-background"
            )}
            aria-label="Rich text editor toolbar"
          >
            <div className="flex items-start gap-2">
              <F0Button
                onClick={(e) => {
                  e.preventDefault()
                  setIsToolbarOpen(false)
                  setToolbarAnimationComplete(false)
                  // Restore focus after state update to trigger BubbleMenu
                  queueMicrotask(() => editor.commands.focus())
                }}
                variant="neutral"
                size="md"
                disabled={disableButtons}
                hideLabel
                label={i18n.actions.close}
                icon={Cross}
              />
              <Toolbar
                editor={editor}
                isFullscreen={isFullscreen}
                disableButtons={disableButtons}
                animationComplete={toolbarAnimationComplete}
                plainHtmlMode={plainHtmlMode}
              />
            </div>
          </motion.div>
        )}

        {!isFullscreen && (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 1 }}
            animate={{
              opacity: isToolbarOpen ? 0 : 1,
            }}
            transition={{
              duration: isToolbarOpen ? 0.15 : 0.25,
              delay: isToolbarOpen ? 0 : 0.2,
              ease: "easeInOut",
            }}
          >
            {renderToolbarButton()}
            {renderActionButtons()}
          </motion.div>
        )}

        {isFullscreen && (
          <div className="flex items-center gap-2">
            {!isToolbarOpen && renderToolbarButton()}
            {renderActionButtons()}
          </div>
        )}
      </div>

      <ActionsMenu
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        useLittleMode={useLittleMode}
        disableButtons={disableButtons}
        isFullscreen={isFullscreen}
      />
    </div>
  )
}

export { Footer }
