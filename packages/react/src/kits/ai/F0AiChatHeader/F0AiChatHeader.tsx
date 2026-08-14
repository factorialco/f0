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
import { useReducedMotion } from "@/lib/a11y"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Action } from "@/ui/Action"

import type { F0AiChatHeaderProps } from "./types"

/**
 * Headless chat header. Renders a top bar with title (or thread selector),
 * fullscreen toggle and close button. Has two visual
 * variants:
 * - with-history: title acts as a thread selector (clickable) — the host
 *   wires `onOpenHistory` to mount its own history dialog.
 * - legacy: title is static; a "new chat" button is shown when `hasMessages`.
 * Hosts can add header actions that F0 renders alongside the built-in controls.
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
  compact = false,
  actions,
}: F0AiChatHeaderProps) => {
  const translations = useI18n()
  const shouldReduceMotion = useReducedMotion()
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

  const actionButtons = actions?.map((action) => (
    <ButtonInternal
      key={action.id}
      variant="ghost"
      hideLabel
      label={action.label}
      icon={action.icon}
      type="button"
      onClick={action.onClick}
    />
  ))

  // Compact: the chat is hosted next to a sidebar that owns navigation (history,
  // new chat), so the header keeps only the conversation title (plain text —
  // the thread title, or "New chat") plus the header actions, expand + close
  // controls.
  if (compact) {
    return (
      <header
        className={cn("flex items-center justify-between gap-3 pr-4 pl-5 py-3")}
      >
        <OneEllipsis
          lines={1}
          className="min-w-0 flex-1 text-left font-semibold text-f1-foreground"
        >
          {currentThreadTitle ?? translations.ai.newConversation}
        </OneEllipsis>
        <motion.div
          className="flex shrink-0 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
        >
          {actionButtons}
          {expandButton}
          {closeButton}
        </motion.div>
      </header>
    )
  }

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
          transition={{
            duration: shouldReduceMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
        >
          {actionButtons}
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
        transition={{
          duration: shouldReduceMotion ? 0 : 0.2,
          ease: "easeOut",
        }}
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
        {actionButtons}
        {expandButton}
        {closeButton}
      </motion.div>
    </header>
  )
}
