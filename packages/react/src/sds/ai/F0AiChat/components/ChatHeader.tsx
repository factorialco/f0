import { breakpoints } from "@factorialco/f0-core"
import { useCopilotChatInternal } from "@copilotkit/react-core"
import { useChatContext, type HeaderProps } from "@copilotkit/react-ui"
import { motion } from "motion/react"
import { useCallback, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import ChevronDown from "@/icons/app/ChevronDown"
import Cross from "@/icons/app/Cross"
import Maximize from "@/icons/app/Maximize"
import Minimize from "@/icons/app/Minimize"
import { New } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"

import { useAiChat } from "../providers/AiChatStateProvider"
import { ChatHistoryDialog } from "./ChatHistoryDialog"

export const ChatHeader = (props: HeaderProps) => {
  const { historyEnabled } = useAiChat()

  if (historyEnabled) {
    return <ChatHeaderWithHistory {...props} />
  }

  return <ChatHeaderLegacy {...props} />
}

const ChatHeaderWithHistory = (props: HeaderProps) => {
  const {
    setOpen,
    clear,
    loadThread,
    currentThreadTitle,
    visualizationMode,
    setVisualizationMode,
    lockVisualizationMode,
    tracking,
  } = useAiChat()
  const fullscreen = visualizationMode === "fullscreen"
  const translations = useI18n()
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })

  const handleClose = useCallback(() => {
    if (fullscreen) {
      setVisualizationMode("sidepanel")
      setTimeout(() => setOpen(false), 200)
    } else {
      setOpen(false)
    }
    tracking?.onClose?.()
  }, [fullscreen, setVisualizationMode, setOpen])

  const handleSelectThread = useCallback(
    (threadId: string, title: string) => {
      loadThread(threadId, title)
    },
    [loadThread]
  )

  const handleNewChat = useCallback(() => {
    tracking?.onNewChat?.()
    clear()
  }, [tracking, clear])

  return (
    <>
      <header
        className={cn(
          "flex justify-between px-4 py-3 w-full overflow-hidden gap-3"
        )}
      >
        <div className="flex min-w-0 flex-1 items-center">
          {!lockVisualizationMode && (
            <Action
              variant="ghost"
              size="md"
              className="min-w-0 max-w-full [&>div>span>span]:w-full"
              onClick={() => setIsHistoryOpen(true)}
            >
              <div className="flex min-w-0 items-center gap-1">
                <OneEllipsis lines={1} className="min-w-0 text-left">
                  {currentThreadTitle ?? translations.ai.newConversation}
                </OneEllipsis>
                <F0Icon icon={ChevronDown} color="default" size="md" />
              </div>
            </Action>
          )}
        </div>
        <motion.div className="flex shrink-0 items-center" {...props}>
          {!lockVisualizationMode && !isSmallScreen && (
            <ButtonInternal
              variant="ghost"
              hideLabel
              label={
                fullscreen
                  ? translations.ai.collapseChat
                  : translations.ai.expandChat
              }
              icon={fullscreen ? Minimize : Maximize}
              onClick={() =>
                setVisualizationMode((prev) =>
                  prev === "fullscreen" ? "sidepanel" : "fullscreen"
                )
              }
            />
          )}
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={translations.ai.closeChat}
            icon={Cross}
            onClick={handleClose}
          />
        </motion.div>
      </header>
      {isHistoryOpen && (
        <ChatHistoryDialog
          onClose={() => setIsHistoryOpen(false)}
          onSelectThread={handleSelectThread}
          onNewChat={handleNewChat}
        />
      )}
    </>
  )
}

const ChatHeaderLegacy = (props: HeaderProps) => {
  const { labels } = useChatContext()
  const { messages } = useCopilotChatInternal()
  const {
    setOpen,
    clear,
    visualizationMode,
    setVisualizationMode,
    lockVisualizationMode,
    tracking,
  } = useAiChat()
  const fullscreen = visualizationMode === "fullscreen"
  const translations = useI18n()
  const hasDefaultTitle = labels.title === "CopilotKit"
  const hasMessages = messages.length > 0
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })

  const handleClose = useCallback(() => {
    if (fullscreen) {
      setVisualizationMode("sidepanel")
      setTimeout(() => setOpen(false), 200)
    } else {
      setOpen(false)
    }
    tracking?.onClose?.()
  }, [fullscreen, setVisualizationMode, setOpen])

  return (
    <header className={cn("flex justify-between px-4 py-3")}>
      <div className="flex items-center">
        <h2 className="text-f1-foreground">
          {hasDefaultTitle ? "" : labels.title}
        </h2>
      </div>
      <motion.div className="flex items-center" {...props}>
        {hasMessages && !lockVisualizationMode && (
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={translations.ai.startNewChat}
            icon={New}
            onClick={() => {
              tracking?.onNewChat?.()
              clear()
            }}
          />
        )}
        {!lockVisualizationMode && !isSmallScreen && (
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={
              fullscreen
                ? translations.ai.collapseChat
                : translations.ai.expandChat
            }
            icon={fullscreen ? Minimize : Maximize}
            onClick={() =>
              setVisualizationMode((prev) =>
                prev === "fullscreen" ? "sidepanel" : "fullscreen"
              )
            }
          />
        )}
        <ButtonInternal
          variant="ghost"
          hideLabel
          label={translations.ai.closeChat}
          icon={Cross}
          onClick={handleClose}
        />
      </motion.div>
    </header>
  )
}
