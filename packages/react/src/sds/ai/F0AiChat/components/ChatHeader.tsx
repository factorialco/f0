import { type HeaderProps } from "@copilotkit/react-ui"
import { motion } from "motion/react"
import { useCallback, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import ChevronDown from "@/icons/app/ChevronDown"
import Cross from "@/icons/app/Cross"
import Maximize from "@/icons/app/Maximize"
import Minimize from "@/icons/app/Minimize"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"

import { useAiChat } from "../providers/AiChatStateProvider"
import { ChatHistoryDialog } from "./ChatHistoryDialog"

export const ChatHeader = (props: HeaderProps) => {
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
        className={cn("flex justify-between px-4 py-3 w-full overflow-hidden")}
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
                <F0Icon icon={ChevronDown} color="primary" size="md" />
              </div>
            </Action>
          )}
        </div>
        <motion.div className="flex shrink-0 items-center" {...props}>
          {!lockVisualizationMode && (
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
