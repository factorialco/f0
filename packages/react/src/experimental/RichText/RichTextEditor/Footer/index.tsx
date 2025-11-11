import { Editor } from "@tiptap/react"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Toolbar, ToolbarDivider } from "@/experimental/RichText/CoreEditor"
import { Paperclip, TextSize } from "@/icons/app"

import { EnhanceActivator } from "../Enhance"
import {
  enhanceConfig,
  primaryActionType,
  secondaryActionsType,
} from "../utils/types"
import { ActionsMenu } from "./ActionsMenu"

interface FooterProps {
  editor: Editor
  maxCharacters: number | undefined
  secondaryAction: secondaryActionsType | undefined
  primaryAction: primaryActionType | undefined
  fileInputRef: React.RefObject<HTMLInputElement>
  canUseFiles: boolean
  onEnhanceWithAI: (
    selectedIntent?: string,
    customIntent?: string
  ) => Promise<void>
  isLoadingEnhance: boolean
  disableButtons: boolean
  enhanceConfig: enhanceConfig | undefined
  isFullscreen: boolean
  setLastIntent: (
    lastIntent: {
      selectedIntent?: string
      customIntent?: string
    } | null
  ) => void
  setIsToolbarOpen: (isToolbarOpen: boolean) => void
  isToolbarOpen: boolean
  plainHtmlMode: boolean
}

const Footer = ({
  editor,
  maxCharacters,
  secondaryAction,
  primaryAction,
  fileInputRef,
  canUseFiles,
  onEnhanceWithAI,
  isLoadingEnhance,
  enhanceConfig,
  isFullscreen,
  setLastIntent,
  disableButtons,
  setIsToolbarOpen,
  isToolbarOpen,
  plainHtmlMode,
}: FooterProps) => {
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

  const handleFileClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (fileInputRef?.current) {
      fileInputRef.current.click()
    } else {
      const fileInput = document.getElementById(
        "rich-text-editor-upload-button"
      )
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

      {enhanceConfig && (
        <>
          <ToolbarDivider />
          <EnhanceActivator
            editor={editor}
            onEnhanceWithAI={onEnhanceWithAI}
            isLoadingEnhance={isLoadingEnhance}
            enhanceConfig={enhanceConfig}
            disableButtons={disableButtons}
            hideLabel={useLittleMode}
            setLastIntent={setLastIntent}
            position="top"
          />
        </>
      )}

      {maxCharacters && !useLittleMode && (
        <p className="text-sm font-normal text-f1-foreground-secondary">
          {editor.storage.characterCount.characters()}/{maxCharacters}
        </p>
      )}
    </>
  )

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
            className="absolute left-0 top-0 z-10 h-full overflow-hidden bg-f1-background"
            aria-label="Rich text editor toolbar"
          >
            <Toolbar
              editor={editor}
              isFullscreen={isFullscreen}
              disableButtons={disableButtons}
              onClose={() => {
                setIsToolbarOpen(false)
                setToolbarAnimationComplete(false)
                // Restore focus after state update to trigger BubbleMenu
                queueMicrotask(() => editor.commands.focus())
              }}
              animationComplete={toolbarAnimationComplete}
              plainHtmlMode={plainHtmlMode}
            />
          </motion.div>
        )}

        {!isFullscreen && (
          <motion.div
            className="flex items-center gap-2 overflow-hidden"
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
