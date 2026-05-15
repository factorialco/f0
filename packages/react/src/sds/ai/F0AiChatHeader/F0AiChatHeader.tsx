import { breakpoints } from "@factorialco/f0-core"
import { motion } from "motion/react"
import { useMediaQuery } from "usehooks-ts"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { New } from "@/icons/app"
import ChevronDown from "@/icons/app/ChevronDown"
import Cross from "@/icons/app/Cross"
import Maximize from "@/icons/app/Maximize"
import Minimize from "@/icons/app/Minimize"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"

import { CreditsPopover } from "./components/CreditsPopover"
import type { F0AiChatHeaderProps } from "./types"

/**
 * Headless chat header. Renders a top bar with title (or thread selector),
 * credits popover, fullscreen toggle and close button. Has two visual
 * variants:
 * - with-history: title acts as a thread selector (clickable) — the host
 *   wires `onOpenHistory` to mount its own history dialog.
 * - legacy: title is static; a "new chat" button is shown when `hasMessages`.
 *
 * Decoupled from CopilotKit and `useAiChat()` — everything via props.
 */
export const F0AiChatHeader = ({
  historyEnabled = false,
  title,
  currentThreadTitle,
  fullscreen = false,
  lockVisualizationMode = false,
  onToggleVisualizationMode,
  onClose,
  onNewChat,
  onOpenHistory,
  hasMessages = false,
  credits,
}: F0AiChatHeaderProps) => {
  const translations = useI18n()
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoints.md}px)`, {
    initializeWithValue: true,
  })

  const expandButton = !lockVisualizationMode && !isSmallScreen && (
    <ButtonInternal
      variant="ghost"
      hideLabel
      label={
        fullscreen ? translations.ai.collapseChat : translations.ai.expandChat
      }
      icon={fullscreen ? Minimize : Maximize}
      onClick={onToggleVisualizationMode}
    />
  )

  const closeButton = (
    <ButtonInternal
      variant="ghost"
      hideLabel
      label={translations.ai.closeChat}
      icon={Cross}
      onClick={onClose}
    />
  )

  if (historyEnabled) {
    return (
      <header
        className={cn(
          "flex justify-between pl-2.5 pr-3 py-3 w-full overflow-hidden gap-3"
        )}
      >
        <div className="flex min-w-0 flex-1 items-center">
          {!lockVisualizationMode && (
            <Action
              variant="ghost"
              size="md"
              className="min-w-0 max-w-full [&>div>span>span]:w-full"
              onClick={onOpenHistory}
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
        <motion.div
          className="flex shrink-0 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <CreditsPopover credits={credits} />
          {expandButton}
          {closeButton}
        </motion.div>
      </header>
    )
  }

  return (
    <header className={cn("flex justify-between px-4 py-3")}>
      <div className="flex items-center">
        <h2 className="text-f1-foreground">{title ?? ""}</h2>
      </div>
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {hasMessages && !lockVisualizationMode && (
          <ButtonInternal
            variant="ghost"
            hideLabel
            label={translations.ai.startNewChat}
            icon={New}
            onClick={onNewChat}
          />
        )}
        <CreditsPopover credits={credits} />
        {expandButton}
        {closeButton}
      </motion.div>
    </header>
  )
}
